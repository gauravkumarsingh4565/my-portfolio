import React from 'react'
import { personal } from '../data'
import './styles/Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">GK</div>
          <div className="brand-info">
            <div className="brand-name">{personal.name}</div>
            <div className="brand-sub">{personal.title}</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
