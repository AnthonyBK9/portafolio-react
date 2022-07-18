import React from 'react'
import './style/skills.css'
import images from '../../assets/js/images.js'

const Skills = () => {
  return (
    <div id="skills" className="skills">
        <div className="skills-container">
          <div className="row-skills">
            <div className="col-1-skill">
              <h2 className="skills-title">Habilidades Tecnológicas</h2>
              <img src={images[1].img} alt={images[1].title} />
            </div>
            <div className="cal-2-skill">
              <div className="skills-item">
                <div className="skillis-item-s">
                  <div className="social-buttons-s">
                    <div className="social-content">
                      <p className="social-title social-button--html">HTML5</p>
                      <div className="social-buttons__button social-button-s social-button--html" aria-label="LinkedIn">
                        <i className="fa-brands fa-html5"></i>
                      </div>
                    </div>
                    <div className="social-content">
                      <p className="social-title social-button--css">CSS3</p>
                      <div className="social-buttons__button social-button-s social-button--css" aria-label="Facebook">
                        <i className="fa-brands fa-css3-alt"></i>
                      </div>
                    </div>
                    <div className="social-content">
                      <p className="social-title social-button--javascript">Javascript</p>
                      <div className="social-buttons__button social-button-s social-button--javascript" aria-label="CodePen">
                        <i className="fa-brands fa-js-square"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skillis-item-s">
                  <div className="social-buttons-s">
                    <div className="social-content">
                      <p className="social-title social-button--github">GitHub</p>
                      <div className="social-buttons__button social-button-s social-button--github" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </div>
                    </div>
                    <div className="social-content">
                      <p className="social-title social-button--react">React</p>
                      <div className="social-buttons__button social-button-s social-button--react" aria-label="SnapChat">
                        <i className="fa-brands fa-react"></i>
                      </div>
                    </div>
                    <div className="social-content">
                      <p className="social-title social-button--bootstrap">Bootstrap</p>
                      <div className="social-buttons__button social-button-s social-button--bootstrap" aria-label="CodePen">
                        <i className="fa-brands fa-bootstrap"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills