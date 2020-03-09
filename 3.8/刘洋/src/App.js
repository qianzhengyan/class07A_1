import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import quickSort from './util/quickSort'
console.log(quickSort)
class App extends Component {
  constructor(){
    super()
    this.state={
      tab:["综合票房","分账票房"],
      list:[],
      index:0,
      flag:0
    }
  }
 async componentDidMount(){
    let res=await axios.get("/getlist")
    this.setState({
      list:res.data.list
    })
  }
  tab(index){
    this.setState({
      index:index,
      flag:index
    })
    
  }
  toTop(ind){
    let {index,list}=this.state
    let arr=list[index]
    if(arr[ind].flag){
      let item=arr[ind]
      item.flag=false
      let newArr=arr.filter(li=>{
        
        return li.flag==false
      })
      
      for(let i=0;i<newArr.length;i++){
        let a=arr.findIndex(b=>b.id==newArr[i].id)
        arr.splice(a,1)
      }
      
      let q= quickSort(newArr)
      let w= quickSort(arr)
      console.log(q,w)
      let brr=w.concat(q)
      list[index]=brr
      this.setState({
        list
      })
      
    }else{
      let item=arr.splice(ind,1)
      item[0].flag=true
      arr.unshift(item[0])
      this.setState({
        list:list
      })
    }
    
  }
  render() {
    let {list,tab,index}=this.state
    return (
      <div className="App">
          <h1>
            <div>
              {
                tab.map((item,index)=>{
                return <span key={index} onClick={()=>{this.tab(index)}} className={index==this.state.flag?"cla":""}>{item}</span>
                })
              }
            </div>
          </h1>
          <div className="main">
            <p>
              <span></span>
              <span>序号</span>
              <span>影片</span>
              <span>综合票房</span>
            </p>
            <ul>
            {
              list[index]&&list[index].map((item,index)=>{
                return <li key={index}>
                          <span><div className={item.flag?"sxin":"kxin"} onClick={()=>{this.toTop(index)}}></div></span>
                          <span>{item.id}</span>
                          <span>{item.name}</span>
                          <span>{item.num}</span>
                       </li>
              })
            }
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
