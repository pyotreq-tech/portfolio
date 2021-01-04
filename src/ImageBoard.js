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
                    tags. Multiple options of display and sorting. Limit of
                    maximum file weight, navigation and hash routing.
                </p>
                <p>
                    Technologies:
                    <ul>
                        <li>Javascript with HTML and CSS</li>
                        <li>Node.js</li>
                        <li>Vue.js</li>
                        <li>PostgreSQL</li>
                        <li>AWS</li>
                    </ul>
                </p>
                <p>
                    Hover over here to see preview
                    <br />
                    <a
                        href="https://pyotreq-city-board.herokuapp.com/"
                        target="_blank"
                    >
                        or click here to <i class="far fa-eye"></i> it yourself
                    </a>
                </p>
            </div>
        </>
    );
}

export default ImageBoard;
