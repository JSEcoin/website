<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="li">
					{{ $t('pages.navigation.technical.link_overview') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/ecosystem`" tag="li" class="active">
					{{ $t('pages.navigation.technical.link_ecosystem') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="li">
					{{ $t('pages.navigation.technical.link_stats') }}
				</router-link>
			</ul>
		</nav>


		<div id="JSEW-miningCoins">
			<div class="wrapper">
				<div>
					<div class="center-div-custom">
						<h1 class="heading h1-custom">
							{{ $t('pages.ecosystem.title') }}
						</h1>
						<h2 class="subHeading">
							{{ $t('pages.ecosystem.para_main1') }}
						</h2>
					</div>
					<div class="center-div-custom" style="margin: 30px 0px;">
						<img src="../../assets/images/ecosystem.png" style="width:90%; max-width: 800px;" :alt="$t('pages.ecosystem.title')"/>
					</div>
					<h2 class="heading">{{ $t('pages.ecosystem.adExchange') }}</h2>
					<p>
						{{ $t('pages.ecosystem.para_main2') }}
					</p>
					<p>
						{{ $t('pages.ecosystem.para_main3') }}
					</p>
					<h2 class="heading">{{ $t('pages.ecosystem.enterpriseSolutions') }}</h2>
					<p>
						{{ $t('pages.ecosystem.para_main4') }}
					</p>
					<p>
						{{ $t('pages.ecosystem.para_main5') }}
					</p>
					<p>
						{{ $t('pages.ecosystem.para_main6') }}
					</p>
					<p>
						{{ $t('pages.ecosystem.para_main7') }}
					</p>
					<h2 class="heading">{{ $t('pages.ecosystem.merchantTools') }}</h2>
					<p>
						{{ $t('pages.ecosystem.para_main8') }}
					</p>
					<ul>
						<li class="merchant-list">{{ $t('pages.ecosystem.merchant_list1') }}</li>
						<li class="merchant-list">{{ $t('pages.ecosystem.merchant_list2') }}</li>
						<li class="merchant-list">{{ $t('pages.ecosystem.merchant_list3') }}</li>
						<li class="merchant-list">{{ $t('pages.ecosystem.merchant_list4') }}</li>
						<li class="merchant-list">{{ $t('pages.ecosystem.merchant_list5') }}</li>
						<li class="merchant-list">{{ $t('pages.ecosystem.merchant_list6') }}</li>
						<li class="merchant-list">{{ $t('pages.ecosystem.merchant_list7') }}</li>
					</ul>
					<p>
						{{ $t('pages.ecosystem.para_main9') }}
					</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'techOverview',
	metaInfo () {
		return {
			title: this.$t('pages.techOverview.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.techOverview.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.techOverview.meta.keywords'),
				},
			],
		};
	},
	data() {
		return {
			screenType: 'login',
		};
	},
	methods: {
		showscreen(screen) {
			this.screenType = screen;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-ecosystem {
	padding: 30px 0px;
}

#JSEW-ecosystem {
	background-color:#fafafa;
}

#JSEW-monitseBanner {
	padding:30px 0px;
	background-image:url("../../assets/images/banners/monetise.jpg");
	background-repeat: no-repeat;
	background-position: center top;
	background-size:cover;
	min-height:220px;
	font-size:20px;
}

#JSEW-monitseBanner .heading,
#JSEW-monitseBanner .subHeading {
	color:#fff;
}

.merchant-list {
	font-size: 0.875em;
	margin-left: 20px;
}
.h1-custom {
	margin-top: 40px;
}
.center-div-custom {
	width: 100%;
	text-align: center;
}

</style>
