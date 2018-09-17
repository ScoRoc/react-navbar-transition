import React, { Component } from 'react';
import ProfileLI from './ProfileLI';

class Nav extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <nav>
        <ul>
          <ProfileLI />
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
};

export default Nav;
