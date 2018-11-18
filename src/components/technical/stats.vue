<template>
	<div id="JSEW-wrapper">

		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/technical/overview`" tag="li">
					{{ $t('pages.navigation.technical.link_overview') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/technical/stats`" tag="li" class="active">
					{{ $t('pages.navigation.technical.link_stats') }}
				</router-link>
				<li onclick="window.location.href='https://developer.jsecoin.com'">
						{{ $t('pages.navigation.technical.link_APIS') }}
				</li>
				<li onclick="window.location.href='https://developer.jsecoin.com/samples'">
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

		<div id="JSEW-globalStatsBar">
			<miniStat />
		</div>

		<div id="JSEW-stats" class="wrapper center">
			<h1 class="heading">{{ $t('pages.stats.section_map.heading_stats') }}</h1>
			<h2 class="subHeading">{{ $t('pages.stats.section_map.subheading_stats') }}</h2>

			<div class="row left" style="margin-top:30px;">
				<div id="JSEW-mapGFX" class="col center">
					<img src="../../assets/images/technical/map.png" width="90%" :alt="$t('pages.stats.section_map.alt_map')" />
				</div>
				<div id="JSEW-regions" class="col">
					<ol>
						<li class="flag usa">{{ $t('pages.stats.section_map.country_US') }}</li>
						<li class="flag ru">{{ $t('pages.stats.section_map.country_RU') }}</li>
						<li class="flag cn">{{ $t('pages.stats.section_map.country_CN') }}</li>
						<li class="flag in">{{ $t('pages.stats.section_map.country_IN') }}</li>
						<li class="flag ua">{{ $t('pages.stats.section_map.country_UA') }}</li>
						<li class="flag gb">{{ $t('pages.stats.section_map.country_GB') }}</li>
						<li class="flag de">{{ $t('pages.stats.section_map.country_DE') }}</li>
						<li class="flag jp">{{ $t('pages.stats.section_map.country_JP') }}</li>
						<li class="flag ca">{{ $t('pages.stats.section_map.country_CA') }}</li>
						<li class="flag id">{{ $t('pages.stats.section_map.country_ID') }}</li>
					</ol>
				</div>
			</div>

		</div>

		<div id="JSEW-CPUOverview" class="center">
			<a class="button" style="display:inline-block;" href="https://blockchain.jsecoin.com/#/Charts" target="_blank">Graphical Overview</a><br><br>
			<p class="infoMsg">
				{{ $t('pages.stats.section_cpuOverview.para_main1_infoMsg_line1') }}<br /><br />
				{{ $t('pages.stats.section_cpuOverview.para_main1_infoMsg_line2') }}
			</p>
		</div>

		<div id="JSEW-CPUOverview" class="center" style="display:none;">
			<h1 class="heading">{{ $t('pages.stats.section_cpuBenchmark.heading_bench') }}</h1>
			<h2 class="subHeading"></h2>


			<nav id="JSEW-subHeaderNav" style="margin-top:30px;">
				<ul class="wrapper">
					<li v-on:click="activateOSTab('pc')" :class="{ active: activateOS === 'pc' }">
						PC
					</li>
					<li v-on:click="activateOSTab('mac')" :class="{ active: activateOS === 'mac' }">
						MacOS
					</li>
					<li v-on:click="activateOSTab('linux')" :class="{ active: activateOS === 'linux' }">
						Linux
					</li>
					<li class="divider"></li>
					<li v-on:click="activateBrowserTab('chrome')" :class="{ active: activateBrowser === 'chrome' }">
						Chrome
					</li>
					<li v-on:click="activateBrowserTab('firefox')" :class="{ active: activateBrowser === 'firefox' }">
						Firefox
					</li>
					<li v-on:click="activateBrowserTab('edge')" :class="{ active: activateBrowser === 'edge' }">
						Edge
					</li>
				</ul>
			</nav>
			<nav id="JSEW-subHeaderNav">
				<ul class="wrapper">
					<li v-on:click="activatePowerTab('high')" :class="{ active: activatePower === 'high' }">
						High
					</li>
					<li v-on:click="activatePowerTab('average')" :class="{ active: activatePower === 'average' }">
						Average
					</li>
					<li v-on:click="activatePowerTab('low')" :class="{ active: activatePower === 'low' }">
						Low
					</li>
				</ul>
			</nav>

			<div class="wrapper" style="padding:30px 0px;">
				<div class="row">
					<div class="col">
						<table v-if="activateBrowser === 'chrome'">
						<caption>Chrome</caption>
						<thead>
							<tr>
								<th></th>
								<th>CPU</th>
								<th>Memory</th>
								<th>Network</th>
								<th>GPU</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Nothing</td>
								<td>7.6%</td>
								<td>117mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>JSEcoin</td>
								<td>8.2%</td>
								<td>135mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>Monero</td>
								<td>99%</td>
								<td>320mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>Video</td>
								<td>11.5%</td>
								<td>471mb</td>
								<td>0mbs</td>
								<td>1.6%</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="5">
									standard: 20.5k h/s
								</td>
							</tr>
							<tr>
								<td colspan="5">
									fastFallback: 16.1k h/s
								</td>
							</tr>
						</tfoot>
						</table>


						<table v-if="activateBrowser === 'firefox'">
						<caption>Firefox</caption>
						<thead>
							<tr>
								<th></th>
								<th>CPU</th>
								<th>Memory</th>
								<th>Network</th>
								<th>GPU</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Nothing</td>
								<td>0.5%</td>
								<td>266mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>JSEcoin</td>
								<td>1.6%</td>
								<td>292mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>Monero</td>
								<td>58%</td>
								<td>324mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>Video</td>
								<td>3%</td>
								<td>471mb</td>
								<td>0mbs</td>
								<td>3.7%</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="5">
									standard: 4.8k h/s
								</td>
							</tr>
							<tr>
								<td colspan="5">
									fastFallback: 12.5k h/s
								</td>
							</tr>
						</tfoot>
						</table>

						<table v-if="activateBrowser === 'edge'">
						<caption>EDGE</caption>
						<thead>
							<tr>
								<th></th>
								<th>CPU</th>
								<th>Memory</th>
								<th>Network</th>
								<th>GPU</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Nothing</td>
								<td>0.6%</td>
								<td>163mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>JSEcoin</td>
								<td>0.8%</td>
								<td>156mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>Monero</td>
								<td>99%</td>
								<td>302mb</td>
								<td>0mbs</td>
								<td>0%</td>
							</tr>
							<tr>
								<td>Video</td>
								<td>2.9%</td>
								<td>264mb</td>
								<td>0mbs</td>
								<td>1.8%</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="5">
									standard: 13.3k h/s
								</td>
							</tr>
							<tr>
								<td colspan="5">
									fastFallback: 14.5k h/s
								</td>
							</tr>
						</tfoot>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import miniStat from '../segment/miniStat';

export default {
	name: 'stats',
	metaInfo () {
		return {
			title: this.$t('pages.stats.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.stats.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.stats.meta.keywords'),
				},
			],
		};
	},
	components: {
		miniStat,
	},
	data() {
		return {
			activateBrowser: 'chrome',
			activateOS: 'pc',
			activatePower: 'high',
			device: {
				pc: {
					chrome: {
						high: {
							spec: '',
						},
						average: {
							spec: '',
						},
						low: {
							spec: '',
						},
					},
					firefox: {
						high: {
							spec: '',
						},
						average: {
							spec: '',
						},
						low: {
							spec: '',
						},
					},
					edge: {
						high: {
							spec: '',
						},
						average: {
							spec: '',
						},
						low: {
							spec: '',
						},
					},
				},
				mac: {

				},
				linux: {

				},
			},
		};
	},

	methods: {
		//update transaction display
		activateBrowserTab(browser) {
			this.activateBrowser = browser;
		},
		activateOSTab(os) {
			this.activateOS = os;
		},
		activatePowerTab(power) {
			this.activatePower = power;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#JSEW-stats {
	padding: 30px 0px;
}

#JSEW-CPUOverview {
	padding: 30px 0px;
	background: #fafafa;
}

#JSEW-stats .col {
	max-width: inherit;
}
#JSEW-regions {
	flex-grow: 0;
	align-self:center;
	border:solid 4px #d1ecff;
	border-radius:16px;
	background:#f9fdff;
}
#JSEW-regions li {
	padding-left:30px;
	padding-top:5px;
	padding-bottom:5px;
	width:200px;
	white-space: nowrap;
	margin-left:10px;
	font-weight:bold;
	font-size:0.85em;
	color:#1279b7;
}

.flag {
	background-repeat: no-repeat;
	background-size:20px auto;
	background-position: 4px center;
}
.flag.usa {
	background-image:url(../../assets/images/technical/flag_usa.png);
}
.flag.ru {
	background-image:url(../../assets/images/technical/flag_ru.png);
}
.flag.cn {
	background-image:url(../../assets/images/technical/flag_cn.png);
}
.flag.in {
	background-image:url(../../assets/images/technical/flag_in.png);
}
.flag.ua {
	background-image:url(../../assets/images/technical/flag_ua.png);
}
.flag.gb {
	background-image:url(../../assets/images/technical/flag_gb.png);
}
.flag.de {
	background-image:url(../../assets/images/technical/flag_de.png);
}
.flag.jp {
	background-image:url(../../assets/images/technical/flag_jp.png);
}
.flag.ca {
	background-image:url(../../assets/images/technical/flag_ca.png);
}
.flag.id {
	background-image:url(../../assets/images/technical/flag_id.png);
}
#JSEW-stats .col {
	width:inherit;
}
#JSEW-CPUOverview table {
	width:100%;
}

#JSEW-CPUOverview li.active {
	background:#fff;
}

@media screen and (max-width: 768px) {
	.enableResponsive #JSEW-mapGFX {
		display:none;
	}
}
</style>
