import ChangePassword from '../page/ChangePassword/ChangePassword';
import CreateVote from '../page/CreateVote/CreateVote';
import Home from '../page/Home/Home';
import Index from '../page/Home/Index/Index';
import Login from '../page/Login/Login';
import Registry from '../page/Registry/Registry';
import VoteList from '../page/VoteList/VoteList';
// import My from "../page/Home/My/My"
import Myy from "../page/Home/Myy/Myy"
const Routes =[
    {
        path:'/home',
        component:Home,
       children:[
           {
            path:'/home/index',
            component:Index,
           },
           {
               path:"/home/myy",
               component:Myy
           }
       ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/registry',
        component:Registry
    },
    {
        path:'/voteList',
        component:VoteList
    },
    {
        path:'/ChangePassword',
        component:ChangePassword
    },
    {
        path:'/CreateVote',
        component:CreateVote
    },
    {
        from:"/",
        to:"/home"
    }
]
export default Routes