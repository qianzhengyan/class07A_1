import React, { Component } from 'react';
interface Iprops{
    history:any
}
interface IState{
    name:string
}
class voteList extends Component<Iprops,IState>{
    constructor(props:Iprops){
        super(props)
        this.state={
            name:""
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default voteList;