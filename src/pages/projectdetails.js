// // ProjectDetail.js
// import React, { useState, useEffect,useContext } from 'react';
// import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios';
// import './ProjectDetail.css';
// import { useParams } from 'react-router-dom';
// import { ProjectContext } from '../context/Projectcontext';
// const ProjectDetail = ({ match, location }) => {

//   const { projectId } = useParams();
//   const { projectName } = useContext(ProjectContext);
//   const [showModal, setShowModal] = useState(false);
//   const [youtubeUrl, setYoutubeUrl] = useState('');
//   const [name, setName] = useState('');
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches?projectId=${projectId}`);
//         setRecords(response.data);
//       } catch (error) {
//         console.error('Error fetching records:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecords();
//   }, [projectId]);

//   const handleFileUpload = async (files) => {
//     const formData = new FormData();
//     formData.append('file', files[0]);
//     formData.append('projectId', projectId);

//     try {
//       await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/upload', formData);
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   const handleYoutubeSubmit = async () => {
//     try {
//       await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/', {
//         youtubeUrl,
//         name: `test${Math.floor(Math.random() * 100) + 1}`,
//         projectId
//       });
//       alert('YouTube video uploaded successfully');
//       setShowModal(false);
//     } catch (error) {
//       console.error('Error uploading YouTube video:', error);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     handleFileUpload(e.dataTransfer.files);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container className="project-detail mt-4">
//       <h1 className="text-center">{projectName}</h1>
//       <Row className="justify-content-center mt-4">
//         <Col xs={12} md={6} className="text-center">
//           <Button variant="outline-primary" className="upload-button" onClick={() => setShowModal(true)}>
//             <i className="fab fa-youtube"></i> Upload YouTube Video
//           </Button>
//           <Button variant="outline-primary" className="upload-button" onClick={() => setShowModal(true)}>
//             <i className="fas fa-upload"></i> Drag and Drop File
//           </Button>
//         </Col>
//       </Row>
//       {records.length === 0 ? (
//         <div className="text-center mt-4">
//           <p>No records found for this project.</p>
//         </div>
//       ) : (
//         <div className="records-container mt-4">
//           {/* Render records here */}
//           {records.map((record, index) => (
//             <div key={index} className="record-item">
//               {/* Display record details */}
//               <p>{record.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="youtubeUrl">
//               <Form.Label>YouTube URL</Form.Label>
//               <Form.Control
//                 type="url"
//                 value={youtubeUrl}
//                 onChange={(e) => setYoutubeUrl(e.target.value)}
//                 placeholder="Enter YouTube URL"
//               />
//             </Form.Group>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name"
//               />
//             </Form.Group>
//             <div
//               className="upload-area"
//               onDragOver={handleDragOver}
//               onDrop={handleDrop}
//             >
//               <p>Select a file or drag and drop here (MP4, MOV, MP3, WAV, PDF, DOCX or TXT file)</p>
//               <Button variant="primary">Select File</Button>
//             </div>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleYoutubeSubmit}>
//             Upload
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default ProjectDetail;
// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios';
// import './ProjectDetail.css';
// import { useParams } from 'react-router-dom';
// import { ProjectContext } from '../context/Projectcontext';

// const ProjectDetail = () => {
//   const { projectId } = useParams();
//   const { projectName } = useContext(ProjectContext);
//   const [showModal, setShowModal] = useState(false);
//   const [uploadType, setUploadType] = useState('');
//   const [youtubeUrl, setYoutubeUrl] = useState('');
//   const [name, setName] = useState('');
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches?projectId=${projectId}`);
//         setRecords(response.data);
//       } catch (error) {
//         console.error('Error fetching records:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecords();
//   }, [projectId]);

//   const handleFileUpload = async (files) => {
//     const formData = new FormData();
//     formData.append('file', files[0]);
//     formData.append('projectId', projectId);

//     try {
//       await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/upload', formData);
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   const handleYoutubeSubmit = async () => {
//     try {
//       await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/', {
//         youtubeUrl,
//         name: `test${Math.floor(Math.random() * 100) + 1}`,
//         projectId
//       });
//       alert('YouTube video uploaded successfully');
//       setShowModal(false);
//     } catch (error) {
//       console.error('Error uploading YouTube video:', error);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     handleFileUpload(e.dataTransfer.files);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container className="project-detail mt-4">
//       <h1 className="text-center">{projectName}</h1>
//       <Row className="justify-content-center mt-4">
//         <Col xs={12} md={6} className="text-center">
//           <Button 
//             variant="outline-primary" 
//             className="upload-button" 
//             onClick={() => { setUploadType('youtube'); setShowModal(true); }}
//           >
//             <i className="fab fa-youtube"></i> Upload YouTube Video
//           </Button>
//           <Button 
//             variant="outline-primary" 
//             className="upload-button" 
//             onClick={() => { setUploadType('file'); setShowModal(true); }}
//           >
//             <i className="fas fa-upload"></i> Drag and Drop File
//           </Button>
//         </Col>
//       </Row>
//       {records.length === 0 ? (
//         <div className="text-center mt-4">
//           <p>No records found for this project.</p>
//         </div>
//       ) : (
//         <div className="records-container mt-4">
//           {records.map((record, index) => (
//             <div key={index} className="record-item">
//               <p>{record.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             {uploadType === 'youtube' ? (
//               <>
//                 <Form.Group controlId="youtubeUrl">
//                   <Form.Label>YouTube URL</Form.Label>
//                   <Form.Control
//                     type="url"
//                     value={youtubeUrl}
//                     onChange={(e) => setYoutubeUrl(e.target.value)}
//                     placeholder="Enter YouTube URL"
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="name">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter name"
//                   />
//                 </Form.Group>
//               </>
//             ) : (
//               <div
//                 className="upload-area"
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//               >
//                 <p>Select a file or drag and drop here (MP4, MOV, MP3, WAV, PDF, DOCX or TXT file)</p>
//                 <Button variant="primary" onClick={() => document.getElementById('fileInput').click()}>Select File</Button>
//                 <Form.Control
//                   type="file"
//                   id="fileInput"
//                   style={{ display: 'none' }}
//                   onChange={(e) => handleFileUpload(e.target.files)}
//                 />
//               </div>
//             )}
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           {uploadType === 'youtube' && (
//             <Button variant="primary" onClick={handleYoutubeSubmit}>
//               Upload
//             </Button>
//           )}
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default ProjectDetail;
// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios';
// import './ProjectDetail.css';
// import { ProjectContext } from '../context/Projectcontext';
// import { useParams } from 'react-router-dom';
// const ProjectDetail = () => {
//   const { projectId } = useParams();
//   const { projectName } = useContext(ProjectContext);
//   const [showModal, setShowModal] = useState(false);
//   const [uploadType, setUploadType] = useState('');
//   const [youtubeUrl, setYoutubeUrl] = useState('');
//   const [name, setName] = useState('');
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches?projectId=${projectId}`);
//         setRecords(response.data);
//       } catch (error) {
//         console.error('Error fetching records:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecords();
//   }, [projectId]);

//   const handleFileUpload = async (files) => {
//     const formData = new FormData();
//     formData.append('file', files[0]);
//     formData.append('projectId', projectId);

//     try {
//       await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/upload', formData);
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   const handleYoutubeSubmit = async () => {
//     try {
//       await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/', {
//         youtubeUrl,
//         name: `test${Math.floor(Math.random() * 100) + 1}`,
//         projectId
//       });
//       alert('YouTube video uploaded successfully');
//       setShowModal(false);
//     } catch (error) {
//       console.error('Error uploading YouTube video:', error);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     handleFileUpload(e.dataTransfer.files);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container className="project-detail mt-4">
//       <h1 className="text-center">{projectName}</h1>
//       <Row className="justify-content-center mt-4">
//         <Col xs={12} md={6} className="text-center">
//           <Button 
//             variant="outline-primary" 
//             className="upload-button" 
//             onClick={() => { setUploadType('youtube'); setShowModal(true); }}
//           >
//             <i className="fab fa-youtube"></i> Upload YouTube Video
//           </Button>
//           <Button 
//             variant="outline-primary" 
//             className="upload-button" 
//             onClick={() => { setUploadType('file'); setShowModal(true); }}
//           >
//             <i className="fas fa-upload"></i> Drag and Drop File
//           </Button>
//         </Col>
//       </Row>
//       {records.length === 0 ? (
//         <div className="text-center mt-4">
//           <p>No records found for this project.</p>
//         </div>
//       ) : (
//         <div className="records-container mt-4">
//           {records.map((record, index) => (
//             <div key={index} className="record-item">
//               <p>{record.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             {uploadType === 'youtube' ? (
//               <>
//                 <Form.Group controlId="youtubeUrl">
//                   <Form.Label>YouTube URL</Form.Label>
//                   <Form.Control
//                     type="url"
//                     value={youtubeUrl}
//                     onChange={(e) => setYoutubeUrl(e.target.value)}
//                     placeholder="Enter YouTube URL"
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="name">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter name"
//                   />
//                 </Form.Group>
//               </>
//             ) : (
//               <div
//                 className="upload-area"
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//               >
//                 <p>Select a file or drag and drop here (MP4, MOV, MP3, WAV, PDF, DOCX or TXT file)</p>
//                 <Button variant="primary" onClick={() => document.getElementById('fileInput').click()}>Select File</Button>
//                 <Form.Control
//                   type="file"
//                   id="fileInput"
//                   style={{ display: 'none' }}
//                   onChange={(e) => handleFileUpload(e.target.files)}
//                 />
//               </div>
//             )}
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           {uploadType === 'youtube' && (
//             <Button variant="primary" onClick={handleYoutubeSubmit}>
//               Upload
//             </Button>
//           )}
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default ProjectDetail;
import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Modal, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import './ProjectDetail.css';
import { ProjectContext } from '../context/Projectcontext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BellFill, House,Youtube,Rss } from 'react-bootstrap-icons';
import DataTable from '../Components/Datatable';
const ProjectDetail = () => {
  const { projectId } = useParams();
  const { currentProject } = useContext(ProjectContext);
  const [showModal, setShowModal] = useState(false);
  const [uploadType, setUploadType] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [name, setName] = useState('');
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(`https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches?projectId=${projectId}`);
        console.log(response.data)
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
    formData.append('projectName', currentProject.name);
    formData.append('name', `test${Math.floor(Math.random() * 100) + 1}`);
    try {
      await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/upload', formData);
      alert('File uploaded successfully');
      setShowModal(false);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleYoutubeSubmit = async () => {
    const formData = new FormData();
    formData.append('projectName', currentProject.name);
    formData.append('name', name);
    formData.append('youtubeUrl', youtubeUrl);
    try {
      await axios.post('https://skailamatask-0a0ada9b51c8.herokuapp.com/api/speeches/',formData);
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
  console.log(currentProject.name)
  return (
    <Container className="project-detail mt-1">
      <Row className="align-items-center mb-1">
        <Col className="d-flex align-items-center">
        <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link"><House size={30} color='#7E22CE'/></Link>
            <span className="breadcrumb-divider">/</span>
            <Link to={`/projects/${projectId}`} className="breadcrumb-link">{currentProject.name}</Link>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-current">Upload</span>
          </div>
        </Col>
        <Col className="text-right d-flex align-items-center justify-content-end">
          <DropdownButton
            id="dropdown-basic-button"
            title={<span role="img" aria-label="flag">🇬🇧</span>}
            className="language-dropdown"
          >
            <Dropdown.Item ><span role="img" aria-label="britain-flag">🇬🇧</span> English</Dropdown.Item>
            <Dropdown.Item ><span role="img" aria-label="spain-flag">🇪🇸</span> Spanish</Dropdown.Item>
          </DropdownButton>
          <BellFill className="alert-icon" />
        </Col>
      </Row>
      <h1 className="text-left mx-3" style={{color:"#7E22CE",fontWeight:700}}>{currentProject.name}</h1>
      {records.length === 0 ?( <Row className="justify-content-between mt-4">
        <Col md={3} className="text-center">
          <Button 
           style={{
            backgroundColor: "white",
            border: "0.72px solid #999999",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.6)",
            borderRadius:"20px"
          }}
            className="upload-button" 
            onClick={() => { setUploadType('youtube'); setShowModal(true); }}
          >
            <Row>
              <Col xs={2} md={2}>
              <div className="button-icon">
             <Youtube/>
            </div> 
              </Col>
              <Col xs={10} md={10} style={{padding:"10px",color:"black"}}>
              Upload YouTube Video
              </Col>
            </Row>
          </Button>
              
        </Col>
          <Col md={3} className="text-center">
          </Col>
          <Col md={3}></Col>
      </Row>):( <Row className="justify-content-between mt-4">
        <Col md={3} className="text-center">
          <Button 
           style={{
            backgroundColor: "white",
            border: "0.72px solid #999999",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.6)",
            borderRadius:"20px"
          }}
            className="upload-button" 
            onClick={() => { setUploadType('youtube'); setShowModal(true); }}
          >
            <Row>
              <Col xs={2} md={2}>
              <div className="button-icon">
             <Youtube/>
            </div> 
              </Col>
              <Col xs={10} md={10} style={{padding:"10px",color:"black"}}>
              Upload YouTube Video
              </Col>
            </Row>
          </Button>
              
        </Col>
          <Col md={3} className="text-center">
          <Button 
           style={{
            backgroundColor: "white",
            border: "0.72px solid #999999",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.6)",
            borderRadius:"20px"
          }}
            className="upload-button" 
            onClick={() => { setUploadType('file'); setShowModal(true); }}
          >
           <Row>
              <Col xs={2} md={2}>
              <div className="button-icon1">
             <Rss/>
            </div> 
              </Col>
              <Col xs={10} md={10} style={{padding:"10px",color:"black"}}>
              Upload File
              </Col>
            </Row>
          </Button>
          </Col>
          <Col md={3}></Col>
      </Row>)}
    
      <hr/>
      {records.length === 0 ? (
         <div
                         className="upload-area mt-4"
                         onDragOver={handleDragOver}
                         onDrop={handleDrop}
                       >
                         <p>Select a file or drag and drop here (MP4, MOV, MP3, WAV, PDF, DOCX or TXT file)</p>
                         <Button variant="primary" onClick={() => document.getElementById('fileInput').click()}>Select File</Button>
                         <Form.Control
                           type="file"
                           id="fileInput"
                           style={{ display: 'none' }}
                           onChange={(e) => handleFileUpload(e.target.files)}
                         />
                       </div>
      ) : (
        // <div className="records-container mt-4">
        //   {records.map((record, index) => (
        //     <div key={index} className="record-item">
        //       <p>{record.name}</p>
        //     </div>
        //   ))}
        // </div>
        <DataTable data={records} projectId={projectId}/>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {uploadType === 'youtube' ? (
              <>
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
              </>
            ) : (
              <div
                className="upload-area"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <p>Select a file or drag and drop here (MP4, MOV, MP3, WAV, PDF, DOCX or TXT file)</p>
                <Button variant="primary" onClick={() => document.getElementById('fileInput').click()}>Select File</Button>
                <Form.Control
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {uploadType === 'youtube' && (
            <Button variant="primary" onClick={handleYoutubeSubmit}>
              Upload
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProjectDetail;
