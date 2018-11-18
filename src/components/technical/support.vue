<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="li">
					{{ $t('pages.navigation.technical.link_overview') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="li">
					{{ $t('pages.navigation.technical.link_stats') }}
				</router-link>
				<li>
					<a href="https://developer.jsecoin.com">
						{{ $t('pages.navigation.technical.link_APIS') }}
					</a>
				</li>
				<li>
					<a href="https://developer.jsecoin.com/samples">
						{{ $t('pages.navigation.technical.link_samples') }}
					</a>
				</li>
				<!--<li>
					<a href="https://jsecoin.com/en/support/contact">
						{{ $t('pages.navigation.technical.link_support') }}
					</a>
				</li>-->
			</ul>
		</nav>

		<div id="JSEW-support" class="wrapper">
			<div class="row">
				<div class="col">
					<h1 class="heading">{{ $t('pages.support.heading_support') }}</h1>
					<h2 class="subHeading">{{ $t('pages.support.subheading_support') }}</h2>
					<p>
						{{ $t('pages.support.para_main1') }}
					</p>
					<p>
						<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a" class="active">
							{{ $t('pages.support.link_contactUs') }} ›
						</router-link>
					</p>
				</div>
				<div class="col left">

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'support',
	metaInfo () {
		return {
			title: this.$t('pages.support.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.support.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.support.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-support {
	padding: 30px 0px;
}

</style>
