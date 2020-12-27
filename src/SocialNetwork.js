function SocialNetwork() {
    return (
        <>
            <div className="half">
                <img src="./SocialNetwork.JPG" style={{ width: "450px" }} />
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
                <h2>Social Network</h2>
                {/* <h3>I am Piotr</h3> */}
                <p>
                    Fully functional social network. Add, remove and maintain
                    friendships, browse through each other profiles, chat both
                    with private and public messages.
                </p>
                <p>
                    Technologies
                    <ul>
                        <li>Javascript with HTML and CSS</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>PostgreSQL</li>
                        <li>API</li>
                        <li>State Management (Redux)</li>
                        <li>Socket.IO</li>
                    </ul>
                </p>
                <p>
                    <a
                        href="https://pyotreq-socialnetwork.herokuapp.com/"
                        target="_blank"
                    >
                        <i class="far fa-eye"></i> Check it
                    </a>
                </p>
            </div>
        </>
    );
}

export default SocialNetwork;
