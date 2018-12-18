<template>
	<div id="JSEW-wrapper" :class="{formSubmitted:status.submittedForm}">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/support/FAQ`" tag="li">
					{{ $t('pages.navigation.support.link_FAQ') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/support/community`" tag="li">
					{{ $t('pages.navigation.support.link_community') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/support/contact`" tag="li" class="active">
					{{ $t('pages.navigation.support.link_contact') }}
				</router-link>
				<!--<li v-on:click="location='/forums'">
					Forums
				</li>-->
			</ul>
		</nav>

		<div id="JSEW-contact" class="wrapper center">
			<h1 class="heading">{{ $t('pages.contact.heading_contact') }}</h1>
			<h2 class="subHeading"> {{ $t('pages.contact.subheading_contact') }}
				<router-link v-bind:to="`/${$store.state.local}/support/FAQ`" tag="a">
					{{ $t('pages.contact.link_FAQ') }}
				</router-link>
			</h2>
			<p id="JSEW-noLongerAvailable">This page is no longer available</p>
		</div>
		<div class="wrapper" style="padding:0px 20px;">
			<form id="JSEW-contactForm" @submit.prevent="onSubmit">
				<div id="JSEW-contactImg"></div>

				<xLoading v-if="status.submittingMsg" />

				<div v-if="status.displayForm" id="JSEW-contactFormWrapper">
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
							<label :class="{show:form.firstName.displayLabel, error:form.firstName.flag}">
								<div class="inputLabel">{{ $t('pages.contact.form.label_placeholder_firstName') }} *</div>
								<input type="text" :placeholder="$t('pages.contact.form.label_placeholder_firstName') + '*'" v-model="form.firstName.val" @keyup="keyWatch('firstName')"/>
							</label>
						</div>
						<div class="col">
							<label :class="{show:form.lastName.displayLabel, error:form.lastName.flag}">
								<div class="inputLabel">{{ $t('pages.contact.form.label_placeholder_lastName') }} *</div>
								<input type="text" :placeholder="$t('pages.contact.form.label_placeholder_lastName') + '*'" v-model="form.lastName.val" @keyup="keyWatch('lastName')"/>
							</label>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<label :class="{show:form.contactNo.displayLabel}">
								<div class="inputLabel">{{ $t('pages.contact.form.label_placeholder_contactNo') }}</div>
								<input type="text" :placeholder="$t('pages.contact.form.label_placeholder_contactNo')" v-model="form.contactNo.val" @keyup="keyWatch('contactNo')"/>
							</label>
						</div>
						<div class="col">
							<label :class="{show:form.emailAddress.displayLabel, error:!form.emailAddress.valid || form.emailAddress.flag}">
								<div class="inputLabel">{{ $t('pages.contact.form.label_placeholder_emailAddress') }} *</div>
								<input type="email" :placeholder="$t('pages.contact.form.label_placeholder_emailAddress') + '*'" v-model="form.emailAddress.val" @keyup="keyWatch('emailAddress')" @blur="checkEmail"/>
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
					<h1 class="heading">{{ $t('pages.contact.form.heading_thankyou') }}</h1>
					<p>
						{{ $t('pages.contact.form.para_thankyou_line1') }}<br />
						{{ $t('pages.contact.form.para_thankyou_line2') }}
					</p>
					<nav class="centerFlex">
						<ul id="JSEW-communityLinks">
							<li><a target="_blank" title="Facebook" href="https://www.facebook.com/officialjsecoin"><img src="../../assets/images/ico_facebook.png" alt="Facebook logo button" /></a></li>
							<li><a target="_blank" title="Discord" href="https://discord.gg/3gBZsA4"><img src="../../assets/images/ico_discord.png" alt="Discord logo button" /></a></li>
							<li><a target="_blank" title="Twitter" href="https://twitter.com/jsecoin"><img src="../../assets/images/ico_twitter.png" alt="Twitter logo button" /></a></li>
							<li><a target="_blank" title="LinkedIn" href="https://www.linkedin.com/company/25048028/"><img src="../../assets/images/ico_linkedin.png" alt="LinkedIn logo button" /></a></li>
							<li><a target="_blank" title="Telegam" href="https://t.me/jsetelegram"><img src="../../assets/images/ico_telegram.png" alt="Telegam logo button" /></a></li>
							<li><a target="_blank" title="YouTube" href="https://www.youtube.com/channel/UCHtIF9KggJn9TDzr8pRYsYA"><img src="../../assets/images/ico_youtube.png" alt="YouTube logo button" /></a></li>
						</ul>
					</nav>
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
				required: ['firstName', 'lastName', 'emailAddress', 'message'],
				firstName: {
					val: '',
					displayLabel: false,
					flag: false,
				},
				lastName: {
					val: '',
					displayLabel: false,
					flag: false,
				},
				contactNo: {
					val: '',
					displayLabel: false,
				},
				emailAddress: {
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
		const get = this.getQueryParams(document.location.search);
		if (get.ts && get.hash) {
			self.sha256(get.ts).then(function(tsHash) {
				console.log('t2');
				const tsHashChopped = tsHash.substr(0,8);
				if (tsHashChopped === get.hash) {
					const now =  new Date().getTime();
					if (now < get.ts + 172800000 && now > get.ts) {
						console.log('Timestamp and hash correct');
						self.showForm();
					} else {
						console.log('Contact form has expired');
					}
				} else {
					console.log('Hash does not match timestamp');
				}
			});
		} else {
			console.log('get variables not found for ts and hash');
		}

		setTimeout(() => {
			self.enableCaptcha = true;
		}, 5000);
	},
	methods: {
		sha256(str) {
			// We transform the string into an arraybuffer.
			const buffer = new TextEncoder('utf-8').encode(str);
			return crypto.subtle.digest('SHA-256', buffer).then(function (hash) {
				const hexCodes = [];
				const view = new DataView(hash);
				for (let i = 0; i < view.byteLength; i += 4) {
					const value = view.getUint32(i);
					const stringValue = value.toString(16);
					const padding = '00000000';
					const paddedValue = (padding + stringValue).slice(-padding.length);
					hexCodes.push(paddedValue);
				}
				return hexCodes.join('');
			});
		},

		getQueryParams(qs) {
			qs = qs.split('+').join(' ');
			const params = {};
			let tokens;
			const re = /[?&]?([^=]+)=([^&]*)/g;
			while (tokens = re.exec(qs)) { params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]); }  // eslint-disable-line
			return params;
		},
		showForm() {
			this.formEl = document.getElementById('JSEW-contactForm');
			this.formEl.style.display = 'block';
			this.notAvailableEl = document.getElementById('JSEW-noLongerAvailable');
			this.notAvailableEl.style.display = 'none';
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
			const emailBody = `SupportRequest \n 
				Name: ${this.form.firstName.val} ${this.form.lastName.val} \n
				Contact No: ${this.form.contactNo.val} \n
				Email: ${this.form.emailAddress.val} \n \n
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
