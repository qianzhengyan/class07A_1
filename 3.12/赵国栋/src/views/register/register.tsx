import React, { Component } from 'react'

export default class register extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入手机号"></input>
                <input type="text" placeholder="请输入密码"></input>
                <button className="btnzc">注册</button>
            </div>
        )
    }
}
