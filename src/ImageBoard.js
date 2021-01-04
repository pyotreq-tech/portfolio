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
                    backgroundColor: "#27292b",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0px 2px 8px 2px #000000",
                }}
            >
                <div className="half-description">
                    <h2>Imageboard</h2>
                    <p>
                        Online gallery of pictures. Add photos, descriptions and
                        tags. Multiple options of display and sorting. Limit of
                        maximum file weight, navigation and hash routing.
                    </p>
                    <h3>Technologies:</h3>
                    <p>
                        Javascript with HTML and CSS, Node.js, Vue.js,
                        PostgreSQL, AWS
                    </p>
                    <p>
                        <h3>Preview:</h3>
                        <a
                            href="https://pyotreq-city-board.herokuapp.com/"
                            target="_blank"
                        >
                            Click here to <i class="far fa-eye"></i> it yourself
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default ImageBoard;
