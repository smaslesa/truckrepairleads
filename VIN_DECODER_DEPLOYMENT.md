# VIN Decoder Deployment Guide

## Pre-Deployment Checklist ✅

### 1. Environment Variables
Before deploying, ensure you have the following environment variables configured in your deployment platform (Vercel, Netlify, etc.):

#### Required for VIN Decoding:
```env
MARKETCHECK_API_KEY=your_marketcheck_api_key_here
```

#### Optional for Barcode Scanning (choose one):
```env
# Option 1: Google Vision API Key
GOOGLE_VISION_API_KEY=your_google_vision_api_key_here

# Option 2: Service Account JSON (paste entire JSON)
GOOGLE_APPLICATION_CREDENTIALS_JSON={"type":"service_account"...}

# Option 3: Base64 Encoded Credentials
GOOGLE_CREDENTIALS_BASE64=base64_encoded_credentials_here
```

## Deployment Steps

### For Vercel:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add VIN decoder functionality"
   git push origin main
   ```

2. **Configure Environment Variables in Vercel:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add the required environment variables:
     - `MARKETCHECK_API_KEY`
     - (Optional) Google Vision API credentials

3. **Deploy:**
   - Vercel will automatically deploy when you push to main
   - Or manually trigger deployment from Vercel dashboard

### For Other Platforms:

#### Netlify:
1. Go to Site Settings → Environment Variables
2. Add the required keys
3. Trigger a new deployment

#### Railway/Render:
1. Add environment variables in the dashboard
2. Deploy from GitHub

## API Key Setup

### MarketCheck API:
1. Sign up at https://www.marketcheck.com/apis
2. Get your API key from the dashboard
3. Add to environment variables

### Google Vision API (Optional - for barcode scanning):
1. Go to Google Cloud Console
2. Enable Vision API
3. Create credentials (API key or Service Account)
4. Add to environment variables

## Testing After Deployment

1. **Test Manual VIN Entry:**
   - Navigate to `/vin-decoder`
   - Enter a test VIN: `1HGBH41JXMN109186`
   - Should return Honda Civic details

2. **Test Barcode Scanner (if configured):**
   - Open on mobile device
   - Click "Scan VIN Barcode"
   - Point at a VIN barcode

## Troubleshooting

### Issue: "VIN decoder service is not configured"
**Solution:** Add `MARKETCHECK_API_KEY` to your environment variables

### Issue: Barcode scanner shows "No VIN detected"
**Solution:** 
- Check if Google Vision API credentials are configured
- Ensure the VIN barcode is clear and well-lit
- Try manual capture mode

### Issue: 404 on grid-pattern.svg
**Solution:** Already fixed - the file has been created in `/public/images/`

### Issue: Viewport metadata warnings
**Solution:** Already fixed - viewport is now a separate export

## Features Working Without API Keys

Even without API keys configured, users can:
- Access the VIN decoder page
- See the interface and instructions
- Use the manual VIN entry form (will show friendly error)
- Access the camera for scanning (won't detect VINs without OCR)

## Production Checklist

- [x] Fixed viewport metadata warnings
- [x] Created missing grid-pattern.svg
- [x] Added graceful error handling for missing API keys
- [x] All navigation links working
- [x] Mobile-responsive design
- [ ] Add MarketCheck API key to production environment
- [ ] (Optional) Add Google Vision API credentials for scanning
- [ ] Test on production after deployment

## Support

If you encounter any issues during deployment:
1. Check the deployment logs for errors
2. Verify all environment variables are set correctly
3. Ensure API keys are valid and have proper permissions
4. Test API endpoints directly: `/api/vin/decode/[VIN]`

## Security Notes

- Never commit API keys to your repository
- Use environment variables for all sensitive data
- Consider implementing rate limiting for production
- Add CORS headers if needed for your domain
