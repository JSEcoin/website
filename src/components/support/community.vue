<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/support`" tag="li">
					Support Center
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/support/community`" tag="li" class="active">
					{{ $t('pages.navigation.support.link_community') }}
				</router-link>
				<!--<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="li">
					{{ $t('pages.navigation.support.link_contact') }}
				</router-link>-->
			</ul>
		</nav>

		<div  id="JSEW-community" class="center">
			<h1 class="heading">{{ $t('pages.community.heading_community') }}</h1>
			<h1 class="subHeading">{{ $t('pages.community.subheading_community') }}</h1>

			<nav class="centerFlex">
				<ul id="JSEW-communityLinks">
					<li><a target="_blank" title="Facebook" href="https://www.facebook.com/JSEcoin-494968414186643/"><img src="../../assets/images/ico_facebook.png" alt="Facebook logo button" /></a></li>
					<li><a target="_blank" title="Discord" href="https://discord.gg/3gBZsA4"><img src="../../assets/images/ico_discord.png" alt="Discord logo button" /></a></li>
					<li><a target="_blank" title="Twitter" href="https://twitter.com/jsecoin"><img src="../../assets/images/ico_twitter.png" alt="Twitter logo button" /></a></li>
					<li><a target="_blank" title="LinkedIn" href="https://www.linkedin.com/company/25048028/"><img src="../../assets/images/ico_linkedin.png" alt="LinkedIn logo button" /></a></li>
					<li><a target="_blank" title="Telegam" href="https://t.me/jsetelegram"><img src="../../assets/images/ico_telegram.png" alt="Telegam logo button" /></a></li>
					<li><a target="_blank" title="YouTube" href="https://www.youtube.com/channel/UCHtIF9KggJn9TDzr8pRYsYA"><img src="../../assets/images/ico_youtube.png" alt="YouTube logo button" /></a></li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>

export default {
	name: 'community',
	metaInfo () {
		return {
			title: this.$t('pages.community.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.community.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.community.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-community {
	padding:30px 0px;
}
</style>
