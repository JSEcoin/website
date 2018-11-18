<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/about`" tag="li">
					{{ $t('pages.navigation.about.link_about') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/meetTheTeam`" tag="li">
					{{ $t('pages.navigation.about.link_team') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/ourVision`" tag="li">
					{{ $t('pages.navigation.about.link_vision') }}
				</router-link>
				<!--<router-link v-bind:to="`/${$store.state.local}/about/careers`" tag="li">
					{{ $t('pages.navigation.about.link_careers') }}
				</router-link>-->
				<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="li" class="active">
					{{ $t('pages.navigation.about.link_press') }}
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-press" class="wrapper">
			<div class="center">
				<h1 class="heading center">{{ $t('pages.press.section_overview.heading_press') }}</h1>
				<h2 class="subHeading center">{{ $t('pages.press.section_overview.subheading_press') }}</h2>
			</div>

			<div class="row" style="margin-top:20px;">
				<div class="col verticalDivide">
					<dl>
						<dt><img width="170" src="../../assets/images/about/logo_symantec.png" :alt="$t('pages.press.section_overview.alt_symantecLogo')" /></dt>
						<dd>
							{{ $t('pages.press.section_overview.strapline_1') }}
						</dd>
						<dt><img width="120" src="../../assets/images/about/logo_bbc.png" :alt="$t('pages.press.section_overview.alt_BBCLogo')"/></dt>
						<dd>
							{{ $t('pages.press.section_overview.strapline_2') }}
						</dd>
						<dt><img width="180" src="../../assets/images/about/logo_bitcoin.png" :alt="$t('pages.press.section_overview.alt_BitcoinLogo')" /></dt>
						<dd>
							{{ $t('pages.press.section_overview.strapline_3') }}
						</dd>
					</dl>
					<!--
					<p>
						Feel free to use any of the images, quotes or stats from this site in your press article.
						All we ask is that we are not associated with the hidden background Monero mining platforms.
						JSEcoin has never and will never participate in hidden background website mining.
					</p>
					<p>
						The JSEcoin project is dedicated to building new blockchain technologies based on the web
						and does not mine Bitcoin or Monero. Please read the frequently asked questions documents
						for further information.
					</p>
					<p>
						If you have any questions or would like to reach out to one of the team please
						<router-link v-bind:to="`/${$store.state.local}/support/contact`" class="active">
							contact us
						</router-link>
						.
					</p>-->

				</div>
				<div class="col center">
					<img src="../../assets/images/about/press.png" width="80%" style="margin:40px 0px;" :alt="$t('pages.press.section_overview.alt_pressMedia')" />
				</div>
			</div>

			<!--<button class="button"><i class="fa fa-heart"></i> Read More Articles</button>-->
		</div>

		<div id="JSEW-media">
			<div class="wrapper">
				<div class="row">
					<div class="col center">
						<img src="../../assets/images/press.png" style="width:80%; margin-top:20px;" :alt="$t('pages.press.section_media.alt_mediaPackDownload')" />
					</div>
					<div class="col">
						<h1 class="heading">{{ $t('pages.press.section_media.heading_media') }}</h1>
						<!--<h2 class="subHeading center">Feel free to make use of the following approved assets</h2>-->

						<p>
							{{ $t('pages.press.section_media.para_main1') }}
						</p>
						<p>
							{{ $t('pages.press.section_media.para_main2') }}
						</p>
						<p>
							{{ $t('pages.press.section_media.para_main3') }}
							<router-link v-bind:to="`/${$store.state.local}/support/contact`" class="active">
								{{ $t('pages.press.section_media.link_contactUs') }}
							</router-link>
							.
						</p>

						<div class="center">
							<a href="/static/media.zip" class="button" style="display:inline-block;">{{ $t('pages.press.section_media.button_downloadMediaPack') }}</a>
						</div>
					</div>
				</div>

				<!--
				<div class="mediaPackRow">
					<div>
						<a href="/static/images/press/coin_silver.png" download="coin_silver"><img src="/static/images/press/coin_silver.png" alt="JSE Silver Coin" /></a>
					</div>
					<div>
						<a href="/static/images/press/coin_gold.png" download="coin_gold"><img src="/static/images/press/coin_gold.png" alt="JSE Gold Coin" /></a>
					</div>
				</div>
				<div class="mediaPackRow">
					<div>
						<a href="/static/images/press/jseminicon_1.png" download="jseminicon_1"><img src="/static/images/press/jseminicon_1.png" alt="JSE Icon 1" /></a>
					</div>
					<div>
						<a href="/static/images/press/jseminicon_2.png" download="jseminicon_2"><img src="/static/images/press/jseminicon_2.png" alt="JSE Icon 2"  /></a>
					</div>
					<div>
						<a href="/static/images/press/jseminicon_3.png" download="jseminicon_3"><img src="/static/images/press/jseminicon_3.png" alt="JSE Icon 3"  /></a>
					</div>
					<div>
						<a href="/static/images/press/jseminicon_4.png" download="jseminicon_4"><img src="/static/images/press/jseminicon_4.png" alt="JSE Icon 4"  /></a>
					</div>
				</div>
				<div class="mediaPackRow">
					<div>
						<a href="/static/images/press/jselogo_1.png" download="jselogo_1"><img src="/static/images/press/jselogo_1.png" alt="JSE Logo 1" /></a>
					</div>
					<div>
						<a href="/static/images/press/jselogo_2.png" download="jselogo_2"><img src="/static/images/press/jselogo_2.png" alt="JSE Logo 2" /></a>
					</div>
				</div>
				<div class="mediaPackRow">
					<div>
						<a href="/static/images/press/jsebadge_1.png" download="jsebadge_1"><img src="/static/images/press/jsebadge_1.png" alt="JSE Badge 1" /></a>
					</div>
					<div>
						<a href="/static/images/press/jsebadge_2.png" download="jsebadge_2"><img src="/static/images/press/jsebadge_2.png" alt="JSE Badge 2" /></a>
					</div>
					<div>
						<a href="/static/images/press/jsebadge_3.png" download="jsebadge_3"><img src="/static/images/press/jsebadge_3.png" alt="JSE Badge 3" /></a>
					</div>
				</div>
				<div class="mediaPackRow">
					<div>
						<a href="/static/images/press/jsecoin_1.png" download="jsecoin_1"><img src="/static/images/press/jsecoin_1.png" alt="JSE Coin 1" /></a>
					</div>
					<div>
						<a href="/static/images/press/jsecoin_2.png" download="jsecoin_2"><img src="/static/images/press/jsecoin_2.png" alt="JSE Coin 2" /></a>
					</div>
					<div>
						<a href="/static/images/press/jsecoin_3.png" download="jsecoin_3"><img src="/static/images/press/jsecoin_3.png" alt="JSE Coin 3" /></a>
					</div>
					<div>
						<a href="/static/images/press/jsecoin_4.png" download="jsecoin_4"><img src="/static/images/press/jsecoin_4.png" alt="JSE Coin 4" /></a>
					</div>
				</div>
				-->
			</div>
		</div>
	</div>
</template>


<script>
export default {
	name: 'press',
	metaInfo () {
		return {
			title: this.$t('pages.press.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.press.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.press.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-press {
	padding:30px 0px;
}

#JSEW-media {
	padding:30px 0px;
	background:#fafafa;
}

.mediaPackRow {
	display: flex;
	justify-content:center;
	margin:20px 0px;
}

.mediaPackRow div {
	text-align:center;
}

.mediaPackRow img {
	width:40%;
}

.verticalDivide {
	border-right:solid 1px #eee;
}

#JSEW-press dl {
	padding:0px 20px;
}
#JSEW-press dd {
	padding:0px;
	margin:10px 20px 20px 0px;
	text-transform: uppercase;
	color:#555;
	font-size:0.85em;
	font-weight:bold;
}
</style>
