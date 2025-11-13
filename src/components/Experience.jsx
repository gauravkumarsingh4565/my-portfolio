import React from 'react'
import { experience } from '../data'
import './styles/Experience.css'

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h3>Work Experience</h3>
        <div className="experience-list">
          {experience.map((exp) => (
            <div key={exp.company} className="experience-card">
              <div className="exp-head">
                <div>
                  <h4>{exp.company}</h4>
                  <p className="muted">{exp.role} • {exp.period}</p>
                </div>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
