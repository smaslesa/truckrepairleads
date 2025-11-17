import { type NextRequest, NextResponse } from 'next/server';

// Define the structure of the data we want to return
interface DecodedVinData {
  year: number | null;
  make: string | null;
  model: string | null;
  trim: string | null;
  bodyStyle: string | null;
  engine: string | null;
  drivetrain: string | null;
  extColor: string | null;
  intColor: string | null;
  bodySubtype?: string | null;
  vehicleType?: string | null;
  transmission?: string | null;
  fuelType?: string | null;
  engineSize?: number | null;
  cylinders?: number | null;
  doors?: number | null;
  highwayMpg?: number | null;
  cityMpg?: number | null;
  madeIn?: string | null;
  overallHeight?: string | null;
  overallLength?: string | null;
  overallWidth?: string | null;
  stdSeating?: number | null;
  powertrainType?: string | null;
}

// Define the structure of the MarketCheck response
interface MarketCheckVinResponse {
  year?: number;
  make?: string;
  model?: string;
  trim?: string;
  body_type?: string;
  body_subtype?: string;
  vehicle_type?: string;
  transmission?: string;
  drivetrain?: string;
  fuel_type?: string;
  engine?: string;
  engine_size?: number;
  doors?: number;
  cylinders?: number;
  made_in?: string;
  overall_height?: string;
  overall_length?: string;
  overall_width?: string;
  std_seating?: string;
  highway_mpg?: number;
  city_mpg?: number;
  powertrain_type?: string;
  exterior_color?: string;
  interior_color?: string;
  error?: string;
}

// Validate VIN format
function isValidVin(vin: string): boolean {
  // VIN should be 17 characters, alphanumeric, excluding I, O, Q
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
  return vinRegex.test(vin.toUpperCase());
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ vin: string }> }
) {
  const params = await context.params;
  // Validate the VIN
  const vin = params.vin?.toUpperCase();
  
  if (!vin || !isValidVin(vin)) {
    console.error('Invalid VIN format:', vin);
    return NextResponse.json(
      { error: 'Invalid VIN format. VIN must be 17 characters.' },
      { status: 400 }
    );
  }

  // Get API Key
  const apiKey = process.env.MARKETCHECK_API_KEY;
  if (!apiKey) {
    console.warn("VIN Decode API: MARKETCHECK_API_KEY not configured");
    return NextResponse.json(
      { 
        error: 'VIN decoder service is not configured. Please contact support.',
        vin: vin,
        message: 'The VIN decoder API key needs to be configured in production.'
      },
      { status: 503 }
    );
  }

  // Construct URL
  const marketCheckBaseUrl = "https://mc-api.marketcheck.com";
  const marketCheckUrl = `${marketCheckBaseUrl}/v2/decode/car/${vin}/specs?api_key=${apiKey}`;
  console.log(`API: Calling MarketCheck for VIN ${vin}`);

  try {
    // Make API call
    const response = await fetch(marketCheckUrl, {
      method: 'GET',
      headers: {
        'Host': 'mc-api.marketcheck.com'
      }
    });

    // Handle errors
    if (!response.ok) {
      let errorBody = `MarketCheck API error: ${response.status} ${response.statusText}`;
      try {
        const errorJson = await response.json();
        errorBody = errorJson?.error || errorJson?.message || errorBody;
      } catch {}
      
      console.error(`MarketCheck API Error for VIN ${vin}: ${errorBody}`);
      
      if (response.status === 404) {
        return NextResponse.json(
          { error: `VIN ${vin} not found.` },
          { status: 404 }
        );
      }
      if (response.status === 401 || response.status === 403) {
        return NextResponse.json(
          { error: 'API authentication failed.' },
          { status: 401 }
        );
      }
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'API rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      
      return NextResponse.json(
        { error: `VIN Decode Failed: ${errorBody}` },
        { status: 502 }
      );
    }

    // Parse JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error(`MarketCheck returned non-JSON response for VIN ${vin}. Type: ${contentType}`);
      return NextResponse.json(
        { error: 'Invalid response format from API.' },
        { status: 502 }
      );
    }
    
    const marketcheckData: MarketCheckVinResponse = await response.json();

    if (marketcheckData.error) {
      console.warn(`MarketCheck error for VIN ${vin}: ${marketcheckData.error}`);
      return NextResponse.json(
        { error: `Decode Error: ${marketcheckData.error}` },
        { status: 400 }
      );
    }

    // Map fields to our format
    const decodedData: DecodedVinData = {
      year: marketcheckData.year ?? null,
      make: marketcheckData.make ?? null,
      model: marketcheckData.model ?? null,
      trim: marketcheckData.trim ?? null,
      bodyStyle: marketcheckData.body_type ?? null,
      engine: marketcheckData.engine ?? null,
      drivetrain: marketcheckData.drivetrain ?? null,
      extColor: marketcheckData.exterior_color ?? null,
      intColor: marketcheckData.interior_color ?? null,
      bodySubtype: marketcheckData.body_subtype ?? null,
      vehicleType: marketcheckData.vehicle_type ?? null,
      transmission: marketcheckData.transmission ?? null,
      fuelType: marketcheckData.fuel_type ?? null,
      engineSize: marketcheckData.engine_size ?? null,
      cylinders: marketcheckData.cylinders ?? null,
      doors: marketcheckData.doors ?? null,
      highwayMpg: marketcheckData.highway_mpg ?? null,
      cityMpg: marketcheckData.city_mpg ?? null,
      madeIn: marketcheckData.made_in ?? null,
      overallHeight: marketcheckData.overall_height ?? null,
      overallLength: marketcheckData.overall_length ?? null,
      overallWidth: marketcheckData.overall_width ?? null,
      stdSeating: marketcheckData.std_seating ? parseInt(marketcheckData.std_seating, 10) : null,
      powertrainType: marketcheckData.powertrain_type ?? null,
    };

    // Filter out null values
    const filteredDecodedData = Object.fromEntries(
      Object.entries(decodedData).filter(([, v]) => v != null && String(v).trim() !== '')
    );

    console.log(`API: Successfully decoded VIN ${vin}. Found ${Object.keys(filteredDecodedData).length} fields.`);
    
    return NextResponse.json(filteredDecodedData, { status: 200 });

  } catch (error: unknown) {
    console.error(`API Error decoding VIN ${vin}:`, error);
    const errorMessage = (error instanceof Error) ? error.message : 'Unexpected error occurred.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
