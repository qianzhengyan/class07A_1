import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
function routerView (props){
    let {routerList}=props
    //找出不包含重定向的路由
    let componentArr=routerList.filter(item=>item.component)
    
    //找出包含重定向的路由
    let toArr=routerList.filter(item=>item.to).map((item,index)=>{
        return <Redirect path={item.path} to={item.to} key={index}></Redirect>
    })

    return <Switch>
        {
            componentArr&&componentArr.map((item,index)=>{
                return <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} child={item.children}></item.component>
                }}></Route>
            }).concat(toArr)
        }
    </Switch>
}
export default routerView;