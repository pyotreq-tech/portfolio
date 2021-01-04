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
                    backgroundColor: "#27292b",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0px 2px 8px 2px #000000",
                }}
            >
                <div className="half-description">
                    <h2>Welcome</h2>
                    <h3>I am Piotr</h3>
                    <p>
                        Full stack web developer in Berlin. Privately I am
                        interested in travelling, computer games, new
                        technologies and modern world high-rise architecture.
                    </p>
                    <h3>Technologies:</h3>

                    <p>
                        Javascript with HTML and CSS, Node.js, Vue.js, React.js,
                        PostgreSQL, 3rd party API, GIT, State Management
                        (Redux), Web Sockets
                    </p>
                    <h3>
                        Check out my projects on the right and bottom of the
                        page.
                    </h3>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
