<template>

    <!--
    <router-link :to="'/' + post.slug + '/'" target="_blank" tag="a" :class="{'vwp-post-card': true, 'card':true, 'new':isNew(post.date)}">
    -->
    <a :href="'/' + post.slug + '/'" target="_blank" class="vwp-post-card card">
      <div class="card-image">
        <figure class="image" v-if="post.better_featured_image && post.better_featured_image.media_details.sizes.medium">
          <img v-bind:alt="post.better_featured_image.description"
              v-bind:src="cdnUrl(post.better_featured_image.media_details.sizes.medium.source_url)"
             slot="image">
            <div slot="placeholder">
              <!--...-->
            </div>
        </figure>
      </div>
      <div class="card-content" v-if="post && post.title">
        <div class="content">
          <div v-if="isNew(post.date)" class="is-new">new</div>
          <div class="post-title">
            <div v-if="post.slug && categorySlug">
              <a v-on:click="gotoPost(post)">
                <span v-html="post.title.rendered"></span><br />
         		 <small>{{new Date(post.date).toDateString()}}</small>
              </a>
            </div>
          </div>
          <p class="is-clearfix"></p>
          <div v-html="post.excerpt.rendered"></div>
          <span v-for="tag in post.tags" v-bind:key="tag.id">>#{{tag}}</span>
        </div>
      </div>
	  <footer class="card-footer">
	  	<div class="card-footer-item">Read More</div>
	  </footer>
  </a>
	<!--
  </router-link>
  -->
</template>

<script>
import Config from '../app.config';

export default {
  name: 'vwp-post-card',
  props: ['post', 'categorySlug', 'newFlag'],
  methods: {
    gotoPost (post) {
      if (this.categorySlug && post && post.slug) {
        //this.$router.push({ path: '/category/' + this.categorySlug + '/' + post.slug });
      }
    },
    cdnUrl (url) {
      return url.replace('https://api.fullstackweekly.com/', Config.wpDomain);
    },
    isNew (postDateStr) {
      const postDate = new Date(postDateStr);
      postDate.setDate(postDate.getDate() + 6);
      // If new flag is set and it is posted in the last 6 days
      return (this.newFlag && postDate.getTime() - (new Date().getTime()) > 0);
    },
  },
};
</script>

<style>
.card {
	display:block;
    border-radius: 5px 5px 3px 3px;
    box-sizing: border-box;
    color: #191919;
    margin: 0 10px 20px 10px;
    position: relative;
    text-align: left;
    width: 292px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    cursor: pointer;
    overflow: hidden;
}
figure.image {
	margin:0px;
	filter: brightness(100%);
    transition: filter 500ms ease-in-out;
}

figure.image img {
/*border-bottom: solid 16px #fafafa;*/
}

.card:hover figure.image {
    filter: brightness(80%);
}
.post-title span {
	font-weight: bold;
	color:#164677;
}
.card:hover .post-title span {
	text-decoration: underline;
}

.post-title {
	margin:10px 20px;
}
.button.small.blue {
	display:none;
}
footer.card-footer {
	display: block;
	background:#fff;
	padding:0px 10px;
}

.card:hover .card-footer-item {
	color:#191919;
}
.card-footer-item {
	text-align:center;
	border-top:1px solid #f2f2f2;
    padding:10px;
	color:dimgray;
	font-size:0.9em;
}
</style>
