import React, { Component } from 'react';
import './App.css';
import SwitchButton from './SwitchButton';

class App extends Component {
  state = {
    label: "Start",
    time: 0,
    active: false
  }
  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000) // setInterval returns an 'id' after it's called out
    }

    this.setState({
      active: !this.state.active
    })
  }

  addSecond = () => {
    this.setState({
      time: this.state.time + 1
    })
  }

  render() {
    return (
      <>
        <SwitchButton click={this.handleClick} active={this.state.active} />
        <p>{this.state.time}</p>
      </>
    )
  }
}

export default App;
