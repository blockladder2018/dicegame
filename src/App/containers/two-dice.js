import React, { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

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
