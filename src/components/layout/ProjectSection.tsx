import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const isEven = index % 2 === 0;
  const isThird = index % 3 === 0;
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1, 0.8, 0]);
  
  // Get initial animation values based on index
  const getInitialAnimation = () => {
    if (isThird) {
      return { opacity: 0, y: 100, scale: 0.9 }; // Coming from bottom
    }
    return { opacity: 0, x: isEven ? -100 : 100, scale: 0.9 }; // Alternating left/right
  };
  
  return (
    <motion.div 
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ opacity }}
      id={project.id}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y }}
          className="h-full w-full absolute"
        >
          <div 
            className="h-full w-full bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${project.imageUrl})`,
              filter: 'blur(2px) brightness(0.4)'
            }}
          />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          className={`w-full lg:w-1/2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          style={{ y: textY }}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-white/70 mb-2 inline-block">
            {project.category} • {project.year}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {project.title}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link 
            to={`/project/${project.id}`} 
            className="inline-flex items-center gap-2 text-white font-medium border-b-2 border-white/0 hover:border-white transition-all group"
          >
            View Project Details
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div 
          className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          initial={getInitialAnimation()}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          viewport={{ once: true }}
        >
          <div 
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            style={{ 
              backgroundColor: project.color, 
              backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.2), transparent 60%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="object-cover object-center w-full h-full mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;