import { useEffect, useState } from "react";
import "../style.css";

const About = () => {
  return (
    <div className="page-wrapper">
      <h1>🪞 About Me</h1>

      <p>
        Hi, I’m Valerie. I graduated from UC Berkeley with a B.A. in Political Economy in 2024. 
        Since then, my work has focused largely on helping people navigate healthcare and supportive housing systems.
        Most recently, I worked directly with clients living in transitional and supportive housing, connecting them with care and advocating for their needs.
      </p>

      <p>
      I’m especially interested in health equity and in how policy shapes people’s everyday experiences.
      Lately, I’ve also been thinking about how better operations and thoughtfully designed technology can make complicated systems easier to navigate.
      </p>

      <p>
        I’m based in the Bay Area. Outside of work, I write, travel, and occasionally build small coding projects based on whatever has captured my attention.
        This site is part portfolio and part cozy digital room I built in my head.
      </p>

      <p>If you’d like to collaborate or just say hi:</p>
      <ul>
        <li>
          <a href="mailto:valerieshoker@gmail.com">📧 valerieshoker@gmail.com</a>
        </li>
        <li>
          <a
            href="https://substack.com/@valerieshoker?utm_source=user-menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            📝 My Substack
          </a>
        </li>
      </ul>

      <a href="/">Back to home</a>
    </div>
  );
};

export default About;
