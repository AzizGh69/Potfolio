import React, { createContext, useContext, useState } from 'react';
import { Project } from '../types';
import { projects } from '../data/projects';

interface ProjectsContextType {
  allProjects: Project[];
  activeProjectId: string | null;
  setActiveProjectId: (id: string | null) => void;
  getProjectById: (id: string) => Project | undefined;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
  };

  return (
    <ProjectsContext.Provider value={{
      allProjects: projects,
      activeProjectId,
      setActiveProjectId,
      getProjectById
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};