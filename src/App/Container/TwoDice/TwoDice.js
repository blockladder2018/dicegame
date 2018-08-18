import React, { Component } from "react";

import {
  Header,
  Footer
} from "App/Component";

class TwoDice extends Component {

  render () {
    return (
      <div id="rootContainer">
        <Header />
        <div>
          Two Dice
        </div>
        <Footer />
      </div>
    );
  }
};

export default TwoDice;
