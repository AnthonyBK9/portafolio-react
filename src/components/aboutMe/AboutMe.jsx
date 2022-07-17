import React from 'react'
import './style/about.css'
import images from '../../assets/js/images'

const AboutMe = () => {
  return (
    <div className="about" id="about">
        <div className="about-container">
          <div className="row">
            <div className="col-1">
              <div className="about-content">
                <h2 className="about-title">Sobre mí</h2>
                <p className="about-text">Desarrollador web Front End. Me considero una persona
                    creativa, organizadora, amable, responsable, apasionada
                    por aprender nuevas tecnologías, trabajo muy bien en
                    equipo y me gusta tomar la iniciativa en soluciones de
                    problemas, con una sólida ética de trabajo.</p>
              </div>
            </div>
            <div className="col-2">
              <img src={images[0].img} alt={images[0].title} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe