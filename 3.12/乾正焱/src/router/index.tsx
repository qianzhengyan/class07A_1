import * as React from "react";
import * as Router from 'react-router-dom';
import {RouterProps} from "./index.d"//定义了routerConfig history
import RouterView from './router.view'
import routerConfig from './router.config'
class Routers extends React.Component<RouterProps>{
    public render(){
        return <Router.Router history={this.props.history}>
            <RouterView routerConfig={routerConfig}></RouterView>
        </Router.Router>
    }
}

export default Routers;