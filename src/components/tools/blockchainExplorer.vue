<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-webmasterOverview" class="wrapper">
			<h1 class="heading">{{ $t('pages.blockchainExplorer.heading_blockchainExplorer') }}</h1>
			<h2 class="subHeading">{{ $t('pages.blockchainExplorer.subheading_blockchainExplorer') }}</h2>

			<p>
				{{ $t('pages.blockchainExplorer.para_main1') }}
			</p>
			<p>
				{{ $t('pages.blockchainExplorer.para_main2') }}
			</p>
			<p>
				<a href="https://blockchain.jsecoin.com" target="_BLANK	">https://blockchain.jsecoin.com</a>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'blockchainExplorer',
	metaInfo () {
		return {
			title: this.$t('pages.blockchainExplorer.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.blockchainExplorer.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.blockchainExplorer.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-webmasterOverview {
	padding:30px 0px;
}


</style>
