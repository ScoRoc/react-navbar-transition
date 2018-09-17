import React, { Component } from 'react';

class ProfileLI extends Component {
  constructor(props) {
    super(props)
  };

  handleClick = () => {
    console.log('yooo');
  };

  render() {
    return (
      <li className='profile-li' onClick={this.handleClick}>
        <img src='imgs/BW_20180301_GA_Scott_Rosehart_24104.jpg' />
        <span>Scott</span>
      </li>
    )
  }
};

export default ProfileLI;
