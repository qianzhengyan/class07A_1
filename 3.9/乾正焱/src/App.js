import React from 'react';
import {Redirect,Route,Switch} from "react-router-dom"
import './App.css';
import home from './views/home/home';
import address from './views/address/address';
import menu from './views/menu/menu';
import submit from './views/submit/submit';
import pay from './views/pay/pay';

function App() {
  return (
    <div className="App">
          <Switch>
            <Route path="/home" component={home}></Route>
            <Route path="/address" component={address}></Route>
            <Route path="/menu" component={menu}></Route>
            <Route path="/submit" component={submit}></Route>
            <Route path="/pay" component={pay}></Route>
          </Switch>
    </div>
  );
}

export default App;
