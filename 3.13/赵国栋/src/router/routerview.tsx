import React from 'react'
import {Switch,Redirect,Route} from "react-router-dom"

function routerview(props){
    let {routes}=props

    let componentArr=routes.filter(item=>item.component)
    let toArr=routes.filter(item=>item.to)

    return <Switch>
        {
            componentArr.map((item,index)=>{
                return <Route key={index} path={item.path}
                render={(props)=>{
                    return <item.component {...props} child={item.children}></item.component>
                }}>
                </Route>
            })
        }
        {
            toArr.map((item,index)=>{
                return <Redirect key={index} path={item.path} to={item.to}></Redirect>
            })
        }
    </Switch>
}


export default routerview


