<template>
	<div id="JSEW-globalStats" class="row">
		<div class="col" v-if="stats.status === 'loading'">
			<dl>
				<dt>{{ $t('segment.miniStat.text_loading') }}</dt>
				<dd></dd>
			</dl>
		</div>
		<div class="col" v-if="stats.status === 'loaded'">
			<dl>
				<dt id="JSEW-icoMiner"></dt>
				<dd>
					<h2>{{ stats.totalOptIns }}</h2>
					<h4>{{ $t('segment.miniStat.text_activeMiners') }}</h4>
				</dd>
			</dl>
		</div>
		<div class="col" v-if="stats.status === 'loaded'">
			<dl>
				<dt id="JSEW-icoSites"></dt>
				<dd>
					<h2>{{ stats.pubs }}</h2>
					<h4>{{ $t('segment.miniStat.text_registeredSites') }}</h4>
				</dd>
			</dl>
		</div>
		<div class="col" v-if="stats.status === 'loaded'">
			<dl>
				<dt id="JSEW-icoUsers"></dt>
				<dd>
					<h2>{{ stats.users }}</h2>
					<h4>{{ $t('segment.miniStat.text_registeredUsers') }}</h4>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import numeral from 'numeral';

export default {
	name: 'sminiStat',
	data() {
		return {
			stats: {
				status: 'loading',
				totalOptIns: 0,
				pubs: 0,
				users: 0,
			},
		};
	},
	mounted() {
		numeral.localeData().abbreviations = {
			hundred: ` ${this.$t('segment.miniStat.text_hundred')}`,
			thousand: ` ${this.$t('segment.miniStat.text_thousand')}`,
			million: ` ${this.$t('segment.miniStat.text_million')}`,
			billion: ` ${this.$t('segment.miniStat.text_billion')}`,
			trillion: ` ${this.$t('segment.miniStat.text_trillion')}`,
		};
	},
	created() {
		const self = this;
		axios.get('https://server.jsecoin.com/stats/').then((response) => {
			// JSON responses are automatically parsed.
			const oData = response.data;
			//console.log(oData.charityAccount);
			this.$store.state.charity = Math.round(oData.charityAccount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
			if (typeof (oData.totalOptIns) !== 'undefined') {
				oData.totalOptIns = numeral(oData.totalOptIns).format('0a');
			}
			if (typeof (oData.pubs) !== 'undefined') {
				oData.pubs = numeral(oData.pubs).format('0a');
			}
			if (typeof (oData.users) !== 'undefined') {
				oData.users = numeral(oData.users).format('0a');
			}
			//console.log(oData.totalOptIns, self.$store.state.local, oData.totalOptIns.toLocaleString(self.$store.state.local));
			this.stats = {
				status: 'loaded',
				totalOptIns: oData.totalOptIns,
				pubs: oData.pubs,
				users: oData.users,
			};
			//Number.parseInt(oData.totalOptIns,10).toLocaleString(self.$store.state.local),
		}).catch((e) => {
			this.stats = {
				status: 'err',
			};
			//this.errors.push(e);
		});
	},
};
</script>

<style>
#JSEW-globalStatsBar {
	position: relative;
	display: flex;
	align-items: center;
    flex-direction: column;
	border-bottom:solid 1px #eee;
	transition:background 0.2s;
}

#JSEW-globalStatsBar.hasLink {
	cursor: pointer;
}
#JSEW-globalStats dl {
	display: flex;
	flex-wrap: wrap;
	border-left:solid 1px #eee;
}
#JSEW-globalStats .col {
    width: 100%;
    max-width: inherit;
}

#JSEW-globalStats .col:first-child dl {
	border:0px;
}

#JSEW-globalStats dt {
	width:80px;
	padding:0px 15px;
}

#JSEW-globalStats dd {
	margin:0px;
	padding:0px 15px 0px 0px;
	text-transform: uppercase;
}
#JSEW-globalStats dl {
	margin:20px auto;
}

#JSEW-globalStats dd h2 {
	color:#1d75b7;
	margin:0px;
}
#JSEW-globalStats dd h4 {
	color:#757575;
	margin:0px;
	letter-spacing: 0.6px;
    text-align: center;
}
#JSEW-globalStats .col {
	width:inherit;
}


@media screen and (max-width: 1000px) {
	.enableResponsive #JSEW-globalStats dl {
		border:0px;
		width:330px;
	}
}

@media screen and (max-width: 768px) {
	#JSEW-globalStats dd h4 {
		text-align: left;
	}
}
@media screen and (max-width: 540px) {
	.enableResponsive #JSEW-globalStats .col {
		border-bottom:solid 1px #eee;
	}
}
</style>
