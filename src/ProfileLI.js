import React, { Component } from 'react';

class ProfileLI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    this.props.changePage();
  };

  render() {
    let picStyle = this.state.clicked ? styles.big : styles.reg;
    return (
      <li className='profile-li' onClick={this.handleClick}>
        <img style={picStyle} src='imgs/BW_20180301_GA_Scott_Rosehart_24104.jpg' />
        <span>Scott</span>
      </li>
    )
  }
};

const styles = {
  big: {
    transform: 'scale(4) translate(-20px, 10px)',
    borderRadius: '15%'
  },
  reg: {
    transform: 'scale(1)'
  }
}

export default ProfileLI;
