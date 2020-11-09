<template>
	<Layout>
		<Sider>
			<div class="sider-title"><h3>接口列表</h3></div>
			<div class="sider-con">
				<div class="flex justify-content-sb">
					<Input v-model="searchApiValue" placeholder="搜索接口" clearable style="margin-right:10px;" />
					<Button type="primary" @click="addCategory = true">添加分类</Button>
				</div>

				<ApiTree
					ref="tree"
					@on-change-api="onChangeApi"
					@on-add-api="onAddApi"
					@on-edit-category="onEditCategory"
					:data="apitree.data"
					:defaultOpen="apitree.panelOpenValue"
					:active="apitree.activeApi"
				>
				</ApiTree>
			</div>
		</Sider>
		<Content>
			<div :is="content"></div>
		</Content>

		<!-- 添加分类弹层 begin-->
	    <Modal
	        v-model="addCategory"
	        title="添加分类"
	        :mask-closable="false"
	        :loading="loading"
	        @on-ok="onAddCategorySumbit">
	        <Form :label-width="120" style="padding-top:20px;width:450px;">
		        <FormItem>
  					<span slot="label"><span class="red">*</span>分类名：</span>		        	
		            <Input placeholder="请输入分类名称"></Input>
		        </FormItem>
		        <FormItem label="备注：">
					<Input placeholder="备注"></Input>
			    </FormItem>		        
	        </Form>
	    </Modal>
	    <!-- 添加分类弹层 end-->

		<!-- 添加接口弹层 begin -->
	    <Modal
	        v-model="addApi"
	        title="添加接口"
	        :mask-closable="false"
	        :loading="loading"
	        @on-ok="onAddApiSubmit('formValidateADD')"
	        @on-cancel="cancelAddApi">
	        <Form ref="formValidateADD" :model="formValidateADD" :label-width="120" style="padding-top:20px;width:450px;" :rules="ruleValidateADD">
	            <FormItem label="接口分类：">
	                <Select placeholder="请选择" v-model="formValidateADD.type">
	                    <Option value="0">公共分类</Option>
	                    <Option value="1">test</Option>
	                </Select>
	            </FormItem>	        
		        <FormItem label="接口名称：" prop="name">
		            <Input v-model="formValidateADD.name" placeholder="接口名称"></Input>
		        </FormItem>
		        <FormItem label="接口路径：" prop="path">
				    <Input placeholder="/path" v-model="formValidateADD.path">
				        <Select slot="prepend" style="width: 80px" v-model="formValidateADD.pathType">
				            <Option value="http">GET</Option>
				            <Option value="https">POST</Option>
				        </Select>
				    </Input>
		        </FormItem>
		        <div style="font-size:12px;color:#999;margin-left:38px;">注：详细的接口数据可以在编辑页面中添加</div>
	        </Form>
	    </Modal>
		<!-- 添加接口弹层 end -->

	</Layout>
</template>

<script>
import Utils from '@/util.js'
import ApiTree from '@/components/project/ApiTree'
import ApiList from '@/components/project/ApiList'
import ApiDetails from '@/components/project/api_details/List'

export default {
	data() {
		return {
			searchApiValue:'',
			addCategory:false,		//是否显示添加分类弹层
			loading:true,
			/**
			 * apitree 数据
			 * data是接口列表数据，演示id作为区分不同接口，参数不一定是id。
			 * tree中使用的是折叠展开组件，Panel默认有个name=index,panelOpenValue值控制哪个展开。
			 * 如选择二级2-1接口时，把panelOpenValue设置为2，此时展开二级列表所在的结构
			 */
			apitree:{				//接口列表树数据
				panelOpenValue:'1',	//默认打开
				activeApi:'',		//菜单中当前api位置 
				data:[{
					title:'全部接口',
				},{
					title:'公共分类',
					id:'2',
					children:[{
						title:'接口统一接入入口',
						id:'2-1'
					},{
						title:'同步任务结果',
						id:'2-2'
					},{
						title:'用户登录',
						id:'2-3'
					},{
						title:'用户注册',
						id:'2-4'
					}]
				},{
					title:'test',
					id:'3',
					children:[{
						title:'task_list',
						id:'3-1'
					},{
						title:'user_get_level',
						id:'3-2'
					}]
				}]				
			},
			content:'ApiList',
			addApi:false,			//添加接口弹层
			formValidateADD:{
				name:'',
				type:'0',
				pathType:'0',
				path:'',
			},
			ruleValidateADD:{
                name: [
                    { required: true, message: '请输入接口名称，长度不超过100字符(中文算作2字符)!', trigger: 'blur' }
                ],
                path: [
                	{ required: true, message: '请输入接口路径!', trigger: 'blur' }
                ]
			},
		}
	},
	components:{ ApiTree,ApiList,ApiDetails },
	mounted() {
		//初始化
		this.init();

		this.$refs.tree.panelOpenValue = this.apitree.panelOpenValue;

		let that = this;
		//添加接口
		Utils.$on('on-add-api', ()=> {
			that.onAddApi()
		})

		//跳转到接口详细页
		Utils.$on('on-goto-apiDetails', (name)=> {
			that.onGotoApiDetails(name)
		})

	},
	methods:{
		//初始化，可以获取route参数，列表页，详细页都在同个route下，需进行判断。演示内容简单获取一个已配置的id，可改成任何参数
		init() {
			this.getParams();
		},

	    //获取路由携带参数
		getParams() {
	        let getParams = this.$route.params;
	        this.apitree.activeApi = getParams.id;
	        console.log('%c获取url的id，由数据中的id赋予。\n接口：','color:green',this.apitree.activeApi)
		},

		//添加分类submit
        onAddCategorySumbit() {
			setTimeout(() => {
			    this.addCategory = false;
            	this.$Message.info('添加成功');
			}, 2000);        	
        },

        //tree切换接口列表
        onChangeApi(id) {
			console.log('读取对应api接口信息',id)
			if(id){
				this.$router.push({ path: '/project/api/'+id });
			}else{
				this.$router.push({ path: '/project/api' }); //显示全部接口，在数据中有id或没有，指向这个地址
			}
			this.apitree.activeApi = id;//设置当前active
			this.content = 'ApiList'; //演示：这里只切换到接口列表页面，实际点击二级接口，显示详细页组件
        },

        //添加接口,打开弹层
        onAddApi(id) {
        	this.addApi = true;
        },

        //修改分类，打开弹层
        onEditCategory(id) {
        	this.$refs.tree.onOpenEditCategory(id);
        },


		//添加接口submit
        onAddApiSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        //关闭添加接口弹层
        cancelAddApi() {
        	this.$refs.formValidateADD.resetFields();
        },

        //跳转到详细接口页面
        onGotoApiDetails(name) {
        	this.$router.push({path:'/project/api/details/'+name});
        	this.content = 'ApiDetails';
        },

	}
}
</script>

<style scoped>
.ivu-layout {padding:20px;min-height:calc(100vh - 264px);}
.ivu-layout-sider {width:300px!important;max-width:300px!important;flex:0 0 300px!important;background: #fff;-webkit-align-self:flex-start;align-self:flex-start;min-height:500px; }
.ivu-layout-content {margin-left: 15px;background: #fff;padding:20px;}
.sider-title {height:46px;line-height: 46px;border-bottom:1px solid #eee;padding-left:15px;}
.sider-title h3 {font-size:18px;font-weight: 400;display: inline-block;position: relative;}
.sider-con {padding:15px 10px;}

/*添加接口弹层*/
>>> .ivu-form-item-error-tip {font-size:12px;}
</style>