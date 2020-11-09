<template>
	<div>
		<div class="api-list-title flex justify-content-sb">
			<h2>全部接口共 (1) 个</h2>
			<Button type="primary" @click="childMethod">添加接口</Button>
		</div>

		 <Table :columns="columns6" :data="data5" class="api-list-table">
		 	<template slot-scope="{ row }" slot="name">
				<router-link to="" @click.native="onGotoApiDetails(row.name)">{{ row.name }}</router-link>
		 	</template>
		 	<template slot-scope="{ row }" slot="path">
		 		<Tag color="blue">POST</Tag>{{ row.path }}
		 	</template>
		 	<template slot-scope="{ row }" slot="type">
			    <Dropdown trigger="click" @on-click="onChangeType" transfer>
			        <a href="javascript:void(0)">
			            {{ row.type }}
			            <Icon type="ios-arrow-down"></Icon>
			        </a>
			        <DropdownMenu slot="list">
			            <DropdownItem name="公共分类">公共分类</DropdownItem>
			            <DropdownItem name="公共分类2">公共分类2</DropdownItem>
			        </DropdownMenu>
			    </Dropdown>
		 	</template>
		 	<template slot-scope="{ row }" slot="state">
			    <Dropdown trigger="click" @on-click="onChangeState" transfer>
			        <a href="javascript:void(0)">
			            <Badge status="success" />{{ row.state }}
			            <Icon type="ios-arrow-down"></Icon>
			        </a>
			        <DropdownMenu slot="list">
			            <DropdownItem name="已完成"><Badge status="success" />已完成</DropdownItem>
			            <DropdownItem name="未完成"><Badge status="error" />未完成</DropdownItem>
			        </DropdownMenu>
			    </Dropdown>
		 	</template>
		 </Table>

		 <Page :total="100" />

	</div>
</template>

<script>
import Utils from '@/util.js'

export default {
	data() {
		return {
                columns6: [
                    {
                        title: '接口名称',
                        slot: 'name'
                    },
                    {
                        title: '接口路径',
                        slot: 'path'
                    },
                    {
                        title: '接口分类',
                        slot: 'type',
                    },
                    {
                        title: '状态',
                        slot: 'state',
                        filters: [
                            {
                                label: '已完成',
                                value: '已完成'
                            },
                            {
                                label: '未完成',
                                value: '未完成'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.state.indexOf(value) > -1;
                        }
                    },{
                    	title:'tag',
                    	key:'tag'
                    }
                ],
                data5: [
                    {
                        name: '用户登录',
                        path: '/user/login',
                        type: '公共分类2',
                        state:'已完成',
                        tag: '未设置',
                    },{
                        name: '用户注册',
                        path: '/user/login',
                        type: '公共分类',
                        state:'未完成',
                        tag: '未设置',
                    },{
                        name: '用户信息修改',
                        path: '/user/login',
                        type: '公共分类',
                        state:'未完成',
                        tag: '未设置',
                    },
                ],
		}
	},
	methods:{
        //添加接口
        childMethod() {
        	Utils.$emit('on-add-api')
        },

        //改变分类
        onChangeType(name) {
        	console.log(name)
        	this.$Message.success('设置成功！')
        },

        //改变状态
        onChangeState(name) {
        	console.log(name)
        	this.$Message.success('设置成功！')
        },

        //接口跳转
        onGotoApiDetails(name) {
        	Utils.$emit('on-goto-apiDetails',name)
        },

	}
}
</script>

<style scoped>
.api-list-title {margin-bottom: 15px;}
.api-list-title h2 {font-size:20px;font-weight:400;border-left:3px solid #2395f1;padding-left: 8px;height: 28px;line-height: 28px;}
.api-list-table .ivu-dropdown a {color:#666;}
.ivu-page {padding:20px 0;text-align:right;}
</style>