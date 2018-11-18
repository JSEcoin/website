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
				<li onclick="window.location.href='https://developer.jsecoin.com'">
						{{ $t('pages.navigation.technical.link_APIS') }}
				</li>
				<li onclick="window.location.href='https://developer.jsecoin.com/samples'" class="active">
						{{ $t('pages.navigation.technical.link_samples') }}
				</li>
				<!--<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="li">
					{{ $t('pages.navigation.technical.link_support') }}
				</router-link>-->
				<!--
				<router-link v-bind:to="`/${$store.state.local}/technical/APIS`" tag="li">
					{{ $t('pages.navigation.technical.link_APIS') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/samples`" tag="li">
					{{ $t('pages.navigation.technical.link_samples') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/support`" tag="li">
					{{ $t('pages.navigation.technical.link_support') }}
				</router-link>
				-->
			</ul>
		</nav>

		<div id="JSEW-samples" class="wrapper center">
			<p class="infoMsg">
				{{ $t('pages.samples.para_infoMsg_line1') }}<br />
				{{ $t('pages.samples.para_infoMsg_line2') }}

				<router-link v-bind:to="`/blog/development`">
					{{ $t('pages.samples.link_oldBlogPosts') }}
				</router-link>.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'samples',
	metaInfo () {
		return {
			title: this.$t('pages.samples.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.samples.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.samples.meta.keywords'),
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
