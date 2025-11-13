import React from 'react'
import './styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Gaurav Kumar. All rights reserved.</div>
      </div>
    </footer>
  )
}
