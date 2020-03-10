import React, { Component } from 'react'
import axios from "axios";
import data from '../../data/data';
export default class address extends Component {
    constructor(){
        super();
        this.state={
            addressList:[]
        }
    }
    async componentDidMount(){
        let res = await axios.get('/getdata');
        console.log(res.data)
        this.setState({
            addressList:res.data
        })
    }
    render() {
        let {addressList} = this.state;
        return (
            <div className="address">
                <div className="header">
                    <span>返回</span>
                    <span>地址列表</span>
                    <span></span>
                </div>
                <div className="main">
                    {
                        addressList && addressList.map((item,index)=>{
                            return (
                                <div className="item">
                                    <p>{item.address}</p>
                                <p>
                                    <span>{item.name}</span>
                                    <span>{item.phone}</span>
                                </p>
                                <p>
                                    <button>编辑</button>
                                    <button>删除</button>
                                </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="footer">
                    新增收货地址
                </div>
            </div>
        )
    }
}
