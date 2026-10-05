import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Globe, ArrowUpRight, Shield, FileText, X } from 'lucide-react';
import { LostInStarsEmblem } from './LostInStarsLogo';
import { easeSnappy } from '../utils/motion';

export const Footer: React.FC = () => {
  const [legalModalContent, setLegalModalContent] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#manifesto' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Experience', href: '#experience' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Team', href: '#team' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white border-t-2 border-white select-none relative pt-16 pb-12 overflow-hidden">
      {/* Decorative top red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF1744]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: easeSnappy }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/20"
        >
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              >
                <LostInStarsEmblem size={44} />
              </motion.div>
              <div>
                <h3 className="font-display text-2xl text-white tracking-tight">
                  BELOW ZERO
                </h3>
                <div className="font-mono-tech text-[10px] text-[#FFD633] tracking-widest uppercase">
                  LOST IN STARS HACKATHON
                </div>
              </div>
            </div>

            <p className="font-heading text-lg font-bold text-white/90">
              Lost Ideas, <span className="text-[#FF1744]">Found Innovation.</span>
            </p>

            <p className="font-body text-xs text-white/70 max-w-sm leading-relaxed">
              A 24-hour offline student hackathon dedicated to empowering young builders in Classes 8–12 to experiment, engineer, and shape technology.
            </p>

            {/* Organizer Note */}
            <div className="pt-2 font-mono-tech text-xs text-white/60">
              ORGANIZED BY <strong className="text-white">LOST IN STARS</strong>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3">
            <div className="font-mono-tech text-xs text-[#FFD633] font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF1744]"></span>
              NAVIGATION
            </div>
            <ul className="space-y-2 font-heading text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-white/80 hover:text-[#FFD633] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#FF1744] text-xs">▸</span>
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Placeholders (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-mono-tech text-xs text-[#FFD633] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF1744]"></span>
              COMMUNICATIONS
            </div>

            <div className="border border-white/20 p-3 bg-black">
              <div className="font-mono-tech text-[10px] text-white/50 uppercase mb-1">
                OFFICIAL INBOX
              </div>
              <a
                href="mailto:official.lostinstars@gmail.com"
                className="font-mono-tech text-xs sm:text-sm text-white hover:text-[#FFD633] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#FF1744]" />
                <span>official.lostinstars@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <div className="font-mono-tech text-[10px] text-white/50 uppercase mb-2">
                OFFICIAL CHANNELS
              </div>
              <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
                {['INSTAGRAM', 'TWITTER_X', 'GITHUB', 'DISCORD'].map((network) => (
                  <motion.a
                    key={network}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:official.lostinstars@gmail.com?subject=COMMUNITY_ACCESS"
                    className="border border-white/30 hover:border-[#FFD633] hover:text-[#FFD633] text-white/80 px-2.5 py-1 text-[11px] transition-colors cursor-pointer"
                  >
                    {network}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Bar & Closing Statement */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-white/60">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="text-[#FFD633]">★</span>
            <span className="text-white font-bold tracking-wider">
              DESIGNED FOR THE NEXT GENERATION OF BUILDERS.
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModalContent('privacy')}
              className="hover:text-white underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModalContent('terms')}
              className="hover:text-white underline cursor-pointer"
            >
              Terms and Conditions
            </button>
            <span>•</span>
            <span>© 2026 LOST IN STARS</span>
          </div>
        </div>

      </div>

      {/* Legal Modal Popup with AnimatePresence */}
      <AnimatePresence>
        {legalModalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ duration: 0.3, ease: easeSnappy }}
              className="bg-black border-2 border-white sticker-shadow-red max-w-xl w-full p-6 text-white max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
                <h4 className="font-display text-lg text-white uppercase">
                  {legalModalContent === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h4>
                <button
                  onClick={() => setLegalModalContent(null)}
                  className="p-1 text-white hover:text-[#FF1744] border border-white/20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="font-body text-xs text-white/80 space-y-3 leading-relaxed">
                {legalModalContent === 'privacy' ? (
                  <>
                    <p>
                      Below Zero is committed to protecting the privacy of participating students and their guardians. Information collected through RSVP forms (student names, educational institutions, grades, email addresses) is used strictly for event coordination, team formation, and hackathon communications.
                    </p>
                    <p>
                      We do not sell, rent, or distribute personal information to third-party commercial brokers. All data handling complies with student data privacy ethics. For queries, contact official.lostinstars@gmail.com.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Participation in BELOW ZERO is open to registered students in Classes 8 through 12. All participants must agree to the Hackathon Code of Conduct: fostering an inclusive, collaborative, respectful, and safe physical environment.
                    </p>
                    <p>
                      Projects built during the 24 hours must be original works conceived and created during the event timeline. Intellectual property remains 100% owned by the student creators.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-white/20 text-right">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setLegalModalContent(null)}
                  className="bg-[#FFD633] text-black font-display text-xs px-4 py-2 cursor-pointer"
                >
                  ACKNOWLEDGE
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
