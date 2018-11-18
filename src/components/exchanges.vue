<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-exchanges" class="wrapper">
			<h1 class="heading">{{ $t('pages.exchanges.heading_exchanges') }}</h1>
			<h2 class="subHeading">Is there a wallet available to store tokens?</h2>
			<p>
				It is possible to store tokens within the JSE platform at https://jsecoin.com/platform
			</p>
			<p>
				Alternatively you can withdraw your tokens to any 3rd party ERC20 compatible wallet. (Before making a withdrawl you should check with your wallet provider to ensure that it will be compatible with the JSE ERC20 token. 
			</p>

			<h2 class="subHeading">To add a custom token please use the following details</h2>

			<p>
				<b>Token Contract Address:</b> 0x2d184014b5658C453443AA87c8e9C4D57285620b<br />

				<b>Token Symbol:</b> JSE<br />

				<b>Decimals:</b> 18<br />
			</p>
			<h2 class="subHeading">Which exchanges is the JSE token listed on</h2>
			<p>
				JSEcoin will is listed and availabl on the following exchanges:
			</p>
			<div style="display:flex; align-items: center;">
				<a href="https://bit.ly/2NV1eOW" target="_blank"><img src="../assets/images/exchanges/latoken.png" class="exchange-image dl-responsive-image" alt="LATOKEN" /></a>
				<a href="https://idex.market" target="_blank"><img src="../assets/images/exchanges/idex.png" class="exchange-image dl-responsive-image" alt="IDEX" /></a>
				<!--<a href="https://tokenjar.io/" target="_blank"><img src="../assets/images/exchanges/tokenjar.png" class="exchange-image dl-responsive-image" alt="TOKENJAR" /></a>-->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'exchanges',
	metaInfo () {
		return {
			title: this.$t('pages.exchanges.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.exchanges.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.exchanges.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-exchanges {
	padding:30px 0px;
}
.exchange-image {
	max-width: 180px;
}
</style>
