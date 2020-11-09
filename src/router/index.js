import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Router)

// 路由异常处理
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
	routes: [
		{
			path: '/group/:id',
			name: 'index',
			component:r => require(['@/page/index'],r),
        },{
            path:'/project',
            name:'项目',
            component:r => require(['@/page/project'],r),
            children:[{
                path: 'api',
                name:'全部接口',
                components:{
                    'his':r => require(['@/components/project/api'],r)
                },
                children:[{
                    path:'details/:id',
                    components:{
                        'his':r => require(['@/components/project/api'],r)
                    }
                }]
            },{
                path: 'api/:id',
                name:'自定义接口',
                components:{
                    'his':r => require(['@/components/project/api'],r)
                },
            },{
                path: 'members',
                name:'成员管理',
                components:{
                    'his':r => require(['@/components/project/members'],r)
                },
            },,{
                path: 'setting',
                name:'设置',
                components:{
                    'his':r => require(['@/components/project/setting'],r)
                },
            }]            
        },{
        	path:'/add-project',
        	name:'添加项目',
        	component:r => require(['@/page/add_project'], r) 
        },{
            path:'/user/center/:id',
            name:'个人中心',
            component:r => require(['@/page/user/center'], r)
        },{
            path:'/user/list',
            name:'用户管理',
            component:r => require(['@/page/user/list'], r)
        },{
            path:'/user/system',
            name:'系统信息',
            component:r => require(['@/page/user/system'], r)
        }
	]
})
