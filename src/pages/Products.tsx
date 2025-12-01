import Navigation from '@/components/Navigation';
import ProductShowcase from '@/components/ProductShowcase';
import DemoForm from '@/components/DemoForm';
import ContactSection from '@/components/ContactSection';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProductShowcase />
      <DemoForm />
      <ContactSection />
    </div>
  );
};

export default Products;