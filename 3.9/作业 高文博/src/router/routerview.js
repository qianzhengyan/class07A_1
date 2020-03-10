import React from "react"

import {Switch,Redirect,Route} from "react-router-dom"

function Routerview(props){
    let {routes}=props

    let routerall=routes&&routes.filter(item=>!item.to)
    let redirectall=routes&&routes.filter(item=>item.to).map((item,index)=><Redirect to={item.to} path={item.path} key={index}></Redirect>)

    return <Switch>
        {
            routerall&&routerall.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                return <item.component {...props} child={item.children}></item.component>
            }}></Route>).concat(redirectall)
        }
    </Switch>
}

export default Routerview