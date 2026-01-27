#!/bin/bash

# ConvertIQ Deployment Script
# Usage: ./deploy.sh [--github]

set -e

echo "🚀 Deploying ConvertIQ to Cloudflare Pages..."

# Check for output directory
if [ ! -d ".vercel/output/static" ]; then
    echo "❌ Build output not found. Run 'npm run build' first."
    exit 1
fi

# Check for Cloudflare token
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "⚠️  CLOUDFLARE_API_TOKEN not set."
    echo ""
    echo "To deploy to Cloudflare Pages:"
    echo ""
    echo "Option 1 - Direct Upload:"
    echo "  1. Go to https://dash.cloudflare.com/pages"
    echo "  2. Click 'Create a project' > 'Direct Upload'"
    echo "  3. Drag and drop the .vercel/output/static folder"
    echo ""
    echo "Option 2 - GitHub Integration (Recommended):"
    echo "  1. Push this repo to GitHub"
    echo "  2. Go to https://dash.cloudflare.com/pages"
    echo "  3. Click 'Create a project' > 'Connect to Git'"
    echo "  4. Select your repo"
    echo "  5. Auto-deploy on every push!"
    echo ""
    echo "Option 3 - CLI (requires API token):"
    echo "  export CLOUDFLARE_API_TOKEN='your-token'"
    echo "  npx wrangler pages deploy .vercel/output/static --project-name=convertiq"
    exit 1
fi

# Deploy via Wrangler
echo "📦 Uploading to Cloudflare Pages..."
npx wrangler pages deploy .vercel/output/static --project-name=convertiq --commit-message="Deploy ConvertIQ"

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://convertiq.pages.dev"
