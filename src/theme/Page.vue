<template>
  <div class="vwp-single">
    <div v-if="!single || (single && !single.content)">
      <h1>Loading Page...</h1>
      <div class="single-content card fake-single-content"></div>
    </div>
    <div v-if="single && single.content">
      <h1 v-html="single.title.rendered"></h1>
      <div class="single-content card" v-html="single.content.rendered"></div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const fetchInitialData = (store, route) => store.dispatch('page/getPage', route.params.id);
export default {
  computed: {
    ...mapGetters('page', [
      'single',
    ]),
  },
  methods: {
    ...mapActions('page', {
      getPage: 'getPage',
    }),
    loadData () {
      fetchInitialData(this.$store, this.$route);
    },
  },
  watch: {
    $route: (to, from) => {
      this.loadData();
    },
  },
  prefetch: fetchInitialData,
  created () {
    this.loadData();
  },
};
</script>

<style>
</style>
