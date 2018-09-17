import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <header>
        <Nav />
      </header>
    )
  }
};

export default Header;
