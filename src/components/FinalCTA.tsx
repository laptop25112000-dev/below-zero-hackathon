import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, ArrowRight, Sparkles, Terminal, Shield, Calendar, Clock } from 'lucide-react';
import { LostInStarsEmblem } from './LostInStarsLogo';
import { easeCinematic, easeSnappy, CinematicTextReveal, TiltCard } from '../utils/motion';
import { playSfx } from '../utils/audio';

interface FinalCTAProps {
  onRegisterClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRegisterClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Continuous scroll tracking for the cinematic yellow background takeover
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 160, damping: 26 });

  // 1. Yellow background expands and takes over viewport via expanding rounded aperture mask
  const bgClip = useTransform(
    smoothProgress,
    [0.05, 0.65],
    ['inset(16% 8% 16% 8% round 28px)', 'inset(0% 0% 0% 0% round 0px)']
  );
  const bgScale = useTransform(smoothProgress, [0.05, 0.65], [0.92, 1]);

  // 2. Headline typography slides up from compressed state
  const titleY = useTransform(smoothProgress, [0.15, 0.7], [50, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ clipPath: bgClip, scale: bgScale }}
      className="relative bg-[#FFD633] text-black py-16 sm:py-24 lg:py-28 border-t-4 border-b-4 border-black select-none overflow-hidden w-full max-w-[100vw] will-change-transform origin-center"
    >
      {/* Background Graphic Watermark Drift */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none opacity-[0.07] whitespace-nowrap z-0 hidden sm:block">
        <span className="font-display text-[25vw] leading-none text-black">
          BELOW ZERO // 24H SPRINT
        </span>
      </div>

      {/* Top Streetwear Stamp Tape */}
      <div className="absolute top-0 left-0 right-0 bg-black text-white py-1 px-4 flex items-center justify-between font-mono-tech text-[10px] tracking-widest uppercase border-b-2 border-black z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-ping" />
          <span>[ SPRINT STATUS: ACTIVE ARENA REGISTRATION ]</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>MID NOVEMBER 2026</span>
          <span>·</span>
          <span>24 HOURS</span>
          <span>·</span>
          <span className="text-[#FFD633]">OFFLINE DELHI NCR</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-6 sm:mt-4">
        
        {/* Asymmetrical High-Impact Poster Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Gigantic Takeover Headline (7 cols) with Scroll Slide */}
          <motion.div style={{ y: titleY }} className="lg:col-span-7 space-y-4 will-change-transform">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-mono-tech text-xs tracking-widest uppercase font-bold border-2 border-black sticker-shadow-red">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD633]" />
              <span>THE ARENA AWAITS YOUR CODE</span>
            </div>

            {/* Jaw-dropping Huge Typography */}
            <div className="relative pt-1">
              <h2 className="font-display text-[clamp(3.4rem,13.5vw,9.5rem)] leading-[0.84] uppercase text-black tracking-tight drop-shadow-[4px_4px_0_#FFFFFF] sm:drop-shadow-[6px_6px_0_#FFFFFF]">
                <CinematicTextReveal delay={0.05}>
                  <span className="block">READY</span>
                </CinematicTextReveal>
                <CinematicTextReveal delay={0.15}>
                  <span className="block mt-1">TO BUILD?</span>
                </CinematicTextReveal>
              </h2>
            </div>

            <div className="h-3 sm:h-4 bg-[#FF1744] border-2 border-black w-full" />
          </motion.div>

          {/* Right Column: Information Card & Kinetic Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dark Information Box with 3D Tilt */}
            <TiltCard maxTilt={5}>
              <div className="bg-black text-white p-6 sm:p-7 border-4 border-black sticker-shadow-black space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="font-mono-tech text-xs text-[#FFD633] font-bold uppercase tracking-wider">
                    EVENT SPECIFICATIONS
                  </span>
                  <span className="font-mono-tech text-[10px] text-white/60">
                    100% IN-PERSON
                  </span>
                </div>

                <div className="space-y-2 font-mono-tech text-xs sm:text-sm text-white/90">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">DATE</span>
                    <span className="font-bold text-[#FFD633]">MID NOVEMBER 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">SPRINT DURATION</span>
                    <span className="font-bold text-[#FF1744]">24 NON-STOP HOURS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">STUDENT ELIGIBILITY</span>
                    <span className="font-bold text-white">CLASSES 8–12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">LOCATION</span>
                    <span className="font-bold text-white">DELHI NCR ARENA</span>
                  </div>
                </div>

                <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed pt-2 border-t border-white/10">
                  Your unfinished experiments, wild AI prototypes, and boldest hypotheses start here. Assemble your squad or register solo.
                </p>
              </div>
            </TiltCard>

            {/* Kinetic High-Voltage CTA Buttons */}
            <div className="space-y-3 pt-2">
              <motion.button
                whileHover={{ x: -4, y: -4 }}
                whileTap={{ x: 4, y: 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                onClick={() => {
                  playSfx('click');
                  onRegisterClick();
                }}
                onMouseEnter={() => playSfx('hover')}
                className="w-full min-h-[56px] bg-black hover:bg-[#FF1744] text-white font-display text-sm sm:text-base tracking-wider px-8 py-4 border-4 border-black sticker-shadow-black transition-colors cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span>REGISTER YOUR INTEREST</span>
                <ArrowRight className="w-5 h-5 stroke-[3] group-hover:translate-x-2 transition-transform duration-200" />
              </motion.button>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <motion.a
                  whileHover={{ x: -2, y: -2 }}
                  whileTap={{ x: 2, y: 2 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                  href="mailto:official.lostinstars@gmail.com?subject=BELOW%20ZERO%20INQUIRY"
                  onMouseEnter={() => playSfx('hover')}
                  onClick={() => playSfx('click')}
                  className="flex-1 min-h-[46px] bg-white hover:bg-black hover:text-white text-black font-mono-tech font-bold text-xs tracking-wider px-4 py-3 border-3 border-black sticker-shadow-black transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CONTACT ORGANIZERS</span>
                </motion.a>

                <div className="hidden sm:flex items-center justify-center px-4 py-2 bg-black/10 border-2 border-black font-mono-tech text-[10px] text-black font-bold uppercase tracking-widest">
                  LOST IN STARS // 2026
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Graphic Marquee Strip inside Yellow takeover */}
        <div className="mt-14 pt-6 border-t-3 border-black flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs tracking-widest uppercase font-extrabold text-black">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-black rotate-45" />
            <span>LOST IN STARS PRESENTS BELOW ZERO</span>
          </div>
          <div className="flex items-center gap-3">
            <span>MID NOVEMBER 2026</span>
            <span>•</span>
            <span>24-HOUR SPRINT</span>
            <span>•</span>
            <span>DELHI NCR OFFLINE</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
};
