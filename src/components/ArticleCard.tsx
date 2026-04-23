import React from 'react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { Article } from '../types';
import { ArrowUpRight, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
  index: number;
  isLarge?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick, index, isLarge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer",
        isLarge && "md:flex md:gap-8 items-center"
      )}
    >
      <div className={cn(
        "relative overflow-hidden rounded-2xl mb-4 md:mb-6 glass-card group-hover:border-white/20 transition-all duration-500",
        isLarge ? "aspect-[16/9] md:aspect-square md:w-1/2 md:mb-0" : "aspect-[4/5]"
      )}>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur opacity-0 group-hover:opacity-100 transition duration-500" />
        {article.image ? (
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-zinc-900 flex items-center justify-center p-8 md:p-12">
            <span className="text-4xl font-display font-bold opacity-10 text-center">{article.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white">
            Baca Selengkapnya <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <div className={cn(
        "space-y-3",
        isLarge && "md:w-1/2 md:space-y-6"
      )}>
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-blue-500" />
          <span className="text-[11px] md:text-[13px] uppercase tracking-[0.3em] font-bold text-zinc-500 font-modern">
            {article.category}
          </span>
        </div>
        <h3 className={cn(
          "font-display font-medium leading-[1.1] group-hover:text-zinc-400 transition-colors uppercase",
          isLarge ? "text-3xl md:text-5xl lg:text-7xl mb-4" : "text-[22px]"
        )}>
          <ReactMarkdown components={{ p: 'span' }}>{article.title}</ReactMarkdown>
        </h3>
        <div className={cn(
          "text-zinc-500 font-light leading-relaxed justify-magazine",
          isLarge ? "text-lg line-clamp-4" : "text-base line-clamp-2"
        )}>
          <ReactMarkdown>{article.content[0]}</ReactMarkdown>
        </div>
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
              <User className="w-4 h-4 text-zinc-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Penulis</span>
              <span className="text-[13px] font-medium opacity-80 group-hover:text-white transition-colors"><ReactMarkdown components={{ p: 'span' }}>{article.author}</ReactMarkdown></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
