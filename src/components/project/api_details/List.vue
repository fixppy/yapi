<template>
	<div>
	    <Tabs :animated="false" @on-click="onTabChange">
        	<TabPane v-for="(item,index) in tabpane" :label="item.label" :key="index">
        		<div :is="tabContent"></div>
        	</TabPane>
	    </Tabs>
	</div>
</template>

<script>
import Preview from '@/components/project/api_details/Preview'	
import Edit from '@/components/project/api_details/Edit'

export default {
	data() {
		return {
			tabpane:[{
				label:'预览',
				content:'Preview',
			},{
				label:'编辑',
				content:'Edit',
			}],
			tabContent: 'Preview' // 默认显示项目列表			
		}
	},
	components:{ Preview,Edit },
	methods:{
		onTabChange(name) {
			this.tabContent = this.tabpane[name].content
		},
	}	
}
</script>

<style scoped>

</style>