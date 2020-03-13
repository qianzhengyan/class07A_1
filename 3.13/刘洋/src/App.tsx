import React, { Component } from 'react';
import Routers from './router/index'
import getCompnent from './views/index'
getCompnent()
class App extends Component {
  render() {
    return (
      <div id="App">
        <Routers></Routers>
      </div>
    );
  }
}

export default App;