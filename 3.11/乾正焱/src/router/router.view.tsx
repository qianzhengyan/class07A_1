import * as React from "react";
import * as Router from "react-router-dom";
import { Props, RouterItem, RouterRedirect } from './index.d';
class RouterView extends React.Component<Props>{
    public render() {
        let { routerConfig } = this.props;//获取路由路径
        let routerView = routerConfig.filter(item => !item.redirect);//没有重定向的路由路径
        let routerRedirect = routerConfig.filter(item => item.redirect);//只有重定向的路由路径
        return (
            <Router.Switch>
            {
                routerView.map((item: RouterItem, index: number) => {
                    return <Router.Route
                        key={index}
                        path={item.path}
                        render={(props) => {
                            return <item.component
                                title={item.title}
                                routerConfig={item.children}
                                {...props}>
                            </item.component>
                        }}
                    >
                    </Router.Route>
                }).concat(
                    routerRedirect.map((item:RouterRedirect,index:number)=>{
                        return <Router.Redirect
                        key={index}
                        from={item.path}
                        to={item.redirect}
                        ></Router.Redirect>
                    })
                )
            }
        </Router.Switch>
        )
    }
}

export default RouterView;