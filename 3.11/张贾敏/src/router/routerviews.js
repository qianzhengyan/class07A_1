import * as React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom'

class Routerview extends React.Component{
  
render(){
const {Routes} = this.props
const RouteArr =Routes&&Routes.filter((item)=>item!=item.to);
const redirect =Routes&&Routes.filter((item)=>item=item.to).map((item,index)=><Redirect key={index} from={item.from} to={item.to}/>)
return<Switch>
    {
        RouteArr.map((item,index)=>{
           return <Route key={index} path={item.path} render={(props)=>{
              return  <item.component {...props} child={item.children}/>
            }}/>
        }).concat(redirect)
    }

</Switch>

}
}
export default Routerview

