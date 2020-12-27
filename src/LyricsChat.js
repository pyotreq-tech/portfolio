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
                    backgroundColor: "CADETBLUE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h2>Lyrics Chat</h2>

                <p>
                    Meeting new people has not been easier than before. You are
                    speachless? No problem, you are given your favourite artists
                    and their songs as your backup. By communicating with API it
                    gives you endless possibilities for the conversations.
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

export default LyricsChat;
