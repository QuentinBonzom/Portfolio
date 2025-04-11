function Skills() {
    return (
      // Conteneur principal centré avec une largeur maximale
      <div id="competences" className="max-w-7xl mx-auto p-4 mt-5 bg-white/10 rounded-3xl">
        <h2 className="text-3xl lg:text-4xl text-center text-white font-semibold mb-8">
          Compétences
        </h2>
        <section className="grid grid-cols-4 gap-4 justify-items-center">
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 bg-white rounded-full"
            src="/HTML.svg"
            alt="HTML LOGO"
          />
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 bg-white rounded-full"
            src="/CSS.svg"
            alt="CSS LOGO"
          />
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 bg-white rounded-full"
            src="/VSC.svg"
            alt="VSC LOGO"
          />
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 bg-white rounded-full"
            src="/JS.svg"
            alt="JS LOGO"
          />
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 bg-white rounded-full"
            src="/PHP.svg"
            alt="PHP LOGO"
          />
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 bg-white rounded-full"
            src="/REACT.svg"
            alt="REACT LOGO"
          />
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 bg-white rounded-full"
            src="/MYSQL.svg"
            alt="MYSQL LOGO"
          />
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 bg-white rounded-full"
            src="/TAILWIND CSS.svg"
            alt="TAILWIND CSS LOGO"
          />
        </section>
      </div>
    );
  }
  
  export default Skills;
  