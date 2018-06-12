<template>
	<div id="JSEW-wrapper" style="background:#fafbfd">
		<div id="JSEW-ICO" class="wrapper" style="padding-bottom:60px;">
			<div class="row">
				<dl class="mainCol" style="position:relative;">
					<dt>JSE Token Distribution</dt>
					<dd style="padding-bottom:40px;">
						<div class="row">
							<div style="border-right:solid 1px #eee; margin:10px 0px;">
								<img style="width:140px; margin: 20px 20px 0px 20px;" src="../../assets/ico/logo.png" alt="JSECoin - The Javascript Embedded Cryptocurrency" />
								<button v-if="showBuyOption" v-on:click="initBuy" class="button buy">Buy JSE</button>
							</div>
							<div class="mainCol">
								<div style="border-bottom:solid 1px #eee; margin:0px 10px;padding-bottom:10px;">
									<h2>Total Distributed At ICO</h2>

									<div id="JSEW-icoMeter">
										<div id="JSEW-icoMeterDisplay">
											<div id="JSEW-icoPointer">
												<div id="JSEW-icoPointerWrapper">
													<div class="icoRow">
														<div class="coin"></div>
														<span style="color:#0096ff; margin-right:4px;">0</span> 
														<span>JSE</span>
													</div>
													<div id="JSEW-icoPointerArr"></div>
												</div>
											</div>
										</div>
									</div>
									<div style="margin-top:-6px" class="cf">
										<div id="JSEW-start">0 JSE</div>
										<div id="JSEW-end">5,000,000,000 JSE</div>
									</div>
								</div>
								<div class="row" style="margin:10px 0px;">
									<div class="mainCol" style="border-right:solid 1px #eee; padding:0px 10px;">
										<h2>Current Distributions</h2>
										<ul id="JSEW-distOptions">
											<li class="mainCol" style="border-right:solid 1px #eee;">
												<div id="JSEW-jse"></div>
												0 <span>JSE</span>
											</li>
											<li class="mainCol" style="border-right:solid 1px #eee;">
												<div id="JSEW-eth"></div>
												{{total.eth}} <span>ETH</span>
											</li>
											<!--
											<li class="mainCol">
												<div id="JSEW-eos"></div>
												0 <span>EOS</span>
											</li>-->
										</ul>
									</div>
									<div class="mainCol" style="padding:0px 10px;">
										<h2>Distribution Ends In</h2>
										<ul id="JSEW-distCountdown">
											<li class="counter">{{days}}</li>
											<li>:</li>
											<li class="counter">{{hrs}}</li>
											<li>:</li>
											<li class="counter">{{mins}}</li>
											<li>:</li>
											<li class="counter">{{seconds}}</li>
											<li id="JSEW-countFooter">{{endDate}}</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="footer">
							<p>
								**Depending on the Ethereum <!--and EOS --> network traffic, figures may be delayed.
							</p>
						</div>
					</dd>
				</dl>
				<dl class="thinCol" style="position:relative; padding-bottom:70px;">
					<dt><i class="fa fa-info-circle "></i> How To Purchase JSE Tokens Video</dt>
					<dd>
						<iframe width="100%" height="226" src="https://www.youtube.com/embed/Mwyujyj6gMA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						<div class="footer">
							<p>
								<b>Important</b><br/>
								If this is your first time investing in a cryptocurrency project. <br />
								Please watch our tutorial on how to buy JSECoin Tokens
							</p>
						</div>
					</dd>
				</dl>
			</div>
			<div class="row">
				<dl class="mainCol">
					<dt>You can use this payment method to send ETH from ERC20 Compatible Wallet to our smart contract</dt>
					<dd>
						<div class="row" style="border-bottom:solid 1px #eee;">
							<div style="border-right:solid 1px #eee; margin:10px 0px; align-self: center;">
								<div style="position:relative; margin:10px ">
									<div id="JSEA-QRBGImage"></div>
									<qriously v-if="ethPaymentAddress" v-bind="{foregroundAlpha:1, backgroundAlpha:0}" :value="ethPaymentAddress" foreground="#0d152c" :size="160" />
								</div>
							</div>
							<div style="margin:10px">
								<h2 style="color:#db2828"><i class="fa fa-info-circle "></i> Important</h2>
								<ol style="margin:0px 0px 0px 20px; padding:0px; font-size:0.9em;">
									<li>Please make sure to send funds from a valid ERC20 compatible Ethereum address to receive your tokens.</li>
									<li>In order to add JSECoin tokens to your ETH wallet make sure you use this address:</li>
								</ol>
								<div class="warning">
									<b>DO NOT send ETH <!-- or EOS --> directly from an exchange!</b>
									<p>Please read below on why this is important...</p>
								</div>
							</div>
						</div>
						<h2 style="margin-left:10px;">JSECoin ETH smart contract address <i class="fa  fa-level-down"></i></h2>
						<div id="JSEW-ethAddressField" style="display:flex;">
							<input style="flex-grow:1;" type="text" :value="ethPaymentAddress" />
							<button class="sideButton" v-clipboard:copy="ethPaymentAddress">COPY TO CLIPBOARD</button>
						</div>
					</dd>
				</dl>
				<dl class="thinCol">
					<dt style="color:#0096ff"><i class="fa fa-info-circle "></i> Please pass the KYC verification</dt>
					<dd>
						<p>
							In order to unlock JSE Tokens you will be required to successfully pass the KYC procedure. JSECoin Ltd strongly encourages all users to pass the KYC before purchasing JSECoin tokens. The verification process takes approximately 5 minutes.
						</p>
						<p>
							<i style="color:#8d8d8d;">Note: JSECoin tokens will remain locked until the KYC is passed successfully</i>
						</p>
						
						<router-link style="width:80%" class="button" v-bind:to="`/${$store.state.local}/whitelisting`" tag="button">
							START KYC
						</router-link>
					</dd>
				</dl>
			</div>
			<div class="row">
				<dl class="mainCol">
					<dt>Purchase History</dt>
					<dd style="padding:20px;">

						<table style="width:100%;">
						<thead>
							<tr>
								<th>Date / Time</th>
								<th>JSECoin Token</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>

						</tbody>
						</table>
					</dd>
				</dl>
				<dl class="thinCol" style="font-size: 0.875em">
					<dt style="color:#f7ad42"><i class="fa fa-info-circle "></i> DO NOT send ETH <!--or EOS --> directly from an exchange!</dt>
					<dd>
						<ol>
							<li>Please make sure to send funds from a valid ERC20 compatible Ethereum address to receive your tokens.</li>
							<li>In order to add JSECoin tokens to your ETH wallet make sure you use this address:<br />

								<div style="display:flex">
									<input style="flex-grow:1; font-size:0.8em; margin:20px 0px;" type="text" :value="ethPaymentAddress" />
								</div>
							</li>
							<li>Use MyEtherWallet, MetaMask or other compatible wallets. Explore and track your ETH transactions on Ehterscan.io</li>
							<li>Your JSECoin tokes will appear on your Dashboard.</li>
							<li>Set decimal numer: 18 - Some wallets may ask you to enter decimals.</li>
						</ol>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import QRious from 'qrious';
import moment from 'moment';
import Web3 from 'web3';
import jseContractObj from './JSETokenSale.json';
import jseTokenObj from './JSEToken.json';

//setup web3
window.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
//version
console.log('VERSION:', window.web3.version);

export default {
	name: 'Ico-Page',
	data() {
		return {
			ethPaymentAddress: '0x85e68197da73289039a866d30041f5941ff11f77',
			tokenAddress: '0x85e68197da73289039a866d30041f5941ff11f77',
			activeAccount: '', //active metamask account
			availableAccounts: [], //list of available accounts
			selectedPaymentAccount: '', //user selected payment account
			showBuyOption: false, //show option to allow user to pay through wallet
			endICO: 1539302399, //Oct 12 2018
			endDate: '', //calculate generate readable date from endICO
			months: '00', //countdown months left
			days: '00', //countdown days left
			hrs: '00', //countdown hrs left
			mins: '00', //countdown mins left
			seconds: '00', //countdown seconds left
			total: {
				eth: 0, //total eth paid into contract
				eos: 0, //total eos paid into contract
				jse: 0, // total JSE distributed
			},
			//JSE goal Checkpoints reached
			goalCheckpoints:[
				1000000,
				10000000,
				100000000,
				200000000,
				300000000,
				400000000,
				500000000,
			],
		};
	},
	created() {
		const self = this;

		//poll web3 to check current provider active and user logged in
		web3.currentProvider.publicConfigStore.on('update', (acc) => {
			if (typeof (acc.selectedAddress) !== 'undefined') {
				self.activeAccount = acc.selectedAddress;
				self.showBuyOption = true;
			} else {
				self.activeAccount = '';
				self.showBuyOption = false;
			}
		});
		
		window.web3.eth.getAccounts().then((t) => {
			console.log('AccountDefined', t, t.length);
			if ((typeof (t) !== 'undefined') && (t.length > 0)) {
				self.availableAccounts = t;
				self.selectedPaymentAccount = t[0];
				self.showBuyOption = true;
			}
		});
		//set total Eth balance in wallet
		window.web3.eth.getBalance(self.ethPaymentAddress, 'latest', (error, weiBalance) => {
			self.total.eth = window.web3.utils.fromWei(weiBalance);
		});

		//get user balance
		window.web3.eth.getBalance(self.tokenAddress, 'latest', (error, weiBalance) => {
			console.log('USER BALNCE', window.web3.utils.fromWei(weiBalance));
		});

		//get user account list
		window.web3.eth.getAccounts().then((data) => {
			//loop generate an account list fieldset to choose account to pay from
			console.log('ACCOUNT:', data);
		});

		window.jseTokenContract = new window.web3.eth.Contract(jseTokenObj.abi, self.tokenAddress);

		window.jseContract = new window.web3.eth.Contract(jseContractObj.abi, self.ethPaymentAddress);
		//test init buy call
		/*jseContract.methods.buyTokens.call({
			value: window.web3.utils.toWei('0.5', 'ether'),
		});*/

		//jseContract.methods.buyTokens().call();
		/*jseContract.methods.buyTokens({
			value: window.web3.utils.toWei('0.5', 'ether'),
		});*/
	},
	mounted() {
		const self = this;
		self.endDate = moment.unix(self.endICO).format('MMMM Do YYYY');
		setInterval(() => {
			const endICO = moment.unix(self.endICO);
			const currentTime = moment();

			let days = endICO.diff(currentTime, 'days');
			if (days < 10) {
				days = `0${days}`;
			}
			self.days = days;
			if (self.days < 0) {
				self.hrs = 0;
				self.mins = 0;
				self.seconds = 0;
			} else {
				const EOD = moment().endOf('day');
				const EOH = moment().endOf('hour');
				const EOM = moment().endOf('minute');

				let hrs = EOD.diff(moment(), 'hours');
				if (hrs < 10) {
					hrs = `0${hrs}`;
				}
				let mins = EOH.diff(moment(), 'minutes');
				if (mins < 10) {
					mins = `0${mins}`;
				}
				let seconds = EOM.diff(moment(), 'seconds');
				if (seconds < 10) {
					seconds = `0${seconds}`;
				}

				self.hrs = hrs;
				self.mins = mins;
				self.seconds = seconds;
			}
		}, 1000);
	},
	metaInfo () {
		return {
			title: this.$t('pages.ico.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.ico.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.ico.meta.keywords'),
				},
			],
		};
	},
	methods: {
		/**
		 * initialises wallet buy interface
		 * @returns nothing
		 * @public
		 */
		initBuy() {
			const self = this;
			console.log('BUY');
			//load contract
			const jseContract = new window.web3.eth.Contract(jseContractObj.abi, self.ethPaymentAddress);
			console.log('CONTRACT:', jseContract);

			jseContract.methods.buyTokens().send({
				from: self.userAccount,
				value: web3.utils.toWei('0.4', 'ether'),
			}).then((t) => {
				console.log('blah',t);
			});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button.buy {
	padding: 4px 8px;
    /* width: 100%; */
    /* margin: 0px 20px; */
    /* border: 0px; */
    /* border-radius: 4px; */
    width: 150px;
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing: 1px;
}
.sideButton:hover {
	background:#00a47a !important;
}
.icoRow {
	display: flex;
}
#JSEA-QRBGImage {
    background-image: url(../../assets/ico/QR_logo2.png);
    background-repeat: no-repeat;
    background-size: 20%;
    background-position: center;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

h2 {
	font-size:0.8em;
}
dl {
	background: #fff;
    margin: 8px 10px;
    box-shadow: rgba(210, 214, 217,1) 0px 1px 3px 0px;
    padding: 0px;
    border-radius: 6px;
    color: #606060;
    position: relative;
    /*overflow: hidden;*/
	flex-grow: 1;
}
dt {
	border-bottom: solid 1px #eee;
    padding: 12px 18px;
    font-weight: bold;
    font-size: 0.8em;
    letter-spacing: 1px;
    min-height: 44px;
}
dd {
	padding:0px;
    margin: 0px;
}

hr {
	display: none;
}
.hr {
	height: 1px;
	margin:10px;
	background:#eee;
}
.mainCol {
	flex:1;
}

#JSEW-icoMeter {
	height: 20px;
	border-radius:20px;
	background:#f8f8f8;
	margin:10px;
	margin-top:40px;
    padding-right: 12px;
}

#JSEW-icoMeterDisplay {
	background: #0096ff;
	border-radius: 20px;
	margin:6px;
	min-width:10px;
	height:9px;
	display: inline-block;
	position: relative;
}
#JSEW-start {
	float:left;
	margin:0px 10px;
}
#JSEW-end {
	float:right;
	margin:0px 10px;
}
#JSEW-start,
#JSEW-end {
	color:#6a6a6a;
	font-size:0.6em;
}

th {
	border-bottom:solid 2px #00b48d;
	height: 40px;
	font-size:0.9em;
}

#JSEW-icoPointer {
	background: #fcfcfc;
	box-shadow:0px 0px 4px 0px rgba(0,0,0,0.25), inset 0px 0px 0px 2px #fff;
	border-radius: 20px 6px 6px 20px;
	padding:4px;
	top:-30px;
	white-space:nowrap;
	position: absolute;
	font-size:0.8em;
	line-height:20px;
	right: -36px;
	padding-right:8px
}

#JSEW-icoPointerArr {
	width:15px;
	height:10px;
	background-image: url(../../assets/ico/arr.png);
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	bottom:-13px;
	left:50%;
	margin-left:-14px;
}
#JSEW-icoPointerWrapper {
	position: relative;
}
.coin {
	background-image: url(../../assets/ico/coin.png);
	width:20px;
	height:20px;
	background-size: contain;
	margin-right:4px;
}

.footer {
	position: absolute;
	bottom:0px;
	left: 0px;
	right:0px;
	font-size:0.8em;
	background:#f9fbfc;
	border-radius: 0px 0px 6px 6px;
}

#JSEW-distOptions {
	border:solid 1px #eee;
	border-radius: 10px;
	display: flex;
	margin:0px;
	padding:0px;
	font-weight: bold;
	font-size:0.7em;
}

#JSEW-distOptions li {
	list-style: none;
	text-align: center;
	padding:10px 4px;
	margin: 4px 0px;
}
#JSEW-eos,
#JSEW-eth,
#JSEW-jse {
	background-repeat: no-repeat;
	background-size: contain;
	width:30px;
	height:30px;
	background-position:center;
	margin:0px auto 6px;
}
#JSEW-eos {
	background-image: url(../../assets/ico/eos_token.png);
}
#JSEW-jse {
	background-image: url(../../assets/ico/jse_token.png);
}
#JSEW-eth {
	background-image: url(../../assets/ico/eth_token.png);
}

#JSEW-distCountdown {
	margin:0px;
	padding:4px;
	display: flex;
	position: relative;
	padding:8px;
	padding-bottom:43px;
	border:solid 1px #eee;
	border-radius: 10px;
	overflow: hidden;
}
#JSEW-distCountdown li {
	list-style: none;
	flex-grow:1;
	text-align: center;
}
.counter {
	border:solid 1px #eee;
	border-radius: 10px;
	padding:4px;
	font-family: Courier New, Courier, monospace;
	font-weight: bold;
}
#JSEW-countFooter {
	position: absolute;
	bottom:0px;
	background:#fafafa;
	left: 0px;
	right: 0px;
	height:30px;
	line-height: 30px;
	font-size:0.8em;
}
.thinCol {
	min-width: 326px;
	flex:0;
}

#JSEW-ethAddressField {
	display: flex;
	border-radius: 0px 0px 0px 4px;
	/*box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);*/
	border-top:solid 1px #eee;
	font-size:0.8em;
	background-color:#f9fbfc;
	background-image:url('../../assets/ico/eth_token.png');
	background-repeat: no-repeat;
    background-size: 30px;
    background-position: 0px 5px;
}
#JSEW-ethAddressField input {
	padding:4px 8px;
	font-family: Courier New, Courier, monospace;
	border-radius: 4px 0px 0px 4px;
	font-weight: bold;
	height:40px;
	font-size:1.2em;
	color:#545454;
	background:transparent;
	margin-left:24px;
}
#JSEW-ethAddressField button {
	color:#fff;
	background:#00b48d;
	border-radius: 0px 0px 4px 0px;
	height:40px;
	padding:0px 20px;
	font-size:1em;
}
.warning {
	background-color: #fffaf3 !important;
    color: #573a08;
	position: relative;
    min-height: 1em;
    margin: 1em 0;
    padding: 4px 8px;
	border-radius: 4px;
	box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;
}
.warning b {
	font-size:0.8em;
}
.warning p {
	margin:0px;
	padding:0px;
}
</style>
