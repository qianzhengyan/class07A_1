import React, { Component } from 'react';
import getViews from './page/index'
import Routers from './router/index'
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