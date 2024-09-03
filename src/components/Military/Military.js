import React from 'react'
import './Military.css';
import Army from '../image/army.png';

function Military() {
  return (
    <div className='military-container'>
        <div className='military-left-container'>
            <img src={Army} alt='rank' id='army-img'/>
            <div id='military-title'>Military Experience</div>
        </div>
        <div className='military-right-container'>
            <p id='military-description-bold'>
              I am a Special Agent in training with the United States Army Reserve.
            </p>
            <p id='military-description'>
              Counterintelligence Agent conducts investigations, collects and processes forensic and physical evidence to
              identify and detect foreign intelligence and international terrorist threats, and plan the appropriate
              countermeasures to neutralize them
            </p>
        </div>
    </div>
  )
}

export default Military