import "./App.css";

function App() {
    return (
        <div className="main-container">
            <div className="container-x">
                <div className="item-x">About Me</div>
                <div className="item-x">Contact</div>
            </div>
            <div className="container-x" style={{ justifyContent: "center" }}>
                <div className="container-y">
                    <div className="item-y">
                        <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="item-y">
                        <i class="fab fa-github"></i>
                    </div>
                    <div className="item-y">
                        <img src="./logo-bear.svg" className="honey" />
                    </div>
                </div>
                <div className="container-y">
                    <div className="item-y container">Huge</div>
                </div>
                <div className="container-y">
                    <div className="item-y">Small</div>
                    <div className="item-y">Small</div>
                </div>
            </div>
            <div className="container-x">
                <div className="item-x">Petition</div>
                <div className="item-x">Imageboard</div>
            </div>
        </div>
    );
}

export default App;
