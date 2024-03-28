import Scroller from "../Data_Scroller/Scroller";
import { useState } from "react";
const About = () => {
    const [Modal, setModal] = useState({visible: false, content: {title: "", content: "", img: ""}});
    // const props = {specialClass: "about-scroller", section:"about"};
    const props = {specialClass: "aboutScroller", section: "about", setModal, Modal};
    return (
        <div className="content">
            {/* <h1>About Me</h1> */}
            <div className="about top animate slide">
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
            </div>
        </div>
    )
}

const Image = ({img}) => {
    // const props = {specialClass: "about-scroller", type:"img", data: img};
    // return <Scroller {...props} direction="right"/>
    {/* <img src={img} alt="" /> */}
}

export default About
