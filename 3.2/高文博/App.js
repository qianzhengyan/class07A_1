import React, { Component } from 'react'
import Watcher from './Watcher'
let watcher = new Watcher()
class Input extends Component {
	render() {
		return (
			<div>
				TodoList<input type="text" onChange={(e)=>{
					let obj={title:e.target.value,falg:true}
					this.setState({obj})
				}}/> <button onClick={()=>{
					watcher.emit('List',this.state.obj)
				}}>确定</button>
			</div>
		)
	}
}
class Box extends Component {
	constructor(props) {
		super(props)
		watcher.on('List',(obj)=>{
			let list=this.state.list
			list.push(obj)
			this.setState({list})
		})
		this.state = {
			list: [],
			obj:{}
		}
	}
	render() {
		return (
			<div>
				<h1>正在进行</h1>
				<div>
					{
						this.state.list.map((v, i) => {
							if (v.falg) {
								return <div key={i}><input onChange={()=>{
									let arr=this.state.list
									arr[i].falg=!this.state.list[i].falg
									this.setState({
										list:arr
									})
								}} type="checkbox" checked={!v.falg}/>{v.title}</div>
							}
						})
					}
				</div>
				<h1>已完成</h1>
				<div>
					{
						this.state.list.map((v, i) => {
							if (!v.falg) {
								return <div key={i}><input onChange={()=>{
									let arr=this.state.list
									arr[i].falg=!this.state.list[i].falg
									this.setState({
										list:arr
									})
								}} type="checkbox" checked={!v.falg}/>{v.title}</div>
							}
						})
					}
				</div>
			</div>
		)
	}
}
class Content extends Component {
	render() {
		return (
			<div>
				<Input />
				<Box />
			</div>
		)
	}
}
export default Content