import React, { useEffect, useState } from 'react'
import MySkills from './MySkills';
import reactLogo from '../../assets/react.svg'
import animate from './animate';
import './sections.css';

const Sections = () => {
    const [sections, setSections] = useState([<mySkills/>]);

    useEffect(() => {
        const sectionsArray = document.querySelectorAll('section .content')
        setSections(sectionsArray);
        animate(sectionsArray)
}, []);
    const num = ["section 1", "section 2", "section 3", "section 4"];
    return (
        <>
            {num.map(title => {
                const porps = { title }
                return <Section {...porps} key={title} >
                    <MySkills />
                </Section>
            })}
        </>
    )
}

const Section = ({title, children}) => {
    return (
        <section className="hidden" key={title}>
            <div className="content">
                <h1>{title}</h1>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                {children}
            </div>
        </section>
    )
}

export default Sections
