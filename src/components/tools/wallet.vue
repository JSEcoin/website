<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-webmasterOverview" class="wrapper">

			<h1 class="heading">{{ $t('pages.wallet.heading_wallet') }}</h1>
			<h2 class="subHeading">{{ $t('pages.wallet.subheading_wallet') }}</h2>

			<!--<p class="infoMsg">
				{{ $t('pages.wallet.para_main1_infoMsg') }}
			</p>-->
			<p>
				{{ $t('pages.wallet.para_main2') }}
			</p>
			<p>
				{{ $t('pages.wallet.para_main4') }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'wallet',
	metaInfo () {
		return {
			title: this.$t('pages.wallet.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.wallet.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.wallet.meta.keywords'),
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
