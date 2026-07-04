import React, { useEffect, useState } from 'react';
import './GitHub.css';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import { GitHubRepo } from '../types';
import { githubUsername } from '../data/portfolioData';

const languageColors: { [key: string]: string } = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C++': '#f34b7d',
  Shell: '#89e051',
  HCL: '#844FBA',
  Dockerfile: '#384d54',
};

const GitHub: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=30`
        );
        if (!response.ok) throw new Error('GitHub API error');
        const data: GitHubRepo[] = await response.json();
        setRepos(data.filter((repo) => !repo.fork).slice(0, 12));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if (loading) return <div className="github-status">Loading repositories…</div>;

  if (error || repos.length === 0) {
    return (
      <div className="github-status">
        <FaGithub className="github-big-icon" />
        <p>Couldn't load repositories right now.</p>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-link"
        >
          Visit github.com/{githubUsername} <FaExternalLinkAlt />
        </a>
      </div>
    );
  }

  return (
    <div className="github-container">
      <h2 className="github-title">
        <FaGithub /> Latest on GitHub
      </h2>
      <p className="github-intro">
        Live from{' '}
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
          github.com/{githubUsername}
        </a>{' '}
        — my most recently updated public repositories.
      </p>
      <div className="repos-grid">
        {repos.map((repo, index) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
            style={{ '--delay': `${index * 0.08}s` } as React.CSSProperties}
          >
            <h3 className="repo-name">{repo.name}</h3>
            <p className="repo-description">{repo.description || 'No description yet.'}</p>
            {repo.topics && repo.topics.length > 0 && (
              <div className="repo-topics">
                {repo.topics.slice(0, 4).map((topic) => (
                  <span key={topic} className="repo-topic">{topic}</span>
                ))}
              </div>
            )}
            <div className="repo-meta">
              {repo.language && (
                <span className="repo-language">
                  <span
                    className="language-dot"
                    style={{ backgroundColor: languageColors[repo.language] || '#8b949e' }}
                  />
                  {repo.language}
                </span>
              )}
              <span className="repo-stat"><FaStar /> {repo.stargazers_count}</span>
              <span className="repo-stat"><FaCodeBranch /> {repo.forks_count}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GitHub;
