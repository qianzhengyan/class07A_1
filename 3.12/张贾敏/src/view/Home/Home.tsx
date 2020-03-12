import React, { Component } from 'react'
import Routerview from "../../router/routerview"
import {NavLink} from "react-router-dom"
interface Iprops{
    child:null
}
export default class Home extends Component <Iprops> {
    render() {
        return (
            <div>
                <div className="top">
                   <NavLink to="/home/book">书架</NavLink>
                   <NavLink to="/home/comon">电影</NavLink>
                </div>
                <div className="main">
                    <Routerview routes={this.props.child}></Routerview>
                </div>
            </div>
        )
    }
}
