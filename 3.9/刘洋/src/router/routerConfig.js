import routerList from './routerList'
import RouterView from './routerView'
import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
class routerConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routerList={routerList}></RouterView>
            </BrowserRouter>
        );
    }
}

export default routerConfig;