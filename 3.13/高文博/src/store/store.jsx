import { createStore } from 'redux'

const defaultState = {
	data: []
}


const reducer = (state = defaultState, action) => {
	let newState = JSON.parse(JSON.stringify(state))
	switch (action.type) {
		case 'CHANGE':
			newState[action.key] = action.value
			return newState
		case 'ADD':
			newState.data.push(action.value)
			return newState
		default:
			return newState
	}
}


const store = createStore(reducer)

export default store
