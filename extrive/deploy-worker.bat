@echo off
echo 🚀 Deploying Extrive Innovations to Cloudflare...
echo ==================================================

REM Check if wrangler is installed
where wrangler >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Wrangler CLI not found. Installing...
    npm install -g wrangler
)

REM Deploy the worker
echo 📡 Deploying Cloudflare Worker...
wrangler deploy

if %errorlevel% equ 0 (
    echo ✅ Worker deployed successfully!
    echo.
    echo 🔧 Next steps:
    echo 1. Set your environment variables in Cloudflare dashboard:
    echo    - EMAIL_USER = extriveinnovations.com@gmail.com
    echo    - TO_EMAIL = info@extriveinnovations.com
    echo    - CC_EMAIL = extriveinnovations.com@gmail.com
    echo    - SMTP2GO_API_KEY = your-smtp2go-api-key
    echo.
    echo 2. Update the API URL in src/config/api.ts with your worker URL
    echo 3. Build and deploy your frontend to Cloudflare Pages
    echo.
    echo 📖 See CLOUDFLARE_DEPLOYMENT.md for detailed instructions
) else (
    echo ❌ Deployment failed. Please check the error messages above.
)

pause
