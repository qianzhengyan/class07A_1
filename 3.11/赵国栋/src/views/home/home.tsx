import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import Routerview from "../../router/routerview"

export default class home extends Component {
    render() {
        let {child}=this.props
        return (
            <div className="box">
            <div className="main">
            <Routerview routes={child}></Routerview>
            

            </div>

            <div className="footer">
            <NavLink to="/home/index">首页</NavLink>
            <NavLink to="/home/my">我的</NavLink>

            </div>
                
            </div>
        )
    }
}
