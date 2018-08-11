import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './containers/dashboard';

const App = () => {

  return (
    <div>
      <Dashboard />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
