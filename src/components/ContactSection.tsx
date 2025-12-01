import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300">
            Ready to transform your workplace? Let's talk.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in">
            <Mail className="h-8 w-8 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a 
              href="mailto:info@extriveinnovations.com"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              info@extriveinnovations.com
            </a>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Phone className="h-8 w-8 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a 
              href="tel:+917037108656"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              +91-7037108656
            </a>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-300">Hyderabad</p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Linkedin className="h-8 w-8 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/company/98801080/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Follow Us
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center animate-fade-in">
          <p className="text-gray-400 mb-2">
            <strong>Address:</strong> Survey No: 62, 1A, Jeedimetla, Bahadurpally, Hyderabad, Telangana 500043
          </p>
          <p className="text-gray-400">
            © 2024 Extrive Innovations. All rights reserved.
          </p>
          <p className="text-gray-400">
            Created by Akcero Digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;