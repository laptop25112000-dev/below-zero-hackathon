import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, Cpu, Globe, Gamepad2, Bot, Mic, CheckCircle2 } from 'lucide-react';
import { Track } from '../types';
import { easeCinematic, easeSnappy, CinematicTextReveal, TiltCard } from '../utils/motion';
import { playSfx } from '../utils/audio';

interface TracksProps {
  onSelectTrackForRsvp: (trackTitle: string) => void;
}

export const Tracks: React.FC<TracksProps> = ({ onSelectTrackForRsvp }) => {
  const [hoveredTrackId, setHoveredTrackId] = useState<string | null>(null);
  const [activeTrackId, setActiveTrackId] = useState<string>('ai-model');
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

  const tracks: (Track & { icon: React.ComponentType<{ className?: string }> })[] = [
    {
      id: 'ai-model',
      number: '01',
      title: 'AI MODEL MAKING',
      tagline: 'Algorithms & Neural Systems',
      description:
        'Develop, fine-tune, and deploy machine learning models. Turn raw data, loss functions, and neural architectures into practical tools.',
      focusAreas: ['Computer Vision', 'Predictive Classification', 'Natural Language Processing', 'Data Synthesis'],
      sampleProject: 'Fine-tuned vision model detecting local environmental hazards or crop diseases.',
      tools: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Hugging Face'],
      icon: Cpu,
    },
    {
      id: 'web-dev',
      number: '02',
      title: 'WEB DEVELOPMENT',
      tagline: 'Modern High-Impact Platforms',
      description:
        'Build high-performance web applications, interactive software, and student utility hubs that solve tangible real-world problems.',
      focusAreas: ['Interactive SPAs', 'Offline-First Architectures', 'Student Productivity Hubs', 'Real-Time Utility'],
      sampleProject: 'Peer-to-peer resource exchange platform for high school research initiatives.',
      tools: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      icon: Globe,
    },
    {
      id: 'game-dev',
      number: '03',
      title: 'GAME DEVELOPMENT',
      tagline: 'Interactive Mechanics & Worlds',
      description:
        'Bring your creative imagination to life through original mechanics, physics-driven gameplay, and atmospheric digital environments.',
      focusAreas: ['2D Pixel Platformers', 'Narrative Simulators', 'Physics-Driven Puzzles', 'Educational Mechanics'],
      sampleProject: 'Gravity-manipulation arcade puzzle game teaching orbital celestial physics.',
      tools: ['Godot', 'Unity', 'Phaser.js', 'Kaboom.js'],
      icon: Gamepad2,
    },
    {
      id: 'ai-agents',
      number: '04',
      title: 'AI AGENTS',
      tagline: 'Autonomous Systems & Tool Use',
      description:
        'Build agentic loops capable of multi-step reasoning, external tool execution, browser automation, and self-correcting logic.',
      focusAreas: ['Multi-Step Planners', 'Browser Automations', 'Research Synthesizers', 'Code Verification Loops'],
      sampleProject: 'Autonomous curriculum coach that breaks complex syllabus into daily hands-on experiments.',
      tools: ['LangChain', 'Function Calling', 'Agentic Workflows', 'Python'],
      icon: Bot,
    },
    {
      id: 'voice-assistants',
      number: '05',
      title: 'VOICE ASSISTANTS',
      tagline: 'Conversational Audio Interfaces',
      description:
        'Design natural voice-first experiences that understand spoken commands, multilingual dialogue, and real-time audio generation.',
      focusAreas: ['Speech-to-Intent', 'Hands-Free Access', 'Multilingual Dialogue', 'Assistive Speech Systems'],
      sampleProject: 'Voice-controlled accessibility assistant for visual impairment in school libraries.',
      tools: ['Web Speech API', 'Whisper', 'ElevenLabs', 'Realtime Audio'],
      icon: Mic,
    },
  ];

  // Mobile / Scroll-linked active track updater
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      // Only update from scroll if user is not actively hovering a specific card on desktop
      if (hoveredTrackId === null) {
        if (latest < 0.22) {
          setActiveTrackId('ai-model');
        } else if (latest < 0.44) {
          setActiveTrackId('web-dev');
        } else if (latest < 0.66) {
          setActiveTrackId('game-dev');
        } else if (latest < 0.88) {
          setActiveTrackId('ai-agents');
        } else {
          setActiveTrackId('voice-assistants');
        }
      }
    });
  }, [scrollYProgress, hoveredTrackId]);

  const activeTrack = tracks.find((t) => t.id === activeTrackId) || tracks[0];

  return (
    <section
      ref={containerRef}
      id="tracks"
      className="py-16 sm:py-24 bg-black relative select-none overflow-hidden border-b-2 border-white/20 w-full max-w-[100vw]"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-cyber-grid" />

      {/* Giant Background Typography Watermark Faded in Background */}
      <div className="absolute top-1/4 -right-12 pointer-events-none select-none opacity-[0.035] leading-none z-0 hidden sm:block">
        <span className="font-display text-[26vw] block text-white">ARENAS</span>
      </div>
      <div className="absolute bottom-10 -left-12 pointer-events-none select-none opacity-[0.035] leading-none z-0 hidden sm:block">
        <span className="font-display text-[22vw] block text-white">01-05</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Anchor Header Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-16 pb-8 sm:pb-10 border-b-2 border-white/20">
          
          {/* Left Column: Stacked Big Typography Anchor */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2.5 h-2.5 bg-[#FF1744] rotate-45 shrink-0" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
                02. FIVE ARENAS // SCROLL JOURNEY
              </span>
            </div>

            <div className="border-l-4 border-[#FF1744] pl-3.5 sm:pl-6 space-y-1">
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.92]">
                <CinematicTextReveal delay={0.05}>
                  <span className="block">CHOOSE</span>
                </CinematicTextReveal>
                <CinematicTextReveal delay={0.12}>
                  <span className="block">YOUR</span>
                </CinematicTextReveal>
                <CinematicTextReveal delay={0.2}>
                  <span className="text-[#FF1744] block">ARENA.</span>
                </CinematicTextReveal>
              </h2>
            </div>
          </div>

          {/* Right Column: Integrated Description & Telemetry Metadata */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="p-3.5 sm:p-4 border-2 border-white/20 bg-black/80 sticker-shadow-white">
              <p className="font-body text-xs sm:text-base text-white/90 leading-relaxed">
                Choose a domain that excites you, collaborate with your team, and build working production software. As you scroll, explore each arena's technical toolchain and evaluation rubric.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono-tech text-white/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFD633] animate-pulse" />
                <span className="text-white font-bold">5 SPECIALIZED TRACKS</span>
              </div>
              <span>·</span>
              <span>24 HOURS CODE</span>
              <span>·</span>
              <span className="text-[#FF1744]">IN-PERSON TEAMS</span>
            </div>
          </div>

        </div>

        {/* Interactive Arena Rail (Desktop Navigation Aid) */}
        <div className="hidden lg:flex items-center justify-between border-2 border-white/20 bg-black/90 p-2.5 mb-10 sticker-shadow-white relative z-20">
          <div className="flex items-center gap-2 pl-2">
            <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-ping" />
            <span className="font-mono-tech text-[10px] text-[#FFD633] uppercase font-bold tracking-widest">
              ARENA TRACKER:
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {tracks.map((t) => {
              const isCur = activeTrackId === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTrackId(t.id);
                    playSfx('click');
                  }}
                  className={`px-3 py-1 font-mono-tech text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isCur
                      ? 'bg-[#FF1744] text-white sticker-shadow-yellow'
                      : 'text-white/60 hover:text-white border border-white/10 hover:border-white/40'
                  }`}
                >
                  <span className={isCur ? 'text-[#FFD633]' : 'text-white/40'}>{t.number}</span>
                  <span>{t.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The 5 Asymmetric Arenas Composition with Scroll Journey Energy Path */}
        <div className="relative space-y-8 sm:space-y-12 lg:space-y-16 py-2 sm:py-6">
          
          {/* Dynamic Connecting Energy Line (Desktop SVG Path zig-zagging between left and right cards) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 1200" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="arenaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF1744" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#FFD633" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Background Path Guideline */}
              <path
                d="M 280 100 L 720 320 L 280 560 L 720 800 L 280 1040"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeOpacity="0.15"
                strokeDasharray="6 6"
              />
              {/* Animated Foreground Progress Energy Path driven by scroll */}
              <motion.path
                d="M 280 100 L 720 320 L 280 560 L 720 800 L 280 1040"
                stroke="url(#arenaGradient)"
                strokeWidth="3.5"
                style={{ pathLength: pathProgress }}
                className="drop-shadow-[0_0_10px_#FF1744]"
              />
            </svg>
          </div>

          {/* Arena 01: AI MODEL MAKING (Left Corner) */}
          <div className="flex justify-start relative z-10 w-full lg:pl-2 xl:pl-6">
            <ArenaCard
              track={tracks[0]}
              isSelected={activeTrackId === tracks[0].id}
              isHovered={hoveredTrackId === tracks[0].id}
              anyHovered={hoveredTrackId !== null}
              onMouseEnter={() => setHoveredTrackId(tracks[0].id)}
              onMouseLeave={() => setHoveredTrackId(null)}
              onClick={() => {
                setActiveTrackId(tracks[0].id);
                playSfx('click');
              }}
              onRsvp={() => onSelectTrackForRsvp(tracks[0].title)}
              className="w-full lg:max-w-2xl"
              badgeColor="red"
              direction="left"
            />
          </div>

          {/* Arena 02: WEB DEVELOPMENT (Right Corner) */}
          <div className="flex justify-end relative z-10 w-full lg:pr-2 xl:pr-6">
            <ArenaCard
              track={tracks[1]}
              isSelected={activeTrackId === tracks[1].id}
              isHovered={hoveredTrackId === tracks[1].id}
              anyHovered={hoveredTrackId !== null}
              onMouseEnter={() => setHoveredTrackId(tracks[1].id)}
              onMouseLeave={() => setHoveredTrackId(null)}
              onClick={() => {
                setActiveTrackId(tracks[1].id);
                playSfx('click');
              }}
              onRsvp={() => onSelectTrackForRsvp(tracks[1].title)}
              className="w-full lg:max-w-2xl"
              badgeColor="yellow"
              direction="right"
            />
          </div>

          {/* Arena 03: GAME DEVELOPMENT (Left Corner) */}
          <div className="flex justify-start relative z-10 w-full lg:pl-2 xl:pl-6">
            <ArenaCard
              track={tracks[2]}
              isSelected={activeTrackId === tracks[2].id}
              isHovered={hoveredTrackId === tracks[2].id}
              anyHovered={hoveredTrackId !== null}
              onMouseEnter={() => setHoveredTrackId(tracks[2].id)}
              onMouseLeave={() => setHoveredTrackId(null)}
              onClick={() => {
                setActiveTrackId(tracks[2].id);
                playSfx('click');
              }}
              onRsvp={() => onSelectTrackForRsvp(tracks[2].title)}
              className="w-full lg:max-w-2xl"
              badgeColor="white"
              direction="left"
            />
          </div>

          {/* Arena 04: AI AGENTS (Right Corner) */}
          <div className="flex justify-end relative z-10 w-full lg:pr-2 xl:pr-6">
            <ArenaCard
              track={tracks[3]}
              isSelected={activeTrackId === tracks[3].id}
              isHovered={hoveredTrackId === tracks[3].id}
              anyHovered={hoveredTrackId !== null}
              onMouseEnter={() => setHoveredTrackId(tracks[3].id)}
              onMouseLeave={() => setHoveredTrackId(null)}
              onClick={() => {
                setActiveTrackId(tracks[3].id);
                playSfx('click');
              }}
              onRsvp={() => onSelectTrackForRsvp(tracks[3].title)}
              className="w-full lg:max-w-2xl"
              badgeColor="red"
              direction="right"
            />
          </div>

          {/* Arena 05: VOICE ASSISTANTS (Left Corner) */}
          <div className="flex justify-start relative z-10 w-full lg:pl-2 xl:pl-6">
            <ArenaCard
              track={tracks[4]}
              isSelected={activeTrackId === tracks[4].id}
              isHovered={hoveredTrackId === tracks[4].id}
              anyHovered={hoveredTrackId !== null}
              onMouseEnter={() => setHoveredTrackId(tracks[4].id)}
              onMouseLeave={() => setHoveredTrackId(null)}
              onClick={() => {
                setActiveTrackId(tracks[4].id);
                playSfx('click');
              }}
              onRsvp={() => onSelectTrackForRsvp(tracks[4].title)}
              className="w-full lg:max-w-2xl"
              badgeColor="yellow"
              direction="left"
            />
          </div>

        </div>

        {/* Selected Arena Deep Dive Inspector Drawer */}
        <div className="mt-12 sm:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: easeSnappy }}
              className="border-3 sm:border-4 border-[#FFD633] bg-black p-4 sm:p-8 sticker-shadow-red relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b-2 border-white/20 pb-4 mb-5 sm:mb-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="bg-[#FF1744] text-white font-mono-tech font-bold text-[10px] sm:text-xs px-2.5 py-1">
                    SELECTED ARENA
                  </span>
                  <h3 className="font-display text-lg sm:text-2xl text-white">
                    ARENA {activeTrack.number} — {activeTrack.title}
                  </h3>
                </div>

                <motion.button
                  whileHover={{ x: -2, y: -2 }}
                  whileTap={{ x: 2, y: 2 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                  onClick={() => onSelectTrackForRsvp(activeTrack.title)}
                  className="min-h-[44px] bg-[#FFD633] hover:bg-white text-black font-display text-xs tracking-wider px-4 sm:px-5 py-2.5 border-2 border-black sticker-shadow-white transition-colors cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>CLAIM PASS FOR THIS ARENA</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Focus Sub-Domains */}
                <div className="border border-white/20 p-3.5 sm:p-4 bg-black">
                  <div className="font-mono-tech text-[11px] sm:text-xs text-[#FFD633] font-bold uppercase tracking-wider mb-2">
                    FOCUS SUB-DOMAINS
                  </div>
                  <ul className="space-y-1.5 font-body text-xs sm:text-sm text-white/90">
                    {activeTrack.focusAreas.map((area, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF1744] shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sample Build Inspiration */}
                <div className="border border-white/20 p-3.5 sm:p-4 bg-black">
                  <div className="font-mono-tech text-[11px] sm:text-xs text-[#FFD633] font-bold uppercase tracking-wider mb-2">
                    SAMPLE INSPIRATION
                  </div>
                  <p className="font-body text-xs sm:text-sm text-white/85 leading-relaxed">
                    "{activeTrack.sampleProject}"
                  </p>
                  <div className="font-mono-tech text-[10px] text-white/50 mt-2.5">
                    * Teams are free to propose novel problems outside this sample.
                  </div>
                </div>

                {/* Recommended Toolchains */}
                <div className="border border-white/20 p-3.5 sm:p-4 bg-black">
                  <div className="font-mono-tech text-[11px] sm:text-xs text-[#FFD633] font-bold uppercase tracking-wider mb-2">
                    RECOMMENDED TOOLCHAINS
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {activeTrack.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="border border-white/40 text-white font-mono-tech text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

// Asymmetric Interactive Arena Card Component with Directional Scroll Entrance
interface ArenaCardProps {
  track: Track & { icon: React.ComponentType<{ className?: string }> };
  isSelected: boolean;
  isHovered: boolean;
  anyHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  onRsvp: () => void;
  className?: string;
  badgeColor?: 'red' | 'yellow' | 'white';
  direction?: 'left' | 'right' | 'up';
}

const ArenaCard: React.FC<ArenaCardProps> = ({
  track,
  isSelected,
  isHovered,
  anyHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onRsvp,
  className = '',
  badgeColor = 'red',
  direction = 'left',
}) => {
  const IconComponent = track.icon;
  const isDimmed = anyHovered && !isHovered;

  const getShadowClass = () => {
    if (isSelected || isHovered) return 'sticker-shadow-red border-[#FF1744]';
    if (badgeColor === 'yellow') return 'sticker-shadow-yellow border-white/50 hover:border-[#FFD633]';
    return 'sticker-shadow-white border-white/50 hover:border-white';
  };

  const initialX = direction === 'left' ? -35 : direction === 'right' ? 35 : 0;
  const initialY = direction === 'up' ? 35 : 20;

  return (
    <TiltCard maxTilt={4} className="w-full">
      <motion.div
        data-cursor="arena"
        onMouseEnter={() => {
          playSfx('hover');
          onMouseEnter();
        }}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        initial={{ opacity: 0, x: initialX, y: initialY }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        animate={{
          opacity: isDimmed ? 0.45 : 1,
          scale: isSelected || isHovered ? 1.015 : 1,
        }}
        transition={{ duration: 0.5, ease: easeSnappy }}
        className={`cursor-pointer border-2 bg-black p-4 sm:p-7 relative transition-all duration-300 select-none overflow-hidden will-change-transform ${getShadowClass()} ${className}`}
      >
      {/* Top Bar: Oversized Track Number + Arena Icon + Selection Status */}
      <div className="flex items-start justify-between border-b-2 border-white/20 pb-3 sm:pb-4 mb-3 sm:mb-4">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="font-mono-tech text-[10px] sm:text-xs font-bold text-[#FF1744] tracking-widest uppercase">
            ARENA
          </span>
          <span
            className={`font-display text-3xl sm:text-5xl tracking-tighter transition-colors ${
              isHovered || isSelected ? 'text-[#FFD633]' : 'text-white'
            }`}
          >
            {track.number}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border transition-colors ${
              isHovered || isSelected
                ? 'bg-[#FF1744] text-white border-black shadow-[2px_2px_0px_#FFD633]'
                : 'bg-black text-white border-white/40'
            }`}
          >
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          <div
            className={`p-1.5 border transition-transform ${
              isHovered || isSelected ? 'translate-x-0.5 -translate-y-0.5 text-[#FFD633] border-[#FFD633]' : 'text-white/50 border-white/20'
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Main Arena Headline & Tagline */}
      <div className="space-y-1 mb-3 sm:mb-4">
        <div className="font-mono-tech text-[10px] sm:text-xs text-[#FFD633] uppercase font-bold tracking-wider">
          {track.tagline}
        </div>
        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-white tracking-wide uppercase leading-tight">
          {track.title}
        </h3>
      </div>

      <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
        {track.description}
      </p>

      {/* Focus Area Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {track.focusAreas.slice(0, 3).map((area, i) => (
          <span
            key={i}
            className="text-[9px] sm:text-[10px] font-mono-tech text-white/70 bg-white/5 px-2 py-0.5 border border-white/10"
          >
            {area}
          </span>
        ))}
      </div>

      {/* Footer Strip with Touch-Friendly Action Trigger */}
      <div className="pt-2.5 sm:pt-3 border-t border-white/15 flex items-center justify-between font-mono-tech text-xs">
        <span className={isSelected || isHovered ? 'text-[#FFD633] font-bold text-[11px] sm:text-xs' : 'text-white/50 text-[11px] sm:text-xs'}>
          {isSelected ? 'ARENA IN FOCUS' : 'TAP TO INSPECT'}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRsvp();
          }}
          className="min-h-[38px] px-2 text-[11px] font-bold text-white hover:text-[#FF1744] underline decoration-[#FF1744] underline-offset-2 flex items-center gap-1 cursor-pointer active:scale-95"
        >
          <span>RSVP ARENA</span>
          <span>→</span>
        </button>
      </div>

      {/* Subtle indicator bar sliding on active/hover */}
      {(isHovered || isSelected) && (
        <motion.div
          layoutId="arena-indicator"
          className="absolute -bottom-1 left-4 right-4 h-1 bg-[#FF1744] shadow-[0_0_10px_#FF1744]"
        />
      )}
    </motion.div>
    </TiltCard>
  );
};
