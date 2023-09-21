import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MountingExample extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: 'Hello, React!' });
    }, 2000);
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default MountingExample;