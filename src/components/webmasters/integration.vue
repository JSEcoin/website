<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-webmasterOverview" class="wrapper">

			<h1 class="heading">{{ $t('pages.integration.heading_integration') }}</h1>
			<h2 class="subHeading">{{ $t('pages.integration.subheading_integration') }}</h2>

			<div class="row">
				<div class="col">
					<p>
						{{ $t('pages.integration.para_main1') }}
					</p>
					<p>
						{{ $t('pages.integration.para_main2_line1') }}
						<a href="https://platform.jsecoin.com" target="_BLANK">https://platform.jsecoin.com</a>
						{{ $t('pages.integration.para_main2_line2') }}
					<p>
					<p>
						{{ $t('pages.integration.para_main3') }}
						<b class="infoMsg">{{ $t('pages.integration.para_main3_infoMsg') }}</b>.
					<p>
					<p>
						{{ $t('pages.integration.para_main4') }}
					<p>
					<p>
						 {{ $t('pages.integration.para_main5_line1') }}
						 <b class="infoMsg">{{ $t('pages.integration.para_main5_infoMg1') }}</b>
						 {{ $t('pages.integration.para_main5_line2') }}
						 <b class="infoMsg">{{ $t('pages.integration.para_main5_infoMg2') }}</b>
						 {{ $t('pages.integration.para_main5_line3') }}
					</p>
				</div>
				<div class="col center">
					<img src="../../assets/images/api.png" style="width:80%; margin-top:20px;" alt="JSEcoin API"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'integration',
	metaInfo () {
		return {
			title: this.$t('pages.integration.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.integration.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.integration.meta.keywords'),
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
