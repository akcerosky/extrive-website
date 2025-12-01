// Updated DemoForm.tsx - Replace the handleSubmit function with this:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // Show loading state
    toast.loading('Sending your demo request...');

    // 🔧 REPLACE THIS URL WITH YOUR ACTUAL CLOUDFLARE WORKER URL
    // After you deploy your worker, replace 'YOUR-SUBDOMAIN' with your actual subdomain
    const response = await fetch('https://extrive-api.YOUR-SUBDOMAIN.workers.dev/api/demo-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      toast.success(data.message || 'Demo request sent successfully! Check your email for confirmation.');
      setFormData({
        name: '',
        organization: '',
        workSector: '',
        email: '',
        numberOfWorkers: '',
        challenge: ''
      });
    } else {
      toast.error(data.error || 'Failed to send demo request. Please try again.');
    }
  } catch (error) {
    console.error('Error sending demo request:', error);
    toast.error('Network error. Please check your connection and try again.');
  }
};

/*
EXAMPLE WORKER URLS:
- https://extrive-api.mycompany.workers.dev/api/demo-request
- https://extrive-api.example123.workers.dev/api/demo-request
- https://extrive-api.zain-dev.workers.dev/api/demo-request

To find your actual URL:
1. Go to Cloudflare Dashboard
2. Workers & Pages → Your Worker
3. Copy the URL shown there
4. Add '/api/demo-request' to the end
*/
