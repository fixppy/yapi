<template>
    <Layout>
        <div class="flex content-wrap">
            <Sider>sider</Sider>
            <Content></Content>
        </div>
    </Layout>
</template>

<script>
import Sider from '@/components/SiderIndex'
import Content from '@/components/ContentIndex'

export default {
	data() {
		return {

		}
	},
	components:{ Sider,Content },
	mounted() {

	},
	methods:{

	},
}
</script>
<style scoped>
.content-wrap {padding:20px;min-height:calc(100vh - 60px);}
.sider-wrap {width:300px;-webkit-align-self:flex-start;align-self:flex-start;}
.content {margin-left: 15px;-webkit-flex:1;flex:1;}
</style>