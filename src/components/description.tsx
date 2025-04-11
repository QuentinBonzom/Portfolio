function Description() {
  return (
    <main >
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:mt-25 ">
        
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <h1 className="text-white font-semibold text-4xl lg:text-8xl text-left">
            Bonjour, <br /> je suis <br />
            <span className="text-teal-500 font-bold text-6xl lg:text-9xl">
              Quentin
            </span>
          </h1>
          <p className="text-white text-2xl lg:text-4xl font-light mt-2 text-left">
            Développeur Web
          </p>

          <div className="w-full flex mt-9">
            <button
              type="button"
              className="px-8 py-4 border text-3xl border-teal-400 text-teal-400 font-semibold rounded hover:bg-teal-400 hover:text-white transition duration-200"
            >
              Voir mes Projets
            </button>
          </div>
        </div>

        <video
          autoPlay
          muted
          loop
          className="max-md:hidden w-70 min-lg:w-85 max-w-md rounded-4xl"
          src="./assets/tes8.mp4"
        />
      </section>
    </main>
  );
}

export default Description;
