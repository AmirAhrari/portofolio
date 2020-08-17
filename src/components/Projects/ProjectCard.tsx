import React from "react";
import { IRepo } from "../../hooks/useRepos";

interface IProps {
  repo: IRepo;
}

const ProjectCard: React.FC<IProps> = ({ repo }) => {
  return (
    <div className="project-card">
      <h3>{repo.name.split("-").join(" ").split("_").join(" ")}</h3>
      <div className="mt-16">
        {repo.stars && (
          <button className="p-6 mr-8">Stars: {repo.stars}</button>
        )}
        {repo.forks && <button className="p-6">Froks: {repo.forks}</button>}
      </div>
      <h4>{repo.description}</h4>
      {repo.languages && (
        <p>
          Languages/Technologies:{" "}
          {repo.languages.map((language) => (
            <button className="m-4">{language}</button>
          ))}
        </p>
      )}
      <a
        className="btn-action"
        rel="noopener noreferrer"
        target="_blank"
        href={repo.repo}
      >
        <button>Repo</button>
      </a>
      {repo.demo && (
        <a
          className="btn-action"
          rel="noopener noreferrer"
          target="_blank"
          href={repo.demo}
        >
          <button>Live</button>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
