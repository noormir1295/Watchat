import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/signup/signUp"
import Home from "./pages/home/index";
import Watched from "./pages/watched/index";
import Watchlist from "./pages/watchlist/index";
import Profile from "./pages/profile/index";
import Reviews from "./pages/reviews/index";
// import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar";


function App() {
    return (
        <Router>
          <Navbar/>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/watched" component={Watched} />
                    <Route exact path="/watchlist" component={Watchlist} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/reviews" component={Reviews} />
                </Switch>

            </div>
        </Router>

    );
}

export default App;
