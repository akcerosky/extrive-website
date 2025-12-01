# Cloudflare Deployment Guide for Extrive Innovations

## Prerequisites

1. **Cloudflare Account** - Sign up at https://cloudflare.com
2. **GitHub Account** - For code repository
3. **SMTP2GO Account** - For email service (recommended for production)

## Step 1: Get SMTP2GO API Key (Recommended for Production)

1. Go to https://www.smtp2go.com/
2. Sign up for a free account (1000 emails/month free)
3. Go to Settings > API Keys
4. Create a new API key and copy it

## Step 2: Deploy Cloudflare Worker (Backend API)

### Option A: Using Cloudflare Dashboard (Easiest)

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Workers & Pages"

2. **Create New Worker**
   - Click "Create application"
   - Select "Create Worker"
   - Name it: `extrive-api`
   - Click "Deploy"

3. **Upload Worker Code**
   - Click "Edit code"
   - Replace all content with the code from `worker.js`
   - Click "Save and deploy"

4. **Set Environment Variables**
   - Go to Settings > Variables
   - Add these secrets:
     ```
     EMAIL_USER = extriveinnovations.com@gmail.com
     TO_EMAIL = info@extriveinnovations.com
     CC_EMAIL = extriveinnovations.com@gmail.com
     SMTP2GO_API_KEY = your-smtp2go-api-key
     ```

5. **Get Worker URL**
   - Your worker will be available at: `https://extrive-api.your-subdomain.workers.dev`
   - Test it by visiting: `https://extrive-api.your-subdomain.workers.dev/api/health`

### Option B: Using Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy Worker**
   ```bash
   wrangler deploy
   ```

4. **Set Secrets**
   ```bash
   wrangler secret put EMAIL_USER
   wrangler secret put TO_EMAIL
   wrangler secret put CC_EMAIL
   wrangler secret put SMTP2GO_API_KEY
   ```

## Step 3: Deploy Frontend to Cloudflare Pages

### Option A: GitHub Integration (Recommended)

1. **Push Code to GitHub**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/yourusername/extrive-website.git
     git push -u origin main
     ```

2. **Connect to Cloudflare Pages**
   - Go to Cloudflare Dashboard > "Workers & Pages"
   - Click "Create application" > "Pages" > "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Framework preset**: Vite
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`

3. **Set Environment Variables**
   - In build settings, add:
     ```
     NODE_ENV = production
     ```

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be available at: `https://extrive-website.pages.dev`

### Option B: Direct Upload

1. **Build Your Project**
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare Pages**
   - Go to "Workers & Pages" > "Create application" > "Pages" > "Upload assets"
   - Upload the `dist` folder
   - Your site will be deployed

## Step 4: Update API Configuration

1. **Update Frontend API URL**
   - Edit `src/config/api.ts`
   - Replace `your-subdomain` with your actual Cloudflare worker URL:
     ```typescript
     baseURL: 'https://extrive-api.your-actual-subdomain.workers.dev'
     ```

2. **Rebuild and Redeploy**
   - If using GitHub: Push changes, Pages will auto-deploy
   - If using direct upload: Run `npm run build` and upload again

## Step 5: Custom Domain (Optional)

1. **Add Custom Domain**
   - In Cloudflare Pages, go to "Custom domains"
   - Add your domain (e.g., `extriveinnovations.com`)
   - Update DNS records as instructed

2. **SSL Certificate**
   - Cloudflare automatically provides SSL certificates
   - Your site will be available at `https://yourdomain.com`

## Testing Your Deployment

1. **Test API Health**
   - Visit: `https://your-worker.workers.dev/api/health`
   - Should return: `{"status":"healthy",...}`

2. **Test Demo Form**
   - Go to your website
   - Fill out and submit the demo form
   - Check email at `info@extriveinnovations.com`

## Environment Variables Summary

### Cloudflare Worker Secrets:
- `EMAIL_USER`: extriveinnovations.com@gmail.com
- `TO_EMAIL`: info@extriveinnovations.com
- `CC_EMAIL`: extriveinnovations.com@gmail.com
- `SMTP2GO_API_KEY`: (get from SMTP2GO dashboard)

### Cloudflare Pages Environment Variables:
- `NODE_ENV`: production

## Troubleshooting

### Email Not Sending
- Check SMTP2GO dashboard for email logs
- Verify API key is correct
- Check worker logs in Cloudflare dashboard

### CORS Errors
- Worker handles CORS automatically
- Ensure frontend is using correct API URL

### Build Errors
- Check build logs in Cloudflare Pages
- Verify all dependencies are in package.json

## Cost Information

- **Cloudflare Workers**: 100,000 requests/day free
- **Cloudflare Pages**: Unlimited static hosting free
- **SMTP2GO**: 1,000 emails/month free
- **Total**: Free for moderate usage!

## Support

If you encounter issues:
1. Check Cloudflare dashboard logs
2. Test locally first
3. Verify all environment variables are set correctly
