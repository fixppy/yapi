<template>
	<div style="padding:15px;">
		<div class="api-title">基本设置</div>
		<div class="api-content" style="background:#f2f4f6;padding:10px 100px 10px 0;">
			<Form :label-width="200">
				<FormItem>
					<span slot="label"><span class="red">*</span>接口名称：</span>
					<Input></Input>
				</FormItem>
				<FormItem>
					<span slot="label"><span class="red">*</span>选择分类：</span>
		            <Select transfer>
		                <Option value="">公共分类</Option>
		                <Option value="">任务操作</Option>
		            </Select>					
				</FormItem>
				<FormItem>
					<span slot="label"><span class="red">
						*</span>接口路径：
					    <Tooltip placement="top" max-width="300">
					       <Icon type="ios-help-circle-outline" size="16" />
					        <div slot="content">1. 支持动态路由,例如:/api/user/{id}</Br>2. 支持 ?controller=xxx 的QueryRouter,非router的Query参数请定义到Request设置->Query</div>
					    </Tooltip>
					</span>
					<div class="flex align-items-c top-set-form-path">
			            <Select transfer style="width:80px;flex-shrink:0;">
			                <Option value="">POST</Option>
			                <Option value="">GET</Option>
			            </Select>
			            <Tooltip placement="top" content="接口基本路径，可在项目设置里更改">
			            	<Input disabled style="width:200px;"></Input>
			            </Tooltip>
			            <Input></Input>
					</div>
				</FormItem>
				<FormItem label="Tag：">
					<Select v-model="model18" filterable multiple transfer allow-create @on-create="handleCreate2">
					    <Option v-for="item in tagList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
				<FormItem label="状态：">
		            <Select transfer>
		                <Option value="">已完成</Option>
		                <Option value="">未完成</Option>
		            </Select>	
				</FormItem>
			</Form>
		</div>

		<div class="api-title">请求参数</div>
	    <RadioGroup v-model="requestType" type="button" style="margin-bottom:20px;display: block;text-align:center;">
	        <Radio label="Body"></Radio>
	        <Radio label="Query"></Radio>
	        <Radio label="Headers"></Radio>
	    </RadioGroup>
	    <div class="api-content" style="background:#f2f4f6;padding:15px 15px 30px 15px;">
		    <!-- body begin -->
		    <div v-show="requestType == 'Body'">
		    	<div class="mb20">
				    <RadioGroup v-model="requestParameters">
				        <Radio label="form"></Radio>
				        <Radio label="json"></Radio>
				        <Radio label="file"></Radio>
				        <Radio label="raw"></Radio>
				    </RadioGroup>
		    	</div>
		    	<!-- form项 begin -->
		    	<div v-show="requestParameters == 'form'">
		    		<div class="flex justify-content-sb mb15">
			    		<Button type="primary">添加form参数</Button>
						<Button type="text" @click="onAddFormParams">批量添加</Button>
		    		</div>
		    		<div class="item-flex-wrap">
		    			<div class="item flex mb10">
		    				<Input placeholder="name"></Input>
				            <Select transfer>
				                <Option value="">text</Option>
				                <Option value="">file</Option>
				            </Select>
				            <Select transfer>
				                <Option value="">必需</Option>
				                <Option value="">非必需</Option>
				            </Select>
				            <Input type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="参数示例"></Input>
				            <Input type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="备注"></Input>
				            <a href="javascript:;" style="margin:5px 20px 0 5px;color:#333;"><Icon type="ios-trash-outline" size="18" /></a>
		    			</div>
		    			<div class="item flex mb10">
		    				<Input placeholder="name"></Input>
				            <Select transfer>
				                <Option value="">text</Option>
				                <Option value="">file</Option>
				            </Select>
				            <Select transfer>
				                <Option value="">必需</Option>
				                <Option value="">非必需</Option>
				            </Select>
				            <Input type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="参数示例"></Input>
				            <Input type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="备注"></Input>
				            <a href="javascript:;" style="margin:5px 20px 0 5px;color:#333;"><Icon type="ios-trash-outline" size="18" /></a>
		    			</div>
		    		</div>
		    	</div>
		    	<!-- form项 end -->

		    	<!-- json项 begin -->
				<div v-show="requestParameters == 'json'" class="request-json-wrap">
					<div class="mb10">JSON-SCHEMA:
			            <i-switch>
			                <span slot="open">开</span>
			                <span slot="close">关</span>
			            </i-switch>
					</div>
					<div class="mb20">
						<Button type="primary">导入json</Button>
					</div>
					<Collapse simple>
					    <Panel name="1">
					        <div @click.stop.prevent="() => {}" class="flex flex-1 align-items-c">
					        	<Input value="root" disabled style="min-width:80px;margin-right:5px;"></Input>
					        	<Checkbox></Checkbox>
					            <Select transfer style="margin:0 10px 0 20px;">
					                <Option value="">string</Option>
					                <Option value="">object</Option>
					            </Select>
					            <div class="flex edit-group">
									<Select transfer filterable placeholder="mock" style="min-width:80px;">
									    <Option value="">@name</Option>
									    <Option value="">@cname</Option>
									</Select>
									<Button style="padding:0 8px;background:#fafafa;"><Icon type="md-create" /></Button>
					            </div>
					            <div class="flex edit-group" style="margin-left:10px;">
					            	<Input placeholder="description" style="min-width:120px;"></Input>
									<Button style="padding:0 8px;background:#fafafa;"><Icon type="md-create" /></Button>
					            </div>
					            <div class="flex-shrink-0" style="width:85px;">
						            <Tooltip content="高级设置" placement="top" transfer style="margin-left:10px;">
						            	<Icon type="md-settings" size="16" color="green" />
						            </Tooltip>
						            <Tooltip content="添加节点" placement="top" transfer style="margin-left:6px;">
						            	<a href="javascript:;"><Icon type="md-add" size="16" /></a>
						            </Tooltip>
					            </div>
					        </div>
					        <div slot="content" class="flex flex-1 align-items-c">
					        	<Input value="success" style="min-width:80px;margin-right:5px;"></Input>
					        	<Checkbox></Checkbox>
					            <Select transfer style="margin:0 10px 0 20px;">
					                <Option value="">string</Option>
					                <Option value="">object</Option>
					            </Select>
					            <div class="flex edit-group">
									<Select transfer filterable placeholder="mock" style="min-width:80px;">
									    <Option value="">@name</Option>
									    <Option value="">@cname</Option>
									</Select>
									<Button style="padding:0 8px;background:#fafafa;"><Icon type="md-create" /></Button>
					            </div>
					            <div class="flex edit-group" style="margin-left:10px;">
					            	<Input placeholder="description" style="min-width:120px;"></Input>
									<Button style="padding:0 8px;background:#fafafa;"><Icon type="md-create" /></Button>
					            </div>
					            <div class="flex-shrink-0" style="width:85px;">
						            <Tooltip content="高级设置" placement="top" transfer style="margin-left:10px;">
						            	<Icon type="md-settings" size="16" color="green" style="cursor: pointer;" />
						            </Tooltip>
						            <Icon type="md-close" color="red" style="margin-left:6px;cursor: pointer;" />
						            <Tooltip content="添加节点" placement="top" transfer style="margin-left:6px;">
						            	<a href="javascript:;"><Icon type="md-add" size="16" /></a>
						            </Tooltip>
					            </div>
					        </div>
					    </Panel>
					</Collapse>
				</div>
		    	<!-- json项 end -->

		    	<!-- file 项 begin -->
		    	<div v-show="requestParameters == 'file'" class="file-wrap">
		    		<Input  type="textarea" :rows="1" />
		    	</div>
		    	<!-- file 项 end -->

		    	<!-- raw 项 begin -->
		    	<div v-show="requestParameters == 'raw'" class="raw-wrap">
		    		<Input type="textarea" :rows="5" />
		    	</div>
		    	<!-- raw 项 end -->
		    </div>	    
		    <!-- body end -->

		    <!-- query begin -->
	    	<div v-show="requestType == 'Query'">
	    		<div class="flex justify-content-sb mb15">
		    		<Button type="primary">添加Query参数</Button>
					<Button type="text" @click="onAddFormParams">批量添加</Button>
	    		</div>
	    		<div class="item-flex-wrap">
	    			<div class="item flex mb10">
	    				<Input placeholder="参数名称"></Input>
			            <Select transfer>
			                <Option value="">必需</Option>
			                <Option value="">非必需</Option>
			            </Select>
			            <Input type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="参数示例"></Input>
			            <Input type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="备注"></Input>
			            <a href="javascript:;" style="margin:5px 20px 0 5px;color:#333;"><Icon type="ios-trash-outline" size="18" /></a>
	    			</div>
	    		</div>
			</div>	    
		    <!-- query end -->

		    <!-- headers begin -->
	    	<div v-show="requestType == 'Headers'">
	    		<div class="flex justify-content-sb mb15">
		    		<Button type="primary">添加Heaer</Button>
	    		</div>
	    		<div class="item-flex-wrap">
	    			<div class="item flex mb10">
	    				<Input placeholder="参数名称"></Input>
	    				<Input placeholder="参数值"></Input>
			            <Input type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="参数示例"></Input>
			            <Input type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="备注"></Input>
			            <a href="javascript:;" style="margin:5px 20px 0 5px;color:#333;"><Icon type="ios-trash-outline" size="18" /></a>
	    			</div>
	    		</div>
	    	</div>	    
		    <!-- headers end -->
		</div>

		<div class="api-title">返回数据设置
		    <RadioGroup style="margin-left:20px;">
		        <Radio label="json-schema"></Radio>
		        <Radio label="json"></Radio>
		    </RadioGroup>
		</div>
	    <RadioGroup v-model="returnDataType" type="button" style="margin-bottom:20px;display: block;text-align:center;">
	        <Radio label="JSON"></Radio>
	        <Radio label="RAW"></Radio>
	    </RadioGroup>		
		<div class="api-content" style="background:#f2f4f6;padding:15px 15px 30px 15px;">
			<!-- JSON begin -->
			<div v-show="returnDataType == 'JSON'">
			    <Tabs :animated="false">
			        <TabPane label="模板">
				    	<!-- json项 begin -->
						<div class="request-json-wrap">
							<div class="mb20">
								<Button type="primary">导入json</Button>
							</div>
							<Collapse simple>
							    <Panel name="1">
							        <div @click.stop.prevent="() => {}" class="flex flex-1 align-items-c">
							        	<Input value="root" disabled style="min-width:80px;margin-right:5px;"></Input>
							        	<Checkbox></Checkbox>
							            <Select transfer style="margin:0 10px 0 20px;">
							                <Option value="">string</Option>
							                <Option value="">object</Option>
							            </Select>
							            <div class="flex edit-group">
											<Select transfer filterable placeholder="mock" style="min-width:80px;">
											    <Option value="">@name</Option>
											    <Option value="">@cname</Option>
											</Select>
											<Button style="padding:0 8px;background:#fafafa;"><Icon type="md-create" /></Button>
							            </div>
							            <div class="flex edit-group" style="margin-left:10px;">
							            	<Input placeholder="description" style="min-width:120px;"></Input>
											<Button style="padding:0 8px;background:#fafafa;"><Icon type="md-create" /></Button>
							            </div>
							            <div class="flex-shrink-0" style="width:85px;">
								            <Tooltip content="高级设置" placement="top" transfer style="margin-left:10px;">
								            	<Icon type="md-settings" size="16" color="green" />
								            </Tooltip>
								            <Tooltip content="添加节点" placement="top" transfer style="margin-left:6px;">
								            	<a href="javascript:;"><Icon type="md-add" size="16" /></a>
								            </Tooltip>
							            </div>
							        </div>
							        <div slot="content" class="flex flex-1 align-items-c">
							        	<Input value="success" style="min-width:80px;margin-right:5px;"></Input>
							        	<Checkbox></Checkbox>
							            <Select transfer style="margin:0 10px 0 20px;">
							                <Option value="">string</Option>
							                <Option value="">object</Option>
							            </Select>
							            <div class="flex edit-group">
											<Select transfer filterable placeholder="mock" style="min-width:80px;">
											    <Option value="">@name</Option>
											    <Option value="">@cname</Option>
											</Select>
											<Button style="padding:0 8px;background:#fafafa;"><Icon type="md-create" /></Button>
							            </div>
							            <div class="flex edit-group" style="margin-left:10px;">
							            	<Input placeholder="description" style="min-width:120px;"></Input>
											<Button style="padding:0 8px;background:#fafafa;"><Icon type="md-create" /></Button>
							            </div>
							            <div class="flex-shrink-0" style="width:85px;">
								            <Tooltip content="高级设置" placement="top" transfer style="margin-left:10px;">
								            	<Icon type="md-settings" size="16" color="green" style="cursor: pointer;" />
								            </Tooltip>
								            <Icon type="md-close" color="red" style="margin-left:6px;cursor: pointer;" />
								            <Tooltip content="添加节点" placement="top" transfer style="margin-left:6px;">
								            	<a href="javascript:;"><Icon type="md-add" size="16" /></a>
								            </Tooltip>
							            </div>
							        </div>
							    </Panel>
							</Collapse>
						</div>
				    	<!-- json项 end -->
			        </TabPane>
			        <TabPane label="预览">
			        	预览
			        </TabPane>
			    </Tabs>
			</div>
			<!-- JSON end -->

			<!-- RAW begin -->
			<div v-show="returnDataType == 'RAW'">
				<Input type="textarea" :rows="5" />
			</div>
			<!-- RAW end -->
		</div>

		<div class="api-title">备注</div>
		<div class="api-content">
			<Input type="textarea" :rows="5" />
		</div>

		<div class="api-title">其他</div>
		<div class="api-content" style="background:#f2f4f6;padding:20px 0 1px;">
			<Form :label-width="200">
				<FormItem>
					<span slot="label">消息通知：
					    <Tooltip placement="top" max-width="300" content="开启消息通知，可在项目设置里修改">
					       <Icon type="ios-help-circle-outline" size="16" />
					    </Tooltip>
					</span>
		            <i-switch size="large">
		                <span slot="open">开</span>
		                <span slot="close">关</span>
		            </i-switch>
				</FormItem>
				<FormItem>
					<span slot="label">开发接口：
					    <Tooltip placement="top" max-width="300" content="用户可以在数据导出时，选择只导出公开接口">
					       <Icon type="ios-help-circle-outline" size="16" />
					    </Tooltip>
					</span>
		            <i-switch size="large">
		                <span slot="open">开</span>
		                <span slot="close">关</span>
		            </i-switch>
				</FormItem>
			</Form>			
		</div>


	    <Affix :offset-bottom="0" class="api-edit-save">
	        <Button type="primary" size="large">保存</Button>
	    </Affix>


		<!-- 请求参数-form-批量添加 弹层 begin-->
	    <Modal
	        v-model="addFormParams"
	        title="批量添加参数"
	        ok-text="导入"
	        width="600"
	        :mask-closable="false"
	        :loading="loading"
	        @on-ok="">
	        <Input type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="每行一个name:examples"></Input>
	    </Modal>
	    <!-- 请求参数-form-批量添加 弹层 end-->

	</div>
</template>

<script>
export default {
	data() {
		return {
			loading:true,
			addFormParams:false,//请求参数-批量添加弹层开关
			model18:[],			//基本设置，tag已选
            tagList: [			//基本设置，tag默认已有选项
                {
                    value: 'tag1',
                    label: '可以通过在输入框中输入文字来创建新的条目'
                },
            ],
            requestType:'Body',			//请求参数类型
            requestParameters:'form',	//请求参数默认项
            returnDataType:'JSON',		//返回数据类型

		}
	},
        methods: {
        	//基本设置- 添加tag
            handleCreate2 (val) {
                this.tagList.push({
                    value: val,
                    label: val
                });
            },

        	//form 批量添加
        	onAddFormParams() {
        		this.addFormParams = true;
        	},

        }	
}
</script>

<style scoped>
.api-title {font-size:20px;font-weight: 400;border-left: 3px solid #2395f1;padding-left: 8px;height: 28px;line-height: 28px;margin-bottom: 20px;}
.api-content {padding-left:15px;margin-bottom: 50px;}
.top-set-form-path >>> .ivu-select-selection {border-radius: 4px 0 0 4px;}
.top-set-form-path >>>.ivu-tooltip {margin:0 -1px;} 
.top-set-form-path .ivu-tooltip >>> .ivu-input {border-radius:0;}
.top-set-form-path > .ivu-input-wrapper >>> .ivu-input {border-radius:0 4px 4px 0;}

/*radio button 类型style*/
.ivu-radio-group-button .ivu-radio-wrapper-checked {color:#fff;background:#2d8cf0;}

/*请求参数 - json*/
.request-json-wrap >>> .ivu-collapse-simple {background:none;border:none;}
.request-json-wrap >>> .ivu-collapse-item {border-top:none;}
.request-json-wrap >>> .ivu-collapse-content {background:none;padding:0;}
.request-json-wrap >>> .ivu-collapse-content-box {padding-left: 44px;}
.request-json-wrap >>> .ivu-collapse .ivu-collapse-header {display: -webkit-flex;display: flex;align-items:center;margin-bottom: 10px;}
.request-json-wrap .edit-group >>> .ivu-select-selection,
.request-json-wrap .edit-group >>> .ivu-input {
	border-radius:4px 0 0 4px;
}
.request-json-wrap .edit-group >>> .ivu-btn {border-radius:0 4px 4px 0;margin-left:-1px;}
.request-json-wrap .edit-group >>> .ivu-btn:hover {z-index: 1;}
.request-json-wrap >>> .ivu-collapse-content-box>div>.ivu-input-wrapper {text-align:right;} 
.request-json-wrap >>> .ivu-collapse-content-box>div>.ivu-input-wrapper>.ivu-input {width:95%;} 

/*底部浮动save*/
.api-edit-save {text-align:center;}
.api-edit-save >>> div {padding:20px 0;}
.api-edit-save >>> .ivu-affix {background:#fafafa;}

.item-flex-wrap>.flex>div {margin-right:5px;}
</style>