import React, { Component } from 'react';
import Todos from './components/Todos.js';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Todos />
      </div>
    )
  }
}

