import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import SocialNetwork from "./SocialNetwork";
import ImageBoard from "./ImageBoard";
import LyricsChat from "./LyricsChat";
import Petition from "./Petition";

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
                            <Link to="/SocialNetwork">Social Network</Link>
                        </div>
                    </div>
                </div>
                <div className="container-x">
                    <div className="item-x">
                        <Link to="/Petition">Petition</Link>
                    </div>

                    <div className="item-x">
                        <Link to="/LyricsChat">Lyrics Chat</Link>
                    </div>
                    <div className="item-x">
                        <Link to="/ImageBoard">Imageboard</Link>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
