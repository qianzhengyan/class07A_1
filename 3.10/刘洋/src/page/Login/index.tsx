import * as React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入手机号"/>
                <input type="password" placeholder="请输入密码"/>
                <button type="button" >登陆</button>
            </div>
        )
    }
}

export default Login