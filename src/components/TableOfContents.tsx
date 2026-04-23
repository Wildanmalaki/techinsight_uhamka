import React from 'react';
import { motion } from 'motion/react';
import { MAGAZINE_CONTENT } from '../constants';
import ReactMarkdown from 'react-markdown';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';

interface TableOfContentsProps {
  onSelectArticle: (article: Article) => void;
  onSelectEditorial: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ onSelectArticle, onSelectEditorial }) => {
  return (
    <section className="py-16 md:py-32 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-8">
        <div className="space-y-4">
          <span className="text-[13px] uppercase tracking-[0.5em] font-bold opacity-40">Isi Majalah</span>
          <h2 className="text-[40px] font-display font-bold tracking-tighter leading-tight">DAFTAR ISI</h2>
        </div>
        <div className="max-w-xs text-base text-zinc-500 leading-relaxed font-sans mt-2 md:mt-12">
          Eksplorasi mendalam tentang bagaimana mahasiswa Teknik Informatika UHAMKA mengubah teori menjadi solusi konkret.
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 md:gap-y-24">
        {/* Editorial Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={onSelectEditorial}
          className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)] space-y-6 md:space-y-8 cursor-pointer"
        >
          <div className="glass-card p-8 md:p-10 rounded-3xl h-full space-y-6 md:space-y-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-7xl font-display font-bold">01</span>
              </div>
              <h3 className="text-[20px] font-display font-bold tracking-tight">PESAN REDAKSI</h3>
              <p className="text-base text-zinc-400 leading-relaxed line-clamp-3 font-light italic justify-magazine lg:text-left">
                "Visi redaksi dalam menjembatani teori perkuliahan dengan implementasi teknologi fungsional bagi masa depan mahasiswa profesional."
              </p>
              <div className="flex items-center gap-3 text-[13px] uppercase tracking-[0.3em] font-bold group-hover:gap-5 transition-all">
                Baca Selengkapnya <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Articles */}
        {MAGAZINE_CONTENT.articles.map((article, idx) => (
          <motion.div 
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx + 1) * 0.1 }}
            onClick={() => onSelectArticle(article)}
            className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)] group cursor-pointer"
          >
            <div className="flex gap-6">
              <span className="text-4xl font-display font-bold opacity-10 shrink-0">0{idx + 2}</span>
              <div className="space-y-6 flex-1">
                <div className="space-y-2">
                  <span className="text-[13px] uppercase tracking-widest font-bold opacity-40 font-modern">{article.category}</span>
                  <h3 className="text-[20px] font-modern font-bold leading-tight group-hover:text-zinc-400 transition-colors">
                    <ReactMarkdown components={{ p: 'span' }}>{article.title}</ReactMarkdown>
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                <div className="text-base text-zinc-500 leading-relaxed line-clamp-3 font-light justify-magazine lg:text-left">
                  <ReactMarkdown>{article.subtitle}</ReactMarkdown>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[13px] font-medium opacity-40 italic shrink-0">Oleh: {article.author}</span>
                  <div className="flex items-center gap-3 text-[13px] uppercase tracking-[0.3em] font-bold group-hover:gap-5 transition-all opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Rubrics Section */}
        {MAGAZINE_CONTENT.rubrics.map((rubric, idx) => (
          <motion.div 
            key={rubric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (MAGAZINE_CONTENT.articles.length + idx + 1) * 0.1 }}
            onClick={() => onSelectArticle(rubric)}
            className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)] group cursor-pointer"
          >
            <div className="flex gap-6">
              <span className="text-4xl font-display font-bold opacity-10 shrink-0">
                0{MAGAZINE_CONTENT.articles.length + idx + 2}
              </span>
              <div className="space-y-6 flex-1">
                <div className="space-y-2">
                  <span className="text-[13px] uppercase tracking-widest font-bold opacity-40 font-modern">{rubric.category}</span>
                  <h3 className="text-[20px] font-modern font-bold leading-tight group-hover:text-zinc-400 transition-colors">
                    <ReactMarkdown components={{ p: 'span' }}>{rubric.title}</ReactMarkdown>
                  </h3>
                </div>
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                <div className="text-base text-zinc-500 leading-relaxed line-clamp-3 font-light justify-magazine lg:text-left">
                  <ReactMarkdown>{rubric.subtitle}</ReactMarkdown>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[13px] font-medium opacity-40 italic shrink-0">Oleh: {rubric.author}</span>
                  <div className="flex items-center gap-3 text-[13px] uppercase tracking-[0.3em] font-bold group-hover:gap-5 transition-all opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
