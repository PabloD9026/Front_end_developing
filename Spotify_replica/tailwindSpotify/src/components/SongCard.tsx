// src/components/SongCard.tsx
import React from 'react';
import type { Song } from '../data'; // Use type-only import

interface SongCardProps {
  song: Song;
  onSongClick: (song: Song) => void; // New prop for click handler
}

const SongCard: React.FC<SongCardProps> = ({ song, onSongClick }) => {
  const handlePlayButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the card's onClick from firing
    onSongClick(song); // Trigger playback for this specific song
  };

  return (
    <div
      className="group relative flex h-[250px] w-[180px] flex-shrink-0 cursor-pointer flex-col gap-1.5 rounded-lg bg-[#181818] p-3 transition-colors duration-200 ease-in-out hover:bg-[#282828]"
      onClick={() => onSongClick(song)}
    >
      <div className="relative w-full overflow-hidden rounded aspect-square">
        <img
          src={song.cover}
          alt={song.title}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <button
          className="absolute bottom-2 right-2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#1DB954] opacity-0 shadow-[0_8px_8px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105"
          onClick={handlePlayButtonClick}
          aria-label={`Play ${song.title}`}
        >
          <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-black"
          >
            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
          </svg>
        </button>
      </div>

      {/* Container for Title and Explicit Tag */}
      <div className="flex items-center gap-2">
        <h3 className="min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold text-white">
          {song.title}
        </h3>
        {song.explicit && (
          <span className="flex-shrink-0 rounded-sm bg-[#b3b3b3] px-1 py-0.5 text-[10px] font-bold text-black">
            E
          </span>
        )}
      </div>

      <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-[#b3b3b3]">
        {song.artist}
      </p>
    </div>
  );
};

export default SongCard;