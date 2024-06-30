// Card.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../context/Projectcontext';
import './cards.css';

const ProjectCard = ({ project }) => {
  const [recordCount, setRecordCount] = useState(0);
  const { setCurrentProject } = useContext(ProjectContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecordCount = async () => {
      try {
        const response = await axios.get(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches?projectId=${project._id}`);
        setRecordCount(response.data.length);
      } catch (error) {
        console.error('Error fetching record count:', error);
      }
    };

    fetchRecordCount();
  }, [project._id]);

  const randomColor = Math.random() < 0.5 ? 'palegoldenrod' : 'purple';

  const handleCardClick = () => {
    setCurrentProject({ name: project.name, id: project._id });
    navigate(`/projects/${project._id}`);
  };

  return (
    <Card className="custom-card" onClick={handleCardClick}>
      <Card.Body>
        <Row noGutters>
          <Col xs={5} className="d-flex align-items-center justify-content-center">
            <div className="color-square" style={{ backgroundColor: randomColor }}>
              <span className="initials">{project.name.charAt(0)}</span>
            </div>
          </Col>
          <Col xs={7}>
            <Card.Title className="project-title">{project.name}</Card.Title>
            <Card.Text className="record-count">{`${recordCount} Episodes`}</Card.Text>
            <Card.Text className="last-edited">Last edited a week ago</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
