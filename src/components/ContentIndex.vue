<template>
	<div class="content">
	    <Tabs type="card" :animated="false" @on-click="onTabChange">
        	<TabPane v-for="(item,index) in tabpane" :label="item.label" :key="index">
        		<div :is="tabContent"></div>
        	</TabPane>
	    </Tabs>
	</div>
</template>

<script>
import Set from '@/components/group/Set'
import List from '@/components/group/List'
import Member from '@/components/group/Member'

export default {
	data() {
		return {
			tabpane:[{
				label:'项目列表',
				content:'List',
			},{
				label:'成员列表',
				content:'Member',
			},{
				label:'分组设置',
				content:'Set'
			}],
			tabContent: 'List' // 默认显示项目列表
		}
	},
	components:{ Set,List,Member },
	methods:{
		onTabChange(name) {
			this.tabContent = this.tabpane[name].content
		},
	}
}
</script>

<style scoped>
.content >>> .ivu-tabs.ivu-tabs-card {height:100%;}
.content >>> .ivu-tabs.ivu-tabs-card > .ivu-tabs-content {min-height:calc(100% - 32px);background: #fff;}
.content >>> .ivu-tabs-card > .ivu-tabs-content {border:1px solid #dcdee2;border-top:none;}
.content > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {padding:20px;height:100%;}
.content >>> .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar {margin-bottom: 0;}
</style>