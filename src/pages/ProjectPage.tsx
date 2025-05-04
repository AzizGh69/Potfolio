import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import CustomCursor from '../components/common/CustomCursor';
import { useProjects } from '../context/ProjectsContext';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProjectById } = useProjects();
  const navigate = useNavigate();
  
  const project = getProjectById(id || '');
  
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) return null;
  
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <NavBar />
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${project.imageUrl})`,
              filter: 'brightness(0.4) blur(2px)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black"></div>
          
          <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to all projects
              </Link>
              
              <span className="text-sm font-medium text-white/70 mb-2 inline-block">
                {project.category} • {project.year}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
        
        {/* Project details */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {project.fullDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {project.secondaryImages.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={img} 
                      alt={`${project.title} detail ${idx + 1}`} 
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                
                <div className="mb-6">
                  <h4 className="text-white/70 text-sm mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white/70 text-sm mb-2">Year</h4>
                  <p>{project.year}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white/70 text-sm mb-2">Category</h4>
                  <p>{project.category}</p>
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white mb-4 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Project
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-purple-400 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    View Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Next project */}
        <div className="container mx-auto px-6 py-16 border-t border-white/10">
          <Link to="/" className="block group">
            <div className="flex flex-col items-center text-center">
              <span className="text-white/60 mb-4">Back to all projects</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                Explore more work
              </h3>
              <ArrowLeft size={24} className="transform rotate-180 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectPage;