import React from "react";

import "./projects.css";
import repos from "../../customize/projects";
import ProjectCard from "./ProjectCard";
import Contributes from "./Contributes";

const Projects = () => {
  return (
    <div className="container" id="projects">
      <h1 className="header">Top projects</h1>
      <div className="flex-box">
        {repos.map((repo, idx) => (
          <ProjectCard repo={repo} key={idx} />
        ))}
      </div>
      <h2 className="header">Open source contributes</h2>
      <div className="flex-box">
        <Contributes />
      </div>
    </div>
  );
};

export default Projects;
