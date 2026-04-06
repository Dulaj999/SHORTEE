import React from 'react';
import { Network as NetworkIcon, Zap, Shield, Lock, Fingerprint, Terminal, Cpu, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Network: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section: Bot Workforce Overview */}
      <section className="relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <span className="font-label text-primary tracking-[0.2em] uppercase text-xs">Command Center Status</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-surface">System Sovereign</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8 bg-surface-container-low p-6 rounded-sm border-l-2 border-primary">
            <div>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase">Bot Workforce</p>
              <p className="text-3xl font-light">50 <span className="text-sm opacity-50">Active</span></p>
            </div>
            <div>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase">Efficiency</p>
              <p className="text-3xl font-light">100% <span className="text-sm opacity-50">Optimal</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid for Advanced Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Task Progress Gauges */}
        <div className="md:col-span-8 bg-surface-container-low p-8 rounded-sm relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            {/* Circular Gauge */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="4"></circle>
                <circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="110.58" strokeWidth="4"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-primary font-label text-[10px] tracking-widest uppercase">Cycle Day</span>
                <span className="text-4xl font-bold">12/30</span>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="font-headline text-2xl text-on-surface">Video Distribution</h3>
                <p className="text-neutral-400 mt-2 text-sm max-w-xs">Automated high-frequency processing across global short-form nodes.</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="font-label text-xs uppercase tracking-wider text-primary">200 Videos Processed</span>
                  <span className="text-xs text-neutral-500 italic">Quota: 500/Mo</span>
                </div>
                <div className="w-full h-[2px] bg-surface-container-highest">
                  <div className="w-[40%] h-full bg-primary shadow-[0_0_10px_#f2ca50]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bot Deployment Controls */}
        <div className="md:col-span-4 bg-surface-container p-8 rounded-sm border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <h3 className="font-label text-primary text-[10px] tracking-[0.2em] uppercase mb-8">Manual Overrides</h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Bot Velocity</label>
                  <span className="text-primary text-xs font-bold">8.4x</span>
                </div>
                <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Task Priority</label>
                  <div className="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer p-1">
                    <div className="w-3 h-3 bg-primary rounded-full absolute right-1"></div>
                  </div>
                </div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Aggressive Deployment Enabled</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 gold-bar text-on-primary py-4 font-bold text-xs tracking-widest uppercase transition-transform active:scale-[0.98]">
            Sync Workforce
          </button>
        </div>
      </div>

      {/* Live Operations & Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="font-headline text-xl font-bold flex items-center gap-3">
            <span className="w-8 h-[1px] bg-primary"></span>
            LIVE OPERATIONS
          </h2>
          <div className="space-y-3">
            <div className="bg-surface-container-low p-4 flex items-center justify-between border-l-2 border-primary/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high overflow-hidden rounded-sm">
                  <img className="w-full h-full object-cover grayscale" src="https://picsum.photos/seed/tech/100/100" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wide">TikTok Upload: Bot #12</p>
                  <p className="text-[10px] text-secondary/40 uppercase tracking-widest">Target: @Sovereign_Lifestyle</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-primary text-[10px] font-bold block mb-1">UPLOADING</span>
                <div className="w-16 h-1 bg-surface-container-high">
                  <div className="bg-primary h-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-headline text-xl font-bold flex items-center gap-3">
            <span className="w-8 h-[1px] bg-primary"></span>
            REAL-TIME LOGS
          </h2>
          <div className="bg-black/40 backdrop-blur-sm border border-outline-variant/10 h-72 overflow-y-auto p-4 font-mono text-[11px] space-y-2 no-scrollbar">
            <div className="flex gap-3 text-secondary/30">
              <span>[09:24:15]</span>
              <span className="text-secondary/60">Bot #24: Video Upload Success. SHA-256 Verified.</span>
            </div>
            <div className="flex gap-3 text-secondary/30">
              <span>[09:24:12]</span>
              <span className="text-primary/60">Bot #09: Engaging viral algorithm via comment injection.</span>
            </div>
            <div className="flex gap-3 text-secondary/30">
              <span>[09:23:58]</span>
              <span className="text-secondary/60">Bot #18: Mass invite sequence completed (450 targets).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
