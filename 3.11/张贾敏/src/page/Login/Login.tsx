import React, { Component } from 'react'
// import MockUrl from '../../until/index'
import axios from "axios"
interface Iprops{
    history:any
}
 class Login extends Component <Iprops> {
     start={
         name:"",
         pwd:""
     }
    componentDidMount(){
         axios.get("/getshop").then(res=>{
             console.log(res.data)
         })
    }
    render() {
        return (
            <div className="login">
                  <label> <input type="text" name="name" value={this.start.name}/></label>
            </div>
        )
    }
}
export default Login