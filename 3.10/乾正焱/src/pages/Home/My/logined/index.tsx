import * as React from "react";
const list = [
    {
        title:"我参与的投票",
        icon:""
    },
    {
        title:'我创建的投票',
        icon:""
    }
]

const Logined = ()=>{
    return <div>
        <ul>
            {
                list.map((item,index)=>{
                    return <li key={index}>{item.title}</li>
                })
            }
        </ul>
    </div>
}

export default Logined;