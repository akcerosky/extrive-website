# Cloudflare Deployment Guide for Extrive Innovations

## 🚀 Complete Setup for Cloudflare Pages + Workers

Since you're deploying on Cloudflare, here's the complete solution to fix your CORS issue and enable email functionality.

## Step 1: Deploy Cloudflare Worker

### 1.1 Create a Cloudflare Worker
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on "Workers & Pages" in the sidebar
3. Click "Create Application" → "Create Worker"
4. Name it something like `extrive-api`
5. Copy the content from `cloudflare-worker.js` into the worker editor
6. Click "Save and Deploy"

### 1.2 Set Environment Variables in Worker
In your Cloudflare Worker dashboard:
1. Go to Settings → Environment Variables
2. Add these variables:

```
GMAIL_USER = zssain2810@gmail.com
TO_EMAIL = zssain2810@gmail.com
SMTP2GO_API_KEY = [Get this from SMTP2GO - see below]
```

## Step 2: Set Up Email Service (SMTP2GO)

Since Cloudflare Workers can't directly use Gmail SMTP, we'll use SMTP2GO (free tier: 1000 emails/month):

### 2.1 Create SMTP2GO Account
1. Go to [SMTP2GO](https://www.smtp2go.com/)
2. Sign up for a free account
3. Verify your email address

### 2.2 Get API Key
1. In SMTP2GO dashboard, go to Settings → API Keys
2. Click "Create API Key"
3. Copy the API key
4. Add it to your Cloudflare Worker environment variables as `SMTP2GO_API_KEY`

### 2.3 Add Sender Email
1. In SMTP2GO, go to Settings → Sender Domains
2. Add `zssain2810@gmail.com` as a verified sender
3. Follow their verification process

## Step 3: Update Frontend Code

### 3.1 Update DemoForm.tsx
Replace the fetch URL in your `DemoForm.tsx`:

```javascript
// Replace this line:
const response = await fetch('https://your-worker-name.your-subdomain.workers.dev/api/demo-request', {

// With your actual Cloudflare Worker URL:
const response = await fetch('https://extrive-api.YOUR-SUBDOMAIN.workers.dev/api/demo-request', {
```

**Note**: Replace `YOUR-SUBDOMAIN` with your actual Cloudflare subdomain.

### 3.2 Deploy Frontend to Cloudflare Pages
1. In Cloudflare Dashboard, go to "Workers & Pages"
2. Click "Create Application" → "Pages" → "Connect to Git"
3. Connect your GitHub repository
4. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (or wherever your frontend code is)

## Step 4: Alternative Email Solutions

### Option A: EmailJS (Easier Setup)
If SMTP2GO doesn't work, use EmailJS:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service (Gmail)
3. Create email template
4. Use their JavaScript SDK directly in frontend

### Option B: Resend (Modern Alternative)
1. Sign up at [Resend](https://resend.com/)
2. Get API key
3. Use their simple API

### Option C: Simple Contact Form Services
- **Formspree**: Just point form to their endpoint
- **Netlify Forms**: If you switch to Netlify
- **Getform**: Simple form backend

## Step 5: Test the Setup

### 5.1 Test Worker Endpoint
Visit your worker URL directly:
```
https://extrive-api.YOUR-SUBDOMAIN.workers.dev/
```

### 5.2 Test Demo Form
1. Go to your deployed Cloudflare Pages site
2. Fill out the demo form
3. Submit and check for:
   - Success message on frontend
   - Email received at `zssain2810@gmail.com`

## Step 6: Custom Domain (Optional)

### 6.1 For Worker API
1. In Worker settings, go to "Triggers"
2. Add custom domain like `api.extrive.com`

### 6.2 For Frontend
1. In Pages settings, add custom domain
2. Update Worker CORS settings to allow your domain

## Quick Fix Alternative

If you want the **fastest solution** right now:

### Use Formspree (5 minutes setup):
1. Go to [Formspree](https://formspree.io/)
2. Create free account
3. Create new form, get endpoint URL
4. Update your `DemoForm.tsx`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR-FORM-ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
});
```

## Files You Need to Update

1. **Frontend**: Update the API URL in `DemoForm.tsx`
2. **Worker**: Deploy the `cloudflare-worker.js` code
3. **Environment**: Set up email service credentials

## What Email Service Do You Prefer?

Choose one:
- ✅ **SMTP2GO** (Free, 1000 emails/month, proper SMTP)
- ✅ **Formspree** (Easiest, no coding needed)
- ✅ **EmailJS** (Frontend-only solution)
- ✅ **Resend** (Modern, developer-friendly)

Let me know which one you'd like to use, and I'll provide the specific implementation!
