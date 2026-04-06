import React from 'react';
import { Award, ChevronRight, Settings, Bell, Shield, LogOut, Cloud } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Profile: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-12">
      {/* Profile Header Section */}
      <section className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary to-primary-container">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
              <img 
                alt="Member Portrait" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-WQhBqtEkq_RuvGXRv2i-ZG0pHJtTI9JMh6FmLIKqjqaZpg42qXT10deY-YDFGGWkYMdqxNgP8JDQmzFVQJb8IMf6Pig6KfMUoSoXIKZZArJhV0dLfVdRJD1Ai-Wma1JVvRv9utmjJn-AEQz7yubqUWi4FePN_j1NHvdITvCmHDCu9ZxrGF3H9WjImw527Eb0PjOQIUYg3r0w9_xU59hHYk9lmOb9pTQH6I6dteDSUsmpNJbgWZ042gNM0_s0mM3ow_mJFFg2Qo4F"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-tighter">
            Elite
          </div>
        </div>
        <h2 className="font-headline text-3xl text-on-surface mb-1">Julian Vance</h2>
        <p className="font-label text-primary text-sm uppercase tracking-[0.2em] mb-8">Platinum Member</p>

        {/* Executive Tier Card */}
        <div className="w-full bg-surface-container-low p-6 rounded-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
          <div className="relative z-10 flex justify-between items-end">
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Tier Status</p>
              <p className="font-headline text-xl italic text-primary">Executive Tier</p>
            </div>
            <div className="text-right">
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Annual Spend</p>
              <p className="font-body font-light text-2xl text-on-surface">$14,250.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Settings List */}
      <section className="space-y-8">
        <div>
          <h3 className="text-on-surface-variant text-[10px] uppercase tracking-[0.3em] mb-6 pl-1">Membership & Billing</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-5 bg-surface-container-high rounded-sm hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <Award className="text-primary" size={20} />
                <span className="font-body text-sm tracking-wide">Change Package</span>
              </div>
              <ChevronRight className="text-primary/40 group-hover:text-primary transition-colors" size={20} />
            </button>
            <button className="w-full flex items-center justify-between p-5 bg-surface-container-high rounded-sm hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <Cloud className="text-primary" size={20} />
                <span className="font-body text-sm tracking-wide">Connected Accounts</span>
              </div>
              <ChevronRight className="text-primary/40 group-hover:text-primary transition-colors" size={20} />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-on-surface-variant text-[10px] uppercase tracking-[0.3em] mb-6 pl-1">Account Controls</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-5 bg-surface-container-high rounded-sm hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <Settings className="text-primary" size={20} />
                <span className="font-body text-sm tracking-wide">Account Settings</span>
              </div>
              <ChevronRight className="text-primary/40 group-hover:text-primary transition-colors" size={20} />
            </button>
            <button className="w-full flex items-center justify-between p-5 bg-surface-container-high rounded-sm hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <Bell className="text-primary" size={20} />
                <div className="text-left">
                  <span className="block font-body text-sm tracking-wide">Notification Timing</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Quiet Hours: 22:00 - 08:00</span>
                </div>
              </div>
              <ChevronRight className="text-primary/40 group-hover:text-primary transition-colors" size={20} />
            </button>
            <button className="w-full flex items-center justify-between p-5 bg-surface-container-high rounded-sm hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <Shield className="text-primary" size={20} />
                <span className="font-body text-sm tracking-wide">Security & Privacy</span>
              </div>
              <ChevronRight className="text-primary/40 group-hover:text-primary transition-colors" size={20} />
            </button>
          </div>
        </div>

        <div className="pt-8">
          <button className="w-full py-4 text-red-400 text-[10px] uppercase tracking-[0.4em] font-bold border border-red-400/10 hover:bg-red-400/5 transition-colors flex items-center justify-center gap-2">
            <LogOut size={14} /> Terminate Session
          </button>
        </div>
      </section>
    </div>
  );
};
