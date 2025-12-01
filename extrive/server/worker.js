export default {
  async fetch(request, env, ctx) {
    const allowedOrigins = [
      'https://extriveinnovations.com',
      'https://www.extriveinnovations.com',
      'https://extrivefrontend.pages.dev'
    ];

    const originHeader = request.headers.get('Origin');
    const allowOrigin = allowedOrigins.includes(originHeader)
      ? originHeader
      : 'https://extriveinnovations.com';

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': allowOrigin,
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400'
        }
      });
    }

    // Health check endpoint
    if (request.method === 'GET' && request.url.includes('/api/health')) {
      return new Response(JSON.stringify({
        status: 'healthy',
        service: 'Extrive Innovations API',
        timestamp: new Date().toISOString(),
        environment: env.NODE_ENV || 'production'
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': allowOrigin
        }
      });
    }

    // Demo request submission endpoint
    if (request.method === 'POST' && request.url.includes('/api/demo-request')) {
      try {
        const requestData = await request.json();
        const { name, organization, workSector, email, numberOfWorkers, challenge } = requestData;

        if (!name || !organization || !workSector || !email) {
          return new Response(JSON.stringify({
            success: false,
            error: 'Missing required fields: name, organization, workSector, and email are required'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': allowOrigin
            }
          });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return new Response(JSON.stringify({
            success: false,
            error: 'Please provide a valid email address'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': allowOrigin
            }
          });
        }

        const emailResults = await Promise.all([
          sendEmailToCompany(env, { name, organization, workSector, email, numberOfWorkers, challenge }),
          sendConfirmationEmail(env, { name, email, organization })
        ]);

        const allEmailsSent = emailResults.every(result => result.success);

        if (allEmailsSent) {
          return new Response(JSON.stringify({
            success: true,
            message: 'Demo request submitted successfully! Check your email for confirmation.'
          }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': allowOrigin
            }
          });
        } else {
          throw new Error('Failed to send one or more emails');
        }

      } catch (error) {
        console.error('Error processing demo request:', error);
        return new Response(JSON.stringify({
          success: false,
          error: 'Failed to process demo request. Please try again later.'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': allowOrigin
          }
        });
      }
    }

    return new Response(JSON.stringify({
      error: 'Endpoint not found',
      availableEndpoints: [
        'GET /api/health',
        'POST /api/demo-request'
      ]
    }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': allowOrigin
      }
    });
  }
};

// Function to send demo request email to company
async function sendEmailToCompany(env, { name, organization, workSector, email, numberOfWorkers, challenge }) {
  const emailData = {
    api_key: env.SMTP2GO_API_KEY,
    to: [env.TO_EMAIL],
    cc: [env.CC_EMAIL],
    sender: env.EMAIL_USER,
    subject: `🚀 New Demo Request from ${organization}`,
    html_body: `<p><strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Organization:</strong> ${organization}<br>
                <strong>Work Sector:</strong> ${workSector}<br>
                <strong>Number of Workers:</strong> ${numberOfWorkers || 'Not specified'}<br>
                <strong>Challenge:</strong> ${challenge || 'None provided'}</p>`,
    text_body: `New Demo Request from ${organization}\n\nName: ${name}\nEmail: ${email}\nWork Sector: ${workSector}\nNumber of Workers: ${numberOfWorkers}\nChallenge: ${challenge}`
  };

  try {
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();
    return { success: response.ok, result };
  } catch (error) {
    console.error('Error sending company email:', error);
    return { success: false, error: error.message };
  }
}

// Function to send confirmation email to customer
async function sendConfirmationEmail(env, { name, email, organization }) {
  const emailData = {
    api_key: env.SMTP2GO_API_KEY,
    to: [email],
    sender: env.EMAIL_USER,
    subject: `✅ Demo Request Received - Extrive Innovations`,
    html_body: `<p>Hello ${name},<br>Thank you for your interest in Extrive Innovations. We have received your request for ${organization} and will contact you soon.</p>`,
    text_body: `Hello ${name},\n\nThank you for your demo request for ${organization}. We'll contact you soon.`
  };

  try {
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();
    return { success: response.ok, result };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false, error: error.message };
  }
}
