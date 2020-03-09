<template>
  <div class="home">
    <div class="header">
          <div v-for="(item,index) in list" :key="index" @click="clickFn(index)" :class="{active:index==indexone}">
            {{item}}
          </div>
    </div>
    <div class="main">
      <div class="left">
          <div class="left_a">
             
                <ul v-if="ind">
                  <li>
                     <h3>
                    <p>{{pp.txt}}</p>

                  </h3>
                  </li>
                 <li>
                <div>
                  <p>上映{{pp.txt1}}天</p>
                  <p>{{pp.txt2}}亿</p>
                </div>
                </li>
                  <li v-if="this.indexone==0">综合票房(万)</li>
                  <li v-else-if="this.indexone==1">分账票房(万)</li>
                <li>{{pp.pf}}万</li>
                <li>票房占比例{{pp.zb}}%</li>
                <li>
                  <div>
                    <p>排片场次</p>
                     <p>{{pp.cc}}</p>
                     <p>排片占比{{pp.zb1}}%</p>
                  </div>
              
               <div>
                  <p>场均人次</p>
                  <p>{{pp.rc}}</p>
                <p>上座率{{pp.sz}}%</p>
               </div>
                </li>
               
                </ul>
             <h2  v-else>点击星星优先展示</h2>
          </div>
          <div class="left_b">
                <div>2019.11.13</div>
                <div>
                  今日实时{{pp.pf}}万
                </div>
          </div>
      </div>
      <div class="right" v-if="this.listindex">
              <ul>
              <li>影片(点击星星优先展示)</li>
              <li v-if="this.indexone==0">综合票房(万)</li>
              <li v-else-if="this.indexone==1">分账票房(万)</li>
              <li>票房占比</li>
              <li>排片场次</li>
              <li>排片占比</li>
              <li>场均人次</li>
              <li>上座率</li>
            </ul>
              <ul v-for="(item,index) in listindex[this.indexone].content" :key="index">
                <li class="li_a">
                <div>
                    <h3>
                      
                    <p>{{item.id+1}}</p>
                    <p>{{item.txt}}</p>

                  </h3>
                </div>
                <div>
                   <h5>
                     <span :class="{isshow:ind==item.id}" @click="isshowfn(item.id)"></span>
                    <p>{{item.txt1}}天</p>
                  <p>{{item.txt2}}亿</p>
                 </h5>
                </div>
                </li>
                <li>{{item.pf}}</li>
                <li>{{item.zb}}%</li>
                <li>{{item.cc}}</li>
                <li>{{item.zb1}}%</li>
                <li>{{item.rc}}</li>
                <li>{{item.sz}}%</li>
            </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      list:[],
      indexone:0,
      listindex:[],
      ind:0,
      pp:[]
     
    }
  },
      created(){
       axios.get("/getlist").then(res=>{
         console.log(res.data.nav,"222222222222222222222222")
         this.list=res.data.nav
         this.listindex=res.data.list
       })
      },
      methods:{
        isshowfn(id){
          console.log(id,"44444444444444444444444444444444")
            this.ind=id
            this.pp=this.listindex[this.indexone].content[this.ind]
            console.log(this.pp,"789")
        },
        clickFn(index){
            // console.log(index) 
            this.indexone=index
            console.log(this.indexone)
            // console.log(this.list[this.indexone].content)
            // this.listindex=this.list.filter(item=>{
            //   return item.id==this.indexone+1
            // })
            // console.log(this.indexone,this.listindex)
            console.log(this.listindex)
            console.log(this.listindex[this.indexone].content)
        }
      }
}
</script>

<style lang="scss" scoped>
*{
 padding: 0;
 margin: 0;
 list-style: none;
}
html,body,.home{
  width: 100%;
  height: 100%;
}
.home{
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}
.active{
  // color: red;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: space-around;
   border: 1px solid #ccc;
   align-items: center;
}
.main{
  flex: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  // background: red;
}
.left{
  margin-top: 20px;
  margin-left: 20px;
 height:500px;
  width: 500px;
  // background: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left_a{
  // padding-left: 20px;
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // background: green;
  // border: 1px solid #ccc;
}
.left_b{
   width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  // background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.right{
  margin-top: 20px;
  margin-left: 20px;
  width: 1000px;
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
}
.right>ul{
  width: 100%;
  height: 150px;
  display: flex;
  // justify-content: space-around;
  // background: red;
  margin-top: 10px;
  align-items: center;
  background: #ccc;
}
.right>ul>li{
  width: 250px;
  display: flex;
  justify-content: space-around;
}
.li_a{
  
  font-size: 10px;
  display: flex;
  flex-direction: column;
}
H3{
  display: flex;
  // justify-content: space-around;
}
H3>p{

  margin-left: 2px;
}
H5{
   display: flex;
  justify-content: space-around;
}
H5 span{
  width: 10px;
  height: 10px;
  border: 1px solid green;
}

.isshow{
  background: orange;
}


.left_a>ul{
    display: flex;
    flex-direction: column;
}
.left_a>ul>li{
  display: flex;
  justify-content: space-around;
}
</style>
