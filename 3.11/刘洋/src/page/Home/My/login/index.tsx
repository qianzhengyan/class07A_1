import * as React from 'react'
import {withRouter,RouteComponentProps} from 'react-router'

const Login = ({history}:RouteComponentProps) => {
    return <div onClick={()=>{
        history.push('/login')
    }}>
        <button>登陆/注册 -></button>
    </div>
}

export default withRouter(Login)
