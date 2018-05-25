<template>
	<div>
		<div v-if="(single && !single.content)">
			<h1>Loading...</h1>
		</div>
		<vwp-single :single="single"></vwp-single>
	</div>
</template>

<script>
import {
	mapGetters,
	mapActions,
} from 'vuex';
import VwpSingle from '../components/vwpSingle';

const fetchInitialData = (store, route) => store.dispatch('category/getPost', route.params.id);

export default {
	name: 'SingleComponent',
	components: {
		'vwp-single': VwpSingle,
	},
	computed: {
		...mapGetters([
			'routeParamId',
		]),
		...mapGetters('category', [
			'single',
		]),
	},
	methods: {
		...mapActions('category', {
			getPost: 'getPost',
		}),
		loadData() {
			fetchInitialData(this.$store, this.$route);
		},
	},
	watch: {
		$route(to, from) {
			this.loadData();
		},
	},
	prefetch: fetchInitialData,
	created() {
		this.loadData();
	},
};
</script>
