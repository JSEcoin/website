<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/bugBounty`" tag="li" class="active">
					{{ $t('pages.navigation.oddJobs.link_bugBounty') }}
				</router-link>
				<!--<router-link v-bind:to="`/${$store.state.local}/oddJobs/smallJobs`" tag="li">
					{{ $t('pages.navigation.oddJobs.link_smallJobs') }}
				</router-link>-->
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="li">
					{{ $t('pages.navigation.oddJobs.link_submit') }}
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-bugBounty" class="wrapper">
			<div class="row">
				<div class="col center">
					<img src="../../assets/images/oddJobs/bugBounty.png" width="80%" style="margin-bottom:20px;" :alt="$t('pages.bugBounty.section_overview.alt_bugBounty')" />
				</div>
				<div class="col">
					<h1 class="heading">{{ $t('pages.bugBounty.section_overview.heading_bugBounty') }}</h1>
					<h2 class="subHeading">{{ $t('pages.bugBounty.section_overview.subheading_bugBounty') }}</h2>
					<p>
						{{ $t('pages.bugBounty.section_overview.para_main1') }}
					</p>
					<p>
						{{ $t('pages.bugBounty.section_overview.para_main2') }}
					</p>
					<p>
						{{ $t('pages.bugBounty.section_overview.para_main3') }}
					</p>
					<p>
						{{ $t('pages.bugBounty.section_overview.para_main4') }}
						<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="a">
							{{ $t('pages.bugBounty.section_overview.link_submit') }}
						</router-link>
						.
					</p>
				</div>
			</div>
		</div>
		<div id="JSEW-bugLeaderBoard">
			<div class="wrapper center">
				<h1 class="heading">{{ $t('pages.bugBounty.section_leaderBoard.heading_leaderBoard') }}</h1>
				<h2 class="subHeading">{{ $t('pages.bugBounty.section_leaderBoard.subheading_leaderBoard') }}</h2>
				<p>
					<!--{{ $t('pages.bugBounty.section_leaderBoard.para_main1_line1') }}-->
					<!--<router-link v-bind:to="`/${$store.state.local}/oddJobs/smallJobs`" tag="a">
						{{ $t('pages.bugBounty.section_leaderBoard.link_smallTasks') }}
					</router-link>-->
					<br />
					<!--{{ $t('pages.bugBounty.section_leaderBoard.para_main1_line2') }}-->
				</p>


				<div class="flexTable left" style="background:#fff;">
					<div class="flexTableHeader">
						<div class="tdCol">
							<b>Name / Company</b>
						</div>
						<div class="tdCol">
							<b>Link</b>
						</div>
						<!--<div class="tdCol">
							<b>Points</b>
						</div>
						<div class="tdCol">
							<b>Bug Type</b>
						</div>-->
					</div>

					<div class="flexTableBody">
						<div class="tdCol">
							<b>Roberto Urbanus</b>
						</div>
						<div class="tdCol">
							<p>
								<a href="https://twitter.com/Bet0_Shinoda" target="_Balnk"><i class="fa fa-twitter"></i> @Bet0_Shinoda</a>
							</p>
						</div>
					</div>

					<div class="flexTableBody">
						<div class="tdCol">
							<b>Hawk Cyber Security</b>
						</div>
						<div class="tdCol">
							<p>
								<a href="https://hawksec.io/" target="_Balnk"><i class="fa fa-globe"></i> Hawk Cyber Security</a>
							</p>
						</div>
					</div>

					<div class="flexTableBody">
						<div class="tdCol">
							<b>Mario Reder</b>
						</div>
						<div class="tdCol">
							<p>
								<a href="https://github.com/Tarnadas" target="_Balnk"><i class="fa fa-github"></i> Tarnadas</a>
							</p>
						</div>
					</div>

					<div class="flexTableBody">
						<div class="tdCol">
							<b>Yosua Kristanto</b>
						</div>
						<div class="tdCol">
							<p>
								<a href="https://twitter.com/YosuaKristanto" target="_Balnk"><i class="fa fa-twitter"></i> Yosua Kristanto</a>
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div id="JSEW-bugBountyRules" class="wrapper">
			<h1 class="heading">{{ $t('pages.bugBounty.section_rules.heading_rules') }}</h1>
			<h2 class="subHeading">{{ $t('pages.bugBounty.section_rules.subheading_forYou') }}</h2>

			<ul>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forYou1') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forYou2') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forYou3') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forYou4') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forYou5') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forYou6') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forYou7') }}
					<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a">
						{{ $t('pages.bugBounty.section_rules.link_contact') }}
					</router-link>
					.
				</li>
			</ul>

			<h2 class="subHeading">{{ $t('pages.bugBounty.section_rules.subheading_forUs') }}</h2>

			<ul>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forUs1') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forUs2') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_forUs3') }}
				</li>
			</ul>

			<h2 class="subHeading">{{ $t('pages.bugBounty.section_rules.subheading_doesNotQualify') }}</h2>

			<ul>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify1') }}
					<ul>
						<li>{{ $t('pages.bugBounty.section_rules.subList_doesNotQualify1') }}</li>
					</ul>
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify2') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify3') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify4') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify5') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify6') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify7') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify8') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify9') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify9a') }}
				</li>
				<li>
					{{ $t('pages.bugBounty.section_rules.list_doesNotQualify10') }}
					<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a">
						{{ $t('pages.bugBounty.section_rules.link_contact') }}
					</router-link>
					.
				</li>
			</ul>
		</div>

		<div id="JSEW-openBountyRules">
			<div class="wrapper">
				<h1 class="heading">{{ $t('pages.bugBounty.section_openBounties.heading_openBounties') }}</h1>
				<h2 class="subHeading">{{ $t('pages.bugBounty.section_openBounties.subheading_openBounties') }}</h2>
				<br /><br />
			</div>
			<div class="row wrapper">
				<div class="col">
					<a href="https://www.jsecoin.com" target="_BLANK">
						<h2 class="subHeading">JSE {{ $t('pages.bugBounty.section_openBounties.subheading_officialWebsite') }}</h2>
						<h3 class="subsubHeading">https://www.jsecoin.com</h3>
					</a>

					<p>

					</p>

					<a href="https://platform.jsecoin.com" target="_BLANK">
						<h2 class="subHeading">JSE {{ $t('pages.bugBounty.section_openBounties.subheading_user_miningPlatform') }}</h2>
						<h3 class="subsubHeading">https://platform.jsecoin.com</h3>
					</a>
					<p>

					</p>

					<a href="https://api.jsecoin.com" target="_BLANK">
						<h2 class="subHeading">JSE {{ $t('pages.bugBounty.section_openBounties.subheading_API') }}</h2>
						<h3 class="subsubHeading">https://api.jsecoin.com</h3>
					</a>

					<p>

					</p>
				</div>
				<div class="col">
					<a href="https://blockchain.jsecoin.com" target="_BLANK">
						<h2 class="subHeading">JSE {{ $t('pages.bugBounty.section_openBounties.subheading_blockchainExplorer') }}</h2>
						<h3 class="subsubHeading">https://blockchain.jsecoin.com</h3>
					</a>

					<p>

					</p>

					<a href="https://developer.jsecoin.com" target="_BLANK">
						<h2 class="subHeading">JSE {{ $t('pages.bugBounty.section_openBounties.subheading_developerPlatform') }}</h2>
						<h3 class="subsubHeading">https://developer.jsecoin.com</h3>
					</a>

					<p>

					</p>

					<a href="https://load.jsecoin.com" target="_BLANK">
						<h2 class="subHeading">JSE {{ $t('pages.bugBounty.section_openBounties.subheading_loadServer') }}</h2>
						<h3 class="subsubHeading">https://load.jsecoin.com</h3>
					</a>

					<p>

					</p>
				</div>
			</div>
		</div>

		<div id="JSEW-rewards" class="wrapper">
			<h1 class="heading">{{ $t('pages.bugBounty.section_rewards.heading_rewards') }}</h1>
			<h2 class="subHeading">{{ $t('pages.bugBounty.section_rewards.subheading_rewards') }}</h2>
			<p>
				{{ $t('pages.bugBounty.section_rewards.para_reward_line1') }}<br />
				{{ $t('pages.bugBounty.section_rewards.para_reward_line2') }}
			</p>
			<p>
				<i>{{ $t('pages.bugBounty.section_rewards.para_reward_info') }}</i>
			</p>

			<div class="hr"></div>

			<p>
				{{ $t('pages.bugBounty.section_rewards.para_ps_line1') }}<br />
				{{ $t('pages.bugBounty.section_rewards.para_ps_line2') }}
			</p>
		</div>

		<div id="JSEW-submitABug">
			<div class="wrapper center">
				<h1 class="heading">{{ $t('pages.bugBounty.section_submitABug.heading_rewards') }}</h1>
				<h2 class="subHeading">{{ $t('pages.bugBounty.section_submitABug.subheading_rewards') }}</h2>
				<br /><br />

				<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="button" class="button">
					<i class="fa fa-bug"></i> {{ $t('pages.bugBounty.section_submitABug.button_submissionForm') }}
				</router-link>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'bugBounty',
	metaInfo () {
		return {
			title: this.$t('pages.bugBounty.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.bugBounty.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.bugBounty.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#JSEW-bugBounty,
#JSEW-bugLeaderBoard,
#JSEW-bugBountyRules,
#JSEW-openBountyRules,
#JSEW-rewards,
#JSEW-submitABug {
	padding:30px 0px;
}

#JSEW-bugLeaderBoard,
#JSEW-openBountyRules,
#JSEW-submitABug {
	background-color:#fafafa;
}
#JSEW-openBountyRules {
	background-image: url(../../assets/images/oddJobs/chain.png);
	background-position: 924px center;
	background-size: 550px;
	background-repeat: no-repeat;
}
</style>
