import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Clock, Cpu, Code2, ShieldAlert, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { easeCinematic, easeSnappy, AnimatedNumber } from '../utils/motion';
import { playSfx } from '../utils/audio';

interface ProcessStage {
  num: string;
  motif: string;
  timeframe: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const ProcessTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  const stages: ProcessStage[] = [
    {
      num: '01',
      motif: '00H',
      timeframe: '00H — 06H',
      title: 'THINK & ARCHITECT',
      tagline: 'Deconstruct Problems & Choose Arenas',
      description:
        'Hacker check-in, opening keynote, and arena toolchain distribution. Teams analyze technical friction, scope MVP system boundaries, and establish API keys.',
      deliverables: ['System Architecture Diagram', 'Repo Initialization', 'Tech Stack Commitment'],
    },
    {
      num: '02',
      motif: '06H',
      timeframe: '06H — 14H',
      title: 'BUILD & CODE SPRINT',
      tagline: 'Core Implementation & Logic Loops',
      description:
        'Uninterrupted deep engineering flow. Teams build neural weights, frontend views, backend websockets, and agentic workflows alongside senior mentors.',
      deliverables: ['Functional Core Model', 'Database Integration', 'End-to-End Execution Flow'],
    },
    {
      num: '03',
      motif: '14H',
      timeframe: '14H — 20H',
      title: 'TEST & HARDEN',
      tagline: 'Stress-Testing, Latency & Edge Cases',
      description:
        'The turning point from toy scripts to robust software. Run benchmark tests, fix memory leaks, refine UX latency, and verify deployment scripts.',
      deliverables: ['Passing Automated Tests', 'Zero Critical Crashes', 'Offline Fallback Logic'],
    },
    {
      num: '04',
      motif: '24H',
      timeframe: '20H — 24H',
      title: 'PRESENT & DEMO',
      tagline: 'Live Runtime Proof Over Decks',
      description:
        'Zero presentation slides allowed. Teams trigger live executable code in front of expert industry judges, proving real software innovation.',
      deliverables: ['Live Browser/Terminal Demo', 'Public Open-Source Repo', 'Code Execution Review'],
    },
  ];

  // Progressive scroll-linked stage activation
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest < 0.28) {
        setActiveStage(0);
      } else if (latest < 0.55) {
        setActiveStage(1);
      } else if (latest < 0.8) {
        setActiveStage(2);
      } else {
        setActiveStage(3);
      }
    });
  }, [scrollYProgress]);

  const current = stages[activeStage];

  return (
    <section
      ref={containerRef}
      id="process"
      className="py-16 sm:py-24 bg-black border-b-2 border-white/20 relative select-none overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-cyber-grid" />

      {/* Giant Typography Background Drift */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] leading-none z-0 hidden sm:block">
        <span className="font-display text-[26vw] block text-white">24-HOUR SPRINT</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with 24-Hour Counter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b-2 border-white/20">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2.5 h-2.5 bg-[#FF1744] rotate-45 shrink-0" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
                03. THE 24-HOUR SPRINT TIMELINE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
              FROM FIRST THOUGHT <br />
              <span className="text-[#FF1744]">TO LIVE DEMO.</span>
            </h2>
          </div>

          <div className="bg-black border-2 border-[#FFD633] px-4 py-3 sticker-shadow-red self-start md:self-auto flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#FFD633]" />
            <div>
              <span className="font-mono-tech text-[10px] text-white/70 block uppercase font-bold">
                NON-STOP TIME BUDGET
              </span>
              <div className="font-display text-xl sm:text-2xl text-white">
                <AnimatedNumber value={24} suffix=" HOURS" />
              </div>
            </div>
          </div>
        </div>

        {/* Live Connecting Progress Track */}
        <div className="relative mb-10 sm:mb-12">
          {/* Background Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-1 bg-white/20 z-0" />
          
          {/* Animated Foreground Progress Line physically drawn by scroll */}
          <motion.div
            style={{ scaleX: pathProgress }}
            className="hidden lg:block absolute top-10 left-12 right-12 h-1 bg-[#FF1744] origin-left z-0 shadow-[0_0_12px_#FF1744]"
          />

          {/* 4 Interactive Stage Journey Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: easeSnappy }}
                  onClick={() => {
                    playSfx('hover');
                    setActiveStage(idx);
                  }}
                  onMouseEnter={() => playSfx('hover')}
                  className={`cursor-pointer border-2 bg-black p-4 sm:p-5 relative transition-all duration-200 ${
                    isSelected
                      ? 'border-[#FF1744] sticker-shadow-yellow -translate-y-1'
                      : 'border-white/30 hover:border-white sticker-shadow-white'
                  }`}
                >
                  {/* Stage Node Header with Node Motif */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 flex items-center justify-center border font-display text-xs ${
                          isSelected
                            ? 'bg-[#FF1744] text-white border-black shadow-[1px_1px_0px_#FFD633]'
                            : 'bg-black text-[#FFD633] border-white/40'
                        }`}
                      >
                        {stage.num}
                      </div>
                      <span className="font-mono-tech text-[10px] text-white/60 tracking-wider">
                        {stage.motif}
                      </span>
                    </div>

                    <div className="font-mono-tech text-[10px] font-bold text-[#FFD633] px-2 py-0.5 border border-white/20 bg-white/5">
                      {stage.timeframe}
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide uppercase">
                    {stage.title}
                  </h3>

                  <div className="font-mono-tech text-xs text-[#FF1744] font-bold uppercase mt-1 mb-2">
                    {stage.tagline}
                  </div>

                  <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  <div className="pt-2.5 border-t border-white/20 flex items-center justify-between text-xs font-mono-tech">
                    <span className={isSelected ? 'text-[#FFD633] font-bold' : 'text-white/50'}>
                      {isSelected ? 'ACTIVE PHASE' : 'STAGE MILESTONE'}
                    </span>
                    <span className="text-white/40">▸</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Deep-Dive Deliverable Details Box for Active Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.num}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: easeCinematic }}
            className="border-2 border-white bg-black p-5 sm:p-7 sticker-shadow-white relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/20 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#FFD633] text-black font-mono-tech font-black text-xs">
                  {current.motif} TIME BLOCK
                </span>
                <span className="font-display text-lg sm:text-xl text-white">
                  MILESTONE DELIVERABLES // STAGE {current.num}
                </span>
              </div>
              <div className="font-mono-tech text-xs text-[#FF1744] font-bold uppercase">
                {current.timeframe}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {current.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-white/20 p-3 bg-white/5 flex items-center gap-2.5 font-mono-tech text-xs text-white"
                >
                  <span className="w-1.5 h-1.5 bg-[#FF1744] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
