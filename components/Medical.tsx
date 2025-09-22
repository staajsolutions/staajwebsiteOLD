'use client';


import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, Gavel, Microscope, Factory, Clipboard, Hospital,
  Building, Rocket, Users, DollarSign, Award, CheckCircle, Phone, Mail,
  Linkedin, Twitter, ChevronDown, ChevronUp, Menu, X, ArrowRight,
  Download, ExternalLink, Star, Coffee, Shield, Clock, Target, Zap,
  Monitor, ShoppingBag, Heart, TrendingUp, BarChart3, Lightbulb,
  Briefcase, Users2, Database, Settings, Play,
  Stethoscope, Activity, HeartHandshake, Brain, Tablet, Beaker, Globe,
  MapPin, Calculator, PieChart, BarChart, LineChart, Users as Team,
  Wrench, Cog, FileCheck, AlertCircle, BookOpen, GraduationCap,
  MessageSquare, Video, Search, Filter, Layers, Network, Zap as Lightning,
  Smartphone, Cloud, Lock, Eye, TrendingDown, ArrowUpRight } from 'lucide-react';


// Custom Typewriter Component
interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}


const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  className = "",
  typingSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    const currentWord = words[currentWordIndex];
   
    const timer = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }


      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }
      } else {
        if (currentText === currentWord) {
          setIsPaused(true);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deleteSpeed : typingSpeed);


    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deleteSpeed, pauseDuration]);


  return (
    <span className={`${className} inline-block min-h-[1.2em]`}>
      {currentText}
      <span className="animate-pulse text-pink-600">|</span>
    </span>
  );
};


// Animated Counter Component
interface AnimatedCounterProps {
  value: string;
  duration?: number;
}


const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    if (!isVisible) return;


    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const prefix = value.match(/[^0-9.]/g)?.join('') || '';
   
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = Math.floor(numericValue * progress);
      setDisplayValue(prefix + current);
     
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
   
    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {displayValue}
    </motion.div>
  );
};


const MedTech = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Enhanced typewriter words for healthtech
  const typewriterWords = [
    "unlock your full growth potential",
    "drive digital transformation",
    "accelerate innovation",
    "optimize operations",
    "transform patient outcomes",
    "navigate complex regulations",
    "achieve competitive advantage"
  ];


  const toggleFaq = (index: number): void => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };


  // Enhanced Market Statistics with more data points
  const marketStatistics = [
    {
      title: "Healthcare Consulting Market",
      value: "$54B",
      growth: "+12.3% CAGR",
      description: "Projected market size by 2030",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Digital Health Investment",
      value: "$29.1B",
      growth: "+25% YoY",
      description: "Global investment in 2023",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: "Medtech Companies Supported",
      value: "200+",
      growth: "Successfully guided",
      description: "Across all growth stages",
      icon: <Users2 className="w-5 h-5" />
    },
    {
      title: "Average ROI Improvement",
      value: "300%",
      growth: "Operational efficiency",
      description: "Client performance boost",
      icon: <Target className="w-5 h-5" />
    }
  ];


  // Enhanced Services with more detailed information
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Strategy & Market Entry",
      description: "Tailored strategies for market expansion, product launches, and geographic diversification with in-depth market analysis to identify high-potential opportunities in the rapidly expanding global medtech sector.",
      features: [
        "Market expansion strategies and product launch planning",
        "Geographic diversification and international market entry",
        "In-depth market analysis and opportunity identification in the rapidly expanding global medtech sector",
        "Competitive intelligence and positioning strategies",
        "Go-to-market strategy development and execution",
        "Revenue optimization and growth acceleration",
        "Market penetration analysis and customer segmentation",
        "Regulatory pathway planning for new markets"
      ],
      timeline: "3-6 months",
      roi: "Accelerate growth by 150%",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Digital Transformation & Analytics",
      description: "Guidance on adopting advanced digital solutions, including AI, big data, and IoT, to enhance operational efficiency and patient outcomes. Implementation of data-driven decision-making tools for better business performance.",
      features: [
        "AI and machine learning implementation strategies",
        "Big data analytics and IoT integration for enhanced patient outcomes",
        "Digital workflow optimization and automation",
        "Data-driven decision-making tool implementation",
        "Cloud migration and infrastructure modernization",
        "Digital health platform development",
        "Predictive analytics for operational efficiency",
        "Real-time monitoring and dashboard creation"
      ],
      timeline: "4-8 months",
      roi: "Improve efficiency by 250%",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Mergers, Acquisitions & Partnerships",
      description: "Support in identifying, evaluating, and executing M&A opportunities to drive inorganic growth and expand capabilities. Advisory on strategic partnerships and collaborations within the medtech ecosystem.",
      features: [
        "M&A opportunity identification and evaluation for inorganic growth",
        "Due diligence and transaction support",
        "Strategic partnership development within medtech ecosystem",
        "Post-merger integration planning and execution",
        "Collaboration framework design and management",
        "Value creation and synergy realization",
        "Cross-border transaction expertise",
        "Technology integration planning"
      ],
      timeline: "6-12 months",
      roi: "Unlock 200% value creation",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Commercial Model Optimization",
      description: "Redesigning sales and marketing models for omnichannel engagement and value-based healthcare. Pricing strategy, contracting, and value communication to maximize revenue and market share.",
      features: [
        "Omnichannel sales and marketing model design",
        "Value-based healthcare strategy development",
        "Pricing strategy optimization to maximize revenue and market share",
        "Contract negotiation and value communication strategies",
        "Revenue model transformation and optimization",
        "Customer engagement and retention strategies",
        "Sales force effectiveness improvement",
        "Market access and reimbursement strategies"
      ],
      timeline: "2-5 months",
      roi: "Increase revenue by 180%",
      color: "from-pink-500 to-pink-600"
    }
  ];


  // Enhanced Healthtech Services with more comprehensive offerings
  const healthtechServices = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Digital Health Strategy & Roadmapping",
      description: "Comprehensive digital transformation planning with strategic roadmaps",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Telemedicine Platform Development",
      description: "End-to-end telehealth solution design and implementation",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Data Analytics Integration",
      description: "Advanced analytics and AI implementation for better outcomes",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "UX/UI Design for Healthcare Apps",
      description: "Patient-centric design and user experience optimization",
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory & Compliance Consulting",
      description: "HIPAA, GDPR, and healthcare compliance expertise",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Custom Healthtech Software Solutions",
      description: "Tailored healthcare technology development and integration",
      color: "from-orange-400 to-orange-500"
    }
  ];


  // Enhanced Why Choose Us with more comprehensive reasons
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Deep Industry Expertise",
      description: "Our consultants possess extensive hands-on experience in medical technology and healthcare consulting, offering a profound understanding of industry-specific challenges, regulatory intricacies, and market opportunities.",
      stats: "15+ Years Average Consultant Experience",
      details: [
        "Navigating complex FDA, CE, and global regulatory pathways.",
        "Identifying and capitalizing on emerging market trends.",
        "Strategic insights for competitive differentiation and positioning."
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Future-Focus",
      description: "We empower your organization by integrating cutting-edge trends in digital health, AI, data analytics, and operational excellence, ensuring you stay ahead of the curve and achieve sustained competitive advantage.",
      stats: "Pioneering Solutions in AI & Digital Health",
      details: [
        "Implementation of AI-driven diagnostic and treatment solutions.",
        "Development of robust digital health ecosystems.",
        "Leveraging data analytics for predictive insights and personalized care."
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Measurable & Proven Results",
      description: "Our data-driven strategies are designed to deliver tangible outcomes. We have a consistent track record of helping clients accelerate growth, significantly improve operational efficiency, and achieve lasting market leadership.",
      stats: "300%+ Average ROI for Clients",
      details: [
        "Quantifiable improvements in key performance indicators (KPIs).",
        "Case studies demonstrating substantial revenue growth and cost savings.",
        "Enhanced market share and improved patient outcomes."
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centric Design Philosophy",
      description: "Empathy is at the core of our design process. We ensure your technology solutions are intuitive, accessible, and user-friendly, delivering genuine value to patients, clinicians, and all stakeholders.",
      stats: "Consistently High User Adoption & Satisfaction",
      details: [
        "User experience (UX) research and human-centered design.",
        "Accessibility compliance (e.g., WCAG) for inclusive solutions.",
        "Co-creation workshops with patients and healthcare professionals."
      ]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Unwavering Trust & Transparency",
      description: "We build enduring partnerships by prioritizing data security, ensuring full regulatory compliance (HIPAA, GDPR, etc.), and maintaining transparent communication throughout every engagement.",
      stats: "100% Compliance & Data Security Focus",
      details: [
        "Robust data governance and cybersecurity frameworks.",
        "Clear project management and regular progress reporting.",
        "Ethical considerations integrated into all strategies."
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Comprehensive End-to-End Solutions",
      description: "From initial strategy formulation and regulatory navigation to UX/UI design, development, and post-launch optimization, we provide holistic support across your entire digital health journey.",
      stats: "Full Lifecycle Project Management",
      details: [
        "Strategic planning through to technical implementation.",
        "Seamless integration with existing healthcare IT systems.",
        "Ongoing support and continuous improvement strategies."
      ]
    }
  ];


  // Enhanced FAQ with more comprehensive questions
  const faqs = [
    {
      question: "What types of organizations do you work with?",
      answer: "We partner with hospitals, clinics, startups, medtech companies, and healthcare enterprises across all stages of growth. Our expertise spans from early-stage healthtech startups seeking market entry strategies to established healthcare organizations looking to drive digital transformation and operational excellence."
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer: "Our consultants are experts in HIPAA, GDPR, and local health regulations, ensuring every solution is compliant from day one. We maintain up-to-date knowledge of regulatory requirements and build compliance into every aspect of our solutions and strategies, providing ongoing compliance monitoring and updates."
    },
    {
      question: "What is your process?",
      answer: "We start with a comprehensive needs assessment, develop a tailored strategy aligned with your goals, and support you through implementation and beyond. Our approach is collaborative, data-driven, and focused on delivering measurable results that drive sustainable growth and competitive advantage."
    },
    {
      question: "How long does a typical engagement take?",
      answer: "Engagement timelines vary based on scope and complexity, typically ranging from 2-12 months. We work with you to develop realistic timelines that balance speed to market with thorough execution, ensuring sustainable results and long-term success."
    },
    {
      question: "What makes your approach different?",
      answer: "Our unique combination of deep healthcare industry expertise, proven digital transformation experience, and patient-centric design philosophy sets us apart. We focus on delivering practical, implementable solutions that drive real business outcomes and improved patient care."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive post-implementation support including performance monitoring, optimization recommendations, and strategic guidance to ensure continued success and adaptation to evolving market conditions and regulatory requirements."
    },
    {
      question: "How do you measure success?",
      answer: "We establish clear KPIs and metrics at the beginning of each engagement, tracking everything from operational efficiency gains to revenue growth and patient satisfaction scores. Our success is measured by your tangible business outcomes and long-term competitive positioning."
    },
    {
      question: "What industries within healthcare do you specialize in?",
      answer: "We have deep expertise across digital health, medical devices, pharmaceuticals, biotechnology, health insurance, and healthcare services. Our cross-industry experience allows us to bring best practices and innovations from one sector to another."
    }
  ];


  // Enhanced Client Success Stories
  const successStories = [
    {
      title: "Digital Transformation Success",
      description: "Helped a leading medtech company implement AI-driven diagnostic tools, resulting in 40% faster diagnosis times and 25% cost reduction.",
      metric: "40% faster diagnosis",
      category: "AI Implementation"
    },
    {
      title: "Market Entry Achievement",
      description: "Guided a healthtech startup through European market entry, achieving €5M revenue in first year with strategic partnership development.",
      metric: "€5M first-year revenue",
      category: "Market Expansion"
    },
    {
      title: "M&A Success Story",
      description: "Facilitated successful acquisition that expanded client's capabilities by 300% and opened access to new markets worth $50M.",
      metric: "300% capability expansion",
      category: "Strategic M&A"
    }
  ];


  // Framer Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };


  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  const fadeInInPlace = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  // Enhanced dot background component
  const DotBackground = ({ density = 1, opacity = 0.4, color = "#e5e7eb" }) => (
    <div
      className="absolute inset-0 pointer-events-none" // Removed z-[-1] and opacity-40
      style={{
        opacity: opacity, // Use the opacity prop for the div's opacity
        backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1.5px, transparent 0)`,
        backgroundSize: `${30 / density}px ${30 / density}px`,
        backgroundPosition: "0 0, 15px 15px" // This positioning is likely fine
      }}
    />
  );


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
              alt="STAAJ Solutions"
              className="h-9 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-xs text-gray-500 font-medium">
                Leading Medtech Consulting Firm
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
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50/50 py-20 lg:py-24 overflow-hidden min-h-[calc(100vh-5rem)]">
        <DotBackground density={1} opacity={0.3} color="#919294" /> {/* Changed color */}
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
                <Heart className="w-4 h-4 mr-2" />
                Transform Healthcare with Expert Consulting
              </motion.div>


              {/* Main Headline with Fixed Height for Typewriter */}
              <motion.div variants={fadeIn} className='h-60'>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                  Help your medtech company{' '}
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
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
                variants={slideInLeft}
              >
                Empowering healthtech innovation for a healthier tomorrow.
                <span className="font-semibold text-gray-800"> Harness technology to drive better patient outcomes, streamline operations,</span> and stay ahead in the rapidly evolving healthcare landscape.
              </motion.p>


              {/* Key Benefits */}
              <motion.div
                className="grid sm:grid-cols-3 gap-3"
                variants={staggerChildren}
              >
                {[
                  { icon: <Brain className="w-5 h-5" />, title: "Digital Health", desc: "AI & IoT expertise", color: "from-blue-500 to-blue-600" },
                  { icon: <Shield className="w-5 h-5" />, title: "Compliance", desc: "HIPAA & GDPR ready", color: "from-green-500 to-green-600" },
                  { icon: <Heart className="w-5 h-5" />, title: "Patient-Centric", desc: "User-friendly design", color: "from-pink-500 to-pink-600" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-200/60 hover:shadow-md transition-all duration-300"
                    variants={scaleIn}
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`bg-gradient-to-r ${benefit.color} text-white p-1 rounded-lg mr-2`}>{benefit.icon}</div>
                      <div className="font-bold text-gray-900 text-sm">{benefit.title}</div>
                    </div>
                    <div className="text-xs text-gray-600">{benefit.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
           
              {/* CTA Buttons */}
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
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </motion.button>
               
                <motion.button
                  className="bg-white/95 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download Capabilities Brochure
                  </span>
                </motion.button>
              </motion.div>


              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap items-center gap-4 pt-4"
                variants={fadeIn}
              >
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  200+ Companies Supported
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  4.9/5 Client Satisfaction
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 text-blue-500 mr-1" />
                  15+ Years Experience
                </div>
              </motion.div>
            </motion.div>


            {/* Right Column - Enhanced Healthtech Visual */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="relative max-w-lg mx-auto">
                {/* Floating Icons Animation */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { icon: <Stethoscope className="w-6 h-6" />, position: "top-4 left-4", delay: 0 },
                    { icon: <Brain className="w-5 h-5" />, position: "top-8 right-8", delay: 0.2 },
                    { icon: <Heart className="w-5 h-5" />, position: "bottom-12 left-8", delay: 0.4 },
                    { icon: <Activity className="w-5 h-5" />, position: "bottom-4 right-4", delay: 0.6 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${item.position} text-blue-600 bg-white/80 p-2 rounded-lg shadow-lg backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0]
                      }}
                      transition={{
                        delay: item.delay,
                        duration: 0.5,
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>


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
                      <Heart className="w-10 h-10 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Leading Medtech Consulting Firm</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">Dedicated to helping medical technology companies unlock their full growth potential with deep industry expertise and forward-thinking approach.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                      <div className="text-sm font-semibold text-green-800 mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Market Opportunity:
                      </div>
                      <div className="text-sm text-green-700">Healthcare consulting market projected to reach <span className="font-bold">$54B by 2030</span>, driven by digitalization, regulatory changes, and demand for operational efficiency.</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Market Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
              Market Outlook
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Healthcare Technology Market Growth
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The global healthcare consulting services market is experiencing robust growth, projected to reach over $54 billion by 2030, fueled by rapid digitalization, regulatory changes, and increasing demand for operational efficiency.
            </p>
          </motion.div>
         
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-12"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {marketStatistics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 group"
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">{stat.title}</div>
                  <div className="text-xs text-green-600 font-medium mb-2">{stat.growth}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>


          {/* Success Stories Preview */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300"
                variants={scaleIn}
                whileHover={{ y: -2 }}
              >
                <div className="text-xs text-blue-600 font-semibold mb-2">{story.category}</div>
                <h4 className="font-bold text-gray-900 mb-2">{story.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{story.description}</p>
                <div className="text-lg font-bold text-blue-600">{story.metric}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-gray-50 relative"> {/* Added relative */}
        <DotBackground density={1} opacity={0.2} color="#919294" /> {/* Changed color */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Added relative z-10 */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
              Why Choose Staaj Solutions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Your Trusted Growth Partners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We bring proven expertise, innovation focus, and patient-centric approach to help you achieve sustainable competitive advantage in the healthcare technology landscape.
            </p>
          </motion.div>
         
          <motion.div
            className="space-y-12 md:space-y-16" 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden
                            flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}
                variants={fadeInInPlace} 
              >
                {/* Image Column */}
                <div className="md:w-2/5 w-full h-64 md:h-auto bg-gray-100">
                  <img
                    src={`/${index + 1}.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Text Column */}
                <div className="md:w-3/5 w-full p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-indigo-600 mb-3 md:mb-4 transition-transform duration-200 inline-block"> {/* Removed group-hover:scale-110 */}
                    {React.cloneElement(item.icon, { className: "w-7 h-7 md:w-8 md:h-8" })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">{item.description}</p>
                  <div className="text-sm md:text-base font-semibold text-indigo-700 mb-4">{item.stats}</div>
                  {/* Added details rendering */}
                  {item.details && item.details.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Our Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              Our Services
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Comprehensive Medtech Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions for medical technology companies navigating innovation, regulation, and competition in the rapidly evolving healthcare landscape.
            </p>
          </motion.div>
         
          <motion.div
            className="space-y-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200/80 hover:shadow-xl transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                  <div className="lg:w-2/5 flex-shrink-0">
                    <div className="flex items-start mb-3">
                      <div className={`bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-200 mr-3 mt-1 p-3 rounded-lg shadow-sm`}>
                        {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                      </div>
                      <div>
                        <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mb-3">
                          <span className="font-semibold text-green-600">{service.roi}</span>
                          <span className="text-gray-500">{service.timeline}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>


                  <div className="lg:w-3/5 space-y-4">
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-2">Key Capabilities:</h4>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {service.features.slice(0, 6).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 6 && (
                          <li className="text-xs text-blue-600 hover:underline cursor-pointer pt-1">
                            + {service.features.length - 6} more capabilities...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Healthtech Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
              Specialized Services
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Digital Health & Technology Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From strategy and compliance to UX/UI design and implementation, we guide you through every stage of your digital health journey.
            </p>
          </motion.div>
         
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {healthtechServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group"
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${service.color} text-white mr-3 p-2 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Enhanced Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Proven Healthtech Expertise
            </h2>
          </motion.div>


          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Years of Experience", value: "15+", desc: "In medtech consulting" },
              { title: "Client Satisfaction", value: "98%", desc: "Success rate" },
              { title: "Compliance Record", value: "100%", desc: "HIPAA & GDPR" },
              { title: "Innovation Adoption", value: "95%", desc: "Client implementation" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-gray-900 font-semibold mb-1">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium border border-yellow-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Common Questions About Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to frequently asked questions about our medtech consulting services and approach.
            </p>
          </motion.div>
         
          <motion.div
            className="space-y-3"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
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


      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect with Us
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions? We're here to help you navigate your healthtech journey.
            </p>
          </motion.div>


          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Call Us", desc: "Schedule a consultation", action: "Book Call" },
              { icon: <Mail className="w-6 h-6" />, title: "Email Us", desc: "Get detailed information", action: "Send Email" },
              { icon: <Download className="w-6 h-6" />, title: "Download Brochure", desc: "Learn about our capabilities", action: "Download Now" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
                variants={scaleIn}
                whileHover={{ y: -2 }}
              >
                <div className="text-blue-600 mb-3 flex justify-center">{contact.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{contact.desc}</p>
                <motion.button
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {contact.action}
                </motion.button>
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
              Ready to Accelerate Your Healthtech Vision?
            </motion.h2>
           
            <motion.p
              className="text-lg mb-6 text-blue-100 leading-relaxed"
              variants={fadeIn}
            >
              Let's discuss your goals and map a path to digital transformation. Your trusted partner in healthtech innovation—delivering results that matter for patients, providers, and the future of healthcare.
            </motion.p>


            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              variants={fadeIn}
            >
              {["End-to-End Solutions", "Patient-Centric", "Proven Results", "Industry Expertise"].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center bg-white/20 px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>


            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
            >
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Consultation Now
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Capabilities Brochure
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


export default MedTech;
