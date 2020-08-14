import React from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
// import "./bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
