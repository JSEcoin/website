<template>
  <div class="vwp-paging">
    <div class="paging-wrapper">
      <div class="columns paging-wrapper-inner">
        <div :key="index" v-for="(item, index) in pages" class="column paging-link">
          <router-link v-if="(item != '...')"
            v-bind:class="{ 'is-active': ((page == null && item === 1) || (item === page)) }"
            :to="path + '/page/' + item + '/'">{{item}}</router-link>
          <div v-if="(item == '...')">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['totalPages', 'path'],
  data() {
    return {
      pages: [],
      neighboors: 2,
      page: 1,
    };
  },
  watch: {
    $route (to, from) {
      this.page = to.params.page;
      this.refreshPages(this.page);
    },
  },
  methods: {
    refreshPages(page) {
      if (!page) {
        page = 1;
      }
      page = parseInt(page, 10);
      this.pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        if (i === 1 || i === parseInt(this.totalPages, 10)) {
          this.pages.push(i);
        } else if ((i >= page - this.neighboors && i <= page)
          || (i >= page && i <= page + this.neighboors)) {
          this.pages.push(i);
        } else if ((i === (page - this.neighboors - 1))
          || (i === (page + this.neighboors + 1))) {
          this.pages.push('...');
        }
      }
    },
  },
  created () {
    this.page = 1;
    if (this.$route.params && this.$route.params.page) {
      this.page = this.$route.params.page;
    }
    this.refreshPages(this.page);
  },
};
</script>

<style>
.vwp-paging {
	display: block;
    border-radius: 5px 5px 3px 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #191919;
    margin: 0 20px 20px 20px;
    position: relative;
    text-align: left;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    cursor: pointer;
    overflow: hidden;
}
.paging-wrapper-inner{
	display: flex;
    padding: 18px 14px;
}
.paging-link {
	margin-right:6px;
}
.paging-link a {
    padding: 6px 12px;
    border: solid 1px #164677;
    border-radius: 3px;
}

.paging-link a:hover,
.paging-link .router-link-exact-active.router-link-active {
	background:#164677;
	color:#fff;
}
</style>
