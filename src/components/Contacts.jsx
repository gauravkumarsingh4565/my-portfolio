import React from 'react'
import { personal } from '../data'
import './styles/Contacts.css'

const Contacts = () => {
  return (
    <section className="contacts-section" id="contact">
      <div className="container contacts-inner">
        <div className="contact-form-card">
          <h3>Get In Touch</h3>
          <p className="muted">I’m currently looking for new opportunities. Feel free to reach out.</p>
          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Your name" />
            <input placeholder="your.email@example.com" />
            <textarea placeholder="Your message..." rows="5" />
            <button className="btn-primary" type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <h5>Email</h5>
            <p>{personal.email}</p>
          </div>
          <div className="info-card">
            <h5>Phone</h5>
            <p>{personal.phone}</p>
          </div>
          <div className="info-card">
            <h5>Location</h5>
            <p>{personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
