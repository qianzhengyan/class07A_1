import React from "react"
import {Switch,Redirect,Route} from "react-router-dom"

function Routerview(props){
    let {routes}=props

    let Routearr=routes&&routes.filter(item=>!item.to)
    let Redirectarr=routes&&routes.filter(item=>item.to).map(item=><Redirect to={item.to} path={item.path} key={index}></Redirect>)

    return <Switch>
        {
            Routearr.map((item,index)=>{
                return <Route key={index} path={item.path} render={(props)=>{
                    <item.component {...props} child={item.children}></item.component>
                }}></Route>
            }).concat(Redirectarr)
        }
    </Switch>
}

export default Routerview