const {createStore}=require('redux')
const instState={
    data:1
}
const reducers =(state=instState,action)=>{
    let newState={...state}
    switch (action.type) {
        case 'ADD':
            
            break;
        default:
            return newState
    }
}
const store=createStore(reducers)
export default store

