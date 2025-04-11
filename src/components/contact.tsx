import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Met à jour le state du formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_b9raxrq", 
        "template_jsq28mk", 
        formRef.current,
        "bpbNpiwxCf0g6ZgPM" 
      )
      .then(() => {
        setPopupMessage("Votre message a bien été envoyé !");
        setIsSubmitted(true);
        setFormData({ name: "", email: "", title: "", message: "" });

        setTimeout(() => setPopupMessage(""), 5000);
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        setPopupMessage("Une erreur est survenue. Veuillez réessayer.");
        setTimeout(() => setPopupMessage(""), 3000);
      });
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto p-4 mt-5 pt-0.5 mb-5 bg-white/10 rounded-3xl">
      {/* Pop-up */}
      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-500 p-6 rounded shadow-lg text-center">
            <p className="text-teal-400 font-semibold">{popupMessage}</p>
            <button
              onClick={() => setPopupMessage("")}
              className="mt-4 px-4 py-2 border border-teal-400 text-teal-400 font-semibold rounded hover:bg-teal-400 hover:text-white transition duration-200"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <h3 className="text-white text-3xl lg:text-4xl text-center font-semibold mt-4 lg:mt-7 xl:mt-10">
        Contact
      </h3>

      
      <section className="flex flex-col md:flex-row items-center justify-center gap-15 mt-4">
        {/* Formulaire */}
        <div className="lg:w-1/2">
          <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-2xl font-bold text-teal-500 mb-4 text-center">
              Contactez-moi
            </h2>
            {isSubmitted ? (
              <p className="text-white text-center">
                Merci de m'avoir contacté ! <br /> Je vous répondrai au plus vite.
              </p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white mb-1" htmlFor="name">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-1" htmlFor="title">
                    Titre
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Votre titre"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-teal-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-5 py-2 border border-teal-400 text-teal-400 font-semibold rounded hover:bg-teal-400 hover:text-white transition duration-200"
                >
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Boutons réseaux sociaux */}
        <div className="lg:w-1/2">
          <div className="flex flex-col space-y-5 items-center">
            <a
              href="https://www.linkedin.com/in/quentin-bonzom-a37aa1336/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-center px-8 py-4 border text-xl lg:text-3xl border-teal-400 text-teal-400 font-semibold rounded hover:bg-teal-400 hover:text-white transition duration-200"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/QuentinBonzom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-center px-9.5 py-4 border text-xl lg:text-3xl border-teal-400 text-teal-400 font-semibold rounded hover:bg-teal-400 hover:text-white transition duration-200"
            >
              GitHub
            </a>
            <a
               href=".*/MonCV.pdf"
               download="MonCV.pdf"
              className="flex items-center justify-center text-center px-8 py-4 border text-xl lg:text-3xl border-teal-400 text-teal-400 font-semibold rounded hover:bg-teal-400 hover:text-white transition duration-200"
            >
              Mon CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
