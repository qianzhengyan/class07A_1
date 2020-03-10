import Index from '../views/Index/Index'
import Login from '../views/Login/Login'

const routerList=[{
    path:"/",
    to:"/index"
},{
    path:"/login",
    component:Login
},{
    path:"/index",
    component:Index
}]

export default routerList