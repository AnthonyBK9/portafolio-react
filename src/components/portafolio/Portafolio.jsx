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
              <div className="card-img">
                <img src={images[2].img} alt={images[2].title} />
              </div>
              <div className="card-content">
                <h2 className="card-info move">Cards</h2>
                <div className="card-info move">
                  <p>Creaciòn de card con contenido aleatorio y cambio de colores</p>
                </div>
              </div>
              <div className="card-icon">
                <li className="card-item">
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className="card-item">
                  <a href="#">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </li>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={images[3].img} alt={images[3].title} />
              </div>
              <div className="card-content">
                <h2 className="card-info move">Whater-App</h2>
                <div className="card-info move">
                  <p>Aplicación que permite saber el clima de acuerdo a tu hubicación</p>
                </div>
              </div>
              <div className="card-icon">
                <li className="card-item">
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className="card-item">
                  <a href="#">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </li>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={images[4].img} alt={images[4].title} />
              </div>
              <div className="card-content">
                <h2 className="card-info move">Rick And Morty</h2>
                <div className="card-info move">
                  <p>Divertida aplicación en el cual descubriras infromación de los personajes de esta divertida serie</p>
                </div>
              </div>
              <div className="card-icon">
                <li className="card-item">
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className="card-item">
                  <a href="#">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </li>
              </div>
            </div>
          </div>
      </div>  
    </div>
  )
}

export default Portafolio