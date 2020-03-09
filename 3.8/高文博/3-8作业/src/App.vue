<template>
	<div class="app">
		<p>
			<button @click="cli(i)" v-for="(v,i) in buttonNav" :key=i :class="{active:i==index}">{{v}}</button>
		</p>
		<div class="box">
			<div  class="left">
				<div v-if="curdata.name" class="star">
					<p>{{curdata.name}}</p>
					<p v-show="!index">综合票房:{{curdata.account[0]}}</p>
					<p v-show="index">分账票房:{{curdata.synthesize[0]}}</p>
				</div>
				
			</div>
			<div class="right">
				<p class="p1">
					<span>影片</span>
					<span>{{index?'分账':'综合'}}票房</span>
					<span v-for="(v,i) in titleList" :key=i>{{v}}</span>
				</p>
				<p @click="add(v)" v-for="(v,i) in data" :class="{p1:i%2!=0}" :key="i">
					<span>{{v.name}}</span>
					<span v-show="!index" v-for="(item,ind) in v.synthesize" :key='ind'>{{item}}</span>
					<span v-show="index" v-for="(item,ind) in v.account" :key='ind+10'>{{item}}</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import mock from '../mock'
export default {
	data(){
		return {
			buttonNav:['综合票房','分账票房'],
			titleList:['票房占比','排片场次','排片占比','场均人次','上座率'],
			data:[],
			curdata:{},
			str:'synthesize',
			index:0,
			star:{
        			name: '决战中途岛',
       				synthesize: [1283.94, '24.9%', 68294, '22.1%', 96, '4.1%'],
        			account: [1165.00, '24.4%', 68294, '22.1%', 19, '4.1%']
    			}
		}
	},
	created(){
		axios.get('/list').then(res=>{
			console.log(res.data)
			this.data=res.data
		})
	},
	methods:{
		cli(i){
			this.index=i
		},
		add(v){
			if(v.id==this.curdata.id){
				this.curdata={}
			}else{
				this.curdata=v
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.app{
	width: 1000px;
	background-color:#222;
	p{
		width: 100%;
		height: 50px;
		text-align: center;
		background-color: #888;
		button{
			height: 30px;
			width: 100px;
			margin: 10px;
			border: none;
			border-radius: 15px;
		}
		.active{
			background-color: #444;
			color: #fff;
		}
	}
	.box{
		width: 100%;
		height: 500px;
		margin-top: 10px;
		display: flex;
		.left{
			width: 30%;
			height: 90%;
			background-color: #888;
			margin: 20px;
		}
		.right{
			width: 70%;
			height: 90%;
			background-color: #888;
			display: flex;
			margin: 20px;
			flex-direction: column;
			p{
				display: flex;
				margin-top: 0;
				margin-bottom: 0;
				background-color: #888;
				line-height: 50px;
				span{
					flex:1;
					text-align: center;
				}
			}
			.p1{
				background-color: #666;
			}
		}
	}
}
.star{
	p{
		
	}
}
</style>