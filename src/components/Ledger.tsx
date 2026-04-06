import React from 'react';
import { Fingerprint, Lock, ShieldCheck, Download, PlayCircle, CreditCard, Award, Share2, History } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Ledger: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Breadcrumb / Label */}
      <div>
        <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-label font-bold">Financial Portfolio</span>
        <h2 className="font-headline text-4xl md:text-5xl mt-2 text-on-surface">Payouts & Ledger</h2>
      </div>

      {/* Wealth Tracker: Balance Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 relative overflow-hidden bg-surface-container-low p-8 rounded-sm border-l-2 border-primary shadow-2xl">
          {/* Background Mesh Aesthetic */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, #f2ca50, transparent)' }}></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-secondary/60 text-xs uppercase tracking-widest font-label mb-1">Settled Balance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-primary font-headline text-5xl md:text-6xl">$42,850</span>
                <span className="text-secondary text-sm font-light">.00 USD</span>
              </div>
            </div>
            
            <p className="mt-3 text-[10px] text-primary/60 uppercase tracking-[0.2em] flex items-center gap-2 font-label">
              <Fingerprint size={14} /> Withdrawals require biometric or security authorization
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-extrabold text-sm px-8 py-4 rounded-sm uppercase tracking-widest shadow-lg shadow-primary/10 transition-transform active:scale-95 duration-300 flex items-center gap-2">
                <Lock size={14} /> Authorize Bank Withdrawal
              </button>
              <button className="bg-surface-container-highest border border-primary/20 text-primary font-extrabold text-sm px-8 py-4 rounded-sm uppercase tracking-widest shadow-lg transition-transform active:scale-95 duration-300 flex items-center gap-2">
                <Lock size={14} /> Authorize Binance Withdrawal
              </button>
              <button className="bg-transparent border border-outline/20 text-on-surface font-semibold text-sm px-8 py-4 rounded-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors">
                Manage Accounts
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-secondary/40 text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} />
              Linked Binance ID: <span className="text-primary/60 font-bold">150293033</span>
            </div>
          </div>
        </div>

        {/* Side Metrics */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="bg-surface-container p-6 rounded-sm border-l-2 border-secondary/20">
            <p className="text-secondary/60 text-[10px] uppercase tracking-widest mb-2">Projected Monthly</p>
            <p className="text-on-surface font-headline text-2xl">+$12,400</p>
            <div className="w-full bg-surface-container-high h-1 mt-4">
              <div className="bg-primary h-full w-3/4"></div>
            </div>
          </div>
          <div className="bg-surface-container p-6 rounded-sm border-l-2 border-secondary/20">
            <p className="text-secondary/60 text-[10px] uppercase tracking-widest mb-2">Pending Clearance</p>
            <p className="text-on-surface font-headline text-2xl">$3,120</p>
            <p className="text-secondary/40 text-[10px] mt-2 italic">Expected within 48 hours</p>
          </div>
        </div>
      </div>

      {/* Security & Permissions */}
      <div className="bg-surface-container-low border border-primary/10 p-6 rounded-sm flex items-center justify-between">
        <div>
          <h4 className="text-on-surface font-headline text-lg uppercase tracking-widest">Security & Permissions</h4>
          <p className="text-secondary/40 text-[10px] uppercase tracking-widest mt-1">Account Security for ID: <span className="text-primary/60">150293033</span></p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Withdrawal Lock: ON</span>
          <div className="w-12 h-6 bg-primary/20 rounded-full relative flex items-center px-1 border border-primary/30">
            <div className="w-4 h-4 bg-primary rounded-full absolute right-1"></div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-on-surface font-headline text-2xl">Transaction History</h3>
          <button className="text-primary text-[10px] font-bold uppercase tracking-widest border-b border-primary/30 pb-1 flex items-center gap-2">
            Export Ledger <Download size={12} />
          </button>
        </div>

        <div className="space-y-4">
          {/* Transaction Item 1 */}
          <motion.div 
            whileHover={{ x: 4 }}
            className="group flex items-center justify-between p-5 bg-surface-container hover:bg-surface-container-high transition-all duration-300 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-sm">
                <PlayCircle className="text-primary" size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-on-surface font-semibold tracking-wide">Video Series Royalties</p>
                <p className="text-secondary/60 text-xs font-light">August Content Batch • Ref: #8829</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary font-bold text-lg">+$8,240.00</p>
              <p className="text-secondary/40 text-[10px] uppercase">Aug 24, 2023</p>
            </div>
          </motion.div>

          {/* Transaction Item 2 */}
          <motion.div 
            whileHover={{ x: 4 }}
            className="group flex items-center justify-between p-5 bg-surface-container hover:bg-surface-container-high transition-all duration-300 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-sm">
                <CreditCard className="text-secondary/40" size={24} />
              </div>
              <div>
                <p className="text-on-surface font-semibold tracking-wide">Withdrawal to Chase Bank</p>
                <p className="text-secondary/60 text-xs font-light">Transfer ID: TXN_900212</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-on-surface font-bold text-lg">-$15,000.00</p>
              <p className="text-secondary/40 text-[10px] uppercase">Aug 20, 2023</p>
            </div>
          </motion.div>

          {/* Transaction Item 3 */}
          <motion.div 
            whileHover={{ x: 4 }}
            className="group flex items-center justify-between p-5 bg-surface-container hover:bg-surface-container-high transition-all duration-300 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-sm">
                <Award className="text-primary" size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-on-surface font-semibold tracking-wide">Platinum Tier Bonus</p>
                <p className="text-secondary/60 text-xs font-light">Loyalty Program Reward</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary font-bold text-lg">+$2,500.00</p>
              <p className="text-secondary/40 text-[10px] uppercase">Aug 15, 2023</p>
            </div>
          </motion.div>

          {/* Transaction Item 4 */}
          <motion.div 
            whileHover={{ x: 4 }}
            className="group flex items-center justify-between p-5 bg-surface-container hover:bg-surface-container-high transition-all duration-300 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded-sm">
                <Share2 className="text-primary" size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-on-surface font-semibold tracking-wide">Affiliate Commissions</p>
                <p className="text-secondary/60 text-xs font-light">Referral Network Yield</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary font-bold text-lg">+$1,120.50</p>
              <p className="text-secondary/40 text-[10px] uppercase">Aug 10, 2023</p>
            </div>
          </motion.div>
        </div>

        {/* View More Tertiary Button */}
        <div className="mt-8 flex justify-center">
          <button className="relative py-2 text-on-surface text-sm uppercase tracking-widest font-bold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[2px] after:bg-primary flex items-center gap-2">
            <History size={14} /> Load Older Records
          </button>
        </div>
      </section>
    </div>
  );
};
