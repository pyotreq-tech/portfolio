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
                    friendships, browse through each other profiles and chat
                    both with private and public messages. You can also check
                    who is currently online, who joined recently, add posts and
                    comments on each others walls.
                </p>
                <p>
                    Technologies:
                    <ul>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>PostgreSQL</li>
                        <li>API</li>
                        <li>State Management (Redux)</li>
                        <li>Socket.IO</li>
                        <li>AWS</li>
                    </ul>
                </p>
                <p>
                    Hover over here to see preview
                    <br />
                    <a
                        href="https://pyotreq-socialnetwork.herokuapp.com/"
                        target="_blank"
                    >
                        or click here to <i class="far fa-eye"></i> it yourself
                    </a>
                    <br />
                    login: guest@gmail.com / password: guest
                </p>
            </div>
        </>
    );
}

export default SocialNetwork;
