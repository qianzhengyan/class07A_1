import React, { Component } from 'react'
import * as Router from 'react-router-dom'
import RouterView from './RouterView'
import * as history from 'history'
import routerConfig from './routerConfig'
let hist=history.createBrowserHistory()
export default class index extends Component {
    render() {
        return (
            <Router.Router history={hist}>
                <RouterView routers={routerConfig}></RouterView>
            </Router.Router>
        )
    }
}
