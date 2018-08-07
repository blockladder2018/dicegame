import React from "react";
import ReactDOM from "react-dom";

import Home from './Containers/Home/Home';

const Index = () => {
  return (
      <Home />
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
