import { createStore } from "redux";

 let list={list:[]}
function reducer(state=list,action){
    state=JSON.parse(JSON.stringify(state))
    switch(action.type){
      case "ADD_JIA":
          console.log(state)
          return state;
          default: return state
    }
}

let store =createStore(reducer)

export default store