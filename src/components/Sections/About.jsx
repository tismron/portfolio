// import Scroller from "../Data_Scroller/Scroller";

import { useState } from "react";

// import { useState } from "react";
const About = () => {
    // const [Modal, setModal] = useState({visible: false, content: {title: "", content: "", img: ""}});
    // const props = {specialClass: "about-scroller", section:"about"};
    // const props = {specialClass: "aboutScroller", section: "about", setModal, Modal};
    return (
        <div className="content">
            <Docs />
        </div>
    )
}

const docsAssignments = () => [
    {
        name: "Theoretical Computer Science",
        url: "https://docs.google.com/document/d/1-q_eLW555mvrsT_13ehe2Ce-lrVD0UsIf5EIpqt5HvI/edit?usp=sharing"
    },
    {
        name: "Environmental Stewardship and Sustainability",
        url: "https://docs.google.com/document/d/1Dh-uUIPLRauUrvrLGAPP8MovOUyek6QWJIlLcLuoB1Q/edit?usp=sharing"
    },
    {
        name: "66 - Personal Ethics ",
        url: "https://docs.google.com/document/d/1TAOLZTGn3IrR8HJ9q93UYBXihgD1jwZ4USf2EBypO7g/edit?usp=sharing"
    },
]

const programmingAssignments = () => [
    {
        name: "Number Guessing Game",
        url: "https://trinket.io/embed/python/66e1eb2f41bf"
    },
    {
        name: "Recrusion Pygame",
        url: "https://trinket.io/embed/python3/2ec811db3830"
    }, 
    {
        name: "Group Project - Diddle Jump Chrome Extension",
        url: "./videos/game_extension.mp4",
        type: "video",
    }, 
    {
        name: "ISP - Learn Three JS (Interactive Web 3D Models)",
        url: "./videos/three_js.mp4",
        type: "video",
    }, 
]
const Docs = () => {
    const [modal, setModal] = useState("programming");
    const [assignment, setAssignment] = useState({type: "iframe", url: programmingAssignments()[0].url});
    return (
        <div className="docs-container">
            <div className="docs-options p-4">
                <h2>Assignments</h2>
                <div className="doc-sections">
                    <ul className="tag-list">
                        <li className={`tag ${modal === "programming" ? "active" : ""}`} onClick={() => setModal("programming")}>
                            Programming
                        </li>
                        <li className={`tag ${modal === "other" ? "active" : ""}`} onClick={() => setModal("other")}>
                            Other
                        </li>
                    </ul>
                </div>
                <ul className="tag-list hover:scale-105">
                    {
                        modal === "programming" ?
                        (
                            programmingAssignments().map((assignment, index) =>
                            <li key={index} className={`tag mb-2 ${programmingAssignments()[index].url === index ? "active" : ""}`} onClick={() => setAssignment({type: assignment?.type,  url: assignment.url})}>
                                {assignment.name}
                            </li>)
                        )
                        :
                            docsAssignments().map((assignment, index) =>
                            <li key={index} className="tag mb-2" onClick={() => setAssignment({url: assignment.url})}>
                                {assignment.name}
                            </li>)
                    }
                </ul>
            </div>
            <div className="doc">
                {assignment.type === "video" ? (
                    <video src={assignment.url} width="100%" height="600" controls id={assignment.url}/>
                ) : (
                    <iframe src={assignment.url} frameBorder="0" width="100%" height="600" id={assignment.url}></iframe>
                )}
            </div>
        </div>
    )
}

export default About