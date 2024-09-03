import React from 'react'
import "./Military.css"

function Military() {
  return (
    <div id='military-container'>
        <video src='/ranger/ranger.mp4' alt='video' id='military-video' autoPlay muted loop/>
        <div id='military-context-container'>
            <div id='military-context-text'>
              I am a <span style={{fontSize: '1.1rem', fontWeight: 'bold',backgroundColor: 'transparent'}}>Special Agent</span> in training with the United States Army Reserve.
            </div>
            <div id='military-context-text'>
            <span style={{fontSize: '1.1rem', fontWeight: 'bold',backgroundColor: 'transparent'}}>Counterintelligence Agent</span> conducts investigations, collects and processes forensic and physical evidence to identify and detect foreign intelligence and international terrorist threats, and plan the appropriate countermeasures to neutralize them
            </div>
        </div>
    </div>
  )
}

export default Military