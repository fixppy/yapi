import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const store = new Vuex.Store({
	state:{
		headerTitle:'个人空间',		// 导航title
	},
	mutations:{
		//改变header中title内容
		changeHeaderTitle(state,data) {
			state.headerTitle = data;
		},

	},
})

export default store