
import getCompnent from '../views/index'

const routerCofig=[{
    path:"/register",
    component:getCompnent("register")
},{
    path:"/voteList",
    component:getCompnent("voteList")
},{
    path:"/home",
    component:getCompnent("home"),
    children:[{
        path:"/home/my",
        component:getCompnent("my"),
    },{
        path:"/home/index",
        component:getCompnent("index"),
    },{
        path:"/home",
        to:"/home/index"
    }]
},{
    path:"/forgetPass",
    component:getCompnent("forgetPass")
},{
    path:"/createVote",
    component:getCompnent("createVote")
},{
    path:"/login",
    component:getCompnent("login")
},{
    path:"/",
    to:"/login"
}]

export default routerCofig