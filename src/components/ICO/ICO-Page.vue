<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/ico`" tag="li" class="active">
					ICO Launchpad
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/whitelisting`" tag="li">
					KYC
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/ico/issue`" tag="li">
					Report Issue
				</router-link>
			</ul>
		</nav>
		<div id="JSEW-ICOLoadingMask" v-if="loadingTransaction" v-on:click="hideTransactionMask">
			<div id="JSEW-ICOLoadingAnimationWrapper">
				<div id="JSEW-ICOLoadingAnimationx">
					<!--1.2em<div id="JSEA-rotatingLogo"></div>-->
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" style="white-space: preserve-spaces; display:block; position:absolute; top:0px; width: 60px; margin: 50%; left: -30px; top: -26px;">
						<g id="JSEA-rotatingLogo3" class="active" filter="none" transform="translate(498,507) translate(-445.503,-500.996)" style="fill: #00b1f4;">
							<path id="JSEA-layer1" d="M56.3,556L55.8,704.3C55.9,735.5,72.7,764.5,99.6,780.2L229.3,854.5C256,869.7,289,869.8,316.1,854.7L446.7,779.3C473.6,763.8,490.5,734.9,490.4,703.8L490.9,555.5C490.8,524.3,474,495.3,447.1,479.6L317.4,405.3C290.7,390.1,257.7,390,230.6,405.1L100,480.4C73.1,495.9,56.2,524.8,56.3,556ZM273.3,470L411.9,550.8L411.8,709.9L273.9,789.5L136,710L135.3,549.6L273.3,470Z" transform="translate(-55.8,-0.0372215)" style=""/>
							<path id="JSEA-layer2" d="M510.2,556.3L509.7,704.6C509.8,735.8,526.6,764.8,553.5,780.5L683.2,854.8C709.9,870,742.9,870.1,770,855L900.6,779.6C927.5,764.1,944.4,735.2,944.3,704.1L944.8,555.8C944.7,524.6,927.9,495.6,901,479.9L771.3,405.6C744.6,390.4,711.6,390.3,684.5,405.4L553.9,480.8C527.1,496.3,510.2,525.1,510.2,556.3ZM727.2,470.4L865.8,551.2L865.7,710.3L727.8,789.9L590,710.4L589.3,550L727.2,470.4Z" transform="translate(-55.8,-0.0372215)" style=""/>
							<path id="JSEA-layer3" d="M283,162.2L282.5,310.5C282.6,341.7,299.4,370.7,326.3,386.4L456,460.7C482.7,475.9,515.7,476,542.8,460.9L673.4,385.5C700.3,370,717.2,341.1,717.1,310L717.6,161.7C717.5,130.5,700.7,101.5,673.8,85.8L544.1,11.5C517.4,-3.7,484.4,-3.8,457.3,11.3L326.7,86.7C299.8,102.2,282.9,131,283,162.2ZM499.9,76.3L638.5,157L638.4,316.1L500.5,395.7L362.7,316.2L362,155.9L499.9,76.3Z" transform="translate(-55.8,-0.0372215)" style=""/>
							<g transform="translate(-55.8,-0.0372215)">
								<g>
									<path d="M585.3,817.8C529.4,832.6,470.5,832.6,414.6,817.7C407,815.7,398,820.2,396.1,828.2C394.3,836.1,398.5,844.5,406.6,846.7C467.5,862.9,532.3,862.9,593.2,846.8C601,844.7,605.8,836.1,603.7,828.3C601.6,820.4,593.2,815.8,585.3,817.8L585.3,817.8Z"/>
								</g>
							</g>
							<g transform="translate(-55.8,-0.0372215)">
								<g>
									<path d="M181.1,413.6C196.2,357.5,225.7,306.7,266.6,265.6C272.3,259.9,272.3,250.1,266.6,244.4C260.9,238.7,251.1,238.6,245.4,244.4C201,289,168.5,344.8,152.2,405.6C150.2,413.2,154.7,422.2,162.7,424.1C170.5,425.9,178.9,421.7,181.1,413.6L181.1,413.6Z"/>
								</g>
							</g>
							<g transform="translate(-55.8,-0.0372215)">
								<g>
									<path d="M733.4,265.5C774.4,306.6,803.8,357.4,818.9,413.5C821,421.3,829.6,426.1,837.4,424C845.3,421.8,850,413.4,847.9,405.5C831.5,344.7,799.1,288.8,754.6,244.2C748.9,238.5,739.1,238.5,733.4,244.2C727.6,250.1,727.6,259.8,733.4,265.5L733.4,265.5Z"/>
								</g>
							</g>
						</g>
					</svg>
					<div class="txtOverlay">INITIATED TRANSACTION</div>
				</div>
			</div>
		</div>
		<!-- ICO form dialogue mask -->
		<div v-if="form.showForm" id="JSEW-ICOMask" v-on:click="hideMask">
			<!-- Model window -->
			<dl v-on:click="stopBubble($event)">
				<!-- Title -->
				<dt>{{ $t('pages.ico.panel_purchase.heading_purchase') }}</dt>
				<!-- xTitle -->
				<!-- Content -->
				<dd class="hasFooter">
					<!-- Instructions -->
					<div class="row">
						<div style="align-self: center;"><img width="160px" style="margin:10px auto;" src="../../assets/ico/wallets.png" /></div>
						<div>
							<ol>
								<li>{{ $t('pages.ico.panel_purchase.purchase_list1') }}</li>
								<li>{{ $t('pages.ico.panel_purchase.purchase_list2') }}</li>
								<li>{{ $t('pages.ico.panel_purchase.purchase_list3') }}</li>
							</ol>
						</div>
					</div>
					<!-- xInstructions -->
					<div class="hr"><hr /></div>
					<!-- Info Display -->
					<div class="highlightPanelFlat" v-if="!accountWhitelisted">
						<i>
							{{ $t('pages.ico.panel_purchase.highlight_info1') }}
							<router-link v-bind:to="`/${$store.state.local}/whitelisting`" tag="a">
								{{ $t('pages.ico.panel_purchase.highlight_link') }}
							</router-link>
							{{ $t('pages.ico.panel_purchase.highlight_info2') }} <b>{{maxEthNotWhitelisted}} ETH</b>
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
						<div id="JSEW-bonusDisplay" v-if="bonus>0">
							+ {{bonus}}% BONUS: {{JSEBonusVal}} JSE
						</div>
						<div class="col">
							<label :class="{show:form.ico.address.displayLabel, error:form.ico.address.flag}">
								<div class="inputLabel">{{ $t('pages.ico.panel_purchase.form_walletAddress') }} *</div>
								<input type="text" :placeholder="$t('pages.ico.panel_purchase.form_walletAddress') + ' *'" v-model="form.ico.address.val" @keyup="keyWatch('address')" v-on:blur="checkAddress" />
							</label>
						</div>
						<div class="col">
							<label :class="{show:form.ico.eth.displayLabel, error:form.ico.eth.flag}">
								<div class="inputLabel">{{ $t('pages.ico.panel_purchase.form_ethereumSpend') }} *</div>
								<div class="amountInput ethIcon">
									<input type="number" min="0" step="0.1" :placeholder="$t('pages.ico.panel_purchase.form_ethereumSpend') + ' *'" v-model="form.ico.eth.val" @keyup="keyWatch('eth')" @mouseup="keyWatch('eth')" />
								</div>
							</label>
						</div>
						<div class="col">
							<label class="icoCoin" :class="{show:form.ico.jse.displayLabel, error:form.ico.jse.flag}">
								<div class="inputLabel">{{ $t('pages.ico.panel_purchase.form_purchaseTokens') }} *</div>
								<div class="amountInput coin">
									<input type="number" min="10000" step="200" :placeholder="$t('pages.ico.panel_purchase.form_purchaseTokens') + ' *'" v-model="form.ico.jse.val" @keyup="keyWatch('jse')" @mouseup="keyWatch('jse')" />
								</div>
							</label>
						</div>
					</div>
					<!-- xICO Form ERC20 -->

					<!-- Footer -->
					<div class="footer" style="display: flex; justify-content: center;">
						<button class="button green" :class="{'disable':!form.ico.showBuyButton}" v-on:click="processWeb3Payment">{{ $t('pages.ico.panel_purchase.button_buyTokens') }}</button>
						<button class="button red" v-on:click="exitPayment">{{ $t('pages.ico.panel_purchase.button_cancel') }}</button>
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
						{{ $t('pages.ico.panel_tokenDist.heading_tokenDist') }}
						<div class="ribbon"><span>ETH Mainnet</span></div>
					</dt>
					<dd>
						<div class="row">
							<!-- ICO Logo -->
							<div id="JSEW-ICOLogo" class="borderRight">
								<img :class="{'bonus':bonus>0}" src="../../assets/ico/logo.png" alt="JSEcoin - The Javascript Embedded Cryptocurrency" />
								<button style="display:flex; font-size:0.8em; align-items:flex-end;justify-content: center;" v-on:click="initBuy" class="button buy" :class="{disable: !showBuyOption}">
									<img v-if="!showBuyOption" src="../../assets/ico/metamask_ico.png" style="height: 16px; width: 19px; margin: 0px 4px 0px 0px;" alt="Metamask logo" />
									<img v-else src="../../assets/ico/metamask_ico_active.png" style="height: 16px; width: 19px; margin: 0px 4px 0px 0px;" alt="Metamask logo" />
									{{BuyJSEButton}}</button>
								<div v-if="bonus>0" style="margin:10px 10px 10px 10px; font-size:0.65em; text-align:center; font-weight:bold; border-radius:3px; border:solid 1px #eee; padding:4px 8px;">
									{{bonus}}% BONUS ROUND
									<div style="border-top: solid 1px #eee; margin-top: 4px; padding-top: 4px;">1<span style="opacity:0.8; font-size:0.85em;"> ETH</span> = {{calcBonus()}}<span style="opacity:0.8; font-size:0.85em;"> JSE</span></div>
								</div>
							</div>
							<!-- xICO Logo -->
							<!-- ICO Status Info -->
							<div class="mainCol">
								<!-- Total JSE Distribution -->
								<div id="JSEW-totalDistribution">
									<h2>{{ $t('pages.ico.panel_tokenDist.subheading_totalDist') }}</h2>

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
								<div class="row" style="margin:10px 0px;">
									<!-- Current Distribution Spread -->
									<div id="JSEW-currentDistSpread" class="mainCol borderRight">
										<h2 style="text-align: center;">{{ $t('pages.ico.panel_tokenDist.subheading_currentDist') }}</h2>
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
											<!--<li id="JSEW-countFooter">1ETH = 7,500JSE</li>-->
										</ul>
									</div>
									<!-- xCurrent Distribution Spread -->

									<!-- Distribution Timer -->
									<div id="JSEW-distributionCounterWrapper" class="mainCol">
										<h2 style="text-align: center;">{{bonus}}% {{ $t('pages.ico.panel_tokenDist.subheading_DistEndsIn') }}</h2>
										<ul id="JSEW-distCountdown">
											<li title="Days" class="counter">{{days}}</li>
											<li>:</li>
											<li title="Hours" class="counter">{{hrs}}</li>
											<li>:</li>
											<li title="Minutes" class="counter">{{mins}}</li>
											<li>:</li>
											<li title="Seconds" class="counter">{{seconds}}</li>
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
				<!-- xToken Distribution -->

				<!-- Purchase video -->
				<dl id="JSEW-purchaseVideo" class="thinCol">
					<dt><i class="fa fa-info-circle "></i> {{ $t('pages.ico.panel_howToPurchase.heading_howTo') }}</dt>
					<dd>
						<iframe width="100%" height="226" src="https://www.youtube.com/embed/ivVxijQAQT8?rel=0&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						<div class="footer">
							<p>
								<b>{{ $t('pages.ico.panel_howToPurchase.footer_header') }}</b><br/>
								{{ $t('pages.ico.panel_howToPurchase.footer_msg') }}
							</p>
						</div>
					</dd>
				</dl>
				<!-- xPurchase video -->
			</div>
			<!-- xDistribution status and video -->
			<div class="row">
				<dl>
					<dt>ICO Rank and Overview</dt>
					<dd class="row" style="padding:10px; justify-content: center;">
						<div class="col"><a href="https://icobench.com/ico/jsecoin" target="_blank" rel="nofollow" title="JSEcoin on ICO Bench"><img src="../../assets/ico/icobench.png" style="height:38px; border-radius:4px; margin:0px 4px;" /></a></div>
						<div class="col"><a href="https://blokt.com/ico-ratings/jsecoin" target="_blank" rel="nofollow" title="JSEcoin on Blokt"><img src="../../assets/ico/blokt-ico-rating-a.png" style="height:38px; border-radius:4px; margin:0px 4px;" /></a></div>
						<div class="col"><a href="https://icoholder.com/en/jsecoin-22332" target="_blank" rel="nofollow" title="JSEcoin on ICO Holder"><img src="https://icoholder.com/files/img/widget/e7f9eb690f6ce65ea318aa819b7987cb.svg?r=4.11" style="height:38px; border-radius:4px; margin:0px 4px;" /></a></div>
						<div class="col"><a href="https://www.trackico.io/ico/jsecoin/" target="_blank" rel="nofollow" title="JSEcoin on Track ICO"><img src="../../assets/ico/track.png" style="height:38px; border-radius:4px; margin:0px 4px;" /></a></div>
						<div class="col"><a href="https://foxico.io/project/jsecoin" target="_blank" title="JSEcoin on FoxICO"><img border="0" src="https://foxico.io/api/rating/jsecoin"  style="height:38px; border-radius:4px; margin:0px 4px;" alt="JSEcoin ICO rating"/></a></div>
						<div class="col"><a href="https://icomarks.com/ico/jsecoin" target="_blank" rel="nofollow" title="JSEcoin on ICO Marks"><img border="0" src="https://icomarks.com/widget/j/jsecoin/horizontal.svg" style="height:38px; border-radius:4px; margin:0px 4px;" alt="JSEcoin ICO rating"/></a></div>
					</dd>
				</dl>
			</div>
			<!-- Ethe Payment and KYC -->
			<div class="row">
				<!-- Ethereum Payment Overview Panel -->
				<dl id="JSEW-paymentEthOverview" class="mainCol">
					<dt>{{ $t('pages.ico.panel_directPayment.heading_directPayment') }}</dt>
					<dd>
						<div>
							<img src="../../assets/ico/metamask.svg" style="width:50px; float:left; margin:0px 10px" alt="Metamask logo" />
							<p>
								If you don't have an integrated wallet like <a href="http://metamask.io/" target="_BLANK">Metamask</a> - you can send Ethereum direct to our smart contract address for JSE Tokens.
							</p>
							<div class="hr" style="margin:10px 0px;"><hr /></div>
						</div>
						<div class="row" style="border-bottom:solid 1px #eee;">
							<!-- ETH QR Code -->
							<div id="JSEW-ETHQRCode" class="borderRight">
								<div style="position:relative; margin:10px 10px 0px 10px">
									<div id="JSEA-QRBGImage"></div>
									<qriously v-if="JSETokenSale" v-bind="{foregroundAlpha:1, backgroundAlpha:0}" :value="JSETokenSale" foreground="#0d152c" :size="160" />
								</div>
								<div style="margin:0px 10px 10px 10px; font-size:0.65em; text-align:center; font-weight:bold; border-radius:3px; border:solid 1px #eee; padding:4px 8px;">QR CODE<BR />JSE CONTRACT ADDRESS</div>
							</div>
							<!-- xETH QR Code -->

							<!-- ETH payment Info -->
							<div id="JSEW-ethPaymentInfo">
								<h2><i class="fa fa-info-circle"></i> {{ $t('pages.ico.panel_directPayment.subheading_important') }}</h2>
								<ol>
									<li> {{ $t('pages.ico.panel_directPayment.info_list1') }}</li>
									<li> Minimum accepted transfer <b>0.1 ETH</b></li>
									<!--<li> {{ $t('pages.ico.panel_directPayment.info_list2') }}</li>-->
								</ol>
								<div class="warning">
									<b>2. {{ $t('pages.ico.panel_directPayment.subheading_doNot') }}</b>
									<p><i>{{ $t('pages.ico.panel_directPayment.msg_doNot') }}</i></p>
									<!--<p>Please read below on why this is important...</p>-->
								</div>
								<div style="text-align:center">
									<a target="_blank" href="https://tokenmarket.net/what-is/ethereum-token-wallets/" STYLE="background:#3375bb;color:#fff; margin: 10px; font-size: 0.65em; text-align: center; font-weight: bold; border-radius: 3px; border: 0px; padding: 4px 8px;">
									<i class="fa fa-check"></i> VIEW COMPATIBLE WALLETS</a>
								</div>
							</div>
							<!-- xETH payment Info -->
						</div>

						<div class="row" style="padding:10px; justify-content: center;">
							<div class="col"><a href="https://github.com/ethereum/mist/releases" target="_blank" rel="nofollow" title="Mist Wallet"><img src="../../assets/ico/mist_badge.png" style="height:30px; margin:0px 4px;" /></a></div>
							<div class="col"><a href="https://token.im/" target="_blank" rel="nofollow" title="IMToken Wallet"><img src="../../assets/ico/imtoken_badge.png" style="height:30px; margin:0px 4px;" /></a></div>
							<div class="col"><a href="https://www.myetherwallet.com/" target="_blank" rel="nofollow" title="My Ether Wallet"><img src="../../assets/ico/mew_badge.png" style="height:30px; margin:0px 4px;" /></a></div>
							<div class="col"><a href="https://trustwalletapp.com/" target="_blank" rel="nofollow" title="Trust Wallet"><img src="../../assets/ico/trust_badge.png" style="height:30px; margin:0px 4px;" /></a></div>
							<div class="col"><a href="https://www.cipherbrowser.com/" target="_blank" title="Cipher Wallet"><img border="0" src="../../assets/ico/cipher_badge.png"  style="height:30px; margin:0px 4px;" /></a></div>
							<div class="col"><a href="https://www.coinomi.com/" target="_blank" rel="nofollow" title="Coinomi Wallet"><img border="0" src="../../assets/ico/coinomi_badge.png" style="height:30px; margin:0px 4px;" /></a></div>
						</div>
					</dd>
				</dl>
				<!-- xEthereum Payment Overview Panel -->

				<!-- KYC -->
				<dl id="JSEW-KYC" class="thinCol">
					<dt><i class="fa fa-info-circle "></i> {{ $t('pages.ico.panel_KYC.heading_KYC') }}</dt>
					<dd class="hasFooter" style="padding-bottom: 60px;">
						<p>
							{{ $t('pages.ico.panel_KYC.para_kyc') }}
						</p>
						<p style="margin:10px; border-radius:6px; border:solid 1px #eee; padding:4px 8px;">
							<i>{{ $t('pages.ico.panel_KYC.para_infoMsg') }}</i>
						</p>


						<div class="footer">
							<router-link style="width:80%" class="button thin" v-bind:to="`/${$store.state.local}/whitelisting`" tag="button">
								<i class="fa fa-user-circle-o"></i> {{ $t('pages.ico.panel_KYC.button_startKYC') }}
							</router-link>
						</div>
					</dd>
				</dl>
				<!-- xKYC -->
			</div>
			<!-- xEthe Payment and KYC -->

			<div class="row">
				<div class="mainCol">
					<dl>
						<dt>{{ $t('pages.ico.panel_directPayment.heading_paymentAddress') }} <i class="fa  fa-level-down"></i></dt>
						<dd>
							<div id="JSEW-ethAddressField">
								<input disabled type="text" :value="JSETokenSale" />
							</div>
							<div class="row">
								<div class="col" style="max-width:inherit;">
									<button class="button thin green" style="width: 80%; font-size:0.8em;" v-clipboard:copy="JSETokenSale">
										<i class="fa fa-copy"></i> {{ $t('pages.ico.panel_directPayment.button_copy') }}
									</button>
								</div>
								<div class="col" style="max-width:inherit;">
									<a target="_BLANK" href="https://etherscan.io/address/0xcfc4fceb90787ef1fda15bb115630ef453f50f86" class="button thin" style="width: 80%; font-size:0.8em">
										<i class="fa fa-bar-chart"></i> ETHERSCAN LOOKUP
									</a>
								</div>
							</div>
						</dd>
					</dl>

					<dl style="margin-top:16px">
						<dt>{{ $t('pages.ico.panel_purchaseHistory.heading_tokenAddress') }} <i class="fa  fa-level-down"></i></dt>
						<dd>
							<div id="JSEW-jseAddressField">
								<input disabled type="text" :value="tokenAddress" />
							</div>
							<div class="row">
								<div class="col" style="max-width:inherit;">
									<button class="button thin green" style="width: 80%; font-size:0.8em" v-clipboard:copy="tokenAddress">
										<i class="fa fa-copy"></i> {{ $t('pages.ico.panel_directPayment.button_copy') }}
									</button>
								</div>
								<div class="col" style="max-width:inherit;">
									<a target="_BLANK" href="https://etherscan.io/address/0x2d184014b5658C453443AA87c8e9C4D57285620b" class="button thin" style="width: 80%; font-size:0.8em">
										<i class="fa fa-bar-chart"></i> ETHERSCAN LOOKUP
									</a>
								</div>
							</div>
						</dd>
					</dl>
				</div>
				<dl id="JSEW-calculator" class="thinCol" style="margin-bottom:20px;">
					<dt>ETH / JSE Bonus Calculator</dt>
					<dd>
						<div id="JSEW-bonusDisplay" v-if="bonus>0">
							+ {{bonus}}% BONUS: {{JSEBonusVal}} JSE
						</div>
						<div style="margin:20px;">
							<label :class="{show:form.ico.eth.displayLabel, error:form.ico.eth.flag}">
								<div class="inputLabel">{{ $t('pages.ico.panel_purchase.form_ethereumSpend') }} *</div>
								<div class="amountInput ethIcon">
									<input type="number" min="0" step="0.1" :placeholder="$t('pages.ico.panel_purchase.form_ethereumSpend') + ' *'" v-model="form.ico.eth.val" @keyup="keyWatch('eth')" @mouseup="keyWatch('eth')" />
								</div>
							</label>
							<label class="icoCoin" :class="{show:form.ico.jse.displayLabel, error:form.ico.jse.flag}">
								<div class="inputLabel">{{ $t('pages.ico.panel_purchase.form_purchaseTokens') }} *</div>
								<div class="amountInput coin">
									<input type="number" min="10000" step="200" :placeholder="$t('pages.ico.panel_purchase.form_purchaseTokens') + ' *'" v-model="form.ico.jse.val" @keyup="keyWatch('jse')" @mouseup="keyWatch('jse')" />
								</div>
							</label>
						</div>
					</dd>
				</dl>
			</div>

			<!-- Purchase History and why not to use exchanges -->
			<div class="row">
				<!-- Purchase History -->
				<dl v-if="userTransactionList.length > 0" id="JSEW-purchaseHistory" class="mainCol">
					<dt>{{ $t('pages.ico.panel_purchaseHistory.heading_purchaseHistory') }}</dt>
					<dd class="hasFooter" style="padding: 0px 0px 90px 0px;">
						<p>
							You can purchase JSE at any time during the ICO - <br />
							Here are a list of previous JSE Token transaction you have made:
						</p>
						<div class="hr" style="margin:10px 0px;"><hr /></div>
						<p>
							You can also {{ $t('pages.ico.panel_exchangeInfo.info_list3_1') }} <a :href="ethscanURL()" target="_BLANK">Etherscan.io</a>
						</p>
						<div class="hr" style="margin:10px 0px;"><hr /></div>
						<h2 style="margin:10px;">Purchased Tokens</h2>
						<!-- Purchase Overview -->
						<ul style="margin:0px;padding:0px;">
							<li v-if="(typeof(transaction.returnValues['_tokens']) !== 'undefined')" style="margin:10px 0px; list-style:none; padding:4px 8px;" :key="index" v-for="(transaction, index) in userTransactionList">
								<a target="_BLANK" style="display:block; border:solid 1px #eee; border-radius:6px;" :href="ethscanURL(transaction.transactionHash)">
									<b style="display:block; padding:4px 8px;">{{convertToJSE(transaction.returnValues['_tokens'])}} JSE</b>
									<div style="margin:0px;" class="hr"><hr /></div>
									<span style="display:block; padding:4px 8px; font-size:0.65em;">{{transaction.transactionHash}}</span>
								</a>
							</li>
						</ul>
					</dd>
				</dl>
				<!-- xPurchase History -->

				<!-- Exchange payment info -->
				<dl id="JSEW-exchangePaymentInfo" :class="{'thinCol':showBuyOption}">
					<dt><i class="fa fa-info-circle "></i> How To: Add &amp; See Your JSE Tokens</dt>
					<dd>
						<ol style="padding: 0px 30px;">
							<li style="margin:10px;">In your ERC20 Wallet "Add a custom token".</li>
							<li style="margin:10px;"><b>TOKEN ADDRESS:</b><br />
								<div style="width:280px; display:flex; margin:10px 0px 0px -20px; border-radius:6px 6px 0px 0px; border:solid 1px #eee; padding:4px 8px; background:#f9fbfc;">
									<input disabled style="flex:1; font-size: 0.75em; font-weight:bold; color:#666; background:#f9fbfc;" type="text" :value="tokenAddress" />
								</div>
								<button class="bottomButton" v-clipboard:copy="tokenAddress">{{ $t('pages.ico.panel_directPayment.button_copy') }}</button>
							</li>
							<li style="margin:10px;"><b>TOKEN SYMBOL:</b>
								JSE
							</li>
							<li style="margin:10px;"><b>DECIMALS OF PRECISION:</b>
								18
							</li>
							<li style="margin:10px;">{{ $t('pages.ico.panel_exchangeInfo.info_list4') }}</li>
						</ol>
						<div class="hr" style="margin:10px 0px;"><hr /></div>
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
window.ActiveNetwork = new Web3('https://mainnet.infura.io');
//version
//////console.log('VERSION:', window.web3.version);

export default {
	name: 'Ico-Page',
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
			loadingTransaction: false, //user purchased JSE - display loading animation.
			BuyJSEButton: 'Buy JSE', //Buy button Text
			launchPadDevMode: false, // rinkeby network = true
			tokenLoaded: false, //true once JSE contract enabled
			//JSE Token Address - query for balance
			tokenAddress: '0x2d184014b5658C453443AA87c8e9C4D57285620b',
			//contract Address
			JSETokenSale: '0xcfc4fceb90787ef1fda15bb115630ef453f50f86',
			networkVersion: '1', //1 = mainnet 3 = rinkeby
			activeAccount: '', //active metamask account
			availableAccounts: [], //list of available accounts
			selectedPaymentAccount: '', //user selected payment account
			accountWhitelisted: false, //check if account is whitelisted
			userTransactionList: [], //list of JSE Transactions
			//maxEth: '500',
			showTracker: false, //collect stats on user purchasing JSE
			maxEthNotWhitelisted: '20', //maximum eth that can be sent if user hasn't whitelisted.
			maxEthWhitelisted: '10000', //maximum eth that can be sent if user has whitelisted.
			minEth: '0.1', //minimum eth that can be exchanged for JSE
			gasPriceEstimate: 0, //estimate gas price
			userWalletBalance: 0, //how much does the user have in their wallet
			showBuyOption: false, //show option to allow user to pay through wallet
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
			total: {
				eth: 0, //total eth paid into contract
				eos: 0, //total eos paid into contract
				jse: 0, // total JSE distributed
				jseDisplay: '0',
				ethDisplay: '0',
			},
			JSEPerEth: 7500,
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

		self.BuyJSEButton = 'Initialising...';
		//check metamask active poll exists
		if (typeof (window.web3.currentProvider.publicConfigStore) !== 'undefined') {
			//poll web3 to check current provider active and user logged in
			window.web3.currentProvider.publicConfigStore.on('update', (acc) => {
				//console.log(acc, acc.networkVersion === self.networkVersion);
				if ((typeof (acc.selectedAddress) !== 'undefined') && (acc.networkVersion === self.networkVersion)) {
					//////console.log(acc.selectedAddress);
					self.BuyJSEButton = 'Buy JSE';
					if (self.activeAccount !== acc.selectedAddress) {
						////console.log('ADDRESS CHANGED', acc.selectedAddress);
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
					self.BuyJSEButton = 'Connect';
					self.activeAccount = '';
					self.showBuyOption = false;
					self.form.showForm = false;
				}
			});
		} else {
			const checkNetwork = (err, currentNetwork) => {
				//if (err) throw err // Please handle errors responsibly.
				if (currentNetwork !== self.networkVersion) {
					self.activeAccount = '';
					self.showBuyOption = false;
					self.form.showForm = false;
				} else {
					//get store user accounts
					window.web3.eth.getAccounts().then((t) => {
						self.BuyJSEButton = 'Buy JSE';
						////console.log('ACCOUNTS FOUND', t, t.length);
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
							self.showBuyOption = true;
						}
					});
				}
			};

			/*
			setInterval(() => {
				window.web3.version.getNetwork(checkNetwork);
			}, 1000);
			*/
		}

		window.jseTokenContract = new window.ActiveNetwork.eth.Contract(jseTokenObj.abi, self.tokenAddress);
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
	metaInfo () {
		return {
			title: this.$t('pages.ico.meta.title') + ' 🥇',
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
		calcBonus() {
			const self = this;
			const JSEPlusBonus = self.JSEPerEth * ((self.bonus/100)+1);
			return Math.floor(Number(JSEPlusBonus)).toLocaleString();
		},
		ethscanURL(tx) {
			const self = this;
			let etherscanURL = 'etherscan.io';
			if (self.launchPadDevMode) {
				etherscanURL = 'rinkeby.etherscan.io';
			}
			let address = `https://${etherscanURL}/`;
			if (self.selectedPaymentAccount !== '') {
				address = `https://${etherscanURL}/address/${self.selectedPaymentAccount}`;
			}
			if (typeof (tx) !== 'undefined') {
				address = `https://${etherscanURL}/tx/${tx}`;
			}
			return address;
		},
		convertToJSE(val) {
			return (val/1e18);
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

			//Current token/eth value
			jseContract.methods.tokensPerKEther().call().then((t) => {
				////console.log('TOKENS / ETH', t/1e3);
				self.JSEPerEth = t/1e3;
			});
			//add max cap if user hasn't whitelisted. 15.8eth
			jseContract.methods.CONTRIBUTION_MAX_NO_WHITELIST().call().then((t) => {
				////console.log('MAX NO WHITELIST CAP ETH', web3.utils.fromWei(t));
				self.maxEthNotWhitelisted = web3.utils.fromWei(t);
			});

			//add max cap if user hasn't whitelisted. 10,000eth
			jseContract.methods.CONTRIBUTION_MAX().call().then((t) => {
				////console.log('MAX WHITELIST CAP ETH', web3.utils.fromWei(t));
				self.maxEthWhitelisted = web3.utils.fromWei(t);
			});
			jseContract.methods.CONTRIBUTION_MIN().call().then((t) => {
				////console.log(web3.utils.fromWei(t));
				////console.log('MAX WHITELIST CAP ETH', web3.utils.fromWei(t));
				self.minEth = web3.utils.fromWei(t);
			});

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
		/**
		 * estimate gas price
		 */
		gasPrice(eth) {
			const self = this;
			/*
			web3.eth.estimateGas({
				from: self.form.ico.address.val,
				to: web3.eth.accounts[0],
				amount: web3.utils.toWei(eth, 'ether'),
			}).then((t) => {
				////console.log(self.form.ico.eth.val, t);
				self.gasPriceEstimate = t;
				//self.form.ico.eth.val = String(Number(self.form.ico.eth.val) - t);
				self.updateJSEVal();
			});*/
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
			//console.log('??', self.form.ico.address.val);
			window.jseContract.getPastEvents('allEvents', {
				filter: {
					isError: 0,
					txreceipt_status: 1,
				},
				topics: [
					null,
					web3.utils.padLeft(self.form.ico.address.val, 64),
				],
				fromBlock: 5939115,
				toBlock: 'latest',
			}).then((t) => {
				//console.log(t);
				////console.log(t[0].returnValues._tokens);
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
				////console.log('USER BALNCE', window.web3.utils.fromWei(weiBalance));
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
				////console.log(t);
			});
		},
		/**
		 * get timestamp of block
		 */
		getTimestamp(blockNum) {
			web3.eth.getBlock(blockNum).then((t) => {
				////console.log(moment.unix(t.timestamp).format('MMMM Do YYYY'));
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
				if (t === Number(self.networkVersion)) {
					if (self.showBuyOption) {
						self.form.showForm = true;
					} else {
						self.$swal('Connect to Online Wallet', `Please login to your browser connected Ethereum wallet or recieve JSE Tokens by sending ETH direct to our smart contract address: ${self.JSETokenSale}`, 'error');
					}
				} else {
					self.$swal('Mainnet Disconnected..', 'Please update your integrated wallet to point to the Ethereum Mainnet! Or use the Smart Contract address below to send payment direct in exchange of JSE Tokens.', 'error');
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
		hideTransactionMask() {
			const self = this;
			self.loadingTransaction = false;
		},
		/**
		 * Check form nd process payment through wallet
		 */
		processWeb3Payment() {
			const self = this;
			////console.log('PROCESS');
			if ((self.form.ico.jse.flag) || (self.form.ico.eth.flag) || (!self.form.ico.showBuyButton))  {
				return;
			}
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
			////console.log('CONTRACT:', jseContract);
			self.form.showForm = false;
			self.loadingTransaction = true;

			jseContract.methods.buyTokens().send({
				from: self.form.ico.address.val,
				value: web3.utils.toWei(self.form.ico.eth.val+'', 'ether'),
			}).on('receipt', function(receipt) {
				////console.log('receipt', receipt);
				self.loadingTransaction = false;
				self.$swal('Transaction Complete', `Make sure to add the JSE Token address to see your tokens in your wallet ${self.tokenAddress}`, 'success');
				self.showTracker = true;
				setTimeout(() => {
					self.showTracker = false;
				}, 10000);
				setTimeout(self.updateDistributionDisplay, 1000);
				self.getUserTransactionList();
			}).on('error', function(error) {
				//console.error('error', error);
				// Do something to alert the user their transaction has failed
				self.loadingTransaction = false;
				self.form.showForm = true;
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

			self.form.ico.jse.flag = false;
			self.form.ico.eth.flag = false;
			self.form.ico.showBuyButton = true;
			////console.log(self.accountWhitelisted, self.form.ico.eth.val, self.maxEthWhitelisted, self.maxEthNotWhitelisted);
			if (self.accountWhitelisted) {
				if (Number(self.form.ico.eth.val) >= Number(self.maxEthWhitelisted)) {
					self.form.info.title = 'Notice:';
					self.form.info.msg = `We are unable to accept transactions over ${self.maxEthWhitelisted} ETH - Please contact admin@jsecoin.com to discuss investing a larger amount.`;
				self.form.ico.showBuyButton = false;
					return false;
				}
			} else if (Number(self.form.ico.eth.val) >= Number(self.maxEthNotWhitelisted)) {
				////console.log('!!!');
				self.form.info.title = 'Notice:';
				self.form.info.msg = `We are unable to accept transactions over ${self.maxEthNotWhitelisted} ETH until you have whitelisted your address ${self.form.ico.address.val}.`;
				self.form.ico.jse.flag = true;
				self.form.ico.eth.flag = true;
				self.form.ico.showBuyButton = false;
				return false;
			} else if (Number(self.form.ico.eth.val) < Number(self.minEth)) {
				self.form.info.title = 'Notice:';
				self.form.info.msg = `We are unable to accept transactions under ${self.minEth} ETH`;
				self.form.ico.jse.flag = true;
				self.form.ico.eth.flag = true;
				self.form.ico.showBuyButton = false;
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
			self.checkValWhiteListed();
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
			if (Number(self.form.ico.eth.val) > Number(self.maxEthWhitelisted)) {
				self.form.ico.eth.val = String(self.maxEthWhitelisted);
			}

			//console.log(self.form.ico.eth.val, (self.form.ico.eth.val.length > 10), (self.form.ico.eth.val % 1 !== 0));
			//check if display > 10 and contains decimal
			if ((self.form.ico.eth.val.length > 10) && (self.form.ico.eth.val % 1 !== 0)) {
				//self.form.ico.eth.val = self.form.ico.eth.val.substring(0, 10);
				self.form.ico.eth.val = String(+(Math.round(Number(self.form.ico.eth.val) + 'e+' + 10)  + 'e-' + 10));
			}
			setTimeout(() => {
				self.JSEBonusVal = Math.floor(Number(self.form.ico.jse.val)*(self.bonus/100)).toLocaleString();
			}, 10);
			self.form.ico.jse.val = String(self.JSEPerEth * self.form.ico.eth.val);
			self.form.ico.jse.displayLabel = true;
			self.form.info.title = '';
			self.form.info.msg = '';
			self.form.error.title = '';
			self.form.error.msg = '';
			////console.log(self.userWalletBalance, self.form.ico.eth.val);
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
			self.form.ico.eth.val = String(self.form.ico.jse.val / self.JSEPerEth);
			if (Number(self.form.ico.eth.val) > Number(self.maxEthWhitelisted)) {
				self.form.ico.eth.val = String(self.maxEthWhitelisted);
				self.updateJSEVal();
			}
			//check if display > 10 and contains decimal
			if ((self.form.ico.jse.val.length > 10) && (self.form.ico.jse.val % 1 !== 0)) {
				//self.form.ico.jse.val = self.form.ico.jse.val.substring(0, 10);
				self.form.ico.jse.val = String(+(Math.round(Number(self.form.ico.jse.val) + 'e+' + 10)  + 'e-' + 10));
			}
			self.form.ico.eth.displayLabel = true;
			self.form.info.title = '';
			self.form.info.msg = '';
			self.form.error.title = '';
			self.form.error.msg = '';
			////console.log(self.userWalletBalance, self.form.ico.eth.val);
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
#JSEW-bonusDisplay {
    position: absolute;
    bottom: -14px;
    background: #2b6aa7;
    border-radius: 6px;
    padding: 4px 8px;
    margin: 0px auto;
    width: 300px;
    font-size: 0.8em;
	font-weight:bold;
    text-align: center;
    color: #fff;
    left: 50%;
    margin-left: -150px;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);
}

#JSEW-ICO dl {
	/*overflow: hidden;*/
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

#JSEW-calculator .amountInput,
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
#JSEW-calculator .amountInput input,
#JSEW-ICOMask .amountInput input {
    background: transparent;
    margin: 0px !important;
    padding-left: 30px !important;
    width: 100%;
}
#JSEW-calculator .ethIcon,
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

#JSEW-calculator label,
#JSEW-ICOMask label {
	display:flex;
	position: relative;
}

#JSEW-calculator label input,
#JSEW-ICOMask label input,
#JSEW-ICOMask label textarea {
	flex-grow:1;
}

#JSEW-calculator .inputLabel,
#JSEW-ICOMask .inputLabel {
	position: absolute;
	top:0px;
	left:20px;
	color:#757575;
	font-size:0.9em;
	opacity:0;
	transition: opacity 0.2s;
}
#JSEW-calculator label.show .inputLabel,
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

.button.thin.green {
	background: #00b48d;
}
#JSEW-ICOMask button:hover,
.button.thin.green:hover {
	background:#00a47a;
}

#JSEW-calculator input[type="text"],
#JSEW-calculator input[type="number"],
#JSEW-calculator input[type="email"],
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

#JSEW-calculator .error input,
#JSEW-calculator .error textarea,
#JSEW-ICOMask .error input,
#JSEW-ICOMask .error textarea {
	box-shadow:inset 0px 0px 0px 1px #ffb4b4, 0px 0px 0px 6px #fff6f6;
	color:#ff8585;
}
#JSEW-calculator input:focus,
#JSEW-calculator textarea:focus,
#JSEW-ICOMask input:focus,
#JSEW-ICOMask textarea:focus {
	box-shadow:inset 0px 0px 0px 1px #a8d2ff, 0px 0px 0px 6px #f4f9ff;
	color:#73b6fb;
}
#JSEW-calculator .error .inputLabel,
#JSEW-ICOMask .error .inputLabel {
	color:#ff8585;
}
#JSEW-calculator .errorMsg,
#JSEW-ICOMask .errorMsg {
	background-color: #ffe8e6;
    color: #db2828;
    box-shadow: 0 0 0 1px #db2828 inset, 0 0 0 0 transparent;
	padding:16px;
	border-radius: 8px;
}
#JSEW-calculator .highlightPanel,
#JSEW-ICOMask .highlightPanel {
	box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);
	padding:10px;
	margin:20px;
	border-radius:8px;
	background:#fdfdfd;
	position: relative;
	margin-bottom:40px;
}
#JSEW-calculator .highlightPanelFlat,
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
.bottomButton {
	background: #00b48d;
	border-radius:0px 0px 6px 6px;
	margin:0px 0px 10px -20px;
	padding:4px 8px;
	width:280px;
	font-size:0.8em;
	font-weight:bold;
	max-width:280px;
	color:#fff;
}

.bottomButton:hover {
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
}

#JSEW-tokenDist dd {
	padding-bottom:40px;
}

#JSEW-ICOLogo {
	margin:10px 0px;
}

#JSEW-ICOLogo img {
	width:120px;
	margin: 20px 20px 0px 20px;
}

#JSEW-ICOLogo img.bonus {
	margin: -4px 20px 0px 20px;
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
	font-size:1em;
	border-bottom:solid 2px #db2828;
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
	min-width:326px;
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
    background-position: 3px 5px;
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
.col.twinFooterButton {
	max-width: inherit;
	color:#fff;
	background:#00b48d;
	height:40px;
	padding:0px 20px;
	font-size:1em;
}
.col.twinFooterButton:first-child {
	border-radius: 0px 0px 0px 4px;
}
.col.twinFooterButton:last-child {
	border-radius: 0px 0px 4px 0px;
}

.col.twinFooterButton:hover {
	background:#00a47a !important;
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
