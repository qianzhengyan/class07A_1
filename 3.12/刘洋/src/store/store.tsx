import {createStore} from 'redux'

interface Fn{
    (option?:any):any
}
let additem:Fn=(option?:any):any=>{
    return {
        type:"ADD_ITEM",
        option
    }
}
interface AddItem{
    type:string;
    str:string;
    id:number;
}
interface Delitam{
    type:string;
    id:number;
}
type Todo= AddItem | Delitam
const reducer=function(state:any[],action:Todo){
    switch(action.type){
        case "ADD_ITEM":

        return [
            ...state,
            {
                id:action.id,
                str:action.str
            }
        ]
    }
}