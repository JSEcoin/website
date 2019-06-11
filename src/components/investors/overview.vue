<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-investrsOverview" class="wrapper">
			<div class="row">
				<div id="JSEW-subNav" class="col" style="max-width:inherit;flex-grow:0;padding-right:40px;margin-right:40px; border-right:solid 1px #eee;width:240px;">
					<nav>
							<!--
							<a href="/JSEcoinV2_Overview.pdf" target="_blank">
								Intro Slides <i class="fa fa-file-pdf-o"></i>
							</a>
							-->
							<a href="/onepager.pdf" target="_blank">
								{{ $t('template.navigation.link_overview') }} <i class="fa fa-file-pdf-o"></i>
							</a>
							<a href="/whitepaper.pdf" target="_blank">
								{{ $t('template.navigation.link_whitepaper') }} <i class="fa fa-file-pdf-o"></i>
							</a>
							<a href="https://www.slideshare.net/JamesBachini/jsecoin-pitch-deck-97289450" target="_blank">
								{{ $t('template.navigation.link_pitchdeck') }} <i class="fa fa-external-link"></i>
							</a>
							<a href="https://bitcointalk.org/index.php?topic=2398571.0" target="_BLANK">
								{{ $t('template.navigation.link_bitcoinTalkAnn') }} <i class="fa fa-external-link"></i>
							</a>
							<!--<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="a">
								{{ $t('template.navigation.link_siteStatistics') }}
							</router-link>-->
							<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="a">
								{{ $t('template.navigation.link_technicalOverview') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="a">
								{{ $t('template.navigation.link_press') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/exchanges`" tag="a">
								{{ $t('template.navigation.link_exchanges') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/environment`" tag="a">
								{{ $t('template.navigation.link_environment') }}
							</router-link>
							<!--<router-link v-bind:to="`/${$store.state.local}/whitelisting`" tag="a">
								{{ $t('template.navigation.link_whitelisting') }} <i class="fa fa-check"></i>
							</router-link>-->
					</nav>
				</div>
				<div class="col">
					<h1 class="heading">{{ $t('pages.investorOverview.heading_what') }}</h1>
					<h2 class="subHeading">{{ $t('pages.investorOverview.subheading_what') }}</h2>

					<p>
						{{ $t('pages.investorOverview.para_what1') }}
					</p>

					<h1 class="heading">{{ $t('pages.investorOverview.heading_why') }}</h1>
					<h2 class="subHeading">{{ $t('pages.investorOverview.subheading_why') }}</h2>

					<p>
						{{ $t('pages.investorOverview.para_why1') }}
					</p>
					<p>
						{{ $t('pages.investorOverview.para_why2') }}
					</p>

					
					<h1 class="heading">{{ $t('pages.investorOverview.heading_when') }}</h1>
					<!--
						<h2 class="subHeading">{{ $t('pages.investorOverview.subheading_when') }}</h2>

					<p>
						{{ $t('pages.investorOverview.para_when1') }}
					</p>
					-->
					<iframe src="//www.slideshare.net/slideshow/embed_code/key/vR3AsGAhAY4YNf" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin: 20px; max-width: 100%;" allowfullscreen> </iframe>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'investorOptions',
	metaInfo () {
		return {
			title: this.$t('pages.investorOverview.meta.title') + ' 💰',
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.investorOverview.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.investorOverview.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-investrsOverview {
	padding:30px 0px;
}


</style>
