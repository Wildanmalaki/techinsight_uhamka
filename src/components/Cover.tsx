import React from 'react';
import { motion } from 'motion/react';
import { MAGAZINE_CONTENT } from '../constants';
import { ArrowDown } from 'lucide-react';

export const Cover: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-36 md:pt-52 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <span className="text-[10px] md:text-sm uppercase tracking-[0.6em] font-bold opacity-40 font-modern">
            {MAGAZINE_CONTENT.edition}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[10rem] xl:text-[12rem] font-display font-bold tracking-tighter leading-[0.9] mb-8 md:mb-12 text-gradient px-4 w-full break-normal overflow-visible"
        >
          {MAGAZINE_CONTENT.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 md:mb-10"
        >
          <p className="text-[12px] sm:text-lg md:text-3xl font-display font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-80 italic whitespace-nowrap">
            {MAGAZINE_CONTENT.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl"
        >
          <p className="text-xl md:text-3xl font-light tracking-tight opacity-60 mb-10 md:mb-16 italic font-display">
            "{MAGAZINE_CONTENT.subtitle}"
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 mb-8 md:mb-12 text-[8px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-40 font-modern">
            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> AI & MACHINE LEARNING</span>
            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> INTERNET OF THINGS</span>
            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> SMART CAMPUS</span>
          </div>

          <div className="flex flex-col gap-1 md:gap-2 text-[10px] md:text-sm uppercase tracking-widest opacity-50 font-medium font-modern">
            <span>{MAGAZINE_CONTENT.faculty}</span>
            <span>{MAGAZINE_CONTENT.university}</span>
          </div>
        </motion.div>

        <motion.button
          onClick={onExplore}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 md:mt-16 group flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold font-modern">Jelajahi Majalah</span>
        </motion.button>
      </div>

      {/* Side Text */}
      <div className="hidden lg:block absolute left-12 bottom-12 vertical-text text-[10px] uppercase tracking-[0.4em] opacity-30 font-bold font-modern">
        Teknik Informatika • Kelas 2F
      </div>
      <div className="hidden lg:block absolute right-12 bottom-12 vertical-text text-[10px] uppercase tracking-[0.4em] opacity-30 font-bold font-modern">
        UHAMKA • 2026
      </div>
    </section>
  );
};
