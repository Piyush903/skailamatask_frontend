import React from 'react';
import CustomNavbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProjectDetail from './pages/projectdetails';
import { ProjectProvider } from './context/Projectcontext';
import Sidebar from './Components/Sidebar';
import Chatbotconfig from './pages/Chatbotconfig';
import EditPage from './pages/EditProject';
const App = () => {
  return (
    <ProjectProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<Sidebar />}>
              <Route path="" element={<ProjectDetail />} />
              <Route path="chatbot" element={<Chatbotconfig/>} />
              <Route path="edit/:id" element={<EditPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ProjectProvider>
  );
};

export default App;
