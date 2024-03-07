import { useEffect, useState } from "react";

const ScrollerModal = (props) => {
    const { Modal, setModal } = props;
    const { title, content, img } = Modal.content;
    const [hideModal, setHideModal] = useState(false); 

    const hideModalAnimation = () => {
        setHideModal(true); 
        setTimeout(() => setModal({visible: false}), 300)
    }

    return (
        <div className="scrollerModal" onClick={hideModalAnimation}>
            <div className={"modal" + (hideModal === true ? " close" : "")} >
                <div className="modal-content">
                    <div className="modal-img" style={{backgroundImage: `url(${img})`}}></div>
                    <div className="modal-body">
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollerModal
