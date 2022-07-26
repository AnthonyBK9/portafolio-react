import React from 'react'
import './style/contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <div className="contact-container">
          <input type="checkbox" id="btn-contact"/>
          <div className="contact-content">
            <h2 className="contact-title">Contacto</h2>
            <p><i className="fa-solid fa-envelope"></i> antonio.bermudez.ing@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> 278-132-8153</p>
          </div>
          <div className="btn-contact">
            <label htmlFor="btn-contact" className="btn-active"><i className="fa-solid fa-plus"></i></label>
          </div>
        </div>
    </div>
  )
}

export default Contact