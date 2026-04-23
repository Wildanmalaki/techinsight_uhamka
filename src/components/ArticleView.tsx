import React from 'react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { Article } from '../types';
import { MAGAZINE_CONTENT } from '../constants';
import { Feedback } from './Feedback';
import { Calendar, Share2, Bookmark, Lightbulb, PenTool, Search, Users, BookMarked, Rocket, Shield, Target, Mail, User, FileText, Award, Laptop, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

interface ArticleViewProps {
  article: Article;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article }) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 relative"
    >
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-white/5">
        <motion.div 
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-8 md:mb-16 space-y-6 md:space-y-8">
          <div className="flex items-center justify-between">
            {article.category && (
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold">
                <span className="bg-white/10 px-3 py-1 rounded-full">{article.category}</span>
              </div>
            )}
          </div>
          
          <h1 className="text-4xl md:text-[64px] font-display font-bold tracking-tight md:tracking-tighter leading-[1.1] text-white mb-6 md:mb-12 break-words">
            <ReactMarkdown components={{ p: 'span' }}>{article.title}</ReactMarkdown>
          </h1>

      <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4 border-y border-white/5 py-4 md:py-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-zinc-500" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Tanggal</span>
                <span className="text-[13px] font-medium text-zinc-300">
                  {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
            </div>

            {article.author && (
              <div className="flex items-center gap-3">
                <PenTool className="w-4 h-4 text-zinc-500" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Penulis</span>
                  <span className="text-[13px] font-medium text-zinc-300">{article.author}</span>
                </div>
              </div>
            )}

            <div className="ml-auto flex items-center gap-4">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {article.image && (
          <div className="aspect-video rounded-3xl overflow-hidden mb-8 glass-card">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 overflow-hidden">
          <div className="lg:col-span-8 space-y-6 md:space-y-8 w-full max-w-full">
            {article.content.map((paragraph, idx) => {
              if (article.id === 'about-us') {
                if (paragraph.startsWith('VISI:')) {
                  return (
                    <div key={idx} className="space-y-4 mb-8 md:mb-12 px-2 md:px-0">
                      <div className="flex items-center gap-3 text-blue-400">
                        <Rocket className="w-5 h-5" />
                        <span className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">Visi Kami</span>
                      </div>
                      <p className="text-xl md:text-3xl font-display font-bold text-white leading-tight justify-magazine">
                        {paragraph.replace('VISI: ', '')}
                      </p>
                    </div>
                  );
                }
                if (paragraph.startsWith('MISI:')) {
                  return (
                    <div key={idx} className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4 px-2 md:px-0">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                        <Shield className="w-3 h-3 text-zinc-500" />
                      </div>
                      <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed justify-magazine flex-1">
                        {paragraph.replace('MISI: ', '')}
                      </p>
                    </div>
                  );
                }
                if (paragraph.startsWith('TARGET PEMBACA:')) {
                  return (
                    <div key={idx} className="mt-8 md:mt-12 p-6 md:p-8 glass-card rounded-2xl border-l-4 border-blue-500 mx-2 md:mx-0">
                      <div className="flex items-center gap-3 mb-4 text-blue-400">
                        <Target className="w-5 h-5" />
                        <span className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">Target Pembaca</span>
                      </div>
                      <p className="text-lg md:text-2xl text-white font-serif italic justify-magazine leading-relaxed">
                        {paragraph.replace('TARGET PEMBACA: ', '')}
                      </p>
                    </div>
                  );
                }
              }

              if (article.id === 'contributor' && idx === 1) {
                return (
                  <div key={idx} className="space-y-12 mt-12 mb-16">
                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-6 glass-card rounded-2xl border border-white/5 flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                          <Award className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Portfolio Booster</h4>
                          <p className="text-sm text-zinc-500 leading-relaxed font-light">Karya Anda akan terpublikasi secara luas dan menjadi portofolio yang kredibel di industri.</p>
                        </div>
                      </div>
                      <div className="p-6 glass-card rounded-2xl border border-white/5 flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                          <Users className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Networking</h4>
                          <h4 className="sr-only">Networking</h4>
                          <p className="text-sm text-zinc-500 leading-relaxed font-light">Terhubung langsung dengan tim redaksi, akademisi, dan praktisi teknologi dari berbagai latar belakang.</p>
                        </div>
                      </div>
                    </div>

                    {/* What to Send */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-blue-500" />
                        <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-zinc-400">Apa yang bisa dikirim?</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                          { icon: FileText, title: "Opini & Analisis", desc: "Bahasan kritis tentang tren teknologi terkini." },
                          { icon: Laptop, title: "Showcase Proyek", desc: "Dokumentasi proyek atau aplikasi buatan Anda." },
                          { icon: MessageSquare, title: "Bedah Teknologi", desc: "Ulasan komprehensif mengenai library, framework, hingga gawai penunjang inovasi." }
                        ].map((item, i) => (
                          <div key={i} className="space-y-3">
                            <item.icon className="w-6 h-6 text-zinc-500" />
                            <h5 className="text-white font-bold text-sm uppercase tracking-wide">{item.title}</h5>
                            <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Card */}
                    <div className="p-8 md:p-12 glass-card rounded-[2.5rem] text-center space-y-8 border border-white/10 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -mr-32 -mt-32" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[80px] -ml-32 -mb-32" />
                      
                      <div className="relative space-y-6">
                        <div className="inline-flex p-5 rounded-2xl bg-white/5 shadow-inner">
                          <Mail className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-3 mx-auto">
                           <h4 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white italic">Siap Menjadi Bagian dari Kami?</h4>
                           <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed md:whitespace-nowrap">
                             {paragraph}
                           </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                          <button 
                            onClick={() => window.location.href = `mailto:dinianti.marselia@uhamka.ac.id?subject=Submit Naskah TECHINSIGHT - [Judul Artikel]&body=Halo Pemimpin Redaksi TECHINSIGHT,%0D%0A%0D%0ASaya ingin mengirimkan naskah untuk edisi mendatang...`}
                            className="px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                          >
                            Buka Draft Email
                          </button>
                          <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest italic">Respons dalam 3-5 hari kerja</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div 
                  key={idx} 
                  className={cn(
                    "text-[17px] md:text-[19px] leading-[1.8] text-zinc-300 font-light justify-magazine px-2 md:px-0 mb-8",
                    idx === 0 && article.id !== 'about-us' && "first-letter:text-6xl md:first-letter:text-8xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-6 md:first-letter:mr-8 first-letter:mt-3 first-letter:text-white first-letter:leading-[0.8]"
                  )}
                >
                  <ReactMarkdown>{paragraph}</ReactMarkdown>
                </div>
              );
            })}
          </div>

          <aside className="lg:col-span-4 space-y-8 md:space-y-12">
            {(article.editor || article.peerReview) && (
              <div className="space-y-4 md:space-y-6">
                <h4 className="text-[20px] uppercase tracking-[0.3em] font-bold border-b border-white/10 pb-4">Kontributor</h4>
                <div className="space-y-4">
                  {article.editor && (
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors mt-1">
                        <Search className="w-4 h-4 text-zinc-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mb-1">Editor</span>
                        <span className="text-[14px] font-serif italic text-zinc-300 leading-relaxed"><ReactMarkdown components={{ p: 'span' }}>{article.editor}</ReactMarkdown></span>
                      </div>
                    </div>
                  )}
                  {article.peerReview && (
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors mt-1">
                        <Users className="w-4 h-4 text-zinc-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mb-1">Peer Review</span>
                        <span className="text-[14px] font-serif italic text-zinc-300 leading-relaxed"><ReactMarkdown components={{ p: 'span' }}>{article.peerReview}</ReactMarkdown></span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden group">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="relative">
                  <Lightbulb className="w-5 h-5 text-yellow-400 fill-yellow-400/20 animate-pulse" />
                  <div className="absolute inset-0 blur-lg bg-yellow-400/40 animate-pulse" />
                </div>
                <h4 className="text-[20px] uppercase tracking-[0.3em] font-bold">Insight</h4>
              </div>
              <p className="text-[13px] text-zinc-400 italic leading-relaxed">
                "Inovasi dimulai dari keberanian untuk mencoba hal-hal baru, meskipun itu kecil."
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[20px] uppercase tracking-[0.3em] font-bold">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {["Teknologi", "Mahasiswa", "Inovasi", "TI"].map(tag => (
                  <span key={tag} className="text-[12px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {article.references && article.references.length > 0 && (
              <div className="pt-8 border-t border-white/10 space-y-6">
                <div className="flex items-center gap-3">
                  <BookMarked className="w-4 h-4 text-zinc-400" />
                  <h4 className="text-[20px] uppercase tracking-[0.3em] font-bold">Referensi</h4>
                </div>
                <div className="space-y-4">
                  {article.references.map((refIdx) => (
                    <div key={refIdx} className="text-[13px] leading-relaxed text-zinc-500 group">
                      <span className="font-mono text-zinc-600 mr-2">[{refIdx + 1}]</span>
                      <span className="group-hover:text-zinc-300 transition-colors">
                        {MAGAZINE_CONTENT.references[refIdx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-20 md:mt-32 border-t border-white/10 pt-20">
        </div>
      </div>
    </motion.article>
  );
};
