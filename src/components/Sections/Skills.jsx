import { useState } from 'react';
import Scroller from "../Data_Scroller/Scroller"
import ScrollerModal from '../Data_Scroller/ScrollerModal';

const Skills = () => {
    const [Modal, setModal] = useState({visible: false, content: {title: "", content: "", img: ""}});

    // const scrollerData = data.scollerData || [];
    const props = {specialClass: "skillsScroller", axis: "y", section: "skills animate", setModal, Modal};

    const elements = {
        front_end: [
            {
                name: "HTML",
                description: "The universal markup language for the web that defines the content and structure of web content. Every element is an HTML tag.",
                img: "src/assets/skills/html.svg",
            },
            {
                name: "CSS",
                description: "Cascading Style sheet language used for specifying the presentation and styling of HTML. All styles you see come from CSS.",
                img: "src/assets/skills/css.svg",
            },
            {
                name: "JavaScript, aka JS",
                description: "Scripting language and core technology for the web, used for creating dynamic web page content, adding interactivity, etc.",
                img: "src/assets/skills/js.svg",
            }
        ],
        back_end: [
            {
                name: "Next.JS",
                description: "Framework that combines React with server-side rendering, static-site generation, data processing, database interactions, etc.",
                img: "src/assets/skills/nextjs.svg",
            },
            {
                name: "MongoDB",
                description: "MongoDB is a NoSQL database that stores data in a flexible, document-based format, designed for scalability, high availability, and fast data retrieval.",
                img: "src/assets/skills/mongodb.svg",
            }
        ]
    };

    return (
        <div className="content">
            {Modal.visible && <ScrollerModal {...props} />}
            {/* <h1 className="title">My Skills</h1> */}
            <div className="comparison">
                <div className="left animate slide">
                    <h2 className='m-0 pb-3'>Front End - <span className='px-2 bg-primary border border-primary rounded-3'>User Experience</span></h2>
                    <div className="text-container">
                        {elements.front_end.map(({name, img, description}, index)=> (
                            <div className="element" key={index}>
                                <div className="text">
                                    <h3 className='m-0'>{name}</h3>
                                    <img className='me-auto my-auto d-none float-end' src={img} alt="" />
                                    <p>{description}</p>
                                </div>
                                <img className='ms-auto my-auto' src={img} alt="" />
                                {/* <img className='rounded ms-auto' src="https://dummyimage.com/124x124/000/fff" alt="" /> */}
                            </div>
                        ))}
                    </div>
                    <div className="display-container"></div>
                </div>
                <div className="right">
                    <div className="section backend animate slide" data-direction="right">
                        <h2 className='m-0 pb-3'>Back End - <span className="px-2 bg-secondary border border-secondary rounded-3">Server Side</span></h2>
                        <div className="text-container">
                            {elements.back_end.map(({name, img, description}, index)=> (
                                <div className="element text-end" key={index}>
                                    <img className={'rounded-circle me-auto my-auto' + (index === 0 ? " p-2 bg-light" : "")} src={img} alt="" />
                                    <div className="text">
                                        <img className={'rounded-circle me-auto my-auto d-none float-start' + (index === 0 ? " p-2 bg-light" : "")} src={img} alt="" />
                                        <h3 className='m-0'>{name}</h3>
                                        <p>{description}</p>
                                    </div>
                                    {/* <img className='rounded ms-auto' src="https://dummyimage.com/124x124/000/fff" alt="" /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="section d-grid animate slide" data-direction="right">
                    <img className='me-auto my-auto' src="src/assets/skills/react.svg" alt="" />
                        {/* <h2>Add Ons</h2> */}
                        <div className="text-end react p-3">
                            <img className='me-auto d-none my-auto float-start' src="src/assets/skills/react.svg" alt="" />
                            <h3 className='m-0'>React</h3>
                            <p>Open Source JS library for building user interfaces. It simplifies UI development by encapsulating HTML, CSS, and JavaScript logic.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Scroller {...props} direction="left"/> */}
            {/* <div className="skills-container">
                <Scroller {...props} direction="right"/>
            </div> */}
        </div>
    )
}

export default Skills
