import { Component } from 'react';
import Login from '../views/Login/login'
import Createvote from '../views/createvote/createvote'
import Forgetpass from '../views/forgetpass/forgetpass'
import Register from '../views/register/register'
import Votelist from '../views/votelist/votelist'
import Home from '../views/home/home'
import Index from '../views/home/index/index'
import My from '../views/home/my/my'


const routerconfig=[
    {
        path:"/",
        to:"/login"
    },
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/index",
                component:Index
            },
            {
                path:"/home/my",
                component:My
            }
        ]
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/register",
        Component:Register
    },
    {
        path:"/createvote",
        component:Createvote
    },
    {
        path:"/forgetpass",
        component:Forgetpass
    },
    {
        path:"/votelist",
        component:Votelist
    }
]

export default routerconfig