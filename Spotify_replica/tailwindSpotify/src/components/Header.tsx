// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#070707] py-4 px-8 shadow-md shadow-black/50">
      <div className="flex items-center gap-4">
        {/* Left navigation buttons and search bar */}
        <div className="flex gap-4">
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-none bg-[#0a0a0a] text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:bg-[#1a1a1a]">
            {/* Back Arrow SVG */}
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M16.952 2.907a.75.75 0 0 1 .023 1.06L9.46 12l7.515 8.033a.75.75 0 1 1-1.083 1.014L7.87 12.513a.75.75 0 0 1-.023-1.06L15.87 2.907a.75.75 0 0 1 1.082.023Z"></path>
            </svg>
          </button>
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-none bg-[#0a0a0a] text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:bg-[#1a1a1a]">
            {/* Forward Arrow SVG */}
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M7.048 2.907a.75.75 0 0 0-.023 1.06L14.54 12l-7.515 8.033a.75.75 0 1 0 1.083 1.014L16.13 12.513a.75.75 0 0 0 .023-1.06L8.13 2.907a.75.75 0 0 0-1.082-.023Z"></path>
            </svg>
          </button>
        </div>

        <div className="ml-6 flex flex-grow items-center gap-2 rounded-full bg-[#242424] py-2 px-3 max-w-[360px]">
          {/* Search Icon SVG */}
          <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-[#b3b3b3]"
          >
            <path
              d="M10.5 1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1.5 10.5a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM16.5 16.5l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="What do you want to play?"
            className="w-full border-none bg-transparent text-base text-white placeholder:text-[#b3b3b3] focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Right navigation links and buttons */}
        <a href="/premium" className="whitespace-nowrap text-sm font-bold text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
          Premium
        </a>
        <a href="/support" className="whitespace-nowrap text-sm font-bold text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
          Support
        </a>
        <a href="/download" className="whitespace-nowrap text-sm font-bold text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
          Download
        </a>
        <span className="text-sm text-[#b3b3b3]">|</span>
        <button className="flex cursor-pointer items-center gap-2 whitespace-nowrap border-none bg-transparent text-sm font-bold text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white">
          {/* Install App Icon SVG */}
          <svg
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4 fill-current"
          >
            <path d="M1.5 1.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM1.5 5.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM1.5 9.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM1.5 13.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Z"></path>
          </svg>
          Install App
        </button>
        <a href="/signup" className="whitespace-nowrap text-sm font-bold text-[#b3b3b3] no-underline transition-colors duration-200 ease-in-out hover:text-white">
          Sign up
        </a>
        <button className="whitespace-nowrap cursor-pointer rounded-full border-none bg-white py-3 px-8 text-base font-bold text-black transition-transform duration-200 ease-in-out hover:scale-105">
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;