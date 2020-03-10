import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import Home from './views/Home'
import './App.css';
export class App extends Component {
	render() {
		return (
			<div>
				{console.log(this.props)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	
	getState(state){
		return {
			data:state
		}
	}
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)




