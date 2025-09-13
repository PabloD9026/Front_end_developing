import React from 'react';

const MarketplaceHeader: React.FC = () => {
  return (
    <div className="marketplace-header">
      <div className="marketplace-header-top">
        <div className="marketplace-user-profile">
          {/* User profile pic / icon */}
          👤
        </div>
        <div className="marketplace-buttons">
          <button className="marketplace-btn primary">Vender</button>
          <button className="marketplace-btn">Todas las categorías</button>
        </div>
      </div>
      <div className="marketplace-search-bar">
        <input type="text" placeholder="Buscar en Marketplace" />
      </div>
    </div>
  );
};

export default MarketplaceHeader;