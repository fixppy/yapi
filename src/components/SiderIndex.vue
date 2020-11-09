<template>
	<div class="sider-wrap">
		<div class="sider-hd">
			<div class="flex justify-content-sb title">
				<h1>{{title}}</h1>
				<Tooltip content="添加分组" placement="top">
					<a href="javascript:;" style="color:#fff" @click="addGroup = true"><Icon type="md-add-circle" size="30" /></a>
				</Tooltip>
			</div>
			<div class="desc">简介：{{desc}}</div>
			<Input prefix="ios-search" clearable placeholder="搜索分类..." v-model="search" />
		</div>
		<CellGroup @on-click="onChangeGroup" class="sider-bd">
			<Cell v-for="(item,index) in groupList" :selected="group.num==item.id" :name="item.id">
				<span solt="icon"><Icon :type="item.icon" /></span>
				{{ item.title }}
			</Cell>
		</CellGroup>

		<!-- 添加分组弹层 -->
	    <Modal
	        v-model="addGroup"
	        title="添加分组"
	        :mask-closable="false"
	        :loading="loading"
	        @on-ok="addGroupOk">
	        <Form :label-width="120" style="padding-top:20px;width:450px;">
		        <FormItem label="分组名：">
		            <Input placeholder="请输入分组名称"></Input>
		        </FormItem>
	            <FormItem label="描述：">
	                <Input type="textarea" :autosize="{minRows: 2,maxRows: 4}" placeholder="请输入分组描述"></Input>
	            </FormItem>		        
		        <FormItem label="组长：">
					<Input placeholder="请输入用户名"></Input>
			    </FormItem>		        
	        </Form>
	    </Modal>
	</div>
</template>

<script>
import { url_info } from '@/api/config'
import Utils from '@/util.js'

export default {
	data() {
		return {
			groupID:'',			//url标识符,组id
			title:'',			//分组名称
			desc:'',			//分组描述
			projectList:'',		//分组内容
			addGroup:false,		//是否显示添加分组弹层
			loading:true,
            group:{				//side项目列表
            	list:'',
            	num:'1',		//selected，这里的数值是和数据库中项目的id对应
            },
            search:'',		
		}
	},
	mounted() {
		let that = this;
		this.init();
		//手动执行初始化
		Utils.$on('initIndex', function () {
			that.init()
		})		
	},
	methods:{
		//初始化
		init() {
			this.getParams();
			/**
			 * 演示mock数据只有一条，不同组获取数据后，相关内容都要相应改变
			 */
			this.$axios.get(url_info)
				.then((res) => {
					let data = res.data.d;
					this.title = data.title;
					this.desc = data.desc;
					this.projectList = data.projectList;
					this.$store.commit('changeHeaderTitle',data.title);	//演示：改变store中header title内容，也可以添加更多全局内容
					console.log(data)

					this.group.list = data.projectList;
				})
		},

	    //获取路由携带参数
		getParams() {
	        let getParams = this.$route.params;
	        this.groupID = getParams.group;
		},

        //切换组
        onChangeGroup(id) {
        	this.group.num = id;
			this.getParams();
			if(this.groupID != id) {
				this.$router.push({ params: { id: id}});
				this.init();
			}
        },

		//添加分组submit
        addGroupOk() {
			setTimeout(() => {
			    this.addGroup = false;
            	this.$Message.info('添加成功');
			}, 2000);        	
        },		
	},
    computed: {
    	// 实时监听侧栏分组列表
        groupList: function() {
            const search = this.search
            if (search) {
                return this.group.list.filter(dataNews => {
                    return Object.keys(dataNews).some(key => {
                        return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.group.list
        },
    },	
	beforeDestroy () {
		Utils.$off('initIndex')	//销毁全局初始化事件
	},
}
</script>

<style scoped>
.sider-wrap {background: #fff;}
.sider-hd {background: #32363a;color:#fff;padding:20px;}
.sider-hd .title {margin-bottom: 15px;}
.sider-hd h1 {font-size:20px;font-weight: 300;text-overflow: ellipsis;overflow:hidden;white-space: nowrap;height:30px;line-height: 30px;}
.sider-hd .desc {margin-bottom: 15px;color:#cecece;}
.sider-hd >>> .ivu-input {background-color:transparent;color:#fff;}
.sider-bd {padding:5px 0 10px;min-height:300px;}
.sider-bd .ivu-cell {padding:0;margin-bottom:5px;}
.sider-bd .ivu-cell >>> .ivu-cell-link {padding:7px 16px;}
.sider-bd .ivu-cell-selected >>> .ivu-cell-link:after {content: "";display: block;width: 2px;position: absolute;top: 0;bottom: 0;right: 0;background: #2d8cf0;}
</style>