import Scroller from "../Data_Scroller/Scroller"

const mySkills = () => {
    return (
        <>
            <Scroller data={["HTML", "CSS", "JS", "SSG", "webdev", "animation"]} direction="left"/>
            <Scroller data={["HTML", "CSS", "JS", "SSG", "webdev", "animation"]} direction="right"/>
        </>
    )
}

export default mySkills
