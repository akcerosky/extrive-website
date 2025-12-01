import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, ArrowRight, Mail, Briefcase, TrendingUp, FileText } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

const Blog = () => {
  const blogCategories = [
    {
      icon: Briefcase,
      title: "Ergonomics",
      color: "bg-blue-100 text-blue-800",
      count: 12
    },
    {
      icon: TrendingUp,
      title: "Startup Journey", 
      color: "bg-green-100 text-green-800",
      count: 8
    },
    {
      icon: FileText,
      title: "Industry Trends",
      color: "bg-purple-100 text-purple-800", 
      count: 15
    },
    {
      icon: Clock,
      title: "Case Studies",
      color: "bg-orange-100 text-orange-800",
      count: 6
    }
  ];

  const featuredPosts = [
    {
      title: "How BackEX Reduced Fatigue by 34% at Maruti Suzuki",
      excerpt: "A detailed case study of our successful pilot program with India's leading automotive manufacturer.",
      category: "Case Studies",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "case-study"
    },
    {
      title: "The Future of Workplace Ergonomics: 5 Trends to Watch",
      excerpt: "Exploring emerging technologies and methodologies reshaping worker safety and productivity.",
      category: "Industry Trends", 
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "trends"
    },
    {
      title: "From NIDHI PRAYAS to World Expo: Our Startup Journey",
      excerpt: "The story of how Extrive Innovations grew from a university grant to showcasing at global exhibitions.",
      category: "Startup Journey",
      readTime: "10 min read", 
      date: "Dec 5, 2024",
      image: "journey"
    },
    {
      title: "Understanding EMG Validation in Exosuit Design",
      excerpt: "Breaking down the science behind measuring muscle activation and biomechanical improvements.",
      category: "Ergonomics",
      readTime: "12 min read",
      date: "Nov 28, 2024", 
      image: "science"
    },
    {
      title: "ROI of Worker Wellbeing: Beyond the Numbers",
      excerpt: "Why investing in ergonomic solutions delivers returns that go far beyond immediate cost savings.",
      category: "Industry Trends",
      readTime: "7 min read",
      date: "Nov 20, 2024",
      image: "roi"
    },
    {
      title: "Building Trust: Our Partnership with Boeing & IIT-H",
      excerpt: "How strategic partnerships accelerated our research and validation processes.",
      category: "Startup Journey", 
      readTime: "5 min read",
      date: "Nov 15, 2024",
      image: "partnerships"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-black mb-8 leading-tight tracking-tight">
            Insights from the World of
            <br />
            <span className="text-orange-500">Ergonomics & Innovation</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our latest research, case studies, and industry insights
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogCategories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <category.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{category.title}</h3>
                  <Badge className={`${category.color} font-medium`}>
                    {category.count} articles
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-500 capitalize">{post.image}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-orange-600 border-orange-200">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <ArrowRight className="h-4 w-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-black to-gray-800 border-0 text-white">
            <CardContent className="py-12 text-center">
              <Mail className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get weekly updates on ergonomics research, industry trends, and startup insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white text-black border-0 flex-1"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Blog;
