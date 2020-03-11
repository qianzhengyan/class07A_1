import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入手机号"></input>
                <input type="text" placeholder="请输入密码"></input>
                <button>登录</button>
            </div>
        )
    }
}
