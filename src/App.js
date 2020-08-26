import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Collection} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
