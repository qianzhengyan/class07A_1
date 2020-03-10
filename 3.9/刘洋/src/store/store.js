import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const reducer=(state=[],actions)=>{
    // switch(actions.type){
    //     case "JIA":
            
    // }
}

let store=createStore(reducer,applyMiddleware(thunk))

export default store