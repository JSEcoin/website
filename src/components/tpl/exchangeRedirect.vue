<template>
  <div> </div>
</template>

<script>
export default {
	name: 'exchangeRedirect',
	data() {
		return {
			toggleItem: false,
		};
	},
	created() {
		const self = this;
		self.$router.push(`/${self.$route.params.lang}/exchanges`);
	},
};
</script>

<style>
/* Your styles */
</style>