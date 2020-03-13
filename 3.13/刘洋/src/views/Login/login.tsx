import React, { Component } from 'react';
import { Button,Input } from 'antd'
import {Pprops,Sstate} from '../../interface/interface'
class login extends Component <Pprops,Sstate> {
    constructor(props:Pprops){
        super(props)
        
        this.state={
            name:"",
            pass:""
        }
    }
    intoName(e:any):void{
        let keys:string=e.target.name
        this.setState({
            [keys]:e.target.value
        },()=>{
            console.log(this.state.name,this.state.pass)
        })
    }
    login():void{
        
    }
    render() {
        return (
            <div className="login">
                <Input placeholder="登陆" name="name" onChange={(e)=>{this.intoName(e)}}/>
                <Input placeholder="注册" name="pass" onChange={(e)=>{this.intoName(e)}}/>
                <Button type="primary" onClick={()=>{this.login()}}>登陆</Button>
            </div>
        );
    }
}

export default login;