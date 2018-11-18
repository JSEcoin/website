<template>
<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/ico`" tag="li">
					ICO Launchpad
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/whitelisting`" tag="li" class="active">
					KYC
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/ico/issue`" tag="li">
					Report Issue
				</router-link>
			</ul>
		</nav>
	<div id="JSEW-whitelisting" class="wrapper center">
		<!--<h1 class="heading">{{ $t('pages.whitelisting.heading') }}</h1>
		<p>{{ $t('pages.whitelisting.intro') }}</p>
			<a href="https://jsecoin.com/HowToParticipateInICO.pdf" target="_blank">{{ $t('pages.whitelisting.pdf') }}</a>
		</p>
		<p>{{ $t('pages.whitelisting.intro2') }}</p>-->

				<p class="infoMsg">
					{{ $t('pages.whitelisting.help') }}
					<a href="https://jsecoin.com/HowToParticipateInICO.pdf" target="_blank">{{ $t('pages.whitelisting.pdf') }}</a>
				</p>
		<form id="JSEW-submitForm" @submit.prevent="onSubmit">
			<xLoading v-if="status.submittingMsg" />

			<div :class="{showForm:status.displayForm}" id="JSEW-whitelistingFormWrapper">
				<vue-recaptcha
					v-if="enableCaptcha"
					ref="invisibleRecaptcha"
					@verify="onVerify"
					@expired="onExpired"
					size="invisible"
					:sitekey="sitekey">
				</vue-recaptcha>

				<div class="hr hrInfo">
					<span>{{ $t('pages.whitelisting.whitelisting_form') }}</span>
				</div>

				<p>{{ $t('pages.whitelisting.use_jse_email') }}
					<a href="https://platform.jsecoin.com/?register=1&utm_source=internal&utm_campaign=whitelisting"
					    target="_blank">https://platform.jsecoin.com</a>
				</p>


				<div class="row">
					<div class="col">
						<label :class="{show:form.emailAddress.displayLabel, error:!form.emailAddress.valid || form.emailAddress.flag}">
							<div class="inputLabel">{{ $t('pages.whitelisting.accountEmail') }} *</div>
							<input type="email" :placeholder="$t('pages.whitelisting.accountEmail') + '*'" v-model="form.emailAddress.val" @keyup="keyWatch('emailAddress')" @blur="checkEmail" />
						</label>
					</div>
					<div class="col">
						<label :class="{show:form.fullName.displayLabel}">
							<div class="inputLabel">{{ $t('pages.whitelisting.fullname') }} *</div>
							<input type="text" :placeholder="$t('pages.whitelisting.fullname') + '*'" v-model="form.fullName.val" @keyup="keyWatch('fullName')"/>
						</label>
					</div>
				</div>

				<div class="row">
					<div class="col">
						<label :class="{show:form.address.displayLabel, error:form.address.flag}">
							<div class="inputLabel">{{ $t('pages.whitelisting.address') }} *</div>
							<textarea :placeholder="$t('pages.whitelisting.address') + '*'" v-model="form.address.val" @keyup="keyWatch('address')" class="wl-address"></textarea>
						</label>
					</div>
				</div>

				<div class="row">
					<div class="col">
						<p>{{ $t('pages.whitelisting.no_exchange') }}</p>
						<label :class="{show:form.ethAddress.displayLabel, error:!form.ethAddress.valid || form.ethAddress.flag}">
							<div class="inputLabel">{{ $t('pages.whitelisting.eth_address') }} *</div>
							<input type="text" :placeholder="$t('pages.whitelisting.eth_address') + '*'" v-model="form.ethAddress.val" @keyup="keyWatch('ethAddress')" @blur="checkEth" />
						</label>
						<p>{{ $t('pages.whitelisting.intended_purchase_description') }}</p>
						<label :class="{show:form.intendedPurchase.displayLabel, error:!form.intendedPurchase.valid || form.intendedPurchase.flag}">
							<div class="inputLabel">{{ $t('pages.whitelisting.intended_purchase') }} *</div>
							<input type="text" :placeholder="$t('pages.whitelisting.intended_purchase') + '*'" v-model="form.intendedPurchase.val" @keyup="keyWatch('intendedPurchase'); checkValidAmount();" @blur="checkValidAmount" />
						</label>
					</div>
				</div>

				<div class="row">
					<div class="col wl-width-reduced">
						<input type="checkbox" v-model="form.terms.val" @keyup="keyWatch('terms')" />
						<span class="wl-checkbox-text">{{ $t('pages.whitelisting.terms') }}
							<a href="https://jsecoin.com/en/legal/terms/" target="_blank">https://jsecoin.com/en/legal/terms/</a>
						</span>
						<br>
						<br>
						<input type="checkbox" v-model="form.legal.val" @keyup="keyWatch('legal')" />
						<span class="wl-checkbox-text">{{ $t('pages.whitelisting.legal') }}</span>
					</div>
				</div>

				<div id="wl-photo-id-container" class="wl-hidden">
					<div class="hr hrInfo">
						<span>{{ $t('pages.whitelisting.photo_id') }} *</span>
					</div>
					<p>{{ $t('pages.whitelisting.kyc_regs') }}</p>
					<vue-transmit class="dropHere"
						:class="{highlight:highlightDropBox}"
						tag="section"
						v-bind="options"
						upload-area-classes="bg-faded"
						ref="uploader"
						@drag-enter="highlight(true)"
						@drag-over="highlight(true)"
						@drag-leave="highlight(false)"
						@drag-end="highlight(false)"
						@drop="highlight(false)"
						@accept-complete="fileAccepted"
						@timeout="uploadTimeout"
						@success="uploadSuccess"
						@error="uploadError"
						@upload-progress="uploadprogress"
						@total-upload-progress="uploadprogress"
						@complete="completedUpload"
						@complete-multiple="completedUpload"
						@sending="sendingTask"
						@sending-multiple="sendingTask">

						<p v-if="filename.length === 0">
							<i class="fa fa-file-archive-o"></i>
							<br /> {{ $t('pages.whitelisting.drag') }}
						</p>
						<p v-else>
							{{filename}} ({{filesize}})
						</p>
					</vue-transmit>

				</div>

				<div class="hr"></div>

				<div class="errorMsg" v-if="form.error.display">
					<i class="fa fa-warning"></i> {{form.error.msg}}
				</div>

				<button v-if="enableCaptcha" class="button" type="submit">{{ $t('pages.submitInfo.form.button_submit') }}</button>
			</div>
			<div class="center" v-if="status.submittedForm" style="margin-top:40px;">
				<h1 class="heading">{{ $t('pages.whitelisting.heading_thankyou') }}</h1>
				<p v-if="Number(form.intendedPurchase.val) < 10000">
					{{ $t('pages.whitelisting.para_thankyou') }}
				</p>
				<p v-else>
					{{ $t('pages.whitelisting.para_thankyou_kyc') }}
				</p>

				<router-link v-bind:to="`/${$store.state.local}/ico`" tag="button" class="button">
					Buy JSE
				</router-link>
			</div>
		</form>
		<!-- whitelisting pixels iframe -->
		<iframe src="https://jsecoin.com/pixels.php?conversion=whitelisting" frameborder="0" width="1" height="1" style="position: absolute; left: -150px;"></iframe>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
import xLoading from './tpl/loading';

export default {
	name: 'whitelisting',
	metaInfo() {
		return {
			title: this.$t('pages.whitelisting.meta.title'),
			meta: [{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.whitelisting.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.whitelisting.meta.keywords'),
				},
			],
		};
	},
	components: {
		VueRecaptcha,
		xLoading,
	},
	data() {
		return {
			enableCaptcha: false,
			highlightDropBox: false,
			filename: '',
			filesize: '',
			options: {
				acceptedFileTypes: [
					'application/x-zip-compressed',
					'application/zip',
					'image/jpeg',
					'image/png',
					'image/gif',
					'application/pdf',
				],
				url: 'https://server.jsecoin.com/whitelisting/',
				clickable: true,
				maxFiles: 1,
				autoProcessQueue: false,
				maxFileSize: 10,
				method: 'post',
				/*headers: {
				'Content-Type': 'multipart/form-data',
				},*/
			},
			listFinded: [],
			form: {
				required: [
					'emailAddress',
					'fullName',
					'address',
					'ethAddress',
					'intendedPurchase',
					'terms',
					'legal',
				],
				emailAddress: {
					val: '',
					displayLabel: false,
					valid: true,
					flag: false,
				},
				fullName: {
					val: '',
					displayLabel: false,
					flag: false,
				},
				address: {
					val: '',
					displayLabel: false,
					flag: false,
				},
				ethAddress: {
					val: '',
					displayLabel: false,
					valid: true,
					flag: false,
				},
				intendedPurchase: {
					val: '',
					displayLabel: false,
					valid: true,
					flag: false,
				},
				terms: {
					val: '',
					displayLabel: false,
					flag: false,
				},
				legal: {
					val: '',
					displayLabel: false,
					flag: false,
				},
				error: {
					msg: '',
					display: false,
				},
			},
			status: {
				displayForm: true,
				submittingMsg: false,
				submittedForm: false,
				error: false,
			},
			sitekey: '6Lfl8S8UAAAAAAWfKHLDyRbcanMwKKSBckVYuQLZ',
		};
	},
	created() {
		this.listFinded = this.list;
	},
	mounted() {
		const self = this;
		setTimeout(() => {
			self.enableCaptcha = true;
		}, 5000);
		/*[
		'drop',
		'drag-start',
		'drag-end',
		'drag-enter',
		'drag-over',
		'drag-leave',
		'accepted-file',
		'rejected-file',
		'accept-complete',
		'added-file',
		'added-files',
		'removed-file',
		'thumbnail',
		'error',
		'error-multiple',
		'processing',
		'processing-multiple',
		'upload-progress',
		'total-upload-progress',
		'sending',
		'sending-multiple',
		'success',
		'success-multiple',
		'canceled',
		'canceled-multiple',
		'complete',
		'complete-multiple',
		'reset',
		'max-files-exceeded',
		'max-files-reached',
		'queue-complete',
		].forEach(this.listen);*/
	},
	methods: {
		listen(event) {
			this.$refs.uploader.$on(event, function () {
				//console.log(event);
			});
		},
		uploadTimeout(VTransmitFile, TimeoutEvent, xhr) {
			//console.log('uploadTimeout',TimeoutEvent, xhr);
			this.status.displayForm = true;
			this.form.error.display = true;
			this.status.submittingMsg = false;
			this.form.error.msg = 'Failed to submit - the upload timed out. Please try again.';
		},
		uploadSuccess(VTransmitFile, res, xhr) {
			//console.log('uploadSuccess',VTransmitFile, res, xhr);
			const self = this;
			const resObject = JSON.parse(res);
			if (resObject.success === 1) {
				setTimeout(function () {
					self.status.submittingMsg = false;
					self.status.submittedForm = true;
				}, 1000);
			} else {
				console.error('Invalid server response', res);
				this.status.displayForm = true;
				this.form.error.display = true;
				this.status.submittingMsg = false;
				this.form.error.msg = 'Failed to submit form - Invalid Response - ' + res;
			}
		},
		uploadError(VTransmitFile, res, xhr) {
			if (typeof xhr !== 'undefined') {
				//console.log('uploadError',VTransmitFile, res, xhr, 'dd');
				this.status.displayForm = true;
				this.form.error.display = true;
				this.status.submittingMsg = false;
				this.form.error.msg = 'Failed to submit form an error occurred - please try again.';
			}
			this.form.error.msg = 'Failed to upload file: ' + res;
			this.form.error.display = true;
		},
		uploadprogress(VTransmitFile, progress) {
			//console.log('uploadprogress', progress);
			// Display the progress
			//console.log(progress);
		},
		completedUpload(VTransmitFile) {
			//console.log('completedUpload', VTransmitFile);
			const self = this;
			self.$refs.uploader.removeFile(VTransmitFile);
		},
		sendingTask(VTransmitFile, XmlHttpRequest, FormData) {
			//console.log('sendingTask', VTransmitFile, XmlHttpRequest, FormData);
			const self = this;
			FormData.append('fileName', VTransmitFile.name);
			FormData.append('fileSize', (VTransmitFile.size / 1000) + 'KB');
			FormData.append('emailAddress', self.form.emailAddress.val);
			FormData.append('fullName', self.form.fullName.val);
			FormData.append('address', self.form.address.val);
			FormData.append('ethAddress', self.form.ethAddress.val);
			FormData.append('intendedPurchase', self.form.intendedPurchase.val);
			FormData.append('terms', self.form.terms.val);
			FormData.append('legal', self.form.legal.val);
		},
		fileAccepted(VTransmitFile) {
			//console.log('fileAccepted', VTransmitFile);
			if (VTransmitFile.accepted === true) {
				this.form.error.display = false;
				this.filename = VTransmitFile.name;
				this.filesize = (VTransmitFile.size / 1000) + 'KB';
			}
		},
		submitForm() {
			//console.log('submitForm');
			this.$refs.uploader.processQueue();
		},
		highlight(b) {
			this.highlightDropBox = b;
		},
		onFilter(e) {
			//console.log('filter',e);
			if (e.target.value) {
				this.listFinded = this.list.filter(
					el => el.text.indexOf(e.target.value) !== -1
					|| el.address.indexOf(e.target.value) !== -1,
				);
			} else {
				this.listFinded = this.list;
			}
		},
		onsearch(e) {
			////console.log(e);
			if (e.target.value) {
				this.listFinded = this.list.filter(
					el => el.text.indexOf(e.target.value) !== -1
					|| el.address.indexOf(e.target.value) !== -1,
				);
				if (this.filter !== null) {
					this.listFinded = this.list.filter(el => el.address === this.filter);
				}
			} else {
				this.listFinded = this.list;
				if (this.filter !== null) {
					this.listFinded = this.list.filter(el => el.address === this.filter);
				}
			}
		},
		displayForm() {
			//if (e) e.preventDefault();
			this.status.displayForm = true;
			this.status.submittedForm = false;
		},
		keyWatch(input) {
			//if text remove placeholder and show above input
			if (this.form[input].val.length > 0) {
				this.form[input].flag = false;
				this.form[input].displayLabel = true;
				if (input === 'emailAddress') {
					this.checkEmail();
				}
			} else {
				this.form[input].displayLabel = false;
				this.form[input].flag = true;
			}
		},
		checkEmail() {
			if (this.form.emailAddress.val.length > 0) {
				this.form.emailAddress.valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
					this.form.emailAddress.val,
				);
			} else {
				this.form.emailAddress.valid = true;
			}
		},
		checkEth() {
			if (
				this.form.ethAddress.val.substr(0, 2) === '0x'
				&& this.form.ethAddress.val.length === 42
			) {
				this.form.ethAddress.valid = true;
			} else {
				this.form.ethAddress.valid = false;
			}
		},
		checkValidAmount() {
			this.form.intendedPurchase.val = this.form.intendedPurchase.val
				.split('k')
				.join('000')
				.split('K')
				.join('000')
				.split(/[^0-9]/)
				.join('');
			this.checkIDRequirement();
			this.form.intendedPurchase.valid = false;
			if (parseInt(this.form.intendedPurchase.val, 10) >= 50) {
				this.form.intendedPurchase.valid = true;
			}
		},
		checkIDRequirement() {
			if (this.form.intendedPurchase.val >= 10000) {
				//this.form.idRequired = true;
				document
					.getElementById('wl-photo-id-container')
					.classList.remove('wl-hidden');
			} else {
				document
					.getElementById('wl-photo-id-container')
					.classList.add('wl-hidden');
			}
		},
		onSubmit() {
			//console.log('trying to submit');
			let checkRequiredFields = true;
			const self = this;
			//check required fields have data
			this.form.required.forEach(function (value) {
				self.form[value].flag = false;
				if (self.form[value].val.length === 0) {
					////console.log(value);
					self.form[value].flag = true;
					checkRequiredFields = false;
				}
			});

			//check email valid
			if (!this.form.emailAddress.valid) {
				checkRequiredFields = false;
			}
			//check eth address
			if (!this.form.ethAddress.valid) {
				checkRequiredFields = false;
			}
			if (!this.form.intendedPurchase.valid) {
				checkRequiredFields = false;
			}
			// check terms and legal
			if (this.form.terms.val !== true || this.form.legal.val !== true) {
				checkRequiredFields = false;
			}
			//if form pass check then submit captcha
			if (checkRequiredFields) {
				this.form.error.display = false;
				if (this.$refs.uploader.queuedFiles.length !== 1) {
					self.formattedEmail = {};
					self.formattedEmail.emailAddress = self.form.emailAddress.val;
					self.formattedEmail.fullName = self.form.fullName.val;
					self.formattedEmail.address = self.form.address.val;
					self.formattedEmail.ethAddress = self.form.ethAddress.val;
					self.formattedEmail.intendedPurchase = self.form.intendedPurchase.val;
					self.formattedEmail.terms = self.form.terms.val;
					self.formattedEmail.legal = self.form.legal.val;
					//console.log(JSON.stringify(self.formattedEmail));
					axios
						.post(
							'https://server.jsecoin.com/whitelisting/',
							self.formattedEmail, {
								headers: {
									'Content-type': 'application/x-www-form-urlencoded',
								},
							},
						).then(function (res) {
							const resObject = res.data;
							console.log(res);
							if (resObject.success === 1) {
								setTimeout(function () {
									self.status.displayForm = false;
									self.status.submittingMsg = false;
									self.status.submittedForm = true;
								}, 1000);
							} else {
								console.error(
									'Invalid server response',
									resObject.notification,
								);
								self.status.displayForm = true;
								self.form.error.display = true;
								self.status.submittingMsg = false;
								self.form.error.msg = 'Failed to submit form - Invalid Response - ' + resObject.notification;
							}
						});
				} else if (typeof this.$refs.invisibleRecaptcha === 'undefined') {
					self.enableCaptcha = true;
					setTimeout(() => {
						this.$refs.invisibleRecaptcha.execute();
					}, 1000);
				} else {
					this.$refs.invisibleRecaptcha.execute();
				}
			} else {
				console.error('Failed to submit form');
				this.form.error.display = true;
				this.form.error.msg =					'Failed to submit form - please check all required fields above';
			}
			this.$ma.trackEvent({ category: 'goal', action: 'whitelisting' });
		},
		onVerify(response) {
			//console.log('Verify: ' + response, this.$refs.uploader);
			const self = this;
			this.status.displayForm = false;
			this.status.submittingMsg = true;
			//console.log('!!!!',this.$refs.uploader.queuedFiles);
			this.$refs.uploader.processQueue();
		},
		onExpired() {
			//console.log('Expired');
		},
		resetRecaptcha() {
			this.$refs.recaptcha.reset(); // Direct call reset method
		},
	},
	filters: {
		json(value) {
			return JSON.stringify(value, null, 2);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dropHere {
	margin: 20px;
	border: dashed 3px #eee;
	text-align: center;
	color: #b1bdd0;
	padding: 20px;
	font-weight: bold;
	cursor: pointer;
	transition: border 0.2s, color 0.2s;
}

.dropHere.highlight,
.dropHere:hover {
	border: dashed 3px #2680f0;
	color: #2680f0;
}

.dropHere i {
	font-size: 2em;
}

.stf-select-options {
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
	border-radius: 3px 4px 6px 6px;
	margin-top: 2px;
}

#JSEW-contact {
	padding: 30px 0px;
}

#JSEW-submitForm .grecaptcha-badge {
	position: absolute !important;
	border-radius: 8px !important;
	overflow: hidden !important;
	box-shadow: 0px 0px 0px 6px #f8f8f9 !important;
	border: solid 1px #eee !important;
	border-right: 0px !important;
	bottom: 18px !important;
}

#JSEW-submitForm .grecaptcha-badge:hover {
	right: -6px !important;
}

#JSEW-submitForm {
	border: solid 6px #2680f0;
	box-shadow: 0px 6px 0px 0px #eee;
	border-radius: 12px;
	max-width: 600px;
	min-height: 646px;
	transition: min-height 0.4s;
	margin: 0px auto 100px;
}

.formSubmitted #JSEW-submitForm {
	min-height: 300px;
}

#JSEW-whitelistingFormWrapper {
	overflow: hidden;
	position: relative;
	padding: 0px 20px 20px 20px;
}

#JSEW-contactImg {
	background-image: url("../assets/images/contact.png");
	background-repeat: no-repeat;
	background-size: cover;
	display: block;
	width: 258px;
	height: 200px;
	margin: -198px auto 20px;
}

#JSEW-submitForm .col {
	max-width: inherit;
}

#JSEW-submitForm input[type="text"],
#JSEW-submitForm input[type="number"],
#JSEW-submitForm input[type="email"],
#JSEW-submitForm textarea,
#JSEW-submitForm .stf-select {
	border: 0px;
	height: 40px;
	border-radius: 8px;
	padding: 8px 16px;
	box-shadow: inset 0px 0px 0px 1px #c9caca, 0px 0px 0px 6px #f8f8f9;
	margin: 26px 16px;
}

#JSEW-submitForm .stf-select input {
	background: none;
	border: 0px;
	margin: 0px;
	padding: 0px;
	box-shadow: inset 0px 0px 0px 0px, 0px 0px 0px 0px;
}

#JSEW-submitForm .stf-select {
	margin: 10px 16px;
	padding: 4px;
}

#JSEW-submitForm textarea {
	min-height: 100px;
}

#JSEW-submitForm label {
	display: flex;
	position: relative;
}

#JSEW-submitForm label input,
#JSEW-submitForm label textarea {
	flex-grow: 1;
}

#JSEW-submitForm .inputLabel {
	position: absolute;
	top: 0px;
	left: 20px;
	color: #757575;
	font-size: 0.9em;
	opacity: 0;
	transition: opacity 0.2s;
}

#JSEW-submitForm label.show .inputLabel {
	opacity: 1;
}

#JSEW-submitForm .error input,
#JSEW-submitForm .error textarea {
	box-shadow: inset 0px 0px 0px 1px #ffb4b4, 0px 0px 0px 6px #fff6f6;
	color: #ff8585;
}

#JSEW-submitForm input:focus,
#JSEW-submitForm textarea:focus {
	box-shadow: inset 0px 0px 0px 1px #a8d2ff, 0px 0px 0px 6px #f4f9ff;
	color: #73b6fb;
}

#JSEW-submitForm .error .inputLabel {
	color: #ff8585;
}

#JSEW-submitForm .errorMsg {
	background-color: #ffe8e6;
	color: #db2828;
	box-shadow: 0 0 0 1px #db2828 inset, 0 0 0 0 transparent;
	padding: 16px;
	border-radius: 8px;
}

#JSEW-submitForm #JSEW-communityLinks {
	margin: 20px 0px;
	padding: 0px;
	display: flex;
}

#JSEW-submitForm #JSEW-communityLinks li {
	list-style: none;
	margin: 5px;
}

#JSEW-submitForm #JSEW-communityLinks li img {
	width: 60px;
}

#JSEW-whitelistingFormWrapper {
	display: none;
}

#JSEW-whitelistingFormWrapper.showForm {
	display: block;
}

.wl-checkbox-text {
	font-size: 0.8em;
}

.wl-width-reduced {
	margin: 0px 30px;
}

.wl-address {
	font-family: Nunito, Arial, sans-serif;
	font-size: 0.8em;
}

.wl-hidden {
	display: none;
}
</style>
