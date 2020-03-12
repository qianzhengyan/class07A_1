import React, { Component } from 'react'
import { connect } from 'react-redux';
interface Iprops{
    name:any
    list:any
    newlist:any,
    name1:any,
    scfn:Function,
    addfn:Function
}
class Login extends Component <Iprops>{
    state={
        name:"",
        list:"",
        // newlist:[]
    }
   
        changefn(e:any){
            //    console.log(e,"111111111111111")
               let name=e.target.name;
               console.log(name,"444444")
               this.setState({
                   [name]:e.target.value,
                   list:e.target.value
               })
        }
        keydownfn(e:any){
             if(e.keyCode===13){
                //  let name1=this.state.name
                //  let list=this.state.list
                //  console.log(name1,"22",list,"888888888")
                //    list.push(name1)

                // this.setState({
                //     list
                // })
            //   this.setState({
            //     newlist:[...this.state.newlist,this.state.list],
            //     name:''
            //   })

            //   console.log(this.state.newlist)
             
             }
        }
    render() {
        console.log(this.props.newlist.data,"444444444444444")
        let newlist=this.props.newlist.data
        return (
            <div>
               <label><input type="text" value={this.state.name} name="name" onChange={this.changefn.bind(this)} onKeyDown={this.keydownfn.bind(this)}/>
                <button onClick={()=>this.props.addfn(this.state.name)}>添加</button>
               </label>
               <div>
                   {
                       newlist&&newlist.map((item:any,index:any)=>{
                           return(
                           <div key={index}>
                               <li>{item}</li>
                           <button onClick={()=>{this.props.scfn(index)}}>删除</button>
                           </div>
                           )
                       })
                   }
               </div>
               <div>
                   Show:
                   <button>All</button>
                   <button>Action</button>
                   <button>Complated</button>
               </div>
            </div>
        )
    }
}
export default connect(
   (state)=>{
       return{
        newlist:state
       }
   },
   (dispath)=>{
       return{
        scfn(index:any){
            dispath({type:"SC",index})
        },
        addfn(name:any){
            dispath({type:"ADDDATA",name})
        }
       }
   }
)(Login)