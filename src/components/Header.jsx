import React, { useState } from 'react'
import { personal } from '../data'
import './styles/Header.css'
import logoImg from '../assets/gauravpic.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">

        
        <div className="brand">
          <div className="logo">
            <img src={logoImg} alt="Logo" className="logo-img" />
          </div>
          <div className="brand-info">
            <div className="brand-name">{personal.name}</div>
            <div className="brand-sub">{personal.title}</div>
          </div>
        </div>

      
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="btn-outline" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

       
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </div>
    </header>
  )
}
