<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<!--<router-link v-bind:to="`/${$store.state.local}/legal/userAgreement`" tag="li">
					{{ $t('pages.navigation.legal.link_userAgreement') }}
				</router-link>-->
				<router-link v-bind:to="`/${$store.state.local}/legal/privacyPolicy`" tag="li" class="active">
					{{ $t('pages.navigation.legal.link_privacyPolicy') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="li">
					{{ $t('pages.navigation.legal.link_terms') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/kycPolicy`" tag="li">
					{{ $t('pages.navigation.legal.link_kycPolicy') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/gdpr`" tag="li">
					GDPR
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-privacy" class="wrapper">
			<h2 class="heading">{{ $t('pages.privacyPolicy.heading_privacy') }}</h2>

			<p>{{ $t('pages.privacyPolicy.para_main1') }}</p>
			<hr class="JSEW-privacy-hr">
			<p id="JSEW-privacy-cta">{{ $t('pages.privacyPolicy.para_main1_cta') }}<a href="https://platform.jsecoin.com/?register=1&utm_medium=internalLinks&utm_source=privacyNotice&utm_campaign=privacyNoticeLink" target="_blank">https://platform.jsecoin.com</a></p>
			<hr class="JSEW-privacy-hr">
			<p>{{ $t('pages.privacyPolicy.para_main2') }}</p>
			<p><a href="https://server.jsecoin.com/optout/">{{ $t('pages.privacyPolicy.para_main3') }}</a></p>
			<p><a href="https://server.jsecoin.com/optin/">{{ $t('pages.privacyPolicy.para_main4') }}</a></p>
			<p>{{ $t('pages.privacyPolicy.para_main5') }}</p>
			<br />
			<h4 class="subHeading">{{ $t('pages.privacyPolicy.subHeading_dataPrivacy') }}</h4>

			<p>{{ $t('pages.privacyPolicy.para_main6') }}</p>
			<p>{{ $t('pages.privacyPolicy.para_main7') }}</p>

			<ul>
				<li>{{ $t('pages.privacyPolicy.list_collectedData1') }}</li>
				<li>{{ $t('pages.privacyPolicy.list_collectedData2') }}</li>
				<li>{{ $t('pages.privacyPolicy.list_collectedData3') }}</li>
				<li>{{ $t('pages.privacyPolicy.list_collectedData4') }}</li>
				<li>{{ $t('pages.privacyPolicy.list_collectedData5') }}</li>
				<li>{{ $t('pages.privacyPolicy.list_collectedData6') }}</li>
			</ul>

			<p>{{ $t('pages.privacyPolicy.para_main8') }} <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a></p>
			<p>{{ $t('pages.privacyPolicy.para_main9') }}</p>
			<p><i>{{ $t('pages.privacyPolicy.para_main10_info') }}</i></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'privacy',
	metaInfo () {
		return {
			title: this.$t('pages.privacyPolicy.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.privacyPolicy.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.privacyPolicy.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-privacy {
	padding:30px 0px;
}
#JSEW-privacy-cta {
	margin: 10px 0;
	font-size: 1.1em;
}
.JSEW-privacy-hr {
	display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #CCC;
  margin: 1em 20px;
  padding: 0;
}
</style>
