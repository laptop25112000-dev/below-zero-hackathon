import React from 'react';
import { motion } from 'motion/react';
import { Users, Cpu, Wrench, Trophy, Sparkles, Coffee, ShieldCheck } from 'lucide-react';
import { easeCinematic, easeSnappy } from '../utils/motion';
import { playSfx } from '../utils/audio';

export const Experience: React.FC = () => {
  const experiences = [
    {
      num: '01',
      title: 'ACTIVE SENIOR MENTORSHIP',
      tag: 'OFFICE HOURS',
      description:
        'Continuous guidance from seasoned AI researchers, founders, and senior developers who guide your architecture, unblock tricky bugs, and challenge your thinking in real time.',
      perk: 'No theoretical advice—only production-grade engineering feedback.',
    },
    {
      num: '02',
      title: 'RAPID AI & BUILD WORKSHOPS',
      tag: 'TECH SESSIONS',
      description:
        'High-density flash workshops breaking down state-of-the-art vision models, autonomous agent loops, voice pipelines, and prompt optimization techniques.',
      perk: 'Designed for quick 20-minute absorption directly applicable to your build.',
    },
    {
      num: '03',
      title: 'STUDENT MAKER CULTURE',
      tag: 'COLLABORATIVE',
      description:
        'Connect with like-minded high school hackers from across the Delhi NCR region. Find co-founders, trade technical insights, and build inside an inspiring offline maker floor.',
      perk: 'Safe, curated, high-energy environment built specifically for Classes 8–12.',
    },
    {
      num: '04',
      title: 'LIVE SHOWCASE & JURY STAGE',
      tag: 'REAL DEMOS',
      description:
        'Step onto the presentation floor. Present your working software live in front of a respected jury of engineers and peers—no fake slides, only real code.',
      perk: 'Direct evaluation with detailed merit-based feedback.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black border-b-2 border-white/20 relative select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-2 border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FF1744]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
                04. THE ARENA EXPERIENCE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              MORE THAN A HACKATHON. <br />
              <span className="text-[#FF1744]">AN ENGINE FOR TALENT.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-white/80 font-body leading-relaxed">
            Engineered from the ground up to eliminate startup fluff. Below Zero gives school students a genuine arena with real tools, real mentors, and high-caliber peers.
          </p>
        </div>

        {/* Asymmetrical Layout: Left Editorial Feature + Right Alternating Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Bold Neo-Brutalist Arena Manifesto Block (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: easeCinematic }}
              className="border-4 border-white bg-black p-6 sm:p-8 sticker-shadow-red relative"
            >
              <div className="font-mono-tech text-xs text-[#FFD633] font-bold uppercase tracking-widest mb-3">
                ARENA SPECIFICATIONS
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase leading-tight mb-4">
                BUILT SPECIFICALLY FOR SCHOOL HACKERS
              </h3>

              <p className="font-body text-sm text-white/80 leading-relaxed mb-6">
                Most hackathons treat high schoolers as an afterthought. Below Zero puts students in Classes 8–12 at the center of the engineering arena with the same tooling, expectations, and respect given to top university hackathons.
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-white/20">
                {[
                  { icon: ShieldCheck, label: '100% Free Entry For Accepted Teams' },
                  { icon: Coffee, label: 'Fuel, Meals & Beverages Provided' },
                  { icon: Cpu, label: 'High-Speed LAN & Dedicated Power Stations' },
                  { icon: Sparkles, label: 'Exclusive Lost in Stars Streetwear Swag' },
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-mono-tech text-white">
                      <ItemIcon className="w-4 h-4 text-[#FF1744] shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 4 Asymmetrical Editorial Rows with Oversized Numbers (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.num}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: easeSnappy }}
                onMouseEnter={() => playSfx('hover')}
                className="p-6 border-2 border-white/30 hover:border-white bg-black transition-colors sticker-shadow-white relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Oversized Number & Tag */}
                  <div className="flex items-baseline gap-3 shrink-0">
                    <span className="font-display text-4xl sm:text-5xl text-[#FF1744] group-hover:text-[#FFD633] transition-colors">
                      {exp.num}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#FFD633] border border-[#FFD633]/40 px-2 py-0.5 uppercase font-bold">
                      {exp.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-2 flex-grow">
                    <h4 className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-tight">
                      {exp.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-[#FFD633]">
                      <span>★</span>
                      <span>{exp.perk}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
