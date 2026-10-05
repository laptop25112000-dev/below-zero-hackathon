import React from 'react';
import { motion } from 'motion/react';
import { Mail, Globe, CheckCircle2, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { TeamMember } from '../types';
import { easeCinematic, easeSnappy } from '../utils/motion';
import { playSfx } from '../utils/audio';
import lostInStarsLogo from '../assets/lost_in_stars_logo.jpg';
import lostInStarsPoster from '../assets/lost_in_stars_poster.jpg';

export const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'DIVYANSH MISHRA',
      role: 'Lead Organizer & Founder',
      description:
        'Leading the mission, architecture, and execution of BELOW ZERO while building the Lost in Stars student builder collective.',
      initials: 'DM',
    },
    {
      name: 'ANANYA',
      role: 'Lead Designer & Creative Dir.',
      description:
        'Driving visual identity, brand systems, and translating streetwear aesthetics into high-contrast digital experiences.',
      initials: 'AN',
    },
    {
      name: 'MAHIMA',
      role: 'Partnerships & Outreach Co-Lead',
      description:
        'Leading strategic outreach with top high schools, technology partners, and community builder networks across Delhi NCR.',
      initials: 'MH',
    },
    {
      name: 'MAYANK',
      role: 'Partnerships & Operations Co-Lead',
      description:
        'Managing partner deliverables, event logistics, and hacker support to guarantee a seamless offline hackathon experience.',
      initials: 'MY',
    },
  ];

  return (
    <section id="team" className="py-24 bg-black border-t-2 border-white relative select-none overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-cyber-grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header with Track Record Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-white/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FF1744]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
                06. THE PEOPLE BEHIND THE MISSION
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              ORGANIZED BY <span className="text-[#FFD633]">LOST IN STARS</span>
            </h2>
          </div>

          <div className="bg-black border-2 border-[#FFD633] px-4 py-2 font-mono-tech text-xs text-white sticker-shadow-red self-start md:self-auto flex items-center gap-2">
            <Award className="w-4 h-4 text-[#FFD633]" />
            <div>
              <span className="text-[#FFD633] font-black uppercase">PROVEN TRACK RECORD:</span>{' '}
              <span>2 Hackathons Conducted</span>
            </div>
          </div>
        </div>

        {/* Feature Spotlight Card: Lost in Stars Official Artwork & Legacy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: easeCinematic }}
          className="border-2 border-[#FF1744] sticker-shadow-yellow bg-black p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: The Official Poster Artwork with Directional Clipping Mask Reveal */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm border-2 border-white sticker-shadow-white bg-black p-2.5">
                <motion.div
                  initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.08 }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: easeCinematic }}
                  className="relative overflow-hidden group"
                >
                  <img
                    src={lostInStarsPoster}
                    alt="Lost in Stars Official Artwork"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-center">
                    <span className="font-mono-tech text-[10px] text-[#FFD633] uppercase font-bold tracking-widest block">
                      OFFICIAL POSTER ARTWORK
                    </span>
                    <span className="font-display text-xs text-white uppercase tracking-wider block mt-0.5">
                      Lost in Stars Creative Identity
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: The Lost in Stars Legacy & Ethos */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-[#FF1744] shadow-[0_0_15px_rgba(255,23,68,0.5)] shrink-0 bg-black">
                  <img
                    src={lostInStarsLogo}
                    alt="Lost in Stars Badge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono-tech font-bold text-[#FFD633] uppercase tracking-wider block">
                    ORIGINAL FOUNDER COLLECTIVE
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    The Lost in Stars Legacy
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/85 font-body leading-relaxed">
                Below Zero is engineered by <strong className="text-white">Lost in Stars</strong>—an independent creative & technology movement dedicated to giving school students a genuine arena to build real, deployable technology. With an uncompromising focus on shipping working software, real-world AI exploration, and fostering student agency, Lost in Stars strips away vanity metrics to put young builders at the center of the frontier.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: 'Zero Entry Fee', desc: '100% free for all accepted student hackers' },
                  { title: 'Real Code, No Slides', desc: 'Evaluation based strictly on functional prototypes' },
                  { title: 'High-Caliber Mentorship', desc: 'Active industry engineers and senior researchers' },
                  { title: 'Classes 8–12 Dedicated', desc: 'A safe, inspiring offline environment engineered for youth' },
                ].map((pillar, i) => (
                  <div key={i} className="p-3 bg-white/5 border border-white/20 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF1744] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-heading font-bold text-xs text-white uppercase">{pillar.title}</div>
                      <div className="font-mono-tech text-[11px] text-white/60">{pillar.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* The Student Organizing Team Grid */}
        <div>
          <div className="mb-8">
            <span className="font-mono-tech text-xs tracking-widest text-[#FFD633] uppercase font-bold block mb-1">
              MEET THE LEADERSHIP
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase">
              STUDENT BUILDERS & ORGANIZERS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: isEven ? -28 : 28, y: 15 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: easeSnappy }}
                  whileHover={{ y: -4, x: -2 }}
                  onMouseEnter={() => playSfx('hover')}
                  className="border-2 border-white bg-black p-6 sticker-shadow-red relative flex flex-col justify-between group transition-transform will-change-transform"
                >
                  <div>
                    {/* Avatar / Monogram Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-black border-2 border-[#FF1744] flex items-center justify-center font-display text-base text-white group-hover:bg-[#FF1744] group-hover:text-black transition-colors">
                        {member.initials}
                      </div>
                      <span className="text-[#FFD633] text-lg">★</span>
                    </div>

                    <h4 className="font-display text-base sm:text-lg text-white tracking-wide uppercase">
                      {member.name}
                    </h4>
                    <div className="font-mono-tech text-xs text-[#FFD633] font-bold tracking-wider uppercase mt-1 mb-3">
                      {member.role}
                    </div>
                    <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono-tech text-white/50">
                    <span>LOST IN STARS</span>
                    <span className="text-[#FF1744]">● ORGANIZER</span>
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
