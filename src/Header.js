import React from 'react';
import Nav from './Nav';

const Header = props => {
  return (
    <header>
      <Nav changePage={props.changePage} />
    </header>
  )
};

export default Header;
