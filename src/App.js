import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Collection} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
