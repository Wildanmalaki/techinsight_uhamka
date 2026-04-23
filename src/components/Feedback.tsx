import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Send, CheckCircle2, MessageSquare, Quote } from 'lucide-react';
import { cn } from '../lib/utils';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot, waitForPendingWrites } from 'firebase/firestore';

interface FeedbackData {
  id: string;
  rating: number;
  feedback: string;
  userName: string;
  articleId: string;
  createdAt: any;
}

interface FeedbackProps {
  articleId?: string;
}

export const Feedback: React.FC<FeedbackProps> = ({ articleId }) => {
  const targetArticleId = articleId || 'general';
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [userName, setUserName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentFeedbacks, setRecentFeedbacks] = useState<FeedbackData[]>([]);
  const [isLoadingFeedbacks, setIsLoadingFeedbacks] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'feedbacks_v3'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const feedbacks: FeedbackData[] = [];
      snapshot.forEach((doc) => {
        feedbacks.push({ id: doc.id, ...doc.data() } as FeedbackData);
      });
      setRecentFeedbacks(feedbacks.filter((item) => (item.articleId || 'general') === targetArticleId).slice(0, 20));
      setIsLoadingFeedbacks(false);
    }, (err) => {
      console.error('Error fetching feedbacks:', err);
      setError('Koneksi ke Firebase berhasil dibuka, tapi data feedback belum bisa dibaca. Cek Firestore Rules dan index.');
      setIsLoadingFeedbacks(false);
    });

    return () => unsubscribe();
  }, [targetArticleId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || isSubmitting || !userName.trim()) return;
    
    const submissionData = {
      rating,
      userName: userName.trim(),
      feedback: feedback.trim(),
      articleId: targetArticleId,
      createdAt: serverTimestamp(),
    };

    if (!submissionData.feedback) {
      setError('Pesan feedback tidak boleh kosong.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await addDoc(collection(db, 'feedbacks_v3'), submissionData);
      await waitForPendingWrites(db);
      setRating(0);
      setUserName('');
      setFeedback('');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan yang belum dikenali.';
      setError(`Feedback gagal dikirim ke Firebase: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-900/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Form */}
            <div className="space-y-12">
              <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter uppercase leading-none text-white">
                    Share Your <br/> 
                    <span className="text-zinc-500 italic font-serif lowercase tracking-normal">Feedback</span>
                  </h2>
                <p className="text-zinc-500 font-serif italic text-xl md:text-2xl leading-relaxed max-w-md border-l border-white/10 pl-6">
                  Berikan penilaian dan masukan Anda untuk membantu kami mengembangkan TECHINSIGHT menjadi media teknologi yang lebih baik.
                </p>
              </div>

              <div className="space-y-8">
                <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30 text-white block">
                          Nama Lengkap
                        </label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Masukkan nama Anda..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-medium"
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30 text-white block">
                        Rating Pengalaman
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="focus:outline-none transition-transform active:scale-90"
                          >
                            <Star
                              className={cn(
                                "w-8 h-8 transition-all duration-300",
                                (hoveredRating || rating) >= star 
                                  ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" 
                                  : "text-zinc-700 hover:text-zinc-500"
                              )}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30 text-white block">
                        Pesan Inovasi
                      </label>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Tuliskan pengalaman atau saran Anda..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    {error && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs font-medium bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                      >
                        {error}
                      </motion.p>
                    )}

                    <AnimatePresence>
                      {isSubmitted && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-green-400 text-xs font-medium bg-green-400/10 p-4 rounded-xl border border-green-400/20 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Feedback berhasil dikirim! Terima kasih.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={rating === 0 || isSubmitting || !userName.trim()}
                      className={cn(
                        "w-full py-6 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-[13px] transition-all duration-500 overflow-hidden relative group",
                        (rating === 0 || !userName.trim())
                          ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
                          : "bg-white text-black hover:bg-zinc-200 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                      )}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Mengirim...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Kirim Feedback
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Side: Recent Feedback Display */}
            <div className="space-y-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-zinc-500" />
                  <h3 className="text-xl font-display font-bold text-white tracking-widest uppercase">APA KATA MEREKA?</h3>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  <span className="text-[10px] uppercase font-mono text-zinc-500">Live Feed</span>
                </div>
              </div>

              <div className="space-y-6 relative">
                {isLoadingFeedbacks ? (
                  <div className="space-y-6">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="animate-pulse flex flex-col gap-3">
                        <div className="h-4 bg-white/5 rounded w-1/4" />
                        <div className="h-20 bg-white/5 rounded w-full" />
                      </div>
                    ))}
                  </div>
                ) : recentFeedbacks.length > 0 ? (
                  <div className="relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent ml-2" />
                    
                    <div className="space-y-8 pl-10">
                      {recentFeedbacks.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="relative group"
                        >
                          {/* Bullet Point */}
                          <div className="absolute -left-[44px] top-1 w-4 h-4 rounded-full border-2 border-zinc-800 bg-zinc-950 z-20 group-hover:border-white transition-colors duration-500" />
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-[12px] font-bold text-white uppercase tracking-wider">
                                  {item.userName}
                                </span>
                              </div>
                              <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={cn("w-2.5 h-2.5", i < item.rating ? "text-yellow-500 fill-yellow-500" : "text-zinc-800")} />
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-mono text-zinc-600 uppercase">
                                {item.createdAt?.toDate ? item.createdAt.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Baru saja'}
                              </span>
                            </div>
                            
                            <div className="relative">
                              <Quote className="absolute -left-6 -top-2 w-4 h-4 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <p className="text-zinc-300 font-light leading-relaxed italic text-[15px]">
                                "{item.feedback}"
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20 border border-dashed border-white/5 rounded-[2rem] bg-white/[0.02]">
                    <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">Belum ada pesan masuk.<br/>Jadilah yang pertama!</p>
                  </div>
                )}
              </div>
              
              {recentFeedbacks.length > 0 && (
                <div className="pt-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600 text-center">
                    Menampilkan {recentFeedbacks.length} masukan terbaru
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
