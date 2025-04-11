import { useEffect, useState } from "react";

type Repo = {
  id: string;
  html_url: string;
  name: string;
  language?: string;
  description: string;
};

function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/QuentinBonzom/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="github" className="max-w-7xl mx-auto p-4 mt-5 bg-white/10 rounded-3xl">
      <h3 className="text-white text-3xl lg:text-4xl text-center font-semibold">
        Mes projets GitHub
      </h3>
      <ul className="mt-4 grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="bg-slate-800 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 text-xl font-bold"
            >
              {repo.name}
            </a>
            <p className="text-gray-300">{repo.description}</p>
            <div className="text-sm text-gray-400 mt-2">
              🧑‍💻 {repo.language}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GitHub;
