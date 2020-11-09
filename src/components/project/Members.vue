<template>
	<div class="members-wrap">
		<div class="card-title flex justify-content-sb">
			<div class="flex-1">用户认证 项目成员 (0) 人</div>
			<div>
				<Button type="primary" @click="addMember = true"><Icon type="md-add" size="16" /> 添加成员</Button>
				<Button @click="joinMember = true"><Icon type="md-add" size="16" /> 批量导入成员</Button>
			</div>
		</div>
		<div class="card-content">
			<ul class="member-list">
				<li v-for="(list,index) in memberlist" :key="index" class="flex">
					<span class="flex-1">
							<Avatar :src="list.img" />
							{{list.name}}
						    <i-switch style="margin-left:20px;">
						        <span slot="open">开</span>
						        <span slot="close">关</span>
						    </i-switch>
					</span>
				    <Select style="width:120px" v-model="list.selected" @on-change="onChangeAuthority">
				        <Option value="组长">组长</Option>
				        <Option value="开发者">开发者</Option>
				        <Option value="访客">访客</Option>
				    </Select>
				    <Button @click="delMember(list.name)"><Icon type="ios-trash" size="22" /></Button>
				</li>
			</ul>
		</div>

		<div class="card-title">生信开发云平台-测试机 分组成员 (1) 人</div>
		<div class="card-content">
			<ul class="member-list">
				<li class="flex">
					<span class="flex-1">
							<Avatar style="background-color: #87d068" icon="ios-person" size="small" />
							phpfarmers
						    <Tag color="success">我</Tag>
					</span>
					<span>组长</span>
				</li>
			</ul>
		</div>

		<!-- 添加成员弹层 begin-->
	    <Modal
	        v-model="addMember"
	        title="添加成员"
	        :mask-closable="false"
	        :loading="loading"
	        @on-ok="addMemberOk">
	        <Form :label-width="120" style="padding-top:20px;">
		        <FormItem label="用户名：">
		            <Input placeholder="请输入用户名" style="width: 300px"></Input>
		        </FormItem>
		        <FormItem label="权限：">
				    <Select style="width:120px">
				        <Option value="组长">组长</Option>
				        <Option value="开发者">开发者</Option>
				        <Option value="访客">访客</Option>
				    </Select>
			    </FormItem>		        
	        </Form>
	    </Modal>
	    <!-- 添加成员弹层 end-->


		<!-- 批量导入成员弹层 begin-->
	    <Modal
	        v-model="joinMember"
	        title="批量导入成员"
	        :mask-closable="false"
	        :loading="loading"
	        @on-ok="joinMemberOk">
	        <Form :label-width="120" style="padding-top:20px;">
		        <FormItem label="项目名：" placeholder="请选择项目名称">
				    <Select style="width:250px">
				        <Option value="">工作流</Option>
				    </Select>
			    </FormItem>		        
	        </Form>
	    </Modal>
	    <!-- 批量导入成员弹层 end-->
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			memberlist:[{
				name:'phpfarmers',
				img:'https://i.loli.net/2017/08/21/599a521472424.jpg',
				selected:'组长',
			},{
				name:'phpfarmers2',
				img:'https://i.loli.net/2017/08/21/599a521472424.jpg',
				selected:'开发者',
			}],
			addMember:false,
			joinMember:false,
			loading:true,

		}
	},
	methods:{
		//修改权限
		onChangeAuthority(e) {
			console.log(e)
		},

		//添加成员确定		
        addMemberOk() {
			setTimeout(() => {
			    this.addMember = false;
            	this.$Message.info('添加成功');
			}, 2000);        	
        },

 		//批量导入成员确定		
        joinMemberOk() {
			setTimeout(() => {
			    this.joinMember = false;
            	this.$Message.info('添加成功');
			}, 2000);        	
        },

	}
}
</script>

<style scoped>
.members-wrap {margin:20px;background: #fff;padding: 20px;min-height: calc(100vh - 304px);}
.card-title {background: #f5f5f5;padding:20px 15px;}
.card-content {margin-bottom: 50px;}
.empty {text-align:center;padding:50px 0;color:#999;font-size:16px;}
.member-list>li {border-bottom:1px solid #eaeaea;padding:15px 10px;}
.member-list>li>.ivu-btn {margin-left: 10px;padding:0 6px;background: #f7f7f7;color:#ff561b;}
.member-list>li>.ivu-btn:hover {background: #ed4014;color:#fff;border-color:#ed4014;}
</style>