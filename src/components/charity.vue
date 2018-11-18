<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-charityPage" class="wrapper">
			<div class="center">
				<h1 class="heading">{{ $t('pages.charity.heading_about') }}</h1>
				<h2 class="subHeading">{{ $t('pages.charity.subheading_about') }}</h2>
			</div>
			<p>
				{{ $t('pages.charity.para_main1') }}
			</p>
			<p>
				{{ $t('pages.charity.para_main2') }}
			</p>
			<p>
				{{ $t('pages.charity.para_main3_line1') }}
				{{$store.state.charity}}
				{{ $t('pages.charity.para_main3_line2') }}
			</p>
			<p>
				{{ $t('pages.charity.para_main4') }}
			</p>
		</div>

		<div id="JSEW-shop" style="padding-bottom:30px;">
			<div class="center">
				<h1 class="heading">Donate</h1>
				<h2 class="subHeading">Purchase some swag and give something back to charity</h2>
				<br /><br />

				<a class="button" style="display:inline-block;" href="/shop" target="_BLANK">
					<i class="fa fa-heart"></i> Shop and Donate
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'charity',
	metaInfo () {
		return {
			title: this.$t('pages.charity.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.charity.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.charity.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-charityPage {
	padding:30px 0px;
}
</style>
