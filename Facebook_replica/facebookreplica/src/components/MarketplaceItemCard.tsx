import React from 'react';

interface MarketplaceItem {
  id: string;
  image: string;
  status?: string; // e.g., 'GRATIS'
  price?: string; // e.g., 'Bs.160'
  title: string;
  location: string;
}

interface MarketplaceItemCardProps {
  item: MarketplaceItem;
}

const MarketplaceItemCard: React.FC<MarketplaceItemCardProps> = ({ item }) => {
  return (
    <div className="marketplace-item-card">
      <img src={item.image} alt={item.title} className="item-image" />
      <div className="item-info">
        {item.status && <p className="item-status">{item.status}</p>}
        {item.price && <p className="item-price">{item.price}</p>}
        <p className="item-title">{item.title}</p>
        <p className="item-location">{item.location}</p>
      </div>
    </div>
  );
};

export default MarketplaceItemCard;