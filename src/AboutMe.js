function AboutMe() {
    return (
        <>
            <div className="half">
                <img
                    src="./pyotreq.JPG"
                    style={{ borderRadius: "50%", maxWidth: "100%" }}
                />
            </div>
            <div
                className="half"
                style={{
                    padding: "15px",
                    backgroundColor: "CADETBLUE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h2>Welcome</h2>
                <h3>I am Piotr</h3>
                <p>
                    Full stack web developer. Privately I am interested in
                    travelling, computer games, new technologies and modern
                    world high-rise architecture.
                </p>
                <p>
                    I am mainly focused on:
                    <ul>
                        <li>Javascript with HTML and CSS</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>PostgreSQL</li>
                        <li>API</li>
                        <li>GIT</li>
                        <li>State Management (Redux)</li>
                        <li>Socket.IO</li>
                    </ul>
                </p>
            </div>
        </>
    );
}

export default AboutMe;
