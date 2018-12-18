<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="li" class="active">
					{{ $t('pages.navigation.technical.link_overview') }}
				</router-link>
				<!--<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="li">
					{{ $t('pages.navigation.technical.link_stats') }}
				</router-link>-->
				<li onclick="window.location.href='https://developer.jsecoin.com'">
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

		<div id="JSEW-techOverview" class="wrapper">
			<div class="row">
				<div class="col">
					<h1 class="heading">{{ $t('pages.techOverview.section_techOverview.heading_techOverview') }}</h1>
					<h2 class="subHeading">{{ $t('pages.techOverview.section_techOverview.subheading_techOverview') }}</h2>
					<p>
						{{ $t('pages.techOverview.section_techOverview.para_main1') }}
					</p>
					<p>
						{{ $t('pages.techOverview.section_techOverview.para_main2') }}
					</p>
					<p>
						<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="a">
							{{ $t('pages.techOverview.section_techOverview.link_cpuUsage') }} >
						</router-link>.
					</p>
				</div>
				<div class="col" style="padding:0px 30px;">
					<img src="../../assets/images/technical/technicalOverview.png" style="width:100%;margin-top:30px;" :alt="$t('pages.techOverview.section_techOverview.alt_tech')" />
				</div>
			</div>
		</div>


		<div id="JSEW-monitseBanner">
			<div class="wrapper center">
				<h1 class="heading">{{ $t('pages.techOverview.section_monitiseBanner.heading_monitiseBanner') }}</h1>
				<h2 class="subHeading">{{ $t('pages.techOverview.section_monitiseBanner.subheading_monitiseBanner') }}</h2>

				<br><br>
				<h3 class="subHeading">{{ $t('pages.techOverview.section_monitiseBanner.button_caseStudies_line1') }}</h3>

				<!--<button class="button" style="margin-top:40px;">Take a look at some case studies</button>-->

					<a class="button" style="display:inline-block; margin-top:40px;" href="/static/casestudies/CaseStudy1-ShoppingCart.pdf" target="_blank" id="JSEW-casestudy">
						<!--<img src="/static/casestudies/pdf.png" class="JSEW-casestudypng" alt="Case Study 1 - Shopping Cart" />
						<br>
						Download PDF
						<br>-->
						JSEcoin Merchant Tools
						<!--<br>
						<div class="JSEW-casestudydescription">How we integrated the JSEcoin merchant tools as a payment gateway for Woocommerce shopping cart system to build a merchandise store</div>-->
					</a>
					<!--
					<button class="button" style="margin-top:40px;">
					{{ $t('pages.techOverview.section_monitiseBanner.button_caseStudies_line1') }}<br />
					{{ $t('pages.techOverview.section_monitiseBanner.button_caseStudies_line2') }}
					</button>
					-->
			</div>
		</div>


		<div id="JSEW-gettingStarted" class="wrapper center">

			<h1 class="heading">{{ $t('pages.techOverview.section_gettingStarted.heading_gettingStarted') }}</h1>
			<h2 class="subHeading">{{ $t('pages.techOverview.section_gettingStarted.subheading_gettingStarted') }}</h2>

			<div class="row">
				<div class="col left">
					<dl v-on:click="showscreen('login')">
						<dt :class="{active:screenType === 'login'}">1</dt>
						<dd>
							<h3>{{ $t('pages.techOverview.section_gettingStarted.step_heading1') }}</h3>
							<p>
								{{ $t('pages.techOverview.section_gettingStarted.step_content1') }}
							</p>
						</dd>
					</dl>
					<dl v-on:click="showscreen('minertype')">
						<dt :class="{active:screenType === 'minertype'}">2</dt>
						<dd>
							<h3>{{ $t('pages.techOverview.section_gettingStarted.step_heading2') }}</h3>
							<p>
								{{ $t('pages.techOverview.section_gettingStarted.step_content2') }}
							</p>
						</dd>
					</dl>
					<dl v-on:click="showscreen('merchant')">
						<dt :class="{active:screenType === 'merchant'}">3</dt>
						<dd>
							<h3>{{ $t('pages.techOverview.section_gettingStarted.step_heading3') }}</h3>
							<p>
								{{ $t('pages.techOverview.section_gettingStarted.step_content3') }}
							</p>
						</dd>
					</dl>
				</div>
				<div class="col" style="padding:40px 60px;">
					<img v-if="screenType === 'login'" src="../../assets/images/technical/login.png" width="100%"  :alt="$t('pages.techOverview.section_gettingStarted.alt_login')" />
					<img v-if="screenType === 'minertype'" src="../../assets/images/technical/minertype.png" width="100%" :alt="$t('pages.techOverview.section_gettingStarted.alt_minerTypes')" />
					<img v-if="screenType === 'merchant'" src="../../assets/images/technical/merchant.png" width="100%" :alt="$t('pages.techOverview.section_gettingStarted.alt_merchantTools')" />
				</div>
			</div>
		</div>


		<div id="JSEW-miningCoins">
			<div class="wrapper">

				<div class="row">
					<div class="col center" style="padding:0px 40px;align-self: center;">
						<img src="../../assets/images/technical/star.png" style="width:60%;" :alt="$t('pages.techOverview.section_miningCoins.alt_star')"/>
					</div>
					<div class="col">
						<h1 class="heading">{{ $t('pages.techOverview.section_miningCoins.heading_miningCoins') }}</h1>
						<h2 class="subHeading">{{ $t('pages.techOverview.section_miningCoins.subheading_miningCoins') }}</h2>
						<p>
							{{ $t('pages.techOverview.section_miningCoins.para_main1') }}
						</p>
						<p>
							{{ $t('pages.techOverview.section_miningCoins.para_main2') }}
						</p>
						<p>
							{{ $t('pages.techOverview.section_miningCoins.para_main3') }}
						</p>
					</div>
				</div>
			</div>
		</div>


		<div id="JSEW-howDoesItWork" class="wrapper center">
			<h1 class="heading">{{ $t('pages.techOverview.section_howDoesItWork.heading_howDoesItWork') }}</h1>
			<h2 class="subHeading">{{ $t('pages.techOverview.section_howDoesItWork.subheading_howDoesItWork') }}</h2>

			<ul id="JSEW-processFlow" class="left">
				<li id="JSEW-phase1">
					<h3>{{ $t('pages.techOverview.section_howDoesItWork.step_heading1') }}</h3>
					<p>
						{{ $t('pages.techOverview.section_howDoesItWork.step_content1') }}
					</p>
				</li>
				<li id="JSEW-phase2">
					<h3>{{ $t('pages.techOverview.section_howDoesItWork.step_heading2') }}</h3>
					<p>
						{{ $t('pages.techOverview.section_howDoesItWork.step_content2') }}
					</p>
				</li>
				<li id="JSEW-phase3">
					<h3>{{ $t('pages.techOverview.section_howDoesItWork.step_heading3') }}</h3>
					<p>
						{{ $t('pages.techOverview.section_howDoesItWork.step_content3') }}
					</p>
				</li>
			</ul>
		</div>


		<div id="JSEW-miningRewards">
			<div class="wrapper">
				<div class="silverCoin">
					<h1 class="heading">{{ $t('pages.techOverview.section_miningRewards.heading_miningRewards') }}</h1>
					<h2 class="subHeading">{{ $t('pages.techOverview.section_miningRewards.subheading_miningRewards') }}</h2>
				</div>
			</div>
			<div class="wrapper row">
				<div class="col">
					<dl>
						<dt id="JSEW-icoMiner"></dt>
						<dd>
							<h3>{{ $t('pages.techOverview.section_miningRewards.step_heading1') }}</h3>
							<p>
								{{ $t('pages.techOverview.section_miningRewards.step_content1') }}
							</p>
						</dd>
					</dl>
					<dl>
						<dt id="JSEW-icoUsers"></dt>
						<dd>
							<h3>{{ $t('pages.techOverview.section_miningRewards.step_heading2') }}</h3>
							<p>
								{{ $t('pages.techOverview.section_miningRewards.step_content2') }}
							</p>
						</dd>
					</dl>
					<dl>
						<dt id="JSEW-icoSites"></dt>
						<dd>
							<h3>{{ $t('pages.techOverview.section_miningRewards.step_heading3') }}</h3>
							<p>
								{{ $t('pages.techOverview.section_miningRewards.step_content3') }}
							</p>
							<p>
								{{ $t('pages.techOverview.section_miningRewards.step_content3_para2') }}
							</p>
							<p>
								{{ $t('pages.techOverview.section_miningRewards.step_content3_para3') }}
							</p>
							<p>
								{{ $t('pages.techOverview.section_miningRewards.step_content3_para4') }}
							</p>
						</dd>
					</dl>
				</div>
				<div class="col center" style="align-self:center;">
					<img src="../../assets/images/technical/insight.png" style="width:60%; margin:0px 40px;"  :alt="$t('pages.techOverview.section_miningRewards.alt_insight')"/>
				</div>
			</div>
			<div class="center">
				<i>{{ $t('pages.techOverview.section_miningRewards.infoMsg_miningRewards') }}</i>
			</div>
		</div>

		<!--
		<div id="JSEW-miningRewards" class="">
			<div class="wrapper">
				<h1 class="heading">How does the hashing process work?</h1>
				<h2 class="subHeading">Simplifying user adoption and mining through a browser</h2>
			</div>
		</div>
		-->


		<div id="JSEW-networkArchitecture" class="center">
			<div class="wrapper">
				<h1 class="heading">{{ $t('pages.techOverview.section_networkArchitecture.heading_miningRewards') }}</h1>
				<h2 class="subHeading">{{ $t('pages.techOverview.section_networkArchitecture.subheading_miningRewards') }}</h2>
				<div style="padding-right:34px;">
					<img src="../../assets/images/technical/technical.png" width="80%" style="margin-top:40px;" :alt="$t('pages.techOverview.section_networkArchitecture.alt_insight')" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'techOverview',
	metaInfo () {
		return {
			title: this.$t('pages.techOverview.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.techOverview.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.techOverview.meta.keywords'),
				},
			],
		};
	},
	data() {
		return {
			screenType: 'login',
		};
	},
	methods: {
		showscreen(screen) {
			this.screenType = screen;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#JSEW-techOverview .col {
	max-width: inherit;
}

#JSEW-techOverview,
#JSEW-gettingStarted,
#JSEW-miningCoins,
#JSEW-howDoesItWork,
#JSEW-miningRewards,
#JSEW-networkArchitecture {
	padding: 30px 0px;
}

#JSEW-miningCoins,
#JSEW-miningRewards {
	background-color:#fafafa;
}

#JSEW-monitseBanner {
	padding:30px 0px;
	background-image:url("../../assets/images/banners/monetise.jpg");
	background-repeat: no-repeat;
	background-position: center top;
	background-size:cover;
	min-height:220px;
	font-size:20px;
}

#JSEW-monitseBanner .heading,
#JSEW-monitseBanner .subHeading {
	color:#fff;
}

#JSEW-processFlow {
	margin:60px 0px;
	padding:0px;
	position: relative;
	height: 300px;
	background-image: url("../../assets/images/technical/123.png");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
}
#JSEW-processFlow li {
	list-style: none;
	border:solid 6px rgba(0,0,0,0.05);
	padding:8px 16px;
	border-radius: 16px;
	width:250px;
	background:rgba(255,255,255,0.45)
}
#JSEW-processFlow h3 {
	padding:0px 20px;
	margin:0px;
}
#JSEW-phase1 {
	position: absolute;
	left:5%;
}
#JSEW-phase2 {
	position: absolute;
	bottom:40px;
	right:2%;
}
#JSEW-phase3 {
	position: absolute;
	bottom: -30px;
}
#JSEW-miningRewards dl {
	display: flex;
	margin-top:30px;
	margin-bottom:40px;
	margin-left:70px;
}
#JSEW-miningRewards dt {
	margin:0px;
	padding:0px;
	width:50px;
	max-width:50px;
	min-width:50px;
	text-align: center;
	margin:0px 10px;
	background-position: top center;
}
#JSEW-miningRewards dd {
	margin:0px;
	padding:0px;
}
#JSEW-miningRewards dd h3 {
	margin:0px;
	padding:0px 20px;
}
.silverCoin {
	background-image: url("../../assets/images/technical/coin.png");
	background-position: left;
	background-size: contain;
	background-repeat: no-repeat;
	padding-left:66px;
	margin-left:20px;
}

#JSEW-gettingStarted dl {
	display: flex;
	margin-top:30px;
	margin-bottom:40px;
	cursor: pointer;
}

#JSEW-gettingStarted dt {
	margin:20px;
	padding:0px;
	width:60px;
	max-width:60px;
	min-width:60px;
	height: 60px;
	border-radius:160px;
	background: #fff;
	/*border:solid 4px #2680f0;*/
	line-height:60px;
	text-align:center;
	font-size:2em;
	color:#2680f0;
}
#JSEW-gettingStarted dl:hover dt,
#JSEW-gettingStarted dt.active {
	background: #2680f0;
	color:#fff;
}
#JSEW-gettingStarted dd {
	margin:0px;
	padding:0px;
}
#JSEW-gettingStarted dd h3 {
	margin:10px 0px 0px 0px;
	padding:0px 20px;
}
.JSEW-casestudypng {
	height: 127px;
	width: 110px;
}
.JSEW-casestudy {
	color: #FFF;
}
.JSEW-casestudydescription {
	font-size: 12px;
	width: 280px;
	margin: 10px auto;
}
@media screen and (max-width: 768px) {
	.enableResponsive #JSEW-processFlow li {
		zoom:60%;
	}

	.enableResponsive #JSEW-processFlow p {
		padding:0px;
	}
}
</style>
