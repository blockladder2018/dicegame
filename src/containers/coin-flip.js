import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

class CoinFlip extends Component {

  render () {
    return (
      <div id="rootContainer">
        <Header />
        <div>
          Coin Flip
        </div>
        <Footer />
      </div>
    );
  }
};

export default CoinFlip;
