import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ProductSection from '@/components/ProductSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
// import TestimonialsSection from '@/components/TestimonialsSection';
import DemoForm from '@/components/DemoForm';
import ContactSection from '@/components/ContactSection';
import SupportedByCarousel from '@/components/SupportedByCarousel';
import TestimonialsSection from '@/components/TestimonialSection';

const testimonialsData = [
  {
    quote: "This is amazing! The exosuit made my workday so much easier and I felt less tired at the end of my shift.",
    name: "Ravi Singh",
    designation: "Engineer",
    src: "/avatars/ravi.jpg",
  },
  {
    quote: "Our team’s productivity has improved and complaints about back pain have dropped significantly.",
    name: "Priya Singh",
    designation: "Logistics Supervisor",
    src: "/avatars/priya.jpg",
  },
  {
    quote: "The pilot testing was thorough and the results speak for themselves. Highly recommend BackEX.",
    name: "Amit Patel",
    designation: "Pilot Tester",
    src: "/avatars/amit.jpg",
  },
];

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Create intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with fade-in animation
    const fadeElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <div id="intro">
        <IntroSection />
      </div>
      <SupportedByCarousel />
      <ProductSection />
      {/* <ProductShowcase /> */}
      <WhyChooseUsSection />
      <TestimonialsSection writtenTestimonials={testimonialsData} />
      <DemoForm />
      <ContactSection />
    </div>
  );
};

export default Index;