<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-exchanges" class="wrapper">
			<h1 class="heading">{{ $t('pages.exchanges.heading_exchanges') }}</h1>
			<h2 class="subHeading">{{ $t('pages.exchanges.subheading_exchanges') }}</h2>
			<p>
				{{ $t('pages.exchanges.para_main1') }}
			</p>
			<p>
				{{ $t('pages.exchanges.para_main2') }}
			</p>
			<ul>
				<li>Cryptopia.co.nz</li>
				<li>HitBTC.com</li>
				<li>Liqui.io</li>
				<li>Yobit</li>
				<li>Binance</li>
			</ul>
			<p>
				{{ $t('pages.exchanges.para_main3') }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'exchanges',
	metaInfo () {
		return {
			title: this.$t('pages.exchanges.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.exchanges.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.exchanges.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-exchanges {
	padding:30px 0px;
}
</style>
