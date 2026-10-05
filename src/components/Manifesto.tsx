import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Terminal, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { easeCinematic, easeSnappy, CinematicTextReveal } from '../utils/motion';
import { playSfx } from '../utils/audio';

export const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 180, damping: 25 });

  // Scroll-driven progressive reveal of Statement of Purpose
  const headingY = useTransform(smoothProgress, [0.08, 0.35], [30, 0]);
  const statementScale = useTransform(smoothProgress, [0.12, 0.42], [0.96, 1]);
  const watermarkY = useTransform(smoothProgress, [0, 1], ['-15%', '20%']);
  const lineProgress = useTransform(smoothProgress, [0.1, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative py-16 sm:py-24 bg-black border-b-2 border-white/20 select-none overflow-hidden"
    >
      {/* Subtle Background Watermark with Scroll Parallax */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/2 -right-10 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] leading-none z-0 will-change-transform"
      >
        <span className="font-display text-[26vw] block text-white">PURPOSE</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Section Header Anchor with Scroll-Linked Line */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-2.5 h-2.5 bg-[#FF1744] rotate-45 shrink-0" />
          <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
            01. STATEMENT OF PURPOSE
          </span>
          <div className="h-px flex-grow bg-white/20 relative overflow-hidden">
            <motion.div
              style={{ scaleX: lineProgress }}
              className="absolute inset-0 bg-[#FFD633] origin-left shadow-[0_0_8px_#FFD633]"
            />
          </div>
          <span className="font-mono-tech text-[10px] text-white/50 tracking-widest uppercase hidden sm:inline-block">
            BELOW ZERO // MISSION
          </span>
        </div>

        {/* 2. Main Editorial Statement Block */}
        <div className="space-y-8 sm:space-y-12">
          
          {/* Top Editorial Header & Large Headline with Scroll Translation */}
          <motion.div
            style={{ y: headingY }}
            className="border-l-4 border-[#FF1744] pl-4 sm:pl-8 space-y-3 will-change-transform"
          >
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.92]">
              <CinematicTextReveal delay={0.05}>
                <span className="block text-white">STATEMENT</span>
              </CinematicTextReveal>
              <CinematicTextReveal delay={0.15}>
                <span className="block text-[#FF1744]">OF PURPOSE.</span>
              </CinematicTextReveal>
            </h2>

            <p className="font-mono-tech text-xs sm:text-sm text-[#FFD633] uppercase tracking-widest font-bold pt-1">
              [ WHY BELOW ZERO EXISTS FOR HIGH SCHOOL BUILDERS ]
            </p>
          </motion.div>

          {/* 3. The Core Meaningful Statement (Scroll-Driven Compression Release) */}
          <motion.div
            style={{ scale: statementScale }}
            className="border-4 border-white bg-black p-6 sm:p-10 lg:p-12 sticker-shadow-red relative will-change-transform origin-center"
          >
            {/* Corner Accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#FF1744]" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#FFD633]" />

            <div className="space-y-6">
              {/* Primary Massive Thesis */}
              <div className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white leading-tight uppercase tracking-tight">
                IDEAS DON'T BUILD THEMSELVES.{' '}
                <span className="text-[#FFD633]">STUDENT INNOVATORS</span> MUST NOT JUST CONSUME THE FUTURE—
                <span className="text-white underline decoration-[#FF1744] decoration-4 underline-offset-4 block sm:inline mt-1 sm:mt-0">
                  THEY MUST SHAPE IT.
                </span>
              </div>

              {/* Supporting Editorial Paragraphs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 pt-4 border-t-2 border-white/20">
                <div className="md:col-span-6 space-y-4">
                  <p className="font-body text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                    Most tech events treat school students as spectators, asking them to wait until university before building anything consequential. <strong className="text-white font-semibold">We reject that premise completely.</strong>
                  </p>
                  <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                    With foundation models, modern developer APIs, and open-source tooling, a dedicated high school team can architect and ship production systems faster than ever in human history.
                  </p>
                </div>

                <div className="md:col-span-6 space-y-4">
                  <p className="font-body text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                    <span className="font-heading font-bold text-[#FFD633]">BELOW ZERO</span> eliminates corporate pitch decks and spectator theater. We provide a pure 24-hour engineering sprint where students in Classes 8–12 turn raw ideas into verified, executable software.
                  </p>
                  <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                    No admission fees. No superficial buzzwords. Only passionate builders, senior industry mentors, and live code evaluated on merit.
                  </p>
                </div>
              </div>

              {/* 4. Core Directive Callout Banner */}
              <div
                onMouseEnter={() => playSfx('hover')}
                className="mt-6 p-4 sm:p-6 bg-black border-2 border-[#FFD633] sticker-shadow-white flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#FFD633]" />
                    <span className="font-mono-tech text-[10px] text-[#FFD633] uppercase font-bold tracking-widest">
                      FOUNDING DIRECTIVE
                    </span>
                  </div>
                  <div className="font-display text-xl sm:text-2xl lg:text-3xl text-white uppercase tracking-tight">
                    DON'T JUST PROMPT THE FUTURE.{' '}
                    <span className="text-[#FF1744]">BUILD IT.</span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="font-mono-tech text-xs text-white/70">MERITOCRACY FIRST</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-ping" />
                </div>
              </div>

              {/* 5. Horizontal Technical Metadata Strip */}
              <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tech text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-[#FFD633]">★</span>
                  <span>100% IN-PERSON ARENA</span>
                </div>
                <span>·</span>
                <div>24-HOUR HARD SPRINT</div>
                <span>·</span>
                <div>CLASSES 8–12 EXCLUSIVE</div>
                <span>·</span>
                <div className="text-[#FF1744] font-bold">LIVE CODE EVALUATION</div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
