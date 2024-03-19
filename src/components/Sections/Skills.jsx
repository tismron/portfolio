import { useState } from 'react';
import Scroller from "../Data_Scroller/Scroller"
import data from "../Data_Scroller/scrollerData"
import ScrollerModal from '../Data_Scroller/ScrollerModal';

const Skills = () => {
    const [Modal, setModal] = useState({visible: false, content: {title: "", content: "", img: ""}});

    // const scrollerData = data.scollerData || [];
    const props = {specialClass: "skillsScroller", setModal, Modal};
    return (
        <div className="content">
            {Modal.visible && <ScrollerModal {...props} />}
            <h1 className="title">My Skills</h1>
            {/* <Scroller {...props} direction="left"/> */}
            <Scroller {...props} direction="right"/>
        </div>
    )
}

export default Skills
