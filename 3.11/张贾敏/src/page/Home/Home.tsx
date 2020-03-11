import * as React from 'react'
import {NavLink,Switch,Route} from 'react-router-dom'
import Routerview from '../../router/routerviews'
// import Index from "./Index/Index"
// import Myy from "./Myy/Myy"
interface HomeProps {
    title:string,
    routerConfig:any[],
    child:any
}

class Home extends React.Component<HomeProps> {   
    render() {
        return <div className="home">
                <div className="main">
                    <Routerview Routes={this.props.child}></Routerview>
                    {/* <Switch>
                        <Route path="/home/index" component={Index}></Route>
                        <Route path="/home/myy" component={Myy}></Route>
                    </Switch> */}
                </div>
                <div className="footer">
                    <NavLink to="/home/index" >首页</NavLink>
                   <NavLink to="/home/myy">我的</NavLink>
                </div>
            </div>
        
    }
}
export default Home