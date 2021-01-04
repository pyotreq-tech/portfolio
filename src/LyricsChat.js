function LyricsChat() {
    return (
        <>
            <div className="half">
                <img src="./lyricschat.JPG" style={{ height: "500px" }} />
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
                    <h2>Lyrics Chat</h2>
                    <p>
                        Online messenger with a music lyrics twist. Allow users
                        to browse through Online profiles and communicate using
                        words from their favourite songs. Allows to identify the
                        album and song origin of each line and delivers charts
                        of most popular artists, albums, songs and phrases.
                    </p>
                    <h3>Technologies:</h3>
                    <p>
                        Javascript with HTML and CSS, Node.js, Vue.js,
                        PostgreSQL, AWS
                    </p>
                    <p>
                        <h3>Preview:</h3>
                        <a
                            href="https://lyrics-talk.herokuapp.com/"
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

export default LyricsChat;
