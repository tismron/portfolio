import './Data_Scroller.css'
import data from './scrollerData';
import { useState } from 'react';

const Scroller = (props) => {
    const { specialClass, direction, setModal, Modal } = props;
    const { scrollerData, modalData } = data;

    Modal.visible === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    const showModal = (e) => {
        const content = modalData[e.target.innerText.toLowerCase()];
        setModal({visible: true, content});
    }

    return (
        <>
            <div className={`scroller ${specialClass}`} data-direction={direction}>
                <ul className="tag-list scroller_inner">
                    {scrollerData.map((tag, index) => <li key={index} onClick={(e) => showModal(e)}>{tag}</li>)}
                </ul>
            </div>
        </>
    )
}

export default Scroller