<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-environment" class="wrapper">

			<h1 class="heading">{{ $t('pages.environment.heading_environment') }}</h1>
			<h2 class="subHeading">	{{ $t('pages.environment.subheading_environment') }}</h2>
			<p>
				{{ $t('pages.environment.para_main1') }}
			</p>
			<p>
				{{ $t('pages.environment.para_main2') }}
			</p>
			<p>
				{{ $t('pages.environment.para_main3') }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'environment',
	metaInfo () {
		return {
			title: this.$t('pages.environment.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.environment.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.environment.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-environment {
	padding:30px 0px;
}
</style>
