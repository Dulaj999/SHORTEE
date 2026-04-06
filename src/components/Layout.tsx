import React from 'react';
import { Menu, User, PlayCircle, Share2, CreditCard, User as UserIcon, Settings, Terminal, Activity, LayoutDashboard, Network as NetworkIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Tab } from '@/src/types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-2xl flex items-center justify-between px-6 h-20 border-b border-primary/10">
        <div className="flex items-center gap-4">
          <Menu className="text-primary cursor-pointer hover:scale-110 transition-transform" size={24} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-headline tracking-[0.4em] uppercase text-2xl font-bold text-primary">SHORTEE</h1>
          <span className="text-[8px] tracking-[0.5em] text-primary/60 uppercase -mt-1">Executive Suite</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-primary/30 p-0.5 flex items-center justify-center overflow-hidden">
            <img 
              alt="User Profile" 
              className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4_QXevVm7AvVy_G6MsR-23gkfvEA3xVHevwBZ9Vyq8rWsiZmbSY9BSORMlJ0FJ2LLDdW89R8rSO--5ixuPBwca25LbcG0y1AHqqhQUqHGzPFzoOc_1wz6p7ulfO8wQCOIMk-WHEAriz13SChK2Yn1CKtVnPevJjE-kDQx-3e_apWfHFyhVMtxdSdj6LgiXV3BjQggH1pY21v34jmZ1vrSergJXeInW2nshK_q1kNIU-09D6S7Gnkdj4nF66rBiJuvve9gBars9BWk"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="pt-28 pb-32 px-6 max-w-7xl mx-auto">
        {children}
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 w-full z-50 bg-background/95 backdrop-blur-xl border-t border-primary/10 flex justify-around items-center h-24 pb-safe">
        <button 
          onClick={() => setActiveTab('vault')}
          className={cn(
            "flex flex-col items-center justify-center transition-all",
            activeTab === 'vault' ? "text-primary scale-110" : "text-primary/30 hover:text-primary"
          )}
        >
          <LayoutDashboard size={24} fill={activeTab === 'vault' ? "currentColor" : "none"} />
          <span className="text-[9px] uppercase tracking-[0.2em] mt-1.5 font-black">Vault</span>
        </button>
        <button 
          onClick={() => setActiveTab('automation')}
          className={cn(
            "flex flex-col items-center justify-center transition-all",
            activeTab === 'automation' ? "text-primary scale-110" : "text-primary/30 hover:text-primary"
          )}
        >
          <Activity size={24} fill={activeTab === 'automation' ? "currentColor" : "none"} />
          <span className="text-[9px] uppercase tracking-[0.2em] mt-1.5 font-black">Auto</span>
        </button>
        <button 
          onClick={() => setActiveTab('network')}
          className={cn(
            "flex flex-col items-center justify-center transition-all",
            activeTab === 'network' ? "text-primary scale-110" : "text-primary/30 hover:text-primary"
          )}
        >
          <Terminal size={24} fill={activeTab === 'network' ? "currentColor" : "none"} />
          <span className="text-[9px] uppercase tracking-[0.2em] mt-1.5 font-black">Network</span>
        </button>
        <button 
          onClick={() => setActiveTab('ledger')}
          className={cn(
            "flex flex-col items-center justify-center transition-all",
            activeTab === 'ledger' ? "text-primary scale-110" : "text-primary/30 hover:text-primary"
          )}
        >
          <CreditCard size={24} fill={activeTab === 'ledger' ? "currentColor" : "none"} />
          <span className="text-[9px] uppercase tracking-[0.2em] mt-1.5 font-black">Ledger</span>
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={cn(
            "flex flex-col items-center justify-center transition-all",
            activeTab === 'profile' ? "text-primary scale-110" : "text-primary/30 hover:text-primary"
          )}
        >
          <UserIcon size={24} fill={activeTab === 'profile' ? "currentColor" : "none"} />
          <span className="text-[9px] uppercase tracking-[0.2em] mt-1.5 font-black">Profile</span>
        </button>
      </nav>
    </div>
  );
};
