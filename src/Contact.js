function Contact() {
    return (
        <>
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
                    <h2>Contact</h2>
                    <h3>I invite you to contact and cooperation:</h3>
                    <h3>
                        <i class="fas fa-mobile-alt"></i>
                        <br />
                        +49 15205650396
                    </h3>
                    <h3>
                        <i class="far fa-envelope"></i>
                        <br />
                        piotrek.kp@gmail.com
                    </h3>
                </div>
            </div>
            <div className="half">
                <img src="./contact.JFIF" style={{ height: "450px" }} />
            </div>
        </>
    );
}

export default Contact;
