export type Tab = 'vault' | 'automation' | 'ledger' | 'profile' | 'network';

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  type: 'credit' | 'debit';
  icon: string;
}

export interface ScheduledItem {
  id: string;
  title: string;
  time: string;
  image: string;
  status: 'processing' | 'scheduled' | 'uploaded';
}
