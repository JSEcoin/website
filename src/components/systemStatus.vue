<template>
	<div id="JSEW-wrapper">
		<div id="JSEW-systemStatusPage" class="wrapper">
			<div class="center">
				<img src="../assets/images/serverStatus.png" width="30%" style="margin-bottom:20px;" :alt="$t('pages.systemStatus.alt_serverStatus')" />
				<h1 v-if="!receivedResponse" class="heading">{{ $t('pages.systemStatus.text_checkingServerStatus') }}</h1>
				<h1 v-else-if="allServersRunning" class="heading">{{ $t('pages.systemStatus.text_systemsUp') }}</h1>
				<h1 v-else class="heading">{{ $t('pages.systemStatus.text_serverIssue') }}</h1>
				<h2 v-if="receivedResponse" class="subHeading" style="margin-bottom:20px;">{{ $t('pages.systemStatus.text_lastUpdated') }}, {{time}}</h2>
			</div>

			<div class="center" v-if="requestStatus.error">
				<p class="infoMsg" v-html="requestStatus.msg"></p>
			</div>

			<div :key="index" class="row" v-for="(server, index) in Math.ceil(servers.length/2)">
				<div class="col">
					<dl>
						<dt></dt>
						<dd>
							<i class="fa" :class="{showStatus:receivedResponse, 'fa-check':servers[index*2].status ==='Running', 'fa-close':servers[index*2].status !=='Running'}"></i>

							<h2 class="subHeading">JSE {{servers[index*2].serverName}}</h2>
							<h3 class="subsubHeading">{{servers[index*2].URL}}</h3>
							<p>

							</p>
						</dd>
					</dl>
				</div>
				<div class="col">
					<dl v-if="((index*2)+1) < servers.length">
						<dt></dt>
						<dd>
							<i class="fa" :class="{showStatus:receivedResponse, 'fa-check':servers[(index*2)+1].status ==='Running', 'fa-close':servers[(index*2)+1].status !=='Running'}"></i>

							<h2 class="subHeading">JSE {{servers[(index*2)+1].serverName}}</h2>
							<h3 class="subsubHeading">{{servers[(index*2)+1].URL}}</h3>
							<p>

							</p>
						</dd>
					</dl>
				</div>
			</div>
			<p class="infoMsg">
				{{ $t('pages.systemStatus.para_infoMsg') }}

				<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="a">
					{{ $t('pages.systemStatus.button_Support') }}
				</router-link>.
			</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'systemStatus',
	metaInfo () {
		return {
			title: this.$t('pages.systemStatus.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.systemStatus.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.systemStatus.meta.keywords'),
				},
			],
		};
	},
	data() {
		return {
			time: '',
			receivedResponse: false,
			allServersRunning: true,
			servers: [{
				serverName: 'Website Server',
				URL: 'https://jsecoin.com',
				status: '',
				responseTime: 0,
			}, {
				serverName: 'Load Server 1',
				URL: 'http://35.193.19.180/',
				status: '',
				responseTime: 0,
			}, {
				serverName: 'Load Server 2',
				URL: 'https://load.jsecoin.com',
				status: '',
				responseTime: 0,
			}, {
				serverName: 'Load Server 3',
				URL: 'https://load.jsecoin.com',
				status: '',
				responseTime: 0,
			}, {
				serverName: 'Static File Server',
				URL: 'https://platform.jsecoin.com',
				status: '',
				responseTime: 0,
			}, {
				serverName: 'Platform Server 1',
				URL: 'https://server.jsecoin.com',
				status: '',
				responseTime: 0,
			}, {
				serverName: 'Blockchain Explorer',
				URL: 'https://blockchain.jsecoin.com',
				status: '',
				responseTime: 0,
			}],
			requestStatus: {
				error: false,
				msg: '',
			},
		};
	},
	mounted() {
		const now = new Date();
		this.time = now.toString();
	},
	created() {
		axios.get('https://wp.jsecoin.com/status.php?json=1').then((response) => {
			this.servers = response.data;
			this.receivedResponse = true;
			this.servers.forEach(function(item) {
				if (item.status !== 'Running') {
					this.allServersRunning = false;
					this.requestStatus = {
						error: true,
						msg: 'The error has been reported and a team of engineers are currently working to resolve the issue.',
					};
				}
			});
		}).catch((e) => {
			console.error(e);
			this.receivedResponse = true;
			this.allServersRunning = false;
			this.requestStatus = {
				error: true,
				msg: 'Could not connect to detect the server status<br />Please try again...',
			};
		});
	},
	methods: {
		col1() {
			return 'test';
		},
		col2() {
			return 1;
			//
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-systemStatusPage {
	padding:30px 0px;
}

#JSEW-systemStatusPage dl {
    margin: 10px 0px;
    border: solid 1px #eee;
    border-radius: 10px;
    padding: 18px;

}

#JSEW-systemStatusPage .col {
    padding: 10px 20px;
	max-width:inherit;
}

#JSEW-systemStatusPage .fa {
	color: red;
    font-size: 3em;
    float: right;
	display:none;
}
#JSEW-systemStatusPage .fa.showStatus {
	display:block;
}

#JSEW-systemStatusPage .fa-check {
	color: green;
}

#JSEW-systemStatusPage .fa-close {
	color: red;
}
</style>
