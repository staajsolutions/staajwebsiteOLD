'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Download, CheckCircle, Star, Award, Lightbulb, Heart,
  LineChart, Users2, Target, BarChart, Users, Settings, Bot, Cloud,
  Brain, Database, Shield, Network, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, ChevronDown, ChevronUp, Menu, X, MapPin, Puzzle, TrendingUp, Clock, BookOpenCheck, Briefcase, Megaphone, Sparkles, BarChart3, ChevronLeft, ChevronRight, ExternalLink,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { WhyChooseUsSection } from "../../components/WhyChooseUsSection";
import OurPeopleSection from "../../components/OurPeopleSection";


// --- Animated Typewriter Component ---
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

const DotBackground = ({ density = 1, opacity = 0.4, color = "#e5e7eb" }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: opacity,
      backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1.5px, transparent 0)`,
      backgroundSize: `${30 / density}px ${30 / density}px`,
      backgroundPosition: "0 0, 15px 15px"
    }}
  />
);
// --- Animated Counter ---
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const sparkleVariants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const smoothVariants = {
  // Reduced motion for better performance
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 }
  },
  slideIn: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }
};

// Optimized transition settings
const smoothTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.4
};

const quickTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.2
};


// --- Main Component ---
const GenericLandingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const serviceRefs: React.MutableRefObject<(HTMLDivElement | null)[]> = useRef([]);
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showServiceSection, setShowServiceSection] = useState(false);
  const [showServiceDetail, setShowServiceDetail] = React.useState(false);



  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash.startsWith("#services")) {
      setShowServiceDetail(true);
      const match = hash.match(/service=([a-zA-Z0-9_-]+)/);
      const svcKey = match ? match[1] : "overview";
      const found = services.findIndex(s => s.key === svcKey);
      setSelectedService(found !== -1 ? found : 0);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [sectionRef]);

  // Update URL/hash only if detail is open
  useEffect(() => {
    if (!showServiceDetail) return;
    const key = services[selectedService].key;
    router.replace(
      `${window.location.pathname}${window.location.search}#services?service=${key}`,
      { scroll: false }
    );
  }, [selectedService, showServiceDetail, router]);

  // Navbar handler to open detail view
  const handleNavToServices = React.useCallback(() => {
    setShowServiceDetail(true);
    setSelectedService(0);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    router.replace(`${window.location.pathname}${window.location.search}#services?service=overview`, { scroll: false });
  }, [router, sectionRef]);

  // Close detail view and clear hash
  const handleCloseDetail = () => {
    setShowServiceDetail(false);
    router.replace(`${window.location.pathname}${window.location.search}`, { scroll: false });
  };

  // Typewriter for all industries
  const typewriterWords = [
    "optimize your workflow",
    "unlock new business value",
    "enhance customer experience",
    "make smarter decisions",
    "grow your impact"
  ];

  // Services (all-industry)
  const services = [
    {
      key: 'overview',
      title: 'STAAJ Solutions',
      subtitle: 'Service Overview',
      icon: <BookOpenCheck className="w-12 h-12 text-blue-700" />,
      summary: 'Built on 90-Day Wins. ',
      objective: 'Each tier of our service is powered by our PPTFM foundation: Product, People, Technology, Finance, and Metrics. That\'s how we help businesses grow smarter, not harder.',
      features: [
        'STAAJ Lite - A strategic starting point for small teams that need structure and support without the overhead.',
        'STAAJ Pro - A hands-on partnership to drive growth, streamline operations, and build your roadmap to scale.',
        'STAAJ Enterprise - An embedded executive team delivering full-scale transformation.',
        'Custom Solutions - Bring us your business problems, we\'ll help you solution them with tailored strategies.',
      ],
      ideal: 'Businesses of all sizes looking for scalable, effective, people-driven growth.',
      image: '/Images/staaj-solutions.png',
      link: '/staaj-services?service=overview'
    },
    {
      key: 'lite',
      title: 'STAAJ Lite',
      subtitle: 'Customer Journey Excellence',
      icon: <Clock className="w-12 h-12 text-red-600" />,
      summary: 'STAAJ Lite (Road to $1M Revenue)\nHelping early-stage founders go from scrappy to scalable.',
      objective: 'Who it\'s for:\nFounders and CEOs of small teams (4-10 people) building their first $1M in annual revenue.\n\nWhat they get:\n• Confidence to scale without burnout\n• Simple systems to support growth\n• Weekly guidance from seasoned experts\n• Clear, data-informed decisions\n• Help shaping go-to-market and operational basics\n\nWhy it matters:\nYou don\'t need a giant team to act like a pro. We help you build like the CEO you want to be.',
      features: [

      ],
      ideal: 'Small to medium-sized businesses aiming to improve customer interactions and satisfaction.',
      image: '/Images/staaj-lite.png',
      link: '/staaj-services?service=lite'
    },
    {
      key: 'pro',
      title: 'STAAJ Pro',
      subtitle: 'End-to-End Lean Operations',
      icon: <BarChart3 className="w-12 h-12 text-pink-600" />,
      summary: 'STAAJ Pro (Road to $5M Revenue)\nFueling teams ready for serious growth.',
      objective: 'Who it\'s for:\nLeaders of growing companies (10-30 people) aiming to cross the $5M mark with solid systems.\n\nWhat they get:\n• Personalized growth roadmap\n• Strategic help across marketing, ops, and sales\n• Hands-on workshops to unblock progress\n• More efficient workflows\n• Support to scale team culture and performance\n\nWhy it matters:\nYou\'ve proven your idea works—now it\'s time to grow smarter, not just bigger.',
      features: [

      ],
      ideal: 'Growing businesses seeking to scale operations efficiently and effectively.',
      image: '/Images/staaj-pro.png',
      link: '/staaj-services?service=pro'
    },
    {
      key: 'enterprise',
      title: 'STAAJ Enterprise',
      subtitle: 'Road to $10M+ Revenue',
      icon: <Briefcase className="w-12 h-12 text-orange-600" />,
      summary: 'STAAJ Enterprise (Road to $10M+ Revenue)\nEnterprise-level expertise for scaling companies.',
      objective: 'Who it\'s for:\nEstablished businesses (30-50+ people) looking to cross into 8-figure territory with confidence.\n\nWhat they get:\n• Full executive team support without the full-time cost\n• Revenue operations that drive measurable ROI\n• Better data visibility to guide strategy\n• Workflow optimization across departments\n• Scalable structure for sustainable growth\n\nWhy it matters:\nYou\'re past "startup." Now it\'s about legacy. We help you lead with clarity and stay ahead of the curve.',
      features: [],
      ideal: 'Established businesses aiming to maintain momentum and navigate complex challenges.',
      image: '/Images/staaj-enterprise.png',
      link: '/staaj-services?service=enterprise'
    },
    {
      key: 'custom',
      title: 'Custom Solutions',
      subtitle: 'Tailored Services for Unique Needs',
      icon: <Settings className="w-12 h-12 text-purple-700" />,
      summary: 'Custom Solutions\nTailored strategies for unique challenges, solutioned in 90-day sprints.',
      objective: 'Who it\'s for:\nAny organization facing a specific hurdle, pivot, or opportunity that doesn\'t fit a one-size-fits-all plan.\n\nWhat they get:\n• Targeted problem-solving with expert support\n• Rapid-response workshops and action plans\n• Flexible team involvement based on the issue\n• Cross-functional expertise across PPT\n\nWhy it matters:\nNot every business challenge fits a template. When things get complex, we help you solution with speed, clarity, and confidence.',
      features: [],
      ideal: 'Businesses with unique needs that require specialized solutions beyond standard offerings.',
      image: '/Images/custom-solutions.png',
      link: '/staaj-services?service=custom'
    },
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "What We Do",
      description: "STAAJ Solutions helps small and midsize businesses scale with less chaos and more clarity.\n\nFounded in 2023, our team has built and led companies in tech, retail, and healthcare. We work directly with you each week, using our proven framework to identify what's blocking progress and build the systems to move forward.",
      stats: "",
      details: [
        "We act like your executive team without the full-time cost",
        "We tailor strategies to your stage and business goals",
        "We stay close to the work until it's done right",
      ],
      finalLine: "No fluff, just hands-on help that drives results.",
      image: "/Images/generic-1.png"
    },
    // {
    //   icon: <TrendingUp className="w-8 h-8" />,
    //   title: "Our People",
    //   description: "**Sam Spampinato**\nFounder and President\nSam leads STAAJ with a focus on clarity, results, and real relationships. He brings years of experience scaling businesses and helps clients think bigger while staying grounded in what works.\n\n**Bryna Kirzner**\nFounder and Chief Operating Officer\nBryna keeps everything running smoothly. She's an expert in operations and team leadership, and she helps clients turn big goals into simple, workable plans.\n\n**Garrett Finley**\nCo-Founder and Director of Operational Integrity\nGarrett makes sure every client feels supported and seen. He blends process expertise with a deep commitment to service, helping teams work smarter and communicate better.\n\n**Alex Wichman**\nCo-Founder and Director of Marketing\nAlex helps clients find their voice and connect with the right audience. He brings creative energy and strategic thinking to every project, making sure brands grow with purpose.",
    //   stats: "",
    //   details: 
    //     [],
    //   finalLine: "",
    //   image: [
    //   "/Images/p1.png",
    //   "/Images/p2.jpeg",
    //   "/Images/p3.jpeg",
    //   "/Images/p4.png"
    // ],

    // },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Our Process",
      description: "Our process is built on collaboration and designed to plug seamlessly into your existing business. We act as an extension of your team, bringing structure, clarity, and momentum without disrupting what already works.",
      stats: "",
      details: [
        "Discovery: We start by getting to know your business and your goals, identifying gaps and opportunities with your team.",
        "Roadmap: We co-create a clear plan that fits your stage, your culture, and your resources.",
        "Ongoing Support: We stay closely involved to keep things aligned, adjust strategies, and ensure consistent progress."
      ],
      finalLine: "Our approach is fully turnkey and designed to deliver results without adding complexity.",
      image: "/Images/generic-3.png"

    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Commitment",
      description: "We work shoulder to shoulder with your team to solve real problems, support sustainable growth, and simplify how your business runs.\n\nWe stay involved to make sure the momentum continues well beyond the early stages.",
      stats: "",
      details: [
        "Tangible progress your team will notice",
        "Clear wins that move your business forward",
        "A trusted partner who evolves with you"
      ],
      finalLine: "We measure our success by your success. We're here for the long haul.",
      image: "/Images/generic-4.png"
    }
  ];

  // Updated FAQs for STAAJ Solutions
  const faqs = [
    {
      question: "What is STAAJ Solutions?",
      answer: "We are a dedicated team of professionals who help organizations streamline their processes, improve team efficiency, and create sustainable growth systems."
    },
    {
      question: "What does \"people-first\" mean?",
      answer: "We believe that successful operations depend on empowered, well‑organized teams working with clear systems and processes."
    },
    {
      question: "How do you pronounce STAAJ?",
      answer: "Same way you pronounce 'STAGE'."
    },
    {
      question: "How long has STAAJ Solutions been in business?",
      answer: "We were founded in 2023 by trusted professionals with decades of experience."
    },
    {
      question: "What types of problems do you solve?",
      answer: "- Outdated processes that no longer serve your growing business\n- Team confusion and lack of clarity around roles and priorities\n- Leadership bottlenecks where everything requires owner approval\n- Revenue growth stagnation despite market demand\n- Scaling challenges that lead to burnout and inefficiency"
    },
    {
      question: "What services do you offer?",
      answer: "- Process optimization and systematization\n- Team structure and workflow design\n- Leadership delegation frameworks\n- Revenue growth strategy implementation\n- Operational efficiency audits and improvements"
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "We work with growing businesses that are ready to scale. Our solutions are designed for companies with between 4 and 100 employees."
    },
    {
      question: "What industries do you serve?",
      answer: "Our expertise is in the tech sector, retail, call centers, and healthcare."
    },
    {
      question: "How quickly can you deliver results?",
      answer: "We deliver high‑value solutions in as little as 30 days."
    },
    {
      question: "What does the implementation process look like?",
      answer: "- Initial assessment of your current operations and challenges\n- Strategic planning and solution design\n- Implementation of new systems and processes\n- Team training and change management\n- Ongoing support and optimization"
    },
    {
      question: "Do you work remotely or on‑site?",
      answer: "We primarily work with you remotely; however, we offer custom on‑site solutions to meet your needs."
    },
    {
      question: "How involved does our team need to be during implementation?",
      answer: "Your team's involvement is crucial for success. We work collaboratively with your key team members to ensure solutions are practical, sustainable, and well‑adopted."
    },
    {
      question: "How much do your services cost?",
      answer: "We offer high‑value, low‑cost solutions designed to provide significant return on investment. Pricing varies based on your specific needs and scope of work – contact us for a customized quote."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "Our clients typically see improvements in efficiency, reduced operational bottlenecks, clearer team accountability, and accelerated revenue growth. Many experience significant time savings and reduced stress within the first 30 days."
    }
  ];

  // Framer Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };
  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  // FAQ toggle
  const toggleFaq = (index: number): void => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const navigateService = (direction: string) => {
    if (direction === 'prev') {
      setSelectedService(selectedService === 0 ? services.length - 1 : selectedService - 1);
    } else {
      setSelectedService(selectedService === services.length - 1 ? 0 : selectedService + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.01 }}>
                <Link href="/">
                  <div className="relative">
                    <Image
                      src="/Images/logo2.png"
                      alt="Your Company"
                      width={100}
                      height={36}
                      className="h-9 w-auto object-contain"
                      priority
                    />
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <motion.a
                href="#services"
                onClick={e => { e.preventDefault(); handleNavToServices(); }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >Services</motion.a>
              <motion.a href="#why-us" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Why Us</motion.a>
              <motion.a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">FAQ</motion.a>
            </div>
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                <motion.a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Services
                </motion.a>
                <motion.a href="#why-us" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Why Us
                </motion.a>
                <motion.a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </motion.a>
                <motion.button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  Book AI Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative py-0 min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <Image
          src="/Images/landingpage.png"
          alt="Landing Page Background"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0"
          priority
        />
        {/* Overlay for better text legibility */}
        <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-[#222a3d]/70 via-[#1c1f2a]/50 to-[#4066d6]/30 pointer-events-none" />
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-[calc(100vh-5rem)] justify-center">
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center px-4 py-2 mb-6 bg-white/80 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 backdrop-blur-md"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Powered by experience, Supported by technology
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-400 bg-clip-text text-transparent">Real Experts.</span> Real Talk. <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-400 bg-clip-text text-transparent">Real Results.</span>
            </motion.h1>
            <motion.div className="text-lg md:text-xl text-white/90 font-medium min-h-[2.2em] mb-8" variants={fadeIn} initial="hidden" animate="visible">
              <TypewriterText words={typewriterWords} />
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              className="mb-7 text-base md:text-lg text-white/90 font-medium"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <p>
                Discover how your organization can streamline operations, enhance customer experiences and unlock new opportunities through expert-led solutions. Our team partners with you from strategy to implementation, ensuring measurable results for businesses of every size and sector.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 bg-gradient-to-br bg-gray-50 relative">
        <DotBackground density={1} opacity={0.2} color="#919294" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
            <motion.h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight" variants={fadeIn}>
              Ready to Scale with Confidence?
            </motion.h2>
            <motion.p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium" variants={fadeIn}>
              Join successful business leaders who trust STAAJ Solutions to help them reach their full potential.
            </motion.p>
            <motion.div variants={fadeIn}>
              <motion.button
                onClick={() => router.push('/auth')}
                className="group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(220, 38, 127, 0.3)",
                    "0 15px 35px rgba(220, 38, 127, 0.5)",
                    "0 10px 25px rgba(220, 38, 127, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Pulsing Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <Heart className="w-5 h-5 fill-current" />
                </motion.div>
                <span className="relative z-10 font-semibold">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <WhyChooseUsSection sections={whyChooseUs} />
      {/* our people */}
      <OurPeopleSection />


      {/* Services Section */}
      <section
        ref={sectionRef}
        id="services"
        className="py-16 bg-gradient-to-br from-gray-50 via-pink-25 to-white relative"
      >
        <DotBackground density={1} opacity={0.2} color="#919294" />
        {/* Optimized Background Elements - Reduced blur for better performance */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full blur-2xl opacity-40" />
        </div>

        <motion.div
          initial={smoothVariants.fadeInUp.initial}
          whileInView={smoothVariants.fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothTransition, duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={smoothVariants.scaleIn.initial}
              whileInView={smoothVariants.scaleIn.animate}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 rounded-full text-sm font-semibold border border-pink-200 shadow-md backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              Our Signature Service Suite
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <motion.h2
              initial={smoothVariants.fadeInUp.initial}
              whileInView={smoothVariants.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent mb-4 leading-tight"
            >
              Transformative Solutions for Every Stage of Growth
            </motion.h2>
            <motion.p
              initial={smoothVariants.fadeInUp.initial}
              whileInView={smoothVariants.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.3 }}
              className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              STAAJ Solutions delivers high-value, low-cost transformation in as little as{' '}
              <span className="font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded-lg">30 days</span>.
              We combine people-first expertise with best-practice technology to accelerate your business journey.
            </motion.p>
          </div>

          {/* Service Navigator - Optimized for smoother interactions */}
          <motion.div
            className="mb-8"
            initial={smoothVariants.fadeInUp.initial}
            whileInView={smoothVariants.fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {services.map((service, index) => (
                <motion.button
                  key={service.key}
                  onClick={() => setSelectedService(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={quickTransition}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedService === index
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg'
                      : 'bg-white/80 text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-pink-200/50'
                    }`}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Service Display - Optimized for smoother transitions */}
          <div className="mb-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={smoothTransition}
                className="absolute inset-0"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-xl overflow-hidden">
                  {/* Service Navigation - Improved button interactions */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 border-b border-pink-200/50">
                    <motion.button
                      onClick={() => navigateService('prev')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={quickTransition}
                      className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <ChevronLeft className="w-5 h-5 text-pink-600" />
                    </motion.button>
                    <div className="text-center">
                      <h3 className="text-sm font-semibold text-pink-700">
                        Service {selectedService + 1} of {services.length}
                      </h3>
                    </div>
                    <motion.button
                      onClick={() => navigateService('next')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={quickTransition}
                      className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <ChevronRight className="w-5 h-5 text-pink-600" />
                    </motion.button>
                  </div>

                  {/* Service Content - Scrollable to show all content */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row gap-4 min-h-full">
                      {/* Left Column - Service Info */}
                      <div className="lg:w-3/4">
                        {/* Icon and Heading */}
                        <motion.div
                          className="flex items-center gap-3 mb-3"
                          initial={smoothVariants.slideIn.initial}
                          animate={smoothVariants.slideIn.animate}
                          transition={{ ...smoothTransition, delay: 0.1 }}
                        >
                          <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center text-white shadow-lg border border-gray-200">
                            {services[selectedService].icon}
                          </div>
                          <div>
                            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1">
                              {services[selectedService].title}
                            </h3>
                            <p className="text-pink-600 font-medium text-xs">
                              {services[selectedService].subtitle}
                            </p>
                          </div>
                        </motion.div>

                        {services[selectedService].summary && (
                          <motion.div
                            className="text-gray-600 text-lg mb-6 leading-relaxed"
                            initial={smoothVariants.fadeInUp.initial}
                            animate={smoothVariants.fadeInUp.animate}
                            transition={{ ...smoothTransition, delay: 0.2 }}
                          >
                            {services[selectedService].summary.split('\n').map((line, index) => (
                              <div key={index}>
                                {index === 0 ? (
                                  <span className="font-bold text-pink-600">{line}</span>
                                ) : (
                                  <span>{line}</span>
                                )}
                                {index < services[selectedService].summary.split('\n').length - 1 && <br />}
                              </div>
                            ))}
                          </motion.div>
                        )}

                        {services[selectedService].objective && (
                          <motion.div
                            className="mb-6"
                            initial={smoothVariants.fadeInUp.initial}
                            animate={smoothVariants.fadeInUp.animate}
                            transition={{ ...smoothTransition, delay: 0.3 }}
                          >
                            <div className="text-gray-600 leading-relaxed space-y-4">
                              {services[selectedService].objective.split('\n\n').map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                  {section.split('\n').map((line, lineIndex) => {
                                    if (line.endsWith(':')) {
                                      // This is a section header like "Who it's for:", "What they get:", etc.
                                      return (
                                        <h4 key={lineIndex} className="font-semibold text-gray-900 mb-2">
                                          {line}
                                        </h4>
                                      );
                                    } else if (line.startsWith('•')) {
                                      // This is a bullet point
                                      return (
                                        <div key={lineIndex} className="flex items-start gap-2 ml-4">
                                          <span className="text-pink-600 mt-1">•</span>
                                          <span>{line.substring(2)}</span>
                                        </div>
                                      );
                                    } else if (line.trim()) {
                                      // This is regular text
                                      return (
                                        <p key={lineIndex} className="mb-2">
                                          {line}
                                        </p>
                                      );
                                    }
                                    return null;
                                  })}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {services[selectedService].features && services[selectedService].features.length > 0 && (
                          <motion.div
                            className="mb-6"
                            initial={smoothVariants.fadeInUp.initial}
                            animate={smoothVariants.fadeInUp.animate}
                            transition={{ ...smoothTransition, delay: 0.4 }}
                          >
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                            <div className="space-y-3">
                              {services[selectedService].features.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ ...quickTransition, delay: index * 0.05 }}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mt-2 flex-shrink-0" />
                                  <p className="text-gray-600 leading-relaxed">{feature}</p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {services[selectedService].ideal && (
                          <motion.div
                            className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-200/50"
                            initial={smoothVariants.scaleIn.initial}
                            animate={smoothVariants.scaleIn.animate}
                            transition={{ ...smoothTransition, delay: 0.5 }}
                          >
                            <h4 className="text-sm font-semibold text-pink-700 mb-2">Ideal For</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {services[selectedService].ideal}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      {/* Right Column - Image */}
                      <motion.div
                        className="lg:w-1/3"
                        initial={smoothVariants.scaleIn.initial}
                        animate={smoothVariants.scaleIn.animate}
                        transition={{ ...smoothTransition, delay: 0.3 }}
                      >
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 lg:h-full">
                          <img
                            src={services[selectedService].image}
                            alt={services[selectedService].title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Spacer to maintain layout */}
            <div className="invisible min-h-[650px]" />
          </div>

        </motion.div>
      </section>
      {/* FAQ */}
      <section id="faq" className="py-16 relative overflow-hidden">
        <DotBackground density={1} opacity={0.2} color="#919294" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              Questions?
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our expert consulting services for all industries and organizations.
            </p>
          </motion.div>
          <motion.div className="space-y-4" variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                variants={scaleIn}
              >
                <button
                  className="w-full flex justify-between items-center text-left p-6"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-2 border-t border-gray-100 text-sm text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={fadeIn}>
              Ready to Begin Your STAAJ Journey?
            </motion.h2>
            <motion.p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto" variants={fadeIn}>
              Join successful business leaders who trust STAAJ Solutions to help them reach their full potential.
            </motion.p>
            <motion.div variants={fadeIn}>
              <motion.button
                onClick={() => router.push('/auth')}
                className="group  hover:from-red-700 hover:to-pink-700 bg-white text-red-500 font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(220, 38, 127, 0.3)",
                    "0 15px 35px rgba(220, 38, 127, 0.5)",
                    "0 10px 25px rgba(220, 38, 127, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Pulsing Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r   from-pink-600   to-red-500 rounded-lg opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <Heart className="w-5 h-5 fill-current" />
                </motion.div>
                <span className="relative z-10 font-semibold">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 py-12 relative">
        <DotBackground density={1} opacity={0.2} color="#919294" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
                <img src="/Images/logo2.png" alt="STAAJ Solutions" className="h-8 w-auto mr-2" />
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Empowering organizations to scale with confidence through people-first strategies and innovative solutions.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/company/staaj-solutions/" className="p-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-pink-600 hover:border-pink-200 hover:shadow-md transition-all duration-200">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://x.com/Staajsolutions" className="p-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-blue-500 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                  <img src="/Images/x.svg" className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/staajsolutions" className="p-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/staajsolutions/" className="p-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-pink-500 hover:border-pink-200 hover:shadow-md transition-all duration-200">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:bg-pink-600 transition-colors"></span>
                  STAAJ Lite
                </a></li>
                <li><a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:bg-pink-600 transition-colors"></span>
                  STAAJ Pro
                </a></li>
                <li><a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:bg-pink-600 transition-colors"></span>
                  STAAJ Enterprise
                </a></li>
                <li><a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:bg-pink-600 transition-colors"></span>
                  Custom Solutions
                </a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#why-us" className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:bg-pink-600 transition-colors"></span>
                  About Us
                </a></li>
                <li><a href="#why-us" className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:bg-pink-600 transition-colors"></span>
                  Our Team
                </a></li>
                <li><a href="#why-us" className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:bg-pink-600 transition-colors"></span>
                  Our Process
                </a></li>
                <li><a href="#faq" className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:bg-pink-600 transition-colors"></span>
                  FAQ
                </a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Connect</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start group">
                  <div className="p-2 bg-pink-50 rounded-lg mr-3 group-hover:bg-pink-100 transition-colors">
                    <Phone className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                    <span className="text-gray-700 font-medium">866-98-STAAJ</span>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="p-2 bg-pink-50 rounded-lg mr-3 group-hover:bg-pink-100 transition-colors">
                    <Mail className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <span className="text-gray-700 font-medium">booking@staaj.com</span>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="p-2 bg-pink-50 rounded-lg mr-3 group-hover:bg-pink-100 transition-colors">
                    <MapPin className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                    <span className="text-gray-700 font-medium">Los Angeles, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} STAAJ Solutions. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a>
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3 text-pink-500 fill-current" />
                  <span>Made with care in LA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GenericLandingPage;
