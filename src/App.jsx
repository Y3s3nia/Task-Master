import ToDo from './ToDo.jsx'
import Contact from './Contact.jsx';
import Navbars from './Navbars.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
    < Navbars />
      <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
