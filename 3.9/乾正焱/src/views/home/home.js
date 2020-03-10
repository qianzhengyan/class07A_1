import React, { Component } from 'react'
export default class home extends Component {
    constructor(){
        super();
        this.state={
            footerList:['首页','订单','我的'],
            ind:0,
            iconList:[
                {
                    icon:<span>1</span>,
                    text:"美食"
                },
                {
                    icon:<span>2</span>,
                    text:"美团超市"
                },
                {
                    icon:<span>3</span>,
                    text:"生鲜果蔬"
                },
                {
                    icon:<span>4</span>,
                    text:"美团专送"
                },
                {
                    icon:<span>5</span>,
                    text:"下午茶"
                },
                {
                    icon:<span>6</span>,
                    text:"汉堡披萨"
                },
                {
                    icon:<span>7</span>,
                    text:"小吃馆"
                },
                {
                    icon:<span>8</span>,
                    text:"家常菜"
                },
                {
                    icon:<span>9</span>,
                    text:"鲜花蛋糕"
                },
                {
                    icon:<span>10</span>,
                    text:"品牌连锁"
                }
            ]
        }
    }
    changeInd(index){
        this.setState({ind:index})
    }
    render() {
        let {footerList,ind,iconList} = this.state;
        return (
            <div className="home">
                {/* 顶部 */}
                <div className="header">
                    <button onClick={()=>{this.props.history.push('/address')}}>地址</button>
                    <span>八位教育 > </span>
                    <input type="text" placeholder="请输入商家名或商品名"/>
                </div>
                <div className="main">
                    {/* icon图标集 */}
                    <div className="icon">
                    {
                        iconList && iconList.map((item,index)=>{
                            return (
                                <ul>
                                    {item.icon}
                                    <li>{item.text}</li>
                                </ul>
                            )
                        })
                    }
                    </div>

                    <h3>----------附近商家----------</h3>
                </div>
                {/* 底部 */}
                <div className="footer">
                    {
                        footerList && footerList.map((item,index)=>{
                        return <span onClick={this.changeInd.bind(this,index)} className={ind==index?'active':''} key={index}>{item}</span>
                        })
                    }
                </div>
            </div>
        )
    }
}
