import React from 'react'
import './styles/About.css'
import aboutImg from '../../src/assets/about.jpeg' 

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="aboutme">About Me</h2>
      <div className="container about-inner">
      
        <div className="about-media">
          <img src={aboutImg} alt="about" />
        </div>
        <div className="about-content">
         
          <p className="about-sub">React.js Developer & Problem Solver</p>
          {/* <p>{personal.summary}</p> */}
          <div >
            
            <p className="text-slate-600 mb-4">
              I'm a dedicated React.js developer with 2 years of professional experience 
              in building scalable and performant web applications. Currently working at 
              Omkara Infotech Pvt. Ltd., I specialize in React.js, Redux Toolkit, TypeScript, 
              and modern JavaScript frameworks.
            </p>
            <p className="text-slate-600 mb-4">
              My journey has taken me through diverse projects including marketing automation 
              platforms (ai.capengage.com) and enterprise web applications. I excel in creating 
              reusable UI components, optimizing performance, and integrating RESTful APIs with 
              Node.js and MongoDB backends.
            </p>
            <p className="text-slate-600 mb-4">
              I hold a B.Sc. in Mathematics from J.L.N College and completed specialized training 
              in ReactJS and Full Stack Development at Naresh IT, Hyderabad.
            </p>
            <p className="text-slate-600">
              Fluent in both Hindi and English, I thrive in Agile environments and am passionate 
              about writing clean, maintainable code while staying current with the latest React 
              ecosystem trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
