import React from 'react';
import ProfileLI from './ProfileLI';

const Nav = props => {
  return (
    <nav>
      <ul>
        <ProfileLI changePage={props.changePage} />
        <li><a>Home</a></li>
        <li><a>Projects</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  )
};

export default Nav;
