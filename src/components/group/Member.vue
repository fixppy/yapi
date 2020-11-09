<template>
	<div>
		<div class="group-list-header flex justify-content-sb align-items-c">
			<div class="title">{{title}}</div>
			<Button type="primary" @click="addMember = true">添加成员</Button>
		</div>
		<ul class="member-list">
			<li v-for="(list,index) in memberlist" :key="index" class="flex">
				<span class="flex-1"><router-link to="/user/center/1"><Avatar :src="list.img" /> {{list.name}}</router-link></span>
			    <Select style="width:120px" v-model="list.selected" @on-change="onChangeAuthority">
			        <Option value="组长">组长</Option>
			        <Option value="开发者">开发者</Option>
			        <Option value="访客">访客</Option>
			    </Select>
			    <Button @click="delMember(list.name)"><Icon type="ios-trash" size="22" /></Button>
			</li>
		</ul>

		<!-- 添加成员弹层 -->
	    <Modal
	        v-model="addMember"
	        title="添加成员"
	        :mask-closable="false"
	        :loading="loading"
	        @on-ok="ok">
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
	</div>
</template>

<script>
export default {
	data() {
		return {
			title:'生信开发创新云平台-测试机 分组成员 (1) 人',
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
			loading:true,
		}
	},
	methods:{
		//修改权限
		onChangeAuthority(e) {
			console.log(e)
		},
		
		//删除成员
        delMember (name) {
            this.$Modal.confirm({
                title: '确认删除成员-'+name,
                content: '',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$Modal.remove();
                        this.$Message.info('删除成功');
                    }, 2000);                	
                },
            });
        },
        ok () {
			setTimeout(() => {
			    this.addMember = false;
            	this.$Message.info('添加成功');
			}, 2000);        	
        },
	}	
}
</script>

<style scoped>
.group-list-header {background:#eee;height:64px;border-radius: 3px;padding:0 20px;margin-bottom: 30px;}
.member-list>li {border-bottom:1px solid #eaeaea;padding:15px 0;}
.member-list>li>.ivu-btn {margin-left: 10px;padding:0 6px;background: #f7f7f7;color:#ff561b;}
.member-list>li>.ivu-btn:hover {background: #ed4014;color:#fff;border-color:#ed4014;}

</style>