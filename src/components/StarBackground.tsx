
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  blinkSpeed: number;
  timeOffset: number;
}

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();  // Initial setup

    // Generate stars
    function generateStars() {
      const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 1000);
      const stars: Star[] = [];
      
      for (let i = 0; i < numberOfStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          blinkSpeed: Math.random() * 0.01 + 0.005,
          timeOffset: Math.random() * 1000
        });
      }
      
      starsRef.current = stars;
    }
    
    // Animation
    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.02;
      
      starsRef.current.forEach((star) => {
        const currentOpacity = star.opacity + Math.sin((time + star.timeOffset) * star.blinkSpeed) * 0.3;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarBackground;
