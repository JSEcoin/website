<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/support`" tag="li" class="active">
					{{ $t('pages.navigation.support.link_FAQ') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/support/community`" tag="li">
					{{ $t('pages.navigation.support.link_community') }}
				</router-link>
				<!--<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="li">
					{{ $t('pages.navigation.support.link_contact') }}
				</router-link>-->
			</ul>
		</nav>
		<div id="JSEW-FAQ" class="wrapper center">
			<h1 class="heading">{{ $t('pages.FAQ.heading_FAQ') }}</h1>
			<h2 class="subHeading">{{ $t('pages.FAQ.subheading_FAQ') }}
				<router-link v-bind:to="`/${$store.state.local}/support/community`" tag="a">
					{{ $t('pages.FAQ.link_getInTouch') }}
				</router-link>
			</h2>

			<div class="row" style="padding:30px 0px;">
				<div id="JSEW-faqOptions" class="col">
					<div class="faqSection" :class="{active:activeFAQSection === 'generalEnquiries'}" v-on:click="activeSection('generalEnquiries')">
						<img src="../../assets/images/support/general.png" width="60%" :alt="$t('pages.FAQ.section_general.alt_general')" />
						<h4 class="heading">{{ $t('pages.FAQ.section_general.heading_general') }}</h4>
						<h5 class="subHeading">{{ $t('pages.FAQ.section_general.subheading_general') }}</h5>
					</div>
					<div class="faqSection" :class="{active:activeFAQSection === 'webmasters'}" v-on:click="activeSection('webmasters')">
						<img src="../../assets/images/support/webmasters.png" width="60%" :alt="$t('pages.FAQ.section_webmasters.alt_webmasters')" />
						<h4 class="heading">{{ $t('pages.FAQ.section_webmasters.heading_webmasters') }}</h4>
						<h5 class="subHeading">{{ $t('pages.FAQ.section_webmasters.subheading_webmasters') }}</h5>
					</div>
					<div class="faqSection" :class="{active:activeFAQSection === 'exchanges'}" v-on:click="activeSection('exchanges')">
						<img src="../../assets/images/support/exchanges.png" width="60%" :alt="$t('pages.FAQ.section_exchanges.alt_exchanges')" />
						<h4 class="heading">{{ $t('pages.FAQ.section_exchanges.heading_exchanges') }}</h4>
						<h5 class="subHeading">{{ $t('pages.FAQ.section_exchanges.subheading_exchanges') }}</h5>
					</div>
					<div class="faqSection" :class="{active:activeFAQSection === 'users'}" v-on:click="activeSection('users')">
						<img src="../../assets/images/support/user.png" width="60%" :alt="$t('pages.FAQ.section_platformMining.alt_platformMining')" />
						<h4 class="heading">{{ $t('pages.FAQ.section_platformMining.heading_platformMining') }}</h4>
						<h5 class="subHeading">{{ $t('pages.FAQ.section_platformMining.subheading_platformMining') }}</h5>
					</div>
					<div class="faqSection" :class="{active:activeFAQSection === 'platform'}" v-on:click="activeSection('platform')">
						<img src="../../assets/images/support/platform.png" width="60%" :alt="$t('pages.FAQ.section_thePlatform.alt_thePlatform')" />
						<h4 class="heading">{{ $t('pages.FAQ.section_thePlatform.heading_thePlatform') }}</h4>
						<h5 class="subHeading">{{ $t('pages.FAQ.section_thePlatform.subheading_thePlatform') }}</h5>
					</div>
					<div class="faqSection" :class="{active:activeFAQSection === 'affiliates'}" v-on:click="activeSection('affiliates')">
						<img src="../../assets/images/support/affiliates.png" width="60%" :alt="$t('pages.FAQ.section_affiliates.alt_affiliates')" />
						<h4 class="heading">{{ $t('pages.FAQ.section_affiliates.heading_affiliates') }}</h4>
						<h5 class="subHeading">{{ $t('pages.FAQ.section_affiliates.subheading_affiliates') }}s</h5>
					</div><!--
					<div class="faqSection" :class="{active:activeFAQSection === 'technology'}" v-on:click="activeSection('technology')">
						<img src="../../assets/images/support/cryptocurrency.png" width="60%" :alt="$t('pages.FAQ.section_technology.alt_technology')" />
						<h4 class="heading">{{ $t('pages.FAQ.section_technology.heading_technology') }}</h4>
						<h5 class="subHeading">{{ $t('pages.FAQ.section_technology.subheading_technology') }}</h5>
					</div>-->
				</div>

				<div id="JSEW-faqList" class="col left">
					<div v-if="activeFAQSection === 'generalEnquiries'">
						<h1 class="heading">{{ $t('pages.FAQ.section_general.heading_general') }}</h1>
						<h2 class="subHeading">{{ $t('pages.FAQ.section_general.subheading_general') }}</h2>

						<!--ICO/Exchange Listing/Wallet-->
						<!--<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading1') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent1') }}
							</p>
						</div>-->

						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading2') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent2') }}
							</p>
						</div>

						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading3') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent3') }}
							</p>
						</div>

						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading4') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent4') }}
							</p>
						</div>

						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading5') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent5') }}
								<router-link v-bind:to="`/${$store.state.local}/oddJobs/smallJobs`">
									{{ $t('pages.FAQ.section_general.link_jobsListedHere') }}
								</router-link>.
							</p>
						</div>

						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading6') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent6') }}
								<a href="https://www.youtube.com/watch?v=UgoYhUPgqlY" target="_BLANK">https://www.youtube.com/watch?v=UgoYhUPgqlY</a>
							</p>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent6_para2') }}
							</p>
							<p>
								<ol>
									<li>{{ $t('pages.FAQ.section_general.faqItemContent6_list1') }}</li>
									<li>{{ $t('pages.FAQ.section_general.faqItemContent6_list2') }}</li>
									<li>{{ $t('pages.FAQ.section_general.faqItemContent6_list3') }}</li>
									<li>{{ $t('pages.FAQ.section_general.faqItemContent6_list4') }}</li>
									<li>{{ $t('pages.FAQ.section_general.faqItemContent6_list5') }}</li>
									<li>{{ $t('pages.FAQ.section_general.faqItemContent6_list6') }}</li>
									<li>{{ $t('pages.FAQ.section_general.faqItemContent6_list7') }}</li>
								</ol>
							</p>
						</div>


						<!--<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading7') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent7') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading8') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_general.faqItemContent8') }}
							</p>
						</div>-->
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_general.faqItemHeading9') }}</h3>
							<p>
								<!--{{ $t('pages.FAQ.section_general.faqItemContent9') }}-->
								JSEcoin is a cryptocurrency on its own but we are not listed on CoinMarketCap yet - Our Token exchange listings went live on the 18th October.<br />
								We should be listed on CoinMarketCap in next couple of weeks.
							</p>
						</div>
						<!--xICO/Exchange Listing/Wallet-->
					</div>


					<div v-if="activeFAQSection === 'webmasters'">
						<h1 class="heading">{{ $t('pages.FAQ.section_webmasters.heading_webmasters') }}</h1>
						<h2 class="subHeading">{{ $t('pages.FAQ.section_webmasters.subheading_webmasters') }}</h2>

						<!--Publisher mining-->
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_webmasters.faqItemHeading1') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent1') }}
								<a href="https://platform.jsecoin.com" target="_BLANK">https://platform.jsecoin.com</a>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent1_2') }}
							</p>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent1_para2') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i>  {{ $t('pages.FAQ.section_webmasters.faqItemHeading2') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent2') }}

								<router-link v-bind:to="`/${$store.state.local}/videos/wordpress-plugin-available`" tag="a" >
									{{ $t('pages.FAQ.section_webmasters.link_wordpress') }}
								</router-link>
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i>  {{ $t('pages.FAQ.section_webmasters.faqItemHeading3') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent3') }}
							</p>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent3_para2') }}
							</p>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent3_para3') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i>  {{ $t('pages.FAQ.section_webmasters.faqItemHeading4') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent4') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i>  {{ $t('pages.FAQ.section_webmasters.faqItemHeading5') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent5') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i>  {{ $t('pages.FAQ.section_webmasters.faqItemHeading6') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent6') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i>  {{ $t('pages.FAQ.section_webmasters.faqItemHeading7') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent7') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i>  {{ $t('pages.FAQ.section_webmasters.faqItemHeading8') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent8') }}
							</p>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent8_para2') }} <br />
								{{ $t('pages.FAQ.section_webmasters.faqItemContent8_para2_line2') }}

								<router-link v-bind:to="`/${$store.state.local}/legal/privacyPolicy`" tag="a" >
									{{ $t('pages.FAQ.section_webmasters.link_privacyPolicy') }}
								</router-link>.
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i>  {{ $t('pages.FAQ.section_webmasters.faqItemHeading9') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent9') }}
							</p>
							<p>
								{{ $t('pages.FAQ.section_webmasters.faqItemContent9_para2') }}
							</p>
						</div>
						<!--xPublisher mining-->
					</div>


					<div v-if="activeFAQSection === 'exchanges'">
						<h1 class="heading">{{ $t('pages.FAQ.section_exchanges.heading_exchanges') }}</h1>
						<h2 class="subHeading">{{ $t('pages.FAQ.section_exchanges.subheading_exchanges') }}</h2>

						<!--Liquidity-->
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_exchanges.faqItemHeading1') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_exchanges.faqItemContent1') }}
								<a href="https://platform.jsecoin.com" target="_BLANK">https://platform.jsecoin.com</a>
								{{ $t('pages.FAQ.section_exchanges.faqItemContent1_line2') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_exchanges.faqItemHeading2') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_exchanges.faqItemContent2') }}
							</p>
							<p>
								{{ $t('pages.FAQ.section_exchanges.faqItemContent2_para2') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_exchanges.faqItemHeading3') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_exchanges.faqItemContent3') }}
							</p>
						</div>
						<!--xLiquidity-->
					</div>


					<div v-if="activeFAQSection === 'users'">
						<h1 class="heading">{{ $t('pages.FAQ.section_platformMining.heading_platformMining') }}</h1>
						<h2 class="subHeading">{{ $t('pages.FAQ.section_platformMining.subheading_platformMining') }}</h2>

						<!-- Self Mining -->
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_platformMining.faqItemHeading1') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_platformMining.faqItemContent1') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_platformMining.faqItemHeading2') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_platformMining.faqItemContent2') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_platformMining.faqItemHeading3') }}</h3>
							<p>To overcome this we recommend that you open the mining in a new browser with no other tabs open. If you then want to continue to different sites instead of opening a new tab, you should open up a new browser. This should stop the drop in hash rate. Try different browsers, your optimal browser will depend on your system.</p>
							<p>
								additionally you can prevent this by mining via our Windows or Mac desktop apps which can be downloaded here https://jsecoin.com/downloads
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_platformMining.faqItemHeading4') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_platformMining.faqItemContent4') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_platformMining.faqItemHeading5') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_platformMining.faqItemContent5') }}
							</p>
						</div>
						<!-- xSelf Mining -->
					</div>


					<div v-if="activeFAQSection === 'platform'">
						<h1 class="heading">{{ $t('pages.FAQ.section_thePlatform.heading_thePlatform') }}</h1>
						<h2 class="subHeading">{{ $t('pages.FAQ.section_thePlatform.subheading_thePlatform') }}</h2>

						<!--User Platform-->
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading1') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent1') }}
								<a href="https://www.youtube.com/watch?v=UgoYhUPgqlY" target="_BLANK">https://www.youtube.com/watch?v=UgoYhUPgqlY</a>
							</p>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent1_para2') }}
							</p>
							<p>
								<ol>
									<li>{{ $t('pages.FAQ.section_thePlatform.faqItemContent1_list1') }}</li>
									<li>{{ $t('pages.FAQ.section_thePlatform.faqItemContent1_list2') }}</li>
									<li>{{ $t('pages.FAQ.section_thePlatform.faqItemContent1_list3') }}</li>
									<li>{{ $t('pages.FAQ.section_thePlatform.faqItemContent1_list4') }}</li>
									<li>{{ $t('pages.FAQ.section_thePlatform.faqItemContent1_list5') }}</li>
									<li>{{ $t('pages.FAQ.section_thePlatform.faqItemContent1_list6') }}</li>
									<li>{{ $t('pages.FAQ.section_thePlatform.faqItemContent1_list7') }}</li>
								</ol>
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading2') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent2') }}
								<router-link v-bind:to="`/${$store.state.local}/support/community`" tag="a" >
									https://jsecoin.com/support/community
								</router-link>
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading3') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent3') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading4') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent4') }}
								<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a" >
									{{ $t('pages.FAQ.section_thePlatform.link_contactForm') }}
								</router-link>
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading5') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent5') }}
								<router-link v-bind:to="`/${$store.state.local}/support/community`" tag="a" >
									<!--{{ $t('pages.FAQ.section_thePlatform.link_contactForm') }}--> Community
								</router-link>
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading6') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent6') }}
							</p>
							<p>
								<ol>
									<li>
										{{ $t('pages.FAQ.section_thePlatform.faqItemContent6_list1') }}
									</li>
									<li>
										{{ $t('pages.FAQ.section_thePlatform.faqItemContent6_list2') }}
									</li>
								</ol>
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading7') }}</h3>
							<p>
								We have introduced a number of features to increase the security of the platform such as the PIN system, email confirmations for large withdrawals, transaction limits. However your account is only as secure as you make it. Please ensure you use a unique, secure password. We recommend setting up 2FA on your account, and never let anyone know your PIN. Ensure that your operating system is free from viruses and trojans.
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading8') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent8') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_thePlatform.faqItemHeading9') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent9') }}
								<router-link v-bind:to="`/${$store.state.local}/support/community`" tag="a" >
									<!--{{ $t('pages.FAQ.section_thePlatform.link_contactForm') }}--> Community
								</router-link>
								{{ $t('pages.FAQ.section_thePlatform.faqItemContent9_line2') }}
							</p>
						</div>
						<!--xUser Platform-->
					</div>


					<div v-if="activeFAQSection === 'affiliates'">
						<h1 class="heading">{{ $t('pages.FAQ.section_affiliates.heading_affiliates') }}</h1>
						<h2 class="subHeading">{{ $t('pages.FAQ.section_affiliates.subheading_affiliates') }}</h2>

						<!--Affiliate program-->
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_affiliates.faqItemHeading1') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_affiliates.faqItemContent1') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_affiliates.faqItemHeading2') }}</h3>
							<p>
								The referral program is open to change.<br />
								For full details regarding payments and terms regarding qualifying referrals please visit the Referrals page of the platform at <a href="https://platform.jsecoin.com">https://platform.jsecoin.com</a>
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_affiliates.faqItemHeading3') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_affiliates.faqItemContent3') }}
							</p>
							<p>
								your referral is not from one of our accepted countries as listed on the referrals page.
							</p>
							<p>
								{{ $t('pages.FAQ.section_affiliates.faqItemContent3_para3') }}
							</p>
						</div>
						<div is="xBasicToggle">
							<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ $t('pages.FAQ.section_affiliates.faqItemHeading5') }}</h3>
							<p>
								{{ $t('pages.FAQ.section_affiliates.faqItemContent5') }}
							</p>
						</div>
						<!--Affiliate program-->
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
import Vue from 'vue';
import xBasicToggle from '../tpl/basicToggle';

export default {
	name: 'FAQ',
	metaInfo () {
		return {
			title: this.$t('pages.FAQ.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.FAQ.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.FAQ.meta.keywords'),
				},
			],
		};
	},
	components: { xBasicToggle },
	data() {
		return {
			activeFAQSection: 'generalEnquiries',
		};
	},
	methods: {
		toggleRowActive() {
			//console.log(this.index);
			this.$emit('newactive', this.index);
		},
		activeSection(section) {
			//console.log(section,this);
			this.activeFAQSection = section;
			if (typeof (Vue.vuebar.scrollTo) !== 'undefined') {
				const bodyScroll = document.getElementById('JSEW-website');

				const bodyRect = document.body.getBoundingClientRect();
				const elemRect = document.getElementById('JSEW-faqList').getBoundingClientRect();
				const offset   = elemRect.top - bodyRect.top;

				Vue.vuebar.scrollTo(bodyScroll,offset);
			} else {
				console.error('Polyfix gone - scrollTo');
			}
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-FAQ {
	padding:30px 0px;
}

.faqSection {
	border: solid 4px #f8f8f9;
	border-radius: 16px;
	padding:8px 16px;
	margin:0px 10px 20px 10px;
	text-align: center;
	font-size:0.8em;
	cursor: pointer;
	min-width:220px;
}

.faqSection:hover,
.faqSection.active {
	border: solid 4px #164677;
}

.faqSection .heading {
	color:#164677;
	font-weight: bold;
	margin:0px;
	padding:6px 12px;
	margin-bottom:6px;
}


.faqSection.active .heading,
.faqSection:hover .heading {
	background: #164677;
	border-radius: 50px;
	color:#fff;
}

.faqSection .subHeading {
	color:#164677;
}

#JSEW-FAQ .col {
	max-width:initial;
}

/*
#JSEW-FAQ .col.left {
	padding-left:20px;
}*/

.faqItem {
	padding:0px 20px;
	cursor: pointer;
	color:#1d75b7;
}

.basicToggle.active .faqItem,
.faqItem:hover {
	color:#164677;
}

.basicToggle p {
	display:none;
}

.basicToggle.active {
	margin-bottom:40px;
}

.basicToggle.active p {
	display:block;
}

#JSEW-FAQ #JSEW-faqOptions {
	max-width: 280px;
	min-width: 280px;
}

@media screen and (max-width: 1000px) {
	.enableResponsive #JSEW-FAQ #JSEW-faqOptions {
		max-width: inherit;
		min-width: inherit;
		/*zoom: 50%;*/
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.enableResponsive .faqSection {
		min-width: 220px;
    	width: 200px;
		font-size: 0.5em;
	}
}
@media screen and (max-width: 768px) {

	.enableResponsive .faqSection {
		/*min-width: 220px;
    	width: 200px;*/

		min-width: 120px;
		width: 100px;
		font-size: 0.5em;
	}
}
</style>
