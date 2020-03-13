import React, { Component } from 'react'
import { Input ,Button,message} from 'antd';
import axios from "axios"
interface Iprops{
    name:any,
    names:any,
    loginfn:Function,
    history:any
}
export default class Login extends Component <Iprops>{
    state={
        list:[],
        name:'',
        pwd:""
    }
    loginfn=()=>{
        let name =this.state.name
        let pwd =this.state.pwd
        axios.get("/getlogin").then(res=>{
            // console.log(res.data)
           this.setState({
            list:res.data
           })
          this.state.list.map((item:any,index:any)=>{
                if(item.name1==name&&item.pwd==pwd){
                   this.props.history.push("/home")
                }else{
                    alert("用户没有注册或者密码错误")
                    console.log("5555555555555")
                    this.props.history.push("/registry")
                }
           })
        })
       
        console.log(name,"111")

        
    }
    render() {
        return (
            <div>
                <Input placeholder="Basic usage" value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}}/>
                <Input.Password placeholder="input password"  value={this.state.pwd} onChange={e=>{this.setState({pwd:e.target.value})}}/>
                <Button type="primary" onClick={this.loginfn.bind(this)}>Primary</Button>
            </div>
        )
    }
}
