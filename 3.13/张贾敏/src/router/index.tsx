import React from "react"

import {BrowserRouter,Switch,Redirect,Route} from "react-router-dom"

import Home from "../views/Home/Home"
import Detail from "../views/Detail/Detail"
import Login from "../views/Login/Login"
import Registry from "../views/Registry/Registry"
export default class index extends React.Component{
    render(){
        return <BrowserRouter>
           <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/registry" component={Registry}></Route>
                <Redirect from="/" to="/login"></Redirect>
           </Switch>
        </BrowserRouter>
    }
}