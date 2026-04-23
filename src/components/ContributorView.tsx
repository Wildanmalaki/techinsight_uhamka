import React from 'react';
import { motion } from 'motion/react';
import { MAGAZINE_CONTENT } from '../constants';
import { PenTool, Palette, Cpu, Layout, CheckCircle2, MessageSquare, Mail, Rocket, ArrowRight, Crown, Users } from 'lucide-react';

const iconMap: any = {
  PenTool,
  Palette,
  Cpu,
  Layout
};

interface ContributorViewProps {
  onNavigate?: (section: string) => void;
}

export const ContributorView: React.FC<ContributorViewProps> = ({ onNavigate }) => {
  const { contributorInfo } = MAGAZINE_CONTENT;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 md:pt-32 pb-20 bg-[#fbf9f4] text-black"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20 md:mb-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            <Users className="w-3 h-3" />
            <span>Open Submissions</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-none italic uppercase">
            SUARAKAN<br/>
            <span className="text-blue-600 font-bold">INOVASI</span> ANDA
          </h1>
          
          <p className="text-xl md:text-2xl font-serif italic text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            "{contributorInfo.description}"
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-40">
          {contributorInfo.roles.map((role: any, idx: number) => {
            const Icon = iconMap[role.icon] || PenTool;
            return (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 md:p-10 bg-white rounded-[2.5rem] border border-black/5 hover:border-black/10 hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{role.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA & Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24 md:mb-40">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">MASA DEPAN DIMULAI DENGAN KONTRIBUSI ANDA</h2>
            <p className="text-xl text-zinc-500 font-serif italic leading-relaxed">
              Jadilah pionir dalam menyebarkan inspirasi teknologi. Setiap huruf yang Anda ketik adalah langkah menuju perubahan.
            </p>
            <div className="pt-4">
              {/* Removed redundant section */}
            </div>
          </div>

          {/* Benefits Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 text-white p-10 md:p-14 rounded-[3.5rem] space-y-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Crown className="w-32 h-32" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl font-display font-bold tracking-tighter">MENGAPA BERGABUNG?</h3>
                <p className="text-zinc-400 font-serif italic">Manfaat kontribusi bagi pengembangan diri dan pengalaman profesional Anda.</p>
              </div>

              <ul className="space-y-6 relative z-10">
                {contributorInfo.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 text-sm md:text-base group">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-white/10 flex flex-col gap-1 text-[11px] uppercase tracking-[0.2em] font-bold opacity-30">
                <span>TECHINSIGHT EDISI. 1</span>
                <span>GLOBAL TECH INNOVATION - 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="max-w-5xl mx-auto p-12 md:p-20 bg-blue-600 rounded-[4rem] text-white text-center space-y-10 relative overflow-hidden"
        >
          {/* Decorative Backdrops */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 space-y-8">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-10">
              <Mail className="w-8 h-8" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-tight">
              Siap Menginspirasi?<br/>
              Kirimkan Karya Anda Sekarang.
            </h2>
            
            <p className="text-lg md:text-xl opacity-80 font-serif italic mx-auto md:whitespace-nowrap">
              "{contributorInfo.cta}"
            </p>

            <div className="pt-8">
              <a 
                href="mailto:dinianti.marselia@uhamka.ac.id"
                className="inline-flex items-center gap-4 px-10 py-5 bg-white text-blue-600 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:gap-6 transition-all hover:shadow-2xl active:scale-95"
              >
                Hubungi Redaksi <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
