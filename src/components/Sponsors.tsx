import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Mail, ArrowUpRight, Sparkles, Shield, Cpu, Users, Building, Terminal } from 'lucide-react';
import { easeCinematic, easeSnappy } from '../utils/motion';
import { playSfx } from '../utils/audio';

interface SponsorsProps {
  onPartnerClick: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onPartnerClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 24,
    restDelta: 0.001,
  });

  const partnerPillars = [
    {
      num: '01',
      role: 'TITLE PARTNER',
      status: 'OPEN FOR CO-HOSTING',
      scope: 'Exclusive naming presence across the 24-hour sprint, opening keynote address, customized challenge track, and direct jury representation.',
      deliverables: ['Keynote Keynotes', 'Track Ownership', 'Dedicated Lounge', 'VIP Access'],
      icon: Building,
      accent: 'border-[#FFD633] text-[#FFD633]',
    },
    {
      num: '02',
      role: 'TECHNICAL INFRASTRUCTURE',
      status: 'ACTIVE SLOTS',
      scope: 'Empower student hackers with foundational AI models, developer cloud credits, high-speed API keys, and specialized hands-on technical workshop slots.',
      deliverables: ['Cloud Credits', 'API Access', 'Dev Workshop', 'Mentor Table'],
      icon: Cpu,
      accent: 'border-[#FF1744] text-[#FF1744]',
    },
    {
      num: '03',
      role: 'EDUCATION ADVOCATE',
      status: 'ACTIVE SLOTS',
      scope: 'Sponsor high school participation grants, prototyping hardware kits, student awards, and educational resource stipends for underprivileged innovators.',
      deliverables: ['Hardware Grants', 'Student Stipends', 'Award Support', 'School Outreach'],
      icon: Shield,
      accent: 'border-white text-white',
    },
    {
      num: '04',
      role: 'COMMUNITY & ECOSYSTEM',
      status: 'ACTIVE SLOTS',
      scope: 'Partner with student developer communities, academic hack clubs, and high school computer science societies to cross-promote and share talent.',
      deliverables: ['Network Access', 'Event Cross-Promo', 'Community Lounge', 'Talent Archive'],
      icon: Users,
      accent: 'border-[#FFD633] text-[#FFD633]',
    },
  ];

  return (
    <section
      ref={containerRef}
      id="sponsors"
      className="py-16 sm:py-24 bg-black border-b-2 border-white/20 relative select-none overflow-hidden w-full max-w-[100vw]"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-cyber-grid" />

      {/* Giant Background Typography Watermark */}
      <div className="absolute top-1/3 -left-12 pointer-events-none select-none opacity-[0.03] leading-none z-0 hidden sm:block">
        <span className="font-display text-[26vw] block text-white">ALLIES</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Section Header & Label */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-2.5 h-2.5 bg-[#FF1744] rotate-45 shrink-0" />
          <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
            07. PARTNERSHIPS & ALLIANCES
          </span>
          <div className="h-px flex-grow bg-white/20" />
          <span className="font-mono-tech text-[10px] text-white/50 tracking-widest uppercase hidden sm:inline-block">
            CO-HOST & EMPOWER
          </span>
        </div>

        {/* 2. Asymmetric Editorial Headline Composition */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <div className="border-l-4 border-[#FF1744] pl-4 sm:pl-8 space-y-2">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.92]">
              <span className="block text-white">PARTNERSHIP</span>
              <span className="block text-[#FFD633]">/ COLLABORATE.</span>
            </h2>

            <p className="font-mono-tech text-xs sm:text-sm text-[#FF1744] uppercase tracking-widest font-bold pt-1">
              [ POWER THE HIGH SCHOOL ENGINEERING ARENA ]
            </p>
          </div>

          {/* Large Editorial Statement */}
          <div className="max-w-4xl">
            <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white leading-tight uppercase tracking-tight">
              BUILD SOMETHING MEANINGFUL WITH THE{' '}
              <span className="text-[#FF1744] underline decoration-[#FFD633] decoration-4 underline-offset-4">
                NEXT GENERATION OF CREATORS.
              </span>
            </h3>
            <p className="font-body text-sm sm:text-lg text-white/80 leading-relaxed mt-4">
              We welcome organizations, developer toolchains, educational pioneers, and tech brands committed to equipping young student engineers in Classes 8–12. Partner with Lost in Stars to directly mentor, resource, and inspire 300+ selected builders.
            </p>
          </div>
        </div>

        {/* Animated Connecting Travel Line */}
        <div className="relative mb-12">
          <div className="h-1 bg-white/20 w-full" />
          <motion.div
            style={{ scaleX: lineProgress }}
            className="h-1 bg-[#FFD633] origin-left absolute top-0 left-0 right-0 shadow-[0_0_10px_#FFD633]"
          />
        </div>

        {/* 3. Asymmetrical Layout: Left Sticky Action Block + Right 4 Strategic Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Alliance Invitation Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-4 border-white bg-black p-6 sm:p-8 sticker-shadow-red relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-ping" />
                <span className="font-mono-tech text-xs text-[#FFD633] font-bold uppercase tracking-widest">
                  ALLIANCE DIRECTIVE
                </span>
              </div>

              <h4 className="font-display text-2xl sm:text-3xl text-white uppercase leading-tight mb-4">
                WHY SPONSOR BELOW ZERO?
              </h4>

              <p className="font-body text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
                Below Zero is 100% free for student builders. Your sponsorship directly underwrites high-speed hardware connectivity, wholesome meals, compute quotas, cash awards, and certified credentials.
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-white/20 font-mono-tech text-xs text-white/80 mb-6">
                <div className="flex items-center justify-between">
                  <span>TARGET PARTICIPANTS</span>
                  <span className="text-[#FFD633] font-bold">300+ STUDENTS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ELIGIBILITY FOCUS</span>
                  <span className="text-white font-bold">CLASSES 8–12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>IN-PERSON LOCATION</span>
                  <span className="text-[#FF1744] font-bold">DELHI NCR ARENA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SPRINT TIME DURATION</span>
                  <span className="text-[#FFD633] font-bold">24 NON-STOP HOURS</span>
                </div>
              </div>

              {/* Primary Tactile Partner CTA */}
              <motion.button
                whileHover={{ x: -3, y: -3 }}
                whileTap={{ x: 3, y: 3 }}
                transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                onClick={() => {
                  playSfx('click');
                  onPartnerClick();
                }}
                onMouseEnter={() => playSfx('hover')}
                className="w-full min-h-[50px] bg-[#FFD633] hover:bg-white text-black font-display text-xs sm:text-sm tracking-wider px-6 py-3.5 border-2 border-black sticker-shadow-white transition-colors cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>REQUEST PARTNER PROSPECTUS</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-white/60">
                <a
                  href="mailto:official.lostinstars@gmail.com?subject=BELOW%20ZERO%20PARTNERSHIP"
                  className="hover:text-[#FFD633] underline decoration-[#FFD633] flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF1744]" />
                  <span>official.lostinstars@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Asymmetrical Partner Category Tracks (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {partnerPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: easeSnappy }}
                  onMouseEnter={() => playSfx('hover')}
                  className="border-2 border-white/40 hover:border-white bg-black p-5 sm:p-6 transition-all duration-200 sticker-shadow-white relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Header: Number & Role */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="font-display text-2xl sm:text-3xl text-white group-hover:text-[#FFD633] transition-colors">
                          {pillar.num}
                        </span>
                        <span className={`font-mono-tech text-[10px] sm:text-xs font-bold px-2 py-0.5 border ${pillar.accent}`}>
                          {pillar.status}
                        </span>
                      </div>

                      <h4 className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-tight">
                        {pillar.role}
                      </h4>
                    </div>

                    <div className="w-10 h-10 border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5 text-[#FFD633]" />
                    </div>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed my-3.5">
                    {pillar.scope}
                  </p>

                  {/* Deliverables Tags */}
                  <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 font-mono-tech text-xs">
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-white/70 bg-white/5 px-2 py-0.5 border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        playSfx('click');
                        onPartnerClick();
                      }}
                      className="text-[11px] font-bold text-[#FFD633] hover:text-white underline decoration-[#FFD633] flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      <span>INQUIRE SLOT</span>
                      <span>→</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
