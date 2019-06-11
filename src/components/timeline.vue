<template>
	<div id="JSEW-wrapper">
		<!--
		<div class="wrapper center" style="padding:30px 0px;">
			<h1 class="heading">{{ $t('pages.timeline.section_interactiveTimeline.heading_timeline') }}</h1>
			<h2 class="subHeading" style="margin-bottom:20px;">{{ $t('pages.timeline.section_interactiveTimeline.subheading_timeline') }}</h2>

			<p class="left">
				{{ $t('pages.timeline.section_interactiveTimeline.para_main1_line1') }}<br />
				{{ $t('pages.timeline.section_interactiveTimeline.para_main1_line2') }}<br />
				{{ $t('pages.timeline.section_interactiveTimeline.para_main1_line3') }}
			</p>
			<p class="left">
				<i>{{ $t('pages.timeline.section_interactiveTimeline.para_main2') }}</i>
			</p>
		</div>
		<interactiveTimeline/>
		-->
		<div id="JSEW-timelineWrapper">

			<div class="wrapper center">
				<h1 class="heading">Timeline</h1>
				<!--<h2 class="subHeading" style="margin-bottom:30px;">{{ $t('pages.timeline.section_timeline.subheading_timeline') }}</h2>-->
			</div>


			<div class="timeline">
				<div class="center-line"></div>
					<div class="year">
						<div class="name">2017</div>
						<div class="items">
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>{{ $t('pages.timeline.section_timeline.date_july17_ABR') }}</span>
								</div>
								<div class="box">
									<h2 class="title">{{ $t('pages.timeline.section_timeline.info_july17_title') }}</h2>
									<div class="content">
										<p>
											{{ $t('pages.timeline.section_timeline.info_july17_para_content1') }}
										</p>
										<p>
											{{ $t('pages.timeline.section_timeline.info_july17_para_content2') }}
										</p>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>{{ $t('pages.timeline.section_timeline.date_august17_ABR') }}</span>
								</div>
								<div class="box">
									<h2 class="title">{{ $t('pages.timeline.section_timeline.info_august17_title') }}</h2>
									<div class="content">
										<p>{{ $t('pages.timeline.section_timeline.info_august17_para_content1') }}</p>
										<ul>
											<li>{{ $t('pages.timeline.section_timeline.info_august17_list1') }}</li>
											<li>{{ $t('pages.timeline.section_timeline.info_august17_list2') }}</li>
											<li>{{ $t('pages.timeline.section_timeline.info_august17_list3') }}
												<i>{{ $t('pages.timeline.section_timeline.info_august17_list3_info') }}</i>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>{{ $t('pages.timeline.section_timeline.date_september17_ABR') }}</span>
								</div>
								<div class="box">
									<h2 class="title">{{ $t('pages.timeline.section_timeline.info_september17_title') }}</h2>
									<div class="content">
										<p>
											{{ $t('pages.timeline.section_timeline.info_september17_para_content1') }}
										</p>
										<p>
											{{ $t('pages.timeline.section_timeline.info_september17_para_content2') }}
										</p>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>{{ $t('pages.timeline.section_timeline.date_october17_ABR') }}</span>
								</div>
								<div class="box">
									<h2 class="title">{{ $t('pages.timeline.section_timeline.info_october17_title') }}</h2>
									<div class="content">
										<ul>
											<li>{{ $t('pages.timeline.section_timeline.info_october17_list1') }}</li>
											<li>{{ $t('pages.timeline.section_timeline.info_october17_list2') }}</li>
										</ul>

									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>{{ $t('pages.timeline.section_timeline.date_november17_ABR') }}</span>
								</div>
								<div class="box">
									<h2 class="title">{{ $t('pages.timeline.section_timeline.info_november17_title') }}</h2>
									<div class="content">
										<ul>
											<li>{{ $t('pages.timeline.section_timeline.info_november17_list1') }}</li>
											<li>{{ $t('pages.timeline.section_timeline.info_november17_list2') }}</li>
											<li>{{ $t('pages.timeline.section_timeline.info_november17_list3') }}</li>
											<li>{{ $t('pages.timeline.section_timeline.info_november17_list4') }}</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>{{ $t('pages.timeline.section_timeline.date_december17_ABR') }}</span>
								</div>
								<div class="box">
									<h2 class="title">{{ $t('pages.timeline.section_timeline.info_december17_title') }}</h2>
									<div class="content">
										<ul>
											<li>{{ $t('pages.timeline.section_timeline.info_december17_list1') }}</li>
											<li>{{ $t('pages.timeline.section_timeline.info_december17_list2') }} </li>
											<li>{{ $t('pages.timeline.section_timeline.info_december17_list3') }}</li>
											<li>{{ $t('pages.timeline.section_timeline.info_november17_list4') }}</li>
										</ul>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="year">
						<div class="name">2018</div>
						<div class="items">
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>{{ $t('pages.timeline.section_timeline.date_january18_ABR') }}</span>
								</div>
								<div class="box">
									<h2 class="title">{{ $t('pages.timeline.section_timeline.info_january18_title') }}</h2>
									<div class="content">
										<p>{{ $t('pages.timeline.section_timeline.info_january18_para_content1') }}</p>
										<ul>
											<li>{{ $t('pages.timeline.section_timeline.info_january18_list1') }}</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>FEB</span>
								</div>
								<div class="box">
									<h2 class="title">Enhancements</h2>
									<div class="content">
										<ul>
											<li>SEO Optimisation</li>
											<li>Opt-in Mining Update</li>
											<li>Whitelisted on all major antivirus/malware checkers</li>
											<li>Developer API / Samples</li>
											<li>Website Multilingual Support</li>
											<li>Improve Blockchain DB Schema</li>
										</ul>

									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>MAR</span>
								</div>
								<div class="box">
									<h2 class="title">Merchant Tools</h2>
									<div class="content">
										<ul>
											<li>Create Online Shop for JSE Ecommerce transactions</li>
											<li>User Generated Robot Identicons</li>
											<li>Start Desktop Mining application</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>APR</span>
								</div>
								<div class="box">
									<h2 class="title">Components</h2>
									<div class="content">
										<ul>
											<li>Alpha Desktop Launch</li>
											<li>Merchant Tools</li>
											<li>Finalise metamask integration</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>MAY</span>
								</div>
								<div class="box">
									<h2 class="title">Components</h2>
									<div class="content">
										<ul>
											<li>Whitelisting KYC system</li>
											<li>Initiate marketing campaign</li>
											<li>Open source JSEcoin</li>
											<li>Pre-alpha Android Mobile App release</li>
											<li>PIN Security Feature</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>JUN</span>
								</div>
								<div class="box">
									<h2 class="title">Audits</h2>
									<div class="content">
										<ul>
											<li>Smart Contract Audit</li>
											<li>Full security Audit / Review</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>JUL</span>
								</div>
								<div class="box">
									<h2 class="title">ICO Launch</h2>
									<div class="content">
										<ul>
											<li>Airdrop</li>
											<li>Marketing Initiative</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>Aug</span>
								</div>
								<div class="box">
									<h2 class="title">ICO</h2>
									<div class="content">
										<ul>
											<li>Business Strategy</li>
											<li>Marketing Events</li>
											<li>Android App release</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>Sept</span>
								</div>
								<div class="box">
									<h2 class="title">ICO</h2>
									<div class="content">
										<ul>
											<li>Scalling &amp; Advertisement</li>
											<li>Fraud Automation checks</li>
											<li>Platform Security &amp; PEN Test</li>
											<li>Exhibiting Events - Blockchain Live &amp; Blockchain Summit</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>Oct</span>
								</div>
								<div class="box">
									<h2 class="title">ICO End</h2>
									<div class="content">
										<ul>
											<li>Deposit Withdraw</li>
											<li>Exchange Listings
												<ul>
													<li>LAToken</li>
													<li>IDEX</li>
													<li>TokenJar</li>
												</ul>
											</li>
											<li>PR Strategy</li>
											<li>Ad Tech Platorm Dev</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>Nov</span>
								</div>
								<div class="box">
									<h2 class="title">PR</h2>
									<div class="content">
										<ul>
											<li>Ad Tech Platform Preview</li>
											<li>Airdrop</li>
											<li>Marketing Initiative</li>
											<li>Exhibit WebSummit Lisbon</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>Dec</span>
								</div>
								<div class="box">
									<h2 class="title">JSEcoin Platform</h2>
									<div class="content">
										<ul>
											<li>iOS Release - itunes</li>
											<li>Desktop Official Beta Signed Release</li>
											<li>Ad-Exchange Development</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="year">
						<div class="name">2019</div>
						<div class="items">
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>Q1</span>
								</div>
								<div class="box">
									<h2 class="title">Ad-Exchange Release</h2>
									<div class="content">
										<p>Ad-exchange goes live providing marketplace for digital advertising</p>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>Q2</span>
								</div>
								<div class="box">
									<h2 class="title">Enterprise API</h2>
									<div class="content">
										<p>Further development on ad-exchange with additional features, placements and optimisations</p>
										<p>Development of bot detection enterprise API and JSE captcha solution</p>
									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>Q3</span>
								</div>
								<div class="box">
									<h2 class="title">Merchant Tools Improvements</h2>
									<div class="content">
										<p>Integration of additonal cryptocurrencies with merchant tools BTC/ETH</p>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>Q4</span>
								</div>
								<div class="box">
									<h2 class="title">Web Platform V2</h2>
									<div class="content">
										<p>Development of version 2 of the JSE platform</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="year">
						<div class="name">2020</div>
						<div class="items">
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>Q1</span>
								</div>
								<div class="box">
									<h2 class="title">V2 - Beta / Launch</h2>
									<div class="content">
										<p>Beta testing and roll out platform V2 across web, desktop and mobile clients</p>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>Q2</span>
								</div>
								<div class="box">
									<h2 class="title">Client-side Consensus</h2>
									<div class="content">
										<p>Start testing and development of client-side P2P consensus algorithm</p>
									</div>
								</div>
							</div>
							<div class="item left" style="margin-top: -1rem;">
								<div class="date">
									<span>Q3</span>
								</div>
								<div class="box">
									<h2 class="title">Optimisations</h2>
									<div class="content">
										<p>Optimisation of hashing algorithm, exploring WASM, WebGL, Rust</p>
									</div>
								</div>
							</div>
							<div class="item right" style="margin-top: 10rem;">
								<div class="date">
									<span>Q4</span>
								</div>
								<div class="box">
									<h2 class="title">P2P Beta / Launch</h2>
									<div class="content">
										<p>Testing and migration to client-side consensus aglorithm</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
//import interactiveTimeline from './segment/interactiveTimeline';

export default {
	name: 'timeline',
	metaInfo () {
		return {
			title: this.$t('pages.timeline.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.timeline.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.timeline.meta.keywords'),
				},
			],
		};
	},
	//components: {
	//	interactiveTimeline,
	//},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-timelineWrapper {
	    padding: 0 2.8rem;
}
.timeline .year .items,
.timeline .year .items .item .box .content .portraits,
.wallet-info .wallet-actions {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal
}
.popup,
.timeline {
	min-height: 100vh
}
.press-articles .press-article .wrap,
.timeline .year .items .item.token-launch .box .buy-tokens {
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%)
}

.timeline {
	position: relative;
	margin: 1rem 0 0;
	padding: 0 0 12rem
}

.timeline .center-line {
	position: absolute;
	top: 0;
	left: 50%;
	z-index: 10;
	height: 100%;
	width: 2px;
	-webkit-transform: translateX(-1px);
	-ms-transform: translateX(-1px);
	-o-transform: translateX(-1px);
	transform: translateX(-1px);
	background-color: #00a6c4
}

.timeline .year {
	position: relative;
	z-index: 20
}

.timeline .year .name {
	font-size: 1.6em;
	color: #fff;
	text-align: center;
	background-color: #00a6c4;
	border-radius: 50px;
	display: table;
	margin: 0 auto;
	width: auto;
	padding: .5rem 5rem;
	/*background: -webkit-linear-gradient(315deg, #00a6c4 40%, #0093d2 100%);
	background: -o-linear-gradient(315deg, #00a6c4 40%, #0093d2 100%);
	background: linear-gradient(135deg, #00a6c4 40%, #0093d2 100%)*/
}

.timeline .year .items {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	padding: 4rem 0
}

.timeline .year .items .item-empty {
	-webkit-flex-basis: 50%;
	-ms-flex-preferred-size: 50%;
	flex-basis: 50%;
	height: 1px
}

.timeline .year .items .item {
	position: relative;
	-webkit-flex-basis: 50%;
	-ms-flex-preferred-size: 50%;
	flex-basis: 50%;
	margin: 5rem 0 0
}

.timeline .year .items .item:first-child {
	margin-top: 3.4rem
}

.timeline .year .items .item:nth-child(2) {
	margin-top: 7rem
}

.timeline .year .items .item:last-child {
	margin-bottom: 2rem
}

.timeline .year .items .item:before {
	content: '';
	position: absolute;
	z-index: 20;
	top: -webkit-calc(1.8rem + 7px);
	top: calc(1.8rem + 7px);
	width: 8px;
	height: 8px;
	border: 2px solid #0490ab;
	border-radius: 9999px;
	background-color: #182a36
}

.timeline .year .items .item.right {
	margin-left: auto;
	padding: 0 0 0 7rem
}

.timeline .year .items .item.right:before {
	left: -6px
}

.timeline .year .items .item.right .date {
	left: 6px
}

.timeline .year .items .item.right .date:before {
	left: -2px;
	right: -1px
}

.timeline .year .items .item.right .date:after {
	right: -2px
}

.timeline .year .items .item.left {
	margin-right: auto;
	padding: 0 7rem 0 0
}

.timeline .year .items .item.left:before {
	right: -6px
}

.timeline .year .items .item.left .date {
	right: 6px
}

.timeline .year .items .item.left .date:before {
	right: -2px;
	left: -1px
}

.timeline .year .items .item.left .date:after {
	left: -2px
}

.timeline .year .items .item.full {
	-webkit-flex-basis: 100%;
	-ms-flex-preferred-size: 100%;
	flex-basis: 100%
}

.timeline .year .items .item.full:before {
	display: none
}

.timeline .year .items .item.token-launch {
	margin-top: 4rem
}

.timeline .year .items .item.token-launch .box {
	padding: 4rem;
	display: table;
	margin: 0 auto;
	border-radius: 3px;
	color: #FFF;
	background: -webkit-linear-gradient(315deg, #2d516a 0, #2d6892 100%);
	background: -o-linear-gradient(315deg, #2d516a 0, #2d6892 100%);
	background: linear-gradient(135deg, #2d516a 0, #2d6892 100%)
}

.timeline .year .items .item.token-launch .box .title {
	text-align: center;
	font-size: 4rem;
	line-height: 4.4rem;
	color: #FFF;
	padding: 0
}

.timeline .year .items .item.token-launch .box .buy-tokens {
	position: absolute;
	top: 50%;
	right: 7%;
	transform: translateY(-50%)
}

.timeline .year .items .item.token-launch .box .buy-tokens a {
	border: 2px solid #35dd9c;
	border-radius: 9999px;
	text-transform: uppercase;
	color: #35dd9c;
	font-family: montserratbold, sans-serif;
	font-size: 14px;
	line-height: 22px;
	padding: 0 12px
}

.timeline .year .items .item .date {
	position: absolute;
	z-index: 10;
	top: -webkit-calc(1.8rem + 4px);
	top: calc(1.8rem + 4px);
	font-family: montserratlight, sans-serif;
	font-size: 14px;
	line-height: 18px;
	color: #0490ab;
	width: -webkit-calc(7rem - 6px);
	width: calc(7rem - 6px);
	text-align: center
}

.timeline .year .items .item .date span {
	position: relative;
	z-index: 20;
	display: inline-block;
	background-color: #2d516a;
	padding: .1rem .5rem;
	border-radius: 3px;
	color: #FFF;
	text-transform: uppercase;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	letter-spacing: 0
}

.timeline .year .items .item .date:after,
.timeline .year .items .item .date:before {
	content: '';
	position: absolute;
	background-color: #2d516a
}

.timeline .year .items .item .date:before {
	z-index: 10;
	top: 50%;
	height: 2px;
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%)
}

.timeline .year .items .item .date:after {
	top: -6px;
	bottom: -6px;
	width: 2px
}

.timeline .year .items .item .box {
	background-color: #FFF;
	border: none;
	border-radius: 3px;
	-webkit-box-shadow: 0 2px 15px 0 rgba(0, 0, 0, .12);
	box-shadow: 0 2px 15px 0 rgba(0, 0, 0, .12);
	padding: 1.8rem 1.8rem 1.2rem
}

.timeline .year .items .item .box .title {
	text-transform: none;
	font-size: 1.2em;
	line-height: 24px;
	color: #2d516a;
	padding: 0 0 .8rem;
	margin: 0;
	letter-spacing: 0;
	text-align: left
}

.timeline .year .items .item .box .title>a {
	color: inherit
}

.timeline .year .items .item .box .content {
	font-size: 1em;
	line-height: 1.4;
	color: #a6a6a6;
	padding: 0;
	letter-spacing: 0
}

.timeline .year .items .item .box .content .btn-blue {
	text-decoration: none
}

.timeline .year .items .item .box .content :last-child {
	margin-bottom: 0
}

.timeline .year .items .item .box .content p {
	color: #6b7c93
}

.timeline .year .items .item .box .content p>a {
	color: #2d516a;
	text-decoration: underline
}

.timeline .year .items .item .box .content ol,
.timeline .year .items .item .box .content ul {
	list-style-position: outside;
	margin: 0 0 0 18px;
	padding: 0
}

.timeline .year .items .item .box .content ol li ol,
.timeline .year .items .item .box .content ul li ol {
	list-style-position: outside;
	list-style-type: lower-alpha;
	margin: 0 0 0 30px
}

.timeline .year .items .item .box .content .portraits {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row
}

.timeline .year .items .item .box .content .portraits .portrait {
	max-width: 120px;
	width: 33.33%;
	padding: 0 20px 0 0
}

.timeline .year .items .item .box .content .portraits .portrait img {
	display: block;
	width: 100%;
	height: auto
}

.timeline .year .items .item .box .tag {
	font-family: montserratlight, sans-serif;
	background-color: #152630;
	padding: 1rem 1.8rem;
	color: #e8e8e8;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: .02em
}

@media only screen and (max-width:767px) {
	.timeline .year .items .item.left,
	.timeline .year .items .item.right {
		padding: 0
	}
	.timeline {
		position: relative;
		min-height: 100vh;
		margin: 3rem 0 8rem
	}
	.timeline .year {
		position: relative;
		z-index: 20
	}
	.timeline .year .name {
		position: relative;
		font-size: 30px
	}
	.timeline .year .items {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap
	}
	.timeline .year .items .item-empty,
	.timeline .year .items .item.full:before,
	.timeline .year .items .item:before {
		display: none
	}
	#platform-layers .layers .layer,
	#platform-layers .layers .layer .info,
	.wallet-info .content {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal
	}
	.timeline .year .items .item {
		position: relative;
		-webkit-flex-basis: 100%;
		-ms-flex-preferred-size: 100%;
		flex-basis: 100%;
		margin: 3.6rem 0!important
	}
	.timeline .year .items .item:first-child {
		margin-top: 3.4rem
	}
	.timeline .year .items .item:nth-child(2) {
		margin-top: 7rem
	}
	.timeline .year .items .item:last-child {
		margin-bottom: 2rem
	}
	.timeline .year .items .item.right .date {
		left: 6px
	}
	.timeline .year .items .item.right .date:before {
		left: -2px;
		right: -1px
	}
	.timeline .year .items .item.right .date:after {
		right: -2px
	}
	.timeline .year .items .item.left .date {
		right: auto;
		left: 6px
	}
	.timeline .year .items .item.left .date:before {
		left: -2px;
		right: -1px
	}
	.timeline .year .items .item.left .date:after {
		left: auto;
		right: -2px
	}
	.timeline .year .items .item.full {
		-webkit-flex-basis: 100%;
		-ms-flex-preferred-size: 100%;
		flex-basis: 100%
	}
	.timeline .year .items .item.token-launch {
		margin: 40px 0 40px -4px!important
	}
	.timeline .year .items .item.token-launch .box {
		padding: 4rem 0
	}
	.timeline .year .items .item.token-launch .box .title {
		font-size: 30px
	}
	.timeline .year .items .item.token-launch .box .buy-tokens {
		position: static;
		-webkit-transform: translateY(0);
		-ms-transform: translateY(0);
		-o-transform: translateY(0);
		transform: translateY(0);
		text-align: center;
		margin: 10px 0 0
	}
	.timeline .year .items .item .date {
		position: relative;
		z-index: 10;
		top: auto!important;
		left: auto!important;
		bottom: auto!important;
		right: auto!important;
		width: 100%;
		padding: 0 0 10px;
		text-align: center
	}
	.timeline .year .items .item .date span {
		position: relative;
		z-index: 20;
		display: block;
		background-color: #182a36;
		padding: 1.5rem;
		line-height: 1.5;
		letter-spacing: 1px;
		font-size: 2.5rem
	}
	.timeline .year .items .item .date:after,
	.timeline .year .items .item .date:before,
	.timeline .year:last-child .item:last-child:after {
		display: none
	}
	.timeline .year .items .item .box .title {
		font-size: 16px;
		line-height: 22px
	}
	.timeline .year .items .item .box .content {
		font-size: 14px;
		line-height: 18px
	}
	.timeline .year .items .item .box .tag {
		font-size: 12px;
		line-height: 16px
	}
	.timeline .year:last-child .item:last-child {
		margin-bottom: 0!important
	}
	.timeline .year .items .item .box {
		padding: 3rem
	}
	.timeline .year .items .item .box .content p {
		line-height: 1.5
	}
}
</style>
