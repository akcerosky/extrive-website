import { useEffect } from "react";
import { CheckCircle, ArrowRight, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

/** Local type (no scroller/slider component needed) */
export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  { name: "Abhishek",   role: "Co-Founder & CEO", image: "/abhishek.jpg" },
  { name: "Yashaswi",   role: "Co-Founder & CTO", image: "/yashaswi.jpg" },
  { name: "Akash",      role: "Head of Innovation",      image: "/akash.jpg" },
  { name: "Vigneshwar", role: "Lead Software Engineer",      image: "/vigneshwar.jpg" },
  { name: "Siddharth",  role: "Finance and Legal",      image: "/siddharth.jpg" },
  { name: "Manoj",      role: "Lead R&D",      image: "/manoj.jpg" },
  
];

const partners = [
  { name: "IIT Hyderabad", logo: "/logos/iit-h.PNG" },
  { name: "Boeing", logo: "/logos/boeing.png" },
  { name: "AIC Mahindra", logo: "/logos/aic-mahindra.png" },
  { name: "NIDHI PRAYAS", logo: "/logos/nidhi.PNG" },
  { name: "Maruti Suzuki", logo: "/logos/maruti.PNG" },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Navigation />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight text-center sm:text-left"
            >
              Revolutionizing <br />
              <span className="text-orange-500">Worker Wellbeing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl"
            >
              We're on a mission to make physically demanding work safer, more
              comfortable, and more productive.
            </motion.p>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-6"
              >
                <h2 className="text-3xl font-bold flex items-center">
                  <Target className="h-8 w-8 text-orange-600 mr-3" />
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  To empower industrial workers with cutting-edge wearable
                  technology that reduces fatigue, prevents injuries, and
                  enhances productivity across physically demanding industries.
                </p>
                <p className="text-gray-600">
                  We believe that by embedding intelligence into everyday
                  fabrics, we can create a more connected, responsive, and safer
                  world.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Eye className="h-7 w-7 text-orange-600 mr-2" />
                  Our Values
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Innovation:</strong> We push boundaries to create
                      solutions that weren't possible before.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Quality:</strong> We're committed to excellence in
                      every sensor, algorithm, and solution we deliver.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Collaboration:</strong> We work closely with our
                      clients to ensure their unique needs are met.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Impact:</strong> We measure success by the
                      tangible differences our technology makes in the real
                      world.
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Our Story Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-2xl shadow-lg p-6 sm:p-10 md:p-16 text-xl text-gray-700 leading-relaxed border border-orange-100">
                <p>
                  It began with a wild dream: What if we could build India’s
                  version of the Iron Man suit — not for superheroes, but for
                  real, hardworking people?
                  <br />
                  <br />
                  In 2022, four engineers in a university lab came together with
                  a simple but bold question: Why are industrial workers still
                  relying only on their bodies, while the rest of the world gets
                  smarter, safer tools?
                </p>
                <p className="mt-6">
                  We didn’t want to create just another wearable. We wanted to
                  modularize strength itself — break it down like Lego blocks,
                  simplify complexity, and bring cutting-edge ergonomics to
                  India’s toughest work environments.
                  <br />
                  <br />
                  We started small. Stitched our first exosuit by hand. Tested
                  with workers. Iterated in real factories and airports.
                  <br />
                  <br />
                  By 2023, we’d hit a point where our technology was mature
                  enough for scale. That’s when we moved into passive textile
                  integrations — systems that work without motors or batteries,
                  but still reduce fatigue and improve safety, all validated
                  through EMG and field trials.
                </p>
                <p className="mt-6">
                  Since then, we’ve worked with Maruti Suzuki, Imphal Airport,
                  and more — not just building for the lab, but validating in
                  the real world.
                  <br />
                  <br />
                  Today, Extrive Innovations is doing more than making exosuits.
                  We’re building a future where strength is wearable, work is
                  safer, and innovation is proudly Made in India.
                </p>
              </div>
            </motion.div>

            {/* Team (Static 3×2 Grid) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-4xl font-bold text-center mb-3">
                    Meet Our <span className="text-orange-500">Team</span>
                  </h2>
                  <p className="text-center text-slate-500 mb-12">
                    The innovators behind the technology
                  </p>

                  {/* 3×2: 3 on lg, 2 on md, 1 on mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {team.map((m, idx) => (
                      <div
                        key={idx}
                        className="w-[280px] sm:w-[300px] rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="mx-auto h-40 w-40 rounded-full overflow-hidden bg-gray-100">
                          <img
                            src={m.image}
                            alt={m.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold">{m.name}</h3>
                        <p className="text-orange-600 mt-1">{m.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>

            {/* Partners (centered) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our <span className="text-orange-500">Partners</span>
              </h2>
              <p className="text-xl text-gray-600 text-center mb-10">
                Trusted by leading organizations
              </p>

              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
                  {partners.map((partner, index) => (
                    <Card
                      key={index}
                      className="w-[230px] mx-auto group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-0 p-6"
                    >
                      <div className="h-16 flex flex-col items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-10 object-contain mb-2"
                        />
                        <p className="text-xs text-gray-500 font-medium">
                          {partner.name}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <a
                href="mailto:info@extriveinnovations.com"
                className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group"
              >
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </PageLayout>
  );
};

export default About;
