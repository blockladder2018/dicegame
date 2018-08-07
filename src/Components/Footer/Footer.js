import React, { Component } from 'react';

import Styles from './FooterStyles.css';

class Footer extends Component {

  render() {
    return (
      <div className={Styles.footer}>
        <hr />
        <p>Contact Us</p>
      </div>
    );
  }
}

export default Footer;
