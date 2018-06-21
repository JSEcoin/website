<template>
	<div id="JSEW-wrapper">
		<!-- ICO form dialogue mask -->
		<div v-if="form.showForm" id="JSEW-ICOMask" v-on:click="hideMask">
			<!-- Model window -->
			<dl v-on:click="stopBubble($event)">
				<!-- Title -->
				<dt>Purchase JSE Tokens via a wallet</dt>
				<!-- xTitle -->
				<!-- Content -->
				<dd class="hasFooter">
					<!-- Instructions -->
					<div class="row">
						<div style="align-self: center;"><img width="160px" style="margin:10px auto;" src="../../assets/ico/wallets.png" /></div>
						<div>
							<ol>
								<li>Select your wallet address</li>
								<li>Enter either the amount of JSE Tokens you would like to purchase or the amount of Ethereum to exchange for JSE Tokens.</li>
								<li>Select the “Buy Tokens” button to initiate the purchase through your connected wallet.</li>
							</ol>
						</div>
					</div>
					<!-- xInstructions -->
					<div class="hr"><hr /></div>
					<!-- Info Display -->
					<div class="highlightPanelFlat" v-if="!accountWhitelisted">
						<i>
							Make sure you have filled out the 								
							<router-link v-bind:to="`/${$store.state.local}/whitelisting`" tag="a">
								whitelist form
							</router-link>
							if you would like to invest more than <b>10,000 USD</b>
						</i>
					</div>
					<div v-if="form.info.msg.length > 0" class="infoPanel">
						<h4>{{form.info.title}}</h4>
						<p>
							{{form.info.msg}}
						</p>
					</div>
					<div v-if="form.error.msg.length > 0" class="errorPanel">
						<h4>{{form.error.title}}</h4>
						<p>
							{{form.error.msg}}
						</p>
					</div>
					<!-- xInfo Display -->

					<!-- ICO Form ERC20 -->
					<div class="highlightPanel row">
						<div class="col">
							<label :class="{show:form.ico.address.displayLabel, error:form.ico.address.flag}">
								<div class="inputLabel">Connected Wallet Address *</div>
								<input type="text" placeholder="Connected Wallet Address *" v-model="form.ico.address.val" @keyup="keyWatch('address')" v-on:blur="checkAddress" />
							</label>
						</div>
						<div class="col">
							<label class="icoCoin" :class="{show:form.ico.jse.displayLabel, error:form.ico.jse.flag}">
								<div class="inputLabel">Purchase JSE Tolkens *</div>
								<div class="amountInput coin">
									<input type="number" min="10000" step="200" placeholder="Purchase JSE Tolkens *" v-model="form.ico.jse.val" @keyup="keyWatch('jse')" @mouseup="keyWatch('jse')" />
								</div>
							</label>
						</div>
						<div class="col">
							<label :class="{show:form.ico.eth.displayLabel, error:form.ico.eth.flag}">
								<div class="inputLabel">Ethereum to Spend *</div>
								<div class="amountInput ethIcon">
									<input type="number" min="0" step="0.1" placeholder="Ethereum to Spend *" v-model="form.ico.eth.val" @keyup="keyWatch('eth')" @mouseup="keyWatch('eth')" />
								</div>
							</label>
						</div>
					</div>
					<!-- xICO Form ERC20 -->

					<!-- Footer -->
					<div class="footer" style="display: flex; justify-content: center;">
						<button class="button green" v-on:click="processWeb3Payment">BUY TOKENS</button>
						<button class="button red" v-on:click="exitPayment">CANCEL</button>
					</div>
					<!-- xFooter -->
				</dd>
				<!-- xContent -->
			</dl>
			<!-- xModel window -->
		</div>
		<!-- xICO form dialogue mask -->
		<div id="JSEW-ICO" class="wrapper" style="padding-top:10px;">
			
			<div class="infoPanel" v-if="launchPadDevMode">
				<h4>WARNING - THE JSE ICO LAUNCHPAD IS NOT LIVE!</h4>
				<p>
					We are currently testing on the <b>RINKEBY TESTNET!</b>
				</p>
				<div class="errorPanel">
					<b>DO NOT TRY TO SEND FUNDS VIA THE ETHEREUM MAINET!<br />
					- OR THEY WILL BE LOST AND WE HAVE NO CONTROL TO RETURN YOUR FUNDS!</b>
				</div>
			</div>
			<!-- Distribution status and video -->
			<div class="row">
				<!-- Token Distribution -->
				<dl id="JSEW-tokenDist" class="mainCol">
					<dt>
						JSE Token Distribution
						<div class="ribbon"><span>Rinkeby-TEST</span></div>
					</dt>
					<dd>
						<div class="row">
							<!-- ICO Logo -->
							<div id="JSEW-ICOLogo" class="borderRight">
								<img src="../../assets/ico/logo.png" alt="JSECoin - The Javascript Embedded Cryptocurrency" />
								<button v-on:click="initBuy" class="button buy" :class="{disable: !showBuyOption}">Buy JSE</button>
							</div>
							<!-- xICO Logo -->
							<!-- ICO Status Info -->
							<div class="mainCol">
								<!-- Total JSE Distribution -->
								<div id="JSEW-totalDistribution">
									<h2>Total Distributed At ICO</h2>

									<div id="JSEW-icoMeter">
										<div id="JSEW-icoMeterDisplay" :style="{width:`${progressBarWidth}%`}">
											<div style="width:1px;height:1px; float:right; position:relative;">
												<div id="JSEW-icoPointer">
													<div id="JSEW-icoPointerWrapper">
														<div class="icoRow">
															<div class="coin"></div>
															<span style="color:#0096ff; margin-right:4px;">{{total.jseDisplay}}</span> 
															<span>JSE</span>
														</div>
														<div id="JSEW-icoPointerArr"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="JSEW-hardCapLegend" class="cf">
										<div id="JSEW-start">0 JSE</div>
										<div id="JSEW-end">{{activeGoalDisplay}} JSE</div>
									</div>
								</div>
								<!-- xTotal JSE Distribution -->
								<div class="row" style="margin:10px 0px;">
									<!-- Current Distribution Spread -->
									<div id="JSEW-currentDistSpread" class="mainCol borderRight">
										<h2>Current Distributions</h2>
										<ul id="JSEW-distOptions">
											<!-- JSE -->
											<li id="JSEW-distJSE" class="mainCol borderRight">
												<div id="JSEW-jse"></div>
												{{total.jseDisplay}} <span>JSE</span>
											</li>
											<!-- xJSE -->
											<!-- ETH -->
											<li id="JSEW-distETH" class="mainCol borderRight">
												<div id="JSEW-eth"></div>
												{{total.ethDisplay}} <span>ETH</span>
											</li>
											<!-- xETH -->
											<!-- EOS 
											<li id="JSEW-distEOS" class="mainCol">
												<div id="JSEW-eos"></div>
												0 <span>EOS</span>
											</li>
											 xEOS -->
										</ul>
									</div>
									<!-- xCurrent Distribution Spread -->

									<!-- Distribution Timer -->
									<div id="JSEW-distributionCounterWrapper"class="mainCol">
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
									<!-- xDistribution Timer -->
								</div>
							</div>
							<!-- xICO Status Info -->
						</div>
						<!-- Footer -->
						<div class="footer">
							<p>
								**Depending on the Ethereum <!-- and EOS--> network traffic, figures may be delayed.
							</p>
						</div>
						<!-- xFooter -->
					</dd>
				</dl>
				<!-- xToken Distribution -->

				<!-- Purchase video -->
				<dl id="JSEW-purchaseVideo" class="thinCol">
					<dt><i class="fa fa-info-circle "></i> How To Purchase JSE Tokens Video</dt>
					<dd>
						<iframe width="100%" height="226" src="https://www.youtube.com/embed/Mwyujyj6gMA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						<div class="footer">
							<p>
								<b>Important for our first time investors</b><br/>
								Please watch our tutorial on how to buy JSECoin Tokens
							</p>
						</div>
					</dd>
				</dl>
				<!-- xPurchase video -->
			</div>
			<!-- xDistribution status and video -->

			<!-- Ethe Payment and KYC -->
			<div class="row">
				<!-- Ethereum Payment Overview Panel -->
				<dl id="JSEW-paymentEthOverview" class="mainCol">
					<dt>Use this payment method to send ETH from ERC20 Compatible Wallet to our smart contract</dt>
					<dd>
						<div class="row" style="border-bottom:solid 1px #eee;">
							<!-- ETH QR Code -->
							<div id="JSEW-ETHQRCode" class="borderRight">
								<div style="position:relative; margin:10px ">
									<div id="JSEA-QRBGImage"></div>
									<qriously v-if="JSETokenSale" v-bind="{foregroundAlpha:1, backgroundAlpha:0}" :value="JSETokenSale" foreground="#0d152c" :size="160" />
								</div>
							</div>
							<!-- xETH QR Code -->
							
							<!-- ETH payment Info -->
							<div id="JSEW-ethPaymentInfo">
								<h2><i class="fa fa-info-circle"></i> Important</h2>
								<ol>
									<li>Please make sure to send funds from a valid ERC20 compatible Ethereum address to receive your tokens.</li>
									<li>In order to add JSECoin tokens to your ETH wallet make sure you use this address:</li>
								</ol>
								<div class="warning">
									<b>DO NOT send ETH <!-- or EOS --> directly from an exchange!</b>
									<p>You must use an Ethereum compatible wallet.</p>
									<!--<p>Please read below on why this is important...</p>-->
								</div>
							</div>
							<!-- xETH payment Info -->
						</div>
						<!-- ETH payment Address -->
						<h2 style="margin-left:10px; text-transform:uppercase;">JSECoin ETH smart contract payment address <i class="fa  fa-level-down"></i></h2>
						<div id="JSEW-ethAddressField">
							<input type="text" :value="JSETokenSale" />
							<button class="sideButton" v-clipboard:copy="JSETokenSale">COPY TO CLIPBOARD</button>
						</div>
						<!-- xETH payment Address -->
					</dd>
				</dl>
				<!-- xEthereum Payment Overview Panel -->
				
				<!-- KYC -->
				<dl id="JSEW-KYC" class="thinCol">
					<dt><i class="fa fa-info-circle "></i> Please pass the KYC verification</dt>
					<dd class="hasFooter">
						<p>
							In order to unlock JSE Tokens you will be required to successfully pass the KYC procedure. JSECoin Ltd strongly encourages all users to pass the KYC before purchasing JSECoin tokens. The verification process takes approximately 5 minutes.
						</p>
						<p>
							<i>Note: JSECoin tokens will remain locked until the KYC is passed successfully</i>
						</p>
						
						
						<div class="footer">
							<router-link style="width:80%" class="button thin" v-bind:to="`/${$store.state.local}/whitelisting`" tag="button">
								START KYC
							</router-link>
						</div>
					</dd>
				</dl>
				<!-- xKYC -->
			</div>
			<!-- xEthe Payment and KYC -->

			<!-- Purchase History and why not to use exchanges -->
			<div class="row">
				<!-- Purchase History -->
				<dl id="JSEW-purchaseHistory" class="mainCol">
					<dt>Purchase History</dt>
					<dd>
						<!-- Purchase Overview -->
						<table id="JSEW-purchaseOverviewTble" style="width:100%;">
						<thead>
							<tr>
								<th>Tokens</th>
								<th>Total Sold</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="transaction in userTransactionList">
								<td>{{transaction.returnValues['_tokens']}}</td>
								<td>{{transaction.returnValues['_totalSold']}}</td>
								<td><a class="transactionAddress" target="_BLANK" :href="ethscanURL(transaction.transactionHash)">{{transaction.transactionHash}}</a></td>
							</tr>
						</tbody>
						</table>
						<!-- xPurchase Overview -->
						<div class="footer" style="background:#fff; font-size:1em; border-top:solid 1px rgb(238, 238, 238);">
							<!-- Token Address -->
							<h2 style="margin-left:10px; text-transform:uppercase;">JSE token address <i class="fa  fa-level-down"></i></h2>
							<div id="JSEW-jseAddressField">
								<input type="text" :value="tokenAddress" />
								<button class="sideButton" v-clipboard:copy="tokenAddress">COPY TO CLIPBOARD</button>
							</div>
							<!-- xToken Address -->
						</div>
					</dd>
				</dl>
				<!-- xPurchase History -->

				<!-- Exchange payment info -->
				<dl id="JSEW-exchangePaymentInfo" class="thinCol">
					<dt><i class="fa fa-info-circle "></i> DO NOT send ETH <!-- or EOS--> directly from an exchange!</dt>
					<dd>
						<ol>
							<li>Please make sure to send funds from a valid ERC20 compatible Ethereum address to receive your tokens.</li>
							<li>In order to add JSECoin tokens to your ETH wallet make sure you use this address:<br />
								<div id="JSEW-ethAddressMini">
									<input type="text" :value="JSETokenSale" />
								</div>
							</li>
							<li>Use MyEtherWallet, MetaMask or other compatible wallets. Explore and track your ETH transactions on <a :href="ethscanURL()" target="_BLANK">Etherscan.io</a></li>
							<li>Your JSECoin tokes will appear on your Dashboard.</li>
							<li>Set decimal numer: 18 - Some wallets may ask you to enter decimals.</li>
						</ol>
					</dd>
				</dl>
				<!-- xExchange payment info -->
			</div>
			<!-- xPurchase History and why not to use exchanges -->
		</div>
		<iframe v-if="showTracker" :src="`https://jsecoin.com/pixels.php?conversion=ico&investment=${form.ico.eth.val}`" frameborder="0" width="1" height="1" style="position: absolute; left: -150px;"></iframe>
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
//window.web3 = new Web3(Web3.givenProvider || HTTPProvider('https://rinkeby.infura.io') || 'http://localhost:8545');
window.ActiveNetwork = new Web3('https://rinkeby.infura.io');
//version
////console.log('VERSION:', window.web3.version);

export default {
	name: 'Ico-Page',
	data() {
		return {
			launchPadDevMode: true,
			//JSE Token Address - query for balance
			tokenAddress: '0xf90172bd3f56b4845229aa82239d6243ea19c523',//'0x1c1f7b95907df941fb6ed4469b0f4f049ab6b75c',
			//contract Address
			JSETokenSale: '0x169b6443836236877c633518da0e01ce53973202',//'0x9793a17f3aa26b8e93f442ed370d38e4d1bfe610',
			activeAccount: '', //active metamask account
			availableAccounts: [], //list of available accounts
			selectedPaymentAccount: '', //user selected payment account
			accountWhitelisted: false, //check if account is whitelisted
			userTransactionList: [], //list of JSE Transactions
			//maxEth: '500',
			showTracker: false, //collect stats on user purchasing JSE
			maxEthNotWhitelisted: '10', //maximum eth that can be sent if user hasn't whitelisted.
			maxEthWhitelisted: '10000000', //maximum eth that can be sent if user has whitelisted.
			minEth: '0.1', //minimum eth that can be exchanged for JSE
			gasPriceEstimate: 0,//estimate gas price
			userWalletBalance: 0, //how much does the user have in their wallet
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
				jseDisplay: '0',
				ethDisplay: '0',
			},
			JSEPerEth: 0,
			progressBarWidth: 0, //width of progress bar in %
			form: {
				error: {
					title: '',
					msg: '',
				},
				info: {
					title: '',
					msg: '',
				},
				showForm: false,
				ico: {
					address: {
						val: '',
						displayLabel: false,
						flag: false,
					},
					jse: {
						val: '',
						displayLabel: false,
						flag: false,
					},
					eth: {
						val: '',
						displayLabel: false,
						flag: false,
					},
				},
			},
			//JSE goal Checkpoints reached
			goalCheckpoints: [
				1000000,
				10000000,
				100000000,
				200000000,
				300000000,
				400000000,
				500000000,
			],
			activeGoal: 5000000000,
			activeGoalDisplay: '5,000,000,000',
		};
	},
	created() {
		const self = this;

		//check metamask active poll exists
		if (typeof (window.web3.currentProvider.publicConfigStore) !== 'undefined') {
			//poll web3 to check current provider active and user logged in
			window.web3.currentProvider.publicConfigStore.on('update', (acc) => {
				if (typeof (acc.selectedAddress) !== 'undefined') {
					////console.log(acc.selectedAddress);
					if (self.activeAccount !== acc.selectedAddress) {
						//console.log('ADDRESS CHANGED', acc.selectedAddress);
						self.form.info.title = '';
						self.form.info.msg = '';
						self.form.error.title = '';
						self.form.error.msg = '';
						self.form.ico.address.flag = false;
						self.form.ico.address.displayLabel = true;
						self.activeAccount = acc.selectedAddress;
						self.updateAccountDetails(acc.selectedAddress);
					}
					self.showBuyOption = true;
				} else {
					self.activeAccount = '';
					self.showBuyOption = false;
					self.form.showForm = false;
				}
			});
		} else {
			//get store user accounts
			window.web3.eth.getAccounts().then((t) => {
				//console.log('ACCOUNTS FOUND', t, t.length);
				if ((typeof (t) !== 'undefined') && (t.length > 0)) {
					self.availableAccounts = t;
					self.form.info.title = '';
					self.form.info.msg = '';
					self.form.error.title = '';
					self.form.error.msg = '';
					self.form.ico.address.flag = false;
					self.form.ico.address.displayLabel = true;
					self.activeAccount = t[0];
					self.updateAccountDetails(t[0]);
				}
			});
		}

		window.jseTokenContract = new window.ActiveNetwork.eth.Contract(jseTokenObj.abi, self.tokenAddress);
		window.jseContract = new window.ActiveNetwork.eth.Contract(jseContractObj.abi, self.JSETokenSale);

		self.updateDistributionDisplay();
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

				//update distribution display every 30 seconds
				if ((seconds === 0) || (seconds === 30)) {
					self.updateDistributionDisplay();
				}
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
		ethscanURL(tx) {
			const self = this;
			let etherscanURL = 'etherscan.io';
			if (self.launchPadDevMode) {
				etherscanURL = 'rinkeby.etherscan.io';
			}
			let address = `https://${etherscanURL}/address/${self.selectedPaymentAccount}`;
			if (typeof (tx) !== 'undefined') {
				address = `https://${etherscanURL}/tx/${tx}`;
			}
			return address;
		},
		updateDistributionDisplay() {
			const self = this;
			//total JSE Distributed from contract acc
			jseContract.methods.totalTokensSold().call().then((t) => {
				self.total.jse = Math.floor(t/10e18);
				self.total.jseDisplay = self.total.jse.toLocaleString();
				//set goal checkpoint
				self.goalCheckpoints.some((checkpoint) => {
					if (self.total.jse < checkpoint) {
						self.activeGoal = checkpoint;
						self.activeGoalDisplay = checkpoint.toLocaleString();
						return true;
					}
					return false;
				});

				//set progress bar width
				const barWidth = (100/self.activeGoal) * self.total.jse;
				self.progressBarWidth = (barWidth >= 100) ? 100 : barWidth;
			});

			//Current token/eth value
			jseContract.methods.tokensPerKEther().call().then((t) => {
				//console.log('TOKENS / ETH', t/1e3);
				self.JSEPerEth = t/1e3;
			});

			//add max cap if user hasn't whitelisted. 15.8eth
			jseContract.methods.CONTRIBUTION_MAX_NO_WHITELIST().call().then((t) => {
				//console.log('MAX NO WHITELIST CAP ETH', web3.utils.fromWei(t));
				self.maxEthNotWhitelisted = web3.utils.fromWei(t);
			});

			//add max cap if user hasn't whitelisted. 10,000eth
			jseContract.methods.CONTRIBUTION_MAX().call().then((t) => {
				//console.log('MAX WHITELIST CAP ETH', web3.utils.fromWei(t));
				self.maxEthWhitelisted = web3.utils.fromWei(t);
			});
			jseContract.methods.CONTRIBUTION_MIN().call().then((t) => {
				//console.log(web3.utils.fromWei(t));
				//console.log('MAX WHITELIST CAP ETH', web3.utils.fromWei(t));
				self.minEth = web3.utils.fromWei(t);
			});

			//Amount of ether raised
			jseContract.methods.weiRaised().call().then((t) => {
				//console.log('weiRaised', web3.utils.fromWei(t));
				const etherRaised = web3.utils.fromWei(t);
				if (etherRaised < 10) {
					self.total.eth = +(Number(etherRaised)).toFixed(2);
				} else {
					self.total.eth = Math.floor(web3.utils.fromWei(t));
				}
				self.total.ethDisplay = self.total.eth.toLocaleString();
			});
		},
		/**
		 * estimate gas price
		 */
		gasPrice(eth) {
			const self = this;
			web3.eth.estimateGas({
				from: self.form.ico.address.val,
				to: (String(document.location).indexOf('localhost') === -1) ? self.JSETokenSale : web3.eth.accounts[0],
				amount: web3.utils.toWei(eth, 'ether'),
			}).then((t) => {
				//console.log(self.form.ico.eth.val, t);
				self.gasPriceEstimate = t;
				//self.form.ico.eth.val = String(Number(self.form.ico.eth.val) - t);
				self.updateJSEVal();
			});
		},
		/**
		 * updateAccountDetails
		 */
		updateAccountDetails(address) {
			const self = this;
			self.selectedPaymentAccount = address;
			self.form.ico.address.val = address;
			self.form.ico.address.displayLabel = true;
			self.showBuyOption = true;
			self.getUserWalletBalance(address);
			self.getUserPastTransactions();
			self.checkWhitelistAcc(address);
			self.getUserTransactionList();
		},
		/**
		 * getUserTransactionList
		 */
		getUserTransactionList() {
			const self = this;
			console.log('??', self.form.ico.address.val);
			window.jseContract.getPastEvents('allEvents', {
				filter: {
					isError: 0,
					txreceipt_status: 1,
				},
				topics: [
					null,
					web3.utils.padLeft(self.form.ico.address.val, 64),
				],
				fromBlock: 242000,
				toBlock: 'latest',
			}).then((t) => {
				console.log(t);
				//console.log(t[0].returnValues._tokens);
				self.userTransactionList = t;
			});
		},
		/**
		 * check if user whitelisted
		 */
		checkWhitelistAcc(acc) {
			const self = this;
			self.accountWhitelisted = false;
			window.jseContract.methods.whitelist(acc).call().then((t) => {
				self.accountWhitelisted = t;
			});
		},
		/**
		 * get users wallet balance
		 */
		getUserWalletBalance(address) {
			const self = this;
			//get availble user balance
			window.web3.eth.getBalance(address, 'latest', (error, weiBalance) => {
				//console.log('USER BALNCE', window.web3.utils.fromWei(weiBalance));
				self.form.ico.eth.val = window.web3.utils.fromWei(weiBalance);
				self.userWalletBalance = self.form.ico.eth.val;
				self.form.ico.eth.displayLabel = true;
				self.form.info.title = '';
				self.form.info.msg = '';
				if (Number(self.form.ico.eth.val) === 0) {
					self.form.info.title = 'Notice:';
					self.form.info.msg = `Your active wallet "${address}" has no Ethereum available to spend that we can detect. Don't worry you can buy more ETH from your wallet during the transaction. Go ahead select the "BUY TOKENS" button.`;
				} else {
					self.checkValWhiteListed();
					self.gasPrice(self.form.ico.eth.val);
				}
				self.updateJSEVal();
			});
		},
		/**
		 * get user transactions
		 */
		getUserPastTransactions() {
			const self = this;
			const e = jseContract.events.TokensPurchased;

			jseContract.getPastEvents(e(), {
				filter: {
					_beneficiary: self.selectedPaymentAccount,
				},
				fromBlock: 0,
			}).then((t) => {
				//console.log(t);
			});
		},
		/**
		 * get timestamp of block
		 */
		getTimestamp(blockNum) {
			web3.eth.getBlock(blockNum).then((t) => {
				//console.log(moment.unix(t.timestamp).format('MMMM Do YYYY'));
			});
		},
		/**
		 * initialises wallet buy interface
		 * @returns nothing
		 * @public
		 */
		initBuy() {
			const self = this;
			const showForm = (t) => {
				if (t === 4) {
					if (self.showBuyOption) {
						self.form.showForm = true;
					} else {
						self.$swal('Connect Online Wallet', `Please login to your ethereum wallet or pay using the payment address ${self.JSETokenSale}`, 'error');
					}
				} else {
					self.$swal('Connect Rinkeby Network', 'We are actively testing the ICO Launchpad - Please update your connected wallet to point to the rinkeby network', 'error');
				}
			};
			const timeout = setTimeout(showForm, 1000);
			web3.eth.net.getId().then((t) => {
				clearTimeout(timeout);
				showForm(t);
			});
		},
		/**
		 * hide payment form
		 */
		hideMask() {
			const self = this;
			self.form.showForm = false;
		},
		/**
		 * Check form nd process payment through wallet
		 */
		processWeb3Payment() {
			const self = this;
			//console.log('PROCESS');
			self.form.error.title = '';
			self.form.error.msg = '';
			self.form.info.title = '';
			self.form.info.msg = '';
			if (self.form.ico.address.val.length !== 42) {
				self.form.ico.address.flag = true;
				self.form.error.title = 'Error Detected:';
				self.form.error.msg = 'Please check the address you entered is 42 characters long and starts with 0x';
				return;
			}
			if (Number(self.form.ico.jse.val) < 0) {
				self.form.ico.jse.flag = true;
				self.form.error.title = 'Error Detected:';
				self.form.error.msg = 'Please check the Purchase Token value entered!';
				return;
			}
			if (Number(self.form.ico.jse.val) === 0) {
				self.form.ico.jse.flag = true;
				self.form.error.title = 'Error Detected:';
				self.form.error.msg = 'Please enter an amount of tokens you would like to purchase!';
				return;
			}
			if (Number(self.form.ico.eth.val) < 0) {
				self.form.ico.eth.flag = true;
				self.form.error.title = 'Error Detected:';
				self.form.error.msg = 'Please check the Ethereum Spend value entered!';
				return;
			}
			if (Number(self.form.ico.eth.val) === 0) {
				self.form.ico.jse.flag = true;
				self.form.error.title = 'Error Detected:';
				self.form.error.msg = 'Please enter an amount of Ethereum you would like to exchange for tokens!';
				return;
			}

			//load contract
			const jseContract = new window.web3.eth.Contract(jseContractObj.abi, self.JSETokenSale);
			//console.log('CONTRACT:', jseContract);

			jseContract.methods.buyTokens().send({
				from: self.form.ico.address.val,
				value: web3.utils.toWei(self.form.ico.eth.val+'', 'ether'),
			}).on('receipt', function(receipt) {
				//console.log('receipt', receipt);
				self.form.showForm = false;
				self.$swal('Transaction Complete', `Make sure to add the JSE Token address to see your tokens in your wallet ${self.tokenAddress}`, 'success');
				self.showTracker = true;
				setTimeout(() => {
					self.showTracker = false;
				}, 5000);
				setTimeout(self.updateDistributionDisplay, 1000);
			}).on('error', function(error) {
				//console.error('error', error);
				// Do something to alert the user their transaction has failed
				self.form.error.title = 'Transaction Failed:';
				self.form.error.msg = error.message;
			});
		},
		/**
		 * prevent clickthrough
		 */
		stopBubble(e) {
			e.stopPropagation();
			e.preventDefault();
		},
		/**
		 * checkValWhiteListed
		 */
		checkValWhiteListed() {
			const self = this;
			//console.log(self.accountWhitelisted, self.form.ico.eth.val, self.maxEthWhitelisted, self.maxEthNotWhitelisted);
			if (self.accountWhitelisted) {
				if (Number(self.form.ico.eth.val) >= Number(self.maxEthWhitelisted)) {
					self.form.info.title = 'Notice:';
					self.form.info.msg = `We are unable to accept transactions over ${self.maxEthWhitelisted} ETH - Please contact admin@jsecoin.com to discuss investing a larger amount.`;
					return false;
				}
			} else if (Number(self.form.ico.eth.val) >= Number(self.maxEthNotWhitelisted)) {
				//console.log('!!!');
				self.form.info.title = 'Notice:';
				self.form.info.msg = `We are unable to accept transactions over ${self.maxEthNotWhitelisted} ETH until you have whitelisted your address ${self.form.ico.address.val}.`;
				return false;
			} else if (Number(self.form.ico.eth.val) < Number(self.minEth)) {
				self.form.info.title = 'Notice:';
				self.form.info.msg = `We are unable to accept transactions under ${self.minEth} ETH`;
				return false;
			}
			return true;
		},
		/**
		 * watch form
		 */
		keyWatch(input) {
			const self = this;
			if (input === 'eth') {
				self.updateJSEVal();
			}
			if (input === 'jse') {
				self.updateEthVal();
			}
			//if text remove placeholder and show above input
			if (String(self.form.ico[input].val).length > 0) {
				self.form.ico[input].flag = false;
				self.form.ico[input].displayLabel = true;
			} else {
				self.form.ico[input].displayLabel = false;
				self.form.ico[input].flag = true;
			}
		},
		/**
		 * confirms valid eth address
		 */
		checkAddress() {
			const self = this;
			if (String(self.form.ico.address.val).length !== 42) {
				self.form.ico.address.displayLabel = true;
				self.form.ico.address.flag = true;
				self.form.error.title = 'Invalid Ethereum Address';
				self.form.error.msg = 'Please check the address you have entered';
			} else {
				self.form.ico.address.flag = false;
				self.form.error.title = '';
				self.form.error.msg = '';
				self.updateAccountDetails(self.form.ico.address.val);
			}
		},
		/**
		 * updates jse value based on eth entered
		 */
		updateJSEVal() {
			const self = this;
			self.form.ico.jse.val = self.JSEPerEth * self.form.ico.eth.val;
			self.form.ico.jse.displayLabel = true;
			self.form.info.title = '';
			self.form.info.msg = '';
			self.form.error.title = '';
			self.form.error.msg = '';
			//console.log(self.userWalletBalance, self.form.ico.eth.val);
			if (Number(self.userWalletBalance) < Number(self.form.ico.eth.val)) {
				self.form.info.title = 'Notice:';
				self.form.info.msg = 'You have entered a higher amount of Ethereum to spend than we can find in the selected wallet address. Don\'t worry you can buy more from your wallet during the transaction. Go ahead select the "BUY TOKENS" button.';
			}
			self.checkValWhiteListed();
		},
		/**
		 * updates eth value based on jse entered
		 */
		updateEthVal() {
			const self = this;
			self.form.ico.eth.val = self.form.ico.jse.val / self.JSEPerEth;
			self.form.ico.eth.displayLabel = true;
			self.form.info.title = '';
			self.form.info.msg = '';
			self.form.error.title = '';
			self.form.error.msg = '';
			//console.log(self.userWalletBalance, self.form.ico.eth.val);
			if (Number(self.userWalletBalance) < Number(self.form.ico.eth.val)) {
				self.form.info.title = 'Notice:';
				self.form.info.msg = 'You have entered a higher amount of Ethereum to spend than we can find in the selected wallet address. Don\'t worry you can buy more from your wallet during the transaction. Go ahead select the "BUY TOKENS" button.';
			}
		},
		/**
		 * exitPayment
		 */
		exitPayment() {
			const self = this;
			self.form.showForm = false;
		},
	},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#JSEW-ICOMask {
	position: fixed;
	top:0px;
	left: 0px;
	right: 0px;
	bottom:0px;
	z-index:10000000000;
	background: rgba(8, 124, 211,0.3);
	overflow: auto;
}
#JSEW-ICOMask .amountInput {
    flex-grow: 1;
    display: flex;
    background-size: 20px!important;
    background-position: 7px 10px!important;
    height: 32px!important;
	margin: 26px 16px;
    width: auto!important;
    border-radius: 3px;
	background-repeat: no-repeat;
}
#JSEW-ICOMask .amountInput input {
    background: transparent;
    margin: 0px !important;
    padding-left: 30px !important;
    width: 100%;
}
#JSEW-ICOMask .ethIcon {
	background-image: url(../../assets/ico/eth_token.png);
}

@media screen and (max-width: 768px) {
	#JSEW-ICOMask {
		position: absolute;
		background:#fff;
	}
	#JSEW-ICOMask dl {
		margin:10px !important;
	}
}
@media screen and (max-width: 420px) {
	#JSEW-ICOMask dl dd {
		padding:0px !important;
		padding-bottom:54px !important;
	}
}

@media screen and (max-width: 800px) {
	.thinCol {
		flex:1 !important;
	}
	.mainCol {
		
	}
}

@media screen and (max-width: 450px) {
	.thinCol {
		flex:1 !important;
	}
	.mainCol {
		
	}
}

#JSEW-ICOMask dl {
	max-width: 800px;
	margin:100px auto;
	box-shadow: 0px 1px 2px 0px rgba(8, 124, 211,0.6);
	min-width: 320px;
}

#JSEW-ICOMask dd {
	padding:0px 20px;
	padding-bottom:54px;
}
#JSEW-ICOMask .hr {
	border-radius: 10px;
	height:4px;
	margin:0px;
}

#JSEW-ICOMask .footer button {
	margin:10px;
}


#JSEW-ICOMask .footer button.red {
	background: #db2828;
}

#JSEW-ICOMask .footer button.red:hover {
	background:#d01919;
}
#JSEW-ICOMask .footer button.green {
	background: #21ba45
}

#JSEW-ICOMask .footer button.green:hover {
	background:#16ab39;
}


#JSEW-ICOMask label {
	display:flex;
	position: relative;
}

#JSEW-ICOMask label input,
#JSEW-ICOMask label textarea {
	flex-grow:1;
}

#JSEW-ICOMask .inputLabel {
	position: absolute;
	top:0px;
	left:20px;
	color:#757575;
	font-size:0.9em;
	opacity:0;
	transition: opacity 0.2s;
}
#JSEW-ICOMask label.show .inputLabel {
	opacity:1;
}
#JSEW-ICOMask button,
.button.thin {
	border:0px;
	margin:10px auto;
	border-radius: 6px;
	font-size:1.1em;
	padding:10px 40px;
	background: #30c1ea;
	letter-spacing: 1px;
	transition: background 0.2s;
}
#JSEW-ICOMask button:hover,
.button.thin:hover {
	background:#087cd3;
}

#JSEW-ICOMask input[type="text"],
#JSEW-ICOMask input[type="number"],
#JSEW-ICOMask input[type="email"],
#JSEW-ICOMask textarea,
#JSEW-ICOMask .stf-select {
	border:0px;
	height: 40px;
	border-radius:8px;
	padding: 8px 16px;
	box-shadow:inset 0px 0px 0px 1px #c9caca, 0px 0px 0px 6px #f8f8f9;
	margin:26px 16px;
}

#JSEW-ICOMask .error input,
#JSEW-ICOMask .error textarea {
	box-shadow:inset 0px 0px 0px 1px #ffb4b4, 0px 0px 0px 6px #fff6f6;
	color:#ff8585;
}
#JSEW-ICOMask input:focus,
#JSEW-ICOMask textarea:focus {
	box-shadow:inset 0px 0px 0px 1px #a8d2ff, 0px 0px 0px 6px #f4f9ff;
	color:#73b6fb;
}
#JSEW-ICOMask .error .inputLabel {
	color:#ff8585;
}
#JSEW-ICOMask .errorMsg {
	background-color: #ffe8e6;
    color: #db2828;
    box-shadow: 0 0 0 1px #db2828 inset, 0 0 0 0 transparent;
	padding:16px;
	border-radius: 8px;
}
#JSEW-ICOMask .highlightPanel {
	box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);
	padding:10px;
	margin:20px;
	border-radius:8px;
	background:#fdfdfd;
}
#JSEW-ICOMask .highlightPanelFlat {
	padding:10px;
	margin:20px;
	border-radius:8px;
	background:#fdfdfd;
}

.errorPanel {
	box-shadow: 0px 1px 2px 0px #e0b4b4;
	padding:10px;
	margin:20px;
	border-radius:8px;
	background-color: #fff6f6;
    color: #9f3a38;
}

.infoPanel {
	box-shadow: 0px 1px 2px 0px #b58105;
	padding:10px;
	margin:20px;
	border-radius:8px;
	background-color: #fff8db;
    color: #b58105;
}

.errorPanel h4,
.infoPanel h4 {
	margin:0px;
}
/*
#JSEW-ICOMask .errorPanel p {
	padding: 0px;
    margin: 4px 0px;
}*/

#JSEW-ICOMask .col {
	max-width:inherit;
}
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

.button.buy.disable {
	background: linear-gradient(#727272, #616161);
}
.button.buy.disable:hover {
	background: #464646;
}

.sideButton:hover {
	background:#00a47a !important;
}
.icoRow {
	display: flex;
}
#JSEW-wrapper {
	background:#fafbfd;
}
#JSEW-ICO {
	padding-bottom:60px;
}

#JSEW-tokenDist {
	position:relative;
}

#JSEW-tokenDist dd {
	padding-bottom:40px;
}

#JSEW-ICOLogo {
	margin:10px 0px;
}

#JSEW-ICOLogo img {
	width:140px; 
	margin: 20px 20px 0px 20px;
}

#JSEW-totalDistribution {
	border-bottom:solid 1px #eee; 
	margin:0px 10px;
	padding-bottom:10px;
}

#JSEW-hardCapLegend {
	margin-top:-6px;
}

#JSEW-currentDistSpread,
#JSEW-distributionCounterWrapper {
	padding:0px 10px;
}

#JSEW-purchaseVideo {
	position:relative; 
	padding-bottom:70px;
}

#JSEW-ETHQRCode {
	margin:10px 0px; 
	align-self: center;
}

#JSEW-ethPaymentInfo {
	margin:10px;
}

#JSEW-ethPaymentInfo h2 {
	color:#db2828;
}

#JSEW-ethPaymentInfo ol {
	margin:0px 0px 0px 20px; 
	padding:0px; 
	font-size:0.9em;
}

#JSEW-KYC dt {
	color:#0096ff;
}

#JSEW-KYC i {
	color:#8d8d8d
}

#JSEW-KYCButton {
	width: 80%;
	margin-bottom:20px;
}

#JSEW-purchaseHistory dd {
	padding:20px;
}
#JSEW-exchangePaymentInfo {
	font-size: 0.875em
}

#JSEW-exchangePaymentInfo dt {
	color:#f7ad42
}

#JSEW-ethAddressMini {
	display:flex
}

#JSEW-ethAddressMini input {
	flex-grow:1; 
	font-size:0.8em; 
	margin:20px 0px;
}









.borderRight {
	border-right:solid 1px #eee;
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
	min-width:340px;
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


#JSEW-distOptions li:last-child {
	border:0px !important;
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
#JSEW-jseAddressField {
	display: flex;
	border-radius: 0px 0px 0px 4px;
	/*box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);*/
	border-top:solid 1px #eee;
	font-size:0.8em;
	background-color:#f9fbfc;
	background-image:url('../../assets/ico/jse_token.png');
	background-repeat: no-repeat;
    background-size: 30px;
    background-position: 0px 5px;
}

#JSEW-jseAddressField input,
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
	flex-grow: 1;
}
#JSEW-jseAddressField button,
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

.ribbon {
  position: absolute;
  right: -5px; top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px; height: 75px;
  text-align: right;
}
.ribbon span {
  font-size: 8px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 100px;
  display: block;
  background: #79A70A;
  background: linear-gradient(#2989d8 0%, #1e5799 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px; right: -21px;
}
.ribbon span::before {
  content: "";
  position: absolute; left: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid #1e5799;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #1e5799;
}
.ribbon span::after {
  content: "";
  position: absolute; right: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid #1e5799;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #1e5799;
}
.transactionAddress {
	display: block;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width:100px;
}

@media screen and (max-width: 1000px) {
	.enableResponsive #JSEW-ETHQRCode.borderRight {
		border:0px;
	}
}

@media screen and (max-width: 864px) {
	.enableResponsive #JSEW-currentDistSpread.borderRight {
		border:0px;
	}
}
@media screen and (max-width: 800px) {
	.enableResponsive #JSEW-tokenDist dd {
		padding-bottom:60px;
	}
}
@media screen and (max-width: 768px) {
	.enableResponsive #JSEW-ICOLogo.borderRight {
		border: 0px;
	}
	.enableResponsive .thinCol {
		flex:1;
	}
}
@media screen and (max-width: 720px) {
	.enableResponsive iframe {
		height:380px;
	}
}
@media screen and (max-width: 550px) {
	.enableResponsive iframe {
		height:290px;
	}
}
@media screen and (max-width: 440px) {
	.enableResponsive iframe {
		height:230px;
	}
}
</style>
