// ProjectDetail.js
import React, { useState, useEffect,useContext } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import './ProjectDetail.css';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../context/Projectcontext';
const ProjectDetail = ({ match, location }) => {

  const { projectId } = useParams();
  const { projectName } = useContext(ProjectContext);
  const [showModal, setShowModal] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [name, setName] = useState('');
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches?projectId=${projectId}`);
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching records:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [projectId]);

  const handleFileUpload = async (files) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('projectId', projectId);

    try {
      await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/upload', formData);
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleYoutubeSubmit = async () => {
    try {
      await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/', {
        youtubeUrl,
        name: `test${Math.floor(Math.random() * 100) + 1}`,
        projectId
      });
      alert('YouTube video uploaded successfully');
      setShowModal(false);
    } catch (error) {
      console.error('Error uploading YouTube video:', error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileUpload(e.dataTransfer.files);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="project-detail mt-4">
      <h1 className="text-center">{projectName}</h1>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <Button variant="outline-primary" className="upload-button" onClick={() => setShowModal(true)}>
            <i className="fab fa-youtube"></i> Upload YouTube Video
          </Button>
          <Button variant="outline-primary" className="upload-button" onClick={() => setShowModal(true)}>
            <i className="fas fa-upload"></i> Drag and Drop File
          </Button>
        </Col>
      </Row>
      {records.length === 0 ? (
        <div className="text-center mt-4">
          <p>No records found for this project.</p>
        </div>
      ) : (
        <div className="records-container mt-4">
          {/* Render records here */}
          {records.map((record, index) => (
            <div key={index} className="record-item">
              {/* Display record details */}
              <p>{record.name}</p>
            </div>
          ))}
        </div>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="youtubeUrl">
              <Form.Label>YouTube URL</Form.Label>
              <Form.Control
                type="url"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="Enter YouTube URL"
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </Form.Group>
            <div
              className="upload-area"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <p>Select a file or drag and drop here (MP4, MOV, MP3, WAV, PDF, DOCX or TXT file)</p>
              <Button variant="primary">Select File</Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleYoutubeSubmit}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProjectDetail;
