import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lightbulb, 
  Terminal, 
  Cpu, 
  Target, 
  Layout, 
  CheckCircle2, 
  Sparkles, 
  Flame,
  HelpCircle,
  Eye
} from 'lucide-react';
import { easeCinematic, easeSnappy } from '../utils/motion';
import { playSfx } from '../utils/audio';

interface Criterion {
  id: string;
  num: string;
  title: string;
  weight: string;
  icon: React.ComponentType<{ className?: string }>;
  question: string;
  details: string;
  proTip: string;
  rubric: string[];
}

export const Judging: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const criteria: Criterion[] = [
    {
      id: 'innovation',
      num: '01',
      title: 'INNOVATION & ORIGINALITY',
      weight: '25%',
      icon: Lightbulb,
      question: 'Does this tackle a real friction point in a bold, inventive way rather than replicating a generic tutorial?',
      details: 'Judges evaluate whether the project presents an original angle, a novel combination of existing technologies, or a courageous approach to an unsolved problem for students or communities.',
      proTip: 'Show why existing tools fail to solve this nuance and how your hackathon build introduces a smarter angle.',
      rubric: [
        'Novelty of approach and problem formulation',
        'Creative departure from boilerplate templates',
        'Distinctive user value proposition'
      ]
    },
    {
      id: 'execution',
      num: '02',
      title: 'WORKING PROTOTYPE',
      weight: '25%',
      icon: Terminal,
      question: 'Does the software run and complete its core user loop live without smoke and mirrors?',
      details: 'Working software is our highest priority. We evaluate whether the core feature actually functions on-device or live on web, and whether code was authentically written and committed during the 24-hour hackathon window.',
      proTip: 'A smaller scope that runs flawlessly live beats an over-ambitious project that crashes on step 2.',
      rubric: [
        'Live functional demo during the 3-minute pitch',
        'Clean error handling and operational reliability',
        'Authentic code commits made during the event'
      ]
    },
    {
      id: 'ai-depth',
      num: '03',
      title: 'TECHNICAL & AI DEPTH',
      weight: '20%',
      icon: Cpu,
      question: 'Is AI or complex engineering thoughtfully integrated and strictly justified for this solution?',
      details: 'Judges assess whether AI models, agents, voice pipelines, or algorithms are genuinely needed and properly implemented, rather than superficial API wrapper hype with no technical substance.',
      proTip: 'Explain why an AI model was strictly necessary here instead of a traditional deterministic formula or database query.',
      rubric: [
        'Appropriate model selection and pipeline tuning',
        'Latency considerations and prompt engineering rigor',
        'System architecture clarity and sound technical choices'
      ]
    },
    {
      id: 'impact',
      num: '04',
      title: 'REAL-WORLD VIABILITY',
      weight: '15%',
      icon: Target,
      question: 'Who suffers from the problem today, and could this project evolve into a real, deployable tool?',
      details: 'We want student inventions that could realistically be deployed in high schools, local communities, or the open source developer ecosystem beyond the hackathon weekend.',
      proTip: 'Define your exact target persona in your opening 20 seconds and quantify what measurably changes for them.',
      rubric: [
        'Clear identification of real users or beneficiaries',
        'Practical feasibility and scalability pathway',
        'Social or community relevance'
      ]
    },
    {
      id: 'design',
      num: '05',
      title: 'UI & INTERACTION CRAFT',
      weight: '10%',
      icon: Layout,
      question: 'Is the interface intuitive, responsive, and crafted with high design discipline?',
      details: 'First impressions matter. Judges assess how effectively the user experience guides the user, typography choices, visual hierarchy, mobile responsiveness, and tactile micro-interactions.',
      proTip: 'Eliminate visual clutter. Ensure a judge looking at the screen understands what to do in under 3 seconds.',
      rubric: [
        'Intuitive layout and typographic clarity',
        'Zero broken styling or awkward viewport shifts',
        'Smooth user guidance and immediate feedback'
      ]
    },
    {
      id: 'pitch',
      num: '06',
      title: 'PITCH & CODE INTEGRITY',
      weight: '5%',
      icon: CheckCircle2,
      question: 'Can the team articulate their architecture, trade-offs, and lessons learned with complete honesty?',
      details: 'Communication and engineering ethics. Judges evaluate how cohesively the team presents, how questions are answered, and total transparency regarding libraries used versus what was built during the hackathon.',
      proTip: 'Be completely honest about external libraries vs what you wrote in 24 hours. Transparency earns maximum respect.',
      rubric: [
        'Crisp 3-minute pitch with equal team participation',
        'Clear articulation of engineering trade-offs',
        'Absolute transparency on tools and code origin'
      ]
    }
  ];

  const current = criteria[selectedIdx];
  const IconComponent = current.icon;

  return (
    <section id="judging" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black border-b-2 border-white select-none overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-cyber-grid" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-white/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FF1744]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
                05. TRANSPARENT EVALUATION
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-white tracking-tight uppercase">
              JUDGING <span className="text-[#FFD633]">PHILOSOPHY</span> & RUBRIC
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-white/70 font-mono-tech leading-relaxed">
            Every team is evaluated across 6 transparent criteria during their live demo. Zero favoritism, zero slide-deck theater, 100% merit-based engineering.
          </p>
        </div>

        {/* 2-Column Grid: Left Criteria Cards (6), Right Deep-Dive Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 6 Interactive Criteria Buttons */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {criteria.map((item, idx) => {
              const ItemIcon = item.icon;
              const isSelected = selectedIdx === idx;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 1 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                  onClick={() => {
                    playSfx('hover');
                    setSelectedIdx(idx);
                  }}
                  className={`p-4 border-2 cursor-pointer transition-all duration-200 select-none ${
                    isSelected
                      ? 'border-[#FF1744] bg-[#FF1744]/10 sticker-shadow-yellow -translate-y-1'
                      : 'border-white/30 bg-black/80 hover:border-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-8 h-8 flex items-center justify-center border ${
                      isSelected ? 'border-[#FF1744] bg-[#FF1744] text-white' : 'border-white/40 bg-black text-[#FFD633]'
                    }`}>
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <span className="font-mono-tech text-xs font-black px-2 py-0.5 bg-black border border-white/40 text-[#FFD633]">
                      WEIGHT: {item.weight}
                    </span>
                  </div>

                  <div className="font-mono-tech text-[10px] text-white/50 tracking-wider">
                    CRITERION {item.num}
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white tracking-wide mt-0.5 uppercase">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Selected Criterion Detail Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: easeSnappy }}
                className="border-2 border-[#FFD633] bg-black p-6 sm:p-8 sticker-shadow-red relative space-y-6"
              >
                {/* Header of Detail Pane */}
                <div className="flex items-center justify-between border-b-2 border-white/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF1744] text-white flex items-center justify-center border border-black shadow-[2px_2px_0px_#FFFFFF]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[#FFD633] block font-bold">
                        RUBRIC CRITERION {current.num}
                      </span>
                      <h4 className="font-display text-xl sm:text-2xl text-white uppercase">
                        {current.title}
                      </h4>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-black border-2 border-[#FFD633] text-[#FFD633] font-mono-tech font-black text-sm">
                    {current.weight}
                  </span>
                </div>

                {/* Core Evaluative Question */}
                <div className="space-y-1.5">
                  <div className="font-mono-tech text-[11px] uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#FF1744]" />
                    <span>Core Evaluative Question</span>
                  </div>
                  <p className="text-sm sm:text-base font-heading font-semibold text-white bg-white/5 p-3.5 border-l-4 border-[#FF1744]">
                    "{current.question}"
                  </p>
                </div>

                {/* What Judges Look For */}
                <div className="space-y-1.5">
                  <div className="font-mono-tech text-[11px] uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#FFD633]" />
                    <span>What Judges Look For</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
                    {current.details}
                  </p>
                </div>

                {/* Key Checklist Rubric */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="font-mono-tech text-[10px] uppercase tracking-widest text-[#FFD633] font-bold">
                    SPECIFIC BENCHMARKS
                  </div>
                  <div className="space-y-1.5">
                    {current.rubric.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-mono-tech text-white/90">
                        <span className="text-[#FF1744] font-bold">▶</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tip for Hackers */}
                <div className="p-4 bg-[#FFD633]/10 border-2 border-[#FFD633] space-y-1">
                  <div className="font-mono-tech text-xs font-black text-[#FFD633] uppercase flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#FF1744]" />
                    <span>Pro Tip for Student Builders</span>
                  </div>
                  <p className="text-xs text-white/90 font-mono-tech leading-relaxed">
                    {current.proTip}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
