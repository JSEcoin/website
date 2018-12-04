<template>
	<div id="JSEW-headerBar" class="cf">
		<router-link id="JSEW-logo" v-bind:to="`/${$store.state.local}/home`" tag="a">
			<!--swap4SVG-->JSEcoin Ltd
		</router-link>
		<nav id="JSEW-globalNav">
			<ul>
				<li>
					<a href="/whitepaper.pdf" target="_blank">
						{{ $t('tpl.globalNavHeader.link_whitepaper') }} <i class="fa fa-file-pdf-o"></i>
					</a>
				</li>
				<li>
					<router-link v-bind:to="`/${$store.state.local}/investors/overview`" tag="a">
						{{ $t('tpl.globalNavHeader.link_investors') }}
					</router-link>
				</li>
				<li>
					<router-link v-bind:to="`/${$store.state.local}/webmasters/overview`" tag="a">
						{{ $t('tpl.globalNavHeader.link_webmasters') }}
					</router-link>
				</li>
				<li>
					<router-link v-bind:to="`/${$store.state.local}/developers/overview`" tag="a">
						{{ $t('tpl.globalNavHeader.link_developers') }}
					</router-link>
				</li>
				<!--<li>
					<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a">
						{{ $t('tpl.globalNavHeader.link_contact') }}
					</router-link>
				</li>-->
				<li>
					<a class="navButton" href="https://platform.jsecoin.com">
						{{ $t('tpl.globalNavHeader.link_login') }}
					</a>
				</li>
				<li id="JSEW-translate" :class="{'active':translate}">
					<a v-on:click="toggleTranslateDisplay"><img width="25px" src="../../assets/svg/google_translate_logo.svg" /></a>
					<div id="JSEW-googleTransate">
						<div id="JSEW-translateTitle">
							<img id="JSEW-googleArr" width="20px" src="../../assets/svg/arrow-up.svg" />
							Translate the page
						</div>
						<div id="JSEW-translateContent">
							<div id="google_translate_element"></div>
							<p>
								Feel free to ask any questions, leave your comments, wishes and suggestions regarding
								the Google Translation at our <a id="JSEW-telegramLink" href="https://t.me/jsetelegram">Telegram Chat</a>.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'globalNavHeader',

	data() {
		return {
			translate: false,
		};
	},
	mounted() {
		if (typeof (window.googleTranslateElementInit) === 'undefined') {
			window.googleTranslateElementInit = () => {
				google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
			};
		}
		if (document.getElementById('JSEW-googleT') === null) {
			//set tanslate ele
			const t = document.createElement('script');
			const s = document.getElementsByTagName('script')[0];

			//script attrs
			t.async = true;
			t.defer = true;
			t.id = 'JSEW-googleT';
			t.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

			//inject
			s.parentNode.insertBefore(t, s);
		}
	},
	methods: {
		toggleTranslateDisplay() {
			const self = this;
			self.translate = !self.translate;
		},
	},
};
</script>

<style>
#JSEW-globalNav {
	float:right;
	margin-top:16px;
	/*font-size:0.875em;*/
	font-size:0.85em;
}
#JSEW-googleArr {
    position: absolute;
    top: -8px;
    right: 16px;
}
#JSEW-globalNav ul {
	margin:0px;
	margin-right:22px;
	padding:0px;
}

#JSEW-globalNav li {
	float: left;
	list-style: none;
}
#JSEW-telegramLink {
	display: inline-block;
	color:#333;
	text-decoration: underline;
}
#JSEW-globalNav li > a {
	padding:8px 10px;
	color:#fff;
	font-weight: 800;
	text-transform: uppercase;
}
#JSEW-globalNav li > a:hover {
	/*background: #103764;*/
	background: rgba(0,0,0,0.3);
	border-radius: 60px;
}

#JSEW-globalNav li > a.navButton {
	border:solid 2px;
	border-radius: 3px;
	margin-left:20px;
}

#JSEW-globalNav #JSEW-translate {
	position: relative;
}
#JSEW-globalNav #JSEW-translate #JSEW-googleTransate {
	display: none;
}

#JSEW-globalNav #JSEW-translate.active #JSEW-googleTransate {
	display: block;
}

#JSEW-globalNav #JSEW-translate > a {
    padding: 0px;
    height: 34px;
    display: block;
    /*padding: 10px;*/
    width: 34px;
    border-radius: 4px;
    margin-left: 10px;
    padding: 5px;
    margin-top: -8px;
	cursor:pointer;
}

#JSEW-googleTransate {
	position: absolute;
	background:#fff;
	top:36px;
	border-radius: 4px;
	right:-10px;
	z-index:1000;
    min-width: 280px;
	box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
}
#JSEW-translateTitle {
	text-align:center;
	padding:4px 8px;
	background:#edeef2;
	color:#000;
	border-radius: 4px 4px 0px 0px;
	position: relative;
}
#JSEW-translateContent {
	padding:16px;
	text-align:center;
}
#JSEW-translateContent p {
	margin:10px 0px 0px 0px;
	padding:0px;
	color:#333;
	line-height:1.2em;
}

#JSEW-globalNav  #JSEW-translate.active > a {
	background: rgba(0,0,0,0.3);
}
/* Your styles */

#JSEW-burger {
	width:60px;
	height: 50px;
	background:transparent;
	border-radius: 8px;
	position: absolute;
	right: 10px;
	top:10px;
	/*box-shadow:0px 2px 3px 0px rgba(0,0,0,0.4);*/
	box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.4), inset 0px 0px 0px 2px #fff;
	padding:6px 0px 0px 0px;
	zoom:66%;
	z-index: 10000000;
}
#JSEW-burger.is-active {
	box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.4), inset 0px 0px 0px 4px #164677;
}

.hamburger {
	padding: 15px 15px;
	display: inline-block;
	cursor: pointer;
	transition-property: opacity, filter;
	transition-duration: 0.15s;
	transition-timing-function: linear;
	font: inherit;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;
}

.hamburger:hover {
	opacity: 0.7;
}

.hamburger-box {
	width: 40px;
	height: 24px;
	display: inline-block;
	position: relative;
}

.hamburger-inner {
	display: block;
	top: 50%;
	margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
	width: 40px;
	height: 4px;
	background-color: #fff;
	border-radius: 4px;
	position: absolute;
	transition-property: transform;
	transition-duration: 0.15s;
	transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
	content: "";
	display: block;
}

.hamburger-inner::before {
	top: -10px;
}

.hamburger-inner::after {
	bottom: -10px;
}


/*
* Spin
*/

.hamburger--spin .hamburger-inner {
	transition-duration: 0.22s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin .hamburger-inner::before {
	transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}

.hamburger--spin .hamburger-inner::after {
	transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.is-active .hamburger-inner {
	transform: rotate(225deg);
	transition-delay: 0.12s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	background-color:#164677;
}

.hamburger--spin.is-active .hamburger-inner::before {
	top: 0;
	opacity: 0;
	transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
	background-color:#164677;
}

.hamburger--spin.is-active .hamburger-inner::after {
	bottom: 0;
	transform: rotate(-90deg);
	transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
	background-color:#164677;
}
</style>
