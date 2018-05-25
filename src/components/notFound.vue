<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-404" class="wrapper center">
			<img src="../assets/images/404.png" width="80%" :alt="$t('pages.notFound.alt_404')" />
			<h1 class="heading">{{ $t('pages.notFound.heading_notFound') }}</h1>
			<h2 class="subHeading">{{ $t('pages.notFound.subheading_notFound') }}</h2>
		</div>

	</div>
</template>

<script>
export default {
	name: 'err404',
	metaInfo () {
		return {
			title: this.$t('pages.notFound.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.notFound.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.notFound.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-404 {
	padding:30px 0px;
}

#JSEW-404 h1,
#JSEW-404 h2 {
	color:#0079c1;
}
</style>
