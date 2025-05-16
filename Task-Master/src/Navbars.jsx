import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from './Contact';
import ToDo from './ToDo';


function Navbars () {
    function Todo () {
        return (
            <div>
                <h1>To Do List</h1>
                {/* <ToDo /> */}
            </div>
        );
    }
    
    function Contacts () {
        return (<h1>Contact</h1>);
    }

    function NavbarTask() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary fixed-top" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href = "/">Task Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href = "/">To Do List</Nav.Link>
                            <Nav.Link href = "/Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    return (
        <NavbarTask />
    );
}

export default Navbars