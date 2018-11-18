<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/bugBounty`" tag="li">
					{{ $t('pages.navigation.oddJobs.link_bugBounty') }}
				</router-link>
				<!--<router-link v-bind:to="`/${$store.state.local}/oddJobs/smallJobs`" tag="li" class="active">
					{{ $t('pages.navigation.oddJobs.link_smallJobs') }}
				</router-link>-->
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="li">
					{{ $t('pages.navigation.oddJobs.link_submit') }}
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-smallJobs" class="wrapper center">
			<!--<p class="infoMsg">
				{{ $t('pages.smallJobs.para_main1_infoMsg_line1') }}<br />
				{{ $t('pages.smallJobs.para_main1_infoMsg_line2') }}
			</p>-->
			<!--
			<p class="infoMsg" v-if="$store.state.local === 'en'">
				{{ $t('pages.smallJobs.para_main2_infoMsg') }}
			</p>-->
			<div class="left">
				<h3 class="heading">{{ $t('pages.smallJobs.heading_promo') }}</h3>
				<h4 class="subHeading">{{ $t('pages.smallJobs.subheading_promo') }}</h4>
				<p>
					{{ $t('pages.smallJobs.para_promo') }}
				</p>

				<h3 class="heading">{{ $t('pages.smallJobs.heading_affiliate') }}</h3>
				<h4 class="subHeading">{{ $t('pages.smallJobs.subheading_affiliate') }}</h4>
				<p>
					{{ $t('pages.smallJobs.para_affiliate') }}
				</p>

				<h3 class="heading">{{ $t('pages.smallJobs.heading_findBugs') }}</h3>
				<h4 class="subHeading">{{ $t('pages.smallJobs.subheading_findBugs') }}</h4>
				<p>
					{{ $t('pages.smallJobs.para_findBugs') }}
				</p>

				<div v-if="$store.state.local === 'en'">
					<br /><br /><br />
					<h3 class="heading">Additional Tasks</h3>
					<h4 class="subHeading">Help us to grow</h4>

					<div class="flexTable">
						<div class="flexTableHeader">
							<div class="tdCol">
								<b>Task Name</b>
							</div>
							<div class="tdCol">
								<b>Description</b>
							</div>
							<div class="tdCol">
								<b>JSE Value</b>
							</div>
						</div>

						<div class="flexTableBody">
							<div class="tdCol">
								<b>SEO</b>
							</div>
							<div class="tdCol">
								<p>
									Do you think we've missed a trick with optimising and promoting JSEcoin?<br />
									Let us know and if we implement your suggestion - we'll send on some JSE as a little thank you! :)
								</p>
							</div>
							<div class="tdCol">
								1000-10000 JSE
							</div>
						</div>

						<div class="flexTableBody">
							<div class="tdCol">
								<b>Browser/Device Testing</b>
							</div>
							<div class="tdCol">
								<p>
									If you spot a graphical issue or bug on a browser please report it.  <br />
									We are actively testing Chrome, Firefox, Edge, Safari and Opera but we do miss things.
								</p>
								<p>
									Feel free to report the issue on any of the latest Browsers - older browsers will not be viable for rewards.
								</p>
								<p class="infoMsg">
									Note: Some issues we class as minor and will not fix - ie Firefox on Android the navigational menu item
									appears larger than other browsers.
								</p>
							</div>
							<div class="tdCol">
								1000 JSE
							</div>
						</div>

						<div class="flexTableBody">
							<div class="tdCol">
								<b>Animated SVG Loading Screen</b>
							</div>
							<div class="tdCol">
								<p>
									The standard icon is available in SVG format here: <a href="https://jsecoin.com/img/icon2018svg.svg" target="_blank">https://jsecoin.com/img/icon2018svg.svg</a>.
								</p>
								<p>
									We are looking for an animated SVG/CSS loading screen similar to discord, gitkraken etc. If you can build a nice animated loading screen in SVG/CSS format then please send across a demo for us to take a look at. If we use it you will be rewarded with the JSE bounty tokens.
								</p>
							</div>
							<div class="tdCol">
								10000 JSE
							</div>
						</div>

						<!--
						<div class="flexTableBody">
							<div class="tdCol">
								<b>JSE Site Language Translation</b>
							</div>
							<div class="tdCol">
								<p>
									We are looking for help to make our site multilingual.<br />
									To do this we need your help translating the following English internationalisation file <a href="/static/locale/locale-en.zip">locale-en</a>.
								</p>
								<p>
									Languages we are looking to support:
								</p>
								<ul>
									<li>Russian - Please contact us</li>
									<li>Chinese - In Progress</li>
									<li>Korean - Please contact us</li>
									<li>Spanish - In Progress</li>
									<li>French - In Progress</li>
									<li>German - In Progress</li>
									<li>Swedish - Please contact us</li>
									<li>Norwegian - Please contact us</li>
									<li>Romanian - In Progress</li>
									<li>Italian - In Progress</li>
									<li>Japanese - Please contact us</li>
									<li>Portuguese - In Progress</li>
									<li>Slovenian - In Progress</li>
									<li>Finnish - In Progress</li>
								</ul>

								<p class="infoMsg">
									<b>Note:</b> We are looking for native speakers!<br /><br />
									Please do not run this file through a translator tool like google translate as we will be validating and approving the content submitted.<br />
								</p>
								<p class="infoMsg">
									You will receive JSE once we and other community members have reviewed and approved the content.
								</p>
							</div>
							<div class="tdCol">
								50 JSE per translation
							</div>
						</div>
						-->

						<div class="flexTableBody">
							<div class="tdCol">
								<b>Translation Editors</b>
							</div>
							<div class="tdCol">
								<p>
									We have used Google's API to translate our site to the following languages and are aware there are errors.<br />
									If you'd like to improve your native language you can earn JSE for being an editor.
								</p>
								<ul>
									<li>Chinese</li>
									<li>Korean</li>
									<li>Spanish</li>
									<li>French</li>
									<li>German</li>
									<li>Swedish</li>
									<li>Romanian</li>
									<li>Italian</li>
									<li>Japanese</li>
									<li>Portuguese</li>
									<li>Slovenian</li>
									<li>Finnish</li>
								</ul>
							</div>
							<div class="tdCol">
								JSE based on contribution level
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="JSEW-submitABug" v-if="$store.state.local === 'en'">
			<div class="wrapper center">
				<h1 class="heading">SUBMIT A JOB</h1>
				<h2 class="subHeading">COMPLETED A JOB OR WANT TO LET US KNOW YOU ARE WORKING ON ONE?</h2>
				<br /><br />

				<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="button" class="button">
					<i class="fa fa-bug"></i> Head over to our Bugs/Jobs submission form
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'smallJobs',
	metaInfo () {
		return {
			title: this.$t('pages.smallJobs.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.smallJobs.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.smallJobs.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-smallJobs {
	padding:30px 0px;
}
#JSEW-submitABug {
	padding:30px 0px;
	background-color:#fafafa;
}

</style>
