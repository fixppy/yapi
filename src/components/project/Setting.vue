<template>
    <Tabs type="card" :animated="false" value="1">
    	<!-- 项目配置 begin -->
        <TabPane label="项目配置" name="1">
        	<div class="setting-project">
        		<div class="setting-project-title">
        			<Poptip placement="bottom" width="300" transfer style="margin-right:30px;">
        				<Avatar :icon="projectAvatar.activeIcon" size="large" :style="{backgroundColor:projectAvatar.color}" />
        				<div slot="content">
							背景底色：<ColorPicker v-model="projectAvatar.color" />
							<Divider style="margin:10px 0;" />
							<div class="project-avatar-icon-list">
						        <Button v-for="(icon,index) in projectAvatar.icon" :type="projectAvatar.activeIcon==icon?'primary':'text'" @click="onChangeProjectAvatar(icon)"><Icon :type="icon" /></Button>
							</div>
        				</div>
        			</Poptip>
        			生信开发创新云平台-测试机 / 工作流
        		</div>
        		<Divider />
		        <Form :label-width="200" style="padding:0 100px;">
		            <FormItem label="项目ID：">
		                59
		            </FormItem>
		            <FormItem label="项目名称：">
		                <Input placeholder=""></Input>
		            </FormItem>
		            <FormItem label="所属分组：">
		                <Select placeholder="请选择">
		                    <Option value="0">个人空间</Option>
		                    <Option value="1">生信开发创新云平台-测试机</Option>
		                    <Option value="2">系统开发创新云平台-测试机</Option>
		                </Select>
		            </FormItem>
		            <FormItem>
		                <span slot="label">基本路径：
		                    <Tooltip content="接口基本路径，为空是根路径" placement="top">
		                        <Icon type="ios-help-circle-outline" size="16" />
		                    </Tooltip>
		                </span>
		                <Input placeholder=""></Input>
		            </FormItem>
		            <FormItem>
		                <span slot="label">Mock地址：
		                    <Tooltip content="具体使用方法请查看文档" placement="top">
		                        <Icon type="ios-help-circle-outline" size="16" />
		                    </Tooltip>
		                </span>
		                <Input disabled placeholder="" value="http://192.168.10.64:40003/mock/59+$接口请求路径"></Input>
		            </FormItem>
		            <FormItem label="描述：">
		                <Input type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder=""></Input>
		            </FormItem>
		            <FormItem>
		                <span slot="label">tag信息：
		                    <Tooltip content="定义tag信息，过滤接口" placement="top">
		                        <Icon type="ios-help-circle-outline" size="16" />
		                    </Tooltip>
		                </span>
		                <Row>
		                	<Col span="8" style="margin-right:20px;"><Input placeholder="请输入tag名称"></Input></Col>
		                	<Col span="8"><Input placeholder="请输入tag描述信息"></Input></Col>
		                </Row>
		            </FormItem>
		            <FormItem>
		                <span slot="label">mock严格模式：
		                    <Tooltip content="开启后 mock 请求会对 query，body form 的必须字段和 json schema 进行校验" placement="top" max-width="300">
		                        <Icon type="ios-help-circle-outline" size="16" />
		                    </Tooltip>
		                </span>
			            <i-switch size="large">
			                <span slot="open">开</span>
			                <span slot="close">关</span>
			            </i-switch>
		            </FormItem>
		            <FormItem>
		                <span slot="label">开启json5：
		                    <Tooltip content="开启后可在接口 body 和返回值中写 json 字段" placement="top" max-width="300">
		                        <Icon type="ios-help-circle-outline" size="16" />
		                    </Tooltip>
		                </span>
			            <i-switch size="large">
			                <span slot="open">开</span>
			                <span slot="close">关</span>
			            </i-switch>
		            </FormItem>
		            <FormItem label="默认开启消息通知：">
			            <i-switch size="large">
			                <span slot="open">开</span>
			                <span slot="close">关</span>
			            </i-switch>
		            </FormItem>
		            <FormItem label="权限：">
	                    <Radio label="siyou"><Icon type="md-lock" />私有</Radio>
	                	<div style="color:#888;">只有组长和项目开发者可以索引并查看项目信息</div>
	                    <Radio label="siyou"><Icon type="md-unlock" />公开</Radio>
		                <div style="color:#888;">任何人都可以索引并查看项目信息</div>
		            </FormItem>
			        <FormItem style="text-align:center;display:block" :label-width="0">
			            <Button type="primary" size="large"><Icon type="md-briefcase" /> 保存</Button>
			        </FormItem>
		        </Form>
			    <Row style="text-align:center;margin-bottom:30px;padding-top:30px;">
					<Col span="24" style="font-size:18px;margin-bottom:15px;"><Icon type="ios-alert-outline" size="24" style="vertical-align:top" /> 危险操作</Col>
					<Col span="24"><Button @click="warning.show = !warning.show">查看 <Icon :type="warning.show?'ios-arrow-up':'ios-arrow-down'" /></Button></Col>
			    </Row>
			    <Alert type="warning" show-icon v-show="warning.show">
			    	<Button type="warning" @click="delGroup">删除</Button>
			    	删除项目
			    	<template slot="desc">
				    	<p>项目一旦删除，将无法恢复数据，请慎重操作！</p>
				    	<p>只有组长和管理员有权限删除项目。</p>
			    	</template>
			    </Alert>
        	</div>
    	</TabPane>
    	<!-- 项目配置 end -->
        <TabPane label="环境配置" name="2">
	        <Layout class="setting-environment">
	            <Sider hide-trigger style="background: #fff;border-right:1px solid #d8d8d8;">
	            	<div class="sider-title">
	            		<Icon type="md-add" size="17" style="float:right;margin-top:3px;cursor: pointer;" @click="onAddEnvironmentList" />
		            	环境列表
		            	<Tooltip content="在这里添加项目的环境配置" placement="top" transfer>
		            		<Icon type="ios-help-circle-outline" />
		            	</Tooltip>
	            	</div>
		            <CellGroup @on-click="onChangeEnvironment">
		                <Cell v-for="(item,index) in environment.list" :title="item.title" :selected="environment.num==index" :name="index" @mouseenter.native="onMouseenterEnvironment(index)">
						<Poptip title="您确认删除此环境变量?"
							confirm
							transfer
							slot="extra"
							@on-ok="onDelEnvironmentOk(item.title,index)"
						>
							<Icon type="ios-trash-outline" size="19" :style="{display:environment.hover==index?'block':'none'}" />
						</Poptip>		                	
		                </Cell>
		            </CellGroup>
	            </Sider>
	            <Content style="padding:30px;">
	            	<Form label-position="top" >
	            		<FormItem label="环境名称">
							<Input placeholder="请输入环境名称" />
	            		</FormItem>
	            		<FormItem label="环境域名">
						    <Input placeholder="请输入环境域名">
						        <Select slot="prepend" style="width: 80px">
						            <Option value="http">http://</Option>
						            <Option value="https">https://</Option>
						        </Select>
						    </Input>
	            		</FormItem>
	            		<FormItem label="Header">
							<Row style="margin-bottom:10px;">
							    <Col span="7">
								    <AutoComplete
								        :data="['accept', 'Accept-Charset', 'Accept-Encoding']"
								        placeholder="请输入header名称"
								        :filter-method="filterMethod"
								        clearable
								        style="width:200px">
								    </AutoComplete>
								</Col>
							    <Col span="15">
							    	<Input placeholder="请输入参数内容" />
								</Col>
								<Col span="2"><Icon type="ios-trash-outline" size="28" style="margin-left:10px;vertical-align: bottom;cursor: pointer;" /></Col>
							</Row>
	            		</FormItem>
	            		<FormItem label="Cookie">
							<Row>
							    <Col span="7">
									<Input placeholder="请输入cookie Name" style="width:200px;" />
								</Col>
							    <Col span="15">
							    	<Input placeholder="请输入参数内容" />
								</Col>
								<Col span="2"><Icon type="ios-trash-outline" size="28" style="margin-left:10px;vertical-align: bottom;cursor: pointer;" /></Col>								
							</Row>
	            		</FormItem>
	            		<FormItem label="globa">
							<Row v-for="(item,index) in environment.input.globa" style="margin-bottom:10px;">
							    <Col span="7">
									<Input placeholder="请输入globa Name" style="width:200px;" v-model="item.name" @on-change="onPushGloba(index)" />
								</Col>
							    <Col span="15">
							    	<Input placeholder="请输入参数内容" v-model="item.desc" />
								</Col>
								<Col span="2"><Icon type="ios-trash-outline" size="28" style="margin-left:10px;vertical-align: bottom;cursor: pointer;" v-if="index != environment.input.globa.length-1" @click="onDelGloba(index)" /></Col>								
							</Row>
	            		</FormItem>
				        <FormItem style="text-align:center;display:block" :label-width="0">
				            <Button type="primary" size="large"><Icon type="md-briefcase" /> 保存</Button>
				        </FormItem>
	            	</Form>
	            </Content>
	        </Layout>
    	</TabPane>
    </Tabs>
</template>

<script>
export default {
	data() {
		return {
			//项目配置-危险操作提示
            warning:{
            	show:false,
            },
            //项目标识图
            projectAvatar:{
            	color:'#19be6b',
            	icon:['ios-alarm','ios-analytics','md-aperture','md-bicycle','ios-basket','md-bowtie','md-bulb','md-calendar','ios-cog','md-construct','md-contacts','md-copy','md-cube','md-desktop','ios-disc','ios-document','md-filing','md-eye','ios-filing-outline','md-git-branch'],
            	activeIcon:'ios-analytics',
            },
            //环境配置列表
            environment:{
            	list:[{
            		title:'test1',
            	},{
            		title:'test2',
            	},{
            		title:'test3',
            	}],
            	num:'',		//selected
            	hover:'',	//控制删除icon显示
            	input:{
            		globa:[{
            			name:'',
            			desc:'演示内容，只有globa的name，输入内容会新增一行',
            		}]
            	}
            },
		}
	},
	methods:{
		//项目配置 - 删除分组
        delGroup () {
            this.$Modal.confirm({
                title: '确认删除 工作流 项目吗？',
                content: '<p>警告：此操作非常危险,会删除该项目下面所有接口，并且无法恢复!</p>',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$Modal.remove();
                        this.$Message.info('删除成功');
                    }, 2000);                	
                },
            });
        },

        //项目配置 - 修改项目头像icon
        onChangeProjectAvatar(icon) {
        	this.projectAvatar.activeIcon = icon;
        },

        //环境配置 - 切换环境
        onChangeEnvironment(index) {
        	this.environment.num = index;
        },

        //环境配置 - hover显示删除icon
        onMouseenterEnvironment(index) {
        	this.environment.hover= index;
        },

        //环境配置 - 添加环境
        onAddEnvironmentList() {
        	this.environment.list.unshift({title:'新环境'})
        },

        //环境配置 - 确认删除环境变量
        onDelEnvironmentOk(name,index) {
        	this.environment.list.splice(index,1)
        },

        //环境配置 - 过滤header选择
        filterMethod (value, option) {
            return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
        },

        //环境配置 - 添加globa
        onPushGloba(index) {
        	if(index == this.environment.input.globa.length-1){
        		this.environment.input.globa.push({name:'',desc:''});
        	}
        },

        //环境配置 -删除globa
        onDelGloba(index) {
        	this.environment.input.globa.splice(index,1)
        },

	},
}
</script>

<style scoped>
.ivu-tabs-card {margin:20px;}
.ivu-tabs-card >>> .ivu-tabs-bar {margin-bottom:0;}
>>> .ivu-tabs-content {background: #fff;min-height:calc(100vh - 336px);border-left:1px solid #dcdee2;border-right:1px solid #dcdee2;border-bottom:1px solid #dcdee2;}

h2.setting-title {font-size:16px;font-weight:400;border-left:3px solid #2395f1;padding-left: 8px;height: 24px;line-height: 24px;margin-bottom: 15px;}

/*项目配置*/
.setting-project {padding:30px;}
.setting-project-title {font-size:30px;padding:25px 100px;}
.setting-project-title .ivu-avatar-large {width:100px;height:100px;line-height: 100px;cursor: pointer;}
.setting-project-title .ivu-avatar-large:after {content:"点击修改";font-size:14px;display: block;width:100%;height:100%;border-radius:50%;background:rgba(0,0,0,.3);position:absolute;top:0;z-index: 10;transition:all .3s ease;opacity: 0;}
.setting-project-title .ivu-avatar-large.ivu-avatar-icon {font-size:52px;}
.setting-project-title .ivu-avatar-large:hover::after {opacity: 1;}
.project-avatar-icon-list {white-space: pre-wrap;}
.project-avatar-icon-list button {margin:2px;}
.ivu-alert-warning .ivu-btn {position: absolute;right:15px;top:35px;}

/*环境配置*/
.setting-environment {background: #fff;height:calc(100vh - 337px)}
.setting-environment .sider-title {background: #f5f5f5;padding:10px;}

</style>