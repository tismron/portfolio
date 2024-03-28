import { useState } from 'react';
import Scroller from "../Data_Scroller/Scroller"
import data from "../Data_Scroller/scrollerData"
import ScrollerModal from '../Data_Scroller/ScrollerModal';

const Skills = () => {
    const [Modal, setModal] = useState({visible: false, content: {title: "", content: "", img: ""}});

    // const scrollerData = data.scollerData || [];
    const props = {specialClass: "skillsScroller", section: "skills", setModal, Modal};
    return (
        <div className="content">
            {Modal.visible && <ScrollerModal {...props} />}
            {/* <h1 className="title">My Skills</h1> */}
            <div className="comparison">
                <div className="left">
                    <h2>Front End</h2>
                </div>
                <div className="right">
                    <h2>Back End</h2>
                </div>
            </div>
            {/* <Scroller {...props} direction="left"/> */}
            <div className="skills-container">
                <Scroller {...props} direction="right"/>
            </div>
        </div>
    )
}

export default Skills
