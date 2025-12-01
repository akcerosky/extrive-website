// Updated Cloudflare Worker for Extrive Innovations
// Environment Variables Required:
// GMAIL_USER = extriveinnovations.com@gmail.com
// TO_EMAIL = info@extriveinnovations.com  
// SMTP2GO_API_KEY = api-519E873AF2A14B58826E02D815A35BFA

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Health check endpoint
    if (request.method === 'GET' && request.url.includes('/api/health')) {
      return new Response(JSON.stringify({
        status: 'healthy',
        service: 'Extrive Innovations API',
        timestamp: new Date().toISOString()
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }

    // Root endpoint info
    if (request.method === 'GET' && !request.url.includes('/api/')) {
      return new Response(JSON.stringify({
        message: 'Extrive Innovations API Worker',
        version: '1.0.0',
        endpoints: [
          'GET /api/health - Health check',
          'POST /api/demo-request - Submit demo request'
        ]
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }

    // Only allow POST requests to /api/demo-request
    if (request.method !== 'POST' || !request.url.includes('/api/demo-request')) {
      return new Response(JSON.stringify({
        error: 'Endpoint not found'
      }), { 
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }

    try {
      // Parse the form data
      const formData = await request.json();
      const { name, organization, workSector, email, numberOfWorkers, challenge } = formData;

      // Basic validation
      if (!name || !organization || !workSector || !email) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Missing required fields: name, organization, workSector, and email are required'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid email format'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
      }

      // Send email using SMTP2GO
      const emailData = {
        from: env.GMAIL_USER || 'extriveinnovations.com@gmail.com',
        to: env.TO_EMAIL || 'info@extriveinnovations.com',
        customerEmail: email,
        formData: formData,
        subject: `🔥 New Demo Request from ${name} - ${organization}`,
        html: generateEmailHTML(formData),
        text: generateEmailText(formData)
      };

      // Send internal email notification
      const emailResponse = await sendEmail(emailData, env);

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error('SMTP2GO Error:', errorText);
        throw new Error('Failed to send email via SMTP2GO');
      }

      return new Response(JSON.stringify({
        success: true,
        message: 'Demo request submitted successfully! Check your email for confirmation.'
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });

    } catch (error) {
      console.error('Error processing demo request:', error);
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to send demo request. Please try again later.'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }
  },
};

// Function to send email using SMTP2GO
async function sendEmail(emailData, env) {
  const apiKey = env.SMTP2GO_API_KEY || 'api-519E873AF2A14B58826E02D815A35BFA';
  
  // Send internal notification email
  const internalResponse = await fetch('https://api.smtp2go.com/v3/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Smtp2go-Api-Key': apiKey,
    },
    body: JSON.stringify({
      to: [emailData.to],
      from: emailData.from,
      subject: emailData.subject,
      html_body: emailData.html,
      text_body: emailData.text,
      custom_headers: [
        {
          header: 'Reply-To',
          value: emailData.customerEmail
        }
      ]
    }),
  });

  // Send confirmation email to customer
  if (internalResponse.ok) {
    await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': apiKey,
      },
      body: JSON.stringify({
        to: [emailData.customerEmail],
        from: emailData.from,
        subject: `Thank you for your interest in Extrive Innovations - Demo Request Received`,
        html_body: generateCustomerConfirmationHTML(emailData.formData),
        text_body: generateCustomerConfirmationText(emailData.formData),
      }),
    });
  }

  return internalResponse;
}

// Generate HTML email template for internal notification
function generateEmailHTML(formData) {
  const { name, organization, workSector, email, numberOfWorkers, challenge } = formData;
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #f97316, #3b82f6); padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; text-align: center;">New Demo Request</h1>
        <p style="color: white; margin: 5px 0 0 0; text-align: center;">Extrive Innovations Website</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #333; margin-top: 0;">Customer Details</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background: white;">
            <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd; width: 30%;">Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Organization</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${organization}</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Work Sector</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${workSector}</td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Email</td>
            <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Number of Workers</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${numberOfWorkers || 'Not specified'}</td>
          </tr>
        </table>

        ${challenge ? `
          <h3 style="color: #333; margin-top: 30px;">Workplace Challenge</h3>
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #f97316;">
            <p style="margin: 0; line-height: 1.6;">${challenge}</p>
          </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #3b82f6, #f97316); border-radius: 8px; text-align: center;">
          <p style="color: white; margin: 0; font-weight: bold;">⏰ Follow up within 24 hours</p>
          <p style="color: white; margin: 5px 0 0 0; font-size: 14px;">Request submitted on ${new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })} IST</p>
        </div>
      </div>
    </div>
  `;
}

// Generate text email version for internal notification
function generateEmailText(formData) {
  const { name, organization, workSector, email, numberOfWorkers, challenge } = formData;
  
  return `
New Demo Request from Extrive Innovations Website

Customer Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Organization: ${organization}
Work Sector: ${workSector}
Email: ${email}
Number of Workers: ${numberOfWorkers || 'Not specified'}

Challenge:
${challenge || 'Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This request was submitted on ${new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })} IST.

Please follow up with the customer within 24 hours.
  `;
}

// Generate customer confirmation HTML email
function generateCustomerConfirmationHTML(formData) {
  const { name } = formData;
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #f97316, #3b82f6); padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; text-align: center;">Thank You, ${name}!</h1>
        <p style="color: white; margin: 5px 0 0 0; text-align: center;">Your demo request has been received</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          We're excited about your interest in our <strong>Kanglei BackEX</strong> industrial exosuit technology!
        </p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          Our team will review your request and get back to you within <strong>24 hours</strong> to schedule a personalized demonstration.
        </p>

        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f97316;">
          <h3 style="margin-top: 0; color: #333;">What happens next?</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Our team will contact you to understand your specific needs</li>
            <li>We'll schedule a convenient time for your demo</li>
            <li>You'll see firsthand how BackEX can transform your workplace</li>
            <li>We'll discuss implementation and ROI projections</li>
          </ul>
        </div>

        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          In the meantime, feel free to explore our website or contact us directly at <a href="mailto:info@extriveinnovations.com" style="color: #f97316;">info@extriveinnovations.com</a> if you have any immediate questions.
        </p>

        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #666; margin: 0;">Best regards,</p>
          <p style="color: #333; font-weight: bold; margin: 5px 0;">The Extrive Innovations Team</p>
          <p style="color: #f97316; font-weight: bold; margin: 0;">Empowering Motion. Enhancing Lives.</p>
        </div>
      </div>
    </div>
  `;
}

// Generate customer confirmation text email
function generateCustomerConfirmationText(formData) {
  const { name } = formData;
  
  return `
Thank You, ${name}!

Your demo request for Kanglei BackEX has been received successfully.

We're excited about your interest in our industrial exosuit technology! Our team will review your request and get back to you within 24 hours to schedule a personalized demonstration.

What happens next?
• Our team will contact you to understand your specific needs
• We'll schedule a convenient time for your demo
• You'll see firsthand how BackEX can transform your workplace
• We'll discuss implementation and ROI projections

In the meantime, feel free to explore our website or contact us directly at info@extriveinnovations.com if you have any immediate questions.

Best regards,
The Extrive Innovations Team
Empowering Motion. Enhancing Lives.
  `;
}
