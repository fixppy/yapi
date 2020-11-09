<template>
	<div class="list-wrap">
		<div class="title flex justify-content-sb">
			<h3>用户总数：4位</h3>
			<Input suffix="ios-search" placeholder="请输入用户名" style="width: auto" v-model="search" />
		</div>
		<Table border :columns="columns" :data="tables">
			<template slot-scope="{ row, index }" slot="name">
				<router-link to="/user/center/1">{{ row.name }}</router-link>
			</template>
	        <template slot-scope="{ row, index }" slot="fn">
				<Poptip title="确认删除此用户?"
					confirm
					transfer
					slot="extra"
					@on-ok="onDelUser(index)"
				>
        			<Button type="error" size="small">删除</Button>
				</Poptip>	
	        </template>			
		</Table>
		<Page :total="10" show-sizer style="padding:30px 0;text-align:right;" />
	</div>
</template>

<script>
    export default {
        data () {
            return {
            	search:'',
                columns: [
                    {
                        title: '用户名',
                        slot:'name'
                    },
                    {
                        title: 'Email',
                        key:'email'
                    },
                    {
                        title: '用户角色',
                        key:'role'
                    },
                    {
                    	title:'更新日期',
                    	key:'date'
                    },
                    {
                    	title:'功能',
                    	slot:'fn',
                    	align: 'center',
                    	width:120,
                    }
                ],
                data: [
                    {
                        name: 'xiaojie.li',
                        email: 'xiaojie.li@majorbio.com',
                        role: 'admin',
                        date: '2016-10-03',
                    },{
                        name: 'yong.zhou',
                        email: 'yong.zhou@majorbio.com',
                        role: 'admin',
                        date: '2016-10-03',
                    },{
                        name: 'jeff',
                        email: 'jeff.lee@majorbio.com',
                        role: 'admin',
                        date: '2016-10-03',
                    },
                ]
            }
        },
        mounted() {
        	this.$store.commit('changeHeaderTitle','用户管理');
        },
        methods:{
        	//删除用户
        	onDelUser() {
        		this.$Message.success('删除成功！')
        	},
        },
        computed: {
        	// 实时监听表格
            tables: function() {
                const search = this.search
                if (search) {
                    return this.data.filter(dataNews => {
                        return Object.keys(dataNews).some(key => {
                            return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                return this.data
            }
        },

    }
</script>

<style scoped>
.list-wrap {background: #fff;width:1200px;margin:30px auto;min-height:calc(100vh - 264px);padding:30px 50px;}
.list-wrap .title {margin-bottom: 15px;}
.list-wrap .title h3 {font-size:22px;font-weight:300;}
</style>