import Add from "../views/Add/Add"
import Home from "../views/Home/Home"
import Lb from "../views/Lb/Lb"
import Shop from "../views/Shop/Shop"

import Dd from "../views/Home/Dd/Dd"
import Index from "../views/Home/Index/Index"
import My from "../views/Home/My/My"


let routes=[
    {
        path:"/add",
        component:Add
    },
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/dd",
                component:Dd
            },
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
        path:"/Lb",
        component:Lb
    },
    {
        path:"/shop",
        component:Shop
    },
    {
        path:"/",
        to:"/home"
    }
]
export default routes