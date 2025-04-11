function Projets() {
  return (

    <div id="projets" className="max-w-7xl mx-auto p-4 mt-5 bg-white/10 rounded-3xl">
      <h3 className="text-white text-3xl lg:text-4xl mt-5 lg:mt-7 xl:mt-10 font-semibold text-center">
        Mes projets
      </h3>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-0 mt-4 xl:mt-9 justify-items-center">

        {/* Projet 1 */}
        <section className="flex flex-col items-center">
          <img
            className="w-40 lg:w-45 xl:w-50 bg-white p-1.5 rounded-xl"
            src="./assets/fourchestlogo.png"
            alt="Logo Fourch'Est"
          />
          <a
            className="inline-block px-1 py-1 mt-2 text-white font-semibold rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-200"
            href="https://deploy-preview-6--spiffy-truffle-4efe79.netlify.app/"
          >
            Visitez-moi
          </a>
        </section>

        {/* Projet 2 */}
        <section className="flex flex-col items-center">
          <img
            className="w-40 lg:w-45 xl:w-50 bg-white p-1.5 rounded-xl"
            src="./assets/rscustomlogo.png"
            alt="Logo RsCustom"
          />
          <a
            className="inline-block px-1 py-1 mt-2 text-white font-semibold rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-200"
            href="En cours de création"
          >
            En cours...
          </a>
        </section>

        {/* Projet 3 */}
        <section className="flex flex-col items-center">
          <img
            className="w-40 lg:w-45 xl:w-50 bg-white p-1.5 rounded-xl"
            src="./assets/logoLADLsf.png"
            alt="Les Amis Des Levriers"
          />
          <a
            className="inline-block px-1 py-1 mt-2 text-white font-semibold rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-200"
            href="En cours de création"
          >
            En cours...
          </a>
        </section>

        {/* Projet 4 */}
        <section className="flex flex-col items-center">
          <img
            className="w-40 lg:w-45 xl:w-50 bg-white p-1.5 rounded-xl"
            src="./assets/autreslogo.png"
            alt="Autres Projets à venir"
          />
          <a
            className="inline-block px-1 py-1 mt-2 text-white font-semibold rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-200"
            href="En cours de création"
          >
            En cours...
          </a>
        </section>

        {/* Projet 5 */}
        <section className="flex flex-col items-center">
          <img
            className="w-40 lg:w-45 xl:w-50 bg-white p-1.5 rounded-xl"
            src="./assets/autreslogo.png"
            alt="Autres Projets à venir"
          />
          <a
            className="inline-block px-1 py-1 mt-2 text-white font-semibold rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-200"
            href="En cours de création"
          >
            En cours...
          </a>
        </section>

        {/* Projet 6 */}
        <section className="flex flex-col items-center">
          <img
            className="w-40 lg:w-30 xl:w-50 bg-white p-1.5 rounded-xl"
            src="./assets/autreslogo.png"
            alt="Autres Projets à venir"
          />
          <a
            className="inline-block px-1 py-1 mt-2 text-white font-semibold rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-200"
            href="En cours de création"
          >
            En cours...
          </a>
        </section>
      </div>
    </div>
  );
}

export default Projets;
