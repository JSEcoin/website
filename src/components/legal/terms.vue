<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<!--<router-link v-bind:to="`/${$store.state.local}/legal/userAgreement`" tag="li">
					{{ $t('pages.navigation.legal.link_userAgreement') }}
				</router-link>-->
				<router-link v-bind:to="`/${$store.state.local}/legal/privacyPolicy`" tag="li">
					{{ $t('pages.navigation.legal.link_privacyPolicy') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/terms`" tag="li" class="active">
					{{ $t('pages.navigation.legal.link_terms') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/kycPolicy`" tag="li">
					{{ $t('pages.navigation.legal.link_kycPolicy') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/legal/gdpr`" tag="li">
					GDPR
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-terms" class="wrapper">
			<h2 class="heading">Terms &amp; Conditions</h2>
			<ol>
				<li>
					<h4>Definitions</h4>
					<ol>
						<li>The “User” means the account applicant or person who uses the JSEcoin platform.</li>
						<li>The “Publisher” means account applicant or person who is responsible for the distribution of the JSEcoin web mining javascript code.</li>
						<li>The “Advert” An electronic form of advertising displayed from the publishers website.</li>
						<li>The “Website” is the publisher owned property which is utilised to provide advertising space for the advertiser.</li>
						<li>“JSEcoin” is the network, operated by JSEcoin Limited acting as the cryptocurrency technology provider.</li>
						<li>“Traffic” is the supply of users from a publishers website to the JSEcoin platform.</li>
						<li>“Miner” is someone who carries out the hashing algorithm to secure the JSEcoin network.</li>
						<li>“Accompanying Documents” shall mean other JSECOIN Ltd regulatory documents accompanying and detailing these Terms and Conditions, being inalienable part hereof and published on the Website (including, but not limited to, AML Policy, KYC Policy and Privacy Policy ) effective at the moment of the Website use. In case of any discrepancies between Accompanying Documents and the Terms, the latter shall apply.</li>
						<li>“Affiliates” shall mean any persons or entities that have any relation to the Company, including, but not limited to partners, employees, and agents of the Company.</li>
						<li>“Blockchain” shall mean a type of distributed ledger, comprised of unchangeable, digitally recorded, data in packages called blocks.</li>
						<li>“Company” (also referred to as “We”, “Us”) shall mean the company (including its Affiliates) which is incorporated in England called JSECOIN LTD Company number 10940920, being the initiator of the JSECOIN Token Sale, not being neither a financial or investment entity, nor a partner, employer, agent or adviser for any User.</li>
						<li>“Cryptocurrency”shall mean digital currency, represented by Bitcoin (BTC) or Ethereum (ETH) used by Users to purchase JSECOIN Tokens.</li>
						<li>“Platform” shall mean both the web platform and desktop and mobile applications.</li>
						<li>“JSECOIN Tokens” shall mean cryptographic tokens, issued solely by the company as a digital asset. JSECOIN Tokens are not securities, are not registered with any government entity as a security, and shall not in any case be considered as such. JSECOIN Tokens are not intended to be a commodity or any other kind of financial instrument, do not represent any share, stake or security or equivalent rights, including, but not limited to, any right to receive future revenue shares and intellectual property rights, and do not represent any ownership right.</li>
					</ol>
				</li>
				<li>
					<h4>Conditions</h4>
					<ol>
						<li>These “Terms and Conditions” do not affect your statutory rights as a consumer.</li>
						<li>All contracts and insertion orders made by JSEcoin shall be deemed to incorporate these terms and conditions which shall prevail over any other document or communication from the advertiser or publisher.</li>
						<li>If any amendments to these terms and conditions are required, it is preferable that they be confirmed in writing.</li>
						<li>JSEcoin Limited, JSEcoin employees, JSEcoin affiliates are not financial advisors and no information on this site or 3rd party websites and correspondence should be taken as financial advice under any circumstances. Investors are responsible for carrying out their own due diligence and research.</li>
						<li>These terms and any disputes arising will be governed under the laws of the United Kingdom.</li>
						<li>JSECOIN Ltd Terms and Conditions and all Accompanying Documents constitute a legally binding agreement between the Company and any and all Users as defined herein. All questions concerning the construction, validity, enforcement and interpretation of these Terms and all Accompanying Documents shall be governed by and construed and enforced in accordance with the laws of the United Kingdom.</li>
						<li>These Terms are effective at the time the User begins using the Website. It is hereby understood and presumed, that by the fact of the Website use and the purchase of  JSECOIN Tokens during the JSECOIN Token Sale the respective User fully read, understood and irrevocably accepted these Terms. If any User does not agree with these Terms in general or any part of them, such User’s only recourse is to withhold from using the Website and/or purchase of JSECOIN Tokens. The Users may withdraw from their obligation under the Terms at any time by discontinuing the use of the Website.</li>
						<li>The User acknowledges and accepts that these Terms are subject to change, modifications, amendments, alterations or supplements at any time without prior written notice, at the Company’s sole discretion. The User’s continued use of the Website after any amendments or alterations of these Terms and/or the Website shall constitute the User’s consent hereto and acceptance hereof. If at any point the User does not agree to any portion of the then current version of the Terms, he/she shall not use the Website and purchase JSECOIN Tokens. The date of the most recent amendments and alterations will be indicated at the top of these Terms and Conditions.</li>
					</ol>
				</li>
				<li>
					<h4>Confidentiality</h4>
					<ol>
						<li>restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account, password, private key, api key or any other credentials. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that the Company is not responsible for third party access to your account that results from theft or misappropriation of your account credentials. The Company and its associates reserve the right, in our sole discretion, to refuse or cancel service, and terminate accounts. You are responsible for maintaining the confidentiality of your account, if any, and are fully responsible for any and all activities that occur under your account. You agree to:
							<ol>
								<li>immediately notify us of any unauthorised use of your account or any other breach of security, and</li>
								<li> ensure that you exit from your account at the end of each session when accessing the Platform. We will not be liable for any loss or damage arising from your failure to comply with this Section.</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>
					<h4>Residency</h4>
					<ol>
						<li>By using this Website each User covenants, represents, and warrants that (under the applicable law and law of the country of User’s residence):
							<ol>
								<li>The User is of an age of majority to enter into these Terms and Conditions and  all Accompanying Documents (and is at least 18 years of age), meets all other eligibility and residency requirements, and is fully able and legally competent to use the Website.</li>
								<li>The User confirms that they are NOT a citizen or resident of any country in which it is not permissible to participate in token crowdsales. If you proceed with the purchase of JSECOIN tokens as a citizen of any of these countries, you do so at your own risk. The User has the full capacity to contract, under applicable law and law of the country of User’s residence, with the Company and in doing so will not violate any other agreement to which he (she) is a party.</li>
								<li>The User has functional understanding of, the usage and intricacies of cryptographic tokens, cryptocurrency and Blockchain-based systems, functional understanding of storage and transmission mechanisms associated with other cryptographic tokens, as well as an understanding of their framework.</li>
								<li>The User is aware of all the merits, risks and any restrictions associated with cryptographic tokens (their purchase and use), cryptocurrency and Blockchain-based systems, and is solely responsible for any evaluations based on such knowledge.</li>
								<li>If The User is a corporation, governmental organisation or other legal entity, he (she) has the right, power and authority to enter into this agreement on behalf of the corporation, governmental organisation or other legal entity and bind them to these terms.</li>
								<li>The User will not be using the website, platform or network for any illegal activity, including but not limited to money laundering and the financing of terrorism.</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>
					<h4>Liquidity</h4>
					<ol>
						<li>JSEcoin is not responsible for the exchange of tokens or coins to fiat currencies such as USD/EUR/GBP.</li>
						<li>JSEcoin can not assist in resolving issues when coins and tokens have been sold via 3rd parties and exchanges.</li>
						<li>JSEcoin assumes no responsibility for paying any income taxes, banking commissions or currency fees on behalf of the publisher. Please contact your local tax authority for further advice on any applicable income tax schemes.</li>
					</ol>
				</li>
				<li>
					<h4>Delivery of privacy notice</h4>
					<ol>
						<li>Whilst every reasonable effort shall be made to provide reliable and consistent delivery of the privacy notice and adverts JSEcoin shall not be liable for any losses, costs, damages or expenses incurred by the publisher or any other person or company arising directly or indirectly out of any failure from the advertising network.</li>
					</ol>
				</li>
				<li>
					<h4>Publicity</h4>
					<ol>
						<li>JSEcoin may use the names, trademarks and/or correspondence of publishers, advertisers or any third parties without prior written approval.</li>
					</ol>
				</li>
				<li>
					<h4>Statistics and discrepancies</h4>
					<ol>
						<li>All traffic revenue will be calculated from JSEcoin statistics. These will be the sole basis for calculating revenue for publishers.</li>
						<li>JSEcoin statistics may not be 100% accurate and this is accepted by both the publishers and miners.</li>
						<li>In the event of a failure to record statistics from the network. JSEcoin will estimate revenue and costs based on previous and historical statistics. Our decision in regard to setting these rates will be final and not negotiable.</li>
					</ol>
				</li>
				<li>
					<h4>Ownership and Risk</h4>
					<ol>
					<li>Any risk in mining and advertising shall pass directly to the advertiser upon delivery of the advert from the publisher.</li>
					<li>No guarantees can be made in respect to traffic quality and JSEcoin will not be held liable for any losses incurred from bad quality traffic.</li>
					</ol>
				</li>
				<li>
					<h4>Cancellation and Refunds</h4>
					<ol>
						<li>An advertiser can cancel a campaign at any time. The advertising network provides real time control of this feature however as a precaution it is recommended to provide 24 hours notice in writing where possible.</li>
						<li>If you are an advertiser, you have the right, in addition to your other rights, to cancel your contract and receive a refund. You must contact us and inform us in writing of your desire to cancel your account. Your login will then be removed and your remaining balance will be paid back to you. Any bank/paypal fees from this will be charged to the advertiser.</li>
						<li>If you are a publisher you have the right, in addition to your other rights, to cancel your contract at any time. You must contact us and inform us in writing of your desire to cancel your account. Your login will then be removed and your remaining balance will be paid out only if it meets the minimum thresholds as outlined in section</li>
					</ol>
				</li>
				<li>
					<h4>Force Majeure</h4>
					<ol>
						<li>In the event that JSEcoin is prevented from carrying out its obligations under a contract for sale as a result of any cause beyond its control such as but not limited to Acts of God, War, Strikes, Lock-outs, Hardware Failure, Security Breaches, Flood and Failure of third parties to deliver advertising, JSEcoin shall be relieved of its obligations and liabilities under such contract for sale for as long as such fulfillment is prevented.</li>
					</ol>
				</li>
				<li>
					<h4>Complaints</h4>
					<ol>
						<li>If you have a complaint about our service or any goods or services you purchase from JSEcoin then please contact us immediately. You will be contacted as soon as possible of our hearing from you and aim to provide a resolution within 5 working days.</li>
						<li>All complaints will be dealt with in a fair and confidential manner.</li>
					</ol>
				</li>
				<li>
					<h4>Liability</h4>
					<ol>
						<li>Under no circumstances will JSEcoin or JSEcoin Limited be liable for any losses suffered by the users, miners or publishers.</li>
						<li>Our total liability will never exceed more than $100 USD per event whereby a series of events or campaigns is considered a single event.</li>
						<li>We are not liable for losses caused by third parties including those using the advertising network.</li>
					</ol>
				</li>
				<li>
					<h4>Alterations to terms and conditions</h4>
					<ol>
						<li>JSEcoin is entitled to amend these terms and conditions as we see fit for any reason at any time.</li>
						<li>An up to date copy of the current terms and conditions will be provided at the following URL: https://jsecoin.com/en/legal/terms/</li>
						<li>If a miner or publisher does not agree to any amendment they will be entitled to terminate the agreement in writing within 14 days of the amendment being made.</li>
					</ol>
				</li>
				<li>
					<h4>Budgets, Capitalisation and Hashing Difficulty</h4>
					<ol>
						<li>While every effort is made to meet miners requirements in regard to budget we reserve the right to change the mining rewards and hashing difficulty at any time without notice.</li>
						<li>JSEcoin reserves the right to introduce new coins and distribute coins as it sees fit. All transactions will be made publicly available.</li>
					</ol>
				</li>
				<li>
					<h4>Damage to Systems</h4>
					<ol>
						<li>JSEcoin is not liable for any losses suffered from damage to hardware or software systems caused by mining.</li>
					</ol>
				</li>
				<li>
					<h4>Website Standards</h4>
					<ol>
						<li>JSEcoin has a zero tolerance policy on the following website and advertising content:
							<ol>
								<li>Child pornography
									<ol>
										<li>Under 18 or portrayed to look under 18</li>
									</ol>
								</li>
								<li>Sexual conduct with animals</li>
								<li>Violent or abusive content</li>
								<li>Racist, sexist or any discriminatory content</li>
								<li>Content or images of a person without his/her consent</li>
								<li>Criminal offenses</li>
								<li>Deceptive investment advice</li>
								<li>Spyware, malware, adware and any illegal software</li>
								<li>Pirated content / Copyright infringements</li>
								<li>Illegal activities such as Spam and Phishing</li>
								<li>Any scatalogical activities</li>
								<li>Unauthorised use of third party trademarks</li>
								<li>Promotion of drugs or related paraphernalia</li>
								<li>Any content targeting children of age 18 or younger</li>
								<li>Gambling or online betting which targets US audiences</li>
								<li>Paid to click advertising (PTC)</li>
								<li>Auto surf traffic generators</li>
								<li>Pop unders or iframing content.</li>
							</ol>
						</li>
						<li>The privacy notice with opt-out option must be displayed to users. Nothing should be done to hide or restyle this notification.</li>
						<li>Site ID’s must match the domain name that the script is running on.</li>
						<li>Any breaches of section "Website Standards" may result in immediate termination of your publisher account.</li>
					</ol>
				</li>
				<li>
					<h4>Applications</h4>
					<ol>
						<li>Applications for accounts on the network will be approved or declined at the sole discretion of JSEcoin employees for any reason we deem fit.</li>
					</ol>
				</li>
				<li>
					<h4>Misuse</h4>
					<ol>
						<li>Any misuse of the system will result in immediate suspension or closure of the users account.</li>
						<li> Misuse will be judged solely by JSEcoin employees and can be based on any factor we see fit.</li>
						<li>Publishers using any method to artificially increase the number of impressions supplied will have their accounts immediately closed. All traffic provided should be genuine users.</li>
						<li>Code provided for publishers such as the Javascript tag may not be modified or reused in any way.</li>
						<li>Creating multiple accounts on the system without prior authorization will be deemed as misuse.</li>
						<li>Publisher code must only be placed on domains owned by the webmaster or with written permission from the owner of the website.</li>
						<li>The SiteID used in publisher code must match the owned domain of the webmaster.</li>
						<li>Using any IP changing service such as VPN, proxy, TOR or any system that hides or changes your IP address is forbidden. We check users IP addresses against 3rd party lists to identify offenders.</li>
					</ol>
				</li>
				<li>
					<h4>Closure of Account</h4>
					<ol>
						<li>On closure of account the publisher will not be entitled to any remuneration of funds remaining in the account.</li>
					</ol>
				</li>
				<li>
					<h4>Use of Cookies</h4>
					<ol>
						<li>JSEcoin uses cookies and localStorage to store information on a users computer. This information is then used in targeting by advertisers, including retargeting campaigns. A retargeting campaign is when a cookie is placed, sometimes by a third party, on the users computer and then ads are then shown to users with that specific cookie. Every publisher is responsible for updating the terms and conditions, privacy policy and any other legal documents required for the use of cookies and retargeting in their local region.</li>
					</ol>
				</li>
				<li>
					<h4>Intellectual Property</h4>
					<ol>
						<li>The JSEcoin co-founders retain all rights, title and interest in this website, its products and services including all copyrights, patents, trade secrets, trademarks, trade names, logos, slogans, graphics, scripts, code, videos, text, software, files, content, information and other intellectual property rights.</li>
					</ol>
				</li>
				<li>
					<h4>Indemnification</h4>
					<ol>
						<li>To the fullest extent permitted by applicable law, you will indemnify, defend and hold harmless us and our respective past, present and future employees, officers, directors, contractors, consultants, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors and assigns from and against all claims, damages, liabilities, losses, costs and expenses.</li>
						<li>We reserve the right to exercise sole control over the defense, at your expense, of any claim subject to indemnification pursuant to these terms. &amp;nbsp;This indemnity is in addition to, and not in lieu of, any other indemnities set forth in a written agreement between you and JSEcoin.</li>
					</ol>
				</li>
				<li>
					<h4>Referrals</h4>
					<ol>
						<li>All referral traffic should be genuine users, fake accounts and bot traffic will result in account suspensions.</li>
						<li>JSEcoin Users with duplicate IP addresses and other factors indicating duplicate accounts will not be paid. This includes two users signing up from the same office/home.</li>
						<li>JSEcoin personnel reserve the right to suspend any accounts that we believe have misused the system. Our decision is final and is not liable to legal proceedings.</li>
					</ol>
				</li>
				<li>
					<h4>Taxation</h4>
					<ol>
						<li>Users and publishers are solely responsible for the disclosure and taxation of all digital assets.</li>
						<li>JSEcoin Limited will not be held responsible for the tax implications of transferring or holding digital assets in your home jurisdiction.</li>
						<li>The Company makes no representations concerning the tax implications of the sale of JSECOIN Tokens or the possession or use of them. The User bears the sole responsibility to determine if the purchase of JSECOIN Tokens with cryptocurrency or the potential appreciation or depreciation in the value of JSECOIN Tokens over time has tax implications for the User in the User’s home jurisdiction. By purchasing JSECOIN Tokens, and to the extent permitted by law, the User agrees not to hold the Company liable for any tax liability associated with or arising from the purchase of JSECOIN Tokens.</li>
						<li>All fees and charges payable by You are exclusive of any taxes, and shall certain taxes be applicable, they shall be added on top of the payable amounts.</li>
					</ol>
				</li>
				<li>
					<h4>Intellectual Property Rights</h4>
					<ol>
						<li>The Company has valid, unrestricted and exclusive ownership of rights to use the trademarks, trade names, know-how, technology and other intellectual property necessary to the conduct of selling of the JSECOIN Tokens and the company's' activities generally.</li>
						<li>Unless otherwise indicated by the Company, all intellectual property of the Company, all content and other materials contained on the Website or provided in connection with the Platform, including, without limitation, the intellectual property rights for the Platform and all text, graphics, interface, visual interfaces, photographs, trademarks, logos, artwork, and computer code, design, structure, selection, methods and algorithms, coordination, expression and other content connected to the Platform (hereinafter – the "Platform Materials") are the proprietary property of the Company.</li>
						<li>These Terms permit you to use Platform Materials for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the Platform Materials. There are no implied licenses under these Terms and Conditions and all Accompanying Documents, and any rights not expressly granted to the User hereunder are reserved by the Company.</li>
					</ol>
				</li>
				<li>
					<h4>Third-Party Content</h4>
					<ol>
						<li>The pages of the Website may contain links to third-party websites and services. Such links are provided for User’s convenience. However, their presence does not mean that they are recommended by the Company and the Company does not guarantee their safety and conformity with any User expectations. Furthermore, the Company is not responsible for maintaining any materials referenced from another site, and makes no warranties for that site or respective service. The Company assumes no obligations in the event of any damage or loss, or any other impact, directly or indirectly resulting from the use of any content, goods or services available on or through any such third-party websites and resources.</li>
					</ol>
				</li>
				<li>
					<h4>Disclaimers</h4>
					By using this Platform, the user accepts that:
					<ol>
						<li>The purchase of JSECOIN Tokens carries with it a number of risks. Prior to purchasing JSECOIN Tokens, You should carefully consider the risks listed herein. If any of the following risks are unacceptable to You, You should not purchase JSECOIN Tokens . By purchasing JSECOIN Tokens, and to the extent permitted by applicable law, You are agreeing not to hold the Company or any Affiliates liable for any losses or any special, incidental, or consequential damages arising from, or in any way connected, to the sale of JSECOIN Tokens, including losses associated with the risks set forth herein.</li>
						<li>Any cryptocurrency that possess value in public markets, such as BTC or ETH, have demonstrated extreme fluctuations in price over short periods of time on a regular basis. A Purchaser of JSECOIN Tokens should be prepared to expect similar fluctuations, both down and up, in the price of JSECOIN Tokens denominated in respective cryptocurrency (BTC or ETH). Such fluctuations are due to market forces and represent changes in the balance of supply and demand. The Company cannot and does not guarantee market liquidity for JSECOIN Tokens . By purchasing JSECOIN Tokens, You expressly acknowledge and represent that You fully understand that they may experience volatility in pricing and will not seek to hold the Company liable for any losses or any special, incidental, or consequential damages arising from, or in any way connected to, the sale of JSECOIN Tokens.</li>
						<li>Any and all purchases of JSECOIN Tokens are final and non-refundable. By purchasing the JSECOIN Tokens, the User acknowledges that neither Company nor any other of its affiliates are required to provide a refund for any reason.</li>
						<li>The User recognises that the Platform is currently under development and may undergo particular changes in the future. The User acknowledges that any expectations regarding the form and functionality of the Platform held by the User may not be met upon release of the mentioned project, for any number of reasons including a change in the design and implementation plans and execution of the implementation of the Platform.</li>
						<li>The Company and the respective Platform development team do not support any unfair or fraudulent practices and confirm their intention to further develop and elaborate the Company’s project. However, due to the risks, associated with cryptocurrency and digital tokens market, the User understands and accepts that while the Platform development team will make reasonable efforts to maintain the mentioned project the Company or its Affiliates make no representations or warranties, whether express or implied, and assume no liability or responsibility for the proper performance of any services, online cryptocurrency services, assets or platforms and/or the information, images or audio contained or related to the Website. You use all of the mentioned at your own risk and the Company and it's representatives cannot be held responsible for any losses.</li>
						<li>We will take reasonable steps to exclude any viruses or defects from the Website, but cannot guarantee or warrant that any material available for downloading from the Website will be free from infection, viruses and/or other code that has contaminating or destructive properties, defects will be corrected and accordingly no liability is accepted for defects and viruses. We are not responsible for the proper and/or complete transmission of the information contained in any electronic communication or of the electronic communication itself, nor for any delay in its delivery or receipt. Security measures have been implemented to ensure the safety and integrity of any of the services related to the JSECOIN Website and Token Sale. However, despite this, information that is transmitted over the internet or Blockchain may be susceptible to unlawful access and monitoring.</li>
						<li>The Company or any of its Affiliates is not a financial institution and is currently not under supervision of any financial supervisory authority. We do not provide any licensed financial services, such as investment services, fund management or investment advice. The JSECOIN Token Sale is not a public offering of equity or debt and consequently does not fall under the securities or any prospectus regulation. None of the information or analyses presented are intended to form the basis for any investment decision, and no specific recommendations are intended, and the Website is not, does not offer and shall not be construed as investment or financial product.</li>
					</ol>
				</li>
				<li>
					<h4>Limitations of Liability</h4>
					<ol>
						<li>This Website and the JSECOIN Tokens are provided on an “as is” basis and without any warranties of any kind, either expressed or implied. You assume all responsibility and risk with respect to Your use of the Website and buying of any amount of JSECOIN Tokens.</li>
						<li>The User hereby expressly understands and agrees, that:
							<ol>
								<li>To the maximum extent permitted by the applicable Law, the Company or its Affiliates do not accept any liability for any damage or loss, including loss of business, revenue, or profits, or loss of or damage to data, equipment, or software (direct, indirect, punitive, actual, consequential, incidental, special, exemplary or otherwise), resulting from any use of, or inability to use, this Website or the material, information, software, facilities, services or content on this Website, from buying of the JSECOIN Tokens, regardless of the basis, upon which the liability is claimed.</li>
								<li>The Company and any of its Affiliates shall not be held liable to and shall not accept any liability, obligation or responsibility whatsoever for any change of the value of the JSECOIN Tokens or cryptocurrency.</li>
								<li>The Company shall not provide to the User any refund possibility (payout liquidity) for the purchased JSECOIN Tokens.</li>
								<li>The Company shall not guarantee in any way that the JSECOIN Tokens might be sold or transferred during or after the JSECOIN Token Sale.</li>
								<li>It is the User’s obligation to ensure compliance with any legislation relevant to his/her country of residency concerning use of this Website and use and buying of the JSECOIN Tokens.</li>
								<li>The Company should not accept any liability for any illegal or unauthorised use of this Website and use and buying of the JSECOIN Tokens.</li>
								<li>The User is solely responsible for any applicable taxes imposed on tokens purchased hereunder</li>
								<li>The Company does not warrant or represent that any information on the Website is accurate or reliable or that the Website will be free of errors or viruses, that defects will be corrected, or that the service or the server that makes it available is free of viruses or other harmful components</li>
								<li>The Company shall not be liable for uninterrupted availability of the Website at all times, in all countries and/or all locations, or at any given time.</li>
							</ol>
						</li>
						<li>If applicable law does not allow all or any part of the above limitation of liability to apply to you, the limitations will apply to you only to the extent permitted by applicable law. You understand and agree that it is your obligation to ensure compliance with any legislation relevant to your country of domicile concerning use of the website, and that you should not accept any liability for any illegal or unauthorised use of the Website. You agree to be solely responsible for any applicable taxes imposed on JSEcoin tokens purchased hereunder.</li>
						<li>We shall not be liable for (1) any inaccuracy, error, delay in, or omission of (a) any information, or (b) the transmission or delivery of information; (2) any loss or damage arising from any event beyond our reasonable control, including but not limited to flood, extraordinary weather conditions, earthquake, or other act of God, fire, war, insurrection, riot, labour dispute, accident, action of government, communications, power failure, or equipment or software malfunction or any other cause beyond our reasonable control (each, a "Force Majeure Event").</li>
					</ol>
				</li>
				<li>
					<h4>Indemnity</h4>
					<ol>
						<li>To the extent allowable pursuant to applicable law, the User shall indemnify, defend, and hold the Company and/or its subsidiaries, affiliates, directors, officers, employees, agents, successors, and permitted assignees harmless from and against any and all claims, damages, losses, suits, actions, demands, proceedings, expenses, and/or liabilities (including but not limited to reasonable attorneys’ fees incurred and/or those necessary to successfully establish the right to indemnification) filed/incurred by any third party against the Company arising out of a breach of any warranty, representation, or obligation hereunder.</li>
						<li>The User shall not have any claim of any nature whatsoever against Company for any failure by Company to carry out any of his obligations under these Terms and Conditions as a result of causes beyond his control, including but not limited to any strike, lockout, shortage of labour or materials, delays in transport, accidents of any kind, any default or delay by any subcontractor or supplier of ours, riot, political or civil disturbances, the elements, by an act of state or government including regulatory action imposed, any delay in securing any permit, consent or approval required by the Company, for the supply of products under these Terms or any other authority or any other cause whatsoever beyond our absolute and direct control.</li>
					</ol>
				</li>
				<li>
					<h4>Applicable Law and Arbitration</h4>
					<ol>
						<li>For any and all controversies, disputes, demands, claims, or causes of action between you and us (including the interpretation and scope of this Section and the arbitrability of the controversy, dispute, demand, claim, or cause of action) relating to the Products or these Terms and Conditions (as well as any related or prior agreement that you may have had with us), you and we agree to resolve any such controversy, dispute, demand, claim, or cause of action exclusively through binding and confidential arbitration.</li>
						<li>Except for any disputes, claims, suits, actions, causes of action, demands or proceedings in which either Party seeks injunctive or other equitable relief for the alleged unlawful use of intellectual property, including, without limitation, copyrights, trademarks, trade names, logos, trade secrets or patents, You and the Company (a) waive your and Company’s respective rights to have any and all disputes arising from or related to these Terms resolved in a court, and (b) waive your and Company’s respective rights to a jury trial.</li>
					</ol>
				</li>
				<li>
					<h4>User Disputes</h4>
					<ol>
						<li>You agree that you are solely responsible for your interactions with any other user in connection with the Products and the Company will have no liability or responsibility with respect thereto.  We reserve the right, but has no obligation, to become involved in any way with disputes between you and any other user of the Products.</li>
					</ol>
				</li>
				<li>
					<h4>Misc</h4>
					<ol>
						<li>Any contracts shall in all respects be construed and operate as an English contract and in conformity with English law.</li>
						<li>JSEcoin will not be held liable to any breaches of guidelines or laws outside of the UK.</li>
						<li>These Terms and Conditions are intended to fully reflect the terms of the original agreement between the parties. No provision of these Terms shall be considered waived unless such waiver is in writing and signed by the party that benefits from the enforcement of such provision. No waiver of any provision in these Terms, however, will be deemed a waiver of a subsequent breach of such provision or a waiver of a similar provision. In addition, a waiver of any breach or a failure to enforce any term or condition of these Terms will not in any way affect, limit, or waive a Party’s rights hereunder at any time to enforce strict compliance thereafter with every term and condition hereof.</li>
						<li>If any term, provision, covenant or restriction of these Terms and all Accompanying Documents is held by a court of competent jurisdiction to be invalid, illegal, void or unenforceable, the remainder of the terms, provisions, covenants and restrictions set forth herein shall remain in full force and effect and shall in no way be affected, impaired or invalidated, and the parties hereto shall use their commercially reasonable efforts to find and employ an alternative means to achieve the same or substantially the same result as that contemplated by such term, provision, covenant or restriction. It is hereby stipulated and declared to be the intention of the parties that they would have executed the remaining terms, provisions, covenants and restrictions without including any of such that may be hereafter declared invalid, illegal, void or unenforceable.</li>
						<li>The User agrees and consents to receive electronically all communications, agreements, documents, receipts, notices and disclosures, that the Company provides in connection with use of the Website. The User agrees that the Company may provide these communications by posting them via the Website, by emailing them to User at the email address User provides.</li>
						<li>The Company may, at its sole discretion, assign its rights and/or delegate its duties under these Terms and all Accompanying Documents. You may not assign your rights or delegate your duties, and any assignment or delegation without the written consent of the Company, which the latter may withhold at its sole discretion, shall be void.</li>
						<li>In the event of a security breach, data loss, development issue, or for any other reason JSEcoin team sees fit, we reserve the right to reset the blockchain to the genesis block or an earlier backup. Where possible we will carry account balances forwards however the user accepts the risk that it may be necessary to reset or reverse the blockchain which could lead to loss of funds or transaction data.</li>
						<li>If any part of these terms and conditions that is not fundamental is found to be illegal or unenforceable, such finding will not affect the validity or enforceability of the remainder of these terms and conditions.</li>
					</ol>
				</li>
				<li>
					<h4>Contact</h4>
					<ol>
						<li>If you have any questions regarding the use of the Website, JSECOIN Token sale or regarding these Terms and Conditions, you should contact us here: <a href="https://jsecoin.com/en/support/contact/">https://jsecoin.com/en/support/contact/</a></li>
					</ol>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
export default {
	name: 'terms',
	metaInfo () {
		return {
			title: this.$t('pages.terms.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.terms.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.terms.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#JSEW-terms {
	padding:30px 0px;
}


#JSEW-terms ol {
  list-style-type: none;
  counter-reset: item;
  margin: 0;
  padding: 0px;
}

#JSEW-terms > ol {
  padding: 0px 20px;
}

#JSEW-terms ol > li {
  display: table;
  counter-increment: item;
  margin-bottom: 0.6em;
}

#JSEW-terms ol > li:before {
    content: counters(item, ".") ". ";
    display: table-cell;
    padding-right: 0.6em;
}

#JSEW-terms li li {
    margin: 0;
}

#JSEW-terms ol > li > ol > li:before {
    content: counters(item, ".") " ";
}

#JSEW-terms h4 {
	margin:0px;
	padding:0px;
}
</style>
