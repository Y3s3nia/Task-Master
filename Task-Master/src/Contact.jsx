import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Contact () {
    const [firstName, setFirstName] = useState("John");
    const [newFirstName, setNewFirstName] = useState("");
    const [lastName, setLastName] = useState("Doe");
    const [newLastName, setNewLastName] = useState("");
    const [email, setEmail] = useState("johndoe@gmail.com");
    const [newEmail, setNewEmail] = useState("");
    const [comment, setComment] = useState("Co-worker");
    const [newComment, setNewComment] = useState("");
    const [contact, setContact] = useState([{firstName, lastName, email, comment}]);
    const [newContact, setNewContact] = useState([{firstName, lastName, email, comment}]);

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

    function handleInput (event) {
        setNewFirstName(event.target.value);
    }

    function handleInput2 (event) {
        setNewLastName(event.target.value);
    }

    function handleInput3 (event) {
        setNewEmail(event.target.value);
    }

    function handleInput4 (event) {
        setNewComment(event.target.value);
    }

    function addContact () {
        if (newFirstName.trim() !== "" || newLastName.trim() !== "" || newEmail.trim() !== "" || newComment.trim() !== "") {
            setContact (c => [...c, newContact]);
            setNewContact({firstName: newFirstName, lastName: newLastName, email: newEmail, comment: newComment});
        }
        return console.log(newContact, contact);
    }

    function ContactList() {
        return (
                <ul>
                    {contact.map((c, index) => (
                        <li key={index}>
                            <h3>{c.firstName} {c.lastName}</h3>
                            <p>{c.email}</p>
                            <p>{c.comment}</p>
                        </li>
                    ))}
                </ul>
        );
    }

    return (
        <div>
            <NavbarTask />
            <h1>Contact</h1>
            <div className = "Form-Container">
                <input 
                    className = "input"
                    type = "text" 
                    value = {newFirstName} 
                    onChange = {handleInput} 
                    placeholder = "First Name" 
                    required
                />
                <input 
                    className = "input"
                    type = "text" 
                    value = {newLastName} 
                    onChange = {handleInput2} 
                    placeholder = "Last Name"
                    required 
                />
                <input 
                    className = "input"
                    type = "email" 
                    value = {newEmail} 
                    onChange = {handleInput3} 
                    placeholder = "E-mail" 
                    required
                />
                <input 
                    className = "input"
                    type = "text" 
                    value = {newComment} 
                    onChange = {handleInput4} 
                    placeholder = "Comment" 
                    required
                />
                <button 
                    className = "add-button" 
                    onClick = {addContact}
                >   
                    Add Contact
                </button>
            </div>
            <div className = "contact-list">
                <ContactList />
            </div>
        </div>
    );
}

export default Contact;