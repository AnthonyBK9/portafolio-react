import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style/navbar.css'

const NavBar = ({toggle}) => {

  return (
    <div>
        <nav className="nav">
            <div className="nav__container">
              <a href="#home"  className="nav__logo">
                <div className="nav__logo-text">
                    <p><span>{'<'}</span> Antonio Bermudez <span>{'/>'}</span></p>
                </div>
              </a>
              <div className="mobile-icon" onClick={toggle}>
                <i className="fa-solid fa-terminal"></i>
              </div>
              <nav className="navbar">
                <ul className="navbar__list">
                  <li className="navbar__item">
                    <a href="#about" className="navbar__links">
                      <p>Sobre mí</p>
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a href="#skills" className="navbar__links">
                      <p>Tecnologías</p>
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a href="#portafolio" className="navbar__links">
                      <p>Portafolio</p>
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a href="#contact" className="navbar__links">
                      <p>Contacto</p>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
        </nav>
    </div>
  )
}

export default NavBar