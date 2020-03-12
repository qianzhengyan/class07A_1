import React, { Component } from 'react'
import {hotvotelist} from '../../api/api'
export default class VoteList extends Component {
    async componentDidMount(){
        let res = await hotvotelist();
        console.log(res,'投票列表')
    }
    render() {
        return (
            <div>
                投票列表
            </div>
        )
    }
}
