<template>
  <div>
	<div>
		<router-link to="page1">page1</router-link>
		<router-link to="page2">page2</router-link>
	</div>
	<section>
		<router-view></router-view>
	</section>
  </div>
</template>
<script>
	export default {}
</script>