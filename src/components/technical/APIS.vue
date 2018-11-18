<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="li">
					{{ $t('pages.navigation.technical.link_overview') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="li">
					{{ $t('pages.navigation.technical.link_stats') }}
				</router-link>
				<li onclick="window.location.href='https://developer.jsecoin.com'" class="active">
						{{ $t('pages.navigation.technical.link_APIS') }}
				</li>
				<li onclick="window.location.href='https://developer.jsecoin.com/samples'">
						{{ $t('pages.navigation.technical.link_samples') }}
				</li>
				<!--<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="li">
					{{ $t('pages.navigation.technical.link_support') }}
				</router-link>-->
				<!--
				<router-link v-bind:to="`/${$store.state.local}/technical/APIS`" tag="li">
					{{ $t('pages.navigation.technical.link_APIS') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/samples`" tag="li">
					{{ $t('pages.navigation.technical.link_samples') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/support`" tag="li">
					{{ $t('pages.navigation.technical.link_support') }}
				</router-link>
				-->
			</ul>
		</nav>

		<div id="JSEW-APIIntro" class="wrapper">
			<div class="row">
				<div class="col">
					<h1 class="heading">{{ $t('pages.APIS.heading_about') }}</h1>
					<h2 class="subHeading">{{ $t('pages.APIS.subheading_about') }}</h2>
					<p>
						{{ $t('pages.APIS.para_main1_line1') }}<br />
						{{ $t('pages.APIS.para_main1_line2') }}
					</p>
					<p>
						<b>{{ $t('pages.APIS.para_main2_b') }}</b> <a href="https://developer.jsecoin.com" target="_BLANK">https://developer.jsecoin.com</a><br />
						<b>Archived API Overview</b> <a href="https://jsecoin.com/api/" target="_BLANK">https://jsecoin.com/api/</a>
					</p>
					<p class="infoMsg">
						{{ $t('pages.APIS.para_main3_line1') }}<br />
						{{ $t('pages.APIS.para_main3_line2') }}

						<router-link v-bind:to="`/blog/development`">
							{{ $t('pages.APIS.link_oldBlogPosts') }}
						</router-link>.
					</p>
				</div>
				<div class="col center">
					<img src="../../assets/images/code.png" style="width:60%; margin-top:20px;"  :alt="$t('pages.APIS.alt_api')" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'APIS',
	metaInfo () {
		return {
			title: this.$t('pages.APIS.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.APIS.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.APIS.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


#JSEW-APIIntro {
	padding: 30px 0px;
}
</style>
