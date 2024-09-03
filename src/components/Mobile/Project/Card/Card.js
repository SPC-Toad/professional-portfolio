import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Card.css'

function Card({img, title, language, description, addr, color}) {
  return (
    <a href={addr} id='card-container-mobile' style={{boxShadow: `0rem 0rem 1rem ${color}`}}>
      <img src={img} alt='no-image' id='card-background-mobile'/>
      <div id='card-top-container-mobile'>
        <div id='card-title-mobile'>{title}</div>
        <div id='card-language-mobile'>{language}</div>
      </div>
      <div id='card-bottom-container-mobile'>
        <div id='card-description-mobile'>{description}</div>
        <FaArrowRight id='card-right-arrow-mobile'/>
      </div>
    </a>
  )
}

export default Card