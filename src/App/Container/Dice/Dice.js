import React, { Component } from "react";

import {
  Header,
  Footer,
} from "App/Component";

class Dice extends Component {

  render () {
    return (
      <div id="rootContainer">
        <Header />
        <div>
          Dice
        </div>
        <Footer />
      </div>
    );
  }
};

export default Dice;
