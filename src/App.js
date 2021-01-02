import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import SocialNetwork from "./SocialNetwork";
import ImageBoard from "./ImageBoard";
import LyricsChat from "./LyricsChat";
import Petition from "./Petition";
import ConnectFour from "./ConnectFour";

function App() {
    return (
        <Router>
            <div className="main-container">
                <div className="container-x">
                    <Link to="/" className="no-dec">
                        <div className="item-x button">About Me</div>
                    </Link>
                    <Link to="/contact" className="no-dec">
                        <div className="item-x button">Contact</div>
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
                        <div
                            className="item-y container"
                            style={{ height: "550px" }}
                        >
                            <Switch>
                                <Route path="/Petition">
                                    <Petition />
                                </Route>
                                <Route path="/LyricsChat">
                                    <LyricsChat />
                                </Route>
                                <Route path="/ImageBoard">
                                    <ImageBoard />
                                </Route>
                                <Route path="/SocialNetwork">
                                    <SocialNetwork />
                                </Route>
                                <Route path="/ConnectFour">
                                    <ConnectFour />
                                </Route>
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
                        <Link to="/SocialNetwork" className="no-dec">
                            <div
                                className="item-y button"
                                style={{
                                    writingMode: "vertical-rl",
                                    textOrientation: "use-glyph-orientation",
                                }}
                            >
                                Social Network
                            </div>
                        </Link>
                        <Link to="/ConnectFour" className="no-dec">
                            <div
                                className="item-y button"
                                style={{
                                    writingMode: "vertical-rl",
                                    textOrientation: "use-glyph-orientation",
                                }}
                            >
                                Connect Four
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="container-x" style={{ marginTop: "10px" }}>
                    <Link to="/Petition" className="no-dec">
                        <div className="item-x button">Petition</div>
                    </Link>

                    <Link to="/LyricsChat" className="no-dec">
                        <div className="item-x button">Lyrics Chat</div>
                    </Link>
                    <Link to="/ImageBoard" className="no-dec">
                        <div className="item-x button">Imageboard</div>
                    </Link>
                </div>
            </div>
        </Router>
    );
}

export default App;
