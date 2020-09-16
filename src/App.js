import React from "react";

import "./App.css";
import SignUp from "./components/SignComponent/SignUp/SignUp";
import SignIn from "./components/SignComponent/SignIn/SignIn";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/welcome">
            <Welcome/>
          </Route>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
