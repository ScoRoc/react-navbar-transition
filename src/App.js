import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: false
    }
  };

  changePage = ()=> {
    this.setState({ profile: !this.state.profile})
  };

  render() {
    return (
      <div className="App">
        <Header changePage={this.changePage} />
        <Main profile={this.state.profile} />
        <Footer />
      </div>
    );
  }
}

export default App;
