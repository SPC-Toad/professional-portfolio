import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import PlaybackScroll from '../PlaybackScroll/PlaybackScroll';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

// Use uppercase names for imported components
import Military from '../Mobile/Military/Military';
import MobileProject from '../Mobile/Project/Project';
import MobileContact from '../Mobile/Contact/Contact';

import './Home.css';

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
      {isMobile ? <Military /> : <PlaybackScroll />}
      {isMobile ? <MobileProject /> : <Project />}
      {isMobile ? <MobileContact /> : <Contact />}
    </div>
  );
}

export default Home;
