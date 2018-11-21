import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import translationsEn from '../assets/lang/locale-en.json';

import wordpressService from '../app.service';

Vue.use(Vuex);

const defaultState = {
	categories: [],
	paths: [],
	posts: [],
	single: {},
};

const inBrowser = typeof window !== 'undefined';

const getCategoryPosts = ({
	commit,
	state,
}, params) => new Promise((resolve, reject) => {
		wordpressService.getPosts(params.category.id, params.page, 6).then((category) => {
			params.category.posts = category.posts;
			params.category.totalPages = category.totalPages;
			resolve(params.category);
		}).catch((error) => {
			reject(new Error(error));
		});
	});

const getCategoryPromises = ({
	commit,
	state,
}, responseCategories, page) => {
	const postPromises = [];
	for (let i = 0; i < responseCategories.length; i++) {
		const responseCategory = responseCategories[i];
		const category = {
			id: responseCategory.id,
			name: responseCategory.name,
			title: responseCategory.name,
			slug: responseCategory.slug,
			better_featured_image: responseCategory.better_featured_image,
		};
		postPromises.push(getCategoryPosts({
			commit,
			state,
		}, {
			category,
			page,
		}));
	}
	return postPromises;
};


const store = new Vuex.Store({
	state: {
		auth: false,
		showMobileNav: false,
		showLanguageOptions: false,
		charity: 0,
		local: localStorage.getItem('selectedLocale') || 'en',
		availablelocals: [
			'en',
			//'ar',
			//'bg',
			//'zh',//chinese
			//'de',
			//'es',
			//'fi',
			//'fr',
			//'id',
			//'it',
			//'ja',//japanese
			//'ko',
			//'ms',
			//'nl',
			//'no',
			//'pt',
			//'ro',
			//'ru',
			//'si',
			//'se',
			//'th',
			//'tw',
		],
		localeToNative: {
			en: 'English',
			//ar: 'العربية',
			//bg: 'Български',
			//zh: '中文(简体)',
			//de: 'Deutsch',
			//es: 'Español',
			//fi: 'Suomi',
			//fr: 'Français',
			//id: 'Bahasa Indonesia',
			//it: 'Italiano',
			//ja: '日本語',
			//ko: '한국어',
			//ms: 'മലയാളം',
			//nl: 'Dansk',
			//no: 'Norsk',
			//pt: 'Português',
			//ro: 'Română',
			//ru: 'Русский',
			//si: 'Slovenščina',
			//se: 'Svenska',
			//th: 'ภาษาไทย',
			//tw: '中文(台灣)',
		},
	},
	modules: {
		i18n: vuexI18n.store,
		page: {
			namespaced: true,
			state: (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState,
			actions: {
				getPage: ({
					commit,
					state,
				}, slug) => wordpressService.getPage(null, slug).then((page) => {
						commit('PAGE_UPDATED', page);
					}).catch((error) => {
						console.log(error);
					}),
			},
			mutations: {
				PAGE_UPDATED: (state, page) => {
					state.single = page;
				},
			},
			getters: {
				single: state => state.single,
			},
		},
		category: {
			namespaced: true,
			state: (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.category : defaultState,
			actions: {
				getCategory: ({
					commit,
					state,
					dispatch,
				}, params) => {
					const self = this;
					if (!params.page) {
						params.page = 1;
					}

					if (state.categories
						&& state.categories.length > 0
						&& state.categories[0].slug === params.categorySlug
						&& state.page === params.page) {
						return false;
					}

					if (state) {
						Object.assign(state, {}, defaultState);
					}

					return new Promise((resolve, reject) => {
						wordpressService.getCategory(null, params.categorySlug, params.parentId).then((responseCategories) => {
							state.page = params.page;

							const postPromises = getCategoryPromises({
								commit,
								state,
							}, responseCategories, params.page);
							Promise.all(postPromises).then((resolveCategories) => {
								state.categories = resolveCategories;
								resolve();
							});
						}).catch((error) => {
							reject(error);
						});
					});
				},
				getPost: ({
					commit,
					state,
				}, postSlug) => {
					if (state.single
						&& state.single.slug === postSlug) {
						return false;
					}

					if (state) {
						Object.assign(state, {}, defaultState);
					}

					return wordpressService.getPost(null, postSlug).then((post) => {
						commit('POST_UPDATED', post[0]);
					}).catch((error) => {
						console.log(error);
					});
				},
			},
			mutations: {
				POST_UPDATED: (state, post) => {
					state.single = post;
				},
			},
			getters: {
				categories: state => state.categories,
				single: state => state.single,
			},
		},
		/*
		learningPaths: {
			namespaced: true,
			state: (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.learningPaths : defaultState,
			actions: {
				getFirstPost: ({
					commit,
					state,
				}, params) => new Promise((resolve, reject) => {
						wordpressService.getPosts(params.categoryId, 1, 1, 'asc').then((data) => {
							for (let j = 0; j < state.paths.length; j++) {
								if (state.paths[j].id === params.categoryId) {
									Vue.set(state.paths[j], 'firstPostSlug', '/category/learning-paths/' + state.paths[j].slug + '/' + data.posts[0].slug);
								}
							}
							resolve();
						}).catch((error) => {
							reject(new Error(error));
						});
					}),

				getPaths: ({
					commit,
					state,
				}, params) => new Promise((resolve, reject) => {
						wordpressService.getCategoryChildren(params.categoryId).then((categories) => {
							for (let j = 0; j < categories.length; j++) {
								categories[j].firstPostSlug = '';
							}
							commit('SUBCATEGORIES_UPDATED', categories);
							const postPromises = [];
							for (let i = 0; i < categories.length; i++) {
								postPromises.push(getFirstPost({
									commit,
									state,
								}, {
									categoryId: categories[i].id,
								}));
							}
							Promise.all(postPromises).then(() => {
								resolve();
							});
						}).catch((error) => {
							reject(new Error(error));
						});
					}),

				getPost: ({
					commit,
					state,
				}, params) => {
					if (typeof window !== 'undefined' && state.single && state.single.slug !== params.page) {
						state.single = {};
					}

					return new Promise((resolve, reject) => {
						let postId = state.posts[0].id;
						for (let i = 0; i < state.posts.length; i++) {
							if (state.posts[i].slug === params.page) {
								postId = state.posts[i].id;
								break;
							}
						}
						wordpressService.getPost(postId).then((postData) => {
							state.single = postData;
							resolve();
						}).catch((error) => {
							reject(new Error(error));
						});
					});
				},

				getPath: ({
					commit,
					state,
				}, params) => {
					if (typeof window !== 'undefined' && state.single && state.single.slug !== params.page) {
						state.posts = [];
						state.single = {};
					}

					return new Promise((resolve, reject) => {
						wordpressService.getCategory(null, params.categorySlug, null).then((categories) => {
							wordpressService.getPosts(categories[0].id, 1, 50, 'asc').then((data) => {
								state.posts = data.posts;
								getPost({
									commit,
									state,
								}, params).then(() => {
									resolve();
								});
							});
						}).catch((error) => {
							reject(new Error(error));
						});
					});
				},
			},
			mutations: {
				SUBCATEGORIES_UPDATED: (state, paths) => {
					state.paths = paths;
				},
			},
			getters: {
				paths: state => state.paths,
				posts: state => state.posts,
				single: state => state.single,
			},
		},*/
	},
});

Vue.use(vuexI18n.plugin, store, {
	moduleName: 'i18n',
	onTranslationNotFound(locale, key) {
		if (key === 'async.value') {
			return 'This translation is resolved synchronously as value';
		}
		if (key === 'async.promise') {
			return new Promise((resolve, reject) => {
				window.setTimeout(() => {
					resolve('This translation is resolved asynchronously');
				}, 2000);
			});
		}
		if (key !== '') {
			console.warn(`i18n: Key '${key}' not found for locale '${locale}'`);
		}
		return false;
	},
});

/*
const translationsEn = {
	test: 'test2',
	global: {
		jsecoin: 'JSEcoin',
		strapLine: '"Cryptocurrency for consumers, mined by webmasters"',
		login: 'Login',
		email: 'Email',
		register: 'Register',
		retypeEmail: 'Retype Email',
		fullName: 'Full Name',
		password: 'Password',
		forgotPassword: 'Forgot password?',
		noAccount: 'Do not have an account?',
		haveAccount: 'Already have an account?',
		createAccount: 'Create an account',
	},
	template: {
		copyright: 'Copyright',
		navigation: {
			dashboard: 'Dashboard',
			funds: 'Funds',
			transfer: 'Transfer',
			export: 'Export',
			mining: 'Mining',
			publishers: 'Publishers',
			referrals: 'Referrals',
			settings: 'Settings',
			feedback: 'Feedback',
			logOut: 'Log Out',
			logIn: 'Log In',
		},
	},
	pages: {
		login: {
			heading: 'Welcome to JSEcoin Cryptocurrency Platform',
			subHeading: 'Enter your username and password below.',
			noAccount: 'If you don`t have an account',
			registerHere: 'Register Here',
		},
		register: {
			heading: 'JSEcoin Cryptocurrency Platform',
			subHeading: 'Setup your account to start using web browser cryptocurrency mining',
		},
	},
};
const translationsRo = {};
const translationsFr = {};
const translationsDe = {};
const translationsIt = {};
const translationsPt = {};
const translationsEs = {};

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('ro', translationsRo);
Vue.i18n.add('fr', translationsFr);
Vue.i18n.add('it', translationsIt);
Vue.i18n.add('pt', translationsPt);
Vue.i18n.add('es', translationsEs);
*/

Vue.i18n.add('en', translationsEn);
// set the start locale to use
Vue.i18n.set('en');
// set english also as fallback locale
Vue.i18n.fallback('en');

export { store as default };
