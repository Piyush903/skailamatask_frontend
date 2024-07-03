import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DataTable = ({ data,projectId }) => {
  const history = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await axios.delete(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/${id}`);
        alert('Record deleted successfully');
        window.location.reload();
      } catch (error) {
        console.error('Error deleting record:', error);
      }
    }
  };

  const handleEdit = (id) => {
    history(`/projects/${projectId}/edit/${id}`);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Upload Time</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(record => (
          <tr key={record._id}>
            <td>{record.name}</td>
            <td>{new Date(record.createdAt).toLocaleString()}</td>
            <td>{record.transcription ? 'Completed' : 'Pending'}</td>
            <td>
              <Button variant="info" onClick={() => handleEdit(record._id)}>Edit</Button>
              {' '}
              <Button variant="danger" onClick={() => handleDelete(record._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
