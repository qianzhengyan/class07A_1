import * as React from 'react'
const list = [{
    title:"我参与的投票",
    icon:""
},{
    title:"我创建的投票",
    icon:""
}]

const Logined = () =>{
    return <div>
        <ul>
            {
                list.map((item,key)=>{
                    return <li key={key}>{item.title}</li>
                })
            }
        </ul>
    </div>
}

export default Logined
