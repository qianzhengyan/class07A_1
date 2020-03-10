import React from "react"

import {BrowserRouter} from "react-router-dom"

import Routerview from "./routerview"

import routes from "./routerconfig"


function Rooter(){
    return <BrowserRouter>
    <Routerview routes={routes}></Routerview>
    </BrowserRouter>
}

export default Rooter