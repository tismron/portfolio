import { useEffect, useState } from "react";

const Scroller = (props) => {
    const { data, direction } = props;

    return (
        <div className="scroller" data-direction={direction}>
            <ul className="tag-list scroller_inner">
                {data.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </div>
    )
}

export default Scroller