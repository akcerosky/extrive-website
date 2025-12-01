# Cloudflare Worker Deployment Script
# Save this as deploy-worker.js and run with: node deploy-worker.js

import fs from 'fs';

const workerScript = fs.readFileSync('./cloudflare-worker.js', 'utf8');

console.log('📋 Cloudflare Worker Deployment Guide');
console.log('=====================================\n');

console.log('🔧 Step 1: Copy this worker code to Cloudflare Dashboard');
console.log('🌐 Go to: https://dash.cloudflare.com/');
console.log('➡️  Workers & Pages → Create Application → Create Worker');
console.log('📝 Name: extrive-api');
console.log('📋 Copy the code from cloudflare-worker.js\n');

console.log('🔑 Step 2: Set Environment Variables in Worker:');
console.log('   GMAIL_USER = zssain2810@gmail.com');
console.log('   TO_EMAIL = zssain2810@gmail.com');
console.log('   SMTP2GO_API_KEY = [Your SMTP2GO API Key]');
console.log('');

console.log('🚀 Step 3: Deploy Worker');
console.log('💾 Click "Save and Deploy"');
console.log('📋 Copy your worker URL (something like: https://extrive-api.YOUR-SUBDOMAIN.workers.dev)');
console.log('');

console.log('✅ Step 4: Update Frontend');
console.log('📝 Replace the API URL in DemoForm.tsx with your worker URL');
console.log('');

console.log('🎯 Your Worker Code is ready in: cloudflare-worker.js');
console.log('📚 Full setup guide is in: CLOUDFLARE-SETUP.md');
