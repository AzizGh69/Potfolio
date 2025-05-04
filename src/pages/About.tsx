import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import CustomCursor from '../components/common/CustomCursor';
import { ArrowRight, Code, Figma, Globe, Palette } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <NavBar />
      
      <div className="pt-24 pb-16">
        {/* Hero section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a creative technologist passionate about building innovative digital experiences
              that blend art, design, and technology. With expertise in both front-end and back-end
              development, I create solutions that are not only visually stunning but also functionally robust.
            </motion.p>
          </div>
        </div>
        
        {/* Skills */}
        <div className="bg-white/5">
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Code size={36} className="mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-white/70">
                  Building responsive, accessible, and performant websites using modern frameworks and technologies.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Palette size={36} className="mb-4 text-pink-400" />
                <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                <p className="text-white/70">
                  Creating intuitive user interfaces and engaging user experiences that prioritize usability.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Figma size={36} className="mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-3">Interactive Design</h3>
                <p className="text-white/70">
                  Designing and developing interactive experiences with animations and engaging user interactions.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Globe size={36} className="mb-4 text-green-400" />
                <h3 className="text-xl font-bold mb-3">Digital Strategy</h3>
                <p className="text-white/70">
                  Developing comprehensive digital strategies that align with business goals and user needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bio section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <p className="text-white/80 mb-4 leading-relaxed">
                With over 8 years of experience in the digital space, I've had the privilege of working with startups, agencies, and enterprise clients across various industries.
              </p>
              <p className="text-white/80 mb-4 leading-relaxed">
                My approach combines technical expertise with creative thinking, allowing me to tackle complex problems with innovative solutions. I believe in the power of technology to create meaningful experiences that connect people and ideas.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or seeking inspiration in art, music, and nature.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 text-white font-medium border-b-2 border-white/0 hover:border-white transition-all group"
              >
                Get in touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-xl overflow-hidden relative"
            >
              <img 
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;