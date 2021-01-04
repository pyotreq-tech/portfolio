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
                    backgroundColor: "CADETBLUE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h2>Connect Four</h2>

                <p>
                    My version of a popular two-player connection board game in
                    which you take turns dropping colored discs into a grid. You
                    can dynamicly choose number of columns and number of discs
                    necessary to win. Player indicators will help to navigate
                    through a game.
                </p>
                <p>
                    Technologies
                    <ul>
                        <li>Javascript with HTML and CSS</li>
                    </ul>
                </p>
                <p>
                    Hover over here to see preview
                    <br />
                    <a
                        href="https://pyotreq-connect-four.herokuapp.com/"
                        target="_blank"
                    >
                        or click here to <i class="far fa-eye"></i> it yourself
                    </a>
                </p>
            </div>
        </>
    );
}

export default ConnectFour;
