<template>
	<div>
	    <Form :model="formItem" class="form-wrap" :label-width="200">
	    	<FormItem label="分组名：">
				<Input v-model="formItem.input" placeholder="请输入分组名称" size="large"></Input>
	    	</FormItem>
	    	<FormItem label="简介：">
				<Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 8}" placeholder="请输入分组描述"></Input>
	    	</FormItem>
	    	<FormItem>
	    		<span slot="label">
	    			接口自定义字段：
	    			<Tooltip content="可以在接口中添加额外字段、数据" placement="top">
	    				<Icon type="ios-help-circle-outline" size="18" />
	    			</Tooltip>
	    		</span>
		            <Row>
		                <Col span="11">
		                    <Input v-model="formItem.value" placeholder="请输入分组名称：" size="large"></Input>
		                </Col>
		                <Col span="11">
			                <FormItem label="开启：" :label-width="100">
					            <i-switch v-model="formItem.switch" size="large">
					                <span slot="open">On</span>
					                <span slot="close">Off</span>
					            </i-switch>
					        </FormItem>
		                </Col>
		            </Row>
	    	</FormItem>
	        <FormItem style="text-align:center;display:block" :label-width="0">
	            <Button type="primary" size="large"><Icon type="md-briefcase" /> 保存</Button>
	        </FormItem>        
	    </Form>
	    <Row style="text-align:center;margin-bottom:30px;">
			<Col span="24" style="font-size:18px;margin-bottom:15px;"><Icon type="ios-alert-outline" size="24" style="vertical-align:top" /> 危险操作</Col>
			<Col span="24"><Button @click="warning.show = !warning.show">查看 <Icon :type="warning.show?'ios-arrow-up':'ios-arrow-down'" /></Button></Col>
	    </Row>
	    <Alert type="warning" show-icon v-show="warning.show">
	    	<Button type="warning" @click="delGroup">删除</Button>
	    	删除分组
	    	<template slot="desc">
		    	<p>分组一旦删除，将无法恢复数据，请慎重操作！</p>
		    	<p>只有超级管理员有权限删除分组。</p>
	    	</template>
	    </Alert>
	</div>
</template>

<script>
export default {
	data() {
		return {
            formItem: {
                input: '演示分组名',
                value:'演示字段',
                switch: true,
                textarea: ''
            },
            warning:{
            	show:false,
            },
		}
	},
	methods:{
		//删除分组
        delGroup () {
            this.$Modal.confirm({
                title: '确认删除分组',
                content: '<p>分组一旦删除，将无法恢复数据，请慎重操作！</p><p>只有超级管理员有权限删除分组。</p>',
                loading: true,
                onOk: () => {
                    setTimeout(() => {
                        this.$Modal.remove();
                        this.$Message.info('删除成功');
                    }, 2000);                	
                },
            });
        },		
	}
}
</script>

<style scoped>
.form-wrap {margin-bottom:50px;padding-top:30px;}
.ivu-alert-warning .ivu-btn {position: absolute;right:15px;top:35px;}
</style>