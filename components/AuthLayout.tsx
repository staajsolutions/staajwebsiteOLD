'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// PPTFM Framework Data
const PPTFM_ITEMS = [
  {
    label: 'People',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="3" stroke="#be185d" strokeWidth="2" />
        <circle cx="16" cy="8" r="3" stroke="#be185d" strokeWidth="2" />
        <path d="M2 20c0-2.5 4-4 6-4s6 1.5 6 4" stroke="#be185d" strokeWidth="2" />
        <path d="M14 20c0-2.5 4-4 6-4" stroke="#be185d" strokeWidth="2" />
      </svg>
    ),
    color: 'from-pink-500 to-rose-500',
    description: 'Build the right team and align them to what matters most.'
  },
  {
    label: 'Process',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" stroke="#be185d" strokeWidth="2"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#be185d" strokeWidth="2"/>
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    description: 'Streamline how work gets done—eliminate friction, boost flow.'
  },
  {
    label: 'Technology',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="12" rx="2" stroke="#be185d" strokeWidth="2"/>
        <path d="M2 19h20" stroke="#be185d" strokeWidth="2"/>
      </svg>
    ),
    color: 'from-blue-500 to-purple-500',
    description: 'Implement scalable tech that supports growth without the overwhelm.'
  },
  {
    label: 'Finance',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="12" width="4" height="8" rx="1" stroke="#be185d" strokeWidth="2"/>
        <rect x="8" y="8" width="4" height="12" rx="1" stroke="#be185d" strokeWidth="2"/>
        <rect x="14" y="4" width="4" height="16" rx="1" stroke="#be185d" strokeWidth="2"/>
        <path d="M20 18c.5-2.5-1-7-4-8" stroke="#be185d" strokeWidth="2"/>
      </svg>
    ),
    color: 'from-indigo-500 to-blue-500',
    description: 'Spend smarter, scale profitably, and track your runway with clarity.'
  },
  {
    label: 'Metrics',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="16" width="3" height="5" rx="1" stroke="#be185d" strokeWidth="2"/>
        <rect x="8.5" y="11" width="3" height="10" rx="1" stroke="#be185d" strokeWidth="2"/>
        <rect x="14" y="7" width="3" height="14" rx="1" stroke="#be185d" strokeWidth="2"/>
      </svg>
    ),
    color: 'from-green-500 to-indigo-500',
    description: 'Measure what matters. Use insights to guide real-time decisions.'
  }
];

const testimonials = [
  {
    name: 'Subhanjan Sarkar',
    role: 'Founder',
    company: 'PitchLink',
    date: 'May 3, 2024',
    content: `STAAJ has significantly expanded PitchLink's reach, connecting us with a diverse audience and generating valuable feedback. We're excited to collaborate further with STAAJ to overcome the challenges of prospect engagement and create numerous success stories together.`,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'John Kellog',
    role: 'Founder & CEO',
    company: '',
    date: 'May 1, 2024',
    content: `Enter STAAJ Solutions. With unparalleled expertise, their process crafted a strategy that's enhancing our visibility, connecting us with like-hearted individuals ready to support our mission. STAAJ has provided the expertise, guidance and implementation of a plan that will build our presence to gain the exposure needed to attract the attention of those who have interest. Their passion doesn't just match their skill—it amplifies it, intertwining with our dedication to the communities we serve.`,
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Jack Chen',
    role: 'Co-Founder',
    company: '',
    date: 'May 2, 2024',
    content: `Most importantly, STAAJ has given us some hope in the startup ecosystem. That there are authentic folks who genuinely want to help other businesses succeed.`,
    color: 'from-violet-500 to-purple-500'
  },
  {
    name: 'Bernard Mendez',
    role: 'Founder',
    company: '',
    date: 'May 8, 2024',
    content: `This year STAAJ has helped us create a visual board to lay out our current state as a company. Then we went through 5 areas and break down what were currently doing and worked on how to create better systems and find accountability in each area. It really helped us find the areas we needed additional support and spread out responsibility so it was digestible and easier to manage.`,
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Tom Hawkett',
    role: 'Chief Connection Advisor',
    company: '',
    date: 'May 10, 2024',
    content: `STAAJ has enabled us to design & develop out our sales & marketing processes to be able to deploy at a high level. We see STAAJ as a key strategic partner going forward as they enable our clients to grow sales and scale effectively.`,
    color: 'from-pink-600 to-rose-500'
  }
];

const SidebarContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialProgress, setTestimonialProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PPTFM_ITEMS.length);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(i => (i + 1) % testimonials.length);
      setTestimonialProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setTestimonialProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 120);

    return () => {
      clearInterval(interval);
      clearInterval(testimonialInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <aside
      className={`
        space-y-8
        transition-transform transition-opacity duration-1000 ease-out
        ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        origin-left
      `}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Hero */}
      <div className="space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
          <span className="text-pink-600 font-medium text-sm">🚀 Comprehensive Business Transformation</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Scale Your Business with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 block">
            Strategic Clarity
          </span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Our proven framework examines every aspect of your business to unlock sustainable growth and operational excellence.
        </p>
      </div>

      {/* PPTFM Framework Section */}
      <div className="bg-white rounded-2xl shadow-xl border border-pink-100 p-8 relative overflow-hidden w-full max-w-xl mx-auto z-10">
        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gray-100 rounded-t-2xl">
          <div
            className={`h-full bg-gradient-to-r ${PPTFM_ITEMS[current].color} transition-all duration-500 rounded-t-2xl`}
            style={{ width: `${((current + 1) / PPTFM_ITEMS.length) * 100}%` }}
          />
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">Our 5-Pillar Framework: <span className="text-pink-600 font-bold">PPTFM</span></h3>

          {/* Current Pillar Highlight */}
          <div className="mb-8 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl animate-stepfadein flex items-start gap-4">
            <div className={`w-16 h-16  text-white rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
              {PPTFM_ITEMS[current].icon}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">{PPTFM_ITEMS[current].label}</h4>
              <p className="text-gray-600">{PPTFM_ITEMS[current].description}</p>
            </div>
          </div>

          {/* All Pillars Overview (accordion style, no repeat icon or title in dropdown) */}
          <div className="grid grid-cols-1 gap-3">
            {PPTFM_ITEMS.map((item, idx) => (
              <div
                key={item.label}
                className={`flex flex-col rounded-lg transition-all duration-300 cursor-pointer
                  ${idx === current
                    ? 'bg-gradient-to-r from-pink-100 to-purple-100 scale-105'
                    : 'bg-gray-50 hover:bg-gray-100'}
                `}
              >
                <div
                  className="flex items-center space-x-3 p-3"
                  tabIndex={0}
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setExpanded(expanded === idx ? null : idx);
                  }}
                  aria-expanded={expanded === idx}
                  aria-controls={`pptfm-details-${idx}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                      idx === current
                        ? `bg-white-400 ${item.color} text-white shadow-md`
                        : 'bg-white text-gray-600'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      idx === current ? 'text-gray-800' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </span>
                  <svg
                    className={`ml-auto transition-transform ${expanded === idx ? 'rotate-180' : ''}`}
                    width="18" height="18" fill="none" viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" stroke="#be185d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {expanded === idx && (
                  <div
                    id={`pptfm-details-${idx}`}
                    className="animate-fadein px-4 pb-3"
                  >
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .animate-fadein { animation: fadein 0.18s cubic-bezier(0.4,0,0.2,1); }
          @keyframes fadein { from { opacity: 0; transform: translateY(-8px);} to { opacity: 1; transform: translateY(0);} }
          .animate-stepfadein { animation: stepfadein 0.3s cubic-bezier(0.4,0,0.2,1); }
          @keyframes stepfadein { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} }
        `}</style>
      </div>

      {/* Testimonials */}
      {/* Testimonials */}
<div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 relative overflow-hidden">
  {/* Testimonial Dots Indicator */}
  <div className="flex space-x-2 mb-4">
    {testimonials.map((_, idx) => (
      <div
        key={idx}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          idx === currentTestimonial
            ? `bg-gradient-to-r ${testimonials[currentTestimonial].color} scale-125`
            : 'bg-gray-300'
        }`}
      />
    ))}
  </div>
  {/* FIXED HEIGHT CONTAINER */}
<div className="flex flex-col items-center justify-center h-64 min-h-[16rem] max-h-64 overflow-hidden animate-testimonialfadein text-center">
  {/* Avatar above */}
  {testimonials[currentTestimonial].name != "Subhanjan Sarkar" ? 
  <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
    {testimonials[currentTestimonial].name[0]}
  </div> : <div className='bg-slate-200 rounded-full p-2'>
      <Image
              src="/images/pitchlink_logo.png"
              alt="Pitch Link Logo"
              className="object-contain"
              priority
              width={40}
              height={40}
              style={{ objectFit: 'contain'}}
            />
    </div>}
  {/* Testimonial text/content */}
  <div className="flex-1 flex flex-col justify-center h-full">
    <p className="text-gray-700 italic mb-2 line-clamp-5">{`"${testimonials[currentTestimonial].content}"`}</p>
    <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
    <p className="text-sm text-gray-600">
      {testimonials[currentTestimonial].role}
      {testimonials[currentTestimonial].company ? `, ${testimonials[currentTestimonial].company}` : ''}
    </p>
  </div>
</div>
</div>

    </aside>
  );
};

export const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/20 to-purple-50/20">
    {/* Header */}
    <div className="relative overflow-hidden bg-white border-b border-pink-100">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 via-purple-600/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="block w-48 h-12 relative transition-transform hover:scale-105" title="Go to homepage">
            <Image
              src="images/logo2.png"
              alt="STAAJ Solutions Logo"
              fill
              className="object-contain"
              priority
              sizes="192px"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="https://meetings.hubspot.com/booking-staaj?uuid=f8f41247-2e47-4139-8985-27421d59959a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-pink-600 font-semibold rounded-lg px-4 py-2 bg-pink-50 hover:bg-pink-100 border border-pink-200 transition shadow-sm"
          >
            📞 Ready to Scale? Book a Call
          </Link>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* 2-column grid: sidebar animates, form stays static */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <SidebarContent />
        <section className="w-full flex justify-center items-center">
          {children}
        </section>
      </div>
    </div>
  </div>
);