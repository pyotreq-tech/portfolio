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
                    backgroundColor: "#27292b",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0px 2px 8px 2px #000000",
                }}
            >
                <div className="half-description">
                    <h2>Social Network</h2>
                    <p>
                        Fully functional social network. Add, remove and
                        maintain friendships, browse through each other profiles
                        and chat both with private and public messages. You can
                        also check who is currently online, who joined recently,
                        add posts and comments on each others walls.
                    </p>
                    <h3>Technologies:</h3>
                    <p>
                        Node.js, React.js, PostgreSQL, API, State Management
                        (Redux), Socket.IO, AWS
                    </p>
                    <p>
                        <h3>Preview:</h3>
                        <a
                            href="https://pyotreq-socialnetwork.herokuapp.com/"
                            target="_blank"
                        >
                            Click here to <i class="far fa-eye"></i> it yourself
                        </a>
                        <br />
                        login: guest@gmail.com / password: guest
                    </p>
                </div>
            </div>
        </>
    );
}

export default SocialNetwork;
