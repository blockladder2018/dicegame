import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

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
