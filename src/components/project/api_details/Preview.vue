<template>
	<div style="padding:15px;">
		<div class="api-title">基本信息</div>
		<Row class="api-content api-info">
			<Col span="12"><strong>接口名称：</strong>接口统一接入入口</Col>
			<Col span="12"><strong>创 建 人：</strong><router-link to=""><Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /> phpfarmers</router-link></Col>
			<Col span="12"><strong>状  态：</strong><Badge status="success" />未完成</Col>
			<Col span="12"><strong>更新时间：</strong>2020-10-30 15:41:07</Col>
			<Col span="24"><strong>接口路径：</strong><Tag color="blue">POST</Tag>/index/in</Col>
			<Col span="24"><strong>Mock地址：</strong>http://192.168.10.64:40003/mock/16/index/in</Col>
		</Row>

		<div class="api-title">备注</div>
		<div class="api-content">
			统一中转中心，返回数据是目标返回的数据格式
		</div>

		<div class="api-title">请求参数</div>
		<div class="api-content">
			<strong>Headers：</strong>
			<table class="api-table">
				<thead>
					<tr>
						<th>参数名称</th>
						<th>参数值</th>
						<th>是否必须</th>
						<th>示例</th>
						<th>备注</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Content-Type</td>
						<td>application/x-www-form-urlencoded</td>
						<td>是</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<strong>Body:</strong>
			<table class="api-table">
				<thead>
					<tr>
						<th>参数名称</th>
						<th>参数类型</th>
						<th>是否必须</th>
						<th>示例</th>
						<th>备注</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>project_id</td>
						<td>T文本</td>
						<td></td>
						<td>是</td>
						<td>项目ID</td>
					</tr>
					<tr>
						<td>nonce</td>
						<td>T文本</td>
						<td></td>
						<td>是</td>
						<td>验证随机码</td>
					</tr>
					<tr>
						<td>timestamp</td>
						<td>T文本</td>
						<td></td>
						<td>是</td>
						<td>时间戳</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="api-title">返回数据</div>
		<div class="api-content">
			<table class="api-table">
				<thead>
					<tr>
						<th>名称</th>
						<th>类型</th>
						<th>是否必须</th>
						<th>默认值</th>
						<th>备注</th>
						<th>其他信息</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="6" align="center" style="color:#999;">暂无数据</td>
					</tr>
				</tbody>
			</table>
		</div>

	</div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style scoped>
.api-title {font-size:20px;font-weight: 400;border-left: 3px solid #2395f1;padding-left: 8px;height: 28px;line-height: 28px;margin-bottom: 20px;}
.api-content {padding-left:15px;margin-bottom: 50px;}
.api-info .ivu-col {height: 36px;line-height: 36px;margin-bottom: 10px;}
.api-info .ivu-col strong {margin-right: 15px;display: inline-block;width:80px;}
.api-table {border-collapse: collapse;width:100%;margin: 5px 0 30px;text-align:left;}
.api-table th,.api-table td {border:1px solid #e8e8e8;color:#777;padding:8px;font-weight: 400;}
.api-table tbody tr:nth-child(even) {background:#fafafa;}
.api-table tbody tr:hover {background: #f0fbff;}
</style>