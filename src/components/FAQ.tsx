import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';
import { easeCinematic, easeSnappy } from '../utils/motion';
import { playSfx } from '../utils/audio';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is BELOW ZERO?',
      answer:
        'BELOW ZERO is a 24-hour in-person student hackathon organized by Lost in Stars. It gives school students in Classes 8–12 a genuine engineering arena to explore artificial intelligence, web development, game development, autonomous agents, and voice interfaces while building working prototypes from scratch.',
    },
    {
      question: 'When and where will BELOW ZERO take place?',
      answer:
        'The hackathon takes place in Mid-November 2026 as a strictly in-person offline event in Delhi NCR. Specific campus venue details and logistics instructions will be emailed directly to accepted hacker teams.',
    },
    {
      question: 'Who is eligible to participate?',
      answer:
        'Participation is exclusively for school students currently enrolled in Classes 8 through 12. Teams can consist of 1 to 4 members. You can register solo or with your pre-formed squad.',
    },
    {
      question: 'Is there any registration or entry fee?',
      answer:
        'No. BELOW ZERO is 100% free of charge for all accepted students. Food, beverages, power, high-speed Wi-Fi, mentorship, and hacker swag are fully covered by Lost in Stars and our partners.',
    },
    {
      question: 'Do I need prior hackathon experience or advanced coding skills?',
      answer:
        'Zero prior hackathon experience is needed. Whether you are building your first neural network or your first interactive web game, seasoned mentors will be on the floor 100% of the time to unblock technical hurdles.',
    },
    {
      question: 'What are the five competition tracks?',
      answer:
        '1. AI Model Making, 2. Web Development, 3. Game Development, 4. AI Agents, and 5. Voice Assistants. Teams select one primary track upon project submission.',
    },
    {
      question: 'Will participants receive certificates and prizes?',
      answer:
        'Yes. All attending hackers receive verified Certificates of Participation from Lost in Stars. Top winning teams receive bespoke trophies, cash & compute credits, and direct incubation mentorship.',
    },
    {
      question: 'How do I submit my interest or RSVP?',
      answer:
        'Click any "REGISTER YOUR INTEREST" button on this site to open the interactive RSVP generator and claim your preliminary Digital Hacker Pass.',
    },
  ];

  const toggleIndex = (idx: number) => {
    playSfx('click');
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-black border-b-2 border-white/20 relative select-none overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 border-b-2 border-white/20 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#FF1744]" />
            <span className="font-mono-tech text-xs tracking-[0.25em] text-[#FFD633] uppercase font-bold">
              08. FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-4">
            EVERYTHING YOU NEED <br />
            <span className="text-[#FFD633]">TO KNOW.</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Got questions about the format, eligibility, or rules? Find quick answers below or reach out directly to the Lost in Stars team.
          </p>
        </div>

        {/* Accordion List with Neo-Brutalist Border Interactions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: easeSnappy }}
                className={`border-2 transition-all duration-200 bg-black ${
                  isOpen ? 'border-[#FF1744] sticker-shadow-red' : 'border-white/30 hover:border-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 shrink-0 flex items-center justify-center border transition-colors ${
                      isOpen ? 'bg-[#FF1744] text-white border-black' : 'border-white/40 text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: easeCinematic }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base font-body text-white/80 leading-relaxed border-t border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
