<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/about`" tag="li" class="active">
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
				<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="li">
					{{ $t('pages.navigation.about.link_press') }}
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-overviewPage" class="wrapper row">

			<div class="col">
				<h1 class="heading">{{ $t('pages.about.heading_about') }}</h1>
				<h2 class="subHeading">{{ $t('pages.about.subheading_about') }}</h2>

				<p>
					{{ $t('pages.about.para_main1') }}
				</p>
				<p>
					{{ $t('pages.about.para_main2') }}
				</p>
				<p>
					{{ $t('pages.about.para_main3') }}
				</p>
				<p>
					{{ $t('pages.about.para_main4') }}
				</p>
				<p>
					{{ $t('pages.about.para_main5') }}
				</p>
				<a class="button" style="margin: 20px;" href="/whitepaper.pdf" target="_BLANK">The Official JSEcoin Whitepaper</a>
			</div>
			<div class="col center" style="align-self: center;">
				<img width="80%" src="../assets/images/about/about_gfxIco2.png" :alt="$t('pages.about.alt_about')" />
			</div>

		</div>

	</div>
</template>

<script>
export default {
	name: 'about',
	metaInfo () {
		return {
			title: this.$t('pages.about.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.about.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.about.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-overviewPage {
	padding:30px 0px;
}

#JSEW-overviewPage .col {
    flex-grow: 1;
    max-width: 500px;
    position: relative;
}

#JSEW-overviewPage .col {
	max-width: inherit;
}
</style>
