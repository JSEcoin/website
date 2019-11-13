<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-downloads" class="wrapper">
			<h1 class="heading">{{ $t('pages.downloads.heading_downloads') }}</h1>
			<h2 class="subHeading">{{ $t('pages.downloads.subheading_downloads') }}</h2>
			<br>
			<div class="row">
				<div class="col">
					<h1 class="heading">{{ $t('pages.downloads.desktop_app') }}</h1>
					<p>
						{{ $t('pages.downloads.desktop_app_description') }}
					</p>
					<p>
						{{ $t('pages.downloads.system_recommendation') }}
					</p>
					<br>
					<p>
						<a href="https://github.com/JSEcoin/platform/releases/download/v0.6.5-beta/JSEcoin-0.6.5-github-Windows.exe" class="button JSEW-download-button"><i class="fa fa-download"></i> {{ $t('pages.downloads.download') }}</a>
					</p>
				</div>
				<div class="col center">
					<img src="../assets/images/desktop_app.png" class="dl-responsive-image" alt="Desktop App" />
				</div>
			</div>

			<div class="row">
				<div class="col">
					<h1 class="heading">{{ $t('pages.downloads.mobile_app') }}</h1>
					<p>
						{{ $t('pages.downloads.mobile_app_description') }}
					</p>
					<br>
					<p>
						<a href="https://play.google.com/store/apps/details?id=com.jsecoin.alpha" class="button JSEW-download-button"><i class="fa fa-download"></i> {{ $t('pages.downloads.download') }}</a>
					</p>
				</div>
				<div class="col center">
					<img src="../assets/images/android_app.png" class="dl-responsive-image" alt="Android App" />
				</div>
			</div>

			<h1 id="scripts" class="heading">{{ $t('pages.downloads.plugins') }}</h1>
			<h2 class="subHeading">{{ $t('pages.downloads.wordpress_plugins') }}</h2>
			<p><a href="https://jsecoin.com/downloads/JSEcoinWordpress.zip">{{ $t('pages.downloads.wordpress_mining_plugin') }}</a> - {{ $t('pages.downloads.wordpress_mining_plugin_description') }}</p>
			<p><a href="https://jsecoin.com/downloads/JSEcoinCaptcha.zip">Wordpress Captcha Plugin</a> - Prevent comment spam on your wordpress blog</p>
			<p><a href="https://jsecoin.com/downloads/JSEcoinWoocommerce.zip">{{ $t('pages.downloads.woocommerce_payment_gateway') }}</a> - {{ $t('pages.downloads.woocommerce_payment_gateway_description') }}</p>
			<h2 class="subHeading">{{ $t('pages.downloads.joomla_plugins') }}</h2>
			<p><a href="https://jsecoin.com/downloads/JSEcoinJoomla.zip">{{ $t('pages.downloads.joomla_mining_plugin') }}</a> - {{ $t('pages.downloads.joomla_mining_plugin_description') }}</p>
			<h2 class="subHeading">{{ $t('pages.downloads.anti_adblocker') }}</h2>
			<p><a href="https://jsecoin.com/downloads/JSEcoinAntiAdblocker.zip">{{ $t('pages.downloads.anti_adblocker_script') }}</a> - {{ $t('pages.downloads.anti_adblocker_description') }}</p>
			<h2 class="subHeading">{{ $t('pages.downloads.php_wrapper') }}</h2>
			<p><a href="https://jsecoin.com/downloads/JSEcoinPHPWrapper.zip">{{ $t('pages.downloads.php_wrapper_script') }}</a> - {{ $t('pages.downloads.php_wrapper_description') }}</p>


		</div>
	</div>
</template>

<script>
export default {
	name: 'downloads',
	metaInfo () {
		return {
			title: this.$t('pages.downloads.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.downloads.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.downloads.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-downloads {
	padding:30px 0px;
}
.JSEW-download-button {
	max-width: 200px;
	text-align: center;
	margin: 10px auto 30px auto;;
}
.dl-responsive-image {
	max-width: 100%;
}
</style>
