import React, { Component } from 'react';
import Wacther from "./sub"
let wacther = new Wacther(); 
class Search extends Component {
  state={
    name:''
  }
  onChangeFn(e){
    let name=e.target.name;
    console.log(4444)
    this.setState({
      [name]:e.target.value
    })
    
  }
  onChangeFn1(e) {
    console.log(e.keyCode,"1111111111111111")
    if(e.keyCode===13){
      wacther.emit('title', e.target.value);
    }
  
  }
  render() {
    return (
      <div>
          TodoList
        <input type="text" value={this.state.name} name="name" onChange={e=>{this.onChangeFn(e)}} onKeyDown={e=>{this.onChangeFn1(e)}}/>
      </div>
    )
  }
 
}
class Subj extends Component {
  constructor(props) {
    super(props);
    wacther.on('title', (title) => {
      let arr = this.state.title;
      console.log(arr,"456")
      arr.push(title);
      this.setState({
        title: arr
      })
    })
    wacther.on('Subj', (title) => {
      let arr = this.state.title;
      arr.push(title);
      this.setState({
        title: arr
      })
    })
    this.state = {
      title: []
    }
  }
  getone(a) {
    let arr = []
    this.state.title.map(item => {
      if (item === a) {
        return
      }
      arr.push(item)
    })
    this.setState({
      title: arr
    })
    wacther.emit('downfn', a)
  }
  render() {
    return (
      <div>
        <b>已经完成</b>
        {this.state.title.map((a, b) => {
          return (
            <div key={b}>
              <span>{b + 1}</span>
              <input type="checkbox" name="" id="" onChange={() => this.getone(a)} />
              <p key={b}>{a}</p>
              <p>删除</p>
            </div>
          )
        })}
      </div>
    )
  }
}
class Downfn extends Component {
  constructor(props) {
    super(props);
    wacther.on('downfn', (a) => {
      let arr = this.state.obj;
      arr.push(a);
      this.setState({
        obj: arr
      })
    })
    this.state = {
      obj: []
    }
  }
  getanyone(a) {
    let arr = []
    this.state.obj.map(item => {
      if (item === a) {
        return
      }
      arr.push(item)
    })
    this.setState({
      obj: arr
    })
    wacther.emit('Subj', a)
  }
  render() {
    return (
      <div>
        <b>没有完成</b>
        {this.state.obj.map((a, b) => {
          return (
            <div key={b}>
              <span>{b + 1}</span>
              <input type="checkbox" name="" id="" onChange={() => this.getanyone(a)} />
              <p key={b}>{a}</p>
              <p>删除</p>
            </div>
          )
        })}
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Subj />
        <Downfn />
      </div>
    )
  }
}
export default App