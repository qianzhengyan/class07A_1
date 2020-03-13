import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class App extends Component {
	static propTypes = {
		prop: PropTypes
	}
	constructor(){
		super()
		this.state={
			value:''
		}
	}
	change(e){
		this.setState({
			value:e.target.value
		})
	}
	cli(){
		
		this.props.add('data',this.state.value)
		
	}
	render() {
		return (
			<div>
				<p><input type="text" onChange={(e)=>this.change(e)}/><button onClick={()=>this.cli()}>添加</button></p>
				{this.props.data.map((v,i)=>{
					return <p key={i}>{v}</p>
				})}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		data:state.data
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
	  setState(key, value) {
		dispatch({ type: 'CHANGE', key, value })
	  },
	  add(key, value) {
		dispatch({ type: 'ADD', key, value })
	  }
	}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)


