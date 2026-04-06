import React from 'react';
import { PlayCircle, Music, Lock, ArrowRight, Eye, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Vault: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section: Wealth Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase font-bold">The Content Reserve</span>
          </div>
          <h2 className="text-6xl font-headline font-bold text-on-surface tracking-tight leading-none italic">Wealth Vault</h2>
        </div>
        
        {/* Total Earnings Section */}
        <div className="bg-surface-container p-6 rounded-sm border border-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 shimmer opacity-10 pointer-events-none"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-primary/60 text-[10px] uppercase tracking-widest font-bold">Total Value Generated</p>
              <div className="flex items-baseline gap-1">
                <span className="text-primary font-headline text-3xl font-bold">$12,842.50</span>
                <span className="text-emerald-500 text-xs font-bold">+12%</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary/60 text-[10px] uppercase tracking-widest font-bold mb-2">Vault Integrity</p>
              <div className="flex items-center gap-2 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#d4af37]"></span>
                <span className="text-on-surface font-bold text-sm tracking-tighter">SECURED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured: High Value Asset */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative group aspect-video lg:aspect-auto lg:h-[540px] bg-black overflow-hidden rounded-sm border border-primary/20 shadow-[0_0_60px_rgba(212,175,55,0.08)]"
          >
            <img 
              className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0HbZZSVhIvlME0Vvx-11T6hMLQe4X6PmLbycaIJTdzG7Hsc8FTtK2FJFRtnEWUBEAuS2kGifPzDw3GqkeJiusumODp5tn0FiFNA9zEXjtaGtoHhEU1e-Dkvh1Bl3XSnn_ZfjhC5kVvxoUtd7VUQI4lnEsGh6GlI-T-YxoDBpiN3nszI8zEJRPjIe4Yz43LH15b_WA5_k0BYkLPCNCe7-agGma6ZhIqW1YkittYatZi75RhQgAiI5GBPyTPbsJwzefrQb8vlsL1tvj"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <div className="bg-primary/10 backdrop-blur-md border border-primary/30 px-4 py-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-extrabold">Next High-Value Release</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-headline font-medium text-on-surface max-w-md leading-tight">Minimalist Gold Aesthetic <span className="text-primary italic">#042</span></h3>
                  <div className="flex gap-6">
                    <button className="group/icon flex items-center gap-2">
                      <PlayCircle className="text-primary/60 group-hover/icon:text-primary transition-colors" size={20} />
                      <span className="text-[10px] text-primary/40 uppercase tracking-widest font-bold">Youtube</span>
                    </button>
                    <button className="group/icon flex items-center gap-2">
                      <Music className="text-primary/60 group-hover/icon:text-primary transition-colors" size={20} />
                      <span className="text-[10px] text-primary/40 uppercase tracking-widest font-bold">TikTok</span>
                    </button>
                  </div>
                </div>
                {/* Premium Physical Toggle Button */}
                <button className="gold-bar text-on-primary font-bold px-10 py-5 rounded-sm flex items-center gap-4 group/btn">
                  <Lock className="group-hover/btn:rotate-180 transition-transform duration-500" size={20} />
                  <span className="uppercase tracking-[0.25em] text-xs font-black">Authorize Mint</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-surface-container-low border-b border-primary/20">
              <p className="text-primary/40 text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">Queue Velocity</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-headline font-bold text-on-surface">18 Assets</p>
                <span className="text-emerald-500 text-[10px] font-bold">Optimal</span>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low border-b border-primary/20">
              <p className="text-primary/40 text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">Yield Factor</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-headline font-bold text-on-surface">82.4%</p>
                <span className="text-primary text-[10px] font-bold">Prime</span>
              </div>
            </div>
            <div className="p-6 bg-surface-container-low border-b border-primary/20">
              <p className="text-primary/40 text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">Delivery Cap</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-headline font-bold text-on-surface">94%</p>
                <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div className="w-[94%] h-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Scheduled Queue */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest p-8 rounded-sm h-full flex flex-col border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container opacity-30"></div>
            <div className="flex items-center justify-between mb-10">
              <div>
                <h4 className="font-headline text-2xl text-on-surface italic">Scheduled</h4>
                <div className="h-0.5 w-8 bg-primary mt-1"></div>
              </div>
              <span className="bg-primary/10 text-primary text-[9px] px-2 py-0.5 border border-primary/20 uppercase tracking-widest font-black">Upcoming</span>
            </div>
            
            <div className="space-y-10 flex-grow">
              {/* Queue Item 1 */}
              <div className="flex gap-5 group cursor-pointer">
                <div className="w-20 h-20 bg-surface-container border border-primary/10 rounded-sm overflow-hidden flex-shrink-0 relative">
                  <img 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE1UUQgGDVcZjU0av64_deaZaScC1HH2Eq1wZHIE3jcw6G34IS9jDUgHiLsK4xEW84u_vBMJgGsFw31j1Ve1Z0tyPCgpRP-oEupUayJj9Ax3--9zoaRLjMTBf6eR1IUpy7uejhncS9Npd0H9j1SekYMeFghdBApKe1B4LO5h1o4Y_vwzzRCmz4JxJiMDXmfAJCjvw9oFfuBjsTa_FDX_yLvL0ST1Xn8iB6bXmmAYZjF--xdbXn3q9nMBw0DK2jv7OwTy-k66tgsj9R"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="text-on-primary" size={20} />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[9px] text-primary uppercase tracking-[0.2em] mb-1.5 font-black">Tomorrow 09:00</p>
                  <p className="text-base font-headline font-medium text-on-surface group-hover:text-primary transition-colors">Urban Motion Study</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <div className="w-1 h-1 rounded-full bg-primary/30"></div>
                    <div className="w-1 h-1 rounded-full bg-primary/30"></div>
                  </div>
                </div>
              </div>

              {/* Queue Item 2 */}
              <div className="flex gap-5 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-surface-container border border-white/5 rounded-sm overflow-hidden flex-shrink-0">
                  <img 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZdB-gdNuYery9jzad5xX9SzKmUTtbBP84lftK3xb_UjaPSU5whWAstVrwJdMf2pvn0kumPY29Ag1DEKui-zotBUkf4zkX6edAZlpYRYKdi57zXBH_36uRIy4CIll9QQGQRq9RFHATev1Vwyto0nfpnnDrncynPwnAIqj-GwDVDZ-2DyQjF3bqo8-J1gCnCq6y16qUjYqDU1os1KXicBR6po5G7USi4c7koGKQuYRGWdiuo65ltx8i1ATeQ27Gs9uOV__61GOndEoV"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-1.5 font-black">Oct 24 14:30</p>
                  <p className="text-base font-headline font-medium text-on-surface">Chromatic Flow II</p>
                </div>
              </div>

              {/* Queue Item 3 */}
              <div className="flex gap-5 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-surface-container border border-white/5 rounded-sm overflow-hidden flex-shrink-0">
                  <img 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqqbCxg-h-Px35w25q0U1jzr1gRUnl9YLx9sTLBzwD5qyOgkRI8dsH1IKpgKgTDGwzE7OSQGdGVij_xhMWuSlUkjbc3RNJeUSCRsRDxWhTgF24zL7BAYwiZyn33Fdo9Y655ZMt8MQthSTgdfFJ1aklHR6lrU0H5FEtYh6evceeJAGaenAS-zYAGnezuY9-pKSzh9KZGTG1x_HiWWX7iYJC0LLMpLEQSpIC2FxdVMSXO0u7wRdCIoAOr1c8OYnngJoKNbBKlb2ISL5P"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-1.5 font-black">Oct 25 11:00</p>
                  <p className="text-base font-headline font-medium text-on-surface">Obsidian Texture Reel</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <button className="w-full group/archive bg-surface-container border border-primary/20 text-primary text-[10px] uppercase tracking-[0.3em] py-5 hover:bg-primary hover:text-on-primary transition-all duration-300 font-black flex items-center justify-center gap-3">
                <span>The Archive</span>
                <ArrowRight className="group-hover/archive:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-6 md:bottom-12 md:right-12 gold-bar p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all active:scale-95 z-40 group overflow-hidden">
        <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>
        <Plus className="text-on-primary relative z-10" size={32} />
        <span className="absolute right-full mr-4 bg-primary px-4 py-2 rounded-sm text-[10px] uppercase tracking-[0.3em] text-on-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-black">
          New Deposit
        </span>
      </button>
    </div>
  );
};
