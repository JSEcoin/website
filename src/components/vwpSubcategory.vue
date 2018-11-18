<template>
	<div v-if="categories && categories.length > 0">
		<div v-for="category in categories" v-bind:key="category.id">
			<router-link :to="'/blog/' + category.slug + '/'" class="heading center" style="margin-bottom:30px;" tag="h1">
				{{category.name}}
			</router-link>
			<div class="category-posts" v-if="!category.posts || category.posts.length === 0">
				Could not find any posts?
			</div>
			<div class="category-posts category-posts-loaded">
				<div v-for="(item) in category.posts" v-bind:key="item.id">
					<vwp-post-card :post="item" :newFlag="newFlag" :categorySlug="category.slug"></vwp-post-card>
				</div>
			</div>
			<div v-if="!hidePagination">
				<vwp-paging v-if="category.totalPages > 0" :totalPages="category.totalPages" :path="'/blog/' + category.slug"></vwp-paging>
			</div>
		</div>
	</div>
</template>

<script>
import VwpPostCard from './vwpPostCard';
import VwpPaging from './vwpPaging';

export default {
	name: 'vwp-subcategory',
	components: {
		'vwp-post-card': VwpPostCard,
		'vwp-paging': VwpPaging,
	},
	props: ['hidePagination', 'newFlag', 'categories'],
};
</script>


<style>
.category-posts {
	display: flex;
    flex-wrap: wrap;
	justify-content:center;
}
</style>
