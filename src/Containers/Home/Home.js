import React, { Component } from 'react';

import Styles from './HomeStyles.css';
import { Header, Footer, GameCard } from '../../Components';




class Home extends Component {

  render() {
    return (
      <div className={Styles.home}>
        <Header />
        <div>
          <GameCard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
