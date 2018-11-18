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
				<router-link v-bind:to="`/${$store.state.local}/legal/kycPolicy`" tag="li">
					{{ $t('pages.navigation.legal.link_kycPolicy') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/gdpr`" tag="li" class="active">
					GDPR
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-kycPolicy" class="wrapper">
			<h2 class="heading">General Data Protection Regulation</h2>

			<p>General Data Protection Regulation (GDPR) is effective from the 25th May 2018. Introduced by the EU but applicable globally it affects what, how, why, where, and when personal data is used and processed. JSECOIN Ltd is committed to protecting users right to data privacy and protection. We do not collect and process users personal information beyond what is required for the fundamental functioning of our products. GDPR helps us to assure the highest standards of operations for protecting personal data.</p>
			<h3 class="subHeading">Obligations and Initiatives</h3>
			<p>As a data processor, JSEcoin understands its obligation to protect any data that we use or hold. We have thoroughly analyzed GDPR requirements and have put in place a dedicated internal team. To ensure our compliance and uphold the highest possible standards for data protection we are carrying out the following initiatives:</p>

			<p><strong>Identifying personal data</strong> - Data maps have been created to visualise how we use and hold data within the systems that we operate. When a user sets up an account they trust us with their personal data. We do not store or handle personal data for visitors to publishers websites.</p>
			<p><strong>Data integrity and security</strong> - As a cryptocurrency platform we are under particular scrutiny when it comes to security. The fiscal motivation to attack the system means that our security efforts must be effective. We are taking every step possible to improving the security of our network and systems, ultimately protecting our users data.</p>
			<p><strong>Transparency</strong> - A key aspect of GDPR is how the collected data is used. As a data processor, JSEcoin’s key role is to provide our customers (the data controllers) with the access to effectively manage and protect their user data. JSEcoin is committed to transparency throughout our business and we provide as much transparency as possible to our customers.</p>

			<h3 class="subHeading">How has JSEcoin ensured they are GDPR ready</h3>
			<p>We have allocated a data privacy team to oversee GDPR activities and look for ways in which we can improve. We have carried out a thorough security and privacy review which will be maintained and updated at regular intervals. We have mapped our internal data flows and assessed the risk that each carries and what can be done to mitigate the risk involved. Our data storage systems have been assessed and updated to ensure their compliance with GDPR regulations. We have setup a formal work flow to respond to data subjects when they exercise their rights. We have carried out a PIA (Privacy Impact Assessment) and updated our business continuity plan and threat assessments.</p>

			<h3 class="subHeading">What does this mean for JSEcoin users?</h3>
			<p>The JSEcoin network is built for our users and without them we would not have an ecosystem in which to operate. It is critical that users feel that they can trust us with their data and we do everything possible to ensure their data is protected and not misused.</p>

			<p>As an individual user you have the following rights:</p>

			<ul>
			<li>The right to be informed</li>
			<li>The right of access</li>
			<li>The right to rectification</li>
			<li>The right to erasure</li>
			<li>The right to restrict processing</li>
			<li>The right to data portability</li>
			<li>The right to object</li>
			</ul>

			<p>Rights in relation to automated decision making and profiling</p>

			<p>If you have any concerns or queries relating to data privacy, please do not hesitate to contact us at: <a href="https://jsecoin.com/en/support/contact">https://jsecoin.com/en/support/contact</a></p>

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
