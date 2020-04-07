<template>
	<div id="JSEW-wrapper">

		<!--<router-link id="JSEW-globalStatsBar" class="hasLink" v-bind:to="`/${$store.state.local}/technical/stats`" tag="div">-->
		<div id="JSEW-globalStatsBar">
			<!--
			<div id="JSEW-globalStatsButton">
				<button>{{ $t('pages.home.button_viewGlobalStats') }}</button>
			</div>-->

			<miniStat />
		</div>
		<!--</router-link>-->


		<div id="JSEW-overview" class="wrapper">
			<h1 class="heading center">JSE Closing Down 21st April 2020</h1>
			<h3 class="subHeading center">Under the current economic environment it has not been possible to raise the funding required to continue the JSE project. </h3>
			<p>
				Since 2017 the team has developed and built the network and front-end platforms to bridge web and blockchain technologies. In hindsight we left it too late to raise ICO funds and the project was always bootstrapped. Undeterred we used what little funds we had to the best of our abilities to build out the JSE platform, app and network. The markets for cryptocurrencies have declined since the end of 2017 and this has had a very negative impact on the liquidity and token economics. Organic growth and token demand have slowed significantly making our metrics less desirable to investors. With the Covid-19 pandemic hitting all markets and VC investment our chances of raising are now unrealistic.
			</p>
			<p>
				The platform will be shut down on the 21st April 2020, at this time a snapshot will be taken of the ledger and published on the website. Remaining funds after liquidation and server costs will be used to continue the buy back programme on LATOKEN exchange which seems the fairest way to reimburse stakeholders. Anyone looking to trade tokens on exchange should withdraw funds to the ERC20 token (which will remain in use) before the date above.
			</p>
			<p>
				The code-base will remain on Github and the existing ledger json files will be published on this website once they have been finalised.
			</p>
			<p>
				I hope that in the future someone will continue the work we started and fork the project continuing the existing ledger. Cryptocurrency is the future and the current economic crisis and bail out plans only highlight the need to separate money from state. As a community we need an environmentally friendly alternative to traditional proof-of-work systems.
			</p>
			<p>
				I would like to thank everyone who contributed to the project. Developers, investors, community members, miners and website publishers. I have been lucky enough to work with some amazing people over the last three years and wish them the best for whatever the future brings. I apologise to everyone who invested time, money and resources into the project who believed, like I did, in what we were doing.
			</p>
		</div>
		<hr>
		<div class="wrapper">
			<div id="JSEW-sectionHighlights">
				<div class="row">
					<div class="col">
						<dl>
							<dt id="JSEW-icoSimple"></dt>
							<dd>
								<h3>Web Browser Mining</h3>
								<p>
									Anyone with a web browser or website can now mine cryptocurrency. Block rewards distributed to real users across the globe.
								</p>
							</dd>
						</dl>
					</div>
					<div class="col">
						<dl>
							<dt id="JSEW-icoMining"></dt>
							<dd>
								<h3>Ad Exchange</h3>
								<p>
									A transparent market place for the purchase and sale of digital marketing space for banner and text advertising.
								</p>
							</dd>
						</dl>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<dl>
							<dt id="JSEW-icoTrust"></dt>
							<dd>
								<h3>Merchant Tools</h3>
								<p>
									Accept cryptocurrency payments online with simple to setup "Buy with crypto" buttons.
								</p>
							</dd>
						</dl>
					</div>
					<div class="col">
						<dl>
							<dt id="JSEW-icoAPI"></dt>
							<dd>
								<h3>Enterprise Solutions</h3>
								<p>
									Enterprise grade API's for bot detection and side chain validations.
								</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>

			<div class="center">
				<a href="/whitepaper.pdf" class="button" style="display:inline-block" target="_blank"><i class="fa fa-heart"></i> {{ $t('pages.home.section_overview.button_readWhitePaper') }}</a>
			</div>
		</div>

		<div id="JSEW-browserMining">
			<div class="wrapper">
				<div id="JSEW-browserMiningContent" class="row reverse">
					<div class="col">
						<h2 class="heading">Blockchain</h2>
						<h3 class="subHeading">Immutable Chronologically Ordered Data</h3>

						<p>
							 Blockchain technology provides a secure, shared database of unchangeable data. While the concept is simple, we are still only starting to see the use of cases for immutable data emerging. The JSE project has been building on top of blockchain and web technologies to enable website owners to monetize their content.
						</p>
						<p>
							Blockchain’s are mined using a mathematical calculation on the data in each block. For traditional cryptocurrencies this is competed over by huge server farms. The bitcoin network currently consumes more energy than Switzerland<a href="https://www.theverge.com/2019/7/4/20682109/bitcoin-energy-consumption-annual-calculation-cambridge-index-cbeci-country-comparison" target="_blank">*</a>. The JSE team developed a tool that carries out the same hashing algorithm in a normal web browser without disturbing user experience. Hash calculations are sent back to the nodes which form the network and are used to finalise and secure each block. This gives the project a distinct advantage in cost savings as the network is run using surplus resources. 
						</p>
						<div class="center">
							<a href="https://platform.jsecoin.com" style="display:inline-block;" class="button" target="_BLANK"><i class="fa fa-universal-access"></i> {{ $t('pages.home.section_browserMining.button_tryit') }}</a>
						</div>
					</div>
					<div class="col center">

						<img src="../assets/images/blockchain.png" style="width:70%" alt="JSE Blockchain" />

					</div>
				</div>
			</div>
		</div>

		<div id="JSEW-adTech">
			<div class="wrapper">
				<div id="JSEW-adTechContent" class="row reverse">
					<div class="col center">
						<img src="../assets/images/adtech.png" style="width:80%; margin-top: 10%;" alt="ad tech" />
					</div>
					<div class="col">
						<h2 class="heading">Ad-Tech</h2>
						<h3 class="subHeading">A digital ad-exchange using cryptocurrency micropayments</h3>
						<p>
							The JSE ad-exchange provides a transparent marketplace for trading digital advertising placements such as banners and inText ads. Website owners can place advertising code on their website to display ads which are then purchased by advertisers and media buyers using the self-serve platform. Advertising campaigns can be optimised by country, device, browser, siteID, publisherID to provide the best return on investment for our clients.
						</p>
						<p>
							Publishers have options for auto-ads, custom banners, in-text ads as well as full control over the advertisers that are allowed to purchase inventory on their site.
						</p>
						<p>
							The JSE token is used as the medium of exchange via micropayments on the JSE blockchain.
						</p>
						<p>
							To attract website owners to our platform we have developed further tools such as a captcha solution, wordpress plugins and a developer API.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div id="JSEW-enterprise">
			<div class="wrapper">
				<div id="JSEW-enterpriseContent" class="row reverse">
					<div class="col">
						<h2 class="heading">Enterprise</h2>
						<h3 class="subHeading">Developing solutions for business</h3>
						<p>
							Energy and cost savings make the JSE blockchain very competitive for 3rd party integrations. The team have developed a side-chain API which allows businesses easy access to the benefits of blockchain.
						</p>
						<p>
							Our internal bot-detection and fraud prevention tools are available as a 3rd party API. The network receives high volumes of traffic through the browser mining and captcha solutions which provides data on suspicious connections and bot networks. This data is anonymously analysed using machine learning algorithms to provide risk assessments.
						</p>
						<p>
							Our team have front-end and back-end developers who are available to customise solutions and help integrate blockchain solutions that add value to clients business systems.
						</p>
					</div>
					<div class="col center">
						<img src="../assets/images/enterprise2.png" style="width:50%; margin-top: 10%" alt="ad tech" />
					</div>
				</div>
			</div>
		</div>

		<div id="JSEW-ecom">
			<div class="wrapper">
				<div id="JSEW-ecomContent" class="row reverse">
					<div class="col center">
						<img src="../assets/images/ecom.png" style="width:50%; margin-top: 10%" alt="ad tech" />
					</div>
					<div class="col">
						<h2 class="heading">E-Commerce</h2>
						<h3 class="subHeading">Accepting cryptocurrency payments online</h3>
						<p>
							In the future we believe that cryptocurrency transactions will be adopted by a mainstream user base to send funds much like we send emails today. Every year more trade is being done online and e-commerce stores and websites will want a way to accept cryptocurrency payments.
						</p>
						<p>
							The JSE merchant tools provide a simple “Buy with Crypto” button that can be placed alongside other payment gateways to accept cryptocurrency payments. Shopping cart plug-ins are also available for stores to quickly setup crypto payments and be future ready.
						</p>
						<p>
							The payment processing industry provides an exceptional opportunity to add value and benefit from the growth in cryptocurrency adoption.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!--
		<div id="JSEW-browserMining">
			<div class="wrapper">
				<div id="JSEW-browserMiningContent" class="row reverse">
					<div class="col">
						<h2 class="heading">{{ $t('pages.home.section_browserMining.heading_browserMining') }}</h2>
						<h3 class="subHeading">{{ $t('pages.home.section_browserMining.subheading_browserMining') }}</h3>

						<p>
							 {{ $t('pages.home.section_browserMining.para_main1') }}
						</p>
						<p>
							{{ $t('pages.home.section_browserMining.para_main2') }}
						</p>
						<p>
							{{ $t('pages.home.section_browserMining.para_main3') }}
						</P>

						<div class="center">
							<a href="https://platform.jsecoin.com" style="display:inline-block;" class="button" target="_BLANK"><i class="fa fa-universal-access"></i> {{ $t('pages.home.section_browserMining.button_tryit') }}</a>
						</div>
					</div>
					<div class="col center">

						<img src="../assets/images/miner.png" style="width:70%" :alt="$t('pages.home.section_browserMining.alt_miner')" />

					</div>
				</div>
			</div>
		</div>

		<div id="JSEW-pubPlatMining">
			<div class="wrapper">
				<div id="JSEW-pubPlatMiningContent" class="row">
					<div class="col">
						<div class="center">
							<img src="../assets/images/carousel/1.png" width="400" class="browserScreens" :alt="$t('pages.home.section_pubPlatMining.alt_newMiningPlatform')" />
						</div>

						<div class="swiper-paginationWrapper">
							<div class="swiper-pagination2"  slot="pagination"></div>
						</div>


					</div>
					<div class="col">
						<h2 class="heading">{{ $t('pages.home.section_pubPlatMining.heading_pubPlatMining') }}</h2>
						<h3 class="subHeading">{{ $t('pages.home.section_pubPlatMining.subheading_pubPlatMining') }}</h3>

						<p>
							{{ $t('pages.home.section_pubPlatMining.para_main1') }}
						</p>
						<p>
							{{ $t('pages.home.section_pubPlatMining.para_main2') }}
						</p>
						<p>
							{{ $t('pages.home.section_pubPlatMining.para_main3') }}
						</p>
						<div class="centerx">
							<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="button" style="display:inline-block; margin-left:20px;" class="button">
								<i class="fa  fa-question-circle"></i> {{ $t('pages.home.section_pubPlatMining.button_findOutMore') }}
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>

-->
		<div id="JSEW-env">
			<div id="JSEW-cityScape">
				<div class="wrapper">
					<div class="row">
						<div class="col">
							<div class="panelHighlight">
								<h2 class="heading">{{ $t('pages.home.section_env.heading_env') }}</h2>
								<h3 class="subHeading" style="margin-bottom:40px;">{{ $t('pages.home.section_env.subheading_env') }}</h3>
								<p>
									{{ $t('pages.home.section_env.para_main1') }}
								</p>
								<p>
									{{ $t('pages.home.section_env.para_main2') }}
								</p>
								<p>
									{{ $t('pages.home.section_env.para_main3') }}
								</p>
							</div>
							<router-link v-bind:to="`/${$store.state.local}/environment`" tag="button" class="button">
								<i class="fa fa-leaf"></i> {{ $t('pages.home.section_env.button_learnMoreOnImpact') }}
							</router-link>
						</div>
						<div class="col center" id="JSEW-floatingIsland">
							<img src="../assets/images/floating_powerplant.png" style="width:70%" :alt="$t('pages.home.section_env.alt_sustainableEnergy')" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="JSEW-ecosystem">
			<div class="wrapper">
				<h2 class="heading center">{{ $t('pages.home.section_eco.heading_eco') }}</h2>
				<h3 class="subHeading center">{{ $t('pages.home.section_eco.subheading_eco') }}</h3>
			</div>
			<div style="width: 100%; text-align: center;">
				<img src="../assets/images/ecosystem.png" style="width:100%; max-width: 800px; margin: 30px auto;"  alt="JSE Ecosystem"/>
				<br>
				<router-link v-bind:to="`/${$store.state.local}/technical/ecosystem`" tag="button" style="display:inline-block; margin-bottom:40px;" class="button">
					<i class="fa  fa-line-chart"></i> {{ $t('pages.home.section_eco.button_eco') }}
				</router-link>
			</div>
		</div>

		<!--<div id="JSEW-timeLine">
			<div class="wrapper">
				<h2 class="heading center">{{ $t('pages.home.section_timeline.heading_timeline') }}</h2>
				<h3 class="subHeading center">{{ $t('pages.home.section_timeline.subheading_timeline') }}</h3>
			</div>

			<interactiveTimeline/>

			<router-link v-bind:to="`/${$store.state.local}/timeline`" tag="button" class="button">
				<i class="fa fa-calendar"></i> {{ $t('pages.home.section_timeline.button_viewDetailedTimeline') }}
			</router-link>
		</div>-->

		<!--
		<div id="JSEW-team">
			<h2 class="heading center">{{ $t('pages.home.section_team.heading_team') }}</h2>
			<h3 class="subHeading center">{{ $t('pages.home.section_team.subheading_team') }}</h3>

			<div>
				<div class="hexProfileContainer">
					<div class="hexGridWrapper">
						<ul class="hexGrid">
							<li><div class="solidHex"></div></li>
							<li><div class="solidHex"></div></li>
							<li><div class="profile jim"><div class="overlayHex"></div></div></li>
							<li><div class="profile john"><div class="overlayHex"></div></div></li>
							<li><div class="profile dave"><div class="overlayHex"></div></div></li>
							<li><div class="profile tracy"><div class="overlayHex"></div></div></li>
							<li><div class="solidHex"></div></li>
							<li><div class="blankHex"></div></li>
							<li><div class="blankHex"></div></li>
						</ul>
						<ul class="hexGrid">
							<li><div class="solidHex"></div></li>
							<li><div class="blankHex"></div></li>
							<li><div class="blankHex"></div></li>
							<li><div class="profile amr"><div class="overlayHex"></div></div></li>
							<li><div class="profile alina"><div class="overlayHex"></div></div></li>
							<li><div class="profile marks"><div class="overlayHex"></div></div></li>
							<li><div class="blankHex"></div></li>
							<li><div class="solidHex"></div></li>
							<li><div class="solidHex"></div></li>
						</ul>
						<ul class="hexGrid">
							<li><div class="blankHex"></div></li>
							<li><div class="solidHex"></div></li>
							<li><div class="solidHex"></div></li>
							<li><div class="blankHex"></div></li>
							<li><div class="blankHex"></div></li>
							<li><div class="solidHex"></div></li>
							<li><div class="blankHex"></div></li>
							<li><div class="solidHex"></div></li>
							<li><div class="blankHex"></div></li>
						</ul>
					</div>
				</div>
				<router-link v-bind:to="`/${$store.state.local}/about/meetTheTeam`" tag="button" class="button teamButton" style="position: absolute; bottom:0px;">
					<i class="fa fa-user-circle-o"></i> {{ $t('pages.home.section_team.button_meetTheTeam') }}
				</router-link>
			</div>
		</div>
		-->

		<div id="JSEW-community">
			<div class="wrapper center">
				<h2 class="heading center">{{ $t('pages.home.section_community.heading_community') }}</h2>
				<h3 class="subHeading center">{{ $t('pages.home.section_community.subheading_community') }}</h3>

				<nav class="centerFlex">
					<ul id="JSEW-communityLinks">
						<li><a target="_blank" title="Facebook" href="https://www.facebook.com/officialjsecoin"><img src="../assets/images/ico_facebook.png" alt="Facebook logo button" /></a></li>
						<li><a target="_blank" title="Discord" href="https://discord.gg/3gBZsA4"><img src="../assets/images/ico_discord.png" alt="Discord logo button" /></a></li>
						<li><a target="_blank" title="Twitter" href="https://twitter.com/jsecoin"><img src="../assets/images/ico_twitter.png" alt="Twitter logo button" /></a></li>
						<li><a target="_blank" title="LinkedIn" href="https://www.linkedin.com/company/25048028/"><img src="../assets/images/ico_linkedin.png" alt="LinkedIn logo button" /></a></li>
						<li><a target="_blank" title="Telegam" href="https://t.me/jsetelegram"><img src="../assets/images/ico_telegram.png" alt="Telegram logo button" /></a></li>
						<li><a target="_blank" title="YouTube" href="https://www.youtube.com/channel/UCHtIF9KggJn9TDzr8pRYsYA"><img src="../assets/images/ico_youtube.png" alt="YouTube logo button" /></a></li>
					</ul>
				</nav>

				<!--
					<a href="/forums/" class="button" style="display:inline-block;"><i class="fa fa-group"></i> {{ $t('pages.home.section_community.button_DontForgetForums') }}</a>
				-->
			</div>
		</div>
<!--
		<div id="JSEW-charity">
			<div class="wrapper">
				<div id="JSEW-charityContent" class="row">
					<div class="col">
						<img src="../assets/images/img_charity.png" class="charityImg" :alt="$t('pages.home.section_charity.alt_charity')" />
					</div>
					<div class="col">
						<h2 class="heading">{{ $t('pages.home.section_charity.heading_charity') }}</h2>
						<h3 class="subHeading">{{ $t('pages.home.section_charity.subheading_charity') }}</h3>

						<p>
							{{ $t('pages.home.section_charity.para_main1') }}
						</p>


						<div id="JSEW-thermo">
							<div id="JSEW-thermoCoin"></div>
							<div id="JSEW-thermoActiveVal">{{$store.state.charity}}</div>
							<div id="JSEW-thermoActiveValUnderlay">{{$store.state.charity}}</div>
							<div id="JSEW-thermoDonating">{{ $t('pages.home.section_charity.text_JSECollected') }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
-->

		<div id="JSEW-where-next">
			<div class="wrapper center">
				<div id="JSEW-where-next-container">
					<!--
					<h2 class="heading center">{{ $t('pages.home.section_where_next.heading1') }}</h2>
					<hr>
					<h3 class="subHeading center">{{ $t('pages.home.section_where_next.heading2a') }}</h3>
					<p class=".JSEW-giant-link-container"><a href="https://jsecoin.com/whitelisting" class="JSEW-giant-link">https://jsecoin.com/whitelisting</a></p>
					<hr>-->
					<h3 class="subHeading center">{{ $t('pages.home.section_where_next.heading2b') }}</h3>
					<p class=".JSEW-giant-link-container"><a href="https://platform.jsecoin.com" class="JSEW-giant-link">https://platform.jsecoin.com</a></p>
					<hr>
					<h3 class="subHeading center">{{ $t('pages.home.section_where_next.heading2c') }}</h3>
					<p class=".JSEW-giant-link-container"><a href="https://jsecoin.com/whitepaper.pdf" class="JSEW-giant-link">https://jsecoin.com/whitepaper.pdf</a></p>
					<hr>
				</div>
			</div>
		</div>


		<!--
		<div id="JSEW-solutions">
			<div class="wrapper">
				<h2 class="heading center">OTHER JSEcoin SOLUTIONS</h2>
				<h3 class="subHeading center">Merchant Tools, OFFLINE WALLET, Developer API, BlockChain Explorer</h3>

				<swiper :options="swiperOption3" ref="mySwiper3" @slideChange="onSlideChange">

					<swiper-slide>
						<div class="row">
							<div class="col center">
								<img id="JSEW-blockChainLogo" src="../assets/images/ico_blockchain.png" class="solutionGFX" alt="JSE Blockchain Explorer logo" />
							</div>
							<div class="col">
								<h2 class="heading">JSE Blockchain Explorer</h2>
								<p>
									Visit the online blockchain page - here you can view the content of individual JSE blocks and
									transactions and the transaction histories and balances of addresses, as well as keeping up to date with daily stats.
								</p>

								<p>
									<router-link v-bind:to="`/${$store.state.local}/tools/blockchainExplorer`" tag="button" class="button teamButton" style="position: absolute; bottom:0px;">
										Learn more ›
									</router-link>
								</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="row">
							<div class="col center">
								<img src="../assets/images/carousel/1.png" class="solutionGFX" alt="JSE Merchant Tools" />
							</div>
							<div class="col">
								<h2 class="heading">Merchant Tools</h2>
								<p>
									Simple to install tools to enable your site to receive JSE as payment for goods and services.
								</p>
								<p>
									Extend and create your own ecommerce interactions with the JSE Developer platform.
								</p>

								<p>
									<router-link v-bind:to="`/${$store.state.local}/tools/merchantTools`" tag="button" class="button teamButton" style="position: absolute; bottom:0px;">
										Learn more ›
									</router-link>
								</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="row">
							<div class="col center">
								<img src="../assets/images/carousel/1.png" class="solutionGFX" alt="JSE Wallet" />
							</div>
							<div class="col">
								<h2 class="heading">Wallet</h2>
								<p>
									Full integration with Ethereum Based wallets enable you to securely store and quickly send your tokens in a decentralised environment.
								</p>

								<p>
									<router-link v-bind:to="`/${$store.state.local}/tools/wallet`" tag="button" class="button teamButton" style="position: absolute; bottom:0px;">
										Learn more ›
									</router-link>
								</p>
							</div>
						</div>
					</swiper-slide>

					<div class="swiper-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next" slot="button-next"></div>
				</swiper>
			</div>

			<nav id="JSEW-toolSelector">
				<ul>
					<li v-on:click="toSlide('mySwiper3',0)" :class="{ active:activeSolutionItem(0) }">WEBMASTERS</li>
					<li v-on:click="toSlide('mySwiper3',1)" :class="{ active:activeSolutionItem(1) }">PLATFORM USERS</li>
					<li v-on:click="toSlide('mySwiper3',2)" :class="{ active:activeSolutionItem(2) }">DEVELOPERS</li>
				</ul>
			</nav>
		</div>-->
	</div>
</template>

<script>
//import axios from 'axios';
//import numeral from 'numeral';
//import numeralen from 'numeral/locales/en-gb';
//import 'swiper/dist/css/swiper.css';
//import { swiper, swiperSlide } from 'vue-awesome-swiper';
import miniStat from './segment/miniStat';
//import interactiveTimeline from './segment/interactiveTimeline';

export default {
	name: 'home',
	metaInfo () {
		return {
			title: this.$t('pages.home.meta.title') + ' 🤖',
			titleTemplate: null,
		};
	},
	components: {
		//swiper,
		//swiperSlide,
		miniStat,
		//interactiveTimeline,
	},
	data() {
		return {
			solutionItem: 0,
			swiperOption: {
				spaceBetween: 500,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			},
			swiperOption2: {
				spaceBetween: 500,
				pagination: {
					el: '.swiper-pagination2',
					clickable: true,
				},
			},
			swiperOption3: {
				spaceBetween: 100,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
			swiperOption4: {
				spaceBetween: 0,
			},
			/*stats: {
				status: 'loading',
				hit: 0,
				pubs: 0,
				users: 0,
			},*/
		};
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		},
	},
	/*mounted() {
		numeral.localeData().abbreviations = {
			thousand: 'Thousand',
			million: 'Million',
			billion: 'Billion',
			trillion: 'Trillion',
		};
	created() {
		axios.get('https://server.jsecoin.com/stats/').then((response) => {
			// JSON responses are automatically parsed.
			const oData = response.data;

			if (typeof (oData.hit) !== 'undefined') {
				oData.hit = numeral(oData.hit).format('0a');
			}
			if (typeof (oData.pubs) !== 'undefined') {
				oData.pubs = numeral(oData.pubs).format('0a');
			}
			if (typeof (oData.users) !== 'undefined') {
				oData.users = numeral(oData.users).format('0a');
			}
			this.stats = {
				status: 'loaded',
				hit: oData.hit,
				pubs: oData.pubs,
				users: oData.users,
			};
		}).catch((e) => {
			this.stats = {
				status: 'err',
			};
			//this.errors.push(e);
		});
	},
	},*/
	methods: {
		toSlide(swiperName, i) {
			console.log(i,this.$refs);
			this.$refs[swiperName].swiper.slideTo(i, 400);
			this.solutionItem = i;
		},
		activeSolutionItem(solutionItem) {
			return this.solutionItem === solutionItem;
		},
		onSlideChange(){
			this.solutionItem = this.$refs.mySwiper3.swiper.activeIndex;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-team {
	padding: 30px 0px;
	background: #FFFFFF;
}
#JSEW-browserMining,
#JSEW-charity {
	padding: 30px 0px;
	background: #fafafa;
}
#JSEW-charity {
	padding-bottom:40px;
}
.panelHighlight {
	background-color: rgba(255,255,255,0.2);
    border-radius: 16px;
	padding: 10px;
	margin-bottom: 20px;
}
#JSEW-floatingIsland {
	width:610px;
}
#JSEW-env {
	position: relative;
	background:#d5f1ff url(../assets/images/env_road.png) bottom repeat-x;
	background-size: 39px 559px;

}
#JSEW-env #JSEW-cityScape {
	padding-top:40px;
	position: absolute;
	top:0px;
	bottom:0px;
	left: 0px;
	right:0px;
	background: url(../assets/images/env_landscape.png) center bottom no-repeat;
	background-size:75% 163px;
}

#JSEW-browserMining,
#JSEW-pubPlatMining,
#JSEW-env,
#JSEW-charity {
	min-height: 600px;
	display: flex;
}
#JSEW-solutions {
	min-height: 600px;
}
#JSEW-enterprise {
	background: #F7F7F7;
}
#JSEW-browserMining > div:first-child,
#JSEW-pubPlatMining > div:first-child,
#JSEW-env > div:first-child,
#JSEW-charity > div:first-child {
	align-self:center;
}

#JSEW-browserMining .heading,
#JSEW-env .heading,
#JSEW-team .heading,
#JSEW-charity .heading {
	color:#000;
}

/*
#JSEW-browserMining .heading,
#JSEW-pubPlatMining .heading {
	margin-top:30px;
}*/

#JSEW-browserMining .subHeading,
#JSEW-env .subHeading,
#JSEW-team .subHeading,
#JSEW-charity .subHeading {
	color:#323232;
}

#JSEW-ecosystem {
	padding-top: 40px;
	background: #ffffff;
}

.swiper-container {
	padding:20px 50px !important;
}
#JSEW-solutions .swiper-container {
	padding:70px 50px !important;
}

.swiper-paginationWrapper {
	position: relative;
	margin:0px 0px 20px;
}
.swiper-pagination,
.swiper-pagination2 {
	left: 0px;
	right: 0px;
}

.swiper-pagination2 {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination2.swiper-pagination-hidden {
  opacity: 0;
}
.browserScreens {
	box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    border-radius: 6px 6px 0px 0px;
}
.swiper-pagination-bullet {
	margin:0px 4px;
	width:14px !important;
	height:14px !important;
	background:#368bcd !important;
	opacity: 1 !important;
}
.swiper-pagination-bullet-active {
	background:#163457 !important;
}
.charityImg {
	border-radius: 10px;
	margin: 0px auto;
	display: block;
	margin:0px;
	width:100%;
}

#JSEW-team {
	background:#fafafa;
	position: relative;
	overflow: hidden;
}
.teamButton {
	position: absolute !important;
    bottom: 150px !important;
    margin-left: -80px !important;
    left: 50% !important;
}
.hexGridWrapper {
    /*zoom: 80%;*/
}
.hexGrid {
	display: flex;
	/*margin:-30px 0px 0px -260px;*/
	margin:-24px 0px 0px -114px;
	padding:0px;
}
.hexProfileContainer {
    margin: 80px auto;
    width: 1000px;
}
.hexProfileContainer .hexGrid:nth-child(even) {
	margin:-24px 0px 0px -189px;
	/*margin:-30px 0px 0px -356px;*/
}
.hexGrid li {
	list-style: none;
}
.blankHex {
	display: block;
	width:152px;
	height: 155px;
}
.solidHex {
	display: block;
	width:152px;
	height: 155px;
	background-image:url("../assets/images/hexSolid.svg");
	background-repeat: no-repeat;
	/*background-size:contain;*/
	background-size:contain;
	background-position: center;
}
#JSEW-icoSimple {
	background-image:url("../assets/images/homeIcons/browser-mining.png");
	background-repeat: no-repeat;
	background-size:contain;
	background-position: center 20px;
}
#JSEW-icoMining {
	background-image:url("../assets/images/homeIcons/ad-exchange.png");
	background-repeat: no-repeat;
	background-size:contain;
	background-position: center 20px;
}
#JSEW-icoTrust {
	background-image:url("../assets/images/homeIcons/merchant-tools.png");
	background-repeat: no-repeat;
	background-size:contain;
	background-position: center 20px;
}
#JSEW-icoAPI{
	background-image:url("../assets/images/homeIcons/enterprise-solutions.png");
	background-repeat: no-repeat;
	background-size:contain;
	background-position: center 20px;
}
#JSEW-envImg {
	background-image:url("../assets/images/environment.png");
	background-repeat: no-repeat;
	background-size:contain;
	background-position: center;
	height: 130px;
	margin: 30px auto;
}

.swiper-button-prev {
	left:30px !important;
}
.swiper-button-next {
	right:30px !important;
}

#JSEW-pubPlatMining,
#JSEW-timeLine,
#JSEW-community,
#JSEW-solutions {
	padding: 30px 0px;
}

#JSEW-solutions {
	margin-bottom:60px;
}
#JSEW-pubPlatMiningContent,
#JSEW-charityContent {
	display: flex;
	flex-direction:row;
	flex-wrap:wrap;
}
#JSEW-charityContent .col {
	padding:0px 20px;
}

#JSEW-ecomContent {
	padding: 80px 20px;
}

#JSEW-enterpriseContent {
	padding: 80px 20px;
}

#JSEW-adTechContent {
	padding: 80px 20px;
}

#JSEW-pubPlatMining .col .wingLeft,
#JSEW-browserMiningContent .col .wingLeft,
#JSEW-charityContent .col .wingLeft {
	position: absolute;
	top:0px;
	left: 0px;
	width:50px;
	bottom:0px;background: linear-gradient(to right, rgba(250,250,250,1), rgba(255,0,0,0));
	z-index:100;
}
#JSEW-pubPlatMining .col .wingRight,
#JSEW-browserMiningContent .col .wingRight,
#JSEW-charityContent .col .wingRight {
	position: absolute;
	top:0px;
	right: 0px;
	width:50px;
	bottom:0px;
	background: linear-gradient(to right, rgba(255,0,0,0), rgba(250,250,250,1));
	z-index:100;
}

#JSEW-pubPlatMining .col .wingLeft {
	bottom:0px;background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,0,0,0));
}

#JSEW-pubPlatMining .col .wingRight {
	background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,255,255,1));
}

#JSEW-browserMiningContent .col,
#JSEW-pubPlatMiningContent .col,
#JSEW-charityContent .col {
	flex-grow: 1;
	max-width:500px;
	width:100%;
	position: relative;
	align-self: center;
}

.JSEW-giant-link {
	font-size: 1.5em;
}
#JSEW-where-next hr {
	border: 1px solid #CCC;
	height: 1px;
	width: 200px;
	margin: 25px auto;
}

/*
#JSEW-where-next {
	background-image: url("/static/images/search_logo.png");
  background-size: 300px;
  background-repeat: no-repeat;
	background-position: 50% 50%;
	padding-top: 40px;
}
#JSEW-where-next-container {
  background: rgba(255,255,255,0.95);
}
*/
#JSEW-globalStatsBar:hover {
	background:#fdfdfd;
}
#JSEW-globalStatsButton {
	position: absolute;
	height: 20px;
	bottom:-20px;
	left: 0px;
	right:0px;
	overflow: hidden;
}

#JSEW-globalStatsButton button {
	background:#164677;
	text-align:center;
	transition:top 0.2s;
	top:-20px;
	height:20px;
	left:50%;
	margin-left:-75px;
	/*width:150px;*/
	position: absolute;
	border-radius:0px 0px 6px 6px;
	font-size:0.8em;
	color:#fff;
	text-align:center;
    white-space: nowrap;
    padding: 0px 10px;
}

#JSEW-globalStatsBar:hover button {
	top:0px;
}

#JSEW-toolSelector {
	border-top:solid 1px #eee;
	border-bottom:solid 1px #eee;
	display: flex;
	align-items: center;
	flex-direction: column;
}
#JSEW-toolSelector ul {
	margin:10px 0px;
	padding:0px;
	display: flex;
}


#JSEW-toolSelector li {
	list-style: none;
	padding:10px 16px;
	border-right:solid 1px #eee;
	font-weight: bold;
}


#JSEW-toolSelector li:last-child {
	border:0px;
}

#JSEW-sectionHighlights {
	display: flex;
	align-items: center;
    flex-direction: column;
}
#JSEW-sectionHighlights dl {
	display: flex;
	flex-wrap:wrap;
	max-width:950px;
	width:100%;
}

#JSEW-sectionHighlights h3 {
	color: #1d75b7;
	margin-bottom:10px;
}

#JSEW-sectionHighlights p {
	margin:0px;
	padding:0px;
}

#JSEW-sectionHighlights dd {
	max-width:315px;
	width:100%;
	margin:0px 20px 40px 20px;
}

#JSEW-sectionHighlights dt {
	width:100px;
	margin:0px 0px 40px 20px;
}

#JSEW-sectionHighlights dd,
#JSEW-sectionHighlights dt {
	display: flex;
	flex-direction:column;
}
#JSEW-overview {
	padding:30px 0px;
}

#JSEW-toolSelector li {
	cursor: pointer;
}
#JSEW-toolSelector li.active {
	color:#164677;
}

#JSEW-solutions .swiper-slide {
	display:flex;
}

#JSEW-blockChainLogo {
    margin: 0px 50px;
    padding: 30px;
    border-radius: 34px;
    box-shadow: 0px 10px 0px 0px #e8e8e8;
    border: solid 1px #e8e8e8;
}
.solutionGFX {
	width:80%;
}
#JSEW-thermo {
	background:#fff;
	border-radius: 60px;
	border:solid 8px #f2f2f2;
	padding:10px;
	position: relative;
	padding-right:110px;
	margin-top:40px;
}

#JSEW-thermo #JSEW-thermoActiveVal {
	width:36%;
	background:#f13446;
	color:#fff;
	border-radius: 60px;
	font-weight: bold;
	padding:5px 20px;
	z-index:10;
	position: relative;
	overflow:hidden;
}

#JSEW-thermo #JSEW-thermoActiveValUnderlay {
	color:#323232;
	font-weight: bold;
	padding:5px 20px;
	position: absolute;
	top:10px;
	z-index:0;
}

#JSEW-thermo #JSEW-thermoCoin {
	background-image:url("../assets/images/coin.png");
	background-repeat: no-repeat;
	background-size: contain;
	width:100px;
	height: 100px;
	position: absolute;
	right:-10px;
	top:-25px;
}

#JSEW-thermo #JSEW-thermoDonating {
	position: absolute;
    left: 31px;
    right: 0px;
    /* text-align: center; */
    bottom: -26px;
    font-size: 0.7em;
    font-weight: bold;
    text-transform: uppercase;
    color: #ccc;
}

#JSEW-floatingIsland img {
  animation: floating 5s infinite;
}
@keyframes floating {
  0%   { margin-top: 0px; }
  50% { margin-top: 20px; }
  100% { margin-top: 0px; }
}

@media screen and (max-width: 1000px) {
	.enableResponsive #JSEW-charity .heading {
		margin-top:20px;
	}
	.enableResponsive #JSEW-floatingIsland {
		display: none;
	}
	.enableResponsive .panelHighlight {
		margin:0px 20px 20px 20px;
	}
}
@media screen and (max-width: 768px) {
	.enableResponsive #JSEW-env #JSEW-cityScape {
		position: relative;
		background:none;
		padding:0px;
	}
	.enableResponsive #JSEW-env {
		padding:30px 0px;
		background:#b1def5 url(../assets/images/env_landscape.png) center bottom no-repeat;
	}
	.enableResponsive .wingLeft,.wingRight {
		display: none;
	}
	.enableResponsive .swiper-container {
		padding: 20px 0px !important;
	}

	.enableResponsive .swiper-pagination-bullet {
		border-radius: 10px;
		width:64px !important;
	}
	.enableResponsive #JSEW-pubPlatMiningContent .heading {
		margin-top:20px;
	}
	.enableResponsive #JSEW-toolSelector {
		display:none;
	}

	.enableResponsive #JSEW-globalStats dl {
		margin:20px auto;
	}
	.enableResponsive #JSEW-globalStats .col {
		width: 100%;
   		max-width: inherit;
	}

	.enableResponsive #JSEW-blockChainLogo {
		margin:0px 0px 20px 0px;
	}
	.enableResponsive .browserScreens{
		width:80%;
	}
	.enableResponsive #JSEW-solutions .swiper-container {
		margin-bottom:0px;
	}
	.enableResponsive .swiper-button-next {
		right: 15px !important;
	}
	.enableResponsive .swiper-button-prev {
		left: 15px !important;
	}

	.enableResponsive #JSEW-solutions .heading,
	.enableResponsive #JSEW-solutions p {
		text-align:center;
	}

	#JSEW-sectionHighlights {
		text-align: center;
	}
	#JSEW-sectionHighlights dl {
		margin: 10px 0px;
		border: solid 1px #eee;
		border-radius: 10px;
		padding: 18px;
	}
	#JSEW-sectionHighlights .col {
		padding:10px 20px;
	}
}
</style>
