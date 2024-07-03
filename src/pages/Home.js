// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from '../Components/Navbar';
import CustomModal from '../Components/Modal';
import ProjectCard from '../Components/Card';
import { PlusCircle } from 'react-bootstrap-icons';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../App.css"

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/projects/');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
    <CustomNavbar />
      {projects.length === 0 ? (
        <Container className="mt-4 text-center">
          <Row className="justify-content-center">
            <Col md="auto">
              <img src="your-image-url" alt="Placeholder" className="img-fluid" />
              <p>Your text here</p>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                <i className="fas fa-plus"></i> Create New Project
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="mt-4">
          <Row className=" d-flex justify-content-between mb-3">
            <div></div>
            <Button className='ml-auto' style={{backgroundColor:"#211935",borderColor:"#211935"}} variant="primary" onClick={() => setShowModal(true)}>
                <PlusCircle size={20}/> Create New Project
              </Button>
          </Row>
          <Row>
                  {projects.map((project) => (
                    <Col key={project._id} md={4} className="mb-4">
                      <ProjectCard project={project} />
                    </Col>
                  ))}
                </Row>
        </Container>
      )}
      <CustomModal show={showModal} onClose={() => setShowModal(false)} addProject={addProject} />
    </div>
  );
};

export default Home;
