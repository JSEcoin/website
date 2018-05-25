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
				<li>
					<a href="https://jsecoin.com/en/support/contact">
						{{ $t('pages.navigation.technical.link_support') }}
					</a>
				</li>
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
