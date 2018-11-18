<template>
	<div class="row">
		<div id="JSEW-icoInfoPanel" class="col" style="max-width:none">
			<dl id="JSEW-tokenDist" class="mainCol">
				<dt>
					{{ $t('pages.ico.panel_tokenDist.heading_tokenDist') }}
					<div class="ribbon"><span>ETH Mainnet</span></div>
				</dt>
				<dd>
					<div class="row">
						<!-- ICO Logo -->
						<div id="JSEW-ICOLogo" class="borderRight">
							<img :class="{'bonus':bonus>0}" src="../../assets/ico/logo_white.png" alt="JSEcoin - The Javascript Embedded Cryptocurrency" />
							<!--<button v-on:click="initBuy" class="button buy" :class="{disable: !showBuyOption}">{{BuyJSEButton}}</button>-->
							<div v-if="bonus>0" style="background:rgba(0,0,0,0.48); margin:10px 10px 10px 10px; font-size:0.65em; text-align:center; font-weight:bold; border-radius:3px; border:solid 1px rgba(230,230,230,0.2); padding:4px 8px;">
								{{bonus}}% BONUS ROUND
								<div style="border-top: solid 1px rgba(230, 230, 230, 0.2); margin-top: 4px; padding-top: 4px;">1<span style="font-size:0.85em;color:#167dd5;"> ETH</span> = {{calcBonus()}}<span style="font-size:0.85em;color:#167dd5;"> JSE</span></div>
							</div>
						</div>
						<!-- xICO Logo -->
						<!-- ICO Status Info -->
						<div class="mainCol">
							<!-- Total JSE Distribution -->
							<div id="JSEW-totalDistribution">
								<h2 style="margin-bottom:0px; display:inline-block; padding:4px 16px;background:rgba(0,0,0,0.48); border-radius:50px;">{{ $t('pages.ico.panel_tokenDist.subheading_totalDist') }}</h2>

								<div id="JSEW-icoMeter">
									<div id="JSEW-icoMeterDisplay" :style="{width:`${progressBarWidth}%`}">
										<div style="width:1px;height:1px; float:right; position:relative;" v-if="tokenLoaded">
											<div id="JSEW-icoPointerArr"></div>
											<div id="JSEW-icoPointer">
												<div id="JSEW-icoPointerWrapper">
													<div class="icoRow">
														<div class="coin"></div>
														<span style="color:#0096ff; margin-right:4px;">{{total.jseDisplay}}</span>
														<span>JSE</span>
													</div>
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
							<div id="JSEW-icoInfoPanelOverview" class="row">
								<!-- Current Distribution Spread -->
								<div id="JSEW-currentDistSpread" class="mainCol borderRight" style="text-align:center">
									<h2 style="display:inline-block; padding:4px 16px;background:rgba(0,0,0,0.48); border-radius:50px;">{{ $t('pages.ico.panel_tokenDist.subheading_currentDist') }}</h2>
									<ul id="JSEW-distOptions">
										<!-- ETH -->
										<li id="JSEW-distETH" class="mainCol borderRight">
											<div id="JSEW-eth"></div>
											{{total.ethDisplay}} <span>ETH</span>
										</li>
										<!-- xETH -->
										<!-- JSE -->
										<li id="JSEW-distJSE" class="mainCol borderRight">
											<div id="JSEW-jse"></div>
											{{total.jseDisplay}} <span>JSE</span>
										</li>
										<!-- xJSE -->
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
								<div id="JSEW-distributionCounterWrapper" class="mainCol" style="text-align:center">
									<h2 style="display:inline-block; padding:4px 16px;background:rgba(0,0,0,0.48); border-radius:50px;">{{bonus}}% {{ $t('pages.ico.panel_tokenDist.subheading_DistEndsIn') }}</h2>
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
							{{ $t('pages.ico.panel_tokenDist.footer_msg') }}
						</p>
					</div>
					<!-- xFooter -->
				</dd>
			</dl>
		</div>
		<div id="JSEW-promoVideo" class="col" style="width:300px; max-width:none;">
			<dl id="JSEW-tokenDist">
				<dt>
					Explainer Video
				</dt>
				<dd style="padding-bottom:14px;">
					<iframe style="background:#000;" width="100%" height="160" src="https://www.youtube.com/embed/keoXxFL6aPM?rel=0&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

					<router-link v-bind:to="`/${$store.state.local}/ico`" tag="button" class="button">
						INVEST IN JSECOIN
					</router-link>
					<a href="https://bit.ly/2NV1eOW" target="_blank" class="button">PURCHASE ON LA<span style="margin-left: 2px;">TOKEN</span></a>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import Web3 from 'web3';
import jseContractObj from '@/components/ICO/JSETokenSale.json';

window.ActiveNetwork = new Web3('https://mainnet.infura.io');

export default {
	name: 'ICOPanel',
	data() {
		return {
			bonus: 0,
			bonusOptions: [
				10,
				8,
				5,
				0,
				0,
			], //bonus amount set in contract
			JSEBonusVal: 0, //bonus amount set in contract
			tokenLoaded: false, //true once JSE contract enabled
			//JSE Token Address - query for balance
			tokenAddress: '0x2d184014b5658C453443AA87c8e9C4D57285620b',
			//contract Address
			JSETokenSale: '0xcfc4fceb90787ef1fda15bb115630ef453f50f86',
			networkVersion: '1', //1 = mainnet 3 = rinkeby
			endICO: 1539259200, //Thursday, 11-Oct-18 12:00:00 UTC
			bonusDate: 0, //active bonus date
			bonusEndDate: [
				1531310400,//july 11 10% -start ICO
				1533988800,//aug 11 8%
				1536667200,//sep 11 5%
				1539259200,//oct 11 0% -end ICO
				1539259200,//oct 11 0% -end ICO
			], //bonus end date
			endDate: '', //calculate generate readable date from endICO
			months: '00', //countdown months left
			days: '00', //countdown days left
			hrs: '00', //countdown hrs left
			mins: '00', //countdown mins left
			seconds: '00', //countdown seconds left
			//JSE goal Checkpoints reached
			goalCheckpoints: [
				20000000, // 100,000
				50000000, // 250,000
				150000000, // 750,000
				300000000, // 1,500,000
				500000000, // 2,500,000
				800000000, // 4,000,000
				2000000000, // 10,000,000
				3600000000, // 18,000,000
				5000000000, // 25,000,000
			],
			total: {
				eth: 0, //total eth paid into contract
				eos: 0, //total eos paid into contract
				jse: 0, // total JSE distributed
				jseDisplay: '0',
				ethDisplay: '0',
			},
			JSEPerEth: 75000,
			progressBarWidth: 0, //width of progress bar in %
			activeGoal: 5000000000,
			activeGoalDisplay: '5,000,000,000',
		};
	},
	created() {
		const self = this;
		const todayUnix = moment().format('x');

		self.bonusEndDate.some((date, i) => {
			//console.log(moment.unix(self.bonusEndDate[i]).isAfter(Number(todayUnix)));
			if (moment.unix(self.bonusEndDate[i]).isAfter(Number(todayUnix))) {
				self.bonusDate = self.bonusEndDate[i];
				self.bonus = self.bonusOptions[i-1];
				return true;
			}
			return false;
		});

		window.jseContract = new window.ActiveNetwork.eth.Contract(jseContractObj.abi, self.JSETokenSale);
		self.updateDistributionDisplay();
	},
	mounted() {
		const self = this;
		self.endDate = moment.unix(self.bonusDate).format('MMMM Do YYYY');
		setInterval(() => {
			const endICO = moment.unix(self.bonusDate);
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

				if (days === '00') {
					hrs = endICO.diff(moment(), 'hours');
				}
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

				//update distribution display every min
				if (seconds === '00') {
					self.updateDistributionDisplay();
				}
			}
		}, 1000);
	},
	methods: {
		calcBonus() {
			const self = this;
			const JSEPlusBonus = self.JSEPerEth * ((self.bonus/100)+1);
			return Math.floor(Number(JSEPlusBonus)).toLocaleString();
		},
		totalTokensSold() {
			const self = this;

			//total JSE Distributed from contract acc
			jseContract.methods.totalTokensSold().call().then((t) => {
				self.total.jse = Math.floor(t/1e18);
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
				self.tokenLoaded = true;
			});
		},
		updateDistributionDisplay() {
			const self = this;

			self.totalTokensSold();

			//Amount of ether raised
			jseContract.methods.weiRaised().call().then((t) => {
				////console.log('weiRaised', web3.utils.fromWei(t));
				const etherRaised = web3.utils.fromWei(t);
				if (etherRaised < 10) {
					self.total.eth = +(Number(etherRaised)).toFixed(2);
				} else {
					self.total.eth = Math.floor(web3.utils.fromWei(t));
				}
				self.total.ethDisplay = self.total.eth.toLocaleString();
			});
		},
	},
};
</script>

<style scoped>
/* Your styles */
#JSEW-tokenDist .button {
	width: 90%;
    border: solid 1px rgba(255,255,255,0.2);
    border-radius: 4px;
    background: rgba(0,0,0,0.4);
    color: #25cbfc;
    padding: 6px;
    /* margin: 1px 10px; */
		margin-top: 8px;
		text-align: center;
	transition: background 0.2s, border 0.2s;
}

#JSEW-tokenDist .button:hover {
	background: #000;
    border: solid 1px #25cbfc;
}

#JSEW-ICOMask,
#JSEW-ICOLoadingMask {
	position: fixed;
	top:0px;
	left: 0px;
	right: 0px;
	bottom:0px;
	z-index:10000000000;
	background: rgba(8, 124, 211,0.3);
	overflow: auto;
}

#JSEW-ICOLoadingAnimationWrapper {
	width: 200px;
	height:254px;
	margin:100px auto;
	background-color: #fff;
	padding:10px 0px;
	border-radius:8px;
	box-shadow: 0px 1px 2px 0px rgba(8, 124, 211,0.6);
}

#JSEW-ICOLoadingAnimationWrapper .txtOverlay {
	color:#fff;
	text-align:center;
	position: absolute;
	bottom:11px;
	left:0px;
	right:0px;
	font-weight:bold;
	font-size:0.8em;
}

#JSEW-ICOLoadingMask #JSEW-ICOLoadingAnimationx {
	background-image:url("../../assets/ico/ICO_alert.png");
    background-repeat: no-repeat;
    background-size: contain;
	width: 180px;
	height:230px;
	margin:0px auto;
	position: relative;
	/*
	min-width: 120px;
    padding: 20px;
    border-radius: 6px;
    color: #606060;
    position: relative;*/
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
	.mobileHide {
		display:none;
	}
	.mobileShow {
		display:block;
	}
@media screen and (max-width: 600px) {
	.mobileHide {
		display:none;
	}
	.mobileShow {
		display:block;
	}
}
.tranAddress td {
	border-bottom:solid 4px #ccc;
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

#JSEW-ICOMask .footer button.green.disable,
#JSEW-ICOMask .footer button.green.disable:hover {
	background: #ccc;
	cursor: default;
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
	position: relative;
	margin-bottom:40px;
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
	overflow: visible !important;
	font-size:0.8em;
	max-width:630px;
	margin-top:16px;
	margin-bottom:0px;
}

#JSEW-tokenDist dd {
	padding-bottom:22px;
}

#JSEW-ICOLogo {
	margin:10px 0px;
}

#JSEW-ICOLogo img {
	width:90px;
	margin: 20px 20px 0px 20px;
}

#JSEW-ICOLogo img.bonus {
	margin: 4px 20px 0px 20px;
}

#JSEW-totalDistribution {
	border-bottom:solid 1px rgba(230,230,230,0.2);
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
	font-size:1em;
	border-bottom:solid 2px #db2828;
	margin:8px 0px;
}
#JSEW-currentDistSpread h2,
#JSEW-distributionCounterWrapper h2 {
	margin:0px 0px 8px 0px;
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
	border-right:solid 1px rgba(230,230,230,0.2);
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
	background: rgba(0,19,36,0.8);
    margin: 8px 10px;
    box-shadow: rgba(0, 0, 0, 1) 0px 1px 3px 0px, inset 0px 0px 1px 0px rgba(230,230,230,0.4);
    padding: 0px;
    border-radius: 6px;
    color: #b7b7b7;
    position: relative;
    /*overflow: hidden;*/
	flex-grow: 1;
}
dt {
	border-bottom: solid 1px rgba(230,230,230,0.2);
    padding: 8px 12px;
    font-weight: bold;
    font-size: 0.8em;
    letter-spacing: 1px;
	min-width:280px;
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
	background:rgba(230,230,230,0.2);
}
.mainCol {
	flex:1;
}

#JSEW-icoMeter {
	height: 20px;
	border-radius:20px;
	background:rgba(255,255,255,0.08);
	margin:10px;
	margin-top:10px;
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
	transition: width 0.8s;
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
	bottom:-7px;
	left:50%;
	margin-left:-12px;
	z-index:1000;
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
	bottom:1px;
	left: 1px;
	right:1px;
	font-size:0.8em;
	background: rgba(0,19,36,0.8);
	border-radius: 0px 0px 6px 6px;
}
.footer p {
	line-height: 8px;
}


#JSEW-distOptions {
	border:solid 1px rgba(230,230,230,0.2);
	border-radius: 10px;
	display: flex;
	margin:0px;
	padding:0px;
	font-weight: bold;
	font-size:0.7em;
	background: rgba(0,0,0,0.18);
}

#JSEW-distOptions li {
	list-style: none;
	text-align: center;
	padding:6px 2px;
	margin: 0px;
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
	background-image: url(../../assets/ico/jse_token_white.png);
}
#JSEW-eth {
	background-image: url(../../assets/ico/eth_token_white.png);
}

#JSEW-distCountdown {
	margin:0px;
	padding:4px;
	display: flex;
	position: relative;
	padding:4px;
	padding-bottom:34px;
	border:solid 1px rgba(230,230,230,0.2);
	border-radius: 10px;
	overflow: hidden;
}
#JSEW-distCountdown li {
	list-style: none;
	flex-grow:1;
	text-align: center;
}
.counter {
	border:solid 1px rgba(230,230,230,0.2);
	background: rgba(0,19,36,0.8);
	border-radius: 6px;
	padding:4px;
	font-family: Courier New, Courier, monospace;
	font-weight: bold;
}
#JSEW-countFooter {
	position: absolute;
	bottom:0px;
	background:rgba(0,0,0,0.48);
	left: 0px;
	right: 0px;
	line-height: 24px;
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
	border-top:solid 1px rgba(230,230,230,0.2);
	font-size:0.8em;
	background-color:#f9fbfc;
	background-image:url('../../assets/ico/eth_token.png');
	background-repeat: no-repeat;
    background-size: 30px;
    background-position: 3px 5px;
}
#JSEW-jseAddressField {
	display: flex;
	border-radius: 0px 0px 0px 4px;
	/*box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);*/
	border-top:solid 1px rgba(230,230,230,0.2);
	font-size:0.8em;
	background-color:#f9fbfc;
	background-image:url('../../assets/ico/jse_token.png');
	background-repeat: no-repeat;
    background-size: 30px;
    background-position: 3px 5px;
}

#JSEW-jseAddressField input,
#JSEW-ethAddressField input {
	padding:4px 8px;
	font-family: Courier New, Courier, monospace;
	border-radius: 4px 0px 0px 4px;
	font-weight: bold;
	height:40px;
	font-size:1.2em;
	color:#b7b7b7;
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
	box-shadow: 0 0 0 1px #c9ba9b inset, rgba(210, 214, 217,1) 0px 1px 3px 0px;
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
#JSEW-icoInfoPanelOverview {
	margin:10px 0px;
}

@media screen and (max-width: 1000px) {
	.enableResponsive #JSEW-ETHQRCode.borderRight {
		border:0px;
	}
	.enableResponsive #JSEW-promoVideo {
		display: none;
	}
	.enableResponsive #JSEW-icoInfoPanel {
		max-width: 640px !important;
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
	.enableResponsive .icoRow {
		font-size:1.4em;
	}
	.enableResponsive #JSEW-icoMeter {
		margin:0px;
	}
	.enableResponsive #JSEW-icoInfoPanelOverview {
		margin:6px 0px;
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
	.enableResponsive #JSEW-distributionCounterWrapper {
		display: none;
	}
}
</style>
