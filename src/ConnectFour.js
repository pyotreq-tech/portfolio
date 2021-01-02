function ConnectFour() {
    return (
        <>
            <div className="half">
                <img src="./petition.JPG" style={{ width: "450px" }} />
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
                <h2>ConnectFour</h2>

                <p>
                    Great cause? If you need some signatures, this place is for
                    you. Register, get familiar with the case and support it
                    with tens, hunderds or thousands of others.
                </p>
                <p>
                    Technologies
                    <ul>
                        <li>Javascript with HTML and CSS</li>
                        <li>Node.js</li>
                        <li>Vue.js</li>
                        <li>PostgreSQL</li>
                        <li>API</li>
                        <li>State Management (Redux)</li>
                        <li>Socket.IO</li>
                    </ul>
                </p>
                <p>
                    <a
                        href="https://pyotreq-petition.herokuapp.com/"
                        target="_blank"
                    >
                        <i class="far fa-eye"></i> Check it
                    </a>
                </p>
            </div>
        </>
    );
}

export default ConnectFour;
