import React, { Component, } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div> Ho jaye please </div>
    );
  }
}

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
