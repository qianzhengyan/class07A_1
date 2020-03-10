import React from "react"

import ChangePassword from "../page/ChangePassword/ChangePassword"
import CreateVote from "../page/CreateVote/CreateVote"
import Home from "../page/Home/Home"
import Login from "../page/Login/Login"
import Registry from "../page/Registry/Registry"
import VoteList from "../page/VoteList/VoteList"

let routes=[
    {
        path:"/changepassword",
        component:ChangePassword
    },
    {
        path:"/vreatevote",
        component:CreateVote
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/registry",
        component:Registry
    },
    {
        path:"/votelist",
        component:VoteList
    }
]

export default routes
