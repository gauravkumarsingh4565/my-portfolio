import React from 'react'
import { personal } from '../data'
import './styles/Hero.css'
import profile from '../../src/assets/sharedimage.jpeg' // ensure image exists

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-left">
          <h1>Hi, I'm <span className="accent">{personal.name}</span></h1>
          <h4 className="sub">{personal.title}</h4>
          <p className="lead">{personal.summary}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href={personal.github} className="btn-ghost" target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <div className="socials">
            <a href={personal.github} target="_blank" rel="noreferrer">Git</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">in</a>
            <a href={`mailto:${personal.email}`}>✉</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-wrap">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  )
}
