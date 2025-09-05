import React from 'react';
import '../style.css';

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <h1>My Projects</h1>

      <div className="project">
        <p className="project-title">Health Access Explorer</p>
        <p>
          An interactive dashboard visualizing health insurance gaps by county, with demographic overlays and policy timelines. Still in progress, but meant to serve as a tool for understanding and addressing systemic inequities in healthcare access.
        </p>
      </div>

      <div className="project">
        <p className="project-title">U.S. Healthcare Dashboard</p>
        <p>
          Visualizing health insurance rates across states and counties to inform more equitable
          policy. Currently in development, but open to feedback and collaboration, especially from
          anyone experienced in data visualization. Feel free to message me if you'd like to contribute!
        </p>
      </div>

      <div className="project">
        <p className="project-title">Moku Noru (Chrome Extension)</p>
        <p>
          A minimal focus toolkit: blocks distractions, tracks tasks, and encourages better digital
          habits with a to-do system and pomodoro timer.
        </p>
      </div>

      <a
        className="github-link"
        href="https://github.com/valerieshoker"
        target="_blank"
        rel="noopener noreferrer"
      >
        View all on GitHub
      </a>

      <br /><br />
      <a className="github-link" href="/">Back to home</a>
    </div>
  );
}
