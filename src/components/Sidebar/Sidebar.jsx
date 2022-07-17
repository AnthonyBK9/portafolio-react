import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style/sidebar.css'

const Sidebar = ({isOpen, toggle}) => {

  return (
    <nav className={isOpen ? 'sidebar-container sidebar-container-open' : 'sidebar-container'} onClick={toggle}>
        <div className="sidebar-icon">
            <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="sidebar-wrapper">
            <ul className="sidebar-menu">
                <li>
                    <a href="#about" className="sidebar-links">
                      <p>Sobre mí</p>
                    </a>
                </li>
                <li>
                    <a href="#skills" className="sidebar-links">
                      <p>Tecnologías</p>
                    </a>
                </li>
                <li>
                    <a href="#portafolio" className="sidebar-links">
                      <p>Portafolio</p>
                    </a>
                </li>
                <li>
                    <a href="#contact" className="sidebar-links">
                      <p>Contacto</p>
                    </a>
                </li>
            </ul>
            <div className="social-buttons-b sidebar-item">
              <a href="https://github.com/AnthonyBK9" className="social-buttons__button social-button social-button--github" aria-label="GitHub" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/antonio-bermudez/" className="social-buttons__button social-button social-button--linkedin" aria-label="CodePen" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>     
            </div>
        </div>
    </nav>
  )
}

export default Sidebar