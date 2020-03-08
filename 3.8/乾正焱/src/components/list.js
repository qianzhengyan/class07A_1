import React, { Component } from 'react'

export default class list extends Component {
    constructor(){
        super()
        this.state={
            ind:''
        }
    }
    getAloneList(item){
        // console.log(item)
    }
    changeX(item,index){//是否收藏
        let list = this.props.aloneList;
        list.splice(index,1);//先删除
        list.unshift(item)//后添加
        this.setState({ind:index})
        
    }
    render() {
        let {ind} = this.state;
        return (
            <div className="right">
                <div>
                    <h4>影片(点击☆优先展示)</h4>
                    <span>分账票房(万)</span>
                    <span>票房占比</span>
                    <span>排片占比</span>
                    <span>场均人次</span>
                    <span>是否收藏</span>
                </div>
                {
                    this.props.aloneList && this.props.aloneList.map((item, index) => {
                        return (
                            <div key={index} onClick={this.getAloneList.bind(this,item)}>
                                <h4>0{item.id} {item.title}</h4>
                                <span>{item.count}</span>
                                <span>{item.per}%</span>
                                <span>{item.scale}</span>
                                <span>{item.starcount}</span>
                                {
                                    ind===index?
                                    <span className="red" onClick={this.changeX.bind(this,item,index)}>☆</span>:
                                    <span onClick={this.changeX.bind(this,item,index)}>☆</span>
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
