import React from 'react';
import '../style.css';

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <h1>My Projects</h1>

      <div className="project">
        <h2 className="project-title">Health Access Explorer</h2>
        <p>
          An interactive dashboard visualizing health insurance disparities across states and counties,
          with demographic overlays and policy timelines. Still in progress, but designed as both a
          technical prototype and a tool for supporting equitable policymaking. Built with React,
          Mapbox, and Vite, and open to feedback or collaboration from anyone experienced in data
          visualization.
        </p>
      </div>

      <div className="project">
        <h2 className="project-title">
          <a
            href="https://github.com/valerieshoker/mokunoru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moku Noru (Chrome Extension)
          </a>
        </h2>
        <p>
          A minimal focus toolkit: blocks distractions, tracks tasks, and encourages better digital
          habits with a to-do system and Pomodoro timer.
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
