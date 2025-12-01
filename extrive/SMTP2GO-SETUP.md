# 🚀 SMTP2GO + Cloudflare Worker Setup Guide

## Step-by-Step Implementation

### ✅ **Step 1: Set Up SMTP2GO Account**

1. **Create Account:**
   - Go to [SMTP2GO](https://www.smtp2go.com/)
   - Sign up with `info@extriveinnovations.com`
   - Verify your email

2. **Add Sender Domain:**
   - Settings → Sender Domains
   - Add: `extriveinnovations.com`
   - Follow verification steps

3. **Get API Key:**
   - You already have: `api-519E873AF2A14B58826E02D815A35BFA`
   - This should be set up in your SMTP2GO account

### ✅ **Step 2: Deploy Cloudflare Worker**

1. **Go to Cloudflare Dashboard:**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com/)
   - Workers & Pages → Create Application → Create Worker

2. **Name Your Worker:**
   - Name: `extrive-api`
   - Click "Create Worker"

3. **Copy Worker Code:**
   - Copy ALL content from `cloudflare-worker.js`
   - Paste into the Cloudflare editor
   - Click "Save and Deploy"

4. **Set Environment Variables:**
   - In worker dashboard: Settings → Environment Variables
   - Add these variables:
   ```
   GMAIL_USER = extriveinnovations.com@gmail.com
   TO_EMAIL = info@extriveinnovations.com
   SMTP2GO_API_KEY = api-519E873AF2A14B58826E02D815A35BFA
   ```

5. **Copy Worker URL:**
   - Your URL will be: `https://extrive-api.YOUR-SUBDOMAIN.workers.dev`
   - **Save this URL** - you'll need it for the frontend!

### ✅ **Step 3: Update Frontend**

1. **Open `DemoForm.tsx`**
2. **Find this line:**
   ```javascript
   const response = await fetch('https://your-worker-name.your-subdomain.workers.dev/api/demo-request', {
   ```

3. **Replace with your actual worker URL:**
   ```javascript
   const response = await fetch('https://extrive-api.YOUR-SUBDOMAIN.workers.dev/api/demo-request', {
   ```

### ✅ **Step 4: Deploy Frontend to Cloudflare Pages**

1. **In Cloudflare Dashboard:**
   - Workers & Pages → Create Application → Pages
   - Connect to Git → Select your repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (or your frontend folder)

3. **Deploy:**
   - Click "Save and Deploy"
   - Wait for deployment to complete

### ✅ **Step 5: Test Everything**

1. **Test Worker Directly:**
   - Visit: `https://extrive-api.YOUR-SUBDOMAIN.workers.dev/`
   - Should show API info

2. **Test Demo Form:**
   - Go to your live site
   - Fill out demo form
   - Submit and check:
     - ✅ Success message appears
     - ✅ You receive email at `info@extriveinnovations.com`
     - ✅ Customer receives confirmation email

## 🔧 **Troubleshooting**

### Problem: "Worker not found"
- **Solution:** Check your worker URL is correct
- Make sure worker is deployed

### Problem: "Email not sent"
- **Solution:** Check SMTP2GO API key
- Verify sender domain in SMTP2GO
- Check environment variables in worker

### Problem: "CORS error"
- **Solution:** Worker handles CORS automatically
- Make sure you're using the worker URL, not localhost

## 📋 **Quick Checklist**

- [ ] SMTP2GO account created
- [ ] API key obtained
- [ ] Sender domain verified
- [ ] Cloudflare Worker deployed
- [ ] Environment variables set
- [ ] Frontend updated with worker URL
- [ ] Site deployed to Cloudflare Pages
- [ ] Form tested and working

## 🎯 **What You Get:**

✅ **Professional Email System**
- You receive formatted demo requests
- Customers get confirmation emails
- No more CORS errors

✅ **Scalable Solution**
- Handles traffic spikes
- Global edge deployment
- 1000 free emails/month

✅ **Professional Branding**
- Custom email templates
- Company branding
- Professional reply-to addresses

---

**Need help?** Check that all environment variables are set correctly and that your SMTP2GO sender domain is verified!
