import {useState} from 'react';
import Navbars from './Navbars.jsx';

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
        if (newFirstName.trim() !== "" && newLastName.trim() !== "" && newEmail.trim() !== "" && newComment.trim() !== "") {
            const newContact = {firstName: newFirstName, lastName: newLastName, email: newEmail, comment: newComment};
            setContact (c => [...c, newContact]);
        }
    }

    function ContactList() {
        return (
            <ul>
                {contact.map((c, index) => (
                    <li className = "contact-list" key={index}>
                        <h3 className = "contact-item">{c.firstName} {c.lastName}</h3>
                        <p className = "contact-item">{c.email}</p>
                        <p className = "contact-item">{c.comment}</p>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <Navbars />
            <h1>Contact</h1>
            <div className = "Form-Container">
                <input 
                    className = "input"
                    type = "text"
                    value = {newFirstName} 
                    onInput = {handleInput} 
                    placeholder = "First Name" 
                />
                <input 
                    className = "input"
                    type = "text"
                    value = {newLastName} 
                    onInput = {handleInput2} 
                    placeholder = "Last Name"
                />
                <input 
                    className = "input"
                    type = "email"
                    value = {newEmail} 
                    onInput = {handleInput3} 
                    placeholder = "E-mail" 
                />
                <input 
                    className = "input"
                    type = "text"
                    value = {newComment} 
                    onInput = {handleInput4} 
                    placeholder = "Comment" 
                />
                <button 
                    className = "add-button" 
                    type = "submit"
                    onClick = {() => addContact()}
                >   
                    Add Contact
                </button>
            </div>
            <div>
                <ContactList />
            </div>
        </div>
    );
}

export default Contact