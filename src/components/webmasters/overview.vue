<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-webmasterOverview" class="wrapper">
			<div class="row">
				<div class="col" style="max-width:inherit;flex-grow:0;padding-right:40px;margin-right:40px; border-right:solid 1px #eee; width:240px;">
					<nav id="JSEW-subNav">
						<router-link v-bind:to="`/${$store.state.local}/tools/blockchainExplorer`" tag="a">
							{{ $t('template.navigation.link_blockchainExplorer') }}
						</router-link>
						<router-link v-bind:to="`/${$store.state.local}/tools/merchantTools`" tag="a">
							{{ $t('template.navigation.link_merchantTools') }}
						</router-link>
						<router-link v-bind:to="`/${$store.state.local}/tools/wallet`" tag="a">
							{{ $t('template.navigation.link_JSE_Wallet') }}
						</router-link>
						<router-link v-bind:to="`/${$store.state.local}/webmasters/integration`" tag="a">
							{{ $t('template.navigation.link_JSE_Integration') }}
						</router-link>
						<router-link v-bind:to="`/${$store.state.local}/systemStatus`" tag="a">
							{{ $t('template.navigation.link_systemStatus') }}
						</router-link>
						<router-link v-bind:to="`/${$store.state.local}/technical/APIS`" tag="a">
							{{ $t('template.navigation.link_API_Overview') }}
						</router-link>
						<router-link v-bind:to="`/${$store.state.local}/technical/samples`" tag="a">
							{{ $t('template.navigation.link_sampleIntegrations') }}
						</router-link>
						<router-link v-bind:to="`/blog/code`" tag="a">
							{{ $t('template.navigation.link_publisherNews') }}
						</router-link>
						<!--<a href="/forum/webmasters/">
							{{ $t('template.navigation.link_forums') }}
						</a>-->
						<a href="https://platform.jsecoin.com/?register=1" target="_BLANK">
							{{ $t('template.navigation.link_signup') }} <i class="fa fa-external-link"></i>
						</a>
					</nav>
				</div>
				<div class="col">

					<h1 class="heading">{{ $t('pages.webmastersOverview.heading_why') }}</h1>
					<h2 class="subHeading">{{ $t('pages.webmastersOverview.subheading_why') }}</h2>

					<p>
						{{ $t('pages.webmastersOverview.para_main1') }}
					</p>
					<p>
						{{ $t('pages.webmastersOverview.para_main2') }}
					</p>
					<p>
						{{ $t('pages.webmastersOverview.para_main3') }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'webmastersOverview',
	metaInfo () {
		return {
			title: this.$t('pages.webmastersOverview.meta.title') + ' ⚒',
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.webmastersOverview.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.webmastersOverview.meta.keywords'),
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
