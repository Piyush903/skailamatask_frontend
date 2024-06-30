// App.js
import React, { useState, useEffect } from 'react';
import CustomNavbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProjectDetail from './pages/projectdetails';
import { ProjectProvider } from './context/Projectcontext';

const App = () => {
  return (
    <ProjectProvider>
 <Router>
    <div className="app">
      <CustomNavbar />
      <Routes>
        <Route exact path="/" Component={Home}>
        </Route>
        <Route path="/projects/:projectId" Component={ProjectDetail} />
      </Routes>
    </div>
  </Router>
    </ProjectProvider>
   
  );
};

export default App;
