import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./App/Redux";
import {
  Dashboard,
  CoinFlip,
  Dice,
  TwoDice,
} from "App/container";
import { ApplicationController } from "./App/Controller";

class App extends Component {

  componentWillMount() {
    ApplicationController.setLocale("zh");
  }

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
