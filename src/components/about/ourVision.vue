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
				<router-link v-bind:to="`/${$store.state.local}/about/ourVision`" tag="li" class="active">
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

		<div id="JSEW-ourVision" class="wrapper row">

			<div class="col">
				<h1 class="heading">{{ $t('pages.ourVision.section_overview.heading_vision') }}</h1>
				<h2 class="subHeading">{{ $t('pages.ourVision.section_overview.subheading_vision') }}</h2>

				<p>
					{{ $t('pages.ourVision.section_overview.para_main1') }}
				</p>
				<p>
					{{ $t('pages.ourVision.section_overview.para_main2') }}
				</p>
				<p>
					{{ $t('pages.ourVision.section_overview.para_main3') }}
				</p>
				<p>
					{{ $t('pages.ourVision.section_overview.para_main4') }}
				</p>
			</div>
			<div class="col center">
				<img src="../../assets/images/about/vision.png" width="60%" style="margin-top:100px;" :alt="$t('pages.ourVision.section_overview.alt_vision')" />
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'vision',
	metaInfo () {
		return {
			title: this.$t('pages.ourVision.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.ourVision.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.careers.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#JSEW-ourVision {
	padding:30px 0px;
}


</style>
