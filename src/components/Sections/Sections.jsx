import { useEffect } from 'react'
import Home from './Home';
import Skills from './Skills';
import About from './About';
import animate from './animate';
import './sections.css';
import Contact from './Contact';

const Sections = () => {

    useEffect(() => {
        const sectionsArray = document.querySelectorAll('section .animate')
        sectionsArray.forEach((section) => {
            section.classList.add('hidden');
        })
        animate(sectionsArray)
}, []);
    return (
        <>
            <Section section="home"><Home/></Section>
            <Section section="about"><About/></Section>
            <Section section="skills"><Skills/></Section>
            <Section section="contact"><Contact/></Section>
        </>
    )
}

const Section = ({section, children}) => {
    return (
        <section id={section} key={'section'}>
            {children}
        </section>
    )
}

export default Sections
