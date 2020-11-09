<template>
	<div class="center-wrap">
		<div class="title">个人设置</div>
		<Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" style="width:80px;height:80px;line-height:80px;margin:30px 0 30px 200px;" />
		<Form :label-width="300">
			<FormItem label="用户ID：">
				<div>11</div>
			</FormItem>
			<FormItem label="用户名：">
				<div v-show="!usernameEdit">{{ username }}<Button class="ml20" @click="onEditUserName"><Icon type="md-create" /> 修改</Button></div>
				<div v-show="usernameEdit">
					<Input style="width:300px;" :value="username" placeholder="用户名" @input="changeInputValue" />
					<Button @click="usernameEditCancel">取消</Button>
					<Button type="primary" @click="usernameEditOk">确定</Button>
				</div>
			</FormItem>
			<FormItem label="Email：">
				<div>phpfarmers@163.com</div>
			</FormItem>
			<FormItem label="角色：">
				<div>管理员</div>
			</FormItem>
			<FormItem label="登录方式：">
				<div>站点登录</div>
			</FormItem>
			<FormItem label="创建账号时间：">
				<div>2020-01-13 13:04:39</div>
			</FormItem>
			<FormItem label="更新账号时间：">
				<div>2020-01-14 15:26:57</div>
			</FormItem>
			<FormItem label="密码">
				<div v-show="!passwordEdit">******<Button class="ml20" @click="onEditPassword"><Icon type="md-create" /> 修改</Button></div>
				<div v-show="passwordEdit" style="width:300px;">
					<Input type="password" password placeholder="旧的密码" class="mb10" />
					<Input type="password" password placeholder="新的密码" class="mb10" />
					<Input type="password" password placeholder="确认密码" class="mb10" />
					<Button @click="passwordEditCancel" class="mr10">取消</Button>
					<Button type="primary" @click="passwordEditOk">确定</Button>					
				</div>
			</FormItem>
		</Form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usernameEdit:false,
			username:'phpfarmers',
			usernameValue:'phpfarmers',
			passwordEdit:false,
		}
	},
	mounted() {
		//获取route中的id，id代表不同用户，在路由中配置
		console.log(this.$route.params.id)
		this.$store.commit('changeHeaderTitle','个人中心');
	},
	methods:{
		onEditUserName() {
			this.usernameEdit = true;
		},
		usernameEditCancel() {
			this.usernameEdit = false;
		},
		usernameEditOk() {
			if(this.usernameValue != ''){
				this.usernameEdit = false;
				this.username = this.usernameValue;
				this.$Message.success('修改成功！')
			}else{
				this.$Message.error("用户名不能为空！")
			}
		},
		changeInputValue(value) {
			this.usernameValue = value;
		},
		onEditPassword() {
			this.passwordEdit = true;
		},
		passwordEditCancel() {
			this.passwordEdit = false;
		},
		passwordEditOk() {
			this.passwordEdit = false;
			this.$Message.success('修改成功！')
		},

	},
}

</script>

<style scoped>
.center-wrap {background: #fff;width:1200px;margin:30px auto;min-height:calc(100vh - 264px);padding:30px 50px;}
.center-wrap .title {font-size:26px;font-weight:300;}
.ivu-form >>> .ivu-form-item-content {padding-left: 30px;}
</style>