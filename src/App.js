import React from "react";

import "./App.css";
import SignUp from "./components/SignComponent/SignUp/SignUp";
import SignIn from "./components/SignComponent/SignIn/SignIn";
import Welcome from "./components/Welcome";
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
