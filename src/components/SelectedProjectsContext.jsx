import React, { createContext, useState } from "react";

export const SelectedProjectsContext = createContext();

export const SelectedProjectsProvider = ({ children }) => {
  const [selectedProjects, setSelectedProjects] = useState([]);

  const addSelectedProject = (project) => {
    setSelectedProjects((prev) => [...prev, project]);
  };

  const removeSelectedProject = (id) => {
    setSelectedProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return (
    <SelectedProjectsContext.Provider
      value={{ selectedProjects, addSelectedProject, removeSelectedProject }}
    >
      {children}
    </SelectedProjectsContext.Provider>
  );
};