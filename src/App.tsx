import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { Navbar } from './components/Navbar';
import { Cover } from './components/Cover';
import { TableOfContents } from './components/TableOfContents';
import { ArticleCard } from './components/ArticleCard';
import { ArticleView } from './components/ArticleView';
import { ContributorView } from './components/ContributorView';
import { Footer } from './components/Footer';
import { Feedback } from './components/Feedback';
import { MAGAZINE_CONTENT } from './constants';
import { Article } from './types';
import { ArrowRight, BookOpen, Cpu, Lightbulb, MessageSquare, PenTool, Type, Users, Layout, Globe, CheckCircle2, Search, Rocket, AlertCircle, Crown, Palette, Camera, User, Plus, Target, Shield, Flame, Quote, X, Sparkles, BrainCircuit, Workflow, Zap } from 'lucide-react';
import { cn } from './lib/utils';

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showInnovationWindow, setShowInnovationWindow] = useState(false);

  const handleExplore = () => {
    const toc = document.getElementById('toc');
    toc?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEditorial = () => {
    const editorialArticle: Article = {
      id: 'editorial',
      title: MAGAZINE_CONTENT.editorial.title,
      category: 'PESAN REDAKSI',
      author: 'Tim Redaksi',
      content: MAGAZINE_CONTENT.editorial.text,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop'
    };
    handleSelectArticle(editorialArticle);
  };

  const handleSelectAbout = () => {
    const aboutArticle: Article = {
      id: 'about-us',
      title: 'TENTANG TECHINSIGHT',
      category: 'INFORMASI',
      author: 'Tim Redaksi',
      content: [
        "TECHINSIGHT lahir dari semangat kolaborasi mahasiswa Teknik Informatika UHAMKA yang percaya bahwa teknologi bukan hanya tentang deretan baris kode, melainkan tentang bagaimana kode tersebut menjadi solusi yang menyentuh aspek kehidupan profesional. Kami hadir sebagai platform dokumentasi inovasi, pemikiran kritis, dan jurnalisme teknologi yang digerakkan oleh mahasiswa untuk mahasiswa.",
        `VISI: ${MAGAZINE_CONTENT.about.vision}`,
        ...MAGAZINE_CONTENT.about.mission.map(m => `MISI: ${m}`),
        `TARGET PEMBACA: ${MAGAZINE_CONTENT.about.target}`
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop'
    };
    handleSelectArticle(aboutArticle);
  };

  const handleSelectContributor = (targetId?: string) => {
    const contributorArticle: Article = {
      id: 'contributor',
      title: MAGAZINE_CONTENT.contributorInfo.title,
      category: 'KONTRIBUTOR',
      author: 'Tim Redaksi',
      content: [
        MAGAZINE_CONTENT.contributorInfo.description,
        MAGAZINE_CONTENT.contributorInfo.cta
      ],
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop'
    };
    setSelectedArticle(contributorArticle);
    
    setTimeout(() => {
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectTeam = () => {
    const teamArticle: Article = {
      id: 'editorial-team',
      title: 'TIM REDAKSI',
      category: 'DAFTAR REDAKSI',
      author: 'TECHINSIGHT',
      content: [
        "Temui para arsitek di balik TECHINSIGHT. Dari strategi konten hingga eksekusi teknis, tim kami berkolaborasi untuk menghadirkan jurnalisme teknologi yang bermakna bagi komunitas mahasiswa UHAMKA."
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop'
    };
    handleSelectArticle(teamArticle);
  };

  const handleBack = () => {
    setSelectedArticle(null);
    setTimeout(() => {
      const toc = document.getElementById('toc');
      if (toc) {
        toc.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToId = (id: string, delay: number = 200) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (delay < 1000) {
        scrollToId(id, delay + 200);
      }
    }, 100);
  };

  const handleNavigate = (section: string) => {
    if (section === 'contributor') {
      handleSelectContributor();
      return;
    }

    if (section === 'home') {
      setSelectedArticle(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (section === 'process') {
      setSelectedArticle(null);
      setTimeout(() => {
        const el = document.getElementById('process');
        if (el) {
          const offset = 100; // Extra offset to see the header clearly
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 350);
      return;
    }

    // List of home-based sections
    const homeSections = ['process', 'about', 'team', 'editorial', 'articles', 'toc'];
    
    if (selectedArticle) {
      setSelectedArticle(null);
      if (homeSections.includes(section)) {
        scrollToId(section, 300);
      }
    } else {
      if (homeSections.includes(section)) {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen text-[#f5f5f5] selection:bg-white selection:text-black">
      <Navbar 
        onBack={handleBack} 
        showBack={!!selectedArticle} 
        onNavigate={handleNavigate} 
        forceLight={selectedArticle?.id === 'contributor'}
      />

      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          <motion.div
            key="home"
            id="home"
            className="overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Cover onExplore={handleExplore} />

            {/* Guide Section Removed: Redundant with Contributor section */}

            <div id="toc">
              <TableOfContents 
                onSelectArticle={handleSelectArticle} 
                onSelectEditorial={handleSelectEditorial}
              />
            </div>

            {/* Editorial Highlight */}
            <section id="editorial" className="py-24 md:py-40 bg-[#fbf9f4] text-black overflow-hidden relative cursor-pointer" onClick={handleSelectEditorial}>
              {/* Decorative Watermark */}
              <div className="absolute top-0 right-0 text-[20vw] font-display font-black opacity-[0.03] select-none pointer-events-none translate-x-1/4 -translate-y-1/4 rotate-12">
                INSIGHT
              </div>

              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                  
                  {/* Left Column: Title & Main Text */}
                  <div className="lg:col-span-5 space-y-12 md:space-y-16 relative z-10">
                    <div className="space-y-6">
                      <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9] text-black italic">
                        {MAGAZINE_CONTENT.editorial.title}
                      </h2>
                    </div>

                    <div className="space-y-6 md:space-y-8 text-lg font-serif italic text-zinc-800 leading-relaxed justify-magazine max-w-lg">
                      {MAGAZINE_CONTENT.editorial.text.map((p, i) => (
                        <div 
                          key={i}
                          className={cn(
                            "opacity-90",
                            i === 0 && "first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-black"
                          )}
                        >
                          <ReactMarkdown>{p}</ReactMarkdown>
                        </div>
                      ))}
                    </div>

                    {/* Signature Area */}
                    <div className="pt-8 border-t border-black/5 space-y-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-display font-bold italic text-black/40">Salam Hangat,</span>
                        <h4 className="text-2xl font-display font-bold tracking-tight mt-2">Dinianti Marselia</h4>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 mt-1">Pemimpin Redaksi TECHINSIGHT</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Dramatic Quote */}
                  <div className="lg:col-span-2 hidden lg:flex flex-col justify-center items-center h-full relative">
                     <div className="w-px h-full bg-black/5 absolute" />
                     <div className="bg-[#fbf9f4] py-8 rotate-90 whitespace-nowrap">
                        <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-zinc-300">ESTABLISHED 2026</span>
                     </div>
                  </div>

                  {/* Right Column: Visual & Quote Box */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[3/4] md:aspect-square">
                      <div className="absolute inset-4 border border-black/5 rounded-[2.5rem] -translate-x-4 translate-y-4 z-0" />
                      <div className="absolute inset-0 bg-black rounded-[2.5rem] overflow-hidden z-10 shadow-2xl">
                        <img 
                          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
                          alt="Collaboration"
                          className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                          referrerPolicy="no-referrer"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      </div>
                      
                      {/* Floating Quote Box */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-8 -left-8 md:-left-12 bg-white text-black p-8 md:p-12 rounded-[2rem] shadow-2xl z-20 max-w-[280px] md:max-w-[320px] border border-black/5"
                      >
                        <Quote className="w-8 h-8 text-zinc-200 absolute top-6 right-6" />
                        <p className="text-lg md:text-xl font-display font-bold leading-tight italic tracking-tight">
                          "{MAGAZINE_CONTENT.editorial.quote}"
                        </p>
                      </motion.div>
                    </div>

                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate('about');
                      }}
                      className="mt-20 flex items-center justify-end gap-6 text-[11px] uppercase tracking-[0.4em] font-bold group cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      <span className="border-b border-black pb-1">Visi & Misi Kami</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                </div>
              </div>
            </section>

              <div id="articles">
                <section className="py-16 md:py-32 container mx-auto px-6">
                  <div className="flex justify-between items-end mb-10 md:mb-20">
                    <h2 className="text-[40px] font-display font-bold tracking-tighter">ARTIKEL</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {[...MAGAZINE_CONTENT.articles, ...MAGAZINE_CONTENT.rubrics].map((article, idx) => (
                      <div 
                        key={article.id} 
                        className={cn(
                          "w-full",
                          idx === 0 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                        )}
                      >
                        <ArticleCard 
                          article={article} 
                          index={idx}
                          isLarge={idx === 0}
                          onClick={() => handleSelectArticle(article)}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Interactive About Section */}
              <section id="about" className="py-24 md:py-40 bg-white text-black relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
                  {/* Atmospheric Glows */}
                  <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
                  <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] bg-purple-500/5 blur-[100px] rounded-full" />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-[15%] w-12 h-px bg-black/10 origin-left" 
                  />
                  <motion.div 
                    animate={{ 
                      y: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/3 right-[15%] w-2 h-2 rounded-full border border-black/10" 
                  />

                  {/* Giant Watermark */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-black opacity-[0.02] rotate-[ -15deg] whitespace-nowrap">
                    MANIFESTO
                  </div>
                </div>

                {/* Visual Elements */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/5 hidden lg:block ml-[10%]" />
                <div className="absolute right-0 top-0 w-1/3 h-full bg-zinc-50/50 z-0" />

                <div className="container mx-auto px-6 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Sidebar: Brand Identity */}
                    <div className="lg:col-span-4 space-y-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-px bg-black" />
                          <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-zinc-400">Identitas Utama</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none italic uppercase">
                          Misi &<br/>Visi
                        </h2>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-zinc-500 font-serif italic leading-relaxed text-xl max-w-sm">
                          TECHINSIGHT adalah manifestasi dari semangat kolaborasi FTII UHAMKA dalam mendefinisikan masa depan teknologi.
                        </p>
                        <div className="pt-6 grid grid-cols-2 gap-8 border-t border-black/5">
                           <div className="space-y-1">
                             <div className="text-4xl font-display font-bold tracking-tighter">100+</div>
                             <div className="text-[10px] uppercase tracking-widest font-bold opacity-30">Ide Terkurasi</div>
                           </div>
                           <div className="space-y-1">
                             <div className="text-4xl font-display font-bold tracking-tighter">FTII</div>
                             <div className="text-[10px] uppercase tracking-widest font-bold opacity-30">Basis Inovasi</div>
                           </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content: Interactive Grid */}
                    <div className="lg:col-span-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Vision Module */}
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8 }}
                          className="md:col-span-2 p-10 md:p-14 bg-zinc-900 text-white rounded-[3rem] relative overflow-hidden group shadow-2xl"
                        >
                          <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                            <Target className="w-24 h-24 rotate-12" />
                          </div>
                          <div className="relative z-10 space-y-6">
                             <div className="flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                               <span className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-50">Visi Strategis</span>
                             </div>
                             <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1] tracking-tight italic">
                               "{MAGAZINE_CONTENT.about.vision}"
                             </p>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent" />
                        </motion.div>

                        {/* Mission Modules */}
                        {MAGAZINE_CONTENT.about.mission.map((mission, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 md:p-10 bg-[#fbf9f4] rounded-[2.5rem] border border-black/[0.03] hover:border-black/10 transition-all group flex flex-col justify-between gap-12"
                          >
                            <span className="text-5xl font-display font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity leading-none">0{i+1}</span>
                            <p className="text-[17px] md:text-[19px] text-zinc-800 font-serif italic leading-relaxed">
                              {mission}
                            </p>
                          </motion.div>
                        ))}

                        {/* Target Module */}
                        <motion.div 
                           whileHover={{ scale: 1.02 }}
                           className="p-8 md:p-10 bg-zinc-100 rounded-[2.5rem] border border-black/5 flex flex-col group"
                        >
                          <div className="flex flex-col gap-2">
                             <div className="flex items-center gap-2">
                               <Users className="w-4 h-4 text-black/20" />
                               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40">Target Eksplorasi</span>
                             </div>
                             <h5 className="text-[18px] font-display font-bold group-hover:text-blue-600 transition-colors">Siapa yang kami panggil?</h5>
                          </div>
                          <p className="text-[16px] md:text-[18px] text-zinc-800 font-serif italic leading-relaxed justify-magazine mt-6">
                             {MAGAZINE_CONTENT.about.target}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Innovation Path Section */}
              <section className="py-24 md:py-40 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-zinc-900/40" />
                <div className="container mx-auto px-6 relative z-10">
                  <div className="max-w-4xl mx-auto text-center space-y-16">
                    <div className="space-y-4">
                      <span className="text-[13px] uppercase tracking-[0.5em] font-bold opacity-40">Filosofi</span>
                      <h2 className="text-[40px] font-display font-bold tracking-tighter">LANGKAH MENUJU INOVASI</h2>
                    </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {MAGAZINE_CONTENT.steps.map((step, idx) => {
                      const stepIcons = [Search, Rocket, AlertCircle, Users];
                      const StepIcon = stepIcons[idx] || CheckCircle2;
                      
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="glass-card p-6 md:p-10 rounded-3xl text-left flex flex-col md:flex-row gap-6 md:gap-8 items-start group hover:bg-white/5 transition-colors relative overflow-hidden"
                        >
                          <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <StepIcon className="w-32 h-32" />
                          </div>
                          <div className="relative z-10">
                            <span className="text-4xl font-display font-bold opacity-10 group-hover:opacity-20 transition-opacity">0{idx + 1}</span>
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center gap-3">
                                <StepIcon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                                <p className="text-[20px] font-medium tracking-tight">{step.title}</p>
                              </div>
                              <p className="text-base text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Publish Workflow Section */}
            <section id="process" className="py-32 container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-4">
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 0.4, y: 0 }}
                      viewport={{ once: true }}
                      className="text-xs uppercase tracking-[0.5em] font-bold"
                    >
                      Workflow
                    </motion.span>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-[40px] font-display font-bold tracking-tighter uppercase"
                    >
                      Proses Redaksi
                    </motion.h2>
                  </div>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-zinc-500 font-serif italic text-lg leading-relaxed max-w-xl border-l border-white/10 pl-6"
                  >
                    Alur kolaborasi tim redaksi dalam memproses gagasan teknis menjadi publikasi yang kredibel dan berwawasan.
                  </motion.p>
                  
                  <div className="relative space-y-1">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                    
                    {MAGAZINE_CONTENT.process.map((step, i) => {
                      const icons = [MessageSquare, PenTool, Type, Users, Layout, Globe];
                      const Icon = icons[i] || CheckCircle2;
                      
                      return (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-6 p-6 rounded-3xl hover:bg-white/5 transition-all group cursor-default border border-transparent hover:border-white/10"
                        >
                          <div className="relative shrink-0">
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-white/40 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
                              <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                            <div className="absolute -inset-1 bg-white/5 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                          </div>
                          <div className="space-y-1 pt-1">
                            <span className="text-[13px] uppercase tracking-[0.3em] font-black opacity-20 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300">Tahap 0{i + 1}</span>
                            <h4 className="text-[20px] font-display font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300 uppercase leading-none">{step}</h4>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                      className="glass-card p-10 rounded-[2.5rem] space-y-8 relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <Cpu className="w-32 h-32" />
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-[20px] font-display font-bold tracking-tight uppercase">Teknologi & Referensi</h3>
                        <p className="text-base text-zinc-400 leading-relaxed font-light">
                          Kami mengeksplorasi AI, IoT, dan Machine Learning melalui referensi dan sitasi ilmiah untuk mendukung pemecahan masalah yang kredibel.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ y: -10 }}
                      className="glass-card p-10 rounded-[2.5rem] space-y-8 relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <Lightbulb className="w-32 h-32" />
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-[20px] font-display font-bold tracking-tight uppercase">Inovasi Profesional</h3>
                        <p className="text-base text-zinc-400 leading-relaxed font-light">
                          Menjembatani teori akademik dengan tantangan profesional guna menciptakan solusi digital yang berdampak pada dunia kerja dan masyarakat.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ y: -10 }}
                      className="glass-card p-10 rounded-[2.5rem] col-span-1 md:col-span-2 flex flex-col md:flex-row gap-10 items-center group"
                    >
                      <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                          alt="Teamwork"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-zinc-500">
                          <Users className="w-3 h-3" /> Kolaborasi Tim
                        </div>
                        <h3 className="text-[20px] font-display font-bold tracking-tight uppercase">Sinergi Antar Lini</h3>
                        <p className="text-base text-zinc-400 leading-relaxed font-light">
                          Dari penulis hingga desainer, setiap peran berkontribusi dalam kolaborasi untuk menciptakan karya jurnalistik yang berkualitas.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  {/* Langkah Menuju Inovasi Link */}
                  <div className="mt-12 flex justify-end">
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => setShowInnovationWindow(true)}
                      className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] font-black text-white/40 hover:text-blue-400 transition-all duration-300"
                    >
                      LANGKAH MENUJU INOVASI 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-24 md:py-48 bg-white relative overflow-hidden">
              {/* Background Watermark Accent - Centered to prevent cutting off */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center text-[14vw] font-display font-black opacity-[0.03] select-none pointer-events-none whitespace-nowrap text-black">
                EDITORIAL
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-black">
                      <div className="w-12 h-[1px] bg-black opacity-30" />
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 0.4, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.6em] font-bold"
                      >
                        Creative Minds
                      </motion.span>
                    </div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-[0.85] text-black"
                    >
                      The People <br/> 
                      <span className="text-zinc-300 italic font-serif lowercase tracking-normal ml-8 md:ml-16">Behind</span>
                    </motion.h2>
                  </div>

                  {/* Decorative Badge - Certified Quality */}
                  <motion.div 
                    initial={{ rotate: -15, opacity: 0, scale: 0.8 }}
                    whileInView={{ rotate: -8, opacity: 1, scale: 1 }}
                    className="hidden lg:flex flex-col items-center justify-center w-36 h-36 rounded-full border border-dashed border-zinc-200 p-6 text-center text-black"
                  >
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-30 leading-tight">Authentic<br/>Digital<br/>Editorial</span>
                    <div className="my-2 w-10 h-[1px] bg-zinc-100" />
                    <span className="text-[8px] font-mono opacity-20">EST. 2026</span>
                  </motion.div>
                </div>

                {/* Vertical Rail Detail */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block text-black">
                  <span 
                    style={{ writingMode: 'vertical-rl' }}
                    className="rotate-180 text-[10px] uppercase tracking-[1.2em] font-bold opacity-10 whitespace-nowrap"
                  >
                    TECHINSIGHT MAGAZINE — ISSUE 01 — VOL 01
                  </span>
                </div>
                
                <div className="flex flex-col border-t border-black/10">
                  {MAGAZINE_CONTENT.team.map((member, i) => {
                    const RoleIcon = (() => {
                      switch (member.role) {
                        case "Pemimpin Redaksi": return Crown;
                        case "Editor": return Search;
                        case "Content Writer": return PenTool;
                        case "Desain/Layout": return Palette;
                        case "Documentation": return Camera;
                        case "Tech Lead": return Cpu;
                        default: return User;
                      }
                    })();

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative border-b border-black/10 py-6 md:py-10 px-4 cursor-pointer overflow-hidden touch-manipulation"
                      >
                        {/* Interactive Background Reveal */}
                        <motion.div 
                          className="absolute inset-0 bg-zinc-900 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
                        />
                        
                        {/* Animated Side Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-900 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 group-hover:translate-x-2 transition-all duration-500">
                          <div className="flex items-center gap-4 md:gap-8 min-w-0 flex-1">
                            <div className="relative shrink-0">
                              <span className="text-3xl md:text-5xl font-display font-bold opacity-10 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
                                0{i + 1}
                              </span>
                              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500 delay-200" />
                            </div>
                            
                            <div className="flex items-center gap-4 md:gap-6 min-w-0">
                              <div className="p-3 rounded-2xl bg-zinc-100 group-hover:bg-white/10 transition-colors shrink-0">
                                <RoleIcon className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-white transition-colors" />
                              </div>
                              <div className="space-y-1 min-w-0">
                                <span className="text-[13px] uppercase tracking-[0.3em] font-bold opacity-40 group-hover:text-zinc-400 group-hover:opacity-100 transition-all block text-black">
                                  {member.role}
                                </span>
                                <h4 className="text-2xl md:text-[40px] font-display font-bold tracking-tighter group-hover:text-white transition-colors duration-500 leading-none text-black">
                                  {member.name}
                                </h4>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col md:items-end gap-3 pl-14 md:pl-0 shrink-0">
                            <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-all duration-500">
                              <p className="text-[10px] md:text-base lg:text-lg font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors break-all md:whitespace-nowrap">
                                {member.email}
                              </p>
                              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-zinc-400 group-hover:text-white shrink-0" />
                            </div>
                            <div className="h-[1px] w-full md:w-32 bg-black/10 group-hover:bg-white/20 transition-colors" />
                          </div>
                        </div>

                        {/* Mobile Indicator */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
                          <Plus className="w-6 h-6 opacity-20 group-hover:opacity-100 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Conclusion & Pantun Section */}
            <section className="py-24 md:py-48 bg-zinc-950 relative overflow-hidden">
               {/* Background Watermark */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-[20vw] font-display font-black opacity-[0.02] select-none pointer-events-none whitespace-nowrap text-white">
                FUTURE
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                  <div className="space-y-10 md:space-y-16">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-blue-500" />
                        <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-blue-400">MANIFESTO</span>
                      </div>
                      <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none text-white uppercase italic">
                        {MAGAZINE_CONTENT.conclusion.title.split(' ').map((word, i) => (
                          <span key={i} className={i === 2 ? "text-blue-500" : ""}>{word} </span>
                        ))}
                      </h2>
                    </div>
                    <div className="space-y-8">
                      {MAGAZINE_CONTENT.conclusion.text.map((p, i) => (
                        <div key={i} className="text-lg md:text-xl font-serif italic leading-relaxed text-zinc-400 justify-magazine border-l-2 border-white/5 pl-8">
                          <ReactMarkdown>{p}</ReactMarkdown>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] relative overflow-hidden group max-w-lg w-full shadow-2xl"
                    >
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                      
                      <div className="space-y-8 md:space-y-12 text-center">
                        <div className="inline-flex flex-col items-center gap-2">
                           <Sparkles className="w-6 h-6 text-blue-400 mb-2" />
                           <h3 className="text-[11px] uppercase tracking-[0.6em] font-black opacity-40 text-white">{MAGAZINE_CONTENT.pantun.title}</h3>
                        </div>
                        
                        <div className="space-y-6 md:space-y-8">
                          {MAGAZINE_CONTENT.pantun.lines.map((line, i) => (
                            <p key={i} className={cn(
                              "text-[22px] md:text-[28px] font-display font-bold tracking-tight leading-tight",
                              i % 2 === 1 ? "text-zinc-500 italic font-serif" : "text-white"
                            )}>
                              {line}
                            </p>
                          ))}
                        </div>

                        <div className="pt-8 md:pt-12 flex flex-col items-center gap-4">
                          <div className="w-16 h-[1px] bg-white/10" />
                          <span className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-20">TechInsight Ed. 1 • 2026</span>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            <Feedback />

            {/* References */}
            <section className="py-16 md:py-32 border-t border-white/5">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl">
                  <h2 className="text-sm uppercase tracking-[0.5em] font-bold opacity-40 mb-8 md:mb-12">Referensi</h2>
                  <div className="space-y-4 md:space-y-6">
                    {MAGAZINE_CONTENT.references.map((ref, i) => (
                      <p key={i} className="text-xs md:text-base text-zinc-400 font-mono leading-relaxed hover:text-zinc-200 transition-colors cursor-default">
                        [{i + 1}] {ref}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="article"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {selectedArticle.id === 'contributor' ? (
              <ContributorView onNavigate={handleNavigate} />
            ) : (
              <ArticleView article={selectedArticle} />
            )}
            
            {/* Next Article Suggestion */}
            <section className="py-16 md:py-32 border-t border-white/5 container mx-auto px-6">
              <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">Baca Selanjutnya</span>
                <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter uppercase">Jelajahi Lebih Banyak</h2>
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold hover:gap-6 transition-all group"
                >
                  Kembali ke Daftar Isi <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} onSelectEditorial={handleSelectEditorial} />

      {/* Modal Langkah Menuju Inovasi */}
      <AnimatePresence>
        {showInnovationWindow && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInnovationWindow(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-y-auto shadow-2xl mx-4"
            >
              <button 
                onClick={() => setShowInnovationWindow(false)}
                className="fixed md:absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[160] shadow-xl backdrop-blur-md"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-12 p-12 md:p-16 space-y-12">
                  <div className="text-center space-y-4 mb-8">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">FILOSOFI</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none text-white">
                      LANGKAH MENUJU INOVASI
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                    {[
                      {
                        num: "01",
                        icon: Search,
                        title: "Mulai dari masalah sederhana",
                        desc: "Inovasi tidak harus rumit. Sering kali solusi terbaik datang dari pengamatan masalah kecil di sekitar kita."
                      },
                      {
                        num: "02",
                        icon: Rocket,
                        title: "Jangan takut mencoba",
                        desc: "Langkah pertama adalah yang terberat. Keberanian untuk memulai adalah kunci utama setiap keberhasilan."
                      },
                      {
                        num: "03",
                        icon: AlertCircle,
                        title: "Error adalah bagian dari proses",
                        desc: "Jangan menyerah saat menghadapi bug atau kegagalan. Setiap error adalah pelajaran berharga untuk perbaikan."
                      },
                      {
                        num: "04",
                        icon: Users,
                        title: "Kerja sama tim sangat penting",
                        desc: "Kolaborasi menyatukan berbagai perspektif. Bersama tim, ide kecil bisa berkembang menjadi solusi besar."
                      }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 md:p-10 glass-card rounded-[2rem] border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
                      >
                        <span className="absolute top-6 right-8 text-4xl font-display font-black opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">{item.num}</span>
                        <div className="space-y-6 relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all">
                              <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                            </div>
                            <h4 className="text-lg md:text-xl font-display font-bold leading-tight text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h4>
                          </div>
                          <p className="text-sm text-zinc-500 leading-relaxed font-light justify-magazine">
                            {item.desc}
                          </p>
                        </div>
                        {/* Motif Backdrop */}
                        <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                          <item.icon className="w-40 h-40" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-12 h-[1px] bg-white/10" />
                    <button 
                      onClick={() => {
                        setShowInnovationWindow(false);
                        handleSelectContributor();
                      }}
                      className="px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-zinc-200 transition-all flex items-center gap-3 shadow-2xl shadow-white/5"
                    >
                      Mulai Kontribusi Anda <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">TECHINSIGHT • INSPIRING INNOVATION</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
