import Home from "../view/Home/Home"
import Login from "../view/Login/Login"

import Book from "../view/Home/Book/Book"
import Comon from "../view/Home/Comon/Comon"

const routes=[
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/book",
                component:Book
            },
            {
                path:"/home/comon",
                component:Comon
            },
            {
                from:"/home",
                to:"/home/book"
            }
        ]
    },
    {
        path:"/login",
        component:Login
    },
    {
        from:"/",
        to:"/login"
    }
]

export default routes