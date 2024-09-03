import React, { useRef, useState, useEffect } from 'react';
import './Card.css'

function Card({theme, img, title, language, description, addr}) {

    const cardRef = useRef();
  
    const degOfTilt = 15;
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event) => {
      var rect = cardRef.current.getBoundingClientRect();
      
      // Location of the card
      var w = rect.left;
      var h = rect.top;
  
      var box_width = rect.right - w;
      var box_height = rect.bottom - h;
  
      // Location of the mouse pointer
      var mouse_X = event.clientX;
      var mouse_Y = event.clientY;
      
      var x = mouse_X - w;
      var y = mouse_Y - h;
  
      // find f(X) where it passes thru (x_1, theta_1) and (x_2, theta_2)
      var m_X = (degOfTilt + degOfTilt) / (-1 * box_width);
      var m_Y = -1 * (degOfTilt + degOfTilt) / (-1 * box_height);
  
      var rotateX = m_Y * y - degOfTilt;
      var rotateY = m_X * x + degOfTilt;
  
      setTilt({ x: rotateX, y: rotateY});
    };
  
    const mouseOutHandler = () => {
      setTilt({ x: 0, y: 0});
    };
  
    useEffect(() => {
      const card = cardRef.current;
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseout', mouseOutHandler);
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseout', mouseOutHandler);
      };
    }, []);
    return (
        <a href={addr} id='card-container' ref={cardRef} style={{ background: theme, transform: `perspective(350px) rotate3d(1, 0, 0, ${tilt.x}deg) rotate3d(0, 1, 0, ${tilt.y}deg)` }}>
            <img src={img} alt='' id='card-image'/>
            <div id='card-title'>{title}</div>
            <div id='card-language'>{language}</div>
            <div id='description'>{description}</div>
        </a>
    )
}

export default Card