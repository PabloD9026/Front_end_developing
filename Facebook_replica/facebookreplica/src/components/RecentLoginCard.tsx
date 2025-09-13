import React from 'react';

interface RecentLoginCardProps {
  name: string;
  profilePicSrc: string;
}

const RecentLoginCard: React.FC<RecentLoginCardProps> = ({ name, profilePicSrc }) => {
  return (
    <div className="recent-login-card">
      <div className="remove-account-icon">
        <span className="sr-only">Remove account</span>
      </div>
      <img src={profilePicSrc} alt={`${name}'s profile`} className="profile-pic" />
      <span className="user-name">{name}</span>
    </div>
  );
};

export default RecentLoginCard;