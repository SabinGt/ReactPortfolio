import React from 'react'
import './Hero.scss'
import resume from '../../assets/Resume.pdf'

function Hero() {
  return (
    <div>
      <section>
        <div class="content">
          <div className="left-circle"></div>
          <div className="right-circle"></div>
          <div className="image-wrapper"></div>
          <div className="info-wrapper">
            <h1>Sabin</h1>
            <h1>Gautam</h1>
            <p>
              Freelance Visual Product Designer Developer Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Voluptatum at optio, error
              reiciendis, minima a laborum qui saepe harum dignissimos beatae
              rem id consequatur nobis modi corporis minus culpa! Fugiat.
            </p>

            
            <a href={resume} download="Resume">Download CV</a>
            
          </div>
        </div>
        <div className="right-icon">
          <a href="https://www.instagram.com/optimum_futurist/">
            <div class="icon1"></div>
          </a>
          <div class="icon2"></div>
          <div class="icon3"></div>
        </div>
      </section>
    </div>
  )
}

export default Hero