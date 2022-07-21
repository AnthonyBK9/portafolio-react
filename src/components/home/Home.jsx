import React from 'react'
import video from '../../assets/video/video.mp4'
import './style/home.css'

const Home = () => {

  return (
    <div className="home" id="home">
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-title">Desarrollador Web Front End</h1>
            <p className="home-experience">Con experiencia en React y NodeJS</p>
            <div className="center">
              <button className="btn">
                <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                  <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                  <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                </svg>
                <a className='home-cv' href='/AntonioBermudezCV.pdf' target='blank'>Descargar CV</a>
              </button>
            </div>
            <div className='content'>
              <div className='visible'>
                <p className="p">
                  ¡Hola
                </p>
                <ul className="ul">
                  <li className="li"> Mundo!</li>
                  <li className="li"> react!</li>
                  <li className="li"> usuario!</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home-video">
            <video src={video} autoPlay loop muted type='video/mp4' className="home-video"/>
          </div>
          <div className="overflow"></div>
        </div>
    </div>  
  )
}

export default Home