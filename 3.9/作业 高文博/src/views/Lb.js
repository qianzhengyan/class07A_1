import React, { Component } from 'react'
import axios from "axios"
import BScroll from "better-scroll"

import {connect} from "react-redux"
 class Lb extends Component {
   state={
       navlist:["点菜","评论","商家"],
       pp:0,
       list:[],
       cur:0
   }
    componentDidMount(){
        axios.get("/getdata").then(res=>{
            console.log(res.data.good)
            this.setState({
                list:res.data.good
            })
            this.scll=new BScroll(".right",{
              click:true,
                probeType:3
              })
        })
    }
    clickcolor(index){
        console.log(index)
        this.setState({
            pp:index
        })
    }
    clickred(index){
        this.setState({
            cur:index
        })
        this.scll.scrollToElement(".ul"+index,1000)
    }
    render() {
        console.log(this.props.list,"11111111111")
        let list=this.state.list
        return (
            <div className="lb">
                <div className="top">
                    {
                        this.state.navlist&&this.state.navlist.map((item,index)=>{
                            return(
                              <p key={index} className={`${index==this.state.pp?"active":""}`} onClick={()=>{this.clickcolor(index)}}>{item}</p>
                            )
                        })
                    }
                </div>
               <div className="top_main">
               <div className="left">
                    {
                      list&&list.map((item,index)=>{
                          return(
                          <span key={index} className={`${index==this.state.cur?"active":""}`}  onClick={()=>{this.clickred(index)}}>{item.name}</span>
                          )
                      })
                    }
                </div>
                <div className="right">
          <div className="box" ref="box">  
            {
              this.state.list && this.state.list.map((item, index) => {
                return (
                  <div className={`ul ${"ul"+index}`} key={index}>
                    <div className="li"><h1>{item.name}</h1></div>

                    <div className="li">
                      {
                            item.foods.map((it,int)=>{
                              return(
                      <div className="dl" key={int}>
                        <div className="dd" key={int}>
                            <img src={it.image} alt=""/>
                        </div>
                        <div className="dt">
                            <p> {it.name}</p>
                            <div className="aa">
                            <p>￥{it.price}</p>
                            <span onClick={()=>this.props.addfn()}>+</span>
                              <span>{it.count}</span>
                            <span>-</span>
                            </div>
                        </div>
                      </div>
                              )
                            })
                      }
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>
               </div>
            </div>
        )
    }
}
export default connect(
  (state)=>{
    let {list}=state
   
return{
   list
}
  },
  (dispatch)=>{
    return{
      addfn(){
        dispatch({type:"ADD_JIA"})
      }
    }
  }
)(Lb)