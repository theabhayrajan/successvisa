'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SuccessVisaPerfectBrand() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 flex items-center justify-center p-4 sm:p-6">
        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 to-[#f8a536] bg-clip-text text-transparent animate-pulse">
          SuccessVisa Professional
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-white flex flex-col-reverse lg:flex-row items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 overflow-hidden relative">
      {/* LEFT SIDE - ORIGINAL APPROVED DESIGN (Kept Exactly Same) */}
      <section className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start lg:pr-8 xl:pr-12 pb-6 lg:pb-0 order-2 lg:order-1 relative z-20 px-2 sm:px-4">
        <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 w-full max-w-sm sm:max-w-md shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden border border-slate-100 bg-white/80 backdrop-blur-sm">
          <Image
            src="/success-visa-immigration.webp"
            alt="SuccessVisa Logo"
            width={380}
            height={120}
            className="hover:scale-[1.02] transition-transform duration-700 w-full h-auto object-contain"
            priority
          />
        </div>

        <h1 className="text-[clamp(1.8rem,5vw,2.8rem)] sm:text-[clamp(2.2rem,6vw,3.8rem)] lg:text-[clamp(3.5rem,7vw,4.8rem)] xl:text-[clamp(4.2rem,6.5vw,6.2rem)] font-black text-slate-900 leading-[0.88] sm:leading-[0.9] mb-4 sm:mb-6 lg:mb-8 -tracking-[0.02em] sm:-tracking-[0.03em] drop-shadow-sm max-w-lg w-full px-1 sm:px-0">
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-700 bg-clip-text text-transparent block lg:inline">
            SUCCESS
          </span>
          <span className="bg-gradient-to-r from-orange-600 via-[#f8a536] to-amber-500 bg-clip-text text-transparent block lg:inline lg:ml-4">
            VISA
          </span>
        </h1>

        <div className="max-w-lg w-full mb-6 sm:mb-8 lg:mb-10 xl:mb-12 space-y-2 sm:space-y-3 px-1 sm:px-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-700 leading-tight">
            Australia's Premier Migration & Education Consultancy
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium">
            100% Success • 20+ Years • 5000+ Applications Processed
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-lg lg:max-w-xl px-1 sm:px-0">
          <a
            href="#services"
            className="group flex-1 text-center py-3 sm:py-4 px-6 sm:px-8 bg-white/70 hover:bg-white border border-slate-200/70 hover:border-orange-200 rounded-2xl text-xs sm:text-sm lg:text-base font-semibold text-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400 backdrop-blur-sm min-h-[44px] sm:min-h-[52px] flex items-center justify-center"
          >
            <span className="block group-hover:hidden">Our Services</span>
            <span className="hidden group-hover:block">Explore Services</span>
          </a>
          <a
            href="#cta"
            className="group flex-1 text-center py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-orange-500 via-[#f8a536] to-amber-500 hover:from-orange-600 hover:via-[#f8a536] hover:to-orange-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 min-h-[44px] sm:min-h-[52px] flex items-center justify-center text-xs sm:text-sm lg:text-base"
          >
            Free Consultation
          </a>
        </div>
      </section>

      {/* RIGHT SIDE - EXECUTIVE POWERHOUSE (New Ultimate Design) */}
      <section
        id="services"
        className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:pl-8 xl:pl-12 order-1 lg:order-2 relative z-30 bg-white/60 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-slate-200/40 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 lg:mr-4 px-2 sm:px-4"
      >
        {/* Premium Header */}
        <div id="cta" className="mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-slate-900 via-orange-800 to-[#f8a536] bg-clip-text text-transparent mb-4 sm:mb-6 drop-shadow-lg leading-tight tracking-tight">
            Proven Excellence
          </h2>
          <div className="w-20 sm:w-24 h-1 mx-auto lg:ml-0 bg-gradient-to-r from-[#f8a536] to-orange-500 rounded-full shadow-md"></div>
        </div>

        {/* Executive KPI Cluster */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12">
          {[
            {
              icon: '✅',
              value: '100%',
              title: 'Success Rate',
              subtitle: 'Every Application',
            },
            {
              icon: '⭐',
              value: '20+',
              title: 'Years',
              subtitle: 'MARA Expertise',
            },
            {
              icon: '👥',
              value: '5K+',
              title: 'Clients',
              subtitle: 'Global Success',
            },
          ].map((kpi, i) => (
            <div
              key={i}
              className="group relative p-4 sm:p-6 lg:p-8 xl:p-10 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/50 to-orange-50/50 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-[1.02] lg:hover:scale-[1.05] transition-all duration-700 border border-slate-200/60 hover:border-[#f8a536]/50 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8a536]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f8a536] mb-4 sm:mb-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {kpi.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-2 sm:mb-3 leading-none">
                  {kpi.value}
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 mb-1 sm:mb-2 tracking-tight">
                  {kpi.title}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  {kpi.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Services Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12">
          {[
            {
              icon: '🎓',
              title: 'Student Migration',
              desc: 'Subclass 500 • Top 50 Universities • Genuine Student',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: '👨‍💼',
              title: 'Skilled Visas',
              desc: '189/190/491 • Points Tested • Global Talent',
              color: 'from-emerald-500 to-green-500',
            },
            {
              icon: '❤️',
              title: 'Partner Visas',
              desc: '820/801 • De Facto • Spousal Sponsorship',
              color: 'from-pink-500 to-rose-500',
            },
            {
              icon: '🏢',
              title: 'Business Visas',
              desc: '188/888 • Investment • Innovation',
              color: 'from-purple-500 to-violet-500',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group flex p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white shadow-md hover:shadow-xl hover:shadow-orange-400/20 hover:-translate-y-2 sm:hover:-translate-y-3 hover:border-[#f8a536]/40 transition-all duration-600 border border-slate-200/50 backdrop-blur-sm cursor-pointer hover:scale-[1.01] lg:hover:scale-[1.02]"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${service.color}`}
              >
                <span className="text-xl sm:text-2xl lg:text-3xl">{service.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-orange-800 leading-tight">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ultimate Corporate CTA */}
        <div className="pt-6 sm:pt-8 border-t-4 border-[#f8a536]/30">
          <a
            href="https://www.successvisa.com.au/visa-enquiry"
            className="group block w-full max-w-sm sm:max-w-md mx-auto bg-gradient-to-r from-slate-900 via-orange-700 to-[#f8a536] hover:from-[#f8a536] hover:via-orange-600 hover:to-slate-900 text-white font-black py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-2xl lg:rounded-3xl text-lg sm:text-xl lg:text-2xl shadow-2xl hover:shadow-[0_25px_60px_rgba(248,165,54,0.4)] hover:-translate-y-3 sm:hover:-translate-y-4 transition-all duration-700 uppercase tracking-wider text-center relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              Secure Your Future in Australia
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ml-3 sm:ml-4 group-hover:translate-x-3 sm:group-hover:translate-x-4 transition-all duration-700 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/50 blur opacity-0 group-hover:opacity-100 transition-all duration-1000 -skew-x-12 animate-shimmer-delayed"></div>
          </a>

          <div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200/50 text-xs sm:text-sm text-slate-600 space-y-1">
            <div className="font-semibold text-slate-800">📍 Sydney • Melbourne • Registered Migration Agent</div>
            <div>👨‍💼 Founded 2020 by Amit Kansal</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', -apple-system, sans-serif !important; }
        .h-screen { height: 100vh !important; }
        .w-screen { width: 100vw !important; }
        .line-clamp-2 { 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden; 
        }
        
        @keyframes shimmer-delayed {
          0% { transform: translateX(-150%) skewX(-20deg); opacity: 0; }
          100% { transform: translateX(150%) skewX(-20deg); opacity: 1; }
        }
        .animate-shimmer-delayed { animation: shimmer-delayed 2s infinite; }
        
        /* Mobile-first responsive fixes - NO DESIGN CHANGE */
        @media (max-width: 640px) {
          .p-3 { padding: 0.75rem !important; }
          [class*="text-"] { line-height: 1.1 !important; }
          .grid-cols-2, .grid-cols-3 { grid-template-columns: repeat(1, 1fr) !important; }
        }
        
        @media (max-height: 700px) {
          .p-3 { padding: 0.75rem !important; }
          .p-4, .p-6 { padding: 0.875rem !important; }
          [class*="mb-"] { margin-bottom: 0.875rem !important; }
          [class*="text-"] { font-size: 0.9em !important; line-height: 1.05 !important; }
          .grid-cols-2, .grid-cols-3 { grid-template-columns: repeat(1, 1fr) !important; }
        }
        
        @media (max-width: 1024px) {
          .lg\\:grid-cols-3 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        
        @media print {
          * { print-color-adjust: exact !important; }
          body * { visibility: hidden !important; }
          .h-screen, .h-screen * { visibility: visible !important; }
          .h-screen { 
            height: 100vh !important; width: 100vw !important; 
            position: fixed !important; left: 0 !important; top: 0 !important; 
            padding: 1.5rem !important; overflow: visible !important;
          }
          .shadow-*, .backdrop-blur-* { 
            background: white !important; 
            box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important; 
          }
        }
      `}</style>
    </div>
  );
}
