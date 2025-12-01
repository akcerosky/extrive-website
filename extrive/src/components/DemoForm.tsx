import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

import { API_ENDPOINTS } from '../config/api';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    workSector: '',
    email: '',
    numberOfWorkers: '',
    challenge: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Show loading state
      toast.loading('Sending your demo request...');

      // Use environment-based API endpoint
      const response = await fetch(API_ENDPOINTS.demoRequest, {
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

  return (
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Request a <span className="text-orange-500">Demo</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how Kanglei BackEX can transform your workplace
          </p>
        </div>

        <Card className="animate-fade-in shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Get Started Today</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="organization">Organization *</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="workSector">Work Sector *</Label>
                  <Input
                    id="workSector"
                    name="workSector"
                    value={formData.workSector}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="numberOfWorkers">Number of Workers</Label>
                <Input
                  id="numberOfWorkers"
                  name="numberOfWorkers"
                  value={formData.numberOfWorkers}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="challenge">What's your biggest workplace challenge?</Label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
              >
                Send Demo Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
