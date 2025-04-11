function Footer() {
    return (
      <footer className="bg-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-center md:text-left">
            © 2025 Quentin Bonzom. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/quentin-bonzom-a37aa1336/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-600 transition text-xl font-semibold"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/QuentinBonzom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-600 transition text-xl font-semibold"
            >
              GitHub
            </a>
            <a
               href=".*/MonCV.pdf"
               download="MonCV.pdf"
              className="text-teal-400 hover:text-teal-600 transition text-xl font-semibold"
            >
              Mon CV
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  