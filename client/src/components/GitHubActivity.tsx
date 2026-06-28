import React, { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

const username: any = 'munshiahmedi'; // GitHub username set by user

const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data: Repo[] = await res.json();
        const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sorted.slice(0, 4));
      } catch (err: any) {
        setError(err.message || 'Error fetching repos');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="github-section">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>GitHub Activity</h2>
      </div>

      <div className="github-inner">
        <div className="github-top">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="github-profile"
          >
            <div className="github-avatar" aria-hidden>
              {/* Simple avatar placeholder */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#0B0B12"/>
                <path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="#38BDF8" opacity="0.95"/>
              </svg>
            </div>
            <div className="github-meta">
              <strong>{`@${username}`}</strong>
              <a
                className="github-link"
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
              >
                {`https://github.com/${username}`}
              </a>
            </div>
          </a>
        </div>

        <div className="github-repos">
          <h3>Pinned Repositories</h3>

          {loading && <p>Loading repositories…</p>}
          {error && <p className="error">{error}</p>}

          {!loading && repos.length === 0 && (
            <p className="muted">No repositories to show. Set `username` in <em>GitHubActivity.tsx</em>.</p>
          )}

          <div className="repo-grid">
            {repos.map((r) => (
              <a key={r.id} className="repo-card" href={r.html_url} target="_blank" rel="noreferrer">
                <div className="repo-header">
                  <strong className="repo-name">{r.name}</strong>
                  <span className="repo-stars">★ {r.stargazers_count}</span>
                </div>
                <p className="repo-desc">{r.description || 'No description'}</p>
                <div className="repo-meta">{r.language || '—'}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
