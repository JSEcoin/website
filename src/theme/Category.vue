<template>
	<div id="JSEW-wrapper">
		<nav id="JSEW-subHeaderNav">
			<ul class="wrapper">
				<router-link v-bind:to="`/blog/news`" tag="li" :class="{active:categories[0].name === 'News'}">
					All
				</router-link>
				<router-link v-bind:to="`/blog/announcements`" tag="li" :class="{active:categories[0].name === 'Announcements'}">
					Announcements
				</router-link>
				<router-link v-bind:to="`/blog/investors`" tag="li" :class="{active:categories[0].name === 'Investors'}">
					Investors
				</router-link>
				<router-link v-bind:to="`/blog/code`" tag="li" :class="{active:categories[0].name === 'Code'}">
					Webmasters
				</router-link>
				<router-link v-bind:to="`/blog/development`" tag="li" :class="{active:categories[0].name === 'Development'}">
					Developers
				</router-link>
			</ul>
		</nav>
		<section id="JSEW-categories">
			<div class="wrapper">
				<!--Any Heading Content for news
				<div v-if="categories && categories.length === 1 && categories[0].slug === 'news'">

				</div> -->
				<vwp-subcategory :categories="categories" ></vwp-subcategory>
			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import VwpSubcategory from '../components/vwpSubcategory';

const fetchInitialData = (store, route) => {
	route.params.page = route.params.page || 1;
	return store.dispatch('category/getCategory', {
		categorySlug: route.params.id,
		page: route.params.page,
	});
};
export default {
	name: 'ThemePageCategory',
	components: {
		'vwp-subcategory': VwpSubcategory,
	},
	computed: {
		...mapGetters('category', [
			'categories',
		]),
	},
	methods: {
		loadPosts() {
			fetchInitialData(this.$store, this.$route);
		},
	},
	watch: {
		$route (to, from) {
			this.loadPosts();
		},
	},
	prefetch: fetchInitialData,
	created() {
		this.loadPosts();
	},
};
</script>

<style>

#JSEW-categories {
	padding:30px 0px;
	background:#f9f9f9;
}

</style>
