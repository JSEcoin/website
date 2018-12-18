const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

//supported language base dir
const langSupport = [
	'',
	'/en',
//	'/ar',
//	'/bg',
//	'/zh',
//	'/de',
//	'/es',
//	'/fi',
//	'/fr',
//	'/id',
//	'/it',
//	'/ja',
//	'/ko',
//	'/ms',
//	'/nl',
//	'/no',
//	'/pt',
//	'/ro',
//	'/ru',
//	'/si',
//	'/se',
//	'/th',
//	'/tw',
];

//core web pages
const coreRoutes = [
	//redirects
	'/home',
	'/about',
	'/about/meetTheTeam',
	'/about/ourVision',
	//'/about/careers',
	'/about/press',
	'/support',
	'/support/contact',
	//'/support/FAQ',
	'/support/community',
	'/legal/userAgreement',
	'/legal/privacyPolicy',
	'/legal/terms',
	'/legal/kycPolicy',
	'/technical/overview',
	'/technical/stats',
	'/technical/APIS',
	'/technical/samples',
	'/technical/support',
	'/oddJobs/bugBounty',
	'/oddJobs/smallJobs',
	'/oddJobs/submitInfo',
	'/timeline',
	'/environment',
	'/charity',
	'/exchanges',
	'/systemStatus',
	'/investors/overview',
	'/webmasters/overview',
	'/webmasters/integration',
	'/developers/overview',
	'/tools/wallet',
	'/tools/merchantTools',
	'/tools/blockchainExplorer',
	'/downloads',
	'/whitelisting',
	'/ico',
	'/ico/issue',
];

//blog pages
const blogRoutes = [
	'/blog/news',
	'/blog/news/page/1/',
	'/blog/news/page/2/',
	'/blog/news/page/3/',
	'/blog/news/page/4/',
	'/blog/news/page/5/',
	'/blog/news/page/6/',
	'/blog/news/page/7/',
	'/blog/news/page/8/',
	'/blog/news/page/9/',
	'/blog/announcements',
	'/blog/announcements/page/1/',
	'/blog/announcements/page/2/',
	'/blog/announcements/page/3/',
	'/blog/announcements/page/4/',
	'/blog/announcements/page/5/',
	'/blog/announcements/page/6/',
	'/blog/announcements/page/7/',
	'/blog/announcements/page/8/',
	'/blog/announcements/page/9/',
	'/blog/investors',
	'/blog/investors/page/1/',
	'/blog/investors/page/2/',
	'/blog/investors/page/3/',
	'/blog/investors/page/4/',
	'/blog/investors/page/5/',
	'/blog/investors/page/6/',
	'/blog/investors/page/7/',
	'/blog/investors/page/8/',
	'/blog/investors/page/9/',
	'/blog/code',
	'/blog/code/page/1/',
	'/blog/code/page/2/',
	'/blog/code/page/3/',
	'/blog/code/page/4/',
	'/blog/code/page/5/',
	'/blog/code/page/6/',
	'/blog/code/page/7/',
	'/blog/code/page/8/',
	'/blog/code/page/9/',
	'/blog/development',
	'/blog/development/page/1/',
	'/blog/development/page/2/',
	'/blog/development/page/3/',
	'/blog/development/page/4/',
	'/blog/development/page/5/',
	'/blog/development/page/6/',
	'/blog/development/page/7/',
	'/blog/development/page/8/',
	'/blog/development/page/9/',
];

const siteRoutes = ['/'];
//add local support for all routes
langSupport.forEach((lang) => {
	coreRoutes.forEach((route) => {
		siteRoutes.push(`${lang}${route}`);
	});
});
const allSiteRoutes = siteRoutes.concat(blogRoutes);

const productionPlugins = [
	new PrerenderSpaPlugin({
		staticDir: path.join(__dirname, 'dist'),
		routes: allSiteRoutes,
		minify: {
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			decodeEntities: true,
			keepClosingSlash: true,
			sortAttributes: true,
			removeComments: true,
		},
		postProcess(renderedRoute) {
			renderedRoute.html = renderedRoute.html
				.replace(/<script (.*?)>/g, '<script $1 defer>')
				.replace('id="JSEW-website"', 'id="JSEW-website" data-server-rendered="true"');

			return renderedRoute;
		},
		//renderer: new Renderer({
		renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
			//headless: false // Display the browser window when rendering. Useful for debugging.
			maxConcurrentRoutes: 4,
			timeout: 0,
			// We need to inject a value so we're able to
			// detect if the page is currently pre-rendered.
			inject: {},
			// Our view component is rendered after the API
			// request has fetched all the necessary data,
			// so we create a snapshot of the page after the
			// `data-view` attribute exists in the DOM.
			//renderAfterElementExists: '[data-view]',
		}),
	}),
];

module.exports = {
	pwa: {
		cacheId: 'JSEWebsite',
		name: 'JSECoin Ltd Official Website',
		themeColor: '#4DBA87',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',

		// configure the workbox plugin
		workboxPluginMode: 'GenerateSW',//'InjectManifest',
		workboxOptions: {
			exclude: [/\.psd$/, /\.jpg$/, /\.png$/, /\.json$/, /\.gitkeep$/, /\.svg$/, /\.html$/, /\.htm$/, /\.css$/, /\.js$/, /\.txt$/, /\.mp4$/, /\.ico$/, /\.xml$/, /\.pdf$/, /\.woff$/, /\.ttf$/, /\.woff2$/, /\.eot$/, /\.zip$/],
			// swSrc is required in InjectManifest mode.
			//swSrc: 'dev/sw.js',
			// ...other Workbox options...
		},
	},
	configureWebpack: (config) => {
		/*config.resolve = {
			alias: {
				'@': path.resolve(__dirname, 'src/'),
			},
		};*/
		if (process.env.NODE_ENV === 'production') {
			config.plugins.push(...productionPlugins);
		}
	},/*
	chainWebpack: (config) => {
		config.plugin('preload').include = ['header'];
	},*/
    /*
	chainWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			config
				.plugin('prerender-spa-plugin')
				.use(PrerenderSPAPlugin, [{
					staticDir: path.join(__dirname, 'dist'),
					routes: [
						'/',
						'/about',
					],
				}]);
		}
	},*/
    /*
	configureWebpack: {
		plugins: [
			new PrerenderSPAPlugin({
				staticDir: path.join(__dirname, 'dist'),
				//define renderer to use
				renderer: new Renderer({
					//headless: false // Display the browser window when rendering. Useful for debugging.
					maxConcurrentRoutes: 4,
					timeout: 0,
				}),
				// Optional minification.
				//https://github.com/kangax/html-minifier
				minify: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					decodeEntities: true,
					keepClosingSlash: true,
					sortAttributes: true,
					removeComments: true,
				},
				routes: allSiteRoutes,
			}),
		],
	},*/

	baseUrl: undefined,
	outputDir: undefined,
	assetsDir: 'assets',
	runtimeCompiler: undefined,
	productionSourceMap: false,
	parallel: undefined,
	css: undefined,
};
