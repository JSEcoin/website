<template>
	<div>
	  <h1 class="heading center">ICO Complete - 11/10/2018</h1>
	  <h3 class="subHeading center">Redirecting you shortly to our exchange information page</h3>
	</div>
</template>

<script>
export default {
	name: 'exchangeRedirect',
	data() {
		return {
			toggleItem: false,
		};
	},
	mounted() {
		const self = this;
		setTimeout(() => {
			let rpath = '/exchanges';
			if (typeof (self.$route.params.lang) !== 'undefined') {
				rpath = `/${self.$route.params.lang}/exchanges`;
			}
			self.$router.push(rpath);
		}, 5000);
	},
};
</script>

<style>
/* Your styles */
</style>