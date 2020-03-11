import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './RouterView'
import routerConfig from './routerConfig'
export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routers={routerConfig}></RouterView>
            </BrowserRouter>
        )
    }
}
