// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Row,Col,Image} from 'react-bootstrap';
import logo from "../images/logo.png"
import { Gear } from 'react-bootstrap-icons';
import { BellFill } from 'react-bootstrap-icons';
const CustomNavbar = () => {
  return (
    <Navbar bg="white" variant="dark" expand="lg">
      <Navbar.Brand href="#home"><Row>
        <Col>
        <Image src={logo} style={{width:"50px",height:"50px"}}/>
        </Col>
        <span style={{color:"#7E22CE",fontSize:"28px",fontWeight:"800",fontFamily:"Plus Jakarta Sans"}}>LAMA</span>
        <Col>
        </Col>
      </Row>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#settings"><Gear color='black' size={25}/></Nav.Link>
        <Nav.Link href="#alerts"><BellFill color='black' size={25}/></Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
