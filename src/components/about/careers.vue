<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/about`" tag="li">
					{{ $t('pages.navigation.about.link_about') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/meetTheTeam`" tag="li">
					{{ $t('pages.navigation.about.link_team') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/ourVision`" tag="li">
					{{ $t('pages.navigation.about.link_vision') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/careers`" tag="li" class="active">
					{{ $t('pages.navigation.about.link_careers') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="li">
					{{ $t('pages.navigation.about.link_press') }}
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-careers" class="wrapper row">

			<div class="col">
				<h1 class="heading">{{ $t('pages.careers.section_overview.heading_careers') }}</h1>
				<h2 class="subHeading">{{ $t('pages.careers.section_overview.subheading_careers') }}</h2>

				<p>
					{{ $t('pages.careers.section_overview.para_main1') }}
				</p>
				<p>
					{{ $t('pages.careers.section_overview.para_main2') }}
				</p>
				<p>
					{{ $t('pages.careers.section_overview.para_main3') }}
				</p>


				<h3>{{ $t('pages.careers.section_overview.minorHeading_benefits') }}</h3>

				<ul>
					<li>{{ $t('pages.careers.section_overview.info_benefits_list1') }}</li>
					<li>{{ $t('pages.careers.section_overview.info_benefits_list2') }}</li>
					<li>{{ $t('pages.careers.section_overview.info_benefits_list3') }}</li>
					<li>{{ $t('pages.careers.section_overview.info_benefits_list4') }}</li>
					<li>{{ $t('pages.careers.section_overview.info_benefits_list5') }}</li>
				</ul>
			</div>
			<div class="col sidePanel">
				<div id="JSEW-openPosHeader">
					<h5>{{ $t('pages.careers.section_overview.sideHeading_currentPositions') }}</h5>
				</div>
				<ul id="JSEW-openPositions">
					<li><i class="fa fa-caret-down"></i> {{ $t('pages.careers.section_overview.info_job_list1') }}</li>
					<li><i class="fa fa-caret-down"></i> {{ $t('pages.careers.section_overview.info_job_list2') }}</li>
					<li><i class="fa fa-caret-down"></i> {{ $t('pages.careers.section_overview.info_job_list3') }}</li>
					<li><i class="fa fa-caret-down"></i> {{ $t('pages.careers.section_overview.info_job_list4') }}</li>
					<li><i class="fa fa-caret-down"></i> {{ $t('pages.careers.section_overview.info_job_list5') }}</li>
				</ul>
			</div>
		</div>

		<div id="JSEW-bannerCareer">
			<div class="center">
				<h1 class="heading">{{ $t('pages.careers.section_banner.heading_careers') }}</h1>
				<h2 class="subHeading">{{ $t('pages.careers.section_banner.subheading_careers') }}</h2>
			</div>
		</div>

		<div id="JSEW-ourTeamMatter" class="wrapper">
			<div class="center">
				<h1 class="heading">{{ $t('pages.careers.section_careers.heading_careers') }}</h1>
				<h2 class="subHeading">{{ $t('pages.careers.section_careers.subheading_careers') }}</h2>
			</div>

			<div class="row" style="margin-top:20px;">
				<div class="col">
					<dl>
						<dt><img src="../../assets/images/about/heart.png" width="100%" alt="JSE Heart" /></dt>
						<dd>
							<h3>{{ $t('pages.careers.section_careers.highlights.heading_culture') }}</h3>

							<p>
								{{ $t('pages.careers.section_careers.highlights.para_culture') }}
							</p>
						</dd>
					</dl>

				</div>
				<div class="col">
					<dl>
						<dt><img src="../../assets/images/about/star.png" width="100%" alt="JSE Star" /></dt>
						<dd>
							<h3>{{ $t('pages.careers.section_careers.highlights.heading_benefits') }}</h3>

							<p>
								{{ $t('pages.careers.section_careers.highlights.para_benefits') }}
							</p>
						</dd>
					</dl>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<dl>
						<dt><img src="../../assets/images/about/globe.png" width="100%" alt="JSE Globe" /></dt>
						<dd>
							<h3>{{ $t('pages.careers.section_careers.highlights.heading_remoteLocations') }}</h3>

							<p>
								{{ $t('pages.careers.section_careers.highlights.para_remoteLocations') }}
							</p>
						</dd>
					</dl>

				</div>
				<div class="col">
					<dl>
						<dt><img src="../../assets/images/about/guy.png" width="100%" alt="JSE Guy" /></dt>
						<dd>
							<h3>{{ $t('pages.careers.section_careers.highlights.heading_people') }}</h3>

							<p>
								{{ $t('pages.careers.section_careers.highlights.para_people') }}
							</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>

		<div id="JSEW-questions">
			<div class="center">
				<h1 class="heading">{{ $t('pages.careers.section_questions.heading_questions') }}</h1>
				<h2 class="subHeading">{{ $t('pages.careers.section_questions.subheading_questions') }}</h2>
				<br /><br />

				<router-link class="button" v-bind:to="`/${$store.state.local}/support/contact`" tag="button">
					<i class="fa fa-heart"></i> {{ $t('pages.careers.section_questions.button_contactUs') }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'careers',
	metaInfo () {
		return {
			title: this.$t('pages.careers.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.careers.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.careers.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#JSEW-careers,
#JSEW-ourTeamMatter,
#JSEW-questions {
	padding:30px 0px;
}

#JSEW-questions {
	background:#fafafa;
}
#JSEW-bannerCareer {
	padding:30px 0px;
	background-image:url("../../assets/images/banners/happyOffice.jpg");
	background-repeat: no-repeat;
	background-position: center top;
	background-size:cover;
	min-height:500px;
	font-size:20px;
}

#JSEW-careers .col {
	max-width: inherit;
}

#JSEW-bannerCareer .heading,
#JSEW-bannerCareer .subHeading {
	color:#fff;
}

.sidePanel {
	background:#fafafa;
	color:#164677;
	border-radius: 8px;
	padding:20px;
	width:360px;
}
.sidePanel i {
	color:#227deb;
	font-size:0.8em;
}

#JSEW-openPositions {
	padding:0px;
	font-weight: bold;
}

#JSEW-openPositions li {
	list-style:none;
	margin:6px 20px;
}
p {
	padding-right:20px;
}
#JSEW-openPosHeader {
	background-image:url("../../assets/images/about/careers.png");
	background-repeat: no-repeat;
	background-size:contain;
	width:100%;
	height:140px;
	position: relative;
	display: flex;
}

#JSEW-openPosHeader h5 {
	color:#227deb;
	align-self: flex-end;
	margin:0px;
	padding:0px;
	height: 30px;
	line-height:30px;
	display: block;
	font-size:1.1em;
	margin-bottom:1px;
	font-size:16px;
	text-indent:10px;
}

#JSEW-ourTeamMatter dl {
    display: flex;
}
#JSEW-ourTeamMatter dt {
	margin: 0px 20px;
}
#JSEW-ourTeamMatter dd {
	margin:0px;
}
#JSEW-ourTeamMatter dt img {
	width:120px;
	margin-top:20px;
}

#JSEW-ourTeamMatter h3,
#JSEW-careers h3 {
	padding:0px 20px;
}

#JSEW-openPosHeader,
#JSEW-openPositions {
	width:232px;
	margin:0px auto;
}
</style>
