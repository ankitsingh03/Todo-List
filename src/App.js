import "./App.css";
import "./components/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import List from "./components/List";
import About from "./components/About";
import Error from "./components/Error";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header title={"Todo"} />
      <Switch>
        <Route exact path="/">
          <div className="App container font">
            <Home />
            <List />
          </div>
        </Route>
        <Route exact path="/about">
          <div>
            <About />
          </div>
        </Route>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
