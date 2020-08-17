import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Projects />
    </React.Fragment>
  );
}

export default App;
