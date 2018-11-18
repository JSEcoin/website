<template>
	<div id="JSEW-wrapper">
		<h1 class="heading">Sample Banner</h1>
		<h2 class="subHeading">Example of banner code generated</h2>
		<br /><br />

		<h3 class="subHeading">DOM</h3>
		<pre><code>
			{{code}}
		</code></pre>

		<h3 class="subHeading">CSS</h3>
		<pre><code>
			{{css}}
		</code></pre>

		<div v-if="showBanner" v-html="code"></div>

	</div>
</template>

<script>
export default {
	name: 'banner1',
	data() {
		return {
			code: '',
			randomKey: '',
			showBanner: true,
			css: '',
		};
	},
	created() {
		const self = this;
		this.randomKey = btoa(Math.random()).substring(0,12);
		this.code = `
	<div id="JSEW-banner_v1_${self.randomKey}">
		<p>
			<b>We rely on advertising to offer our site and services for free.</b>

			By continuing you are agreeing that less than 10% of your CPU<br />
			may be used by our partner JSEcoin Ltd to help monitise our website.<br />
			<a href="javascript:alert('privacy');">PRIVACY &amp; OPTOUT</a><a href="javascript:alert('learnMore');">LEARN MORE</a>
		</p>

		<div id="JSEW-divider_${self.randomKey}"></div>

		<div id="JSEW-buttonCollection_${self.randomKey}">
			<button onclick="alert('privacy');" id="JSEW-privacy_${self.randomKey}">PRIVACY</button>
			<button onclick="alert('learnMore');" id="JSEW-learnMore_${self.randomKey}">LEARN MORE</button>
			<button onclick="alert('close');" id="JSEW-continue_${self.randomKey}">CONTINUE</button>
		</div>
	</div>
		`;
	},
	mounted() {
		const self = this;
		const dBanner = document.getElementById(`JSEW-banner_v1_${self.randomKey}`);
		const s = document.createElement('style');
		s.type = 'text/css';

		self.css = `
	body #JSEW-banner_v1_${self.randomKey} {
		background: #fff !important;
		border-top: solid 4px #c2c5c9 !important;
		padding: 12px 10px 20px 10px !important;
		position: fixed !important;
		bottom: 0px !important;
		left: 0px !important;
		right: 0px !important;
		color: #626668 !important;
		z-index:100000000000000000000000000 !important;
		font-size:16px !important;
	}

	body #JSEW-banner_v1_${self.randomKey} a {
		margin:10px 40px 0px 0px !important;
		font-weight:bold !important;
		font-size:0.8em !important;
	}

	body #JSEW-buttonCollection_${self.randomKey} {
		align-self:center !important;
	}

	body #JSEW-divider_${self.randomKey} {
		background:#eee !important;
	}

	body #JSEW-banner_v1_${self.randomKey} b {
		color: #434749 !important;
		display: block !important;
	}

	body #JSEW-banner_v1_${self.randomKey} button {
		color: #fff !important;
		background: #2196f3 !important;
		border:solid 1px #2196f3 !important;
		border-radius: 4px !important;
		font-weight:bold !important;
		letter-spacing: 0.5px !important;
		float:right !important;
	}

	body #JSEW-banner_v1_${self.randomKey} #JSEW-privacy_${self.randomKey},
	body #JSEW-banner_v1_${self.randomKey} #JSEW-learnMore_${self.randomKey} {
		background:#fff !important;
		color:#76797a !important;
		float:left !important;
		border:solid 1px #eee !important;
		font-weight: normal !important;
		color:#76797a !important;
	}

	body #JSEW-banner_v1_${self.randomKey} p {
		padding:0px !important;
		margin:0px !important;
		flex-grow: 1 !important;
		background: #fff url("/static/images/jsebadge.png") no-repeat 10px 2px !important;
	}
	
	@media screen and (min-width: 768px) {
		body #JSEW-banner_v1_${self.randomKey} {
			display:flex !important;
			align-content: stretch !important;
		}

		
		body #JSEW-banner_v1_${self.randomKey} a {
			display:inline-block !important;
		}


		body #JSEW-banner_v1_${self.randomKey} #JSEW-privacy_${self.randomKey},
		body #JSEW-banner_v1_${self.randomKey} #JSEW-learnMore_${self.randomKey} {
			display:none !important;
		}
		
		body #JSEW-divider_${self.randomKey} {
			background:#eee !important;
			width: 1px !important;
			margin:0px 10px !important;
		}
		
		body #JSEW-banner_v1_${self.randomKey} button {
			padding: 16px 24px !important;
			margin:10px !important;
		}

		body #JSEW-banner_v1_${self.randomKey} b {
			margin-bottom: 2px !important;
		}

		body #JSEW-banner_v1_${self.randomKey} p {
			background-size: 90px !important;
			padding-left:124px !important;
		}
	}
	@media screen and (max-width: 768px) {
		body #JSEW-banner_v1_${self.randomKey} {
			display:block !important;
		}

		body #JSEW-banner_v1_${self.randomKey} a {
			display: none !important;
		}

		body #JSEW-banner_v1_${self.randomKey} #JSEW-privacy_${self.randomKey},
		body #JSEW-banner_v1_${self.randomKey} #JSEW-learnMore_${self.randomKey} {
			display:block !important;
		}
		
		body #JSEW-divider_${self.randomKey} {
			background:#eee !important;
			height: 1px !important;
			margin:10px !important;
			width: 100% !important;
		}
		
		body #JSEW-banner_v1_${self.randomKey} button {
			padding: 8px 16px !important;
			font-size:0.8em !important;
			margin:8px !important;
		}

		body #JSEW-banner_v1_${self.randomKey} b {
			margin-bottom: 10px !important;
		}

		body #JSEW-banner_v1_${self.randomKey} p {
			background-size: 70px !important;
			padding-left:90px !important;
		}
	}
		`;
		if (s.styleSheet){
			s.styleSheet.cssText = self.css;
		} else {
			s.appendChild(document.createTextNode(self.css));
		}

		dBanner.appendChild(s);
	},
	methods: {
		closeBanner() {
			this.showBanner = false;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
code {
	font-family: Courier New, Courier, monospace;
	font-size:0.8em;
	color:#91d4d5;
}
pre {
	background: #1d1d1d;
}
</style>
