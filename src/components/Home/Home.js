import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import PlaybackScroll from '../PlaybackScroll/PlaybackScroll'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

import M_Military from '../Mobile/Military/Military'
import M_Project from '../Mobile/Project/Project'
import M_Contact from '../Mobile/Contact/Contact'

import './Home.css'

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div className='home-container'>
      <Hero />
      { isMobile ? <M_Military /> : <PlaybackScroll /> }
      { isMobile ? <M_Project /> : <Project /> }
      { isMobile ? <M_Contact /> : <Contact /> }
    </div>
  )
}

export default Home;
