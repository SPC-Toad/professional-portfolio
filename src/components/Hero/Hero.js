import React from 'react'
import background from '../image/hero_background.jpeg'
import { FaArrowRight } from "react-icons/fa";
import resume from '../File/resume.pdf'
import './Hero.css'

function Hero() {
  
  const number = Math.floor(Math.random() * 6) + 1;

  return (
    <div className='hero-container' id='Hero'>
      <img src={background} alt='background' className='hero-background-img'/>
      <div className='left-handside-container'>
        <div id='hero-title'>Sangyun Kim</div>
        <div className='hero-detail-container'>
          <hr id='hero-red-line'/>
          <div className='description-button-container'>
            <div id='hero-intro'>A Software Engineer and US Army Reservist</div>
            <div id='hero-detail'>Currently pursuing a Bachelor&#39;s degree in Computer Science at Boston University</div>
            <a href={resume} className='hero-button-container'> 
              <div id='hero-button'>RESUME</div>
              <FaArrowRight id='button-arrow'/>
            </a>
          </div>
        </div>
      </div>
      <div className='image-container'>
        <img src={`/army_imgs/${number}.jpg`} alt="no-img" id='hero-img'/>
      </div>
    </div>
  )
}

export default Hero