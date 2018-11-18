<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-webmasterOverview" class="wrapper">

			<h1 class="heading">{{ $t('pages.merchantTools.heading_merchantTools') }}</h1>
			<h2 class="subHeading">{{ $t('pages.merchantTools.subheading_merchantTools') }}</h2>

			<!--
			<p class="infoMsg">
				{{ $t('pages.merchantTools.para_main1_infoMsg') }}
			</p>
		-->
			<p>
				{{ $t('pages.merchantTools.para_main1') }}
			</p>
			<ul>
				<li>{{ $t('pages.merchantTools.list_usedFor1') }}</li>
				<li>{{ $t('pages.merchantTools.list_usedFor2') }}</li>
				<li>{{ $t('pages.merchantTools.list_usedFor3') }}</li>
				<li>{{ $t('pages.merchantTools.list_usedFor4') }}</li>
				<li>{{ $t('pages.merchantTools.list_usedFor5') }}</li>
				<li>{{ $t('pages.merchantTools.list_usedFor6') }}</li>
				<li>{{ $t('pages.merchantTools.list_usedFor7') }}</li>
			</ul>

			<p>
				{{ $t('pages.merchantTools.para_main2') }}
			</p>

			<img src="../../assets/images/merchant_tools.png" alt="Merchant Tools Screenshot" class="merchant-tools-screenshot" />

		</div>
	</div>
</template>

<script>
export default {
	name: 'merchantTools',
	metaInfo () {
		return {
			title: this.$t('pages.merchantTools.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.merchantTools.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.merchantTools.meta.keywords'),
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

.merchant-tools-screenshot {
	max-width: 100%;
	border: 1px solid #CCC;
	border-radius: 3px;
}
</style>
