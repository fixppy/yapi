const Mock = require('mockjs')

Mock.mock(RegExp('http://mock/api/info.*'),{
    "c":0,
    'm':'请求数据成功',
    "d":{
            'title|1':['个人空间','生信开发创新云平台-测试机','系统开发云平台-测试机'],
            'desc':'描述信息',
            'projectList':[
                {
                    'title':'个人空间',
                    'icon':'md-person',
                    'id':'1'
                },
                {
                    'title':'生信开发创新云平台-测试机',
                    'icon':'ios-folder-open-outline',
                    'id':'12'
                },
                {
                    'title':'系统开发创新云平台-测试机',
                    'icon':'ios-folder-open-outline',
                    'id':'10'
                },
                {
                    'title':'系统开发云平台-测试机',
                    'icon':'ios-folder-open-outline',
                    'id':'22'
                },
                {
                    'title':'生信开发云平台-测试机',
                    'icon':'ios-folder-open-outline',
                    'id':'28'
                },
            ]
        },
})
