import React, { Component } from 'react'
import axios from "axios";
import "./data/data.js"
import List from "./components/list"
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      ind: 0,//初始下标
      dataList: [],//总数据
      aloneList: {},//单一数据
      count:0//计算票房总价
    }
  }
  tab(index) {//实现顶部tab切换的效果
    this.setState({
      ind: index,
    })
    this.getDate()
  }
  componentDidMount() {//初始化渲染右侧列表的数据
    this.getDate()
  }
  async getDate(){//获取data里面的数据并更新数据计算总票房数
    let res = await axios.get('/getdata');
    // console.log(res.data);//拿到总数据
    this.setState({
      dataList: res.data,
      aloneList: res.data[this.state.ind]
    })
    // 计算总票房数
    let count = this.state.aloneList.list.reduce((prev,next)=>{
      return prev + next.count;
    },0)
    this.setState({count})
  }
  render() {
    let { dataList, ind, aloneList ,count} = this.state;
    return (
      <div className="app">
        <div className="header">
          {
            dataList && dataList.map((item, index) => {
              return <span className={ind === index ? 'active' : ''} onClick={this.tab.bind(this, index)} key={index}>{item.navTitle}</span>
            })
          }
        </div>
        <div className="center">
          <div className="left">
            <h3>{aloneList && aloneList.navTitle}</h3>
            <div className="box">
              {this.props.item}
            </div>
            <p>今日票房总价<b>{count}</b>万</p>
          </div>
          {/* 右侧数据列表 */}
          <List aloneList={aloneList.list}></List>
        </div>
      </div>
    )
  }
}
