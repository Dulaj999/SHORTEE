import React from 'react';
import { PlayCircle, Instagram, Music, Facebook, ShieldCheck, Banknote, CreditCard, RefreshCw, Settings, Video, Activity, CheckCircle2, MoreVertical, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Automation: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Header Section: Editorial Authority */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.2em] mb-4 block">Vault Connectivity</span>
            <h2 className="text-5xl md:text-6xl font-headline font-bold text-on-surface leading-tight mb-6">Linked <br/>Ecosystem</h2>
            <p className="text-secondary font-light text-lg leading-relaxed border-l-2 border-outline-variant pl-6">
              Synchronize your digital presence across the most influential platforms. Our encrypted handshake ensures your media assets remain sovereign and secure.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-4xl font-headline text-primary mb-1">05</div>
            <div className="text-[10px] uppercase tracking-widest text-secondary/40">Active Nodes</div>
          </div>
        </div>
      </section>

      {/* Connectivity Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* YouTube Account */}
        <div className="md:col-span-8 bg-surface-container-low p-8 rounded-sm group hover:bg-surface-container transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <PlayCircle size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-sm">
                  <Video className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold">YouTube Studio</h3>
                  <p className="text-xs text-secondary/60 uppercase tracking-tighter">Primary Content Stream</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-primary/20 rounded-full relative p-1 border border-primary/30">
                <div className="w-4 h-4 bg-primary rounded-full absolute right-1"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
              <div>
                <div className="text-[10px] text-primary uppercase tracking-widest mb-1">Status</div>
                <div className="text-on-surface font-light flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Live
                </div>
              </div>
              <div>
                <div className="text-[10px] text-primary uppercase tracking-widest mb-1">Sync</div>
                <div className="text-on-surface font-light">Real-time</div>
              </div>
              <div>
                <div className="text-[10px] text-primary uppercase tracking-widest mb-1">Assets</div>
                <div className="text-on-surface font-light">1,240</div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="md:col-span-4 bg-surface-container-low p-8 rounded-sm group hover:bg-surface-container transition-all duration-500 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
                <Instagram className="text-secondary" size={20} />
              </div>
              <div className="w-10 h-5 bg-primary/20 rounded-full relative p-1 border border-primary/30">
                <div className="w-3 h-3 bg-primary rounded-full absolute right-1"></div>
              </div>
            </div>
            <h3 className="text-lg font-headline font-bold mb-2">Instagram</h3>
            <p className="text-sm text-secondary leading-snug">Visual aesthetic and reel synchronization active.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant/10">
            <div className="flex items-center justify-between">
              <span className="text-xs text-secondary/40 uppercase tracking-widest">Last Handshake</span>
              <span className="text-xs font-mono text-primary">2m ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Progress Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-outline-variant/10">
        <div className="md:col-span-2 relative p-8 rounded-sm bg-surface-container-low overflow-hidden border-l-2 border-primary/20">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'linear-gradient(45deg, #f2ca50 0%, transparent 100%)' }}></div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2 block">Monthly Campaign</span>
              <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-6">Month 1 Content Flow</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm text-secondary/60 italic">Campaign Progress</span>
                <span className="font-headline text-2xl font-bold text-primary">68%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[68%] transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between text-[10px] text-secondary/40 tracking-wider">
                <span>DAY 01</span>
                <span>DAY 30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Card */}
        <div className="p-8 rounded-sm bg-surface-container-high border border-outline-variant/10 flex flex-col justify-center items-center text-center space-y-4">
          <RefreshCw className="text-primary animate-spin-slow" size={32} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/60">Next Automated Post</span>
          <div className="font-headline text-5xl font-black text-on-surface tracking-widest">
            04:12<span className="text-lg font-body text-primary/60 ml-2">min</span>
          </div>
          <div className="flex gap-2">
            <span className="p-1 px-3 bg-surface-container-lowest text-[10px] text-primary border border-primary/20">4 PLATFORMS</span>
          </div>
        </div>
      </section>

      {/* Daily Schedule List */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <h3 className="font-headline text-2xl font-bold border-l-2 border-primary pl-4">Daily Schedule</h3>
          <span className="text-[10px] text-secondary/40 uppercase tracking-tighter">Sorted by latest first</span>
        </div>
        
        <div className="space-y-4">
          {/* Row 1: Processing */}
          <div className="group relative flex flex-wrap md:flex-nowrap items-center gap-6 p-6 bg-surface-container-low transition-all duration-300 hover:bg-surface-container">
            <div className="flex flex-col min-w-[80px]">
              <span className="font-headline text-lg font-bold">14</span>
              <span className="text-[10px] text-secondary/40">OCT</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-headline text-lg text-on-surface mb-1">Golden Hour Efficiency</h4>
              <div className="flex gap-4 items-center">
                <span className="text-xs text-secondary/60">08:00 AM EST</span>
                <div className="flex gap-2 text-primary/40">
                  <PlayCircle size={14} />
                  <Music size={14} />
                  <Instagram size={14} />
                  <Facebook size={14} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] text-primary uppercase tracking-widest">Processing</span>
              </div>
              <MoreVertical className="text-secondary/20" size={20} />
            </div>
          </div>

          {/* Row 2: Scheduled */}
          <div className="group relative flex flex-wrap md:flex-nowrap items-center gap-6 p-6 bg-surface-container-low transition-all duration-300 hover:bg-surface-container">
            <div className="flex flex-col min-w-[80px]">
              <span className="font-headline text-lg font-bold text-secondary/40">15</span>
              <span className="text-[10px] text-secondary/40">OCT</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-headline text-lg text-on-surface mb-1">Aurelian Workflow v2</h4>
              <div className="flex gap-4 items-center">
                <span className="text-xs text-secondary/60">08:00 AM EST</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 border border-outline-variant/30 rounded-full">
                <span className="text-[10px] text-secondary/60 uppercase tracking-widest">Scheduled</span>
              </div>
              <MoreVertical className="text-secondary/20" size={20} />
            </div>
          </div>

          {/* Row 3: Uploaded */}
          <div className="group relative flex flex-wrap md:flex-nowrap items-center gap-6 p-6 bg-surface-container-low transition-all duration-300 hover:bg-surface-container opacity-60">
            <div className="flex flex-col min-w-[80px]">
              <span className="font-headline text-lg font-bold text-secondary/40">13</span>
              <span className="text-[10px] text-secondary/40">OCT</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-headline text-lg text-on-surface mb-1">The Midnight Engine</h4>
              <div className="flex gap-4 items-center">
                <span className="text-xs text-secondary/60">08:00 AM EST</span>
                <div className="flex gap-2 text-primary/80">
                  <CheckCircle2 size={14} fill="currentColor" />
                  <span className="text-[9px] uppercase tracking-tighter">All Done</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-outline-variant/10 rounded-full">
                <span className="text-[10px] text-secondary/40 uppercase tracking-widest">Uploaded</span>
              </div>
              <Eye className="text-secondary/20" size={20} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
