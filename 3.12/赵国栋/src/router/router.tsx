import React, { Component } from 'react'
import {BrowserRouter} from "react-router-dom"
import Routerview from "./routerview"
import Routerconfig from "./routerconfig"

export default class router extends Component {
    render() {
        return (
            <div>
               <BrowserRouter>
               <Routerview routes={Routerconfig}></Routerview>
               </BrowserRouter>
            </div>
        )
    }
}
