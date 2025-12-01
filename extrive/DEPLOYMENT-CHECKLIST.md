# ✅ Quick Deployment Checklist - Extrive Innovations

## 🔧 Your Credentials (Ready to Use)

### **Gmail SMTP (Node.js Backend):**
- **Gmail User:** `extriveinnovations.com@gmail.com`
- **App Password:** `rlsf oxpd jflf yqib`

### **SMTP2GO (Cloudflare Worker):**
- **API Key:** `api-519E873AF2A14B58826E02D815A35BFA`
- **From Email:** `extriveinnovations.com@gmail.com`
- **To Email:** `info@extriveinnovations.com`

---

## 🚀 Option 1: Cloudflare Worker (Recommended for Production)

### ✅ Step 1: Deploy Worker
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Workers & Pages → Create Application → Create Worker
3. Name: `extrive-api`
4. Copy code from `cloudflare-worker-updated.js`
5. Save and Deploy

### ✅ Step 2: Set Environment Variables
In worker settings → Environment Variables:
```
GMAIL_USER = extriveinnovations.com@gmail.com
TO_EMAIL = info@extriveinnovations.com
SMTP2GO_API_KEY = api-519E873AF2A14B58826E02D815A35BFA
```

### ✅ Step 3: Update Frontend
Replace the API URL in `DemoForm.tsx`:
```javascript
const response = await fetch('https://extrive-api.YOUR-SUBDOMAIN.workers.dev/api/demo-request', {
```

### ✅ Step 4: Test
- Visit: `https://extrive-api.YOUR-SUBDOMAIN.workers.dev/api/health`
- Submit demo form
- Check emails arrive at `info@extriveinnovations.com`

---

## 🛠️ Option 2: Node.js Backend (Local/VPS)

### ✅ Step 1: Start Backend
```bash
cd server
npm install
npm start
```

### ✅ Step 2: Update Frontend (for local testing)
```javascript
const response = await fetch('http://localhost:3001/api/demo-request', {
```

### ✅ Step 3: Test
- Visit: `http://localhost:3001/api/health`
- Submit demo form
- Check emails arrive at `info@extriveinnovations.com`

---

## 📧 What You'll Receive

### **Internal Email (to info@extriveinnovations.com):**
- Customer details in professional format
- Contact information
- Workplace challenges
- Time stamp with follow-up reminder

### **Customer Confirmation (to their email):**
- Thank you message
- Next steps explanation
- Professional Extrive branding
- Contact information for questions

---

## 🔍 Troubleshooting

### **"Worker not found"**
- Check worker URL is correct
- Ensure worker is deployed

### **"Email not sent"**
- Verify SMTP2GO API key: `api-519E873AF2A14B58826E02D815A35BFA`
- Check environment variables are set
- Verify sender domain in SMTP2GO

### **"CORS error"**
- Use worker URL, not localhost
- Check worker handles CORS automatically

---

## 🎯 Ready to Deploy?

**For Production (Cloudflare):** Use `cloudflare-worker-updated.js`
**For Testing (Local):** Use the Node.js server in `/server`

**All your credentials are already configured and ready to use!** 🚀
