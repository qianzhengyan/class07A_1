import Login from '../views/Login/login'
import CreateVote from '../views/createVote/createVote'
import ForgetPass from '../views/forgetPass/forgetPass'
import Register from '../views/register/register'
import VoteList from '../views/voteList/voteList'
import Home from '../views/home/home'
import Index from '../views/home/index/index'
import My from '../views/home/my/my'


const routerCofig=[{
    path:"/index",
    component:Index
},{
    path:"/register",
    component:Register
},{
    path:"/voteList",
    component:VoteList
},{
    path:"/my",
    component:My
},{
    path:"/home",
    component:Home,
    children:[{
        path:"/home/my",
        component:My,
    },{
        path:"/home/index",
        component:Index,
    },{
        path:"/home",
        to:"/home/index"
    }]
},{
    path:"/forgetPass",
    component:ForgetPass
},{
    path:"/createVote",
    component:CreateVote
},{
    path:"/login",
    component:Login
},{
    path:"/",
    to:"/login"
}]

export default routerCofig