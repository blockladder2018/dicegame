import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './Redux';
import Dashboard from './containers/dashboard';
import CoinFlip from './containers/coin-flip';
import Dice from './containers/dice';
import TwoDice from './containers/two-dice';

ReactDOM.render(
  <Provider store={store}>
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
  </Provider>,
   document.querySelector('.container')
 );
