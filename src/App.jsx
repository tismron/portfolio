import { useState } from 'react'
import Sections from './components/Sections/Sections'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Sections/>
  )
}

export default App