import { useEffect, useState } from 'react';

type GitHubRepo = {
  id: number;
  html_url: string;
  name: string;
};

function RepoList() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepositories() {
      try {
        const response = await fetch('https://api.github.com/users/danny-huasco/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const repoData = (await response.json()) as GitHubRepo[];
        setRepos(repoData);
      } catch {
        setError('Unable to load repositories right now.');
      } finally {
        setLoading(false);
      }
    }

    loadRepositories();
  }, []);

  return (
    <div className="card mb-3 mt-3">
      <div className="card-body">
        <h5 className="card-title">GitHub Repositories</h5>
        <p className="card-text">
          Here are some of my projects on GitHub, they&apos;re not prepared to be a portfolio, but it&apos;s some of the exercises that I&apos;ve done in my academic life:
        </p>
        <ul className="list-group">
          {loading && <li className="list-group-item">Loading repos...</li>}
          {error && <li className="list-group-item text-danger">{error}</li>}
          {!loading && !error && repos.map((repo) => (
            <li key={repo.id} className="list-group-item">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RepoList;
