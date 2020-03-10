import React, { Component } from 'react'
import Routerview from "../../router/routerview"
import {NavLink} from "react-router-dom"
export default class Home extends Component {
    render() {
        let {child}=this.props
        console.log(child,"222222222222222")
        return (
            <div className="home">
                <div className="main">
                    <Routerview routes={child}></Routerview>
                </div>
                <div className="footer">
                    <NavLink to="/home/index">主页</NavLink>
                    <NavLink to="/home/dd">订单</NavLink>
                    <NavLink to="/home/my">我的</NavLink>
                </div>
            </div>
        )
    }
}
