<template>
	<div>
		<div class="group-list-header flex justify-content-sb align-items-c">
			<div class="title">{{title}}</div>
			<Button type="primary" to="/add-project">添加项目</Button>
		</div>
		<div class="group-title">我的项目</div>
		<div class="group-list">
			<div class="item" v-for="(item,index) in grouplist" :key="index" @click="toPage(item.path)">
				<label :style="'background-color:'+item.bgcolor"><Icon :type="item.icon" /></label>
				<h5>{{item.title}}</h5>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title:'个人空间 分组共 (1) 个项目',
			grouplist:[{
				title:'用户认证',
				icon:'ios-paper-outline',
				bgcolor:'#f5317f',
				path:'project/api',
			},{
				title:'云平台',
				icon:'ios-paper-outline',
				bgcolor:'#00a2ae',
				path:'project/api',
			},{
				title:'工作流',
				icon:'ios-paper-outline',
				bgcolor:'#f56a00',
				path:'project/api',
			},{
				title:'文件',
				icon:'ios-paper-outline',
				bgcolor:'#f5317f',
				path:'project/api',
			},{
				title:'前台调用接口',
				icon:'ios-paper-outline',
				bgcolor:'#7265e6',
				path:'project/api',
			}]
		}
	},
	methods:{
		//跳转到对应项目页
		toPage(path) {
			this.$router.push('/'+path)
		},
	}
}
</script>

<style scoped>
.group-list-header {background:#eee;height:64px;border-radius: 3px;padding:0 20px;margin-bottom: 30px;}
.group-title {font-size: 15px;font-weight: 400;margin-bottom:20px;border-left: 3px solid #2395f1;padding-left: 8px;}
.group-list .item {width:20%;max-width:250px;height:200px;text-align:center;padding-top: 25px;cursor: pointer;display:inline-block;transition: all .3s ease;}
.group-list .item label {width:100px;height:100px;border-radius:100px;display: block;margin:0 auto 15px;cursor: pointer;}
.group-list .item label .ivu-icon {font-size:50px;color:#fff;line-height: 100px;}
.group-list .item h5 {font-size:20px;font-weight:500;}
.group-list .item:hover {transform:translateY(-10px);background:#fafafa;box-shadow:0 2px 5px rgba(0,0,0,.1);border-radius:3px;}

@media screen and (max-width: 1300px) {
	.group-list .item {width:25%;}
}
@media screen and (max-width: 1000px) {
	.group-list .item {width:25%;height:170px;}
	.group-list .item label {width:80px;height:80px;margin-bottom:10px;}
	.group-list .item label .ivu-icon {font-size:40px;line-height: 80px;}
	.group-list .item h5 {font-size:16px;}
}
</style>
