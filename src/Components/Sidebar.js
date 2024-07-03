import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../images/logo.png';

const Sidebar = () => {
  const { projectId } = useParams();
  const location = useLocation();

  return (
    <Container fluid>
      <Row className="flex-nowrap">
        <Col xs="auto" md={3} xl={2} className="px-sm-2 px-0 bg-dark">
          <Navbar.Brand className="bg-dark">
            <Row>
              <Col>
                <Image src={logo} style={{ width: '50px', height: '50px' }} />
              </Col>
              <span style={{ color: '#7E22CE', fontSize: '28px', fontWeight: '800', fontFamily: 'Plus Jakarta Sans' }}>LAMA</span>
              <Col></Col>
            </Row>
          </Navbar.Brand>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            {/* Menu Header */}
            <Nav className="nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to={`/projects/${projectId}`}
                  className={`nav-link custom-link align-middle px-0 ${location.pathname === `/projects/${projectId}` ? 'active' : ''}`}
                >
                  <div className={`circle-number ${location.pathname === `/projects/${projectId}` ? 'active' : ''}`}>1</div> 
                  <span className="ms-1 d-none d-sm-inline">Project</span>
                </Nav.Link>
              </Nav.Item>
              {/* Chatbot Configuration Link */}
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to={`/projects/${projectId}/chatbot`}
                  className={`nav-link custom-link align-middle px-0 ${location.pathname === `/projects/${projectId}/chatbot` ? 'active' : ''}`}
                >
                  <div className={`circle-number ${location.pathname === `/projects/${projectId}/chatbot` ? 'active' : ''}`}>2</div> 
                  <span className="ms-1 d-none d-sm-inline">Chatbot</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {/* Divider */}
            <hr />
          </div>
        </Col>
        {/* Outlet for rendering nested routes */}
        <Col className="py-3">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
