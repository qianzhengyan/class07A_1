//二级路由的入口文件
import React, { Component } from 'react'
import * as Router from 'react-router-dom'
// import RouterView from './RouterView'

interface HomeProps{//定义接口的时候，接口首字母必须大写
    routerConfig:any[]
}
class Home extends Component<HomeProps>{
    render() {
        return (
            <div>
                <main>
                    {/* <RouterView routerConfig={this.props.routerConfig}/> */}
                </main>
                <footer>
                    <Router.NavLink to={'./home/index'}>首页</Router.NavLink>
                    <Router.NavLink to={'./home/my'}>我的</Router.NavLink>
                </footer>
            </div>
        )
    }
}


export default Home