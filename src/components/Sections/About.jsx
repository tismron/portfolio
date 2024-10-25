// import Scroller from "../Data_Scroller/Scroller";
import { useState } from "react";
const About = () => {
    // const [Modal, setModal] = useState({visible: false, content: {title: "", content: "", img: ""}});
    // const props = {specialClass: "about-scroller", section:"about"};
    // const props = {specialClass: "aboutScroller", section: "about", setModal, Modal};
    return (
        <div className="content">
            <Python />
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

const Python = () => {
    return (
        <div>
            <iframe src="https://trinket.io/embed/python/66e1eb2f41bf" width="100%" height="600" allowfullscreen></iframe>
            <iframe src="https://trinket.io/embed/python3/8ba61f01749f" width="100%" height="600" allowfullscreen></iframe>
        </div>
    )
}

export default About
