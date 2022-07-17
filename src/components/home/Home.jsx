import React from 'react'
import video from '../../assets/video/video.mp4'
import './style/home.css'

const Home = () => {
  
  return (
    <div className="home-container" id="home">
        <div className="home-bg">
          <video src={video} autoPlay loop muted type='video/mp4' className="home-video"/>
        </div>
        <div className="home-content">
          <h1 className="home-title">Desarrollador Web Front End</h1>
          <h2 className="home-name">Antonio Bermudez</h2>
        </div>
    </div>  
  )
}

export default Home