import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
// import Education from './components/Education'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import Projects from './components/Projects'


export default function App() {
return (
  <div className="site-root">
  <Header />
  <main>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contacts />
  </main>
  <Footer />
</div>
)
}