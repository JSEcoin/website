<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/support`" tag="li" class="active">
					Support Center
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
					<div class="faqSection active">
						<img :src="`/static/images/support/${activeFAQSection}.png`" width="60%" alt="" />
						<h4 class="heading">{{ categoryInfo[activeFAQSection].name }}</h4>
						<h5 class="subHeading">{{ categoryInfo[activeFAQSection].subHeading }}</h5>
					</div>
					<div v-for="(category, index) in categories" :key="index" class="faqSection" v-if="(activeFAQSection !== category)" v-on:click="activeSection(category)">
						<img :src="`/static/images/support/${category}.png`" width="60%" alt="" />
						<h4 class="heading">{{ categoryInfo[category].name }}</h4>
						<h5 class="subHeading">{{ categoryInfo[category].subHeading }}</h5>
					</div>
				</div>

				<div id="JSEW-faqList" class="col left">
					<div v-for="(category, index) in categories" :key="index">
						<div v-if="(activeFAQSection === category)">
							<h1 class="heading">{{ categoryInfo[category].name }}</h1>
							<h2 class="subHeading">{{ categoryInfo[category].subHeading }}</h2>
						</div>
						<div v-for="(qna, index) in categoryInfo[category].qna" :key="index" v-if="activeFAQSection === category">
							<div is="xBasicToggle">
								<h3 class="faqItem"><i class="fa fa-plus-circle"></i> {{ qna.questions }}</h3>
								<p>
									{{ qna.content }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
//import axios from 'axios';
import Papa from 'papaparse';
import xBasicToggle from '../tpl/basicToggle';

export default {
	name: 'QnA',
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
			activeFAQSection: 'GeneralEnquiries',
			prefix: 'JSE_QnA_',
			categories: [
				'GeneralEnquiries',
				'Webmasters',
				'Exchanges',
				'PlatformMining',
				'ThePlatform',
				'Affiliates',
				'MerchantTools',
			],
			categoryInfo: {
				Affiliates: {
					name: 'Affiliates',
					subHeading: 'EARN THROUGH REFERRALS',
					qna: [],
				},
				Exchanges: {
					name: 'Exchanges',
					subHeading: 'YOUR WALLET & CONVERTING JSE',
					qna: [],
				},
				GeneralEnquiries: {
					name: 'General Enquiries',
					subHeading: 'NEW AROUND HERE? LETS START WITH THE BASICS',
					qna: [],
				},
				MerchantTools: {
					name: 'Merchant Tools',
					subHeading: 'THE NEW ECOMMERCE EXPERIENCE',
					qna: [],
				},
				PlatformMining: {
					name: 'Platform Mining',
					subHeading: 'CAN I MINE?',
					qna: [],
				},
				ThePlatform: {
					name: 'The Platform',
					subHeading: 'SOMETHING WENT WRONG',
					qna: [],
				},
				Webmasters: {
					name: 'Webmasters',
					subHeading: 'JSE INTEGRATION & HOW IT WORKS',
					qna: [],
				},
			},
		};
	},
	created() {
		const self = this;

		self.categories.forEach((category) => {
			//console.log('category', category);
			Papa.parse(`/static/qna/${self.prefix}${category}.csv`, {
				download: true,
				header: true,
				skipEmptyLines: true,
				//only return first question (multiple questions split onto new lines)
				transform: (a, b) => {
					if (b === 'questions') {
						const questions = a.split(/\r|\n/);
						a = questions[0];
					}
					return a;
				},
				complete: (r, f) => {
					//console.log('complete', r, f);
					self.categoryInfo[category].qna = r.data;
				},
			});
		});
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
				//scroll back to top.
				Vue.vuebar.scrollTo(bodyScroll, 205);
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
