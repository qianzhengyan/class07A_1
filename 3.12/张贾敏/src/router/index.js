import React from "react"

import {BrowserRouter} from "react-router-dom"

import routes from "./routerconfig"

import Routerview from "./routerview"

function Rote(){
     return<BrowserRouter>
         <Routerview routes={routes}></Routerview>
     </BrowserRouter>
}
export default Rote