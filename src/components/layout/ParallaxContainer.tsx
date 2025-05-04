import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useProjects } from '../../context/ProjectsContext';

interface ParallaxContainerProps {
  children: React.ReactNode;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const { allProjects, setActiveProjectId } = useProjects();
  
  // Background parallax effect
  const backgroundY = useTransform(scrollY, [0, 3000], [0, -300]);
  
  // Find the active project based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const sectionHeight = window.innerHeight;
      const currentScrollPos = window.scrollY;
      const activeIndex = Math.floor(currentScrollPos / sectionHeight);
      
      if (allProjects[activeIndex]) {
        setActiveProjectId(allProjects[activeIndex].id);
      } else {
        setActiveProjectId(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allProjects, setActiveProjectId]);
  
  return (
    <div className="relative" ref={containerRef}>
      {/* Fixed background with parallax effect */}
      <motion.div 
        className="fixed inset-0 w-full h-full bg-black z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        
        {/* Particle grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-white/70 rounded-full mt-1"
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.7, 0.2, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ParallaxContainer;