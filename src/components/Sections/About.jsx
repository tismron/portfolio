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
            {/* <h1>About Me</h1> */}
            {/* <div className="about top animate slide">
                <div className="images">
                    <Scroller {...props} direction="right"/>
                </div>
                <div className="text-container text-end pe-4 ps-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolore laboriosam nemo, distinctio quam animi! Voluptates totam dolorum maxime velit iusto nostrum repellat officiis a corporis, inventore facere quis, quo, eius aspernatur! Libero, ipsam molestias nesciunt deleniti ut autem asperiores.
                </div>
            </div>
            <div className="about bottom animate slide" data-direction="right">
                <div className="text-container text-start ps-4 pe-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolore laboriosam nemo, distinctio quam animi! Voluptates totam dolorum maxime velit iusto nostrum repellat officiis a corporis, inventore facere quis, quo, eius aspernatur! Libero, ipsam molestias nesciunt deleniti ut autem asperiores.
                </div>
                <div className="images">
                    <Scroller {...props} direction="left"/>
                </div>
            </div> */}
        </div>
    )
}

const docsAssignments = () => [
    {
        name: "Theoretical Computer Science",
        url: "https://docs.google.com/document/d/1Dh-uUIPLRauUrvrLGAPP8MovOUyek6QWJIlLcLuoB1Q/edit?usp=sharing"
    },
    {
        name: "Environmental Stewardship and Sustainability",
        url: "https://docs.google.com/document/d/1Dh-uUIPLRauUrvrLGAPP8MovOUyek6QWJIlLcLuoB1Q/edit?usp=sharing"
    },
    {
        name: "13 - Code Of Ethics",
        url: "https://docs.google.com/document/d/1PbxPoW4QJfx-5dD-LEK9b5J7fWvMmBjME_8wRxdLhc8/edit?usp=sharing"
    },
    {
        name: "6 - Computer Careers ",
        url: "https://docs.google.com/document/d/1cSQjX6oUE76_YpuHku_BlRyneOJT1tE9yafFprYuAJQ/edit?usp=sharing"
    }
]

const programmingAssignments = () => [
    {
        name: "Number Guessing Game",
        url: "https://trinket.io/embed/python/66e1eb2f41bf"
    },
    {
        name: "Student Info System",
        url: "https://trinket.io/embed/python3/8ba61f01749f"
    }
]

const Docs = () => {
    const [modal, setModal] = useState("programming");
    const [assignment, setAssignment] = useState([programmingAssignments()[0].url]);
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
                            <li key={index} className={`tag mb-2 ${programmingAssignments()[index].url === index ? "active" : ""}`} onClick={() => setAssignment(assignment.url)}>
                                {assignment.name}
                            </li>)
                        )
                        :
                            docsAssignments().map((assignment, index) =>
                            <li key={index} className="tag mb-2" onClick={() => setAssignment(assignment.url)}>
                                {assignment.name}
                            </li>)
                    }
                </ul>
            </div>
            <div className="doc">
                <iframe src={assignment} frameBorder="0" width="100%" height="600"></iframe>
            </div>
        </div>
        // <div>
        //     <iframe src="https://trinket.io/embed/python/66e1eb2f41bf" width="100%" height="600" ></iframe>
        //     <iframe src="https://trinket.io/embed/python3/8ba61f01749f" width="100%" height="600" ></iframe>
        // </div
    )
}

export default About
