import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import ToDo from './ToDo';


function Navbars () {
    function Todo () {
        return <ToDo />;
    }
    
    function Contacts () {
        return <Contact />;
    }

    function NavbarTask() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary fixed-top" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href = "./">Task Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to = "./">To Do List</Nav.Link>
                            <Nav.Link to = "/Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    return (
        <div>
            <Router>
                <NavbarTask />
                <Routes>
                    <Route path="./" element={<Todo />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navbars;