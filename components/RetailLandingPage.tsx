'use client';
import { motion, AnimatePresence } from "framer-motion";
import { DotBackground } from "@/components/ui/dot-background";
import { 
  Brain, 
  ArrowRight, 
  Download, 
  CheckCircle, 
  Star, 
  Award,
  ChevronDown,
  Phone,
  Mail,
  X,
  Menu,
  MapPin,
  Linkedin,
  Twitter
} from "lucide-react";
import { useState } from "react";
import { TypewriterText } from "@/components/ui/typewriter";
import { AnimatedCounter } from "@/components/ui/animated-counter";

// Import your retail data
import retailData from "@/json/retail.json";

export const RetailPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Animation variants
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  // Typewriter words for hero section
  const typewriterWords = [
    "increase sales",
    "optimize pricing",
    "personalize experiences",
    "forecast demand",
    "reduce waste",
    "boost profits"
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global Enhanced Background */}
      <DotBackground density={1.2} opacity={0.25} color="#919294" />
     
      {/* Professional Navigation */}
      <motion.nav
        className="relative z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 shadow-sm py-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <img
                src="/Images/logo2.png"
                alt="Retail AI Solutions"
                className="h-9 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-xs text-gray-500 font-medium">
                  AI-Driven Retail Consulting
                </div>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              <motion.a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ y: -1 }}
              >
                Services
              </motion.a>
              <motion.a
                href="#why-us"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ y: -1 }}
              >
                Why Choose Us
              </motion.a>
              <motion.a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ y: -1 }}
              >
                FAQ
              </motion.a>
            </div>

            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                <motion.a
                  href="#services"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </motion.a>
                <motion.a
                  href="#why-us"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Choose Us
                </motion.a>
                <motion.a
                  href="#faq"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </motion.a>
                <motion.button
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50/50 py-16 lg:py-20 overflow-hidden">
        <DotBackground density={1} opacity={0.3} color="#919294" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {/* Specialty Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700"
                variants={scaleIn}
              >
                <Brain className="w-4 h-4 mr-2" />
                Transform Retail with AI Consulting
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeIn}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  {retailData.hero.title}
                  <br className="hidden sm:block" />
                  <div className="min-h-[1.3em] flex items-start">
                    <TypewriterText
                      words={typewriterWords}
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                      typingSpeed={120}
                      deleteSpeed={80}
                      pauseDuration={2500}
                    />
                  </div>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                variants={slideInLeft}
              >
                {retailData.hero.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                variants={fadeIn}
              >
                <motion.button
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    {retailData.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="relative max-w-lg mx-auto">
                <motion.div
                  className="relative z-10 bg-gradient-to-br from-white via-blue-50 to-purple-50/80 p-8 rounded-2xl shadow-2xl border border-gray-200/60"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center space-y-6">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Brain className="w-10 h-10 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Retail Solutions</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">Helping retailers leverage artificial intelligence to drive growth, efficiency, and customer satisfaction.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-gray-50 relative">
        <DotBackground density={1} opacity={0.2} color="#919294" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
              {retailData.whyChooseUs.title}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why Choose Our AI Retail Consulting
            </h2>
          </motion.div>
         
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {retailData.whyChooseUs.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 group"
                variants={scaleIn}
                whileHover={{ y: -4 }}
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              {retailData.services.title}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {retailData.services.subtitle}
            </h2>
          </motion.div>
         
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {retailData.services.servicesList.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 group"
                variants={scaleIn}
                whileHover={{ y: -4 }}
              >
                <div className="text-2xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {retailData.stats.title}
            </h2>
          </motion.div>
         
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {retailData.stats.metrics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium border border-yellow-200">
              {retailData.faq.title}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Common Questions
            </h2>
          </motion.div>
         
          <motion.div
            className="space-y-3"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {retailData.faq.questions.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                variants={scaleIn}
              >
                <motion.button
                  className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      className="px-4 pb-4 text-gray-600 border-t border-gray-200 bg-gray-50"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="pt-3 text-sm leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 leading-tight"
              variants={fadeIn}
            >
              {retailData.cta.title}
            </motion.h2>
           
            <motion.p
              className="text-lg mb-6 text-blue-100 leading-relaxed"
              variants={fadeIn}
            >
              {retailData.cta.subtitle}
            </motion.p>

            <motion.div
              className="flex justify-center"
              variants={fadeIn}
            >
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {retailData.cta.buttonText}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
            {/* Footer with Contact Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <img src="/Images/logo2.png" alt="STAAJ AI Solutions" className="h-8 w-auto mr-2" />
                <span>STAAJ AI Solutions</span>
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Empowering SaaS companies to lead with AI—driving smarter growth, higher efficiency, and exceptional customer experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
           
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Strategy & Roadmap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Predictive Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Acquisition & Retention</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Process Automation</a></li>
              </ul>
            </div>
           
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
           
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">+1 (800) 456-7890</span>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">contact@staajai.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">123 AI Innovation Way, San Francisco, CA 94107</span>
                </div>
              </div>
            </div>
          </div>
         
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} STAAJ AI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};