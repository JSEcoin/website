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
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'globalNavHeader',
};
</script>

<style>
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
