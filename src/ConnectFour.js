function ConnectFour() {
    return (
        <>
            <div className="half">
                <img src="./connectfour.JPG" style={{ width: "450px" }} />
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
                    <h2>Connect Four</h2>
                    <p>
                        My version of a popular two-player connection board game
                        in which you take turns dropping colored discs into a
                        grid. You can dynamicly choose number of columns and
                        number of discs necessary to win. Player indicators will
                        help to navigate through a game.
                    </p>
                    <h3>Technologies:</h3>
                    <p>Javascript with HTML and CSS</p>
                    <p>
                        <h3>Preview:</h3>
                        <a
                            href="https://pyotreq-connect-four.herokuapp.com/"
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

export default ConnectFour;
