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
				<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="li" class="active">
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

		<div id="JSEW-terms" class="wrapper">
			<h2 class="heading">{{ $t('pages.terms.heading_terms') }}</h2>
			<ol>
				<li>
					<h4>{{ $t('pages.terms.subHeading_definitions') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_definitions1') }}</li>
						<li>{{ $t('pages.terms.list_definitions2') }}</li>
						<li>{{ $t('pages.terms.list_definitions3') }}</li>
						<li>{{ $t('pages.terms.list_definitions4') }}</li>
						<li>{{ $t('pages.terms.list_definitions5') }}</li>
						<li>{{ $t('pages.terms.list_definitions6') }}</li>
						<li>{{ $t('pages.terms.list_definitions7') }}</li>						
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_conditions') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_conditions1') }}</li>
						<li>{{ $t('pages.terms.list_conditions2') }}</li>
						<li>{{ $t('pages.terms.list_conditions3') }}</li>
						<li>{{ $t('pages.terms.list_conditions4') }}</li>
						<li>{{ $t('pages.terms.list_conditions5') }}</li>
					</ol>
				</li>
				<li>			
					<h4>{{ $t('pages.terms.subHeading_liquidty') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_liquidty1') }}</li>
						<li>{{ $t('pages.terms.list_liquidty2') }}</li>
						<li>{{ $t('pages.terms.list_liquidty3') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_deliveryOfPrivacyNotice') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_deliveryOfPrivacyNotice1') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_publicity') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_publicity1') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_statisticsDiscrepancies') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_statisticsDiscrepancies1') }}</li>
						<li>{{ $t('pages.terms.list_statisticsDiscrepancies2') }}</li>
						<li>{{ $t('pages.terms.list_statisticsDiscrepancies3') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_ownershipRisk') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_ownershipRisk1') }}</li>
						<li>{{ $t('pages.terms.list_ownershipRisk2') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_cancellationRefunds') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_cancellationRefunds1') }}</li>
						<li>{{ $t('pages.terms.list_cancellationRefunds2') }}</li>
						<li>{{ $t('pages.terms.list_cancellationRefunds3') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_forceMajeure') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_forceMajeure1') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_complaints') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_complaints1') }}</li>
						<li>{{ $t('pages.terms.list_complaints2') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_liability') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_liability1') }}</li>
						<li>{{ $t('pages.terms.list_liability2') }}</li>
						<li>{{ $t('pages.terms.list_liability3') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_alterationsTermsAndConditions') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_alterationsTermsAndConditions1') }}</li>
						<li>{{ $t('pages.terms.list_alterationsTermsAndConditions2') }}
							<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="li">
								{{ $t('pages.navigation.legal.link_terms') }}
							</router-link>
						</li>
						<li>{{ $t('pages.terms.list_alterationsTermsAndConditions3') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_budgetsCaptitalisationHashingDifficulty') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_budgetsCaptitalisationHashingDifficulty1') }}</li>
						<li>{{ $t('pages.terms.list_budgetsCaptitalisationHashingDifficulty2') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_damageSystems') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_damageSystems1') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_websiteStandards') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_websiteStandards1') }}
							<ul>
								<li>{{ $t('pages.terms.subList_tolerance1') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance2') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance3') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance4') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance5') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance6') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance7') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance8') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance9') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance10') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance11') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance12') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance13') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance14') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance15') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance16') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance17') }}</li>
								<li>{{ $t('pages.terms.subList_tolerance18') }}</li>
							</ul>
						</li>
						<li>{{ $t('pages.terms.list_websiteStandards2') }}</li>
						<li>{{ $t('pages.terms.list_websiteStandards3') }}</li>
						<li>{{ $t('pages.terms.list_websiteStandards4') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_applications') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_applications1') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_misuse') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_misuse1') }}</li>
						<li>{{ $t('pages.terms.list_misuse2') }}</li>
						<li>{{ $t('pages.terms.list_misuse3') }}</li>
						<li>{{ $t('pages.terms.list_misuse4') }}</li>
						<li>{{ $t('pages.terms.list_misuse5') }}</li>
						<li>{{ $t('pages.terms.list_misuse6') }}</li>
						<li>{{ $t('pages.terms.list_misuse7') }}</li>
						<li>{{ $t('pages.terms.list_misuse8') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_closureAccount') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_closureAccount1') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_useCookies') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_useCookies1') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_intellectualProperty') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_intellectualProperty1') }}</li>
					</ol>
				</li>
					<h4>{{ $t('pages.terms.subHeading_indemnification') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_indemnification1') }}</li>
						<li>{{ $t('pages.terms.list_indemnification2') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_referrals') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_referrals1') }}</li>
						<li>{{ $t('pages.terms.list_referrals2') }}</li>
						<li>{{ $t('pages.terms.list_referrals3') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_taxation') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_taxation1') }}</li>
						<li>{{ $t('pages.terms.list_taxation2') }}</li>
					</ol>
				</li>
				<li>
					<h4>{{ $t('pages.terms.subHeading_misc') }}</h4>
					<ol>
						<li>{{ $t('pages.terms.list_misc1') }}</li>
						<li>{{ $t('pages.terms.list_misc2') }}</li>
						<li>{{ $t('pages.terms.list_misc3') }}</li>
						<li>{{ $t('pages.terms.list_misc4') }}</li>
					</ol>
				</li>
			</ol>			
		</div>
	</div>
</template>

<script>
export default {
	name: 'terms',
	metaInfo () {
		return {
			title: this.$t('pages.terms.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.terms.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.terms.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-terms {
	padding:30px 0px;
}


#JSEW-terms ol {
  list-style-type: none;
  counter-reset: item;
  margin: 0;
  padding: 0px;
}

#JSEW-terms > ol {
  padding: 0px 20px;
}

#JSEW-terms ol > li {
  display: table;
  counter-increment: item;
  margin-bottom: 0.6em;
}

#JSEW-terms ol > li:before {
    content: counters(item, ".") ". ";
    display: table-cell;
    padding-right: 0.6em;    
}

#JSEW-terms li li {
    margin: 0;
}

#JSEW-terms ol > li > ol > li:before {
    content: counters(item, ".") " ";
}

#JSEW-terms h4 {
	margin:0px;
	padding:0px;
}
</style>
