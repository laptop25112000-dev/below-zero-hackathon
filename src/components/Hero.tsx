import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowDownRight, Terminal, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { HeroOrbitalGraphic } from './LostInStarsLogo';
import { CountdownTimer } from './CountdownTimer';
import { easeCinematic, easeSnappy, CharacterReveal, TiltCard } from '../utils/motion';
import { playSfx } from '../utils/audio';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onExploreClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Continuous scroll tracking through the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scroll-driven transformations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 180, damping: 25, restDelta: 0.001 });

  // 1. Below Zero Title transforms: scales down, drifts upward, gentle fade
  const titleScale = useTransform(smoothProgress, [0, 0.65], [1, 0.84]);
  const titleY = useTransform(smoothProgress, [0, 0.65], [0, -55]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0.25]);

  // 2. Supporting text and buttons move upward smoothly
  const contentY = useTransform(smoothProgress, [0, 0.6], [0, -35]);

  // 3. Orbital visual shifts with multi-layer parallax & rotation
  const graphicY = useTransform(smoothProgress, [0, 0.8], [0, 85]);
  const graphicRotate = useTransform(smoothProgress, [0, 0.8], [0, 22]);

  // 4. Background watermark drifts at a different speed (0.3x)
  const watermarkY = useTransform(smoothProgress, [0, 1], ['0%', '35%']);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-76px)] flex flex-col justify-center pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden select-none border-b-2 border-white/20 w-full max-w-[100vw]"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-cyber-grid" />

      {/* Giant Typography Background Drift (contained inside overflow-hidden) */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] whitespace-nowrap z-0 max-w-full overflow-hidden"
      >
        <span className="font-display text-[22vw] leading-none text-white block">
          BELOW ZERO
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Left Asymmetrical Poster Editorial, Right Orbital System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 7 cols */}
          <motion.div
            style={{ y: contentY }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5"
          >
            
            {/* Top Mission Control Strip & Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: easeSnappy }}
              className="flex flex-wrap items-center gap-1.5 sm:gap-2"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-black border-2 border-[#FF1744] sticker-shadow-yellow">
                <img
                  src="./lost_in_stars_logo.jpg"
                  alt="Lost in Stars"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full object-cover shrink-0 border border-[#FF1744]"
                />
                <span className="text-[9px] sm:text-[11px] font-mono-tech font-extrabold uppercase tracking-widest text-[#FFD633]">
                  LOST IN STARS PRESENTS
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#FF1744]/20 border border-[#FF1744] text-[9px] sm:text-[11px] font-mono-tech font-bold text-white uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744] animate-ping" />
                <span>STUDENT HACKATHON</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 border border-white/30 text-[9px] sm:text-[11px] font-mono-tech text-white/80 uppercase">
                <MapPin className="w-3 h-3 text-[#FFD633]" />
                <span>DELHI NCR // IN-PERSON</span>
              </div>
            </motion.div>

            {/* Massive Display Headline: Fluid Clamp Typography with Scroll-Driven Morphing */}
            <motion.div
              style={{ scale: titleScale, y: titleY, opacity: titleOpacity }}
              className="relative select-none pt-1 origin-left will-change-transform"
            >
              <h1 className="font-display text-[clamp(2.6rem,11.5vw,7.5rem)] leading-[0.88] tracking-tight uppercase text-white drop-shadow-[3px_3px_0_#FF1744] sm:drop-shadow-[5px_5px_0_#FF1744]">
                <div className="block">
                  <CharacterReveal text="BELOW" delay={0.08} stagger={0.04} />
                </div>
                <div className="block mt-1 relative inline-block">
                  <CharacterReveal text="ZERO." delay={0.28} stagger={0.04} />
                  
                  {/* Yellow Star Accent */}
                  <span className="inline-block ml-1 text-[#FFD633] text-xl sm:text-3xl align-top">
                    ★
                  </span>
                </div>
              </h1>
            </motion.div>

            {/* Core Tagline: Lost Ideas, Found Innovation. */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: easeSnappy }}
              className="border-l-4 border-[#FF1744] pl-3.5 sm:pl-4 py-0.5 space-y-1"
            >
              <div className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
                Lost Ideas, <span className="text-[#FFD633]">Found Innovation.</span>
              </div>
              <p className="font-body text-xs sm:text-base text-white/80 max-w-xl leading-relaxed">
                An intense 24-hour offline student arena where imagination meets production engineering. Bring your unfinished prototypes, wildest AI concepts, and build live with fellow school hackers.
              </p>
            </motion.div>

            {/* Horizontal Information Strip: MID NOVEMBER 2026 • 24 HOURS • CLASSES 8–12 • OFFLINE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52, ease: easeSnappy }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1"
            >
              {[
                { icon: Calendar, label: 'EVENT DATE', val: 'MID NOV 2026', accent: 'text-[#FFD633]' },
                { icon: Clock, label: 'TIME BUDGET', val: '24 HOURS', accent: 'text-[#FF1744]' },
                { icon: Terminal, label: 'ELIGIBILITY', val: 'CLASSES 8–12', accent: 'text-white' },
                { icon: MapPin, label: 'VENUE ORBIT', val: 'OFFLINE DELHI', accent: 'text-[#FFD633]' },
              ].map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => playSfx('hover')}
                    className="border-2 border-white/20 hover:border-white/60 bg-black p-2.5 sm:p-3 text-left transition-colors"
                  >
                    <div className="flex items-center gap-1 font-mono-tech text-[9px] sm:text-[10px] text-white/60 tracking-wider uppercase font-semibold">
                      <ItemIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF1744] shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                    <div className={`font-display text-[11px] sm:text-sm tracking-wide ${item.accent} mt-0.5 truncate`}>
                      {item.val}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons: Touch-Optimized for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.68, ease: easeSnappy }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 2, y: 2 }}
                transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                onClick={() => {
                  playSfx('click');
                  onRegisterClick();
                }}
                onMouseEnter={() => playSfx('hover')}
                className="min-h-[48px] bg-[#FFD633] hover:bg-white text-black font-display text-xs sm:text-sm tracking-wider px-6 py-3 border-2 border-black sticker-shadow-red transition-colors cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>REGISTER YOUR INTEREST</span>
                <span className="text-black group-hover:translate-x-1 transition-transform">★</span>
              </motion.button>

              <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 2, y: 2 }}
                transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                onClick={() => {
                  playSfx('click');
                  onExploreClick();
                }}
                onMouseEnter={() => playSfx('hover')}
                className="min-h-[48px] bg-black hover:bg-white hover:text-black text-white font-heading font-bold text-xs sm:text-sm tracking-wide px-5 py-3 border-2 border-white sticker-shadow-white transition-colors cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE 5 ARENAS</span>
                <ArrowDownRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Countdown Timer Integration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.82, ease: easeSnappy }}
              className="w-full max-w-xl pt-1"
            >
              <CountdownTimer onRsvpClick={onRegisterClick} />
            </motion.div>

          </motion.div>

          {/* Right Column: 5 cols Graphic Showcase with Scroll Parallax & Pointer 3D Tilt */}
          <motion.div
            style={{ y: graphicY, rotate: graphicRotate }}
            className="lg:col-span-5 flex flex-col items-center justify-center mt-2 lg:mt-0 will-change-transform"
          >
            <TiltCard maxTilt={8} className="w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px]">
              <HeroOrbitalGraphic />
            </TiltCard>

            {/* Supporting Micro-Info Bar below graphic */}
            <div className="mt-4 w-full max-w-[460px] border-2 border-white/20 p-2.5 sm:p-3 bg-black flex items-center justify-between font-mono-tech text-[10px] sm:text-[11px] text-white/80">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#FF1744]" />
                <span>5 ARENA TRACKS</span>
              </div>
              <div className="text-white/40">·</div>
              <div className="text-[#FFD633] font-bold">24-HOUR SPRINT</div>
              <div className="text-white/40">·</div>
              <div className="text-white">100% IN-PERSON</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
