function ImageBoard() {
    return (
        <>
            <div className="half">
                <img src="./imageboard.JPG" style={{ width: "450px" }} />
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
                <h2>Imageboard</h2>

                <p>
                    Online gallery of pictures. Add photos, descriptions and
                    tags. Multiple options of display.
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
                        href="https://pyotreq-city-board.herokuapp.com/"
                        target="_blank"
                    >
                        <i class="far fa-eye"></i> Check it
                    </a>
                </p>
            </div>
        </>
    );
}

export default ImageBoard;
