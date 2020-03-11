import React, { Component } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
interface Props{
    routers:any
}
interface ComponentArr{
    component:any,
    to:string,
    path:string,
    children:any[]
}
class RouterView extends Component<Props> {
    render() {
        let {routers}=this.props
        let componentArr=routers.filter((item:ComponentArr)=>item.component)
        let toArr=routers.filter((item:ComponentArr)=>item.to).map((item:ComponentArr,index:number)=>{
            return <Redirect key={index} to={item.to}></Redirect>
        })
        return (
            <Switch>
            {
                componentArr&&componentArr.map((item:ComponentArr,index:number)=>{
                    return <Route key={index} path={item.path} render={(props)=>{
                        return <item.component {...props} routers={item.children}></item.component>
                    }}></Route>
                }).concat(toArr)
            }
        </Switch>
        );
    }
}
// function RouterView(props){
//     let {routers}=props
//     let componentArr=routers.filter(item=>item.component)
//     let toArr=routers.filter(item=>item.to).map((item,index)=>{
//         return <Redirect key={index} to={item.to}></Redirect>
//     })
//     return <Switch>
//         {
//             componentArr&&componentArr.map((item,index)=>{
//                 return <Route key={index} path={item.path} render={(props)=>{
//                     return <item.component {...props} routers={item.children}></item.component>
//                 }}></Route>
//             }).concat(toArr)
//         }
//     </Switch>
// }


export default RouterView;