import { useEffect } from 'react'
import Home from './Home';
import Skills from './Skills';
import About from './About';
import animate from './animate';
import Contact from './Contact';
// import Contact from './Contact';
import './sections.css';

const Sections = () => {
    // const [sections, setSections] = useState([<Home/>, <MySkills/>]);

    useEffect(() => {
        const sectionsArray = document.querySelectorAll('section .animate')
        sectionsArray.forEach((section) => {
            section.classList.add('hidden');
        })
        animate(sectionsArray)
}, []);
    // const num = ["section 1", "section 2", "section 3", "section 4"];
    return (
        <>
            {/* {num.map(title => {
                const porps = { title }
                return <Section {...porps} key={title} >
                    <MySkills />
                </Section>
            })} */}
            <Section section="home"><Home/></Section>
            <Section section="about"><About/></Section>
            <Section section="skills"><Skills/></Section>
            {/* <Section section="projects"><Projects/></Section> */}
            {/* <Section section="contact"><Contact/></Section> */}
        </>
    )
}

const Section = ({section, children}) => {
    return (
        <section id={section} key={'section'}>
            {/* <div className="content">
                <h1>{title}</h1>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div> */}
            {children}
        </section>
    )
}

export default Sections
