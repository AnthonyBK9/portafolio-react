import React from 'react'
import './style/portafolio.css'
import images from '../../assets/js/images'

const Portafolio = () => {
  return (
    <div className="portfolio" id="portafolio">
      <div className="portfolio-container">
          <div className="portafolio-content">
            <h2 className="portfolio-title">Portafolio</h2>
          </div>
          <div className="card-container">
            <div className="card">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="card-content">
                <h2>1</h2>
                  <img src={images[2].img} alt={images[2].title} />
                    <h3>Cards</h3>
                      <p>Muestra distintas cards cambiando los mensajes y los colores</p>
                <div className="social-buttons">
                  <a href="#" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="social-buttons__button social-button social-button--codepen" aria-label="CodePen">
                    <i className="fa-solid fa-globe"></i>
                  </a>     
                </div>
              </div>
            </div>
            <div className="card">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="card-content">
                <h2>2</h2>
                  <img src={images[3].img} alt={images[3].title} />
                    <h3>App Clima</h3>
                      <p>Aplicación para conocer el clima de tu hubicación haciendo una consulta a aun API</p>
                <div className="social-buttons">
                  <a href="#" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="social-buttons__button social-button social-button--codepen" aria-label="CodePen">
                    <i className="fa-solid fa-globe"></i>
                  </a>     
                </div>
              </div>
            </div>
            <div className="card">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="card-content">
                <h2>3</h2>
                  <img src={images[4].img} alt={images[4].title} />
                    <h3>Rick and Morty App</h3>
                      <p>Aplicación de Rick y Morty en el que se muestran contenido de los diferentes pesonajes de esta popular serie animada</p>
                <div className="social-buttons">
                  <a href="#" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="social-buttons__button social-button social-button--codepen" aria-label="CodePen">
                    <i className="fa-solid fa-globe"></i>
                  </a>     
                </div>
              </div>
            </div>
          </div>
      </div>  
    </div>
  )
}

export default Portafolio