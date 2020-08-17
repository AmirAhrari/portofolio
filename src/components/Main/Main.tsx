import React from "react";
import Typist from "react-typist";
import information from "../../customize/personal-info";
import "./main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="center">
        <h1 className="name">{information.name}</h1>
        <h4 className="email">{information.email}</h4>
        <h2 className="role">
          <Typist cursor={{ hideWhenDone: true }}>{information.role}</Typist>
        </h2>
        <a className="btn" href="#projects">
          <button>Resume</button>
        </a>
        <a className="btn" href="#projects">
          <button>Projects</button>
        </a>
        <a className="btn" href="#projects">
          <button>Github</button>
        </a>
      </div>
    </div>
  );
};

export default Main;
