<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-developerOverview" class="wrapper">
			<div class="row">
				<div class="col" style="max-width:inherit;flex-grow:0;padding-right:40px;margin-right:40px; border-right:solid 1px #eee;width:240px;">
					<nav id="JSEW-subNav">
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
				<div class="col">
					<h1 class="heading">{{ $t('pages.developerOverview.heading_developer') }}</h1>
					<h2 class="subHeading">{{ $t('pages.developerOverview.subheading_developer') }}</h2>

					<p>
						{{ $t('pages.developerOverview.para_main1') }}
					</p>
					<p>
						<a href="https://developer.jsecoin.com/" target="_BLANK">https://developer.jsecoin.com/</a>
					</p>
					<p>
						{{ $t('pages.developerOverview.para_main2') }}
					</p>
					<p>
						{{ $t('pages.developerOverview.para_main3') }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'developerOptions',
	metaInfo () {
		return {
			title: this.$t('pages.developerOverview.meta.title') + ' 🤓',
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.developerOverview.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.developerOverview.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-developerOverview {
	padding:30px 0px;
}


</style>
