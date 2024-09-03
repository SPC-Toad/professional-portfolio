import React, { useRef, useState, useEffect } from 'react';
import './Carousel.css';
import Card from '../Card/Card';
import CardData from './CardData';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault(); // Prevent vertical scroll

    if (e.deltaY < 0) {
      // Scrolling up (previous card)
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.deltaY > 0) {
      // Scrolling down (next card)
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, CardData.length - 1));
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild.offsetWidth;
      const carouselWidth = carouselRef.current.offsetWidth;
      const scrollLeft = (cardWidth * currentIndex) - (carouselWidth / 2) + (cardWidth / 2);
      carouselRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    // Lock or unlock body scroll based on whether the user is hovering over the carousel
    if (isHovering) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Ensure to reset the overflow when the component unmounts or if user stops hovering
      document.body.style.overflow = 'auto';
    };
  }, [isHovering]);

  return (
    <div 
      id="carousel-main-container"
    >
      <div 
        id="carousel-container" 
        ref={carouselRef} 
        onWheel={handleScroll} // Attach the wheel event listener
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {CardData.map((component, index) => (
          <a 
            href={component.addr}
            style={{paddingLeft: "1.7rem", paddingRight: "1.7rem"}}
            key={index} 
            className={index === currentIndex ? 'active' : 'inactive'}
            onClick={() => setCurrentIndex(index)}
          >
            <Card
              theme={component.theme}
              img={component.img}
              title={component.title}
              language={component.language}
              description={component.description}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
