<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<!--<router-link v-bind:to="`/${$store.state.local}/legal/userAgreement`" tag="li">
					{{ $t('pages.navigation.legal.link_userAgreement') }}
				</router-link>-->
				<router-link v-bind:to="`/${$store.state.local}/legal/privacyPolicy`" tag="li">
					{{ $t('pages.navigation.legal.link_privacyPolicy') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="li">
					{{ $t('pages.navigation.legal.link_terms') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/kycPolicy`" tag="li" class="active">
					{{ $t('pages.navigation.legal.link_kycPolicy') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/gdpr`" tag="li">
					GDPR
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-kycPolicy" class="wrapper">
			<h2 class="heading">{{ $t('pages.kycPolicy.heading_kyc') }}</h2>

			<p><em>{{ $t('pages.kycPolicy.para_main1') }}</em></p>
			<p><em>{{ $t('pages.kycPolicy.para_main2') }}</em></p>
			<p>{{ $t('pages.kycPolicy.para_main3') }}  <a href="https://www.gov.uk/guidance/money-laundering-regulations-your-responsibilities">https://www.gov.uk/guidance/money-laundering-regulations-your-responsibilities</a></p>
			<p>{{ $t('pages.kycPolicy.para_main4') }}</p>
			<blockquote>{{ $t('pages.kycPolicy.para_main5') }}</blockquote>
			<p>{{ $t('pages.kycPolicy.para_main6') }}</p>
			<ul>
				<li>{{ $t('pages.kycPolicy.list_collectedData1') }}</li>
				<li>{{ $t('pages.kycPolicy.list_collectedData2') }}</li>
			</ul>
			<h4 class="subHeading">{{ $t('pages.kycPolicy.subHeading_customerIdentity') }}</h4>
			<p>{{ $t('pages.kycPolicy.para_main7') }}</p>
			<h4 class="subHeading">{{ $t('pages.kycPolicy.subHeading_sharingInfo') }}</h4>
			<p>{{ $t('pages.kycPolicy.para_main8') }}</p>
			<h4 class="subHeading">{{ $t('pages.kycPolicy.subHeading_verifyingInfo') }}</h4>
			<p>{{ $t('pages.kycPolicy.para_main9') }}</p>
			<h4 class="subHeading">{{ $t('pages.kycPolicy.subHeading_monitoringInfo') }}</h4>
			<p>{{ $t('pages.kycPolicy.para_main10') }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'kycPolicy',
	metaInfo () {
		return {
			title: this.$t('pages.kycPolicy.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.kycPolicy.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.kycPolicy.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-kycPolicy {
	padding:30px 0px;
}
</style>
