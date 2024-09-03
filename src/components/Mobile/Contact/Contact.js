import React from 'react'
import './Contact.css'
import Cube from '../../Cube/Cube'
import linkedin from "../../image/linkedin.png"
import github from "../../image/github.jpg"

function Contact() {
  return (
    <div id='contact-container-mobile'>
      <div style={{height: "10vh"}}>
        <div style={{width: "100%", height: "10vh",alignItems:"center", letterSpacing: ".1rem", display: "flex", justifyContent: "center"}}>
          Contact
        </div>
      </div>
      <div id='contact-icons-container-mobile'>
        <div id='contact-icon-container-mobile'>
          <Cube img={linkedin} position={[0, 0, 0]} link={"https://linkedin.com/in/sangyun-kim/"}/>
        </div>
        <div id='contact-icon-container-mobile'>
          <Cube img={github} position={[0, 0, 0]} link={"https://github.com/SPC-Toad"}/>
        </div>
      </div>
      <div id='copyright-container-mobile'>
        <div id='copyright-text'>
          Copyright ©2024 Sangyun Kim
        </div>
        <div id='copyright-text'>
          Image Source: United States Army
        </div>
      </div>
    </div>
  )
}

export default Contact