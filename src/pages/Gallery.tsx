import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, Award, Users, Sparkles, ArrowRight, Mail, Calendar } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

const Gallery = () => {
  const galleryCategories = [
    {
      icon: Camera,
      title: "Events",
      color: "bg-blue-100 text-blue-800",
      count: 14
    },
    {
      icon: Sparkles,
      title: "Product Launches",
      color: "bg-green-100 text-green-800",
      count: 7
    },
    {
      icon: Users,
      title: "Behind the Scenes",
      color: "bg-purple-100 text-purple-800",
      count: 10
    },
    {
      icon: Award,
      title: "Awards",
      color: "bg-orange-100 text-orange-800",
      count: 5
    }
  ];

  const featuredGallery = [
    {
      title: "BackEX Launch at World Expo 2024",
      description: "Snapshots from our global product launch event in Dubai.",
      category: "Product Launches",
      date: "May 10, 2024",
      image: "launch-event"
    },
    {
      title: "Team Extrive at Startup India Summit",
      description: "Our team representing innovation at the national level.",
      category: "Events",
      date: "Apr 22, 2024",
      image: "startup-summit"
    },
    {
      title: "Awarded Best Health Tech Startup",
      description: "Proud moments from the award ceremony.",
      category: "Awards",
      date: "Mar 15, 2024",
      image: "award-ceremony"
    },
    {
      title: "Prototyping: Behind the Scenes",
      description: "A glimpse into our R&D and prototyping process.",
      category: "Behind the Scenes",
      date: "Feb 28, 2024",
      image: "prototyping"
    },
    {
      title: "Ergonomics Workshop at IIT-H",
      description: "Interactive sessions with students and faculty.",
      category: "Events",
      date: "Jan 18, 2024",
      image: "workshop"
    },
    {
      title: "Celebrating Milestones Together",
      description: "Team celebrations and memorable moments.",
      category: "Behind the Scenes",
      date: "Dec 30, 2023",
      image: "team-celebration"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-black mb-8 leading-tight tracking-tight">
            Moments from the Journey of
            <br />
            <span className="text-orange-500">Innovation & Impact</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our gallery of events, milestones, and behind-the-scenes stories
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <category.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{category.title}</h3>
                  <Badge className={`${category.color} font-medium`}>
                    {category.count} photos
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Featured Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGallery.map((item, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-500 capitalize">{item.image}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-orange-600 border-orange-200">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-end">
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
                Get the Latest Moments in Your Inbox
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe for exclusive photos, event highlights, and milestone stories from Extrive Innovations.
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

export default Gallery;