import React from 'react'
import { skills } from '../data'
import './styles/Skills.css'

function SkillColumn({ title, items }) {
  return (
    <div className="skill-column">
      <h5>{title}</h5>
      <ul>
        {items.map(s => <li key={s}>{s}</li>)}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h3>Skills & Technologies</h3>
        <div className="skills-grid">
          <SkillColumn title="Front-End" items={skills.frontend} />
          <SkillColumn title="Back-End & Database" items={skills.backend.concat(skills.database)} />
          <SkillColumn title="Tools & Competencies" items={skills.tools.concat(skills.other)} />
        </div>
      </div>
    </section>
  )
}
