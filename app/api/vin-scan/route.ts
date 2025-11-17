import { NextRequest, NextResponse } from 'next/server';

// Response type for VIN scanning
type VinScanResponse = {
  vin?: string;
  error?: string;
  processing_time?: number;
  cache_hit?: boolean;
}

// Enhanced VIN patterns
const VIN_PATTERNS = [
  /\b[A-HJ-NPR-Z0-9]{17}\b/,
  /[A-HJ-NPR-Z0-9]{17}/, // Without word boundary for edge cases
];

// Common OCR corrections for VIN characters
const OCR_CORRECTIONS: { [key: string]: string } = {
  'O': '0', 'o': '0',
  'I': '1', 'i': '1', 'l': '1',
  'S': '5', 's': '5',
  'Z': '2', 'z': '2',
  'B': '8', 'b': '8',
  'G': '6', 'g': '6',
};

// Simple in-memory cache for recent scans
const scanCache = new Map<string, { vin: string; timestamp: number }>();
const CACHE_TTL = 10000; // 10 seconds

function cleanupCache() {
  const now = Date.now();
  for (const [key, value] of scanCache.entries()) {
    if (now - value.timestamp > CACHE_TTL) {
      scanCache.delete(key);
    }
  }
}

// Clean VIN string
function cleanVin(text: string): string {
  // Remove spaces and common separators
  let cleaned = text.toUpperCase().replace(/[\s\-_\.]/g, '');
  
  // Apply OCR corrections
  for (const [wrong, correct] of Object.entries(OCR_CORRECTIONS)) {
    cleaned = cleaned.replace(new RegExp(wrong, 'g'), correct);
  }
  
  return cleaned;
}

// Extract VIN from text
function extractVin(text: string): string | null {
  // Clean the text first
  const cleanedText = cleanVin(text);
  
  // Try to find VIN patterns
  for (const pattern of VIN_PATTERNS) {
    const match = cleanedText.match(pattern);
    if (match && match[0].length === 17) {
      // Additional validation: VINs don't contain I, O, or Q
      if (!/[IOQ]/.test(match[0])) {
        return match[0];
      }
    }
  }
  
  // Try to find any 17-character alphanumeric sequence
  const sequences = cleanedText.match(/[A-HJ-NPR-Z0-9]{17}/g);
  if (sequences) {
    for (const seq of sequences) {
      if (!/[IOQ]/.test(seq)) {
        return seq;
      }
    }
  }
  
  return null;
}

// Process image with Google Vision API
async function processWithGoogleVision(imageBuffer: Buffer): Promise<string[]> {
  try {
    // Get credentials from environment
    const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    const base64Creds = process.env.GOOGLE_CREDENTIALS_BASE64;
    const apiKey = process.env.GOOGLE_VISION_API_KEY;
    
    // If no credentials are configured, return empty array
    if (!credentialsJson && !base64Creds && !apiKey) {
      console.log('Google Vision API not configured - skipping OCR');
      return [];
    }
    
    let credentials;
    if (credentialsJson) {
      credentials = JSON.parse(credentialsJson);
    } else if (base64Creds) {
      const decoded = Buffer.from(base64Creds, 'base64').toString('utf-8');
      credentials = JSON.parse(decoded);
    }

    // For simplicity, we'll use the REST API with API key if available
    // Service account authentication would require OAuth2 implementation
    
    // Convert image to base64
    const base64Image = imageBuffer.toString('base64');
    
    // Make request to Google Vision API
    const response = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${apiKey || ''}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requests: [
            {
              image: {
                content: base64Image,
              },
              features: [
                {
                  type: 'TEXT_DETECTION',
                  maxResults: 10,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      console.error('Google Vision API error:', response.status);
      return [];
    }

    const result = await response.json();
    const textAnnotations = result.responses?.[0]?.textAnnotations || [];
    
    // Extract text from annotations
    const texts: string[] = [];
    for (const annotation of textAnnotations) {
      if (annotation.description) {
        texts.push(annotation.description);
      }
    }
    
    return texts;
  } catch (error) {
    console.error('Error with Google Vision API:', error);
    return [];
  }
}

// Fallback: Simple OCR simulation (for demo purposes)
async function processWithFallbackOCR(): Promise<string[]> {
  // In a real implementation, you might use another OCR service here
  // For now, we'll return an empty array
  console.log('Using fallback OCR (no implementation)');
  return [];
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // Clean up old cache entries
    cleanupCache();
    
    // Get form data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const qualityHint = formData.get('quality_hint') as string;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large (max 10MB)' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Create a simple hash for caching
    const cacheKey = `${file.size}-${file.name}-${qualityHint}`;
    
    // Check cache
    const cached = scanCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return NextResponse.json({
        vin: cached.vin,
        cache_hit: true,
        processing_time: Date.now() - startTime,
      });
    }

    // Process image with OCR
    let textLines: string[] = [];
    
    // Try Google Vision API if configured
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || 
        process.env.GOOGLE_CREDENTIALS_BASE64 ||
        process.env.GOOGLE_VISION_API_KEY) {
      textLines = await processWithGoogleVision(buffer);
    }
    
    // Fallback to other OCR if needed
    if (textLines.length === 0) {
      textLines = await processWithFallbackOCR();
    }
    
    // Try to extract VIN from all text
    let detectedVin: string | null = null;
    
    for (const text of textLines) {
      const vin = extractVin(text);
      if (vin) {
        detectedVin = vin;
        break;
      }
    }
    
    // If we found a VIN, cache it and return
    if (detectedVin) {
      scanCache.set(cacheKey, { vin: detectedVin, timestamp: Date.now() });
      
      return NextResponse.json({
        vin: detectedVin,
        processing_time: Date.now() - startTime,
      });
    }
    
    // No VIN found
    return NextResponse.json({
      error: 'No VIN detected in image',
      processing_time: Date.now() - startTime,
    });
    
  } catch (error) {
    console.error('Error processing VIN scan:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process image',
        processing_time: Date.now() - startTime,
      },
      { status: 500 }
    );
  }
}
