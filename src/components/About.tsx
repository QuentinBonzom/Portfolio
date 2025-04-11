function About() {
    return (
      <div id="about" className="max-w-4xl mx-auto px-4 bg-white/10 rounded-3xl p-2 pb-3">
        <h3 className="text-white text-3xl mt-4 font-semibold lg:text-4xl text-center">
          A propos
        </h3>
        
        <section className="flex flex-col md:flex-row items-center justify-center mt-5 gap-6">
          <img
            src="./assets/profilepicture.png"
            alt="Profile Quentin Bonzom"
            className="w-40 md:w-50 xl:w-70 rounded-2xl mt-5"
          />
          <p className="text-sm text-white md:text-xl lg:text-2xl font-semibold mt-5 text-center md:text-left">
            Développeur web full-stack formé à la <span className="font-bold">Wild Code School</span>.
            Passionné par le code, j’aime concevoir des interfaces modernes, accessibles et performantes, en accordant une attention particulière à l’expérience utilisateur. Mon objectif est de créer des solutions à la fois esthétiques, intuitives et techniquement solides.
          </p>
        </section>
      </div>
    );
  }
  
  export default About;
  