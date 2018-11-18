<template>
	<div id="JSEW-wrapper">
		<div id="JSE-blogPost">
			<div class="wrapper">
				<div class="postcard" v-if="single && single.content">
					<h1 v-html="single.title.rendered"></h1>
					<div class="single-content">
						<div class="is-pulled-left" v-if="single.tags && single.tags.length > 0">
							<span class="tag" v-for="tag in single.pure_taxonomies.tags" v-bind:key="tag.id">
								{{tag.name}}
							</span>
						</div>

						<div class="is-pulled-right single-date">{{new Date(single.date).toDateString()}}</div>

						<div class="card-content">
							<div v-html="single.content.rendered"></div>
							<p class="is-clearfix"></p>
							<div v-if="single.rest_api_enabler && single.rest_api_enabler.Link">
								<a :href="single.rest_api_enabler.Link" target="_blank">{{single.rest_api_enabler.Link}}</a>
							</div>
						</div>
					</div>
				</div>

				<!--
				<div v-show="!hideBack">
					<router-link :to="'/blog/' + single.pure_taxonomies.categories[0].slug + '/'" class="single-back button is-pulled-left">
						{{single.pure_taxonomies.categories[0].name}}
					</router-link>
				</div>-->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['single', 'hideBack'],
};
</script>

<style>
#JSE-blogPost {
	padding:30px 0px;
	background:#f9f9f9;
}
#JSE-blogPost .size-full {
	width:100% !important;
	height:auto !important;
}

.alignright {
	float: right;
}
.alignleft {
	float:left;
}
.postcard {
	display:block;
    border-radius: 5px 5px 3px 3px;
    box-sizing: border-box;
    color: #191919;
    margin: 0 20px 20px 20px;
	padding:0px 20px;
    position: relative;
    text-align: left;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    overflow: hidden;
}
</style>
