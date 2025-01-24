const Home = () => {
    return (
        <div className="content">
            <div className="left animate slide">
                <div className="text">
                    <h1>Hey There! Im Ron</h1>
                    <h2>&& Im a Web Developer</h2>
                    <p>Not really... sice I'm in high school and still learning. Even though, this website is a showcase of my journey and the skills I’ve acquired along the way.</p>
                    <p className="shorter d-none">Not really—I’m still in high school and learning. This website showcases my journey and the skills I’ve acquired.</p>
                </div>
            </div>
            <div className="right animate slide" data-direction="up">
                <img className="rounded" src="./me.png" alt="..." />
                <img className="rounded smaller" src="./me2.jpg" alt="..." />
                {/* <img className="rounded" src="https://dummyimage.com/600x400/000/fff" alt="..." />
                <img className="rounded smaller" src="https://dummyimage.com/400x400/000/fff" alt="..." /> */}
            </div>
        </div>
    )
}

export default Home