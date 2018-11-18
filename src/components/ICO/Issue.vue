<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/ico`" tag="li">
					ICO Launchpad
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/whitelisting`" tag="li">
					KYC
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/ico/issue`" tag="li" class="active">
					Report Issue
				</router-link>
			</ul>
		</nav>

		<div class="wrapper" style="padding:0px 20px;">
			<form id="JSEW-contactForm" @submit.prevent="onSubmit" class="active">
				<div id="JSEW-contactImg"></div>

				<xLoading v-if="status.submittingMsg" />

				<div v-if="status.displayForm" id="JSEW-contactFormWrapper">

					<div id="JSEW-contact" class="wrapper center" style="padding:0px;">
						<h1 class="heading">Ico Launchpad Support</h1>
						<p class="infoMsg">
							If you are experiencing any issues or need support with the ICO Launchpad - Please contact us using the form below! <br />
							We will review and contact you within 24hrs.<br /><br />
							<i class="infoMsg">
								<b>Please be aware</b> - if you have used an exchange to make a transaction we will unfortunately be unable to help you! <br />
							</i>
						</p>
					</div>
					<vue-recaptcha
						v-if="enableCaptcha"
						ref="invisibleRecaptcha"
						@verify="onVerify"
						@expired="onExpired"
						size="invisible"
						:sitekey="sitekey">
					</vue-recaptcha>

					<div class="row">
						<div class="col">
							<label :class="{show:form.emailAddress.displayLabel, error:!form.emailAddress.valid || form.emailAddress.flag}">
								<div class="inputLabel">{{ $t('pages.contact.form.label_placeholder_emailAddress') }} *</div>
								<input type="email" :placeholder="$t('pages.contact.form.label_placeholder_emailAddress') + '*'" v-model="form.emailAddress.val" @keyup="keyWatch('emailAddress')" @blur="checkEmail"/>
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
							<label :class="{show:form.ethAddress.displayLabel, error:!form.ethAddress.valid || form.ethAddress.flag}">
								<div class="inputLabel">{{ $t('pages.whitelisting.eth_address') }} *</div>
								<input type="text" :placeholder="$t('pages.whitelisting.eth_address') + '*'" v-model="form.ethAddress.val" @keyup="keyWatch('ethAddress')" @blur="checkEth" />
							</label>
						</div>
					</div>

					<label :class="{show:form.message.displayLabel, error:form.message.flag}">
						<div class="inputLabel">{{ $t('pages.contact.form.label_placeholder_message') }} *</div>
						<textarea :placeholder="$t('pages.contact.form.label_placeholder_message') + '*'" v-model="form.message.val" @keyup="keyWatch('message')"></textarea>
					</label>

					<div class="errorMsg" v-if="form.error.display">
						<i class="fa fa-warning"></i> {{form.error.msg}}
					</div>

					<div class="hr"></div>

					<button v-if="enableCaptcha" class="button" type="submit"><i class="fa fa-heart"></i> {{ $t('pages.contact.form.button_submit') }}</button>
				</div>
				<div class="center" v-if="status.submittedForm">
					<h1 class="heading">Issue Received</h1>
					<p>
						Thank you - our team will investigate the issue and get back to you within 24hrs.
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
import xLoading from '../tpl/loading';

export default {
	name: 'contact',
	metaInfo () {
		return {
			title: this.$t('pages.contact.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.contact.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.contact.meta.keywords'),
				},
			],
		};
	},
	components: { VueRecaptcha, xLoading },
	data() {
		return {
			enableCaptcha: false,
			form: {
				required: ['emailAddress', 'fullName', 'message'],
				emailAddress: {
					val: '',
					displayLabel: false,
					valid: true,
					flag: false,
				},
				fullName: {
					val: '',
					displayLabel: false,
					valid: true,
					flag: false,
				},
				message: {
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
	mounted() {
		const self = this;
		setTimeout(() => {
			self.enableCaptcha = true;
		}, 5000);
	},
	methods: {
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
		showForm() {
			this.formEl = document.getElementById('JSEW-contactForm');
			this.formEl.style.display = 'block';
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
				this.form.emailAddress.valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.form.emailAddress.val);
			} else {
				this.form.emailAddress.valid = true;
			}
		},
		onSubmit() {
			console.log('trying to submit');
			let checkRequiredFields = true;
			const self = this;
			//check required fields have data
			this.form.required.forEach(function(value) {
				self.form[value].flag = false;
				if (self.form[value].val.length === 0) {
					console.log(value);
					self.form[value].flag = true;
					checkRequiredFields = false;
				}
			});

			//check email valid
			if (!this.form.emailAddress.valid) {
				checkRequiredFields = false;
			}

			//if form pass check then submit captcha
			if (checkRequiredFields) {
				this.form.error.display = false;
				if (typeof (this.$refs.invisibleRecaptcha) === 'undefined') {
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
				this.form.error.msg = 'Failed to submit form - please check all required fields above';
			}
		},
		onVerify(response) {
			console.log('Verify: ' + response);
			const self = this;
			this.status.displayForm = false;
			this.status.submittingMsg = true;
			const emailBody = `ICO Launchpad Support Request \n \n 
				Name: ${this.form.fullName.val} \n
				Email: ${this.form.emailAddress.val} \n \n
				ETH Address: ${this.form.ethAddress.val} \n \n
				Message: \n
				${this.form.message.val}\n\n`;
			//console.log('email',emailBody);
			axios.post(
				'https://server.jsecoin.com/adminemail/',
				emailBody,
			).then((res) => {
				if (res.data.success === 1) {
					setTimeout(function() {
						self.status.submittingMsg = false;
						self.status.submittedForm = true;
					}, 1000);
				} else {
					console.error('Invalid server response');
					this.status.displayForm = true;
					this.form.error.display = true;
					this.status.submittingMsg = false;
					this.form.error.msg = 'Failed to submit form - Invalid Response - '+ res.data.notification;
				}
			}).catch((e, x) => {
				this.status.displayForm = true;
				this.form.error.display = true;
				this.status.submittingMsg = false;
				this.form.error.msg = 'Failed to submit form '+ e.response.data.notification;
				//this.errors.push(e);
			});
		},
		onExpired() {
			console.log('Expired');
		},
		resetRecaptcha() {
			this.$refs.recaptcha.reset(); // Direct call reset method
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#JSEW-contact {
	padding:30px 0px;
}

#JSEW-contactForm {
	border:solid 6px #2680f0;
	box-shadow:0px 6px 0px 0px #eee;
	border-radius:12px;
	margin:200px auto 100px;
	max-width:600px;
	min-height:646px;
	transition: min-height 0.4s;
	display: none;
}
#JSEW-contactForm.active {
	display: block;
}

.formSubmitted #JSEW-contactForm {
	min-height:300px;
}

#JSEW-contactFormWrapper {
	overflow:hidden;
	position: relative;
	padding:0px 20px 20px 20px;
}

#JSEW-contactForm .grecaptcha-badge {
	position: absolute !important;
	border-radius: 8px !important;
    overflow: hidden !important;
	box-shadow: 0px 0px 0px 6px #f8f8f9 !important;
	border:solid 1px #eee !important;
	border-right:0px !important;
	bottom:18px !important;
}
#JSEW-contactForm .grecaptcha-badge:hover {
    right: -6px !important;
}
#JSEW-contactFormWrapper .col {
	max-width: inherit;
}

#JSEW-contactImg {
	background-image:url("../../assets/images/contact.png");
	background-repeat: no-repeat;
	background-size:cover;
	display: block;
	width:258px;
	height: 200px;
	margin: -198px auto 20px;
}

#JSEW-contactForm input[type="text"],
#JSEW-contactForm input[type="email"],
#JSEW-contactForm textarea {
	border:0px;
	height: 40px;
	border-radius:8px;
	padding: 8px 16px;
	box-shadow:inset 0px 0px 0px 1px #c9caca, 0px 0px 0px 6px #f8f8f9;
	margin:26px 16px;
}
#JSEW-contactForm textarea {
	min-height:200px;
}

#JSEW-contactForm label {
	display:flex;
	position: relative;
}

#JSEW-contactForm label input,
#JSEW-contactForm label textarea {
	flex-grow:1;
}

#JSEW-contactForm .inputLabel {
	position: absolute;
	top:0px;
	left:20px;
	color:#757575;
	font-size:0.9em;
	opacity:0;
	transition: opacity 0.2s;
}
#JSEW-contactForm label.show .inputLabel {
	opacity:1;
}

#JSEW-contactForm .error input,
#JSEW-contactForm .error textarea {
	box-shadow:inset 0px 0px 0px 1px #ffb4b4, 0px 0px 0px 6px #fff6f6;
	color:#ff8585;
}
#JSEW-contactForm input:focus,
#JSEW-contactForm textarea:focus {
	box-shadow:inset 0px 0px 0px 1px #a8d2ff, 0px 0px 0px 6px #f4f9ff;
	color:#73b6fb;
}
#JSEW-contactForm .error .inputLabel {
	color:#ff8585;
}
#JSEW-contactForm .errorMsg {
	background-color: #ffe8e6;
    color: #db2828;
    box-shadow: 0 0 0 1px #db2828 inset, 0 0 0 0 transparent;
	padding:16px;
	border-radius: 8px;
}
#JSEW-contactForm #JSEW-communityLinks {
    margin: 20px 0px;
    padding: 0px;
    display: flex;
}
#JSEW-contactForm #JSEW-communityLinks li {
    list-style: none;
    margin: 5px;
}
#JSEW-contactForm #JSEW-communityLinks li img {
	width:60px;
}
</style>
