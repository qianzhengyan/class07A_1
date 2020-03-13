import React, { Component } from 'react'
import * as Router from 'react-router-dom';
import RouterView from '../../router/router.view'

// 定义一个借口
interface HomeProps{
    title:string,
    routerConfig:any[]
}
export default class home extends Component<HomeProps> {
    render() {
        console.log(this.props.routerConfig,'routerConfig')
        return (
            <div>
                <main>
                    <RouterView routerConfig={this.props.routerConfig}></RouterView>
                </main>

                <footer>
                    <Router.NavLink to={'/home/index'}>首页</Router.NavLink>
                    <Router.NavLink to={'/home/my'}>我的</Router.NavLink>
                </footer>
            </div>
        )
    }
}
