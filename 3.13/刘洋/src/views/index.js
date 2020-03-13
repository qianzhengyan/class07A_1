function getCompnent(name){
    const filtes=require.context("./",true,/\.tsx$/)
    // console.log(filtes.keys())
   return  filtes.keys().reduce((pre,current)=>{
        // console.log(filtes(current).default)
        let index1=current.lastIndexOf(".")
        let index2=current.lastIndexOf("/")
        let item=current.slice(index2+1,index1)
        pre[item]=filtes(current).default
        return pre
    },{})[name]
}
export default getCompnent