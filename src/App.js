import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

function App() {
    return (
        <Router>
            <div className="main-container">
                <div className="container-x">
                    <Link to="/">
                        <div className="item-x">About Me</div>
                    </Link>
                    <Link to="/contact">
                        <div className="item-x">Contact</div>
                    </Link>
                </div>
                <div
                    className="container-x"
                    style={{ justifyContent: "center" }}
                >
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
                        <div className="item-y container">
                            <Switch>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                                <Route path="/">
                                    <AboutMe />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                    <div className="container-y">
                        <div
                            className="item-y"
                            style={{
                                writingMode: "vertical-rl",
                                textOrientation: "use-glyph-orientation",
                            }}
                        >
                            Social Network
                        </div>
                    </div>
                </div>
                <div className="container-x">
                    <div className="item-x">Petition</div>
                    <div className="item-x">Imageboard</div>
                </div>
            </div>
        </Router>
    );
}

export default App;
