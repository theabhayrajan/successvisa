'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    <div className="min-h-screen lg:h-screen w-full bg-white flex flex-col lg:flex-row items-center justify-center p-3 sm:p-4 md:p-6 lg:p-6 xl:p-10 overflow-y-auto lg:overflow-hidden relative">
      {/* LEFT SIDE - ORIGINAL DESIGN */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:pr-4 xl:pr-6 py-6 lg:py-0 relative z-20 px-2 sm:px-4">
        <div className="mb-4 sm:mb-6 lg:mb-8 xl:mb-10 w-full max-w-[220px] sm:max-w-xs md:max-w-sm shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl lg:rounded-2xl overflow-hidden border border-slate-100 bg-white/80 backdrop-blur-sm">
          <Image
            src="/success-visa-immigration.webp"
            alt="SuccessVisa Logo"
            width={380}
            height={120}
            className="hover:scale-[1.02] transition-transform duration-700 w-full h-auto object-contain"
            priority
          />
        </div>

        <h1 className="text-[clamp(1.6rem,5vw,2.6rem)] sm:text-[clamp(2.2rem,6vw,3.6rem)] lg:text-[clamp(3rem,5.5vw,4.2rem)] xl:text-[clamp(4rem,6vw,5.5rem)] font-black text-slate-900 leading-[0.9] mb-4 sm:mb-5 lg:mb-7 -tracking-[0.02em] drop-shadow-sm max-w-lg w-full px-1 sm:px-0">
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-700 bg-clip-text text-transparent inline">
            SUCCESS
          </span>
          <span className="bg-gradient-to-r from-orange-600 via-[#f8a536] to-amber-500 bg-clip-text text-transparent inline ml-3">
            VISA
          </span>
        </h1>

        <div className="max-w-lg w-full mb-5 sm:mb-6 lg:mb-8 space-y-2 px-1 sm:px-0">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-700 leading-tight">
            Australia's Premier Migration & Education Consultancy
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-tight font-medium">
            100% Success • 20+ Years • 5000+ Applications Processed
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg px-1 sm:px-0">
         <Link
            href="https://www.successvisa.com.au/"
            className="group flex-1 text-center py-3 sm:py-3.5 px-5 sm:px-7 bg-white/70 hover:bg-white border border-slate-200/70 hover:border-orange-200 rounded-xl lg:rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400 backdrop-blur-sm min-h-[44px] flex items-center justify-center"
          >
            <span className="block group-hover:hidden">Our Services</span>
            <span className="hidden group-hover:block">Explore Services</span>
          </Link>
          <Link
            href="https://www.successvisa.com.au"
            className="group flex-1 text-center py-3 sm:py-3.5 px-5 sm:px-7 bg-gradient-to-r from-orange-500 via-[#f8a536] to-amber-500 hover:from-orange-600 hover:via-[#f8a536] hover:to-orange-600 text-white font-bold rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 min-h-[44px] flex items-center justify-center text-xs sm:text-sm"
          >
            Free Consultation
          </Link>
        </div>
      </section>

      {/* RIGHT SIDE - SCROLLABLE ON LG+ DEVICES */}
      <section
        id="services"
        className="w-full lg:w-1/2 lg:h-full flex flex-col justify-start lg:pl-4 xl:pl-6 py-6 lg:py-4 relative z-30 bg-white/60 backdrop-blur-xl rounded-xl lg:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-200/40 p-4 sm:p-5 md:p-6 lg:p-4 xl:p-6 lg:overflow-y-auto"
      >
        {/* Premium Header */}
        <div id="cta" className="mb-4 sm:mb-5 lg:mb-6 text-center lg:text-left flex-shrink-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-slate-900 via-orange-800 to-[#f8a536] bg-clip-text text-transparent mb-3 sm:mb-4 drop-shadow-lg leading-tight tracking-tight">
            Proven Excellence
          </h2>
          <div className="w-16 sm:w-20 lg:w-40 h-0.5 lg:h-1 mx-auto lg:ml-0 bg-gradient-to-r from-[#f8a536] to-orange-500 rounded-full shadow-md"></div>
        </div>

        {/* Executive KPI Cluster */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-4 xl:gap-5 mb-5 sm:mb-6 lg:mb-6 flex-shrink-0">
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
              className="group relative p-3 sm:p-4 lg:p-4 xl:p-5 rounded-xl lg:rounded-2xl bg-gradient-to-br from-white/90 via-slate-50/50 to-orange-50/50 backdrop-blur-xl shadow-md hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 border border-slate-200/60 hover:border-[#f8a536]/50 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8a536]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 text-center">
                <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black text-[#f8a536] mb-2 sm:mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {kpi.icon}
                </div>
                <div className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-black text-slate-900 mb-1 leading-none">
                  {kpi.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-sm font-bold text-slate-800 mb-0.5 tracking-tight">
                  {kpi.title}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  {kpi.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Services Showcase */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 xl:gap-5 mb-5 sm:mb-6 lg:mb-6 flex-shrink-0">
          {[
            {
              icon: '🎓',
              title: 'Student Migration',
              desc: 'Subclass 500 • Top Universities',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: '👨‍💼',
              title: 'Skilled Visas',
              desc: '189/190/491 • Global Talent',
              color: 'from-emerald-500 to-green-500',
            },
            {
              icon: '❤️',
              title: 'Partner Visas',
              desc: '820/801 • Sponsorship',
              color: 'from-pink-500 to-rose-500',
            },
            {
              icon: '🏢',
              title: 'Business Visas',
              desc: '188/888 • Innovation',
              color: 'from-purple-500 to-violet-500',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group flex p-3 sm:p-4 lg:p-4 xl:p-5 rounded-xl lg:rounded-2xl bg-white shadow-sm hover:shadow-lg hover:shadow-orange-400/20 hover:-translate-y-1 hover:border-[#f8a536]/40 transition-all duration-500 border border-slate-200/50 backdrop-blur-sm cursor-pointer hover:scale-[1.01]"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${service.color}`}
              >
                <span className="text-base sm:text-lg lg:text-lg xl:text-xl">{service.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm sm:text-base lg:text-base xl:text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-800 leading-tight">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-700 font-medium leading-tight line-clamp-2">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ultimate Corporate CTA */}
        <div className="pt-4 sm:pt-5 lg:pt-4 border-t-2 lg:border-t-3 border-[#f8a536]/30 flex-shrink-0">
          <Link
            href="https://www.successvisa.com.au/visa-enquiry"
            className="group block w-full bg-gradient-to-r from-slate-900 via-orange-700 to-[#f8a536] hover:from-[#f8a536] hover:via-orange-600 hover:to-slate-900 text-white font-black py-3 sm:py-4 lg:py-3.5 xl:py-4 px-4 sm:px-6 lg:px-6 xl:px-8 rounded-xl lg:rounded-2xl text-sm sm:text-base lg:text-base xl:text-lg shadow-xl hover:shadow-2xl hover:shadow-[#f8a536]/40 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 uppercase tracking-wider text-center relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              <span className="hidden sm:inline">Secure Your Future in Australia</span>
              <span className="sm:hidden">Book Consultation</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ml-2 group-hover:translate-x-2 transition-all duration-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/50 blur opacity-0 group-hover:opacity-100 transition-all duration-1000 -skew-x-12 animate-shimmer-delayed"></div>
          </Link>

          <div className="text-center mt-4 sm:mt-5 lg:mt-4 pt-4 sm:pt-5 lg:pt-4 border-t border-slate-200/50 text-[10px] sm:text-xs text-slate-600 space-y-1">
            <div className="font-semibold text-slate-800">📍 Sydney • Melbourne • Registered Migration Agent</div>
            <div>👨‍💼 Founded 2020 by Amit Kansal</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', -apple-system, sans-serif !important; }
        
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
        
        /* Small devices: Allow scrolling, vertical layout */
        @media (max-width: 1023px) {
          .overflow-y-auto {
            overflow-y: auto !important;
          }
        }
        
        /* Large devices: No scrolling on main container, right section scrollable */
        @media (min-width: 1024px) {
          .lg\\:overflow-hidden {
            overflow: hidden !important;
          }
          .lg\\:overflow-y-auto {
            overflow-y: auto !important;
            max-height: 100%;
          }
          .lg\\:h-screen {
            height: 100vh !important;
          }
        }
        
        /* Custom scrollbar for right section */
        @media (min-width: 1024px) {
          section::-webkit-scrollbar {
            width: 6px;
          }
          section::-webkit-scrollbar-track {
            background: rgba(241, 245, 249, 0.3);
            border-radius: 10px;
          }
          section::-webkit-scrollbar-thumb {
            background: rgba(248, 165, 54, 0.5);
            border-radius: 10px;
          }
          section::-webkit-scrollbar-thumb:hover {
            background: rgba(248, 165, 54, 0.8);
          }
        }
      `}</style>
    </div>
  );
}
