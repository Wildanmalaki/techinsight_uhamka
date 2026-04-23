import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onBack?: () => void;
  showBack?: boolean;
  onNavigate: (section: string) => void;
  forceLight?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onBack, showBack, onNavigate, forceLight }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLight, setIsLight] = React.useState(false);

  // Derive final light state from both scroll state and forceLight prop
  const currentIsLight = forceLight || isLight;

  React.useEffect(() => {
    if (forceLight) {
      setIsLight(true);
      return;
    }
    const handleScroll = () => {
      const scrollPos = window.scrollY + 40; 
      const lightSections = ['editorial', 'about', 'team'];
      
      let foundLight = false;
      for (const id of lightSections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = rect.bottom + window.scrollY;
          if (scrollPos >= top && scrollPos <= bottom) {
            foundLight = true;
            break;
          }
        }
      }
      setIsLight(foundLight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceLight]);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-between items-center transition-all duration-500",
      "border-t-0 border-x-0 backdrop-blur-2xl",
      (showBack && !forceLight) 
        ? "bg-black/90 text-white border-white/10" 
        : (currentIsLight 
            ? "bg-white/80 text-black border-black/10 shadow-xl" 
            : "bg-[#0a0a0a]/20 text-white border-white/5")
    )}>
      <div className="flex items-center gap-4">
        {showBack && (
          <button 
            onClick={onBack}
            className={cn(
              "p-2 rounded-full transition-colors",
              currentIsLight ? "hover:bg-black/10 text-black" : "hover:bg-white/10 text-white"
            )}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div className="flex flex-col cursor-pointer" onClick={() => handleNavClick('home')}>
          <span className={cn(
            "font-display font-bold text-2xl tracking-tighter leading-none transition-colors",
            currentIsLight ? "text-black" : "text-white"
          )}>TECHINSIGHT</span>
          <span className={cn(
            "text-[13px] uppercase tracking-[0.3em] font-bold transition-colors",
            currentIsLight ? "text-black/40" : "text-white/40"
          )}>Edisi 1 • 2026</span>
        </div>
      </div>

      <div className={cn(
        "hidden md:flex items-center gap-8 text-[13px] uppercase tracking-widest font-bold font-modern transition-colors",
        currentIsLight ? "text-black/70" : "text-white/70"
      )}>
        <button onClick={() => handleNavClick('home')} className={cn("transition-opacity", currentIsLight ? "hover:text-black" : "hover:text-white")}>Beranda</button>
        <button onClick={() => handleNavClick('articles')} className={cn("transition-opacity", currentIsLight ? "hover:text-black" : "hover:text-white")}>Artikel</button>
        <button onClick={() => handleNavClick('process')} className={cn("transition-opacity", currentIsLight ? "hover:text-black" : "hover:text-white")}>Proses</button>
        <button onClick={() => handleNavClick('team')} className={cn("transition-opacity", currentIsLight ? "hover:text-black" : "hover:text-white")}>Tim</button>
        <button onClick={() => handleNavClick('about')} className={cn("transition-opacity", currentIsLight ? "hover:text-black" : "hover:text-white")}>Tentang</button>
        <button onClick={() => handleNavClick('contributor')} className={cn("transition-opacity", currentIsLight ? "hover:text-black" : "hover:text-white")}>Kontributor</button>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-2 rounded-full transition-colors md:hidden",
          currentIsLight ? "hover:bg-black/5 text-black" : "hover:bg-white/10 text-white"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "absolute top-full left-0 right-0 backdrop-blur-2xl border-b p-8 flex flex-col gap-8 md:hidden shadow-2xl font-modern transition-colors",
            currentIsLight ? "bg-white/95 border-black/10 text-black" : "bg-[#0a0a0a]/95 border-white/10 text-white"
          )}
        >
          <button onClick={() => handleNavClick('home')} className="text-left text-sm uppercase tracking-[0.3em] font-bold opacity-70 hover:opacity-100 transition-opacity">Beranda</button>
          <button onClick={() => handleNavClick('articles')} className="text-left text-sm uppercase tracking-[0.3em] font-bold opacity-70 hover:opacity-100 transition-opacity">Artikel</button>
          <button onClick={() => handleNavClick('process')} className="text-left text-sm uppercase tracking-[0.3em] font-bold opacity-70 hover:opacity-100 transition-opacity">Proses</button>
          <button onClick={() => handleNavClick('team')} className="text-left text-sm uppercase tracking-[0.3em] font-bold opacity-70 hover:opacity-100 transition-opacity">Tim</button>
          <button onClick={() => handleNavClick('about')} className="text-left text-sm uppercase tracking-[0.3em] font-bold opacity-70 hover:opacity-100 transition-opacity">Tentang</button>
          <button onClick={() => handleNavClick('contributor')} className="text-left text-sm uppercase tracking-[0.3em] font-bold opacity-70 hover:opacity-100 transition-opacity">Kontributor</button>
          
          <div className={cn(
            "pt-8 border-t flex flex-col gap-2",
            currentIsLight ? "border-black/5" : "border-white/5"
          )}>
            <span className="text-[13px] uppercase tracking-[0.2em] opacity-40 font-bold">Teknik Informatika UHAMKA</span>
            <span className="text-[13px] uppercase tracking-[0.2em] opacity-40 font-bold">Edisi 1 • 2026</span>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
