import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Garbage from "./Garbage";
import Treasure from "./Treasure";

const App = () => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/garbage">
          <Garbage />
        </Route>
        <Route path="/treasure">
          <Treasure />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
