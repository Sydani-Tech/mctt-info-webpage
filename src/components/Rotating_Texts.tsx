import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedText() {
  const texts = ["Microplanning", "Service Delivery", "Coverage"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const element = textRef.current;
      
      // Animate out (scroll up and fade)
      gsap.to(element, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => {
          // Change text
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          
          // Reset position for animate in
          gsap.set(element, {
            y: 50,
            opacity: 0
          });
          
          // Animate in (scroll up and fade in)
          gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      });
    };

    // Start animation cycle
    const interval = setInterval(animateText, 4000);

    // Initial animation in
    gsap.fromTo(textRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );

    return () => clearInterval(interval);
  }, []);

  return (
        <>
          <div className='md:h-18 overflow-y-hidden flex items-center'>
            <p
          ref={textRef}
          className="lg:text-6xl font-bold py-1 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent"
        > 
          {texts[currentIndex]}
        </p>
          </div>
        </>
  );
}