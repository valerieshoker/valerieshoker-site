import { useEffect, useState } from "react";
import "../style.css";

const About = () => {
  return (
    <div className="page-wrapper">
      <h1>🪞 About Me</h1>

      <p>
        Hi, I’m Valerie — future lawyer, writer, researcher,
        and occasional coder. I care deeply about health equity, public
        policy, and social justice rooted in community.
      </p>

      <p>
        I graduated from UC Berkeley with a B.A. in Political Economy in May of 2024.
        I’ve worked in public health, research, and education — and recently began
        exploring code as a way to share my research more equitably. I also recently
        stepped into a community-facing leadership role at a Bay Area nonprofit,
        supporting underserved populations across Oakland through direct care and
        advocacy.
      </p>

      <p>
        I’m currently based in the Bay Area, spending most of my days reading
        something new, drinking pour-over, and working on solo projects often
        inspired by the books that changed me. This site is part portfolio, part
        journal, and part cozy digital room I built in my head.
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
