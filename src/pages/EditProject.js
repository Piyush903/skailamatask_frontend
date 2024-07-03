import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ProjectContext } from '../context/Projectcontext';
import { House } from 'react-bootstrap-icons';
import './customtextarea.css'; // Import your custom CSS file for styling

const EditPage = () => {
  const { projectId, id } = useParams();
  const { currentProject } = useContext(ProjectContext);
  const [record, setRecord] = useState({});
  const [name, setName] = useState('');
  const [transcription, setTranscription] = useState('');
  const [editMode, setEditMode] = useState(false); // State to manage edit mode
  const history = useNavigate();

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/${id}`);
        setRecord(response.data);
        setName(response.data.name);
        setTranscription(response.data.transcription);
      } catch (error) {
        console.error('Error fetching record:', error);
      }
    };

    fetchRecord();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/${id}`, {
        name,
        transcription
      });
      alert('Record updated successfully');
      history(`/projects/${projectId}`);
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  const handleDiscard = () => {
    // Reset form fields to original values
    setName(record.name);
    setTranscription(record.transcription);
    setEditMode(false); // Exit edit mode
  };

  const handleToggleEditMode = () => {
    setEditMode(true);
  };

  const onChange = (e) => {
    setTranscription(e.target.value);
  };

  const value = transcription; // Value for textarea

  return (
    <Container>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link"><House size={30} color='#7E22CE' /></Link>
        <span className="breadcrumb-divider">/</span>
        <Link to={`/projects/${projectId}`} className="breadcrumb-link">{currentProject.name}</Link>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">Transcript</span>
      </div>
      <h1 className="text-left mx-3" style={{ color: "#7E22CE", fontWeight: 700 }}>Edit Transcript</h1>
      {editMode && (
          <div className="edit-mode-controls text-right my-2">
            <Button variant="outline-secondary" size="sm" onClick={handleDiscard}>
              Discard
            </Button>
            <Button variant="primary" size="sm" className="ml-2" onClick={handleSubmit}>
              Save and Next
            </Button>
          </div>
        )}
      <div className="canvas-container">
        <div className="custom-text-area">
          <Form.Control
            as="textarea"
            rows={20}
            value={value}
            onChange={onChange}
            disabled={!editMode}
            className="custom-text-area-input"
          />
        </div>
        {!editMode && (
          <Button
            variant="primary"
            size="sm"
            className="edit-mode-button"
            onClick={handleToggleEditMode}
          >
            Edit Mode
          </Button>
        )}
      </div>
    </Container>
  );
};

export default EditPage;
