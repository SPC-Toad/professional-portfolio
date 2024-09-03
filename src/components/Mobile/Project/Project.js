import React from 'react'
import './Project.css'

import Card from './Card/Card'
import CardData from '../../Carousel/CardData'

function Project() {
  return (
    <div id='project-container'>
      <div id='slider-container'>
        {/* This is where map is going be */}
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
        {CardData.map((component, index) => (
          <Card
            color={component.color}
            key={index}
            img={component.img}
            title={component.title}
            language={component.language}
            description={component.description}
            addr={component.addr}
          />
        ))}
      </div>
    </div>
  )
}

export default Project