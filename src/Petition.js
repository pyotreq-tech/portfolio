function Petition() {
    return (
        <>
            <div className="half">
                <img src="./petition.JPG" style={{ width: "450px" }} />
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
                    <h2>Petition</h2>
                    <p>
                        Great cause? Ideal place to collect some signatures.
                        Register, get familiar with the case and support it with
                        tens, hunderds or thousands of others. Registration and
                        login pages, list of other subscribers and possibility
                        to withdraw your signature.
                    </p>
                    <h3>Technologies:</h3>
                    <p>
                        Javascript with HTML and CSS, Node.js, Express
                        Handlebars, PostgreSQL
                    </p>
                    <p>
                        <h3>Preview:</h3>
                        <a
                            href="https://pyotreq-petition.herokuapp.com/"
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

export default Petition;
