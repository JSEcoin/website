<template>
	<header class="mainHead" v-if="$route.meta.linkText === 'Home'">
		<div id="JSEW-whyJSEPanel" :class="{ activePanel:isActiveHeaderPanel }">
			<div class="bluetint">
				<h1 class="heading"><img src="../../assets/images/coin.png" alt="JSE" class="JSEW-tinyimg" /> {{ $t('tpl.header.heading_whyJSEcoin') }}</h1>
				<div id="JSEW-whyjsetxt">
					<p>
						{{ $t('tpl.header.para_main1') }}
					</p>
					<p>
						<b class="JSEW-whysubheading"><i class="fa fa-globe"></i> {{ $t('tpl.header.subheading_environmentalImpact') }}</b> -
						{{ $t('tpl.header.para_main2') }}
					</p>
					<p>
						<b class="JSEW-whysubheading"><i class="fa fa-user"></i> {{ $t('tpl.header.subheading_consumerFriendly') }}</b> -
						{{ $t('tpl.header.para_main3') }}
					</p>
					<p>
						<b class="JSEW-whysubheading"><i class="fa fa-chrome"></i> {{ $t('tpl.header.subheading_builtForTheWeb') }}</b> -
						{{ $t('tpl.header.para_main4') }}
					</p>
					<!--
					<p>
						We believe that the current leading cryptocurrency technologies are flawed and too slow to adapt to changing
						requirements and market conditions. There will be new developments in the industry that will be game changing
						for blockchain technologies and the way the world uses money.

					</p>-->
				</div>
			</div>
			<button class="button invert" v-on:click="whyJSEcoin()"><i class="fa fa-arrow-circle-down"></i> Close</button>
		</div>
		<div id="JSEW-carousel" :class="[activeHeader]">
			<div id="JSEW-headerCore">
				<div class="wrapper">
					<xGlobalNavHeader/>

					<div id="JSEW-carouselContent" v-if="$route.meta.linkText === 'Home'">
						<div v-if="activeHeaderItem('carousel1')">
							<div id="JSEW-supportedBrowsers"></div>
							<h1 id="JSEW-carouselHeading">{{ $t('tpl.header.carousel1.heading') }}</h1>
							<h4 id="JSEW-carouselSubHeading">{{ $t('tpl.header.carousel1.subheading') }}</h4>

							<form id="JSEW-getStarted" style="margin-bottom:25px" @submit.prevent="onSubmit" :class="{error:!form.emailAddress.valid}">
								<input type="email" :placeholder="$t('tpl.header.carousel1.placeholder') + '*'" v-model="form.emailAddress.val" @blur="checkEmail"  @keyup="checkEmail"/>
								<button>{{ $t('tpl.header.carousel1.button_getStarted') }}</button>
							</form>
							<!--<div id="JSEW-getStartedLinks">
								<router-link v-bind:to="`/${$store.state.local}/support/blockchainExplorer`" tag="a">
									New to bitcoin?
								</router-link>
								<router-link v-bind:to="`/${$store.state.local}/support/blockchainExplorer`" tag="a">
									What is Ethereum?
								</router-link>
								<router-link v-bind:to="`/${$store.state.local}/support/blockchainExplorer`" tag="a">
									Move to EOS?
								</router-link>
							</div>-->

							<a href="/whitepaper.pdf" id="JSEW-readWhitepaper" target="_blank">
								<i class="fa fa-file-pdf-o"></i> {{ $t('tpl.header.carousel1.link_readTheWhitepaper') }}
							</a>

							<button id="JSEW-why" v-on:click="whyJSEcoin()">
								<i class="fa fa-heart"></i> {{ $t('tpl.header.carousel1.button_whyJSEcoin') }}
							</button>
						</div>
						<div v-if="activeHeaderItem('carousel2')">
							<!--<ICOPanel />-->
						</div>

						<!--
						<ul id="JSEW-carouselItems">
							<li v-on:click="headerSelector('carousel2')" :class="{ active:activeHeaderItem('carousel2') }"></li>
							<li v-on:click="headerSelector('carousel1')" :class="{ active:activeHeaderItem('carousel1') }"></li>
						</ul>-->

					</div>
				</div>
			</div>

			<!--<particlesJS v-if="$route.meta.linkText === 'Home'"/>-->
		</div>
	</header>
	<header class="minHead" v-else>
		<div id="JSEW-headerCore" :class="{fadeIn:applyFadeIn}" :style="{ backgroundImage: `url('${staticPath+this.$route.meta.headerBG}')` }">
			<div class="wrapper">
				<xGlobalNavHeader/>
				<h1 class="heading center" v-html="$t($route.meta.headerTitle)"></h1>
				<h2 class="subheading center" v-html="$t($route.meta.headerSubTitle)"></h2>
			</div>
		</div>
	</header>
</template>

<script>
//import particlesJS from './particlesJS';
import xGlobalNavHeader from './globalNavHeader';

export default {
	name: 'xHeader',
	components: {
		//particlesJS,
		xGlobalNavHeader,
	},
	mounted () {
		this.applyFadeIn = true;
	},
	beforeDestroy() {
		this.applyFadeIn = false;
	},
	//data
	data() {
		return {
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
			staticPath: '',
			applyFadeIn: false,
			isActiveHeaderPanel: false,
			activeHeader: 'carousel1',
			headerImgBg: {
				color: 'red',
			},
		};
	},

	methods: {
		//update transaction display
		whyJSEcoin() {
			this.isActiveHeaderPanel = !this.isActiveHeaderPanel;
		},
		headerSelector(headerItem) {
			this.activeHeader = headerItem;
		},
		activeHeaderItem(headerItem) {
			return this.activeHeader === headerItem;
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
				window.focus();
			}
		},
	},
/*
	computed: {
		imgAddress () {
			console.log('blah',this.$route.meta.headerBG);
			const bgImg = require(this.$route.meta.headerBG);
			//const bgImg = require('../../assets/images/banners/happyOffice.png');
			console.log(bgImg);
			return bgImg;
			//console.log(bgImg+'d'+this.$route.meta.headerBG);
			//return { 'background-image': 'url("' + bgImg + '")' };
		},
	},*/
};
</script>

<style>
/* Your styles */

#JSEW-headerCore {
	background-size:cover;
}
#JSEW-headerCore .heading {
	color:#fff;
	font-size:1.6em;
	margin-top:20px;
}
#JSEW-headerCore .subheading {
	color:#fff;
	font-size:1.2em;
	margin:0px;
}
.fadeIn {
	opacity: 0;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: both;
}
#JSEW-globalNavMobile {
	display: none;
}
.bluetint {
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	background: rgba(29, 92, 158, 0.5);
}
.JSEW-tinyimg {
	height: 30px;
	width: 30px;
	margin-bottom: -8px;
}
#JSEW-whyjsetxt {
	max-width: 800px;
	margin: 0px auto;
	background: rgba(255,255,255,0.8);
	color: black;
	border-radius: 5px;
	padding: 10px;
	text-shadow: 0px 0px 5px white;
	z-index: 999;
}
.JSEW-whysubheading {
	font-size: 16px;
	color: #1D5C9E;
}
@keyframes fadeIn {
	0% {
		opacity: 0
	}
	100% {
		opacity: 1
	}
}
#JSEW-getStarted.error input {
	color:#ff8585;
}
#JSEW-whyJSEPanel {
	background: url(/static/banners/exchanges2.jpg) no-repeat;
	background-size: cover;
}
#JSEW-whyJSEPanel .heading {
	color:#fff;
}
#JSEW-readWhitepaper {
    /* background: #164677; */
    background: rgba(0,0,0,0.3);
    padding: 8px 16px;
    border: 0px;
    color: #fff;
	border-radius: 3px;
	margin:20px auto;
	display: none;
	font-size: 1.6em;
	width:220px;
	text-align:center;
}

@media screen and (max-width: 768px) {
	.enableResponsive #JSEW-globalNav {
		display: none;
	}
	.enableResponsive #JSEW-globalNavMobile {
		display: block;
	}
	.enableResponsive header.mainHead {
		height:272px;
	}

	.enableResponsive #JSEW-carouselContent {
		font-size:10px;
	}
	.enableResponsive #JSEW-supportedBrowsers {
		width:180px;
		margin-bottom:0px;
	}

	.enableResponsive #JSEW-carouselItems,
	.enableResponsive #JSEW-getStarted,
	.enableResponsive #JSEW-why,
	.enableResponsive #JSEW-whyJSEPanel,
	.enableResponsive #JSEW-carouselSubHeading {
		display: none;
	}

	.enableResponsive #JSEW-readWhitepaper {
		display: block;
	}
}
</style>
