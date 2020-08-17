import React from "react";
import information from "../../customize/personal-info";
import "./navbar.css";

const Navbar = () => {
  const [color, setColor] = React.useState<string>("white");

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundcolor =
        window.scrollY < 100 ? "white" : "rgba(234,236,239,.81)";
      setColor(backgroundcolor);
    });
  }, []);

  return (
    <nav className="nav" style={{ backgroundColor: color }}>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={information.resumeUrl}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${information.githubUsername}`}
          >
            Github
          </a>
        </li>
        <li>
          <a href={`mailto:${information.email}`}>Email</a>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
