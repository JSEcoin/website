<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/bugBounty`" tag="li">
					Bug Bounty
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/smallJobs`" tag="li">
					Small Jobs
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/oddJobs/submitInfo`" tag="li" class="active">
					Submit
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-contact" class="wrapper center">
			<p class="infoMsg">
				Please use this form to submit bugs, fixes or completed job items.<br />
				Make sure to zip up all screenshots, documents and code to attach to this form.
			</p>
		</div>
		<div class="wrapper" style="padding:0px 20px;">
			<form id="JSEW-submitForm" @submit.prevent="onSubmit">
				<xLoading v-if="status.submittingMsg" />

				<div :class="{showForm:status.displayForm}" id="JSEW-submitFormWrapper">
					<vue-recaptcha
						ref="invisibleRecaptcha"
						@verify="onVerify"
						@expired="onExpired"
						size="invisible"
						:sitekey="sitekey">
					</vue-recaptcha>

					<div class="hr hrInfo"><span>User Info</span></div>

					<div class="row">
						<div class="col">
							<label :class="{show:form.jseUserID.displayLabel}">
								<div class="inputLabel">JSE UserID *</div>
								<input type="number" placeholder="JSE UserID *" v-model="form.jseUserID.val" @keyup="keyWatch('jseUserID')"/>
							</label>
						</div>
						<div class="col">
							<label :class="{show:form.emailAddress.displayLabel, error:!form.emailAddress.valid || form.emailAddress.flag}">
								<div class="inputLabel">Email Address *</div>
								<input type="email" placeholder="Email Address *" v-model="form.emailAddress.val" @keyup="keyWatch('emailAddress')" @blur="checkEmail"/>
							</label>
						</div>
					</div>

					<div class="hr hrInfo"><span>Task Summary</span></div>
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

					<label :class="{show:form.emailAddress.displayLabel, error:!form.emailAddress.valid || form.emailAddress.flag}">
						<stf-select v-model="value" style="width: 100%">
							<div slot="label">Please Select *</div>
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
						</stf-select>
					</label>

	<!--
					<div class="hr hrInfo"><span>Refine Summary</span></div>
	-->


					<div class="hr hrInfo"><span>Description - text only</span></div>

					<label :class="{show:form.message.displayLabel, error:form.message.flag}">
						<div class="inputLabel">Message *</div>
						<textarea placeholder="Message *" v-model="form.message.val" @keyup="keyWatch('message')"></textarea>
					</label>

					<div class="errorMsg" v-if="form.error.display">
						<i class="fa fa-warning"></i> {{form.error.msg}}
					</div>

					<div class="hr hrInfo"><span>Attachment - single zip file</span></div>

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
							Drag and drop a zip file
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

					<button class="button" type="submit">Submit</button>
				</div>
				<div class="center" v-if="status.submittedForm">
					<h1 class="heading">Thank you for your message :)</h1>
					<p>
						We will look into it and get back to you as soon as possible.<br />
						Feel free to also reach out to our team on our social channels.
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { StfSelect, StfSelectOption } from 'stf-vue-select';
import VueRecaptcha from 'vue-recaptcha';
import 'stf-vue-select/dist/lib/stf-vue-select.min.css';
import xLoading from './tpl/loading';

export default {
	name: 'test',
    metaInfo: {
		title: 'test',
    },
	components: {
		VueRecaptcha,
		xLoading,
		StfSelect,
	    StfSelectOption,
	},
	data() {
		return {
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
	methods: {
		triggerBrowse() {
			this.$refs.uploader.triggerBrowseFiles();
		},
		fileAccepted() {
			console.log('fileAccepted');
		},
		uploadTimeout() {
			console.log('uploadTimeout');
		},
		uploadSuccess() {
			console.log('uploadSuccess');
		},
		uploadprogress() {
			console.log('uploadprogress');
		},
		completedUpload() {
			console.log('completedUpload');
		},
		sendingTask() {
			console.log('sendingTask');
		},
		uploadError() {
			console.log('uploadError');
		},
		onSubmit() {
			console.log('submitForm');
			//this.$refs.uploader.processQueue();

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
				//this.$refs.uploader.processQueue();
				this.$refs.invisibleRecaptcha.execute();
			} else {
				console.error('Failed to submit form');
				this.form.error.display = true;
				this.form.error.msg = 'Failed to submit form - please check all required fields above';
			}
		},


		submitForm() {
			console.log('submitForm');
			this.$refs.uploader.processQueue();
		},
		highlight(b) {
			this.highlightDropBox = b;
		},
		onFilter(e) {
			console.log('filter',e);
			if (e.target.value) {
				this.listFinded = this.list.filter(el => el.text.indexOf(e.target.value) !== -1 || el.address.indexOf(e.target.value) !== -1);
			} else {
				this.listFinded = this.list;
			}
		},
		onsearch(e) {
			console.log(e);
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
		/*
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
				this.$refs.invisibleRecaptcha.execute();
			} else {
				console.error('Failed to submit form');
				this.form.error.display = true;
				this.form.error.msg = 'Failed to submit form - please check all required fields above';
			}
		},*/
		onVerify(response) {
			console.log('Verify: ' + response);
			const self = this;

			this.$refs.uploader.processQueue();
			this.status.displayForm = false;
			this.status.submittingMsg = true;
		},
		onExpired() {
			console.log('Expired');
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

<style>

#JSEW-submitFormWrapper {
	display:none;
}
#JSEW-submitFormWrapper.showForm {
	display:block;
}
</style>
