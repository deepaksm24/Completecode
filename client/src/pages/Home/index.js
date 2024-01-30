import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Homepage from "../../pages/NewProjectAB/Homepage"; // Replace with the actual path to Homepage
import NewProject from "../NewProject/NewProject"; // Replace with the actual path to NewProject

// Main App component
const MainHome = () => {
  const [showHomepage, setShowHomepage] = useState(false);
  const [showNewProject, setShowNewProject] = useState(false);

  const handleOpenHomepage = () => {
    setShowHomepage(true);
    setShowNewProject(false);
  };

  const handleOpenNewProject = () => {
    setShowHomepage(false);
    setShowNewProject(true);
  };

  return (
    <div>
      <Button variant="contained" color="primary" 
      className="m-3"
      onClick={handleOpenHomepage}>
        Edit Project
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpenNewProject}
      >
        Create New Project
      </Button>

      {/* Conditional rendering based on button clicks */}
      {showHomepage && <Homepage />}
      {showNewProject && <NewProject />}
    </div>
  );
};

export default MainHome;
