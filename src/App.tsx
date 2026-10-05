/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Tracks } from './components/Tracks';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Judging } from './components/Judging';
import { Experience } from './components/Experience';
import { Prizes } from './components/Prizes';
import { Team } from './components/Team';
import { Sponsors } from './components/Sponsors';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { RsvpModal } from './components/RsvpModal';
import { PartnerModal } from './components/PartnerModal';
import { CinematicIntro } from './components/CinematicIntro';
import { AmbientPlayer } from './components/AmbientPlayer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [rsvpInitialTrack, setRsvpInitialTrack] = useState('');
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [introCompleted, setIntroCompleted] = useState(false);

  const handleOpenRsvp = (trackTitle?: string) => {
    if (trackTitle) {
      setRsvpInitialTrack(trackTitle);
    }
    setIsRsvpOpen(true);
  };

  const handleCloseRsvp = () => {
    setIsRsvpOpen(false);
    setRsvpInitialTrack('');
  };

  const handleExploreClick = () => {
    const target = document.querySelector('#tracks');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-[#FF1744] selection:text-white relative font-body">
      {/* Neo-brutalist Interactive Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Intro Sequence (Skippable / One-time per session) */}
      <CinematicIntro onComplete={() => setIntroCompleted(true)} />

      {/* Sticky Top Navigation */}
      <Navbar onRegisterClick={() => handleOpenRsvp()} />

      <main className="flex-grow">
        {/* Hero Section with Countdown Timer and Graphic Showcase */}
        <Hero
          onRegisterClick={() => handleOpenRsvp()}
          onExploreClick={handleExploreClick}
        />

        {/* The Manifesto */}
        <Manifesto />

        {/* Hackathon Tracks */}
        <Tracks onSelectTrackForRsvp={(track) => handleOpenRsvp(track)} />

        {/* The 24-Hour Build Experience (The Process) */}
        <ProcessTimeline />

        {/* Transparent Judging Philosophy & Rubric */}
        <Judging />

        {/* The Experience (More Than a Hackathon) */}
        <Experience />

        {/* Prizes and Recognition */}
        <Prizes />

        {/* Organizing Team & Lost in Stars Legacy Artwork */}
        <Team />

        {/* Sponsors and Partners */}
        <Sponsors onPartnerClick={() => setIsPartnerOpen(true)} />

        {/* FAQ Section */}
        <FAQ />

        {/* Final Yellow Call To Action Poster */}
        <FinalCTA onRegisterClick={() => handleOpenRsvp()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive RSVP Modal & Pass Generator */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={handleCloseRsvp}
        initialTrack={rsvpInitialTrack}
      />

      {/* Partnership Prospectus Request Modal */}
      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />

      {/* Floating Soothing Ambient Music Player */}
      <AmbientPlayer />
    </div>
  );
}
