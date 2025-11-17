#!/bin/bash

echo "🚀 Setting up BodyShopLeads with shared CDLPost database..."

# Create .env.local with shared credentials
cat > .env.local << 'EOF'
# ─────────────────────────────────────────
#    SHARED CREDENTIALS FROM CDLPOST
# ─────────────────────────────────────────

# Neon Database (Shared with CDLPost)
DATABASE_URL=postgresql://neondb_owner:npg_BhQs9FZLWl5a@ep-mute-meadow-a6r6l9l2-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require

# Google Maps API (Shared with CDLPost)
GOOGLE_MAPS_API_KEY=AIzaSyAvNWxuHEh1D87yVi4Huz9ugB5WfpeFafI

# Admin Dashboard Password
ADMIN_PASSWORD=collision2024

# ─────────────────────────────────────────
#    VIN DECODER (Add if you have these)
# ─────────────────────────────────────────
# MARKETCHECK_API_KEY=your_key_here
# GOOGLE_VISION_API_KEY=your_key_here
EOF

echo "✅ Created .env.local with shared credentials"
echo ""
echo "📊 Now let's set up the database tables..."
echo "Run this SQL in your Neon console to create the collision shops tables:"
echo ""
echo "================================================"
cat lib/db/schema.sql
echo "================================================"
echo ""
echo "🎯 Next steps:"
echo "1. Copy the SQL above and run it in your Neon console"
echo "2. Visit http://localhost:3000/admin/shops"
echo "3. Use password: collision2024"
echo "4. Click 'Check Status' to verify everything is connected"
echo "5. Start with 'Test' to scrape Las Vegas as a test"
echo ""
echo "⚠️  NOTE: The collision shops tables will be added to your existing CDLPost database"
echo "   They won't interfere with your truck stop data!"
