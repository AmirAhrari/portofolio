import React from "react";
import useRepos from "../../hooks/useRepos";
import ProjectCard from "./ProjectCard";
import repos from "../../customize/contributes";

const Contributes = () => {
  const data = useRepos(repos);

  return (
    <React.Fragment>
      {data.map((repo, idx) => (
        <ProjectCard repo={repo} key={idx} />
      ))}
    </React.Fragment>
  );
};

export default Contributes;
