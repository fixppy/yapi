<template>
	<div>
		<Collapse simple @on-change="handleChange" v-model="panelOpenValue" class="api-tree">
	    	<Panel v-for="(panel,index) in data" :key="index" :hide-arrow="panel.children?false:true">
	    		<span @click.stop.prevent="() => {}" @click="onChangeApi(panel.id)" :class="active==panel.id?'active':''">
	            	<Icon type="ios-folder-outline" />{{panel.title}}
	            	<span class="tools" v-if="panel.children">
	            		<Tooltip content="添加接口" placement="top">
	            			<Icon type="md-add" size="17" @click="onAddApi(panel.id)" @click.stop.prevent="() => {}" />
	            		</Tooltip>
	            		<Tooltip content="编辑分类" placement="top">
	            			<Icon type="md-create" size="17" @click="onEditCategory(panel.id)" @click.stop.prevent="() => {}" />
	            		</Tooltip>
	            		<Tooltip content="删除分类" placement="top">
	            			<Icon type="ios-trash" size="17" @click="onDelCategory(panel.id)" @click.stop.prevent="() => {}"/>
						</Tooltip>
	            	</span>
	    		</span>
	    		<ul slot="content" v-if="panel.children">
	    			<li v-for="(item,i) in panel.children" @click="onChangeApi(item.id)" :class="active==item.id?'active':''">
		    			{{item.title}}
		    			<span>
		            		<Tooltip content="复制接口" placement="top">
		            			<Icon type="md-copy" size="17" @click="onCopyApi(item.id)" @click.stop />
		            		</Tooltip>
		            		<Tooltip content="删除接口" placement="top">
		            			<Icon type="ios-trash" size="17" @click="onDelApi(item.id)" @click.stop />
							</Tooltip>	            		
		    			</span>
	    			</li>
	    		</ul>
	    	</Panel>
		</Collapse>

		<!-- 修改分类弹层 -->
	    <Modal
	        v-model="editCategory"
	        title="修改分类"
	        :mask-closable="false"
	        :loading="loading"
	        @on-ok="onEditCategorySubmit('formValidateEDIT')"
	    >
	    	<Form ref="formValidateEDIT" :model="formValidateEDIT" :label-width="120" style="padding-top:20px;width:450px;" :rules="ruleValidateEDIT">
		        <FormItem label="分类名：" prop="name">
		            <Input v-model="formValidateEDIT.name" placeholder="接口名称"></Input>
		        </FormItem>
		        <FormItem label="备注：">
		            <Input v-model="formValidateEDIT.desc" placeholder="接口名称"></Input>
		        </FormItem>		        
	    	</Form>
	    </Modal>

	</div>
</template>

<script>
export default {
	props:['data','defaultOpen','active'],
	data() {
		return {
			panelOpenValue:'',	//默认打开
			loading:true,
			editCategory:false,
			formValidateEDIT:{
				name:'test',
				desc:'test',
			},
			ruleValidateEDIT:{
                name: [
                    { required: true, message: '请输入分类名称)!', trigger: 'blur' }
                ],
			},			
		}
	},
	mounted() {
	},
	methods:{

		//切换折叠面板
		handleChange(key) {
		},

		//点击接口分类
		onChangeApi(id) {
			this.$emit('on-change-api',id);
		},


        //添加接口
        onAddApi(id) {
        	this.$emit('on-add-api',id)
        },

        /****************************************************************************************************/
        //修改分类
        onEditCategory(id) {
        	this.$emit('on-edit-category',id)
        },

        //打开修改分类弹层
        onOpenEditCategory() {
        	this.editCategory = true;
        },

        //修改分类submit
        onEditCategorySubmit() {
        	this.$Message.success('Success!');
        },

		/****************************************************************************************************/
		//删除分类
        onDelCategory() {
            this.$Modal.confirm({
                title: '确定删除此接口分类吗？',
                content: '温馨提示：该操作会删除该分类下所有接口，接口删除后无法恢复',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$Modal.remove();
                        this.$Message.success('删除成功');
                    }, 2000);                	
                },
            });
        },

        //删除接口
        onDelApi() {
            this.$Modal.confirm({
                title: '您确认删除此接口？',
                content: '温馨提示：接口删除后，无法恢复',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$Modal.remove();
                        this.$Message.info('删除成功');
                    }, 2000);                	
                },
            });        	
        },

        //复制接口
        onCopyApi() {
        	this.$Message.info('接口添加成功');
        },

	}
}
</script>

<style scoped>
.api-tree {padding:5px 0;}
.api-tree .active {background:#d5ebfc;}
.ivu-collapse {border:none;}
.ivu-collapse>.ivu-collapse-item> >>> .ivu-collapse-header {border-bottom:none;padding-left: 5px;}
.ivu-collapse>.ivu-collapse-item> >>> .ivu-collapse-header>i {position: absolute;left:0;top:13px;}
.ivu-collapse>.ivu-collapse-item> >>> .ivu-collapse-header>span {display:block;margin-left: 15px;padding-left:5px;transition: all .3s ease;}
.ivu-collapse>.ivu-collapse-item> >>> .ivu-collapse-header>span>i {margin-right: 5px;}
.ivu-collapse>.ivu-collapse-item> >>> .ivu-collapse-header>span:hover:not(.active) {background: #f0fbff;}
.ivu-collapse>.ivu-collapse-item> >>> .ivu-collapse-header>span:hover .tools {display:inline-block;}
.ivu-collapse>.ivu-collapse-item> >>> .ivu-collapse-header .tools {float:right;display: none;}
.ivu-collapse-content ul {margin-left: 23px;}
.ivu-collapse-content ul li {height: 38px;line-height: 38px;padding-left: 5px;transition: all .3s ease;cursor: pointer;}
.ivu-collapse-content ul li:not(.active):hover {background: #f0fbff;}
.ivu-collapse-content ul li:hover>span {display:inline-block;}
.ivu-collapse-content ul li>span {float:right;display: none;}
.ivu-collapse>.ivu-collapse-item {border-top:none;}
>>> .ivu-collapse-content>.ivu-collapse-content-box {padding-bottom: 0;}
</style>