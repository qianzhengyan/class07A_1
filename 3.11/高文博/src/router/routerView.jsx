import React from 'react'
import { Route, Link, Redirect, Switch} from 'react-router-dom'

function MyView(props) {
    return(
        <Switch>
            {
                props.routerList.map((item, index) => {
                    return <Route key={index} path={item.path} render={(prop) => {
                        let Compon = item.component
                        if (item.children) {
                            return <Compon children={item.children} {...prop} />
                        } else {
                            return <Compon {...prop} />
                        }
                    }}/>
                })
            }
            <Redirect exact from="/" to="/home"/>
        </Switch>
    )
}

export default MyView