import { useState } from 'react';
import Scroller from "../Data_Scroller/Scroller"
import data from "../Data_Scroller/scrollerData"
import ScrollerModal from '../Data_Scroller/ScrollerModal';

const mySkills = () => {
    const [Modal, setModal] = useState({visible: false, content: {title: "", content: "", img: ""}});

    // const scrollerData = data.scollerData || [];
    const props = {setModal, Modal};
    return (
        <div className="content">
            {Modal.visible && <ScrollerModal {...props} />}
            <Scroller {...props} direction="left"/>
            <Scroller {...props} direction="right"/>
        </div>
    )
}

export default mySkills
