import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Medal, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { easeCinematic, easeSnappy, AnimatedNumber } from '../utils/motion';
import { playSfx } from '../utils/audio';

export const Prizes: React.FC = () => {
  const categoryAwards = [
    {
      title: 'Most Innovative Project',
      desc: 'Awarded to the boldest, most creative solution breaking out of cookie-cutter templates.',
      tag: 'CREATIVITY & VISION',
    },
    {
      title: 'Best Technical Execution',
      desc: 'Recognizing outstanding code architecture, live system stability, and engineering rigor.',
      tag: 'ENGINEERING CRAFT',
    },
    {
      title: 'Best User Experience',
      desc: 'Honoring clean, accessible, human-centered product design, frictionless UI, and high aesthetic polish.',
      tag: 'DESIGN & ACCESSIBILITY',
    },
  ];

  return (
    <section id="prizes" className="py-24 bg-black border-b-2 border-white/20 relative select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-2 border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FF1744]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
                03. RECOGNITION & PRIZES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              BUILD SOMETHING GREAT. <br />
              <span className="text-[#FF1744]">EARN YOUR RECOGNITION.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-white/80 font-body leading-relaxed">
            Honoring student engineering, bold problem solving, and genuine product craft. Every recognized team receives verified credentials and direct industry acceleration.
          </p>
        </div>

        {/* Asymmetrical Hierarchical Podium: 1st Place Dominates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-16">
          
          {/* Champion (Rank 01): Dominant Centerpiece - 6 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: easeCinematic }}
            onMouseEnter={() => playSfx('hover')}
            className="lg:col-span-6 lg:order-2 border-4 border-[#FFD633] bg-black p-6 sm:p-10 sticker-shadow-red relative flex flex-col justify-between will-change-transform"
          >
            {/* Top Ribbons & Badge */}
            <div className="flex items-center justify-between border-b-2 border-[#FFD633]/30 pb-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD633] text-black font-display text-xs tracking-wider border border-black">
                <Trophy className="w-4 h-4 fill-black" />
                <span>GRAND CHAMPION</span>
              </div>
              <div className="font-display text-4xl text-[#FFD633]">
                #01
              </div>
            </div>

            <div>
              <div className="font-mono-tech text-xs tracking-widest text-[#FF1744] font-bold uppercase mb-1">
                FIRST PLACE OVERALL
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                BELOW ZERO CHAMPIONS
              </h3>

              <div className="p-4 bg-white/5 border border-white/20 mb-6">
                <span className="font-mono-tech text-[10px] text-white/60 uppercase block">
                  PRIZE POOL & CREDITS
                </span>
                <div className="font-display text-2xl sm:text-3xl text-[#FFD633] mt-0.5">
                  EXCLUSIVE CASH + COMPUTE
                </div>
                <p className="font-mono-tech text-xs text-white/80 mt-1">
                  Prize allocation and partner compute tier announcements revealed ahead of sprint start.
                </p>
              </div>

              {/* Champion Perks List */}
              <div className="space-y-2.5">
                {[
                  'Bespoke Cast Grand Trophy & Official Lost in Stars Winner Honors',
                  'Verified Certificate of Technical Excellence (Distinction)',
                  'Direct 1-on-1 Mentorship & Incubation Pathways with Senior AI Engineers',
                  'Ecosystem Partner Credits & Priority Access to Future Programs',
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-body">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD633] shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t-2 border-white/20 flex items-center justify-between font-mono-tech text-xs text-white/60">
              <span className="text-[#FFD633] font-bold">1ST PLACE EVALUATION</span>
              <span>LIVE JURY VERDICT</span>
            </div>
          </motion.div>

          {/* Runner-Up (Rank 02): Sleek Silver/White - 3 Columns (Enters from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeCinematic }}
            onMouseEnter={() => playSfx('hover')}
            className="lg:col-span-3 lg:order-1 border-2 border-white bg-black p-5 sm:p-6 sticker-shadow-white relative flex flex-col justify-between will-change-transform"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white text-black font-mono-tech text-[10px] font-bold uppercase">
                  <Medal className="w-3.5 h-3.5" />
                  <span>RUNNER UP</span>
                </div>
                <div className="font-display text-2xl text-white">#02</div>
              </div>

              <div className="font-mono-tech text-[10px] tracking-wider text-white/60 uppercase font-semibold">
                SECOND PLACE
              </div>
              <h4 className="font-display text-xl text-white uppercase mt-0.5 mb-3">
                FIRST RUNNER-UP
              </h4>

              <div className="space-y-2 pt-2">
                {[
                  'First Runner-Up Trophy & Accolades',
                  'Certificate of High Distinction',
                  'Ecosystem Partner Perks & Tool Credits',
                  'Spotlight in Lost in Stars Innovation Archive',
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/80 font-body">
                    <span className="text-white font-bold">▶</span>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 font-mono-tech text-[10px] text-white/50">
              DISTINCTION AWARD
            </div>
          </motion.div>

          {/* Second Runner-Up (Rank 03): Bronze/Orange - 3 Columns (Enters from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeCinematic }}
            onMouseEnter={() => playSfx('hover')}
            className="lg:col-span-3 lg:order-3 border-2 border-white/60 bg-black p-5 sm:p-6 sticker-shadow-yellow relative flex flex-col justify-between will-change-transform"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/20 text-white font-mono-tech text-[10px] font-bold uppercase">
                  <Award className="w-3.5 h-3.5 text-[#FFD633]" />
                  <span>2ND RUNNER UP</span>
                </div>
                <div className="font-display text-2xl text-white/80">#03</div>
              </div>

              <div className="font-mono-tech text-[10px] tracking-wider text-white/60 uppercase font-semibold">
                THIRD PLACE
              </div>
              <h4 className="font-display text-xl text-white uppercase mt-0.5 mb-3">
                SECOND RUNNER-UP
              </h4>

              <div className="space-y-2 pt-2">
                {[
                  'Second Runner-Up Trophy & Honors',
                  'Certificate of Outstanding Performance',
                  'Developer Tooling & Cloud Vouchers',
                  'Community Builder Collective Entry',
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/80 font-body">
                    <span className="text-[#FFD633] font-bold">▶</span>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 font-mono-tech text-[10px] text-white/50">
              EXCELLENCE AWARD
            </div>
          </motion.div>

        </div>

        {/* Special Category Awards Strip (Horizontal Asymmetrical Layout) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#FFD633]" />
            <span className="font-mono-tech text-xs tracking-widest text-[#FFD633] uppercase font-bold">
              SPECIAL JURY COMMENDATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryAwards.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => playSfx('hover')}
                className="p-5 border border-white/30 bg-black/60 hover:border-white transition-colors"
              >
                <span className="font-mono-tech text-[10px] text-[#FF1744] font-bold uppercase tracking-wider block mb-1">
                  {item.tag}
                </span>
                <h4 className="font-heading font-bold text-base text-white uppercase mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-xs text-white/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
