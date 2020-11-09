<template>
	<div class="system-wrap">
		<h2 class="title">系统状况</h2>
		<Row class="row" :gutter="24">
			<Col span="6">
				<p>操作系统类型
					<Tooltip content="操作系统类型,返回值有'darwin', 'freebsd', 'linux', 'sunos' , 'win32'" placement="top-start" max-width="200">
						<Icon type="md-help-circle" color="#2395f1" size="16" />
					</Tooltip>
				</p>
				<h3>linux</h3>
			</Col>
			<Col span="6">
				<p>cpu负载
					<Tooltip content="CPU的总负载情况" placement="top-start" max-width="200">
						<Icon type="md-help-circle" color="#2395f1" size="16" />
					</Tooltip>
				</p>
				<h3>1.13 %</h3>
			</Col>
			<Col span="6">
				<p>系统空闲内存总量 / 内存总量
					<Tooltip content="系统空闲内存总量 / 内存总量" placement="top-start" max-width="200">
						<Icon type="md-help-circle" color="#2395f1" size="16" />
					</Tooltip>
				</p>
				<h3>11.81 G / 24.37 G</h3>
			</Col>
			<Col span="6">
				<p>邮箱状态
					<Tooltip content="检测配置文件中配置邮箱的状态" placement="top-start" max-width="200">
						<Icon type="md-help-circle" color="#2395f1" size="16" />
					</Tooltip>
				</p>
				<h3>未配置</h3>
			</Col>
		</Row>

		<h2 class="title">数据统计</h2>
		<Row class="row" :gutter="24">
			<Col span="6">
				<p>分组总数
					<Tooltip content="统计yapi中一共开启了多少可见的公共分组" placement="top-start" max-width="200">
						<Icon type="md-help-circle" color="#2395f1" size="16" />
					</Tooltip>
				</p>
				<h3>0</h3>
			</Col>
			<Col span="6">
				<p>项目总数
					<Tooltip content="统计yapi中建立的所有项目总数" placement="top-start" max-width="200">
						<Icon type="md-help-circle" color="#2395f1" size="16" />
					</Tooltip>
				</p>
				<h3>0</h3>
			</Col>
			<Col span="6">
				<p>接口总数
					<Tooltip content="统计yapi所有项目中的所有接口总数" placement="top-start" max-width="200">
						<Icon type="md-help-circle" color="#2395f1" size="16" />
					</Tooltip>
				</p>
				<h3>0</h3>
			</Col>
			<Col span="6">
				<p>测试接口总数
					<Tooltip content="统计yapi所有项目中的所有测试接口总数" placement="top-start" max-width="200">
						<Icon type="md-help-circle" color="#2395f1" size="16" />
					</Tooltip>
				</p>
				<h3>0</h3>
			</Col>
		</Row>

		<h3 class="title">分组数据详情</h3>
		<Table :columns="columns1" :data="data1"></Table>

	</div>
</template>

<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Group',
                        key: 'name'
                    },
                    {
                        title: '项目',
                        key: 'project'
                    },
                    {
                        title: '接口',
                        key: 'api'
                    },{
                    	title:'mock数据',
                    	key:'mock'
                    }
                ],
                data1: [
                    {
                        name: '生信开发云平台-测试机',
                        project: 18,
                        api: 2,
                        mock: 1
                    },
                    {
                        name: '生信开发云平台-测试机',
                        project: 18,
                        api: 2,
                        mock: 1
                    },
                    {
                        name: '生信开发云平台-测试机',
                        project: 18,
                        api: 2,
                        mock: 1
                    },

                ]
            }
        },
        mounted() {
        	this.$store.commit('changeHeaderTitle','系统信息');
        },
    }
</script>

<style scoped>
.system-wrap {background: #fff;width:1200px;margin:30px auto;min-height:calc(100vh - 264px);padding:30px 50px;}
.system-wrap h2.title {font-size:16px;font-weight: 400;border-left:3px solid #2395f1;padding-left: 8px;margin-bottom: 25px;}
.system-wrap h3.title {font-size:16px;font-weight: 400;margin-bottom: 25px;}
.system-wrap .row {padding:0 0 20px 20px;margin-bottom: 40px;border-bottom:1px solid #e8e8e8;}
.system-wrap .row .ivu-col:not(:last-child) {border-right:1px solid #e8e8e8;}
.system-wrap .row h3 {font-weight:400;padding-top: 15px;font-size:18px;}
</style>