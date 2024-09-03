import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Military from '../Military/Military';
import './PlaybackScroll.css';

const PlaybackScroll = () => {
  const ref = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);

  // Track scroll position
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll position to frame number
  const frameNumber = useTransform(scrollYProgress, [0, 1], [1, 114]);

  // Use useMotionValueEvent to listen to scroll changes
  useMotionValueEvent(scrollY, "change", () => {
    const newFrame = Math.floor(frameNumber.get());
    setCurrentFrame(newFrame); // Update currentFrame state
  });

  return (
    <div ref={ref} style={{width: '100%', height: '400vh', position: 'relative'}}>
      <motion.div style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', overflow: 'hidden'}}>
        {
          (currentFrame > 25 && currentFrame < 92) ? 
          (
            <div>
              <Military />
            </div>
          )
          :
          <div />
        }
        <motion.img
          src={`/ranger/${currentFrame}.webp`}
          alt="scroll-frame"
          id='motion-display'
        />
      </motion.div>
    </div>
  );
};

export default PlaybackScroll;
