import React from 'react'
import { education, trainings } from '../data'
import './styles/Education.css' 

export default function Education() {
  return (
    <section className="education-section" id="education">
      <h3 className="section-heading">Education</h3>

      <div className="education-card">
        <h4 className="education-degree">{education.degree}</h4>
        <p className="education-college">
          {education.college} — {education.percentage} • {education.year}
        </p>
      </div>

      <h3 className="section-heading mt-6">Training & Certifications</h3>

      <div className="trainings-list">
        {trainings.map((t) => (
          <div key={t.title} className="training-card">
            <h5 className="training-title">{t.title}</h5>
            <p className="training-org">
              {t.org} • {t.period}
            </p>
            <p className="training-details">{t.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
