import React, { Component } from 'react'
import { super } from '@babel/types';

export default class login extends Component {
    constructor(props:props){
        super(props)
        this.state={
            phone:"",
            pass:""
        }
    }
    ipt(){
        this.state
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入手机号" name="phone" onChange={(e)=>{this.ipt(e)}}></input>
                <input type="text" placeholder="请输入密码" name="pass" onChange={(e)=>{this.ipt(e)}}></input>
                <button onClick={()=>{this.login()}}>登录</button>
            </div>
        )
    }
}
