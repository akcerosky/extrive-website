#!/bin/bash

# Extrive Innovations - Cloudflare Deployment Script

echo "🚀 Deploying Extrive Innovations to Cloudflare..."
echo "=================================================="

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI not found. Installing..."
    npm install -g wrangler
fi

# Check if user is logged in to Cloudflare
echo "🔐 Checking Cloudflare authentication..."
if ! wrangler whoami &> /dev/null; then
    echo "Please login to Cloudflare:"
    wrangler login
fi

# Deploy the worker
echo "📡 Deploying Cloudflare Worker..."
wrangler deploy

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "✅ Worker deployed successfully!"
    echo ""
    echo "🔧 Next steps:"
    echo "1. Set your environment variables in Cloudflare dashboard:"
    echo "   - EMAIL_USER = extriveinnovations.com@gmail.com"
    echo "   - TO_EMAIL = info@extriveinnovations.com"
    echo "   - CC_EMAIL = extriveinnovations.com@gmail.com"
    echo "   - SMTP2GO_API_KEY = your-smtp2go-api-key"
    echo ""
    echo "2. Update the API URL in src/config/api.ts with your worker URL"
    echo "3. Build and deploy your frontend to Cloudflare Pages"
    echo ""
    echo "📖 See CLOUDFLARE_DEPLOYMENT.md for detailed instructions"
else
    echo "❌ Deployment failed. Please check the error messages above."
fi
