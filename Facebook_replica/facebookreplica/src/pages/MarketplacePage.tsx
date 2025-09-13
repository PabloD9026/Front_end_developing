import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar.tsx';
import MarketplaceHeader from '../components/MarketplaceHeader.tsx';
import MarketplaceContent from '../components/MarketplaceContent.tsx';

const MarketplacePage: React.FC = () => {
  return (
    <div className="marketplace-layout">
      <TopNavigationBar />
      <div className="marketplace-main-area">
        <MarketplaceHeader />
        <MarketplaceContent />
      </div>
    </div>
  );
};

export default MarketplacePage;