import 'es6-promise/auto';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuebar from 'vuebar';
//import VueAnalytics from 'vue-analytics';
import VueMultianalytics from 'vue-multianalytics';
import VueClipboard from 'vue-clipboard2';
import VueTransmit from 'vue-transmit';
import Meta from 'vue-meta';
import VueQriously from 'vue-qriously';
import VueSwal from 'vue-swal';


import App from './App';
import router from './router';
import store from './store';

//config type
//Vue.config.productionTip = false;
Vue.config.productionTip = process.env.NODE_ENV === 'production';

//setup meta info on index.html
Vue.use(Meta);

//virtual scrollbar
Vue.use(Vuebar);

//copy
Vue.use(VueClipboard);

//analytics tracker
/*Vue.use(VueAnalytics, {
	id: 'UA-48537439-15',
	router,
});*/
Vue.use(VueMultianalytics, {
	modules: {
		ga: {
			appName: 'JSECoin_V3', // Mandatory
			appVersion: '3.2.3', // Mandatory
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
//popup model
Vue.use(VueSwal);
//file uploader
Vue.use(VueTransmit);
//QR Code Generator
Vue.use(VueQriously);

/* eslint-disable no-new */
const app = new Vue({
	el: '#JSEW-website',
	router,
	store,
	template: '<App/>',
	components: {
		App,
	},
	data: {
		version: '3.2.3',
	},
});

//console.log('Vue V.'+Vue.version);

/** INFO */
//STATIC_PATH defined in webpack.DefinePlugin
//- /build/webpack.dev.conf.js
//- /build/webpack.prod.conf.js
