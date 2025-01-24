import { useEffect, useState } from 'react'
import Sections from './components/Sections'
import './App.css'

function App() {
  const [scrollers, setScrollers] = useState([]);

  useEffect(() => {
    setScrollers(document.querySelectorAll('.scroller'));
  }, [])
  
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    scrollers.forEach(scroller => {
      scroller.setAttribute('data-animated', true);
    })
  }

  return (
    <>
      <div className="scroll-watcher"></div>
      <Sections/>
    </>
  )
}

export default App