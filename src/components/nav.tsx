import { useState } from 'react';

function Navbar() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <nav className="2xl:fixed top-0 left-0 right-0 z-50 p-0">
      <section className="flex items-center justify-between mr-5 p-3">
        {/* Logo */}
        <div>
          <img src="logoB.png" className="w-40" alt="Quentin Logo" />
        </div>

        {/* Liens desktop */}
        <div className="hidden md:flex gap-5 text-white">
          <a href="#about" className="hover:text-teal-300 transition">
            A propos
          </a>
          <a href="#competences" className="hover:text-teal-300 transition">
            Compétences
          </a>
          <a href="#projets" className="hover:text-teal-300 transition">
            Projets
          </a>
          <a href="#github" className="hover:text-teal-300 transition">
            GitHub
          </a>
          <a href="#contact" className="hover:text-teal-300 transition">
            Contact
          </a>
        </div>

        {/* Bouton burger uniquement sur mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setOuvert(!ouvert)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Menu mobile toujours présent */}
      <div
        className={`absolute top-16 right-0 bg-[#0D2B46] text-white rounded-md shadow-md p-4 flex flex-col space-y-3 md:hidden transform transition-transform duration-300 ${
          ouvert ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a
          href="#about"
          className="hover:text-teal-300 transition"
          onClick={() => setOuvert(false)}
        >
          A propos
        </a>
        <a
          href="#competences"
          className="hover:text-teal-300 transition"
          onClick={() => setOuvert(false)}
        >
          Compétences
        </a>
        <a
          href="#projets"
          className="hover:text-teal-300 transition"
          onClick={() => setOuvert(false)}
        >
          Projets
        </a>
        <a
          href="#github"
          className="hover:text-teal-300 transition"
          onClick={() => setOuvert(false)}
        >
          GitHub
        </a>
        <a
          href="#contact"
          className="hover:text-teal-300 transition"
          onClick={() => setOuvert(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
