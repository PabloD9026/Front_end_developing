// src/components/MainContent.tsx
import React from 'react';
import SongCard from './SongCard';
import ArtistCard from './ArtistCard';
import { trendingSongs, popularArtists, popularAlbumsAndSingles, type Song } from '../data';

interface MainContentProps {
  onSongSelect: (song: Song) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onSongSelect }) => {
  // Add the `scrollbar-hide` class to hide the scrollbar
  const gridClasses = "flex flex-nowrap gap-6 overflow-x-auto pb-2.5 scrollbar-hide";

  return (
    <div className="flex-grow overflow-y-auto bg-[#121212] p-8">
      <section className="mb-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Trending songs</h2>
          <a href="/trending" className="text-sm font-bold uppercase tracking-wider text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
            Show all
          </a>
        </div>
        <div className={gridClasses}>
          {trendingSongs.map((song) => (
            <SongCard key={song.id} song={song} onSongClick={onSongSelect} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Popular artists</h2>
          <a href="/artists" className="text-sm font-bold uppercase tracking-wider text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
            Show all
          </a>
        </div>
        <div className={gridClasses}>
          {popularArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Popular albums and singles</h2>
          <a href="/albums" className="text-sm font-bold uppercase tracking-wider text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
            Show all
          </a>
        </div>
        <div className={gridClasses}>
          {/* Changed SongCard to ArtistCard and adapted the props */}
          {popularAlbumsAndSingles.map((album) => (
            <ArtistCard
              key={album.id}
              artist={{
                id: album.id,
                name: album.title,
                image: album.cover,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;