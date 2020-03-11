import React from "react"

import {BrowserRouter} from "react-router-dom"

import Routes from "./routerconfig"

import RouterView from "./routerviews"

class Rote extends React.Component{
    render(){
        return <BrowserRouter>
            <RouterView Routes={Routes}/>
        </BrowserRouter>
    }
}
export default Rote