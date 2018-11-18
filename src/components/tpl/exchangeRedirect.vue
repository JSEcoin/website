<template>
	<div style="margin-top:80px">
		<h1 class="heading center">ICO Complete - 11/10/2018</h1>
		<h3 class="subHeading center">Redirecting you shortly to our exchange information page</h3>
		<h1 class="heading center">{{count}}</h1>
	</div>
</template>

<script>
export default {
	name: 'exchangeRedirect',
	data() {
		return {
			count: 5,
		};
	},
	mounted() {
		const self = this;
		setInterval(() => {
			console.log('x');
			if (self.count <= 1) {
				self.redirect();
			} else {
				self.count--;
			}
		}, 1000);
	},
	methods: {
		redirect() {
			const self = this;
			let rpath = '/exchanges';
			if (typeof (self.$route.params.lang) !== 'undefined') {
				rpath = `/${self.$route.params.lang}/exchanges`;
			}
			self.$router.push(rpath);
		},
	},
};
</script>

<style>
/* Your styles */
</style>
