<template>
	<div id="JSEW-website" :class="{enableResponsive:enableResponsive, 'mobileNavDisplay':$store.state.showMobileNav}" class="vb" v-bar>
		<div>
			<div v-if="adblockEnabled" id="JSEW-detectAdblockMask">
				<div id="JSEW-adBlockMsg">
					<i class="fa fa-close" v-on:click="hideAdBlockInfo"></i>
					<img src="./assets/images/logo_jse_colour.png" style="width: 240px; margin: 20px 20px 0px 20px;" alt="JSEcoin Ltd Logo" />
					<p>
						<b>{{ $t('template.adDetection.text_title') }}</b><br />
						{{ $t('template.adDetection.para_main1') }}
					</p>
					<p>
						{{ $t('template.adDetection.para_main2') }}
					</p>
					<div style="position:absolute;bottom:0px;left:0px;right:0px;">
						<button class="button" style="float:right; display:inline-block;" v-on:click="showDisableAd">Disable Adblocker</button>
						<button class="button" style="float:right; display:inline-block;" v-on:click="hideAdBlockInfo">Continue</button>
					</div>
					<!--<p>
						Thank you for supporting us.
					</p>-->
				</div>
			</div>
			<div v-if="displayAdblockInstructions" id="JSEW-detectAdblockMask">
				<iframe src="/static/blockcheck/index.html"></iframe>
			</div>
			<div v-if="$store.state.showLanguageOptions" id="JSEW-detectLanguageMask">
				<div id="JSEW-langMsg">
					<i class="fa fa-close" v-on:click="hideLangInfo"></i>
					<img src="./assets/images/logo_jse_colour.png" style="width: 240px; margin: 20px 20px 0px 20px;" alt="JSEcoin Ltd Logo" />

					<p>
						<router-link v-bind:to="`/redirect`" tag="a" class="flag_en" v-on:click.native="hideLangInfo('en')">
							Please choose a language you are most comfortable with.
						</router-link>
						<router-link v-bind:to="`/${detectedLocale}/home`" tag="a" :class="`flag_${detectedLocale}`" v-on:click.native="hideLangInfo(detectedLocale)">
							{{ $t('template.lang.para_choose') }}
						</router-link>
					</p>
					<!--<p>
						Thank you for supporting us.
					</p>-->
				</div>
			</div>
			<div id="JSEW-cookieDetection" :class="{active:showCookie}" v-if="showCookie && !$store.state.showMobileNav">
				{{ $t('template.cookies.text_overview_line1') }}
				{{ $t('template.cookies.text_overview_line2') }}

				<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="a">
					{{ $t('template.cookies.link_terms') }}
				</router-link>.
				<i class="fa fa-close" v-on:click="cookieMsgSeen"></i>
			</div>

			<div id="JSEW-mobileNavInterface">
				<button aria-label="Navigation Hamburger" class="hamburger--spin" :class="{'is-active':$store.state.showMobileNav}" v-on:click="toggleNav" type="button" id="JSEW-burger">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>
			</div>
			<div id="JSEW-mobileNav" :class="{active:$store.state.showMobileNav}">
				<div id="JSEW-mobileNavHeader" class="cf">
					<router-link id="JSEW-logoColour" v-bind:to="`/${$store.state.local}/home`" tag="a">
						<!--swap4SVG-->JSEcoin Ltd
					</router-link>
				</div>
				<nav id="JSEW-mainMobile" class="subnavx vbx" style="height:100%;">
					<div class="mobileNavScroll vb" style="top:80px;" v-bar>
						<div>
							<h4 v-on:click="toggleNavItem('company');">{{ $t('template.navigation.heading_company') }} <i class="fa fa-chevron-right"></i></h4>
							<h4 v-on:click="toggleNavItem('investors');">{{ $t('template.navigation.heading_investors') }} <i class="fa fa-chevron-right"></i></h4>
							<h4 v-on:click="toggleNavItem('webmasters');">{{ $t('template.navigation.heading_webmaster') }} <i class="fa fa-chevron-right"></i></h4>
							<h4 v-on:click="toggleNavItem('developers');">{{ $t('template.navigation.heading_developers') }} <i class="fa fa-chevron-right"></i></h4>
							<h4 v-on:click="toggleNavItem('language');"><i class="fa fa-globe" style="margin:0px;"></i> {{ $store.state.localeToNative[$store.state.local] }} <i class="fa fa-chevron-right"></i></h4>

							<div id="JSEW-mobileButtonGroup">
								<a href="https://platform.jsecoin.com/" target="_BLANK" class="button">{{ $t('template.navigation.button_platformLogin') }}</a>
								<a href="/whitepaper.pdf" target="_BLANK" class="button">{{ $t('template.navigation.button_readWhitepaper') }}</a>
							</div>
						</div>
					</div>
				</nav>
				<nav class="subnav vb" style="height:100%;" :class="{active:nav.company}">
					<h4 v-on:click="toggleNavItem('company');"><i class="fa fa-chevron-left"></i> {{ $t('template.navigation.heading_company') }}</h4>
					<div class="mobileNavScroll vb" v-bar>
						<div>
							<router-link v-bind:to="`/${$store.state.local}/about`" tag="a">
								{{ $t('template.navigation.link_about') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/about/meetTheTeam`" tag="a">
								{{ $t('template.navigation.link_team') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/about/ourVision`" tag="a">
								{{ $t('template.navigation.link_vision') }}
							</router-link>
							<router-link v-bind:to="`/blog/news`" tag="a">
								{{ $t('template.navigation.link_news') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/timeline`" tag="a">
								{{ $t('template.navigation.link_timeline') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/charity`" tag="a">
								{{ $t('template.navigation.link_charity') }}
							</router-link>
							<a href="/shop">
								Shop <i class="fa fa-external-link"></i>
							</a>
							<!--
							<router-link v-bind:to="`/${$store.state.local}/about/careers`" tag="a">
								{{ $t('template.navigation.link_careers') }}
							</router-link>-->
							<!--
							<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a">
								{{ $t('template.navigation.link_reportAbuse') }}
							</router-link>
							-->
							<router-link v-bind:to="`/${$store.state.local}/support`" tag="a">
								Support Center
							</router-link>
							<!--<a href="/forums">
								{{ $t('template.navigation.link_forums') }}
							</a>-->
							<!--<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a">
								{{ $t('template.navigation.link_contactUs') }}
							</router-link>-->
						</div>
					</div>
				</nav>
				<nav class="subnav vb" style="height:100%;" :class="{active:nav.investors}">
					<h4 v-on:click="toggleNavItem('investors');"><i class="fa fa-chevron-left"></i> {{ $t('template.navigation.heading_investors') }}</h4>
					<div class="mobileNavScroll vb" v-bar>
						<div>
							<router-link v-bind:to="`/${$store.state.local}/investors/overview`" tag="a">
								{{ $t('template.navigation.link_whyInvest') }}
							</router-link>
							<a href="/JSEcoinV2_Overview.pdf" target="_blank">
								Intro Slides <i class="fa fa-file-pdf-o"></i>
							</a>
							<a href="/onepager.pdf" target="_blank">
								{{ $t('template.navigation.link_overview') }} <i class="fa fa-file-pdf-o"></i>
							</a>
							<a href="/whitepaper.pdf" target="_blank">
								{{ $t('template.navigation.link_whitepaper') }} <i class="fa fa-file-pdf-o"></i>
							</a>
							<a href="https://jsecoin.com/pitchdeck.pdf" target="_blank">
								{{ $t('template.navigation.link_pitchdeck') }} <i class="fa fa-external-link"></i>
							</a>
							<a href="https://bitcointalk.org/index.php?topic=2398571.0" target="_BLANK">
								{{ $t('template.navigation.link_bitcoinTalkAnn') }} <i class="fa fa-external-link"></i>
							</a>
							<!--<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="a">
								{{ $t('template.navigation.link_siteStatistics') }}
							</router-link>-->
							<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="a">
								{{ $t('template.navigation.link_technicalOverview') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="a">
								{{ $t('template.navigation.link_press') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/exchanges`" tag="a">
								{{ $t('template.navigation.link_exchanges') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/environment`" tag="a">
								{{ $t('template.navigation.link_environment') }}
							</router-link>
							<!--<router-link v-bind:to="`/${$store.state.local}/whitelisting`" tag="a">
								{{ $t('template.navigation.link_whitelisting') }} <i class="fa fa-check"></i>
							</router-link>-->
						</div>
					</div>
				</nav>
				<nav class="subnav vb" style="height:100%;"  :class="{active:nav.webmasters}">
					<h4 v-on:click="toggleNavItem('webmasters');"><i class="fa fa-chevron-left"></i> {{ $t('template.navigation.heading_webmaster') }}</h4>
					<div class="mobileNavScroll vb" v-bar>
						<div>
							<router-link v-bind:to="`/${$store.state.local}/webmasters/overview`" tag="a">
								{{ $t('template.navigation.link_whySwitch') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/tools/blockchainExplorer`" tag="a">
								{{ $t('template.navigation.link_blockchainExplorer') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/tools/merchantTools`" tag="a">
								{{ $t('template.navigation.link_merchantTools') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/tools/wallet`" tag="a">
								{{ $t('template.navigation.link_JSE_Wallet') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/webmasters/integration`" tag="a">
								{{ $t('template.navigation.link_JSE_Integration') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/systemStatus`" tag="a">
								{{ $t('template.navigation.link_systemStatus') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/technical/APIS`" tag="a">
								{{ $t('template.navigation.link_API_Overview') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/technical/samples`" tag="a">
								{{ $t('template.navigation.link_sampleIntegrations') }}
							</router-link>
							<router-link v-bind:to="`/blog/code`" tag="a">
								{{ $t('template.navigation.link_publisherNews') }}
							</router-link>
							<!--<a href="/forum/webmasters/">
								{{ $t('template.navigation.link_forums') }}
							</a>-->
							<a href="https://platform.jsecoin.com/?register=1" target="_BLANK">
								{{ $t('template.navigation.link_signup') }} <i class="fa fa-external-link"></i>
							</a>
						</div>
					</div>
				</nav>
				<nav class="subnav vb" style="height:100%;"  :class="{active:nav.developers}">
					<h4 v-on:click="toggleNavItem('developers');"><i class="fa fa-chevron-left"></i> {{ $t('template.navigation.heading_developers') }}</h4>
					<div class="mobileNavScroll vb" v-bar>
						<div>
							<router-link v-bind:to="`/${$store.state.local}/developers/overview`" tag="a">
								{{ $t('template.navigation.link_ourCommitment') }}
							</router-link>
							<a href="https://developer.jsecoin.com/" target="_blank">
								{{ $t('template.navigation.link_API_Documentation') }} <i class="fa fa-external-link"></i>
							</a>
							<a href="https://github.com/jsecoin" target="_blank">
								GitHub <i class="fa fa-external-link"></i>
							</a>
							<!--<router-link v-bind:to="`/${$store.state.local}/oddJobs/smallJobs`" tag="a">
								{{ $t('template.navigation.link_oddJobs') }}
							</router-link>-->
							<router-link v-bind:to="`/${$store.state.local}/oddJobs/bugBounty`" tag="a">
								{{ $t('template.navigation.link_bugBounty') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="a">
								{{ $t('template.navigation.link_submitABug') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/downloads`" tag="a">
								{{ $t('template.navigation.link_downloads') }}
							</router-link>
							<a href="https://platform.jsecoin.com/?register=1" target="_BLANK">
								{{ $t('template.navigation.link_signup') }} <i class="fa fa-external-link"></i>
							</a>
						</div>
					</div>
				</nav>
				<nav class="subnav vb" style="height:100%;"  :class="{active:nav.language}">
					<h4 v-on:click="toggleNavItem('language');"><i class="fa fa-chevron-left"></i> <i class="fa fa-globe" style="margin:0px;"></i> {{ $store.state.localeToNative[$store.state.local] }}</h4>
					<div class="mobileNavScroll vb" v-bar>
						<div>
							<router-link v-bind:to="`/${item}${activeRoutePath}`" tag="a" v-for="item in $store.state.availablelocals" :key="item.id">
								{{ $store.state.localeToNative[item] }}
							</router-link>
						</div>
					</div>
				</nav>
			</div>
			<div id="JSEW-scrollbar"></div>

			<xHeader/>

			<div id="JSEW-mainContent">
				<router-view></router-view>
			</div>

			<footer>
				<!--<div id="JSEW-langOptions" :class="{'min':langOptMin}">
					<div class="wrapper">
						<i :class="{'fa-plus':langOptMin,'fa-minus':!langOptMin}" class="fa" v-on:click="toggleLangDisplay"></i>
						<router-link v-bind:to="`/${item}${activeRoutePath}`" tag="a" v-for="item in $store.state.availablelocals" :key="item.id">
							{{ $store.state.localeToNative[item] }}
						</router-link>
					</div>
				</div>-->
				<div id="JSEW-tokenAddressInfo">
					<div class="wrapper">
						<p>
							<b>JSECOIN ERC20 TOKEN</b>: <a href="https://etherscan.io/address/0x2d184014b5658C453443AA87c8e9C4D57285620b" target="_BLANK">0x2d184014b5658C453443AA87c8e9C4D57285620b</a>
						</p>
					</div>
				</div>
				<div id="JSEW-footerSitemap">
					<div class="wrapper">
						<div id="JSE-footerLogo">
							<img src="./assets/images/logo_jse_footer.png" width="200" alt="JSEcoin Logo" />
							<p>
								{{ $t('template.footer.privacy.text_trust') }}
							</p>
							<p>
								<router-link v-bind:to="`/${$store.state.local}/legal/privacyPolicy`" tag="a">
									{{ $t('template.footer.privacy.link_privacyPolicy') }} ›
								</router-link><br />
								<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="a">
									{{ $t('template.footer.privacy.link_terms') }} ›
								</router-link><br />
								<router-link v-bind:to="`/${$store.state.local}/legal/kycPolicy`" tag="a">
									{{ $t('template.footer.privacy.link_kyc') }} ›
								</router-link><br />
								<router-link v-bind:to="`/${$store.state.local}/legal/gdpr`" tag="a">
									GDPR ›
								</router-link>
							</p>
							<p>
								{{ $t('template.footer.privacy.text_optout') }}
							</p>
						</div>
						<nav>
							<h4>{{ $t('template.navigation.heading_company') }}</h4>
							<router-link v-bind:to="`/${$store.state.local}/about`" tag="a">
								{{ $t('template.navigation.link_about') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/about/meetTheTeam`" tag="a">
								{{ $t('template.navigation.link_team') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/about/ourVision`" tag="a">
								{{ $t('template.navigation.link_vision') }}
							</router-link>
							<router-link v-bind:to="`/blog/news`" tag="a">
								{{ $t('template.navigation.link_news') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/timeline`" tag="a">
								{{ $t('template.navigation.link_timeline') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/charity`" tag="a">
								{{ $t('template.navigation.link_charity') }}
							</router-link>
							<a href="/shop">
								Shop <i class="fa fa-external-link"></i>
							</a>
							<!--<router-link v-bind:to="`/${$store.state.local}/about/careers`" tag="a">
								{{ $t('template.navigation.link_careers') }}
							</router-link>-->
							<!--<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a">
								{{ $t('template.navigation.link_reportAbuse') }}
							</router-link>-->
							<router-link v-bind:to="`/${$store.state.local}/support`" tag="a">
								Support Center
							</router-link>
							<!--<a href="/forums">
								{{ $t('template.navigation.link_forums') }}
							</a>-->
							<!--<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a">
								{{ $t('template.navigation.link_contactUs') }}
							</router-link>-->
						</nav>
						<nav>
							<h4>{{ $t('template.navigation.heading_investors') }}</h4>
							<!--
							<a href="/JSEcoinV2_Overview.pdf" target="_blank">
								Intro Slides <i class="fa fa-file-pdf-o"></i>
							</a>
							-->
							<a href="/onepager.pdf" target="_blank">
								{{ $t('template.navigation.link_overview') }} <i class="fa fa-file-pdf-o"></i>
							</a>
							<a href="/whitepaper.pdf" target="_blank">
								{{ $t('template.navigation.link_whitepaper') }} <i class="fa fa-file-pdf-o"></i>
							</a>
							<a href="https://jsecoin.com/pitchdeck.pdf" target="_blank">
								{{ $t('template.navigation.link_pitchdeck') }} <i class="fa fa-external-link"></i>
							</a>
							<a href="https://bitcointalk.org/index.php?topic=2398571.0" target="_BLANK">
								{{ $t('template.navigation.link_bitcoinTalkAnn') }} <i class="fa fa-external-link"></i>
							</a>
							<!--<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="a">
								{{ $t('template.navigation.link_siteStatistics') }}
							</router-link>-->
							<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="a">
								{{ $t('template.navigation.link_technicalOverview') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="a">
								{{ $t('template.navigation.link_press') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/exchanges`" tag="a">
								{{ $t('template.navigation.link_exchanges') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/environment`" tag="a">
								{{ $t('template.navigation.link_environment') }}
							</router-link>
							<!--<router-link v-bind:to="`/${$store.state.local}/whitelisting`" tag="a">
								{{ $t('template.navigation.link_whitelisting') }} <i class="fa fa-check"></i>
							</router-link>-->
						</nav>
						<nav>
							<h4>{{ $t('template.navigation.heading_webmaster') }}</h4>
							<router-link v-bind:to="`/${$store.state.local}/tools/blockchainExplorer`" tag="a">
								{{ $t('template.navigation.link_blockchainExplorer') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/tools/merchantTools`" tag="a">
								{{ $t('template.navigation.link_merchantTools') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/tools/wallet`" tag="a">
								{{ $t('template.navigation.link_JSE_Wallet') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/webmasters/integration`" tag="a">
								{{ $t('template.navigation.link_JSE_Integration') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/systemStatus`" tag="a">
								{{ $t('template.navigation.link_systemStatus') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/technical/APIS`" tag="a">
								{{ $t('template.navigation.link_API_Overview') }}
							</router-link>
							<a href="https://developer.jsecoin.com/samples" target="_BLANK">
								{{ $t('template.navigation.link_sampleIntegrations') }}
							</a>
							<a href="https://platform.jsecoin.com/?register=1" target="_BLANK">
								{{ $t('template.navigation.link_signup') }} <i class="fa fa-external-link"></i>
							</a>
						</nav>
						<nav>
							<h4>{{ $t('template.navigation.heading_developers') }}</h4>
							<a href="https://developer.jsecoin.com/" target="_blank">
								{{ $t('template.navigation.link_API_Documentation') }} <i class="fa fa-external-link"></i>
							</a>
							<a href="https://github.com/jsecoin" target="_blank">
								GitHub <i class="fa fa-external-link"></i>
							</a>
							<!--<router-link v-bind:to="`/${$store.state.local}/oddJobs/smallJobs`" tag="a">
								{{ $t('template.navigation.link_oddJobs') }}
							</router-link>-->
							<router-link v-bind:to="`/${$store.state.local}/oddJobs/bugBounty`" tag="a">
								{{ $t('template.navigation.link_bugBounty') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="a">
								{{ $t('template.navigation.link_submitABug') }}
							</router-link>
							<router-link v-bind:to="`/${$store.state.local}/downloads`" tag="a">
								{{ $t('template.navigation.link_downloads') }}
							</router-link>
							<a href="https://platform.jsecoin.com/?register=1" target="_BLANK">
								{{ $t('template.navigation.link_signup') }} <i class="fa fa-external-link"></i>
							</a>
						</nav>
					</div>
				</div>

				<div id="JSEW-footerInfo">
					<div class="wrapper">
						<div id="JSEW-footerNewsletter">
							<h4>{{ $t('template.footer.info.heading_newsletterSignup') }}</h4>
							<form id="JSEW-footerNewsletterForm" @submit.prevent="onSubmit" :class="{error:!form.emailAddress.valid}">
								<input type="email" :placeholder="$t('template.footer.info.placeholder_emailInput')" v-model="form.emailAddress.val" @blur="checkEmail"  @keyup="checkEmail"/>
								<button type="submit">{{ $t('template.footer.info.button_signup') }}</button>
							</form>
						</div>
						<div id="JSEW-mentioned">
							<h4>{{ $t('template.footer.info.heading_mentioned') }}</h4>
							<h5>{{ $t('template.footer.info.subheading_mentioned') }}</h5>

							<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="a">
								<img src="./assets/images/mentioned.png" :alt="$t('template.footer.info.alt_logos')" />
							</router-link>
						</div>
					</div>
				</div>


				<div id="JSEW-footerCompanyInfoBar" class="cf">
					<div class="wrapper">
						<p id="JSEW-footerCompanyInfo">
							{{ $t('template.footer.companyInfo.text_registered') }}
						</p>

						<p id="JSEW-officeAddress">
							<i class="fa fa-globe"></i> {{ $t('template.footer.companyInfo.text_address') }}
						</p>
					</div>
				</div>

				<div id="JSEW-footerPrivacy" class="cf">
					<div class="wrapper">
						<router-link v-bind:to="`/${$store.state.local}/legal/privacyPolicy`" tag="a">
							{{ $t('template.footer.privacy.link_privacyPolicy') }} ›
						</router-link><br />
						<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="a">
							{{ $t('template.footer.privacy.link_terms') }} ›
						</router-link><br />
						<router-link v-bind:to="`/${$store.state.local}/legal/kycPolicy`" tag="a">
							{{ $t('template.footer.privacy.link_kyc') }} ›
						</router-link><br />
						<router-link v-bind:to="`/${$store.state.local}/legal/gdpr`" tag="a">
							GDPR ›
						</router-link>
					</div>
				</div>

				<div id="JSEW-copy" class="cf">
					<div class="wrapper">
						<div id="JSEW-copyInfo">
							Copyright 2017 - <span id="copyright-this-year"></span>
							<router-link v-bind:to="`/${$store.state.local}/home`" tag="a">
								JSEcoin Ltd
							</router-link> ~ {{ $t('template.footer.copy.text_rightsReserved') }}
						</div>
						<div id="JSEW-socialLinks">
							<a target="_blank" href="https://twitter.com/jsecoin" title="twitter"><i class="fa fa-twitter"></i></a>
							<a target="_blank" href="https://www.facebook.com/officialjsecoin" title="facebook"><i class="fa fa-facebook"></i></a>
							<a target="_blank" href="https://t.me/jsetelegram" title="Telegam"><i class="fa fa-telegram"></i></a>
							<a target="_blank" href="https://discord.gg/3gBZsA4" title="Discord"><i class="fa fa-discord"></i></a>
							<a target="_blank" href="https://bitcointalk.org/index.php?topic=2398571.0" title="BitcoinTalk"><i class="fa fa-bitcoin"></i></a>
							<a target="_blank" href="https://www.reddit.com/r/JSEcoin_Official/" title="Reddit"><i class="fa fa-reddit-alien"></i></a>
							<!-- <a target="_blank" href="https://medium.com/@jsecoin/" title="Medium"><i class="fa fa-medium"></i></a> -->
							<a target="_blank" href="https://www.youtube.com/channel/UCHtIF9KggJn9TDzr8pRYsYA" title="YouTube"><i class="fa fa-youtube-play"></i></a>
							<a target="_blank" href="https://www.linkedin.com/company/25048028/" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
						</div>
					</div>
				</div>
			</footer>
		</div>

		<!--<router-link v-bind:to="`/${$store.state.local}/ico`" tag="button" id="JSEW-ICOAlert" :class="{'active': showICOBadge}">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" style="white-space: preserve-spaces; display:block; position:absolute; top:0px; width: 60px; margin: 50%; left: -30px; top: -26px;">
				<g id="JSEA-rotatingLogo2" :class="{'active': animateBadge}" filter="none" transform="translate(498,507) translate(-445.503,-500.996)" style="fill: #00b1f4;">
					<path id="JSEA-layer1" d="M56.3,556L55.8,704.3C55.9,735.5,72.7,764.5,99.6,780.2L229.3,854.5C256,869.7,289,869.8,316.1,854.7L446.7,779.3C473.6,763.8,490.5,734.9,490.4,703.8L490.9,555.5C490.8,524.3,474,495.3,447.1,479.6L317.4,405.3C290.7,390.1,257.7,390,230.6,405.1L100,480.4C73.1,495.9,56.2,524.8,56.3,556ZM273.3,470L411.9,550.8L411.8,709.9L273.9,789.5L136,710L135.3,549.6L273.3,470Z" transform="translate(-55.8,-0.0372215)" style=""/>
					<path id="JSEA-layer2" d="M510.2,556.3L509.7,704.6C509.8,735.8,526.6,764.8,553.5,780.5L683.2,854.8C709.9,870,742.9,870.1,770,855L900.6,779.6C927.5,764.1,944.4,735.2,944.3,704.1L944.8,555.8C944.7,524.6,927.9,495.6,901,479.9L771.3,405.6C744.6,390.4,711.6,390.3,684.5,405.4L553.9,480.8C527.1,496.3,510.2,525.1,510.2,556.3ZM727.2,470.4L865.8,551.2L865.7,710.3L727.8,789.9L590,710.4L589.3,550L727.2,470.4Z" transform="translate(-55.8,-0.0372215)" style=""/>
					<path id="JSEA-layer3" d="M283,162.2L282.5,310.5C282.6,341.7,299.4,370.7,326.3,386.4L456,460.7C482.7,475.9,515.7,476,542.8,460.9L673.4,385.5C700.3,370,717.2,341.1,717.1,310L717.6,161.7C717.5,130.5,700.7,101.5,673.8,85.8L544.1,11.5C517.4,-3.7,484.4,-3.8,457.3,11.3L326.7,86.7C299.8,102.2,282.9,131,283,162.2ZM499.9,76.3L638.5,157L638.4,316.1L500.5,395.7L362.7,316.2L362,155.9L499.9,76.3Z" transform="translate(-55.8,-0.0372215)" style=""/>
					<g transform="translate(-55.8,-0.0372215)">
						<g>
							<path d="M585.3,817.8C529.4,832.6,470.5,832.6,414.6,817.7C407,815.7,398,820.2,396.1,828.2C394.3,836.1,398.5,844.5,406.6,846.7C467.5,862.9,532.3,862.9,593.2,846.8C601,844.7,605.8,836.1,603.7,828.3C601.6,820.4,593.2,815.8,585.3,817.8L585.3,817.8Z"/>
						</g>
					</g>
					<g transform="translate(-55.8,-0.0372215)">
						<g>
							<path d="M181.1,413.6C196.2,357.5,225.7,306.7,266.6,265.6C272.3,259.9,272.3,250.1,266.6,244.4C260.9,238.7,251.1,238.6,245.4,244.4C201,289,168.5,344.8,152.2,405.6C150.2,413.2,154.7,422.2,162.7,424.1C170.5,425.9,178.9,421.7,181.1,413.6L181.1,413.6Z"/>
						</g>
					</g>
					<g transform="translate(-55.8,-0.0372215)">
						<g>
							<path d="M733.4,265.5C774.4,306.6,803.8,357.4,818.9,413.5C821,421.3,829.6,426.1,837.4,424C845.3,421.8,850,413.4,847.9,405.5C831.5,344.7,799.1,288.8,754.6,244.2C748.9,238.5,739.1,238.5,733.4,244.2C727.6,250.1,727.6,259.8,733.4,265.5L733.4,265.5Z"/>
						</g>
					</g>
				</g>
			</svg>
			<div class="txtOverlay">ICO LAUNCH</div>
			<div id="JSEW-ICOButton" :class="{'active': showICOButton}">BUY JSE</div>
		</router-link>-->

	</div>
</template>

<script>
import axios from 'axios';
import xHeader from './components/tpl/header';

export default {
	name: 'websiteCore',
	metaInfo () {
		//GOOGLE STRUCTURED SEARCH
		//logo
		const sCorp = {
			'@context': 'http://schema.org',
			'@type': 'Organization',
			name: 'JSEcoin Ltd',
			url: 'https://www.jsecoin.com',
			logo: 'https://www.jsecoin.com/static/images/search_logo.png',
			address: {
				'@type': 'PostalAddress',
				addressRegion: 'Cambridgeshire',
				addressCountry: 'United Kingdom',
			},
			sameAs: [
				'https://twitter.com/jsecoin',
				'https://www.youtube.com/channel/UCHtIF9KggJn9TDzr8pRYsYA',
				'https://www.facebook.com/JSEcoin-494968414186643/',
				'https://www.linkedin.com/company/25048028/',
				'https://www.reddit.com/r/JSEcoin_Official/',
				'https://t.me/jsetelegram',
				'https://discord.gg/3gBZsA4',
				'https://medium.com/@jsecoin/',
			],
		};
		let route = this.$route.path.replace('/'+this.$route.params.lang,'');
		if (route.length <= 3) {
			route = '/home';
		}
		this.activeRoutePath = route;
		//this.showICOBadge = (this.activeRoutePath !== '/ico');

		//console.log((!this.showICOBadge), (this.activeRoutePath !== '/ico'));
		if ((!this.showICOBadge) && (!this.$route.meta.hideICOButton)) {
			//enable JSEcoin BUY Badge
			setTimeout(() => {
				this.showICOBadge = true;
				setTimeout(() => {
					this.showICOButton = true;
				}, 2000);
			}, 3000);
		} else if (this.activeRoutePath === '/ico') {
			this.showICOBadge = false;
		}

		const aLink 	= [
							{
								vmid: 'canonical',
								rel: 'canonical',
								href: `https://jsecoin.com${this.$route.path}`,
							},
						];

		this.$store.state.availablelocals.forEach(function(countryCode) {
			aLink.push({
				rel: 'alternate',
				vmid: countryCode,
				hreflang: countryCode,
				href: `https://jsecoin.com/${countryCode}${route}`,
			});
		});

		return {
			title: this.$t('template.meta.title') + this.$route.meta.unicode,
			titleTemplate: 'JSEcoin | %s',
			htmlAttrs: {
				lang: this.$store.state.local,
				//amp: undefined,
			},
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('template.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('template.meta.keywords'),
				},
			],
			link: aLink,
			script: [
				{
					innerHTML: JSON.stringify(sCorp),
					type: 'application/ld+json',
				},
			],
		};
    },
	components: { xHeader },
	data() {
		return {
			showICOBadge: false,
			showICOButton: false,
			animateBadge: false,
			nav: {
				company: false,
				investors: false,
				webmasters: false,
				developers: false,
				language: false,
			},
			displayAdblockInstructions: false,
			adblockEnabled: false,
			enableResponsive: false,
			showCookie: false,
			form: {
				emailAddress: {
					val: '',
					valid: true,
				},
				error: {
					msg: '',
					display: false,
				},
			},
			status: {
				displayForm: true,
				submittingForm: false,
				submittedForm: false,
				error: false,
			},
			detectedLocale: 'en',
			activeLanguage: 'English',
			langOptMin: true,
			//showLanguageOptions: false,
		};
	},
	created() {
		const self = this;
		const lang = navigator.language.split('-')[0];
		self.detectedLocale = lang;

		/*
		if (localStorage.getItem('selectedLocale') === null) {
			if ((lang !== this.$store.state.local) && (this.$store.state.local.indexOf(lang) >= 0)) {
				this.$store.state.showLanguageOptions = true;
			}
		}
		*/

		//show cookie if undefined in localstorage
		//setTimeout(function() {
			self.showCookie = (localStorage.getItem('showCookie') === null);
		//}, 500);

		//if user shows adblock removal instructions on clicking close from iframe
		//will trigger this.
		window.addEventListener('message', function(e) {
			if (e.data.action === 'sp.complete') {
				self.displayAdblockInstructions = false;
				localStorage.setItem('adblockEnabled',false);
				window.location = window.location.href;
			}
		}, false);

		//console.log(this);
		//console.log(lang);
		//this.$parent.$options.methods.fetchLanguage(lang);
	},
	mounted() {
		const self = this;

		//animate badge - every 5 seconds
		if (document.querySelector('#JSEA-rotatingLogo2') !== null) {
			document.querySelector('#JSEA-rotatingLogo2').addEventListener('animationend', function() {
				//console.log('Animation finished');
				self.animateBadge = false;
				setTimeout(() => {
					self.animateBadge = true;
				}, 5000);
			}, false);
			setTimeout(() => {
				self.animateBadge = true;
			}, 8000);
		}

		//disable scrollbar if mobile
		if ((typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
			//this.$vuebar.destroyScrollbar(document.getElementById('JSEW-website'));
		}
		//console.log(this.$store.state);
		//alert(window.navigator.userAgent);
		if ((window.navigator.userAgent.indexOf('MSIE ') === -1) && (window.navigator.userAgent.indexOf('Trident/') === -1)) {
			this.enableResponsive = true;
		}

		// Google Optimize
		if (typeof ga === 'function')  {
			ga('require', 'GTM-K2LG6JN');
		} else {
			console.log('Google Analytics Not Available');
		}

		//JSEcoin Miner
		/*
		if ((document.getElementById('JSEW-coincode') === null) && (location.href.indexOf('localhost') === -1)) {
			const t = document.createElement('script');
			const s = document.getElementsByTagName('script')[0];

			//script attrs
			t.async = true;
			t.defer = true;
			t.id = 'JSEW-coincode';
			t.src = 'https://load.jsecoin.com/load/2895/jsecoin.com/jsecoinMainSite/0/'; // charity account

			//inject
			s.parentNode.insertBefore(t, s);
		}*/

		//detect if adblocker
		/*
		const testURL = 'https://load.jsecoin.com/load/';//'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';//

		const myInit = {
			method: 'HEAD',
			mode: 'no-cors',
		};
		setTimeout(function() {
			if ((localStorage.getItem('adblockEnabled') === null) && (window.fetch)) {
				const myRequest = new Request(testURL, myInit);

				fetch(myRequest).then(function(response) {
					return response;
				}).then(function(response) {
					//console.log(response);
					self.adblockEnabled = false;
				}).catch(function(e){
					//console.log(e);
					self.adblockEnabled = true;
				});
			}
		}, 1000);
		*/
		document.getElementById('copyright-this-year').innerHTML = new Date().getFullYear();
	},
	methods: {
		icoBadge() {
			const self = this;
			self.$router.push('ico');
		},
		toggleLangDisplay() {
			this.langOptMin = !this.langOptMin;
		},
		showDisableAd() {
			this.adblockEnabled = false;
			this.displayAdblockInstructions = true;
			//
			localStorage.setItem('adblockEnabled',false);
		},
		hideAdBlockInfo() {
			this.adblockEnabled = false;
			//
			localStorage.setItem('adblockEnabled',false);
		},
		hideLangInfo(locale) {
			this.$store.state.showLanguageOptions = false;
			//
			localStorage.setItem('showLanguageOptions',false);
			if (locale) {
				localStorage.setItem('selectedLocale',locale);
			}
		},
		//update transaction display
		toggleNav(x) {
			//console.log(this.$store.state.showMobileNav);
			this.$store.state.showMobileNav = !this.$store.state.showMobileNav;
		},
		cookieMsgSeen() {
			localStorage.setItem('showCookie',false);
			this.showCookie = false;
		},
		checkEmail() {
			if (this.form.emailAddress.val.length > 0) {
				this.form.emailAddress.valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.form.emailAddress.val);
			} else {
				this.form.emailAddress.valid = true;
			}
		},
		onSubmit() {
			//console.log('trying to submit');
			const self = this;
			let checkRequiredFields = true;

			//check email valid
			if (!this.form.emailAddress.valid) {
				checkRequiredFields = false;
			}

			if (checkRequiredFields) {
				this.status.submittingForm = true;
				window.open('https://platform.jsecoin.com/?register=1&email='+self.form.emailAddress.val, '_blank');
				win.focus();
			}
		},
		toggleNavItem(navItem) {
			//console.log(navItem);
			this.nav[navItem] = !this.nav[navItem];
			//console.log(this.nav[navItem]);
		},
	},
};
</script>

<style>
@import 'assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
@import url('https://fonts.googleapis.com/css?family=Nunito');
@keyframes a0_t { 0% { transform: translate(498px,507px) rotate(0deg) translate(-445.503px,-500.996px); } 22.2222% { transform: translate(498px,507px) rotate(0deg) translate(-445.503px,-500.996px); animation-timing-function: cubic-bezier(0.44,0,0.19,1.515); } 30.5555% { transform: translate(498px,507px) rotate(120deg) translate(-445.503px,-500.996px); } 55.5555% { transform: translate(498px,507px) rotate(120deg) translate(-445.503px,-500.996px); animation-timing-function: cubic-bezier(0.44,0,0.19,1.515); } 63.8888% { transform: translate(498px,507px) rotate(240deg) translate(-445.503px,-500.996px); } 88.8888% { transform: translate(498px,507px) rotate(240deg) translate(-445.503px,-500.996px); animation-timing-function: cubic-bezier(0.44,0,0.19,1.515); } 97.2222% { transform: translate(498px,507px) rotate(360deg) translate(-445.503px,-500.996px); } 100% { transform: translate(498px,507px) rotate(360deg) translate(-445.503px,-500.996px); } }
@keyframes a1_t { 0% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 5.5555% { transform: translate(38.503px,177.996004px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 11.1111% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 38.8888% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 44.4444% { transform: translate(38.503px,177.996px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 50% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 77.7777% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 83.3333% { transform: translate(38.503px,177.996px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 88.8888% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 100% { transform: translate(-55.8px,-0.037221px) scale(1,1); } }
@keyframes a2_t { 0% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 11.1111% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 16.6666% { transform: translate(155.500967px,182.995999px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 22.2222% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 33.3333% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 38.8888% { transform: translate(155.501px,182.996px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 44.4444% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 72.2222% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 77.7777% { transform: translate(155.501px,182.996px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 83.3333% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 100% { transform: translate(-55.8px,-0.037221px) scale(1,1); } }
@keyframes a3_t { 0% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 5.5555% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 11.1111% { transform: translate(95.926907px,82.995999px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 16.6666% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 44.4444% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 50% { transform: translate(95.9269px,82.996px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 55.5555% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 66.6666% { transform: translate(-55.8px,-0.037221px) scale(1,1); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 72.2222% { transform: translate(95.9269px,82.996px) scale(0.7,0.7); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 77.7777% { transform: translate(-55.8px,-0.037221px) scale(1,1); } 100% { transform: translate(-55.8px,-0.037221px) scale(1,1); } }


#JSEA-rotatingLogo2.active {
	animation: a0_t 3.6s linear forwards;
}

#JSEA-rotatingLogo2.active #JSEA-layer1 {
	animation: a1_t 3.6s linear forwards;
}

#JSEA-rotatingLogo2.active #JSEA-layer2 {
	animation: a2_t 3.6s linear forwards;
}

#JSEA-rotatingLogo2.active #JSEA-layer3 {
	animation: a3_t 3.6s linear forwards;
}


#JSEA-rotatingLogo3.active {
	animation: a0_t 3.6s linear infinite both;
}

#JSEA-rotatingLogo3.active #JSEA-layer1 {
	animation: a1_t 3.6s linear infinite both;
}

#JSEA-rotatingLogo3.active #JSEA-layer2 {
	animation: a2_t 3.6s linear infinite both;
}

#JSEA-rotatingLogo3.active #JSEA-layer3 {
	animation: a3_t 3.6s linear infinite both;
}
#JSEA-rotatingLogo {
	position: absolute;
	top:0px;
	left:0px;
	right:0px;
	bottom:0px;
	background-image:url("assets/ico/logo_animation.svg");
	background-repeat: no-repeat;
	background-size: 60px;
    background-position: center 24px;
	color: white;
	fill: white;
}

#JSEW-ICOAlert,
#JSEW-ICOLoadingAnimation {
	background-color: transparent;
	background-image:url("assets/ico/ICO_alert.png");
	background-repeat: no-repeat;
	background-size: contain;
	position: fixed;
	bottom:-200px;
	right:40px;
	width:100px;
	height:155px;
	z-index:100;
	transition: bottom 0.4s;
	padding:0px;
}
#JSEW-ICOAlert.active {
	bottom:20px;
}

#JSEW-ICOAlert .txtOverlay {
	position: absolute;
	bottom: 29px;
	left:0px;
	right:0px;
	color:#fff;
	text-align: center;
	font-weight:bold;
	font-size:0.7em;
	letter-spacing:1px;
}


#JSEW-ICOButton {
	position: absolute;
	bottom:0px;
	left:0px;
	right:1px;
	border-radius: 4px;
	color: #fff;
	text-align:center;
	background: #106ce1;
	font-weight:bold;
	font-size:0.7em;
	letter-spacing:1px;
	padding:4px 8px;
	box-shadow:0px 1px 0px 0px rgba(0,0,0,0.2);
	opacity:0;
	transition: opacity 0.4s, bottom 0.2s;
}
#JSEW-ICOAlert #JSEW-ICOButton.active  {
	opacity:1;
}

#JSEW-ICOAlert:hover #JSEW-ICOButton.active {
	bottom: 23px;
}
body {
	margin: 0px;
	padding:0px;
	background: #fff;
	font-size: 16px;
	font-family: 'Nunito', 'calibri', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

p {
	font-size:0.875em;
	line-height: 1.6;
	padding: 0px 20px;
}

.infoMsg {
	padding: 8px 14px;
    margin-bottom: 20px;
    text-shadow: 0 1px 0 rgba(255,255,255,0.5);
    background-color: #fcf8e3;
    border: 1px solid #fbeed5;
    border-radius: 4px;
	display: inline-block;
}
p .infoMsg {
	margin:0px;
}

.fa-discord {
	background-image:url("assets/svg/discord.svg");
	background-size:contain;
	background-repeat: no-repeat;
	width:15px;
	height:15px;
	margin-bottom:-2px !important;
}

.fa-discord:hover {
	background-image:url("assets/svg/discord_white.svg");
}
.mobileNavScroll {
	position: absolute !important;
	top: 142px;
	left: 0px;
	right: 0px;
	bottom:0px;
}
.mobileNavScroll .vb-content > a:first-child {
	margin-top:16px;
}

.mobileNavScroll.vb > .vb-dragger {
	position: absolute !important;
}

#JSEW-detectAdblockMask,
#JSEW-detectLanguageMask {
	display: block;
    position: fixed;
    z-index: 10000;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}
#JSEW-detectAdblockMask iframe {
	position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    border: 0px;
}
#JSEW-adBlockMsg,
#JSEW-langMsg {
    width: 50%;
    height: 50%;
    max-width: 650px;
    max-height: 304px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    position: fixed;
    margin: auto;
	border:solid 8px #eee;
	background:#f4f4f4;
	padding-bottom:64px;
}
#JSEW-adBlockMsg i,
#JSEW-langMsg i {
	position: absolute;
	top:10px;
	right:10px;
	color:#333;
	cursor: pointer;
}
#JSEW-adBlockMsg b {
	font-weight: bold;
	font-size:1.2em;
}

#JSEW-langMsg a {
    background-color: #fff;
	border-radius: 16px;
	padding:16px 16px 16px 80px;
	margin:10px 0px;
	display: block;
	min-height:40px;
	color:#333;
	background-repeat: no-repeat;
	background-size: 60px;
	background-position: 10px center;
}

#JSEW-langMsg a:hover  {
    color:#fff;
    background-color: #2c6eae;
}

#JSEW-langMsg .flag_en {
	background-image:url("assets/images/flag_en.png");
}

#JSEW-langMsg a.flag_en:hover  {
	background-image:url("assets/images/flag_en.png");
}
#JSEW-langMsg .flag_fr {
	background-image:url("assets/images/flag_fr.png");
}

#JSEW-langMsg a.flag_fr:hover  {
	background-image:url("assets/images/flag_fr.png");
}

#JSEW-mobileNav {
	background: #fff;
	position: absolute;
	top:0px;
	bottom:0px;
	left: 0px;
	right:0px;
    z-index: 1000000;
	display: none;
	overflow: hidden;
	text-transform: uppercase;
}

#JSEW-mobileButtonGroup .button {
	text-align:center;
	margin:20px 10%;
}

#JSEW-mobileNav.active {
	display: block;
}
#JSEW-mobileNavInterface {
	position: relative;
	display:none;
}
#JSEW-mobileNav nav.subnav {
	position: absolute !important;
	background:#fff;
	top:0px;
	left: -100%;
	right: 0px;
	bottom:0px;
	width:100%;
	transition: left 0.2s;
    z-index: 100000;
	/*border-right:solid 4px #eee;*/
}
#JSEW-mobileNavHeader {
	border-bottom:solid 6px #d4e3ea;
	position: relative;
	z-index:1000000;
	background:#fff;
	/*box-shadow:0px 2px 0px 0px rgba(23,143,235,0.5);*/
}
#JSEW-mobileNav nav.subnav.vb > .vb-dragger {
	position: absolute !important;
}
#JSEW-mobileNav nav.subnav a {
	display:block;
	padding:10px 52px;
	text-transform:none;
	color:#164677;
}

#JSEW-mobileNav nav.subnav.active {
	left:0px;
}

#JSEW-mobileNav #JSEW-mainMobile  {
	display: block;
}
#JSEW-mobileNav nav.subnav h4 {
	margin-top:80px;
}
#JSEW-mobileNav nav h4 {
	/*font-size:1.2em;*/
	padding:20px;
	color:#164677;
    background-color: rgba(0,0,0,.03);
    margin: 0px;
    border-bottom: solid 1px #eeee;
	cursor: pointer;
}

#JSEW-mobileNav nav h4 i {
	margin-left:15px;
}
#JSEW-mobileNav nav.subnav h4 i {
	margin-right:15px;
	margin-left:0px;
}

#JSEW-logoColour {
	background-image:url("assets/images/logo_jse_colour.png");
	background-repeat: no-repeat;
    background-size: contain;
    width: 162px;
    height: 34px;
    display: block;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
	overflow: hidden;
	text-indent:-9999px;
}

.heading,
.subheading,
.subHeading {
	padding: 0px 20px;
}

.subsubHeading {
	padding:0px 20px;
	margin:0px 0px 10px;
	font-size:0.8em;
}

a {
	text-decoration: none;
	color:#0168bb;
	/*font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;*/
	font-family: 'Nunito', 'calibri', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
* {
	outline:none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.centerFlex {
	display: flex;
	flex-direction: column;
	align-items: center;
}

#JSEW-mainContent {
	min-height:350px;
}
#JSEW-cookieDetection {
	display:none;
	position: relative;
	background:#0f365a;
	padding:10px 58px 10px 90px;
	border-bottom:solid 6px #0c2d4e;
	color:#b7c0ca;
	box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.5);
    z-index: 1000;
	text-align: center
}

#JSEW-cookieDetection.active {
	display:block;
}
#JSEW-cookie {
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	top:0px;
	left:0px;
	width:70px;
	height:120px;
	z-index:100;
}
#JSEW-cookieDetection i {
	font-size:1.6em;
	position: absolute;
	top:5px;
	right:20px;
	cursor: pointer;
	width: 30px;
	height: 30px;
	border-radius: 8px;
	color: #fff;
	text-align: center;
	line-height: 30px;
}

#JSEW-scrollbar {
	background: rgba(0,0,0,0.2);
    width: 12px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    position: fixed;
    z-index: 100000;
}
#JSEW-website {
	min-width: 1000px;
    position: absolute !important;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}

#JSEW-communityLinks {
	margin:20px 0px;
	padding:0px;
	display:flex;
}

#JSEW-communityLinks li {
	list-style:none;
	margin:5px;
}

#JSEW-communityLinks li img {
	width:100px;
}
#JSEW-copy {
	padding:16px 0px;
	color:#a1b1bc;
}
#JSEW-copyInfo {
	float: left;
	margin-left:10px;
	margin-right:10px;
}

#JSE-footerLogo p {
	line-height:1.4em;
}

#JSEW-footerNewsletterForm {
	display: flex;
	flex-direction:column;
    padding: 12px;
    border-radius: 8px;
    max-width: 260px;
	width:100%;
    margin: 0px auto 10px;
	background:#32333a;
}

#JSEW-footerNewsletterForm input {
    border-radius: 4px;
    padding: 8px 10px;
    color: #555;
	margin-bottom:8px;
}

#JSEW-footerNewsletterForm button {
	background: linear-gradient(#727272, #5d5d5d);
    box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.05);
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    padding: 8px 10px;
}

#JSEW-footerNewsletterForm button:hover {
	background: #5d5d5d;
}
.button.invert {
	background:#fff;
	color:#103764;
	bottom: 30px;
    position: absolute;
    left: 50%;
	width:100px;
	border:0px;
    padding: 8px 16px;
    border: 0px;
    border-radius: 3px;
	font-weight:700;
	margin-left:-50px;
}

.button.invert:hover {
	background:#fafafa;
	color:#323232;
}

#JSEW-socialLinks {
	float: right;
	margin: 0px 20px;
	text-align: center;
}

#JSEW-socialLinks i {
	margin: 0px 4px;
	font-size: 1.4em;
}

#JSEW-socialLinks i:hover {
	color: #fff;
}

#JSEW-copy a {
	color:#cbcbcb;
}
#JSEW-copy a:hover {
	color:#fff;
}
#JSEW-mentioned {
	flex-grow:1;
}

#JSEW-footerInfo .wrapper {
	display: flex;
	text-align: center;
}

#JSEW-footerInfo h4 {
	color:#a3a3a4;
	margin:0px;
}

#JSEW-footerInfo h5 {
	color:#a3a3a4;
	margin:0px 0px 8px 0px;
}

#JSEW-footerNewsletter {
	width: 285px;
	border-right:solid 5px #0a0a0f;
	padding-right:30px;
	padding-left:20px;
}

#JSEW-footerNewsletter h4 {
	margin-bottom:16px;
}

#JSEW-footerInfo {
	background:#0e0f16;
	padding:20px 0px 10px;
}

#JSEW-footerCompanyInfoBar {
	background: #0c0c14;
	color:#a1b1bc;
	padding:16px 0px;
	font-size:0.9em;
}
#JSEW-officeAddress {
	float:right;
	margin:0px;
}

#JSEW-officeAddress i {
	color: #fff;
	display: inline-block;
	margin-right:4px;
	font-size:1.2em;
}

#JSEW-footerCompanyInfo {
	padding-left:30px;
	background-image:url("assets/images/ico_ukFlag.png");
	background-repeat: no-repeat;
	background-size: 20px;
	background-position: 0px 0px;
	float:left;
	margin:0px 10px;
}

#JSEW-copy {
	font-size:0.875em;
	background: #222533;
}

#JSEW-footerSitemap {
	padding:30px 0px;
	background: #1a1c27;
}
#JSEW-footerSitemap .wrapper {
	display: flex;
	justify-content:space-between;
}

#JSE-footerLogo {
	color:#a1b1bc;
	width:260px;
	margin-right: 60px;
}
#JSE-footerLogo {
	text-align:justify;
}
#JSE-footerLogo img {
	margin-left:20px;
}

#JSE-footerLogo a {
	color:#029bd8;
}

#JSE-footerLogo a:hover {
	color:#2eb2e8;
}

#JSEW-footerSitemap nav {
	flex-grow: 1;
}
#JSEW-footerSitemap nav h4 {
	color:#a3a3a4;
	font-size:1.2em;
	margin:0px 0px 8px 0px;
}
#JSEW-footerSitemap nav a {
	display: block;
	color:#a1b1bc;
	padding:4px 0px;
}

#JSEW-footerSitemap nav a:hover {
	color:#bacfdc;
}
#particles-js {
	position: absolute;
	top:0px;
	left: 0px;
	bottom:0px;
	right:0px;
	z-index:1;
}

button {
	cursor: pointer;
	border: 0px;
	font-size:1em;
}
input {
	border:0px;
}
.cf:before,
.cf:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.cf:after {
    clear: both;
}
header.minHead {
	height:220px;
	background-color: #000;
	position: relative;
	border-bottom:solid 16px #fafafa;
	color:#fff;
	padding:0px;
	overflow: hidden;
}

header.mainHead {
	overflow: hidden;
	height: 392px;
	background-color: #1e5d9e;
	background-image:url("assets/images/header_bg.png");
	background-repeat: repeat-x;
	background-size: 378px 100%;
	padding:0px;
	position: relative;
	border-bottom:solid 16px #fafafa;
	color:#fff;
}

#JSEW-whyJSEPanel {
	position: absolute;
	top:392px;
	height: 392px;
	transition: top 0.4s;
	left: 0px;
	right:0px;
	background:#164677;
	z-index:10000;
}

#JSEW-whyJSEPanel.activePanel {
	top:0px;
}


header a {
	color:#fff;
}

#JSEW-carousel {
	position: absolute;
	top:0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
}
/*.carousel2 #JSEW-carouselItems {
	margin: 6px auto 0px;
}*/
#JSEW-carouselItems {
	margin:15px auto 0px;
	padding:0px;
	display: flex;
	max-width: 400px;
	width:100%;
}
#JSEW-carouselItems li {
	background: #164677;
	height: 8px;
	border-radius: 2px;
	flex-grow: 1;
	list-style: none;
	margin:5px;
	cursor: pointer;
}
.carousel2 #JSEW-carouselItems li {
	background: #000;
}

#JSEW-carouselItems li:hover,
#JSEW-carouselItems li.active {
	background: #fff;
}

#JSEW-carousel .wrapper {

}
#JSEW-headerCore {
	z-index: 100;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
#JSEW-headerBar {
	margin-top:10px;
}


#JSEW-headerBar a {
	font-family: 'Nunito', 'calibri', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#JSEW-carouselContent {
	margin:10px;
	min-height:270px;
}
/*
header .carousel1 {
	background-image: url("assets/images/carousel_1.png");
	background-repeat: no-repeat;
	background-size: 259px 312px;
	background-position: bottom left;
}
header .carousel1 {
	background-image: url("assets/images/carousel_1a.png");
	background-repeat: no-repeat;
	background-size: 263px 392px;
	background-position: bottom left;
}
*/

header .carousel2 {
	background-image: url("assets/images/carousel/ico.png");
	background-repeat: no-repeat;
	background-size: cover;
}

header .carousel1 {
	background-image: url("assets/images/carousel/6.png");
	background-repeat: no-repeat;
	background-size: cover;
}
.wrapper {
	position: relative;
	max-width:1000px;
	width:100%;
	margin:0px auto;
}
#JSEW-getStarted {
	display: flex;
	/*background:#164677;*/
	background: rgba(0,0,0,0.3);
	padding:12px;
	border-radius: 8px;
	max-width:420px;
	width:100%;
	margin: 0px auto 10px;
	min-width:268px;
}

#JSEW-getStarted input {
	border-radius: 4px;
	padding:8px 10px;
	margin-right:12px;
	flex-grow:2;
	color:#555;
}

#JSEW-getStarted button {
	background: linear-gradient(#3383c2, #2a68a5);
	box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.1);
	border-radius: 4px;
	height:55px;
	color:#fff;
	font-weight:bold;
	padding:0px 16px;
	flex-grow:1;
}


#JSEW-getStarted button:hover {
	background:#2b71b1;
	box-shadow:none;
}

#JSEW-getStartedLinks {
	text-align: center;
}
#JSEW-getStartedLinks a {
	display: inline-block;
	margin:0px 10px;
	color:rgba(255,255,255,0.8);
	font-size:0.875em;
}
#JSEW-getStartedLinks a:hover {
	color:#fff;
}

#JSEW-logo {
	background-image:url("assets/images/logo_jse_white.png");
	background-repeat: no-repeat;
	background-size: contain;
	width:162px;
	height:34px;
	display: block;
	float:left;
	margin-top:10px;
	margin-left:20px;
	overflow: hidden;
	text-indent:-9999px;
}

#JSEW-why {
	position: absolute;
	bottom:-8px;
	right:22px;
	/*background:#164677;*/
	background: rgba(0,0,0,0.3);
	padding: 8px 16px;
	border:0px;
	color:#fff;
	border-radius:3px;
}
#JSEW-why:hover {
	background:#103764
}

#JSEW-supportedBrowsers {
	background-image:url("assets/images/top_icon.png");
	background-repeat: no-repeat;
	background-size: contain;
	width:240px;
	height:44px;
	margin:30px auto 20px;
}
#JSEW-carouselHeading {
	margin:0px;
}

#JSEW-carouselSubHeading  {
	margin:0px 0px 20px;
}
#JSEW-carouselHeading,
#JSEW-carouselSubHeading {
	color:#fff;
	text-transform: uppercase;
	text-align:center
}
#JSEW-carouselSubHeading {
}
/* ScrollBar */
.vb > .vb-dragger {
    z-index: 100000;
    width: 12px;
    right: 0;
	position:fixed !important;
}

.vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    background-color: rgba(27,179,148,.5);
    /*margin: 5px 5px 5px 0;
    border-radius: 20px;*/
    height: calc(100% - 10px);
    display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(27,179,148,.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(27,179,148,.8);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: #1BB394;
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: #1BB394;
}

footer {
	background: #0c0c14;
	position: relative;
	z-index: 1000;
}


footer h4,
footer a {
	font-size:0.875em;
}


#JSEW-subHeaderNav {
	border-bottom:solid 1px #eee;
	display:flex;
	align-items: center;
	flex-direction: column;
	padding:0px 10px;
	background:#fff;
}

#JSEW-subHeaderNav .wrapper {
	width: inherit;
}


#JSEW-subHeaderNav ul {
	margin:0px auto;
	padding:0px;
	display:flex;

}

#JSEW-subHeaderNav li {
	list-style: none;
	padding:10px;
	cursor: pointer;
	transition:box-shadow 0.2s;
	box-shadow: inset 0px 0px 0px #2b6aa7;
	white-space: nowrap;
}


#JSEW-subHeaderNav li:hover,
#JSEW-subHeaderNav li.active {
	box-shadow: inset 0px -4px 0px #2b6aa7;
}


#JSEW-subHeaderNav li.active:hover {
	box-shadow: inset 0px -4px 0px #164677;
}

.heading,
.subHeading {
	color:#164677;
	margin:0px;
	text-transform: uppercase;
}
.heading {
	font-size: 1.3em;
	margin:6px 0px;
}
.subHeading {
	font-size: 0.875em;
}

.profile {
	display: block;
	width:152px;
	height: 152px;
	background-repeat: no-repeat;
	background-size:107px;
	background-position: center;
}
.jim {
	background-image:url("assets/images/profile/jim.png");
}
.john {
	background-image:url("assets/images/profile/john.png");
}
.dave {
	background-image:url("assets/images/profile/dave.png");
}
.tracy {
	background-image:url("assets/images/profile/tracy.png");
}
.amr {
	background-image:url("assets/images/profile/amr.png");
}
.andy {
	background-image:url("assets/images/profile/andy.png");
}
.matthew {
	background-image:url("assets/images/profile/matthew.png");
}
.alex {
	background-image:url("assets/images/profile/alex.png");
}
.marks {
	background-image:url("assets/images/profile/marks.png");
}
.ollie {
	background-image:url("assets/images/profile/ollie.png");
}
.angelo {
	background-image:url("assets/images/profile/angelo.png");
}
.alina {
	background-image:url("assets/images/profile/alina.png");
}
.avatar {
	background-image:url("assets/images/profile/avatar.png");
}
.jay {
	background-image:url("assets/images/profile/jay.png");
}
.kyle {
	background-image:url("assets/images/profile/kyle.png");
}
.nick {
	background-image:url("assets/images/profile/nick.png");
}
.jack {
	background-image:url("assets/images/profile/jack.png");
}

.overlayHex {
	display: block;
	width:152px;
	height: 152px;
	background-image:url("assets/images/hexOverlay.svg");
	background-repeat: no-repeat;
	background-size:139px;
	background-position: center;
}

.hr {
	position: relative;
	height: 1px;
	margin:30px auto;
	background: #eee;
	width:100%;
}

.hr.hrInfo {
	margin-top:40px;
	margin-bottom:20px;
	font-weight: bold;
	color:#757575;
}

.hrInfo span {
	display: block;
	position: absolute;
	top:-1.2em;
}

.row {
	display:flex;
}
.col {
    flex-grow: 1;
    /*max-width: 500px;*/
	max-width:fit-content;
	width:100%;
    position: relative;
}


.groupButtons {
	display: flex;
}


.groupButtons.two {
	max-width: 350px;
	width:100%;
	margin:30px auto 0px;
}

.groupButtons .button {
	flex-grow: 1;
}


.button {
	border:solid 4px #f2f2f2;
	padding:15px;
	border-radius: 8px;
	color:#fff;
	background: linear-gradient(#3383c2, #2c6eae);
	margin:0px auto;
	display: block;
	white-space: nowrap;
}


.button2 {
	border:solid 4px #f2f2f2;
	padding:15px;
	border-radius: 16px;
	color:#fff;
	margin:0px auto;
	display: block;
	white-space: nowrap;
	box-shadow:inset 0px 0px 2px #c8c8c8;
	text-transform: uppercase;
	color: #555;
	font-size:0.8em;
	font-weight: bold;
}

.button:hover {
	background:#2c6eae;
}


.center {
	text-align: center;
}
.left {
	text-align: left;
}

#JSEW-footerNewsletterForm.error input {
	color:#ff8585;
}


#JSEW-icoMiner {
	background-image:url("assets/images/ico_miner.png");
	background-repeat:no-repeat;
	background-size:contain;
	background-position: center;
}

#JSEW-icoSites {
	background-image:url("assets/images/ico_sites.png");
	background-repeat:no-repeat;
	background-size:contain;
	background-position: center;
}

#JSEW-icoUsers {
	background-image:url("assets/images/ico_users.png");
	background-repeat:no-repeat;
	background-size:contain;
	background-position: center;
}
#JSEW-subNav {
	padding:0px 10px;
}

#JSEW-subNav a {
	display: block;
    padding: 4px 16px;
	white-space: nowrap;
    min-width: 180px;
    border-radius: 16px;
}
#JSEW-subNav a:hover {
	background: #fafafa;
}
/* xScrollBar */

/* Invisible Iframe For Tracking Pixels */
#JSEW-pixels {
	position: absolute;
	width:1px;
	height: 1px;
	bottom:0px;
	left:-1px;
	visibility: hidden;
	border: none;
}

.flexTableHeader,
.flexTableBody {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: flex-start;
}
.flexTable {
	margin:20px;
    border: solid 1px #eee;
    border-radius: 10px;
}

.flexTableHeader {
    border-bottom: solid 4px #eee;
}

.flexTableBody {
    border-top: solid 1px #eee;
}

.flexTableHeader .tdCol,
.flexTableHeader .tdCol + .tdCol  + .tdCol,
.flexTableBody .tdCol,
.flexTableBody .tdCol + .tdCol  + .tdCol {
	flex-grow: 1;
	width:100px;
}


.flexTableHeader .tdCol,
.flexTableBody .tdCol {
	padding: 10px 20px;
	overflow: hidden;
}

.flexTableBody p {
	padding: 0px;
	margin-top:0px;
}

.flexTableBody .infoMsg {
	padding: 10px 20px;
}


.flexTableHeader .tdCol {
	height: 40px;
}

.flexTableHeader .tdCol + .tdCol,
.flexTableBody .tdCol + .tdCol {
	flex-grow:4;
}

#JSEW-langOptions {
	position: relative;
	background:#f2f2f2;
}

#JSEW-langOptions.min {
	overflow: hidden;
	height:50px;
}

#JSEW-langOptions .wrapper {
	padding:10px 64px 10px 72px;
	background-image:url("assets/images/globe.png");
	background-repeat: no-repeat;
	background-position: 20px center;
    background-size: 45px;
	font-size: 0.85em;
}

#JSEW-langOptions.min .wrapper {
	padding:10px 64px 10px 60px;
	background-position: 20px 10px;
    background-size: 30px;
}

#JSEW-langOptions a {
	color:#333;
	margin:0px 5px;
	display: inline-block;
	padding:8px 16px;
}

#JSEW-langOptions i {
	position: absolute;
	border:solid 1px #eee;
	padding:8px 16px;
	text-align: center;
	right:10px;
	color:#4b4f56;
	border-radius: 4px;
	cursor: pointer;
	background:#fff;
}
#JSEW-langOptions i:hover {
	background:#4b4f56;
	color:#fff;
}

#JSEW-langOptions a:hover {
	background:#e6e6e6;
	border-radius:60px;
}
#JSEW-tokenAddressInfo {
	color:#a1b1bc;
}
#JSEW-tokenAddressInfo .wrapper {
	text-align:center;
}

#JSEW-tokenAddressInfo p {
	font-size: 0.875em;
    line-height: 1.6;
    padding: 4px 20px;
    display: inline-block;
    border: solid 1px #2a2d36;
    margin: 10px;
    border-radius: 6px;
}
#JSEW-footerPrivacy {
	display: none;
}
#JSEW-footerPrivacy .wrapper {
	display: flex;
	justify-content: center;
}
#JSEW-footerPrivacy a {
	display: block;
    padding: 4px 8px;
    background: #222533;
    border-radius: 12px;
    margin: 6px;
    color: #a1b1bc;
    font-size: 0.6em;
    white-space: nowrap;
}

@media screen and (max-width: 1000px) {
	#JSEW-website.enableResponsive {
		min-width: 100%;
	}
	.enableResponsive .wrapper {
		max-width:100%;
	}

	.enableResponsive .row,
	.enableResponsive #JSEW-communityLinks {
		flex-wrap:wrap;
		justify-content: center;
	}
	.enableResponsive .col {
		max-width:fit-content;
	}

	.enableResponsive #JSEW-sectionHighlights dt {
		height: 130px !important;
    	width: 100% !important;
		margin:0px !important;
		background-position: center !important;
	}

	.enableResponsive #JSEW-subHeaderNav .wrapper {
		overflow: auto;
	}
	.enableResponsive .hexGridWrapper {
		/*zoom:65%;*/
	}

	.enableResponsive .hexProfileContainer {
		width:650px;
	}
	.enableResponsive .teamButton {
  		bottom: 120px !important;
		margin-left:-85px !important;
	}


	.enableResponsive .row.reverse {
		flex-direction:column-reverse;
	}

	.enableResponsive #JSEW-subNav {
		display:none;
	}

	.enableResponsive .overlayHex {
		width: 99px;
		height: 99px;
		background-size: 90px;
	}
	.enableResponsive .solidHex,
	.enableResponsive .blankHex {
		width: 99px;
		height: 99px;
	}
	.enableResponsive .profile {
		width: 99px;
		height: 99px;
		background-size: 70px;
	}
	.enableResponsive .hexGrid {
   		margin: -17px 0px 0px -74px;
	}
	.enableResponsive .hexProfileContainer .hexGrid:nth-child(even) {
   		margin: -17px 0px 0px -123px;
	}
}
@media screen and (max-width: 768px) {

	.enableResponsive #JSEW-footerPrivacy {
		display: none;
	}
	.enableResponsive #JSEW-footerSitemap,
	.enableResponsive #JSEW-footerInfo,
	.enableResponsive #JSEW-langOptions {
		display:none;
	}

	.enableResponsive #JSEW-footerCompanyInfoBar,
	.enableResponsive #JSEW-copy {
		text-align: center
	}

	.enableResponsive #JSEW-footerCompanyInfo {
		margin:0px 20px;
		padding:0px 0px 0px 30px;
	}

	.enableResponsive #JSEW-footerCompanyInfoBar #JSEW-footerCompanyInfo,
	.enableResponsive #JSEW-footerCompanyInfoBar #JSEW-officeAddress {
		float:none;
		display: inline-block;
	}
	.enableResponsive #JSEW-copy #JSEW-copyInfo,
	.enableResponsive #JSEW-copy #JSEW-socialLinks {
		float:none;
		display: inline-block;
	}
	.enableResponsive #JSEW-sectionHighlights dt {
		height: 80px !important;
	}
	.enableResponsive #JSEW-sectionHighlights dd {
		margin:0px 20px 0px 20px;
	}
	.enableResponsive .hexGridWrapper {
		/*zoom:25%;*/
	}

	.enableResponsive .hexProfileContainer {
		margin: 30px auto 100px;
		width:310px;
	}
	.enableResponsive .teamButton {
  		bottom: 40px !important;
	}
	.enableResponsive header .carousel1 {
		background-image:none;
	}
	.enableResponsive #JSEW-cookieDetection.active {
		font-size:12px;
	}
	.enableResponsive #JSEW-mobileNavInterface {
		display: block;
	}
	.enableResponsive #JSEW-copyInfo {
		margin-bottom:10px;
	}
	.enableResponsive #JSEW-subNav {
		display:none;
	}

	.enableResponsive .overlayHex {
		width: 64px;
		height: 64px;
		background-size: 59px;
	}
	.enableResponsive .solidHex,
	.enableResponsive .blankHex {
		width: 64px;
		height: 64px;
	}
	.enableResponsive .profile {
		width: 64px;
		height: 64px;
		background-size: 46px;
	}
	.enableResponsive .hexGrid {
   		margin: -11px 0px 0px -108px;
	}
	.enableResponsive .hexProfileContainer .hexGrid:nth-child(even) {
   		margin: -11px 0px 0px -140px;
	}
	.enableResponsive #JSEW-adBlockMsg,
	.enableResponsive #JSEW-langMsg {
		width: 92%;
		height: 80%;
	}
}
@media screen and (min-width: 1400px) {
	body #JSEW-website,
	body #FB-CB {
		zoom:120%;
	}
}
@media screen and (max-width: 390px) {
	.enableResponsive #JSEW-adBlockMsg,
	.enableResponsive #JSEW-langMsg {
		max-height: 384px;
	}

	#JSEW-ICOAlert {
		right: 10px;
	}
}

@media screen and (max-width: 768px) {
	body #JSEW-website.enableResponsive {
		position: relative !important;
	}
	body #JSEW-website.enableResponsive.mobileNavDisplay {
		position: absolute !important;
	}
	#JSEW-website.enableResponsive #JSEW-scrollbar {
		display: none;
	}
	#JSEW-website.enableResponsive.mobileNavDisplay .vb > .vb-dragger {
		width:6px
	}

	#JSEW-cookieDetection i {
		right:5px;
	}
	#JSEW-cookie {
		width:50px;
	}

	#JSEW-cookieDetection {
	    padding: 5px 44px 5px 60px;
	}

	#JSEW-communityLinks li img {
		width:70px;
	}
	.enableResponsive .flexTableHeader {
		display:none;
	}

	.enableResponsive .flexTable {
		border:0px;
		margin:0px;
	}
	.enableResponsive .flexTableBody {
		margin:20px;
		border: solid 1px #eee;
		border-radius: 10px;
		display: block;
		padding:10px 0px;
	}
	.enableResponsive .flexTableBody .tdCol {
		width:auto !important;
	}
	#JSEW-ICOAlert {
		right: 10px;
	}
}

</style>
