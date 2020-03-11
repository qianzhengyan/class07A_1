import React, { Component } from 'react'

export default class Registry extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入手机号"/>
                <input type="password" placeholder="请输入密码"/>
                <button type="button" >注册</button>
            </div>
        )
    }
}
