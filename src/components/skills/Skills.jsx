import React from 'react'
import './style/skills.css'
import images from '../../assets/js/images.js'

const Skills = () => {
  return (
    <div id="skills" className="skills">
        <div className="skills-container">
          <div className="row-skills">
            <div className="col-1-skill">
              <h2>Habilidades Tecnológicas</h2>
              <img src={images[1].img} alt={images[1].title} />
            </div>
            <div className="cal-2-skill">
              <div className="skills-item">
                <div className="skillis-item-s">
                  <div class="social-buttons-s">
                    <div class="social-buttons__button social-button-s social-button--html" aria-label="LinkedIn">
                      <i className="fa-brands fa-html5"></i>
                    </div>
                    <div class="social-buttons__button social-button-s social-button--css" aria-label="Facebook">
                      <i className="fa-brands fa-css3-alt"></i>
                    </div>
                    <div class="social-buttons__button social-button-s social-button--react" aria-label="SnapChat">
                      <i className="fa-brands fa-react"></i>
                    </div>
                  </div>
                </div>
                <div className="skillis-item-s">
                  <div class="social-buttons-s">
                    <div class="social-buttons__button social-button-s social-button--github" aria-label="GitHub">
                      <i class="fab fa-github"></i>
                    </div>
                    <div class="social-buttons__button social-button-s social-button--javascript" aria-label="CodePen">
                      <i className="fa-brands fa-js-square"></i>
                    </div>
                    <div class="social-buttons__button social-button-s social-button--bootstrap" aria-label="CodePen">
                      <i class="fa-brands fa-bootstrap"></i>
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