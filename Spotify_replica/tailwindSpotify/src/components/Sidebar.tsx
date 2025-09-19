// src/components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-full w-[250px] flex-shrink-0 flex-col gap-2 bg-black p-5 px-1">
      <div className="mb-5 pl-3">
        {/* Spotify Logo SVG */}
        <svg
          width="130"
          height="40"
          viewBox="0 0 167 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-[130px] fill-[#1DB954]"
        >
          <path d="M83.5 0C37.3 0 0 3.58 0 8C0 12.42 37.3 16 83.5 16C129.7 16 167 12.42 167 8C167 3.58 129.7 0 83.5 0ZM83.5 24C37.3 24 0 27.58 0 32C0 36.42 37.3 40 83.5 40C129.7 40 167 36.42 167 32C167 27.58 129.7 24 83.5 24Z" />
          <path d="M83.5 12C40.7 12 5.5 15.58 5.5 20C5.5 24.42 40.7 28 83.5 28C126.3 28 161.5 24.42 161.5 20C161.5 15.58 126.3 12 83.5 12Z" />
        </svg>
      </div>

      <nav>
        <ul className="m-0 list-none p-0">
          <li className="mb-2">
            <a
              href="/"
              className="flex items-center gap-4 rounded py-2 px-3 text-base font-bold text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white"
            >
              {/* Home Icon SVG */}
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path d="M12 3.832a.75.75 0 0 0-1.06 0L3.195 9.772a.75.75 0 0 0 .996 1.128l.073-.065 7.236-6.418 7.236 6.418.073.065a.75.75 0 0 0 .996-1.128L12 3.832Z"></path>
                <path d="M11.25 4.832a.75.75 0 0 1 1.5 0v.668H19.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h6.75V4.832Z"></path>
                <path d="M12 6.25a.75.75 0 0 0-.75.75v5.25H6.75a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 .75-.75v-6.75a.75.75 0 0 0-.75-.75H12.75V7a.75.75 0 0 0-.75-.75Z"></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a
              href="/search"
              className="flex items-center gap-4 rounded py-2 px-3 text-base font-bold text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white"
            >
              {/* Search Icon SVG */}
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path
                  d="M10.5 1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1.5 10.5a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM16.5 16.5l4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                ></path>
              </svg>
              Search
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-grow flex-col gap-4 rounded-lg bg-[#121212] py-2">
        <div className="flex items-center justify-between px-3">
          <button className="flex cursor-pointer items-center gap-4 border-none bg-transparent py-2 text-base font-bold text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white">
            {/* Library Icon SVG */}
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1ZM15.5 2.134A1 1 0 0 0 14 3.002v18a1 1 0 0 0 2 0V3.002a1 1 0 0 0-.5-1.868ZM7 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1Z"></path>
            </svg>
            Your Library
          </button>
          <button className="cursor-pointer rounded-full border-none bg-transparent p-2 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:bg-[#282828] hover:text-white">
            {/* Plus Icon SVG */}
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M12 2.75a.75.75 0 0 0-1.5 0v8.5H2.75a.75.75 0 0 0 0 1.5h8.5v8.5a.75.75 0 0 0 1.5 0v-8.5h8.5a.75.75 0 0 0 0-1.5h-8.5v-8.5Z"></path>
            </svg>
          </button>
        </div>

        <div className="mx-3 flex flex-col gap-3 rounded-lg bg-[#242424] p-4">
          <h3 className="m-0 text-base font-bold">Create your first playlist</h3>
          <p className="m-0 text-sm text-[#b3b3b3]">It's easy, we'll help you</p>
          <button className="self-start rounded-full border-none bg-white py-2 px-4 text-sm font-bold text-black transition-transform duration-200 ease-in-out hover:scale-105">
            Create playlist
          </button>
        </div>

        <div className="mx-3 flex flex-col gap-3 rounded-lg bg-[#242424] p-4">
          <h3 className="m-0 text-base font-bold">Let's find some podcasts to follow</h3>
          <p className="m-0 text-sm text-[#b3b3b3]">We'll keep you updated on new episodes</p>
          <button className="self-start rounded-full border-none bg-white py-2 px-4 text-sm font-bold text-black transition-transform duration-200 ease-in-out hover:scale-105">
            Browse podcasts
          </button>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-4 p-4 px-3">
        <ul className="m-0 flex list-none flex-wrap gap-y-2 gap-x-4 p-0">
          <li>
            <a href="/legal" className="text-[11px] text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
              Legal
            </a>
          </li>
          <li>
            <a href="/safety-privacy" className="text-[11px] text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
              Safety & Privacy Center
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="text-[11px] text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/cookies" className="text-[11px] text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
              Cookies
            </a>
          </li>
          <li>
            <a href="/about-ads" className="text-[11px] text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
              About Ads
            </a>
          </li>
          <li>
            <a href="/accessibility" className="text-[11px] text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
              Accessibility
            </a>
          </li>
        </ul>
        <button className="self-start flex cursor-pointer items-center gap-2 rounded-full border border-[#727272] bg-transparent py-2 px-4 text-sm font-bold text-white transition-colors duration-200 ease-in-out hover:border-white">
          {/* Globe Icon SVG */}
          <svg
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4 fill-current"
          >
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM.75 8a7.25 7.25 0 1 1 14.5 0A7.25 7.25 0 0 1 .75 8ZM7.25 1.75v12.5a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0ZM1.75 8a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z"></path>
          </svg>
          English
        </button>
      </div>
    </div>
  );
};

export default Sidebar;