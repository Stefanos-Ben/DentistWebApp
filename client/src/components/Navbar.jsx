import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <h3 className="text-primary font-bold text-base">
        ΜΑΡΩ ΤΡΑΝΤΑ
      </h3>

      {/* Tooth Icon (mobile only) */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {/* Simple Tooth SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w- h-8"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          {/* A sample tooth shape path – you can swap for your own */}
          <path d="M256 32c-74.44 0-80 50.14-80 72 0 18.51-14.75 48.14-34.78 60.31C135.42 176.39 112 204.86 112 256c0 51.73 16 96 16 96s8 128 32 128c27.21 0 46-3.58 62.59-48.92 10.94-31.66 24.53-47.08 33.41-47.08s22.47 15.42 33.41 47.08C305.99 476.42 324.78 480 352 480c24 0 32-128 32-128s16-44.27 16-96c0-51.14-23.42-79.61-29.22-91.69C338.75 152.14 324 122.51 324 104c0-21.86-5.56-72-80-72z" />
        </svg>
      </button>

      {/* Nav Links */}
      <ul
        className={`
          nav-links
          transition-all duration-300 ease-in-out

          /* MOBILE (menuOpen? absolute dropdown : hidden) */
          ${menuOpen ? 'block absolute top-full left-0 w-full bg-background shadow-md' : 'hidden'}

          /* DESKTOP OVERRIDES */
          md:static md:flex md:flex-row md:items-center md:gap-6 md:shadow-none
        `}
      >
        <li>
          <a
            href="#section-1"
            className="block py-2 px-4 text-black font-medium hover:text-primary md:py-0 md:px-0"
          >
            Η Κλινική
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="block py-2 px-4 text-black font-medium hover:text-primary md:py-0 md:px-0"
          >
            Υπηρεσίες
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-black font-medium hover:text-primary md:py-0 md:px-0"
          >
            Φιλοσοφία
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-black font-medium hover:text-primary md:py-0 md:px-0"
          >
            Επικοινωνία
          </a>
        </li>

        {/* Appointment button on mobile (within dropdown) */}
        <li className="md:hidden block py-2 px-4">
          <button className="rounded-full bg-primary text-background text-sm font-semibold py-2 px-4 w-full cursor-pointer">
            Ραντεβού
          </button>
        </li>
      </ul>

      {/* Appointment button on desktop (outside the menu) */}
      <button className="hidden md:block rounded-full bg-primary text-background text-sm font-semibold py-2 px-4 cursor-pointer">
        Ραντεβού
      </button>
    </nav>
  );
};

export default Navbar;
