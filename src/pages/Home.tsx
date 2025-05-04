import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxContainer from '../components/layout/ParallaxContainer';
import ProjectSection from '../components/layout/ProjectSection';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import CustomCursor from '../components/common/CustomCursor';
import { useProjects } from '../context/ProjectsContext';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const { allProjects } = useProjects();
  
  return (
    <ParallaxProvider>
      <div className="bg-black text-white overflow-hidden">
        <CustomCursor />
        <NavBar />
        
        <ParallaxContainer>
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Rahma
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Corporation
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-center max-w-2xl text-white/80 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Showcasing innovative projects at the intersection of design and technology. 
              Scroll to explore my work and discover the stories behind each creation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.a 
                href="#project1"
                className="flex flex-col items-center group"
                animate={{ 
                  y: [0, 10, 0], 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
              >
                <span className="text-white/60 mb-2 group-hover:text-white transition-colors">Scroll to explore</span>
                <ChevronDown className="text-white/60 group-hover:text-white transition-colors" />
              </motion.a>
            </motion.div>
            
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
          </section>
          
          {/* Project Sections */}
          {allProjects.map((project, index) => (
            <ProjectSection 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
          
          {/* Contact Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Create
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block">
                  Something Amazing
                </span>
              </h2>
              <p className="text-lg text-white/80 mb-10">
                Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative collaborations.
              </p>
              <a 
                href="mailto:example@example.com" 
                className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </section>
          
          <Footer />
        </ParallaxContainer>
      </div>
    </ParallaxProvider>
  );
};

export default Home;