<template>
    <div class="form-wrap">
        <div class="tar mb10 goback"><a href="javascript:;" @click="$router.back(-1)"><Icon type="ios-return-left" size="32" style="vertical-align:middle" /> 返回</a></div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="200">
            <FormItem label="项目名称：" prop="name">
                <Input v-model="formValidate.name" placeholder=""></Input>
            </FormItem>
            <FormItem label="所属分组：" prop="group">
                <Select placeholder="请选择" v-model="formValidate.group">
                    <Option value="0">个人空间</Option>
                    <Option value="1">生信开发创新云平台-测试机</Option>
                    <Option value="2">系统开发创新云平台-测试机</Option>
                    <Option value="3">系统开发云平台-测试机</Option>
                    <Option value="4">生信开发云平台-测试机</Option>
                </Select>
            </FormItem>
            <Divider />
            <FormItem prop="route">
                <span slot="label">基本路径：
                    <Tooltip content="接口基本路径，为空是根路径" placement="top">
                        <Icon type="ios-help-circle-outline" size="16" />
                    </Tooltip>
                </span>
                <Input v-model="formValidate.route" placeholder=""></Input>
            </FormItem>
            <FormItem label="描述：" prop="desc">
                <Input type="textarea" v-model="formValidate.desc" :autosize="{minRows: 4,maxRows: 5}" placeholder=""></Input>
            </FormItem>
            <FormItem label="权限：" prop="authority">
                <RadioGroup v-model="formValidate.authority">
                    <Radio label="siyou">私有</Radio>
                </RadioGroup>
                <div style="color:#888;">只有组长和项目开发者可以索引并查看项目信息</div>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')"><Icon type="md-add" /> 创建项目</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
	data() {
		return {
            formValidate: {
            	name:'',
                group: '0',
                route:'',
                desc:'',
                authority:'siyou',
            },
            ruleValidate: {
                name: [
                    { required: true, message: '请输入项目名称，长度不超过100字符(中文算作2字符)!', trigger: 'blur' }
                ],
                group: [
                    { required: true, message: '', trigger: 'blur' }
                ],
                authority: [
                    { required: true, message: '', trigger: 'blur' }
                ],
            }
		}
	},
    mounted() {
        this.$store.commit('changeHeaderTitle','新建项目');
    },
	methods:{
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
	}
}
</script>

<style scoped>
.form-wrap {min-height:calc(100vh - 264px);margin:30px;}
.goback a {color:#515a6e;font-size:15px;}
.goback a:hover {color:#2d8cf0;}
.ivu-form {padding:30px 30px 10px;background: #fff;}
</style>