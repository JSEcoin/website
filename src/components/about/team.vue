<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/${$store.state.local}/about`" tag="li">
					{{ $t('pages.navigation.about.link_about') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/meetTheTeam`" tag="li" class="active">
					{{ $t('pages.navigation.about.link_team') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/ourVision`" tag="li">
					{{ $t('pages.navigation.about.link_vision') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/careers`" tag="li">
					{{ $t('pages.navigation.about.link_careers') }}
				</router-link>
				<router-link v-bind:to="`/${$store.state.local}/about/press`" tag="li">
					{{ $t('pages.navigation.about.link_press') }}
				</router-link>
			</ul>
		</nav>

		<div id="JSEW-theTeamOverview" class="wrapper">

			<div class="row">
				<div class="col">
					<h1 class="heading">{{ $t('pages.team.section_overview.heading_team') }}</h1>
					<h2 class="subHeading">{{ $t('pages.team.section_overview.subheading_team') }}</h2>

					<p>
						{{ $t('pages.team.section_overview.para_main1') }}
					</p>
					<p>
						<i>
							{{ $t('pages.team.section_overview.para_main2') }}
						</i>
					</p>
				</div>
				<div class="col center">
					<img src="../../assets/images/about/team.png" width="70%" style="margin-top:40px;" :alt="$t('pages.team.section_overview.alt_team')" />
				</div>
			</div>
		</div>

		<div class="hr wrapper"></div>
			
		<div id="JSE-theTeam" class="wrapper">
			<div class="row">
				<div class="col">
					<dl>
						<dt><div class="profile jim"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/james-bachini/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
								<a href="https://twitter.com/james_bachini" target="_blank"><img src="../../assets/images/ico_twitter.png" class="team-social-icon" alt="Twitter" /></a>
							</div>
							<h3>James Bachini</h3>
							<h4>{{ $t('pages.team.members.JB.title') }}</h4>
							<p>
								{{ $t('pages.team.members.JB.para_main1') }}
							</p>								
							<p>
								{{ $t('pages.team.members.JB.para_main2') }}
							</p>
							<p>
								{{ $t('pages.team.members.JB.para_main3') }}
							</p>
						</dd>
					</dl>
					
				</div>
				<div class="col">
					<dl>
						<dt><div class="profile john"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/johnrsim/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
								<a href="https://twitter.com/JRSim_UIX" target="_blank"><img src="../../assets/images/ico_twitter.png" class="team-social-icon" alt="Twitter" /></a>
							</div>
							<h3>John Sim</h3>
							<h4>{{ $t('pages.team.members.JS.title') }}</h4>

							<p>
								{{ $t('pages.team.members.JS.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.JS.para_main2') }}
							</p>
						</dd>
					</dl>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<dl>
						<dt><div class="profile dave"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/david-mallett-308b19148/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
								<a href="https://twitter.com/DavemallettJSE" target="_blank"><img src="../../assets/images/ico_twitter.png" class="team-social-icon" alt="Twitter" /></a>
							</div>
							<h3>Dave Mallett</h3>
							<h4>{{ $t('pages.team.members.DM.title') }}</h4>

							<p>
								{{ $t('pages.team.members.DM.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.DM.para_main2') }}
							</p>
						</dd>
					</dl>
					
				</div>
				<div class="col">
					<dl>
						<dt><div class="profile tracy"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/tracey-howard-12b60a163/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
							</div>
							<h3>Tracey Howard</h3>
							<h4>{{ $t('pages.team.members.TH.title') }}</h4>

							<p>
								{{ $t('pages.team.members.TH.para_main1_Line1') }}
								<br />
								{{ $t('pages.team.members.TH.para_main1_Line2') }}								
							</p>
							<p>
								{{ $t('pages.team.members.TH.para_main2') }}		
							</p>
							<p>
								{{ $t('pages.team.members.TH.para_main3') }}		
							</p>
						</dd>
					</dl>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<dl>
						<dt><div class="profile amr"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/agawish/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
								<a href="https://twitter.com/agawish" target="_blank"><img src="../../assets/images/ico_twitter.png" class="team-social-icon" alt="Twitter" /></a>
							</div>
							<h3>Amr Gawish</h3>
							<h4>{{ $t('pages.team.members.AG.title') }}</h4>

							<p>
								{{ $t('pages.team.members.AG.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.AG.para_main2') }}
							</p>
							<p>	
								{{ $t('pages.team.members.AG.para_main3') }}
							</p>
							<p>
								{{ $t('pages.team.members.AG.para_main4') }}
							</p>
						</dd>
					</dl>
					
				</div>
				<div class="col">
					<dl>
						<dt><div class="profile matthew"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/matthew-vallis-caia-a26054145/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
							</div>
							<h3>Matthew Vallis</h3>
							<h4>{{ $t('pages.team.members.MV.title') }}</h4>

							<p>
								{{ $t('pages.team.members.MV.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.MV.para_main2') }} 
							</p>
						</dd>
					</dl>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<dl>
						<dt><div class="profile jay"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/jaywestlin/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
								<a href="https://twitter.com/JayWestlin" target="_blank"><img src="../../assets/images/ico_twitter.png" class="team-social-icon" alt="Twitter" /></a>
							</div>
							<h3>Jay Westin</h3>
							<h4>{{ $t('pages.team.members.JW.title') }}</h4>

							<p v-html="$t('pages.team.members.JW.para_main1')"></p>
						</dd>
					</dl>
					
				</div>

				<div class="col">
					<dl>
						<dt><div class="profile jack"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/jack-cline-b176a411a/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
							</div>
							<h3>Jack Cline</h3>
							<h4>{{ $t('pages.team.members.JC.title') }}</h4>

							<p>
								{{ $t('pages.team.members.JC.para_main1') }}
							</p>
						</dd>
					</dl>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<dl>
						<dt><div class="profile nick"><div class="overlayHex"></div></div></dt>
						<dd>
							<h3>Nick Indelicato</h3>
							<h4>{{ $t('pages.team.members.NI.title') }}</h4>

							<p>
								{{ $t('pages.team.members.NI.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.NI.para_main2') }} 
							</p>
							<p>
								{{ $t('pages.team.members.NI.para_main3') }} 
							</p>
						</dd>
					</dl>
				</div>

				<div class="col">
					<dl>
						<dt><div class="profile alex"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/alexandrasim/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
							</div>
							<h3>Alexandra Sim - MCIPD</h3>
							<h4>{{ $t('pages.team.members.AS.title') }}</h4>

							<p>
								{{ $t('pages.team.members.AS.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.AS.para_main2') }}
							</p>
						</dd>
					</dl>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<dl>
						<dt><div class="profile ollie"><div class="overlayHex"></div></div></dt>
						<dd>
							<h3>Oliver Bachini</h3>
							<h4>{{ $t('pages.team.members.OB.title') }}</h4>

							<p>
								{{ $t('pages.team.members.OB.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.OB.para_main2') }}
							</p>
						</dd>
					</dl>
				</div>

				<div class="col">
					<dl>
						<dt><div class="profile angelo"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/angelo-santagata-a64344/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
								<a href="https://twitter.com/angelosantagata" target="_blank"><img src="../../assets/images/ico_twitter.png" class="team-social-icon" alt="Twitter" /></a>
							</div>
							<h3>Angelo Santagata</h3>
							<h4>
								{{ $t('pages.team.members.ASa.title') }}
								<h5>{{ $t('pages.team.members.ASa.subTitle') }}</h5>
							</h4>
							
							<p>
								{{ $t('pages.team.members.ASa.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.ASa.para_main2') }}
							</p>
						</dd>
					</dl>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<dl>
						<dt><div class="profile andy"><div class="overlayHex"></div></div></dt>
						<dd>
							<div class="team-social-icons">
								<a href="https://www.linkedin.com/in/andyweaver/" target="_blank"><img src="../../assets/images/ico_linkedin.png" class="team-social-icon" alt="Linkedin" /></a>
							</div>
							<h3>Andy Weaver</h3>
							<h4>{{ $t('pages.team.members.AW.title') }}</h4>

							<p>
								{{ $t('pages.team.members.AW.para_main1') }}
							</p>
							<p>
								{{ $t('pages.team.members.AW.para_main2') }} 
							</p>
							<p>
								{{ $t('pages.team.members.AW.para_main3') }}
							</p>
							<p>
								{{ $t('pages.team.members.AW.para_main4') }}
							</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		
		<div class="hr wrapper"></div>

	</div>
</template>

<script>
export default {
	name: 'team',
	metaInfo () {
		return {
			title: this.$t('pages.team.meta.title'),
			meta: [
				{
					vmid: 'description',
					name: 'description',
					content: this.$t('pages.team.meta.description'),
				},
				{
					vmid: 'keywords',
					name: 'keywords',
					content: this.$t('pages.team.meta.keywords'),
				},
			],
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>	
#JSEW-theTeamOverview {
	padding:30px 0px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

#JSEW-theTeamOverview .col {
    flex-grow: 1;
	position: relative;
	max-width:inherit;
	width:100%;
}
#JSEW-theTeamOverview .col2 {
    flex-grow: 2;
    max-width: 500px;
	width:100%;
    position: relative;
}

#JSE-theTeam .col {
	max-width:500px;
}

#JSE-theTeam .profile {
	width:100px;
	height: 100px;
	background-size:73px;
}
#JSE-theTeam .overlayHex {
	width: 100px;
	height: 100px;
	background-size: 89px;
}


#JSE-theTeam dl {
	display:flex;
}
#JSE-theTeam dt {
	margin:0px 0px 0px 20px;
}
#JSE-theTeam dd {
	margin:0px;
}

#JSE-theTeam h3 {
	margin-bottom:0px;
	padding:0px 20px;
}
#JSE-theTeam h4 {
	color:#2b6aa7;
	margin:0px 0px 20px 0px;
	padding:0px 20px;
}
#JSE-theTeam h5 {
	color:#2b6aa7;
	margin:0px 0px 20px 0px;
}
.team-social-icons {
	float: right;
	margin-right: 40px;
	margin-top: 22px;
}
.team-social-icon {
	height: 40px;
	width: 40px;
}
</style>
