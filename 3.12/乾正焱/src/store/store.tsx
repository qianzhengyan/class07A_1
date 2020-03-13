import {createStore} from 'redux'
let data={
    list:[]
}
function reducer(state=data,action:any):any{
    state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'ADD':
                state.list.push(action.value);
            return state;
        case "SEL":
            let ind = state.list.findIndex(item=>item.id==action.id);
            state.list.splice(ind,1);
            return state;
        default:
            return state;
    }
}

let store = createStore(reducer);

export default store;