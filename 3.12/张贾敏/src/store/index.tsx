import { createStore } from "redux"

let list={data:[]}
function Redcer(state:any=list,actions:any){
    state = JSON.parse(JSON.stringify(state))
    switch(actions.type){
        case "ADDDATA":
             state.data.push(actions.name)
            //   console.log(state.data,"2222")
        return state
        case "SC":
            let spl = state.data.findIndex((item:any) => {
                return item.id == actions.index
            })
            console.log(spl,"55555555555555")
            if (spl) {
                state.data.splice(spl, 1)
            }
        default:
            return state

    }
}

let store=createStore(Redcer)
export default store

