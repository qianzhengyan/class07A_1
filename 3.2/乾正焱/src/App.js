import React, { Component } from 'react'
import Subject from "./utils/model";//引入观察者模式
let sub = new Subject();//实例化对象
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      input:'',//存放input的value值
      progress:[],//正在进行中
      finish:[]//已完成
    }
  }
  changeInput(e){//改变input框里面的值
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
  changeChecked(index){//改变input框的勾选状态
    this.state.progress[index].ischecked = !this.state.progress[index].ischecked;
    this.setState({
      progress:this.state.progress
    })
    if(this.state.progress[index].ischecked){//index对应的元素input框被选中
        sub.delete(index);//把正在进行的放入已经完成里面
    }
    // console.log(this.state.progress,'000')
  }
  delNode(index){//删除该元素
    // console.log('删除正在进行中的元素')
    this.state.progress.splice(index,1)
    this.setState({
      progress:this.state.progress
    })
  }
  delNode1(index){//删除该元素
    // console.log('删除已经完成中的元素')
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
          标题：<input type="text" onKeyUp={this.changeInput.bind(this)} placeholder='请输入标题名' />
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




