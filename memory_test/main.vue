<template>
  <div>
	<div>
		<router-link to="page1">page1</router-link>
		<router-link to="page2">page2</router-link>
	</div>
	<div>
		<button @click="aa = true">xx</button>
		<button @click="aa = false">yy</button>
		<x :tableData="tableData1" :items="items1" v-if="aa"></x>
		<y :tableData="tableData2" :items="items2" v-else></y>
	</div>
	<section>
		<router-view></router-view>
	</section>
  </div>
</template>
<script>
	import x from './component/x.vue'
	import y from './component/y.vue'
	export default {
		data () {
			return {
				aa: true
			}
		},
		computed: {
	      tableData2 () {
	        return this.$store.state.test2.tableData
	      },
	      items2 () {
	        return this.$store.state.test2.items
	      },
	      tableData1 () {
	        return this.$store.state.test1.tableData
	      },
	      items1 () {
	        return this.$store.state.test1.items
	      }
	    },
	    components: {
	    	x,
	    	y
	    }
	}
</script>