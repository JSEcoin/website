<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/bugBounty`" tag="li">
					{{ $t('pages.navigation.oddJobs.link_bugBounty') }}
				</router-link>
				<!--<router-link v-bind:to="`/${$store.state.local}/oddJobs/smallJobs`" tag="li">
					{{ $t('pages.navigation.oddJobs.link_smallJobs') }}
				</router-link>-->
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="li" class="active">
					{{ $t('pages.navigation.oddJobs.link_submit') }}
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-contact" class="wrapper center">
			<p class="infoMsg">
				{{ $t('pages.submitInfo.para_main1_infoMsg_line1') }}<br />
				{{ $t('pages.submitInfo.para_main1_infoMsg_line2') }}

			</p>
		</div>
		<div class="wrapper" style="padding:0px 20px;">
			<form id="JSEW-submitForm" @submit.prevent="onSubmit">
				<xLoading v-if="status.submittingMsg" />

				<div :class="{showForm:status.displayForm}" id="JSEW-oddJobsFormWrapper">
					<vue-recaptcha
						v-if="enableCaptcha"
						ref="invisibleRecaptcha"
						@verify="onVerify"
						@expired="onExpired"
						size="invisible"
						:sitekey="sitekey">
					</vue-recaptcha>

					<div class="hr hrInfo"><span>{{ $t('pages.submitInfo.form.heading_userInfo') }}</span></div>

					<div class="row">
						<div class="col">
							<label :class="{show:form.jseUserID.displayLabel}">
								<div class="inputLabel">{{ $t('pages.submitInfo.form.label_placeholder_userID') }} *</div>
								<input type="number" :placeholder="$t('pages.submitInfo.form.label_placeholder_userID') + '*'" v-model="form.jseUserID.val" @keyup="keyWatch('jseUserID')"/>
							</label>
						</div>
						<div class="col">
							<label :class="{show:form.emailAddress.displayLabel, error:!form.emailAddress.valid || form.emailAddress.flag}">
								<div class="inputLabel">{{ $t('pages.submitInfo.form.label_placeholder_email') }} *</div>
								<input type="email" :placeholder="$t('pages.submitInfo.form.label_placeholder_email') + '*'" v-model="form.emailAddress.val" @keyup="keyWatch('emailAddress')" @blur="checkEmail"/>
							</label>
						</div>
					</div>

					<div class="hr hrInfo"><span>{{ $t('pages.submitInfo.form.heading_taskSummary') }}</span></div>
					<!-- <label>
						<stf-select v-model="jobType" style="width: 100%">
							<div slot="label">Task Filter</div>
							<div slot="value">
								<div v-if="jobType">
									<span>{{jobType.text}}</span>
								</div>
							</div>
							<section class="options delivery_order__options">
								<stf-select-option
									v-for="item of job" :key="item.id"
									:value="item"
									:class="{'stf-select-option_selected': item.id === (jobType && jobType.id), 'showOption': item.id === (jobType && jobType.id)}"
								>
								<span>{{item.text}}</span>
								</stf-select-option>
							</section>
						</stf-select>
					</label>-->

					<!-- Not sure if the below code is right for the task summary so I left it off the form. Jim -->
					<label :class="{show:form.emailAddress.displayLabel, error:!form.emailAddress.valid || form.emailAddress.flag}">
						<!--<stf-select v-model="value" style="width: 100%">
							<div slot="label">{{ $t('pages.submitInfo.form.placeholder_pleaseSelect') }} *</div>
							<div slot="value">
								<div v-if="value">
									<span>{{value.text}} (<small>{{value.address}}</small>)</span>
								</div>
							</div>
							<div slot="search-input">
								<input @input="onsearch">
							</div>
							<section class="options delivery_order__options">
								<stf-select-option
									v-for="item of listFinded" :key="item.id"
									:value="item"
									:class="{'stf-select-option_selected': item.id === (value && value.id)}"
								>
									<span>{{item.text}} (<small>{{item.address}}</small>)</span>
								</stf-select-option>
							</section>
						</stf-select>-->
						<select>
							<option value="">{{ $t('pages.submitInfo.form.placeholder_pleaseSelect') }} *</option>
							<option v-for="item of listFinded" :key="item.id" :selected="(item.id === (value && value.id))" :value="item">{{item.text}} (<small>{{item.address}}</small>)</option>
						</select>
					</label>

	<!--
					<div class="hr hrInfo"><span>Refine Summary</span></div>
	-->


					<div class="hr hrInfo"><span>{{ $t('pages.submitInfo.form.heading_description') }}</span></div>

					<label :class="{show:form.message.displayLabel, error:form.message.flag}">
						<div class="inputLabel">{{ $t('pages.submitInfo.form.label_placeholder_message') }} *</div>
						<textarea :placeholder="$t('pages.submitInfo.form.label_placeholder_message') + '*'" v-model="form.message.val" @keyup="keyWatch('message')"></textarea>
					</label>

					<div class="errorMsg" v-if="form.error.display">
						<i class="fa fa-warning"></i> {{form.error.msg}}
					</div>

					<div class="hr hrInfo"><span>{{ $t('pages.submitInfo.form.heading_attachment') }} *</span></div>

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
						@sending-multiple="sendingTask"
					>

						<p v-if="filename.length === 0">
							<i class="fa fa-file-archive-o"></i><br />
							{{ $t('pages.submitInfo.form.para_dragDrop') }}
						</p>
						<p v-else>
							{{filename}} ({{filesize}})
						</p>
						<!--

						<div class="d-flex align-items-center justify-content-center w-100"
								style="height:50vh; border-radius: 1rem;">
							<button class="btn btn-primary"
									@click="triggerBrowse">Upload Files</button>
						</div>
						-->
						<!-- Scoped slot -->
						<!--<template slot="files" scope="props">
							<div v-for="(file, i) in props.files" :key="file.id" :class="{'mt-5': i === 0}">
								<div class="media">
									<img :src="file.dataUrl" class="img-fluid d-flex mr-3" alt="Submit File Icon">
									<div class="media-body">
										<h3>{{ file.name }}</h3>
										<div class="progress" style="width: 50vw;">
											<div class="progress-bar bg-success"
												:style="{width: file.upload.progress + '%'}"></div>
										</div>
										<pre>{{ file | json }} </pre>
									</div>
								</div>
							</div>
						</template>-->
					</vue-transmit>


					<div class="hr"></div>

					<button v-if="enableCaptcha" class="button" type="submit">{{ $t('pages.submitInfo.form.button_submit') }}</button>
				</div>
				<div class="center" v-if="status.submittedForm" style="margin-top:40px;">
					<h1 class="heading">{{ $t('pages.submitInfo.form.heading_thankyou') }}</h1>
					<p>
						{{ $t('pages.submitInfo.form.para_thankyou') }}
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
//import { StfSelect, StfSelectOption } from 'stf-vue-select';
import VueRecaptcha from 'vue-recaptcha';
//import 'stf-vue-select/dist/lib/stf-vue-select.min.css';
import xLoading from '../tpl/loading';

export default {
	name: 'submitInfo',
	metaInfo () {
		return {
			title: this.$t('pages.submitInfo.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.submitInfo.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.submitInfo.meta.keywords'),
				},
			],
		};
	},
	components: {
		VueRecaptcha,
		xLoading,
		//StfSelect,
	    //StfSelectOption,
	},
	data() {
		return {
			enableCaptcha: false,
			highlightDropBox: false,
			filename: '',
			filesize: '',
			options: {
				acceptedFileTypes: ['application/x-zip-compressed','application/zip'],
				url: 'https://server.jsecoin.com/attachmentemail/',
				clickable: true,
				maxFiles: 1,
				autoProcessQueue: false,
				maxFileSize: 10,
				method: 'post',
				/*headers: {
					'Content-Type': 'multipart/form-data',
				},*/
			},
			jobType: null,
			filter: 'Job',
			value: null,
			job: [
				{
					text: 'Bug Type',
					id: 1,
				},
				{
					text: 'Available Jobs',
					id: 2,
				},
			],
			list: [
				{
					text: 'Graphical',
					address: 'Bug',
					id: 1,
				},
				{
					text: 'Browser',
					address: 'Bug',
					id: 2,
				},
				{
					text: 'Code',
					address: 'Bug',
					id: 3,
				},
				{
					text: 'Security',
					address: 'Bug',
					id: 4,
				},
				{
					text: 'Device',
					address: 'Bug',
					id: 5,
				},
				{
					text: 'Other',
					address: 'Job',
					id: 6,
				},
			],
			listFinded: [],
			form: {
				required: ['jseUserID', 'emailAddress', 'message'],
				jseUserID: {
					val: '',
					displayLabel: false,
					flag: false,
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
			this.$refs.uploader.$on(event, function() {
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
				setTimeout(function() {
					self.status.submittingMsg = false;
					self.status.submittedForm = true;
				}, 1000);
			} else {
				console.error('Invalid server response', res);
				this.status.displayForm = true;
				this.form.error.display = true;
				this.status.submittingMsg = false;
				this.form.error.msg = 'Failed to submit form - Invalid Response - '+ res;
			}
		},
		uploadError(VTransmitFile, res, xhr) {
			if (typeof (xhr) !== 'undefined') {
				//console.log('uploadError',VTransmitFile, res, xhr, 'dd');
				this.status.displayForm = true;
				this.form.error.display = true;
				this.status.submittingMsg = false;
				this.form.error.msg = 'Failed to submit form an error occurred - please try again.';
			}
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
			//
			FormData.append('fileName', VTransmitFile.name);
			FormData.append('fileSize', (VTransmitFile.size/1000) + 'KB');
			FormData.append('jseUserID', self.form.jseUserID.val);
			FormData.append('emailAddress', self.form.emailAddress.val);
			if (self.value !== null) {
				////console.log(self.value);
				FormData.append('taskInfo', 'Bug/Task - ['+self.value.text+']');
			}
			FormData.append('message', self.form.message.val);
		},
		fileAccepted(VTransmitFile) {
			//console.log('fileAccepted', VTransmitFile);
			if (VTransmitFile.accepted === true) {
				this.filename = VTransmitFile.name;
				this.filesize = (VTransmitFile.size/1000) + 'KB';
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
				this.listFinded = this.list.filter(el => el.text.indexOf(e.target.value) !== -1 || el.address.indexOf(e.target.value) !== -1);
			} else {
				this.listFinded = this.list;
			}
		},
		onsearch(e) {
			////console.log(e);
			if (e.target.value) {
				this.listFinded = this.list.filter(el => el.text.indexOf(e.target.value) !== -1 || el.address.indexOf(e.target.value) !== -1);
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
				this.form.emailAddress.valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.form.emailAddress.val);
			} else {
				this.form.emailAddress.valid = true;
			}
		},
		onSubmit() {
			//console.log('trying to submit');
			let checkRequiredFields = true;
			const self = this;
			//check required fields have data
			this.form.required.forEach(function(value) {
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
			//if form pass check then submit captcha
			if (checkRequiredFields) {
				this.form.error.display = false;
				if (this.$refs.uploader.queuedFiles.length !== 1) {
					self.formattedEmail = {};
					self.formattedEmail.important = 'Bug Bounty Email Please Forward On';
					self.formattedEmail.jseUserID = self.form.jseUserID.val;
					self.formattedEmail.emailAddress = self.form.emailAddress.val;
					self.formattedEmail.message = self.form.message.val;
					console.log(JSON.stringify(self.formattedEmail));
			    axios.post('https://server.jsecoin.com/adminemail/',
			    self.formattedEmail,
			    {
 headers: {
			      'Content-type': 'application/x-www-form-urlencoded',
			      },
			    }).then(function(res) {
						const resObject = res.data;
						console.log(res);
						if (resObject.success === 1) {
							setTimeout(function() {
								self.status.submittingMsg = false;
								self.status.submittedForm = true;
							}, 1000);
						} else {
							console.error('Invalid server response', resObject.notification);
							self.status.displayForm = true;
							self.form.error.display = true;
							self.status.submittingMsg = false;
							self.form.error.msg = 'Failed to submit form - Invalid Response - '+ resObject.notification;
						}
			    });
				} else if (typeof (this.$refs.invisibleRecaptcha) === 'undefined') {
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
	margin:20px;
	border:dashed 3px #eee;
	text-align: center;
	color: #b1bdd0;
	padding:20px;
	font-weight:bold;
	cursor: pointer;
	transition:border 0.2s,color 0.2s;
}

.dropHere.highlight,
.dropHere:hover {
	border:dashed 3px #2680f0;
	color:#2680f0;
}

.dropHere i {
	font-size:2em;
}

.stf-select-options {
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
    border-radius: 3px 4px 6px 6px;
    margin-top: 2px;
}

#JSEW-contact {
	padding:30px 0px;
}

#JSEW-submitForm {
	border:solid 6px #2680f0;
	box-shadow:0px 6px 0px 0px #eee;
	border-radius:12px;
	max-width:600px;
	min-height:646px;
	transition: min-height 0.4s;
	margin:0px auto 100px;
}

.formSubmitted #JSEW-submitForm {
	min-height:300px;
}

#JSEW-oddJobsFormWrapper {
	overflow:hidden;
	position: relative;
	padding:0px 20px 20px 20px;
}

#JSEW-submitForm .grecaptcha-badge {
	position: absolute !important;
	border-radius: 8px !important;
    overflow: hidden !important;
	box-shadow: 0px 0px 0px 6px #f8f8f9 !important;
	border:solid 1px #eee !important;
	border-right:0px !important;
	bottom:18px !important;
}
#JSEW-submitForm .grecaptcha-badge:hover {
    right: -6px !important;
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
#JSEW-submitForm .col {
	max-width:inherit;
}

#JSEW-submitForm input[type="text"],
#JSEW-submitForm input[type="number"],
#JSEW-submitForm input[type="email"],
#JSEW-submitForm textarea,
#JSEW-submitForm .stf-select,
select {
	border:0px;
	height: 40px;
	border-radius:8px;
	padding: 8px 16px;
	box-shadow:inset 0px 0px 0px 1px #c9caca, 0px 0px 0px 6px #f8f8f9;
	margin:26px 16px;
}

#JSEW-submitForm .stf-select input {
	background:none;
	border:0px;
	margin:0px;
	padding:0px;
	box-shadow:inset 0px 0px 0px 0px,0px 0px 0px 0px;
}
#JSEW-submitForm .stf-select {
	margin:10px 16px;
	padding:4px;
}
#JSEW-submitForm textarea {
	min-height:200px;
}

#JSEW-submitForm label {
	display:flex;
	position: relative;
}

#JSEW-submitForm label input,
#JSEW-submitForm label textarea {
	flex-grow:1;
}

#JSEW-submitForm .inputLabel {
	position: absolute;
	top:0px;
	left:20px;
	color:#757575;
	font-size:0.9em;
	opacity:0;
	transition: opacity 0.2s;
}
#JSEW-submitForm label.show .inputLabel {
	opacity:1;
}

#JSEW-submitForm .error input,
#JSEW-submitForm .error textarea {
	box-shadow:inset 0px 0px 0px 1px #ffb4b4, 0px 0px 0px 6px #fff6f6;
	color:#ff8585;
}
#JSEW-submitForm input:focus,
#JSEW-submitForm textarea:focus {
	box-shadow:inset 0px 0px 0px 1px #a8d2ff, 0px 0px 0px 6px #f4f9ff;
	color:#73b6fb;
}
#JSEW-submitForm .error .inputLabel {
	color:#ff8585;
}
#JSEW-submitForm .errorMsg {
	background-color: #ffe8e6;
    color: #db2828;
    box-shadow: 0 0 0 1px #db2828 inset, 0 0 0 0 transparent;
	padding:16px;
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
	width:60px;
}

#JSEW-oddJobsFormWrapper {
	display:none;
}
#JSEW-oddJobsFormWrapper.showForm {
	display:block;
}
</style>
