<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/legal/userAgreement`" tag="li" class="active">
					User Agreement
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/privacyPolicy`" tag="li">
					Privacy Policy
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="li">
					Terms &amp; Conditions
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-userAgreement" class="wrapper">

		</div>
	</div>
</template>

<script>
export default {
	name: 'userAgreement',
    metaInfo: {
		title: 'User Agreement',
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
