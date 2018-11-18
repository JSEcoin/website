<template>
  <div class="basicToggle" :class="{active:toggleItem}" v-on:click="toggle()">
	  <slot></slot>
  </div>
</template>

<script>
export default {
	name: 'basicToggle',
	data() {
		return {
			toggleItem: false,
		};
	},
	methods: {
		toggle () {
			this.toggleItem = !this.toggleItem;
		},
	},
};
</script>

<style>
/* Your styles */
</style>
