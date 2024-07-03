// ProjectContext.js
import React, { createContext, useState } from 'react';
import usePersistentState from './usepersistentstate';
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [currentProject, setCurrentProject] = usePersistentState('currentProject', {});

  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

