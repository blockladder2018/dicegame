import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './containers/dashboard';
import CoinFlip from './containers/coin-flip';
import Dice from './containers/dice';
import TwoDice from './containers/two-dice';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
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
