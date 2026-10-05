import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Music, Calendar } from 'lucide-react';
import { isSoundEnabled, toggleSound, playSfx } from '../utils/audio';
import { ambientMusic } from '../utils/ambientMusic';
import { SystemTicker } from './SystemTicker';
import lostInStarsLogo from '../assets/lost_in_stars_logo.jpg';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('manifesto');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: 'Purpose', href: '#manifesto', id: 'manifesto' },
    { name: 'Arenas', href: '#tracks', id: 'tracks' },
    { name: '24h Sprint', href: '#process', id: 'process' },
    { name: 'Rubric', href: '#judging', id: 'judging' },
    { name: 'Prizes', href: '#prizes', id: 'prizes' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Partners', href: '#sponsors', id: 'sponsors' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const unsub = ambientMusic.subscribe((playing) => {
      setMusicPlaying(playing);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Section scroll observer for active indicator
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const handleToggleMusic = () => {
    playSfx('click');
    ambientMusic.toggle();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    playSfx('click');
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full select-none transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b-2 border-white shadow-[0_4px_24px_rgba(0,0,0,0.85)]'
          : 'bg-black/85 backdrop-blur-sm border-b border-white/20'
      }`}
    >
      {/* 1. Persistent Top System Marquee Bar */}
      <SystemTicker />

      {/* 2. Scroll Progress Indicator */}
      <motion.div
        className="h-1 bg-[#FFD633] origin-left z-50 shadow-[0_0_8px_#FFD633]"
        style={{ scaleX }}
      />

      <div
        className={`max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
        }`}
      >
        {/* Brand: Authentic Lost in Stars Circular Emblem + BELOW ZERO */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          onMouseEnter={() => playSfx('hover')}
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0"
        >
          <div
            className={`relative shrink-0 rounded-full overflow-hidden border-2 border-[#FF1744] shadow-[0_0_15px_rgba(255,23,68,0.5)] bg-black group-hover:shadow-[0_0_20px_#FF1744] transition-all duration-300 ${
              isScrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-11 sm:h-11'
            }`}
          >
            <img
              src={lostInStarsLogo}
              alt="Lost in Stars Official Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[9px] sm:text-[10px] font-mono-tech text-white/60 flex items-center gap-1 uppercase tracking-widest leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744] animate-pulse" />
              LOST IN STARS
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
              <span
                className={`font-display tracking-tight text-white group-hover:text-[#FFD633] transition-colors leading-none ${
                  isScrolled ? 'text-base sm:text-xl' : 'text-lg sm:text-2xl'
                }`}
              >
                BELOW ZERO
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[9px] uppercase px-1.5 py-0.5 bg-[#FF1744] text-white font-mono-tech font-bold tracking-wider border border-black shadow-[1px_1px_0px_#FFD633]">
                <Calendar className="w-2.5 h-2.5 text-[#FFD633]" />
                <span>MID-NOV 2026</span>
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links with Scroll-Driven Active Indicator */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                onMouseEnter={() => playSfx('hover')}
                className={`font-heading font-medium text-xs xl:text-sm transition-colors relative py-1 group ${
                  isActive ? 'text-[#FFD633] font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF1744] shadow-[0_0_8px_#FF1744]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF1744] group-hover:w-full transition-all duration-300 ease-out" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Soothing Ambient Music Toggle */}
          <button
            onClick={handleToggleMusic}
            onMouseEnter={() => playSfx('hover')}
            title={musicPlaying ? 'Pause Soothing Music' : 'Play Soothing Celestial Music'}
            className={`min-h-[40px] px-2.5 py-1.5 border-2 transition-colors cursor-pointer flex items-center gap-1.5 font-mono-tech text-xs ${
              musicPlaying
                ? 'border-[#FFD633] bg-[#FFD633]/20 text-[#FFD633] sticker-shadow-red'
                : 'border-white/40 hover:border-white text-white hover:text-[#FFD633] bg-black/60'
            }`}
          >
            <Music className={`w-3.5 h-3.5 ${musicPlaying ? 'animate-pulse text-[#FFD633]' : 'text-white/60'}`} />
            <span className="hidden xl:inline text-[11px] font-bold">
              {musicPlaying ? 'MUSIC ON' : 'MUSIC'}
            </span>
          </button>

          {/* Audio Synthesizer SFX Toggle */}
          <button
            onClick={handleToggleSound}
            onMouseEnter={() => playSfx('hover')}
            title={soundOn ? 'Mute Interface Audio' : 'Enable Interface Audio'}
            className="min-h-[40px] px-2.5 py-1.5 border-2 border-white/40 hover:border-white text-white hover:text-[#FFD633] transition-colors cursor-pointer bg-black/60 flex items-center gap-1.5 font-mono-tech text-xs"
          >
            {soundOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#FFD633]" />
                <span className="hidden xl:inline text-[11px] text-[#FFD633]">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/50" />
                <span className="hidden xl:inline text-[11px] text-white/50">SFX OFF</span>
              </>
            )}
          </button>

          {/* Primary CTA */}
          <motion.button
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ x: 2, y: 2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => {
              playSfx('click');
              onRegisterClick();
            }}
            onMouseEnter={() => playSfx('hover')}
            className="min-h-[40px] bg-[#FFD633] hover:bg-white text-black font-display text-xs sm:text-sm tracking-wider px-4 sm:px-5 py-2 border-2 border-black sticker-shadow-red transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </motion.button>
        </div>

        {/* Mobile Header: Clean, Uncluttered, Minimum 44px Touch Targets */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => {
              playSfx('click');
              onRegisterClick();
            }}
            className="min-h-[44px] px-3.5 bg-[#FFD633] text-black font-display text-xs tracking-wider border-2 border-black flex items-center justify-center cursor-pointer active:scale-95"
          >
            REGISTER
          </button>

          <button
            onClick={() => {
              playSfx('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation"
            className="min-h-[44px] min-w-[44px] p-2 border-2 border-white text-white hover:text-[#FF1744] hover:border-[#FF1744] transition-colors flex items-center justify-center cursor-pointer active:scale-95"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Integrated Audio & Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b-4 border-[#FF1744] bg-black px-4 pt-3 pb-6 space-y-4 overflow-hidden"
          >
            {/* Quick Audio Controls Inside Mobile Drawer */}
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/20">
              <button
                onClick={handleToggleMusic}
                className={`min-h-[44px] p-2 border-2 font-mono-tech text-xs font-bold flex items-center justify-center gap-2 cursor-pointer ${
                  musicPlaying ? 'border-[#FFD633] text-[#FFD633] bg-[#FFD633]/20' : 'border-white/30 text-white/80'
                }`}
              >
                <Music className="w-4 h-4" />
                <span>{musicPlaying ? 'MUSIC: ON' : 'MUSIC: OFF'}</span>
              </button>

              <button
                onClick={handleToggleSound}
                className={`min-h-[44px] p-2 border-2 font-mono-tech text-xs font-bold flex items-center justify-center gap-2 cursor-pointer ${
                  soundOn ? 'border-[#FF1744] text-[#FF1744] bg-[#FF1744]/20' : 'border-white/30 text-white/80'
                }`}
              >
                {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{soundOn ? 'SFX: ON' : 'SFX: OFF'}</span>
              </button>
            </div>

            {/* Nav Links Grid */}
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`min-h-[44px] flex items-center p-3 border font-heading text-sm font-bold transition-colors ${
                    activeSection === link.id
                      ? 'border-[#FF1744] text-[#FFD633] bg-[#FF1744]/10'
                      : 'border-white/20 text-white hover:border-[#FF1744] hover:text-[#FFD633]'
                  }`}
                >
                  <span className="text-[#FF1744] mr-2 text-xs">▸</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Drawer Primary RSVP Button */}
            <button
              onClick={() => {
                playSfx('click');
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full min-h-[48px] bg-[#FFD633] text-black font-display text-sm tracking-wider border-2 border-black flex items-center justify-center gap-2 sticker-shadow-red"
            >
              <span>RSVP FOR BELOW ZERO</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
