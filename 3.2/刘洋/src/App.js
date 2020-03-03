import React, { Component } from 'react';
import './App.css';
import Subject from './util/util'
let sub=new Subject()
class App extends Component {
  constructor(){
    super()
    this.state={
      val:""
    }
  }
  chanVal(e){
    console.log(e.keyCode)
    if(e.keyCode===13){
      sub.emit({
        val:e.target.value,
        is:false
      })
    }
    
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={(e)=>{this.chanVal(e)}}/>
        <Item></Item>
      </div>
    );
  }
  
}

class Item extends Component {
  constructor(){
    super()
    sub.on((data,delData)=>{
      this.setState({
        data:data,
        delData:delData
      })
    })
    this.state={
      data:[],
      delData:[]
    }
  }
  del(index){
    if(this.state.data[index].is){
      sub.del(index)
    }else{
      alert('打勾');
    }
    
  }
  chanIs(index){
    // sub.chag(index)
    this.state.data[index].is=!this.state.data[index].is
    this.setState({
      data:this.state.data
    })
  }
  render() {
    let {data,delData}=this.state
    return (
      <div>
        <h2>正在完成{this.state.data.length}</h2>
        {
          data&&data.map((item,index)=>{
            return (
              <ul key={index}>
                <li>{index+1} <input type="checkbox" checked={item.is} onChange={()=>{this.chanIs(index)}}/></li>
                <li>{item.val}</li>
                <li onClick={()=>{this.del(index)}}>删除</li>
              </ul>
            )
          })
        }
        <h2>已经完成{this.state.delData.length}</h2>
        {
          delData&&delData.map((item,index)=>{
            return (
              <ul key={index}>
                <li>{item.val}</li>
              </ul>
            )
          })
        }
      </div>
      
    );
  }
}

function Gao(App){
  
  return class Ccc extends Component {
          render(){
            return (
              <div>
                <App></App>
                八维
              </div>

            )
          }
        }
}

export default Gao(App);