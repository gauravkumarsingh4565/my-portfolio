import React from "react";
import { projects } from "../data";
import "./styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h3>Featured Projects</h3>
        <p className="muted center">
          Here are some projects that demonstrate my skills in React
          development.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-media">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-body">
                <h4>{p.title}</h4>
                <p className="project-summary">{p.summary}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {/* <a
                    href={p.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Code
                  </a> */}
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
