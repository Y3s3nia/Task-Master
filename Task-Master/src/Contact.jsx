import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Contact () {
    function NavbarTask() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary fixed-top" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="./ToDo.jsx">Task Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="./ToDo.jsx">To Do List</Nav.Link>
                        <Nav.Link href="./Contact.jsx">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
      }
    return (
        <div>
            <NavbarTask />
            <h1>Contact</h1>
            <div className = "Form-Container"></div>
            </div>
    );
}

export default Contact;