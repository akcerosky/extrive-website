import Navigation from '@/components/Navigation';
import DemoForm from '@/components/DemoForm';
import ContactSection from '@/components/ContactSection';

const RequestDemo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <DemoForm />
      </div>
      <ContactSection />
    </div>
  );
};

export default RequestDemo;