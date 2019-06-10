import Vue from 'vue';
import Vuebar from 'vuebar';
import VueMultianalytics from 'vue-multianalytics';
//import VueClipboard from 'vue-clipboard2';
import VueTransmit from 'vue-transmit';
import Meta from 'vue-meta';
//import VueQriously from 'vue-qriously';
//import VueSwal from 'vue-swal';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

// setup meta info on index.html
Vue.use(Meta);

// virtual scrollbar
Vue.use(Vuebar);

// copy
//Vue.use(VueClipboard);

Vue.use(VueMultianalytics, {
	modules: {
		ga: {
			appName: 'JSECoin_V3', // Mandatory
			appVersion: '4.0.1', // Mandatory
			trackingId: 'UA-48537439-15', // Mandatory
			//debug: true, // Whether or not display console logs debugs (optional)
		},
		//facebook: {
		//	token: '500910373434901',
			//debug: true, // Whether or not display console logs debugs (optional)
		//},
	},
	routing: {
		vueRouter: router, //  Pass the router instance to automatically sync with router (optional)
		//preferredProperty: 'name', // By default 'path' and related with vueRouter (optional)
		//ignoredViews: ['homepage'], // Views that will not be tracked
		//ignoredModules: ['ga'], // Modules that will not send route change events. The event sent will be this.$ma.trackView({viewName: 'homepage'}, ['ga'])
	},
});

// popup model
//Vue.use(VueSwal);

// file uploader
Vue.use(VueTransmit);

// QR Code Generator
//Vue.use(VueQriously);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#JSEW-website');
