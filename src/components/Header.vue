<template>
	<div class="header flex align-items-c justify-content-sb">
		<a class="logo" @click="gotoPath"><img src="/static/images/api.png" alt=""></a>
		<div class="title flex-1">{{title}}</div>
	    <Menu mode="horizontal" theme="dark" active-name="1" style="margin-right:30px;">
	        <Submenu name="1">
	            <template slot="title">
	                <Icon type="md-filing" size="18" />
	                分组
	            </template>
                <MenuItem name="1-1">生信开发创新云平台</MenuItem>
                <MenuItem name="1-2">系统开发创新云平台</MenuItem>
                <MenuItem name="1-3">系统开发云平台</MenuItem>
	        </Submenu>
	        <MenuItem name="2" to="">
	            <Icon type="md-swap" size="18" />
	            关联列表
	        </MenuItem>
	    </Menu>
		<Tooltip content="新建项目" placement="bottom">
			<router-link style="color:#fff;" to="/add-project"><Icon type="md-add-circle" size="22" /></router-link>
		</Tooltip>
		<Menu mode="horizontal" theme="dark" active-name="1">
	        <Submenu name="2">
	            <template slot="title">
	                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
	            </template>
	                <MenuItem name="2-1" to="/user/center/1"><Icon type="md-person" />个人中心</MenuItem>
	                <MenuItem name="2-2" to="/user/list"><Icon type="md-filing" />用户管理</MenuItem>
	                <MenuItem name="2-3" to="/user/system"><Icon type="ios-paper" />系统信息</MenuItem>
	                <MenuItem name="2-4"><Icon type="md-exit" />退出</MenuItem>
	        </Submenu>
		</Menu>
	</div>
</template>

<script>
import Utils from '@/util.js'

export default {
	data() {
		return {
			title:this.$store.state.headerTitle, //从store获取title
		}
	},
	watch:{
		changeTitle (newVal, oldVal) {
			this.title = newVal;
		}		
	},
	computed:{
		changeTitle () {
		    return this.$store.state.headerTitle;　　//需要监听的数据
		}		
	},
	methods:{
		//跳转路由,对于已经在首页位置，点击logo需触发初始化事件	
		gotoPath() {
			if (this.$route.path == '/'){
				if(JSON.stringify(this.$route.query) != '{}'){
					this.$router.push({path:'/group/1'})
					Utils.$emit('initIndex')
				}
			}else{
				this.$router.push({path:'/group/1'})
			}
		}
	}
}
</script>

<style scoped>
.header {background:#515a6e;padding:0 25px;color:#fff;position: relative;z-index: 1000;}
.header .logo {display: inline-block;width:44px;height:44px;}
.header .title {min-width:300px;margin-left: 20px;font-size:16px;}
</style>