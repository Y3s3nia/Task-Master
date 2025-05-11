import { useState } from 'react'
import ToDo from './ToDo.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ToDo/>
  )
}

export default App
