import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Rote from "./router/index"
import {Provider} from "react-redux"
import store from "./store"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Rote></Rote>
      </Provider>
    
    </div>
  );
}

export default App;
