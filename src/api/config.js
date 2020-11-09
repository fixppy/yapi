/*
 * 环境地址配置
 */
const api = 0 //0:测试   1:正式

let url;
if(api === 0){
	require('@/api/mock.js')	//引入mock数据
    url = 'http://mock'
}else if(api === 1){
	url = 'http://正式地址'
}

// 登录
export let url_info =				url+'/api/info';					//测试用信息