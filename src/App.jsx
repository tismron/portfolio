import { useEffect, useState } from 'react'
import Sections from './components/Sections'
import './App.css'

function App() {
  const [scrollers, setScrollers] = useState([]);
  
  console.log("TEST");
  

  useEffect(() => {
    setScrollers(document.querySelectorAll('.scroller'));
  }, [])
  
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    scrollers.forEach(scroller => {
      scroller.setAttribute('data-animated', true);
      // const scrollerInner = scroller.querySelector('.scroller_inner');
      // const scrollerContent = Array.from(scrollerInner.children);
      // scrollerContent.forEach(content => {
      //   const duplicate = content.cloneNode(true);
      //   duplicate.setAttribute('area-hidden', true);
      //   scrollerInner.appendChild(duplicate)
      // })
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