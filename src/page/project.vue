<template>
	<div>
	    <Menu mode="horizontal" theme="light" :active-name="activeName" style="padding:0 20px;">
	        <MenuItem name="1" to="/project/api">
	            接口
	        </MenuItem>
	        <MenuItem name="2" to="/project/members">
	            成员管理
	        </MenuItem>
	        <MenuItem name="3" to="/project/setting">
	            设置
	        </MenuItem>
	    </Menu>
	    <router-view name="his"></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName:'1',
		}
	},
	mounted() {
		switch (this.$route.name) {
			case '全部接口':
				this.activeName = '1';
				break;
			case '成员管理':
				this.activeName = '2';
				break;
			case '设置':
				this.activeName = '3';
				break;
		}
	},
}
</script>
