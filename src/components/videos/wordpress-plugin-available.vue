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
				<!--<router-link v-bind:to="`/${$store.state.local}/about/careers`" tag="li" class="active">
					{{ $t('pages.navigation.about.link_careers') }}
				</router-link>-->
				<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="li">
					{{ $t('pages.navigation.about.link_press') }}
				</router-link>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'wordpress',
	metaInfo () {
		return {
			title: this.$t('pages.wordpress.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.wordpress.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.wordpress.meta.keywords'),
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
	height:160px;
	position: relative;
}

#JSEW-openPosHeader h5 {
	margin:0px;
	padding:0px;
	display: block;
	position:absolute;
	bottom:10px;
	left: 10px;
	right:10px;
	font-size: 1.1em;
	color:#227deb;
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
</style>
