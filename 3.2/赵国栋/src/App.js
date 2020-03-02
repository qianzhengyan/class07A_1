import React, { Component } from 'react'
import Subject from "./utils/model"
let sub = new Subject()
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      input:'',
      progress:[],
      finish:[]
    }
  }
  changeInput(e){
    console.log(e.target.value)
    if(e.keyCode==13){
        sub.addNode({
          value:e.target.value,
          ischecked:false
        })
    }
    sub.subscibe((add,del)=>{
      this.setState({
        progress:add,
        finish:del
      })
    })
  }
  changeChecked(index){
    this.state.progress[index].ischecked = !this.state.progress[index].ischecked;
    this.setState({
      progress:this.state.progress
    })
    if(this.state.progress[index].ischecked){
        sub.delete(index)
    }
  }
  delNode(index){
    this.state.progress.splice(index,1)
    this.setState({
      progress:this.state.progress
    })
  }
  delNode1(index){
    this.state.finish.splice(index,1)
    this.setState({
      finish:this.state.finish
    })
  }
  render() {
    let {progress,finish} = this.state;
    return (
      <div>
        <div className="header">
          标题：<input type="text" onKeyUp={this.changeInput.bind(this)} placeholder='请输入标题'/>
        </div>
        
        <div className="center">
            <h3>正在进行中{progress.length}</h3>
            <ul className="progress">
              {
                progress && progress.map((item,index)=>{
                  return (
                    <li key={index}>{index+1}、
                      <input type="checkbox" checked={item.ischecked} onClick={this.changeChecked.bind(index)}/>
                      <span>{item.value}</span>
                      <button onClick={this.delNode.bind(this)}>删除</button>
                    </li>
                  )
                })
              }
            </ul>
            <h3>已经完成{finish.length}</h3>
            <ul className="finish">
              {
                finish && finish.map((item,index)=>{
                  return (
                    <li key={index}>{index+1}、
                      <input type="checkbox" checked={item.ischecked}/>
                      <span>{item.value}</span>
                      <button onClick={this.delNode1.bind(this)}>删除</button>
                    </li>
                  )
                })
              }
            </ul>
        </div>
      </div>
    )
  }
}




