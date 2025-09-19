// src/components/ArtistCard.tsx
import React from 'react';
import type { Artist } from '../data';

interface ArtistCardProps {
  artist: Artist;
  onArtistPlayClick?: (artist: Artist) => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onArtistPlayClick }) => {
  const handlePlayButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (onArtistPlayClick) {
      onArtistPlayClick(artist);
    }
    console.log(`Play button clicked for artist: ${artist.name}`);
  };

  return (
    <div className="group relative flex w-[180px] flex-shrink-0 cursor-pointer flex-col items-center gap-2 rounded-lg bg-[#181818] p-4 transition-colors duration-200 ease-in-out hover:bg-[#282828]">
      <img
        src={artist.image}
        alt={artist.name}
        className="aspect-square w-full rounded-full object-cover"
      />
      <h3 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-base font-bold text-white">
        {artist.name}
      </h3>
      <p className="text-center text-sm text-[#b3b3b3]">Artist</p>
      <button
        className="absolute bottom-6 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#1DB954] text-black opacity-0 shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105"
        onClick={handlePlayButtonClick}
        aria-label={`Play music by ${artist.name}`}
      >
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ArtistCard;