import React from 'react';
import { MAGAZINE_CONTENT } from '../constants';
import { Phone, Twitter, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  onSelectEditorial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectEditorial }) => {
  return (
    <footer className="py-12 md:py-24 glass-card border-b-0 border-x-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-12 md:mb-20">
          <div className="md:col-span-4 space-y-8 flex flex-col items-start">
            <div className="flex flex-col items-start cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="font-display font-bold text-3xl tracking-tighter">TECHINSIGHT</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">Edisi 1 • {new Date().getFullYear()}</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed font-light max-w-xs text-left">
              Mewadahi inovasi dan pemikiran kritis mahasiswa Teknik Informatika UHAMKA dalam menghadapi era digital.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/uhamkaid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Instagram UHAMKA"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/UhamkaID" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Twitter UHAMKA"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="tel:+62217394451" 
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Telepon UHAMKA"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@uhamka.ac.id" 
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Email UHAMKA"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 flex flex-col items-start">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Navigasi</h4>
            <ul className="space-y-4 text-sm font-medium flex flex-col items-start">
              <li><button onClick={() => onNavigate('home')} className="hover:opacity-60 transition-opacity text-left">Beranda</button></li>
              <li><button onClick={() => onNavigate('articles')} className="hover:opacity-60 transition-opacity text-left">Artikel</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:opacity-60 transition-opacity text-left">Tentang Kami</button></li>
              <li><button onClick={() => onNavigate('contributor')} className="hover:opacity-60 transition-opacity text-left">Kontributor</button></li>
              <li><button onClick={() => onSelectEditorial()} className="hover:opacity-60 transition-opacity text-left">Pesan Redaksi</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:opacity-60 transition-opacity text-left">Tim Redaksi</button></li>
            </ul>
          </div>

          <div id="team" className="md:col-span-3 space-y-6 flex flex-col items-start">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Tim Redaksi</h4>
            <ul className="space-y-4 text-sm font-medium flex flex-col items-start">
              {MAGAZINE_CONTENT.team.map((member, idx) => (
                <li key={idx} className="flex flex-col items-start text-left">
                  <span className="text-[10px] uppercase tracking-widest opacity-40">{member.role}</span>
                  <span>{member.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6 flex flex-col items-start">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Fakultas</h4>
            <p className="text-sm font-medium leading-relaxed text-left">
              {MAGAZINE_CONTENT.faculty}<br />
              {MAGAZINE_CONTENT.university}
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
          <span>© 2026 TECHINSIGHT. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
