import React, { Component } from 'react';
import getViews from './page/index'
import Routers from './router/routers'
console.log(getViews())

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