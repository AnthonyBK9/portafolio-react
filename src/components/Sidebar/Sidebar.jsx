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
                  <a href="#home"  className="nav__logo-sidebar sidebar-links">
                    <div className="nav__logo-sidebar">
                        <p><span className="span">{'<'}</span> Inicio <span className="span">{'/>'}</span></p>
                    </div>
                  </a>
                </li>
                <li>
                    <a href="#about" className="sidebar-links">
                      <p><span className="span">{'<'}</span> Sobre mí <span className="span">{'/>'}</span></p>
                    </a>
                </li>
                <li>
                    <a href="#skills" className="sidebar-links">
                      <p><span className="span">{'<'}</span> Tecnologías <span className="span">{'/>'}</span></p>
                    </a>
                </li>
                <li>
                    <a href="#portafolio" className="sidebar-links">
                      <p><span className="span">{'<'}</span> Portafolio <span className="span">{'/>'}</span></p>
                    </a>
                </li>
                <li>
                    <a href="#contact" className="sidebar-links">
                      <p><span className="span">{'<'}</span> Contacto <span className="span">{'/>'}</span></p>
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