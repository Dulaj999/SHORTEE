import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Vault } from './components/Vault';
import { Automation } from './components/Automation';
import { Ledger } from './components/Ledger';
import { Profile } from './components/Profile';
import { Network } from './components/Network';
import { Tab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('vault');

  const renderContent = () => {
    switch (activeTab) {
      case 'vault':
        return <Vault />;
      case 'automation':
        return <Automation />;
      case 'ledger':
        return <Ledger />;
      case 'profile':
        return <Profile />;
      case 'network':
        return <Network />;
      default:
        return <Vault />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
