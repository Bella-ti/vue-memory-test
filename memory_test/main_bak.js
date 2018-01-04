import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Main from './main.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
	modules: {
		test1: {
	      namespaced: true,
	      state: {
	        tableData: [],
	        items: []
	      },
	      mutations: {
	        resetTableData (state) {
	          state.tableData = []
	          state.items = []
	        },
	        setTableData (state, { tableData, items }) {
	          state.tableData = tableData
	          state.items = items
	        }
	      }
	    },
	    test2: {
	      namespaced: true,
	      state: {
	        tableData: [],
	        items: []
	      },
	      mutations: {
	        resetTableData (state) {
	          state.tableData = []
	          state.items = []
	        },
	        setTableData (state, { tableData, items }) {
	          state.tableData = tableData
	          state.items = items
	        }
	      }
	    }
	}
})

const page1 = function (r) {
	require.ensure([], () => {
		r(require('./pages/page1.vue'))
	}, 'page1')
}

const page2 = function (r) {
	require.ensure([], () => {
		r(require('./pages/page2.vue'))
	}, 'page2')
}

const router = new VueRouter({
	routes: [
		{ path:'/page1', name: '/page1', component: page1 },
		{ path:'/page2', name: '/page2', component: page2 }
	]
})

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(Main)
})