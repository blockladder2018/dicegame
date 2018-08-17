import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./App/Redux";
import Dashboard from "./App/containers/dashboard";
import CoinFlip from "./App/containers/coin-flip";
import Dice from "./App/containers/dice";
import TwoDice from "./App/containers/two-dice";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/coin-flip" component ={CoinFlip} />
            <Route path="/dice" component ={Dice} />
            <Route path="/two-dice" component ={TwoDice} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
