import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';

//redux store
import store from '@/store';
import home from '@/components/home';

Vue.use(Router);

//notFound
const notFound = () => import(/* webpackChunkName: "notFound" */ '@/components/notFound');

//home
//const home = () => import(/* webpackChunkName: "home" */ '@/components/home');

//about
const about = () => import(/* webpackChunkName: "about" */ '@/components/about');
const team = () => import(/* webpackChunkName: "about" */ '@/components/about/team');
const ourVision = () => import(/* webpackChunkName: "about" */ '@/components/about/ourVision');
//import careers = () => import(/* webpackChunkName: "about" */ '@/components/about/careers');
const press = () => import(/* webpackChunkName: "about" */ '@/components/about/press');

//contact
const community = () => import(/* webpackChunkName: "support" */ '@/components/support/community');
const contact = () => import(/* webpackChunkName: "support" */ '@/components/support/contact');
const FAQ = () => import(/* webpackChunkName: "support" */ '@/components/support/FAQ');
const qna = () => import(/* webpackChunkName: "support" */ '@/components/support/QnA');

//legal
const privacyPolicy = () => import(/* webpackChunkName: "legal" */ '@/components/legal/privacyPolicy');
const userAgreement = () => import(/* webpackChunkName: "legal" */ '@/components/legal/userAgreement');
const terms = () => import(/* webpackChunkName: "legal" */ '@/components/legal/terms');
const kycPolicy = () => import(/* webpackChunkName: "legal" */ '@/components/legal/kycPolicy');
const gdpr = () => import(/* webpackChunkName: "legal" */ '@/components/legal/gdpr');

//technical
const technicalOverview = () => import(/* webpackChunkName: "technical" */ '@/components/technical/techOverview');
const ecosystem = () => import(/* webpackChunkName: "technical" */ '@/components/technical/ecosystem');
const stats = () => import(/* webpackChunkName: "technical" */ '@/components/technical/stats');
const APIS = () => import(/* webpackChunkName: "technical" */ '@/components/technical/APIS');
const samples = () => import(/* webpackChunkName: "technical" */ '@/components/technical/samples');
const support = () => import(/* webpackChunkName: "technical" */ '@/components/technical/support');

//jobs Bug bounty
const bugBounty = () => import(/* webpackChunkName: "technical" */ '@/components/oddJobs/bugBounty');
//import smallJobs = () => import(/* webpackChunkName: "technical" */ '@/components/oddJobs/smallJobs');
const submitInfo = () => import(/* webpackChunkName: "technical" */ '@/components/oddJobs/submitInfo');

//timeline
const timeline = () => import(/* webpackChunkName: "timeline" */ '@/components/timeline');

//environment
const environment = () => import(/* webpackChunkName: "environment" */ '@/components/environment');

//charity
const charity = () => import(/* webpackChunkName: "charity" */ '@/components/charity');

//systemStatus
const systemStatus = () => import(/* webpackChunkName: "systemStatus" */ '@/components/systemStatus');

//whitelisting
//import whitelisting = () => import(/* webpackChunkName: "whitelisting" */ '@/components/whitelisting');

//downloads
const downloads = () => import(/* webpackChunkName: "downloads" */ '@/components/downloads');

//exchanges
const exchanges = () => import(/* webpackChunkName: "exchanges" */ '@/components/exchanges');

//investors
const investors = () => import(/* webpackChunkName: "investors" */ '@/components/investors/overview');

//webmasters
const webmasters = () => import(/* webpackChunkName: "webmasters" */ '@/components/webmasters/overview');
const integration = () => import(/* webpackChunkName: "webmasters" */ '@/components/webmasters/integration');

//developers
const developers = () => import(/* webpackChunkName: "developers" */ '@/components/developers/overview');

//tools
const wallet = () => import(/* webpackChunkName: "tools" */ '@/components/tools/wallet');
const merchantTools = () => import(/* webpackChunkName: "tools" */ '@/components/tools/merchantTools');
const blockchainExplorer = () => import(/* webpackChunkName: "tools" */ '@/components/tools/blockchainExplorer');

//banners
//const banner1 = () => import(/* webpackChunkName: "banners" */ '@/components/static/banners/banner1');

//const test = () => import(/* webpackChunkName: "test" */ '@/components/test');

//ICO
//import ICO = () => import(/* webpackChunkName: "ICO" */ '@/components/ICO/ICO-Page');
//import Issue = () => import(/* webpackChunkName: "ICO" */ '@/components/ICO/Issue');

//redirect
const exchangeRedirect = () => import(/* webpackChunkName: "tpl" */ '@/components/tpl/exchangeRedirect');

//blog integration
const ThemePagePage = () => import(/* webpackChunkName: "theme" */ '@/theme/Page');
const ThemePageCategory = () => import(/* webpackChunkName: "theme" */ '@/theme/Category');
const ThemePageSingle = () => import(/* webpackChunkName: "theme" */ '@/theme/Single');
//import ThemePageCategoryNewsletter = () => import(/* webpackChunkName: "theme" */ '@../theme/Category-Newsletter');
//import ThemePageCategoryLearningPaths = () => import(/* webpackChunkName: "theme" */ '@../theme/Category-LearningPaths');
//import ThemePageSingleLearningPaths = () => import(/* webpackChunkName: "theme" */ '@../theme/Single-LearningPaths');
const OfflineRedirect = () => import(/* webpackChunkName: "theme" */ '@/theme/OfflineRedirect');

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		//redirects
		{
			path: '/redirect',
			redirect: '/',
		},
		{//redirect to local/home path
			path: '/',
			component: home,
			//redirect: `/${store.state.local}/home`,
			meta: {
				linkText: 'Home',
			},
		},
		{
			path: '/home',
			component: home,
			meta: {
				linkText: 'Home',
			},
		},
		{
			path: '/ico',
			component: exchangeRedirect,
			//meta: {
			//	hideICOButton: true,
			//	linkText: '',
			//	headerBG: '/static/banners/icoLaunchpad.png',
			//	headerTitle: 'pages.ico.banner.heading', //ICO Launchpad',
			//	headerSubTitle: 'pages.ico.banner.subheading', //'Make sure you are logged in to your wallet to access the integrated purchase capabilities',
			//},
		},
		{
			path: '/ICO',
			component: exchangeRedirect,
		},
		{
			path: '/ico/issue',
			component: exchangeRedirect,
			//component: Issue,
			//meta: {
			//	linkText: '',
			//	headerBG: '/static/banners/icoLaunchpad.png',
			//	headerTitle: 'pages.Issue.banner.heading',
			//	headerSubTitle: 'pages.Issue.banner.subheading',
			//},
		},
		{
			path: '/about',
			component: about,
			meta: {
				linkText: 'pages.about.banner.linkText',
				headerBG: '/static/banners/about.jpg',
				headerTitle: 'pages.about.banner.heading',
				headerSubTitle: 'pages.about.banner.subheading',
			},
		},
		{
			path: '/about/meetTheTeam',
			component: team,
			meta: {
				linkText: 'pages.team.banner.linkText',
				headerBG: '/static/banners/team.jpg',
				headerTitle: 'pages.team.banner.heading',
				headerSubTitle: 'pages.team.banner.subheading',
			},
		},
		{
			path: '/about/ourVision',
			component: ourVision,
			meta: {
				linkText: 'pages.ourVision.banner.linkText',
				headerBG: '/static/banners/vision.jpg',
				headerTitle: 'pages.ourVision.banner.heading',
				headerSubTitle: 'pages.ourVision.banner.subheading',
			},
		},
		//{
		//	path: '/about/careers',
		//	component: careers,
		//	meta: {
		//		linkText: 'pages.careers.banner.linkText',
		//		headerBG: '/static/banners/careers.jpg',
		//		headerTitle: 'pages.careers.banner.heading',
		//		headerSubTitle: 'pages.careers.banner.subheading',
		//	},
		//},
		{
			path: '/about/press',
			component: press,
			meta: {
				linkText: 'pages.press.banner.linkText',
				headerBG: '/static/banners/press.jpg',
				headerTitle: 'pages.press.banner.heading',
				headerSubTitle: 'pages.press.banner.subheading',
			},
		},
		{
			path: '/support/contact',
			component: contact,
			meta: {
				linkText: 'pages.contact.banner.linkText',
				headerBG: '/static/banners/contact.jpg',
				headerTitle: 'pages.contact.banner.heading',
				headerSubTitle: 'pages.contact.banner.subheading',
			},
		},
		{
			path: '/support/FAQ',
			redirect: '/support',
			//component: FAQ,
			meta: {
				linkText: 'pages.FAQ.banner.linkText',
				headerBG: '/static/banners/faq.jpg',
				headerTitle: 'pages.FAQ.banner.heading',
				headerSubTitle: 'pages.FAQ.banner.subheading',
			},
		},
		{
			path: '/support',
			component: qna,
			//redirect: `/${store.state.local}/home`,
			meta: {
				linkText: 'pages.FAQ.banner.linkText',
				headerBG: '/static/banners/faq.jpg',
				headerTitle: 'pages.FAQ.banner.heading',
				headerSubTitle: 'pages.FAQ.banner.subheading',
			},
		},
		{
			path: '/support/community',
			component: community,
			meta: {
				linkText: 'pages.community.banner.linkText',
				headerBG: '/static/banners/community.jpg',
				headerTitle: 'pages.community.banner.heading',
				headerSubTitle: 'pages.community.banner.subheading',
			},
		},
		{
			path: '/legal/userAgreement',
			component: userAgreement,
			meta: {
				linkText: 'User Agreement',
				headerBG: '/static/banners/header_bg.png',
				headerTitle: 'User Agreement',
				headerSubTitle: '',
			},
		},
		{
			path: '/legal/privacyPolicy',
			component: privacyPolicy,
			meta: {
				linkText: 'pages.privacyPolicy.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.privacyPolicy.banner.heading',
				headerSubTitle: 'pages.privacyPolicy.banner.subheading',
			},
		},
		{
			path: '/legal/terms',
			component: terms,
			meta: {
				linkText: 'pages.terms.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.terms.banner.heading',
				headerSubTitle: 'pages.terms.banner.subheading',
			},
		},
		{
			path: '/legal/kycPolicy',
			component: kycPolicy,
			meta: {
				linkText: 'pages.kycPolicy.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.kycPolicy.banner.heading',
				headerSubTitle: 'pages.kycPolicy.banner.subheading',
			},
		},
		{
			path: '/legal/gdpr',
			component: gdpr,
			meta: {
				linkText: 'pages.gdpr.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.gdpr.banner.heading',
				headerSubTitle: 'pages.gdpr.banner.subheading',
			},
		},
		{
			path: '/technical/overview',
			component: technicalOverview,
			meta: {
				linkText: 'pages.techOverview.banner.linkText',
				headerBG: '/static/banners/technical.jpg',
				headerTitle: 'pages.techOverview.banner.heading',
				headerSubTitle: 'pages.techOverview.banner.subheading',
			},
		},
		{
			path: '/technical/ecosystem',
			component: ecosystem,
			meta: {
				linkText: 'pages.ecosystem.banner.linkText',
				headerBG: '/static/banners/ecosystem.jpg',
				headerTitle: 'pages.ecosystem.banner.heading',
				headerSubTitle: 'pages.ecosystem.banner.subheading',
			},
		},
		{
			path: '/technical/stats',
			component: stats,
			meta: {
				linkText: 'pages.stats.banner.linkText',
				headerBG: '/static/banners/stats.jpg',
				headerTitle: 'pages.stats.banner.heading',
				headerSubTitle: 'pages.stats.banner.subheading',
			},
		},
		{
			path: '/technical/APIS',
			component: APIS,
			meta: {
				linkText: 'pages.APIS.banner.linkText',
				headerBG: '/static/banners/api.jpg',
				headerTitle: 'pages.APIS.banner.heading',
				headerSubTitle: 'pages.APIS.banner.subheading',
			},
		},
		{
			path: '/technical/samples',
			component: samples,
			meta: {
				linkText: 'pages.samples.banner.linkText',
				headerBG: '/static/banners/samples.jpg',
				headerTitle: 'pages.samples.banner.heading',
				headerSubTitle: 'pages.samples.banner.subheading',
			},
		},
		{
			path: '/technical/support',
			component: support,
			meta: {
				linkText: 'pages.sasupportmples.banner.linkText',
				headerBG: '/static/banners/support.jpg',
				headerTitle: 'pages.support.banner.heading',
				headerSubTitle: 'pages.support.banner.subheading',
			},
		},
		{
			path: '/oddJobs/bugBounty',
			component: bugBounty,
			meta: {
				linkText: 'pages.bugBounty.banner.linkText',
				headerBG: '/static/banners/bugBounty.jpg',
				headerTitle: 'pages.bugBounty.banner.heading',
				headerSubTitle: 'pages.bugBounty.banner.subheading',
			},
		},
		//{
		//	path: '/oddJobs/smallJobs',
		//	component: smallJobs,
		//	meta: {
		//		linkText: 'pages.smallJobs.banner.linkText',
		//		headerBG: '/static/banners/oddJobs.jpg',
		//		headerTitle: 'pages.smallJobs.banner.heading',
		//		headerSubTitle: 'pages.smallJobs.banner.subheading',
		//	},
		//},
		{
			path: '/oddJobs/submitInfo',
			component: submitInfo,
			meta: {
				linkText: 'pages.submitInfo.banner.linkText',
				headerBG: '/static/banners/submitInfo.jpg',
				headerTitle: 'pages.submitInfo.banner.heading',
				headerSubTitle: 'pages.submitInfo.banner.subheading',
			},
		},
		{
			path: '/timeline',
			component: timeline,
			meta: {
				linkText: 'pages.timeline.banner.linkText',
				headerBG: '/static/banners/timeline.jpg',
				headerTitle: 'pages.timeline.banner.heading',
				headerSubTitle: 'pages.timeline.banner.subheading',
			},
		},
		{
			path: '/environment',
			component: environment,
			meta: {
				linkText: 'pages.environment.banner.linkText',
				headerBG: '/static/banners/environment.jpg',
				headerTitle: 'pages.environment.banner.heading',
				headerSubTitle: 'pages.environment.banner.subheading',
			},
		},
		{
			path: '/charity',
			component: charity,
			meta: {
				linkText: 'pages.charity.banner.linkText',
				headerBG: '/static/banners/charity.jpg',
				headerTitle: 'pages.charity.banner.heading',
				headerSubTitle: 'pages.charity.banner.subheading',
			},
		},
		{
			path: '/whitelisting',
			component: exchangeRedirect,
			//component: whitelisting,
			//meta: {
			//	linkText: 'pages.whitelisting.banner.linkText',
			//	headerBG: '/static/banners/whitelisting.jpg',
			//	headerTitle: 'pages.whitelisting.banner.heading',
			//	headerSubTitle: 'pages.whitelisting.banner.subheading',
			//},
		},
		{
			path: '/downloads',
			component: downloads,
			meta: {
				linkText: 'pages.downloads.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.downloads.banner.heading',
				headerSubTitle: 'pages.downloads.banner.subheading',
			},
		},
		{
			path: '/exchanges',
			component: exchanges,
			meta: {
				linkText: 'pages.exchanges.banner.linkText',
				headerBG: '/static/banners/exchanges2.jpg',
				headerTitle: 'pages.exchanges.banner.heading',
				headerSubTitle: 'pages.exchanges.banner.subheading',
			},
		},
		{
			path: '/systemStatus',
			component: systemStatus,
			meta: {
				linkText: 'pages.systemStatus.banner.linkText',
				headerBG: '/static/banners/systemStats.jpg',
				headerTitle: 'pages.systemStatus.banner.heading',
				headerSubTitle: 'pages.systemStatus.banner.subheading',
			},
		},
		{
			path: '/investors/overview',
			component: investors,
			meta: {
				linkText: 'pages.investorOverview.banner.linkText',
				headerBG: '/static/banners/investor.jpg',
				headerTitle: 'pages.investorOverview.banner.heading',
				headerSubTitle: 'pages.investorOverview.banner.subheading',
			},
		},
		{
			path: '/webmasters/overview',
			component: webmasters,
			meta: {
				linkText: 'pages.webmastersOverview.banner.linkText',
				headerBG: '/static/banners/webmaster.jpg',
				headerTitle: 'pages.webmastersOverview.banner.heading',
				headerSubTitle: 'pages.webmastersOverview.banner.subheading',
			},
		},
		{
			path: '/webmasters/integration',
			component: integration,
			meta: {
				linkText: 'pages.integration.banner.linkText',
				headerBG: '/static/banners/integration.jpg',
				headerTitle: 'pages.integration.banner.heading',
				headerSubTitle: 'pages.integration.banner.subheading',
			},
		},
		{
			path: '/developers/overview',
			component: developers,
			meta: {
				linkText: 'pages.developerOverview.banner.linkText',
				headerBG: '/static/banners/developer.jpg',
				headerTitle: 'pages.developerOverview.banner.heading',
				headerSubTitle: 'pages.developerOverview.banner.subheading',
			},
		},
		{
			path: '/tools/wallet',
			component: wallet,
			meta: {
				linkText: 'pages.wallet.banner.linkText',
				headerBG: '/static/banners/header_bg.png',
				headerTitle: 'pages.wallet.banner.heading',
				headerSubTitle: 'pages.wallet.banner.subheading',
			},
		},
		{
			path: '/tools/merchantTools',
			component: merchantTools,
			meta: {
				linkText: 'pages.merchantTools.banner.linkText',
				headerBG: '/static/banners/merchant.jpg',
				headerTitle: 'pages.merchantTools.banner.heading',
				headerSubTitle: 'pages.merchantTools.banner.subheading',
			},
		},
		{
			path: '/tools/blockchainExplorer',
			component: blockchainExplorer,
			meta: {
				linkText: 'pages.blockchainExplorer.banner.linkText',
				headerBG: '/static/banners/header_bg.png',
				headerTitle: 'pages.blockchainExplorer.banner.heading',
				headerSubTitle: 'pages.blockchainExplorer.banner.subheading',
			},
		},
		//{
		//	path: '/:lang/banner1',
		//	component: banner1,
		//	meta: {
		//		linkText: '',
		//		headerBG: '/static/banners/header_bg.png',
		//		//headerTitle: ':id',
		//		//headerSubTitle: 'err: Could not find page?!',
		//	},
		//},
		//{
		//	path: '/:lang/test',
		//	component: test,
		//	meta: {
		//		linkText: '',
		//		headerBG: '/static/banners/header_bg.png',
		//		//headerTitle: ':id',
		//		//headerSubTitle: 'err: Could not find page?!',
		//	},
		//},
		{
			path: '/page/:id',
			component: ThemePagePage,
			meta: {
				linkText: '',
				headerBG: '/static/banners/header_bg.png',
				//headerTitle: ':id',
				//headerSubTitle: 'err: Could not find page?!',
			},
		},
		//{ path: '/category/learning-paths', component: ThemePageCategoryLearningPaths },
		//{ path: '/category/learning-paths/:id/:page?', component: ThemePageSingleLearningPaths },
		//{ path: '/category/newsletter', component: ThemePageCategoryNewsletter },
		{
			path: '/blog/:id/page/:page',
			component: ThemePageCategory,
			meta: {
				linkText: 'Blog',
				headerBG: '/static/banners/blog-jse.jpg',
				headerTitle: 'Blog',
				//headerSubTitle: 'err: Could not find page?!',
			},
		},
		{
			path: '/blog/:categorySlug/:id',
			component: ThemePageSingle,
			meta: {
				linkText: 'Blog',
				headerBG: '/static/banners/blog-jse.jpg',
				headerTitle: 'Blog',
				//headerSubTitle: 'err: Could not find page?!',
			},
		},
		{
			path: '/blog/:id',
			component: ThemePageCategory,
			params: {
				page: 1,
			},
			meta: {
				linkText: 'Blog',
				headerBG: '/static/banners/blog-jse.jpg',
				headerTitle: 'Blog',
				//headerSubTitle: 'err: Could not find page?!',
			},
		},
		{ path: '/offline-redirect', component: OfflineRedirect },
		//{ path: '/:id', component: ThemePageSingle },
		{
			path: '*',
			component: notFound,
			meta: {
				linkText: 'pages.notFound.banner.linkText',
				headerBG: '/static/banners/header_bg.png',
				headerTitle: 'pages.notFound.banner.heading',
				headerSubTitle: 'pages.notFound.banner.subheading',
			},
		},
		{
			path: '/:lang/ico',
			component: exchangeRedirect,
			//redirect: '/:lang/exchanges',
			//meta: {
			//	hideICOButton: true,
			//	linkText: '',
			//	headerBG: '/static/banners/icoLaunchpad.png',
			//	headerTitle: 'pages.ico.banner.heading', //ICO Launchpad',
			//	headerSubTitle: 'pages.ico.banner.subheading', //'Make sure you are logged in to your wallet to access the integrated purchase capabilities',
			//},
		},
		//Add redirection on typo
		{
			path: '/:lang/ICO',
			component: exchangeRedirect,
		},
		{
			path: '/:lang/ico/issue',
			component: exchangeRedirect,
			//component: Issue,
			//meta: {
			//	linkText: '',
			//	headerBG: '/static/banners/icoLaunchpad.png',
			//	headerTitle: 'pages.ico.banner.heading',
			//	headerSubTitle: 'pages.ico.banner.subheading',
			//},
		},
		{
			path: '/:lang/home',
			component: home,
			meta: {
				linkText: 'Home',
			},
		},
		{
			path: '/:lang/about',
			component: about,
			meta: {
				linkText: 'pages.about.banner.linkText',
				headerBG: '/static/banners/about.jpg',
				headerTitle: 'pages.about.banner.heading',
				headerSubTitle: 'pages.about.banner.subheading',
			},
		},
		{
			path: '/:lang/about/meetTheTeam',
			component: team,
			meta: {
				linkText: 'pages.team.banner.linkText',
				headerBG: '/static/banners/team.jpg',
				headerTitle: 'pages.team.banner.heading',
				headerSubTitle: 'pages.team.banner.subheading',
			},
		},
		{
			path: '/:lang/about/ourVision',
			component: ourVision,
			meta: {
				linkText: 'pages.ourVision.banner.linkText',
				headerBG: '/static/banners/vision.jpg',
				headerTitle: 'pages.ourVision.banner.heading',
				headerSubTitle: 'pages.ourVision.banner.subheading',
			},
		},
		//{
		//	path: '/:lang/about/careers',
		//	component: careers,
		//	meta: {
		//		linkText: 'pages.careers.banner.linkText',
		//		headerBG: '/static/banners/careers.jpg',
		//		headerTitle: 'pages.careers.banner.heading',
		//		headerSubTitle: 'pages.careers.banner.subheading',
		//	},
		//},
		{
			path: '/:lang/about/press',
			component: press,
			meta: {
				linkText: 'pages.press.banner.linkText',
				headerBG: '/static/banners/press.jpg',
				headerTitle: 'pages.press.banner.heading',
				headerSubTitle: 'pages.press.banner.subheading',
			},
		},
		{
			path: '/:lang/support',
			component: qna,
			//redirect: `/${store.state.local}/home`,
			meta: {
				linkText: 'pages.FAQ.banner.linkText',
				headerBG: '/static/banners/faq.jpg',
				headerTitle: 'pages.FAQ.banner.heading',
				headerSubTitle: 'pages.FAQ.banner.subheading',
			},
		},
		{
			path: '/:lang/support/contact',
			component: contact,
			meta: {
				linkText: 'pages.contact.banner.linkText',
				headerBG: '/static/banners/contact.jpg',
				headerTitle: 'pages.contact.banner.heading',
				headerSubTitle: 'pages.contact.banner.subheading',
			},
		},
		{
			path: '/:lang/support/FAQ',
			redirect: '/support',
			//component: FAQ,
			meta: {
				linkText: 'pages.FAQ.banner.linkText',
				headerBG: '/static/banners/faq.jpg',
				headerTitle: 'pages.FAQ.banner.heading',
				headerSubTitle: 'pages.FAQ.banner.subheading',
			},
		},
		{
			path: '/:lang/support/community',
			component: community,
			meta: {
				linkText: 'pages.community.banner.linkText',
				headerBG: '/static/banners/community.jpg',
				headerTitle: 'pages.community.banner.heading',
				headerSubTitle: 'pages.community.banner.subheading',
			},
		},
		{
			path: '/:lang/legal/userAgreement',
			component: userAgreement,
			meta: {
				linkText: 'User Agreement',
				headerBG: '/static/banners/header_bg.png',
				headerTitle: 'User Agreement',
				headerSubTitle: '',
			},
		},
		{
			path: '/:lang/legal/privacyPolicy',
			component: privacyPolicy,
			meta: {
				linkText: 'pages.privacyPolicy.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.privacyPolicy.banner.heading',
				headerSubTitle: 'pages.privacyPolicy.banner.subheading',
			},
		},
		{
			path: '/:lang/legal/terms',
			component: terms,
			meta: {
				linkText: 'pages.terms.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.terms.banner.heading',
				headerSubTitle: 'pages.terms.banner.subheading',
			},
		},
		{
			path: '/:lang/legal/kycPolicy',
			component: kycPolicy,
			meta: {
				linkText: 'pages.kycPolicy.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.kycPolicy.banner.heading',
				headerSubTitle: 'pages.kycPolicy.banner.subheading',
			},
		},
		{
			path: '/:lang/legal/gdpr',
			component: gdpr,
			meta: {
				linkText: 'pages.gdpr.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.gdpr.banner.heading',
				headerSubTitle: 'pages.gdpr.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/overview',
			component: technicalOverview,
			meta: {
				linkText: 'pages.techOverview.banner.linkText',
				headerBG: '/static/banners/technical.jpg',
				headerTitle: 'pages.techOverview.banner.heading',
				headerSubTitle: 'pages.techOverview.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/ecosystem',
			component: ecosystem,
			meta: {
				linkText: 'pages.ecosystem.banner.linkText',
				headerBG: '/static/banners/ecosystem.jpg',
				headerTitle: 'pages.ecosystem.banner.heading',
				headerSubTitle: 'pages.ecosystem.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/stats',
			component: stats,
			meta: {
				linkText: 'pages.stats.banner.linkText',
				headerBG: '/static/banners/stats.jpg',
				headerTitle: 'pages.stats.banner.heading',
				headerSubTitle: 'pages.stats.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/APIS',
			component: APIS,
			meta: {
				linkText: 'pages.APIS.banner.linkText',
				headerBG: '/static/banners/api.jpg',
				headerTitle: 'pages.APIS.banner.heading',
				headerSubTitle: 'pages.APIS.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/samples',
			component: samples,
			meta: {
				linkText: 'pages.samples.banner.linkText',
				headerBG: '/static/banners/samples.jpg',
				headerTitle: 'pages.samples.banner.heading',
				headerSubTitle: 'pages.samples.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/support',
			component: support,
			meta: {
				linkText: 'pages.sasupportmples.banner.linkText',
				headerBG: '/static/banners/support.jpg',
				headerTitle: 'pages.support.banner.heading',
				headerSubTitle: 'pages.support.banner.subheading',
			},
		},
		{
			path: '/:lang/oddJobs/bugBounty',
			component: bugBounty,
			meta: {
				linkText: 'pages.bugBounty.banner.linkText',
				headerBG: '/static/banners/bugBounty.jpg',
				headerTitle: 'pages.bugBounty.banner.heading',
				headerSubTitle: 'pages.bugBounty.banner.subheading',
			},
		},
		//{
		//	path: '/:lang/oddJobs/smallJobs',
		//	component: smallJobs,
		//	meta: {
		//		linkText: 'pages.smallJobs.banner.linkText',
		//		headerBG: '/static/banners/oddJobs.jpg',
		//		headerTitle: 'pages.smallJobs.banner.heading',
		//		headerSubTitle: 'pages.smallJobs.banner.subheading',
		//	},
		//},
		{
			path: '/:lang/oddJobs/submitInfo',
			component: submitInfo,
			meta: {
				linkText: 'pages.submitInfo.banner.linkText',
				headerBG: '/static/banners/submitInfo.jpg',
				headerTitle: 'pages.submitInfo.banner.heading',
				headerSubTitle: 'pages.submitInfo.banner.subheading',
			},
		},
		{
			path: '/:lang/timeline',
			component: timeline,
			meta: {
				linkText: 'pages.timeline.banner.linkText',
				headerBG: '/static/banners/timeline.jpg',
				headerTitle: 'pages.timeline.banner.heading',
				headerSubTitle: 'pages.timeline.banner.subheading',
			},
		},
		{
			path: '/:lang/environment',
			component: environment,
			meta: {
				linkText: 'pages.environment.banner.linkText',
				headerBG: '/static/banners/environment.jpg',
				headerTitle: 'pages.environment.banner.heading',
				headerSubTitle: 'pages.environment.banner.subheading',
			},
		},
		{
			path: '/:lang/charity',
			component: charity,
			meta: {
				linkText: 'pages.charity.banner.linkText',
				headerBG: '/static/banners/charity.jpg',
				headerTitle: 'pages.charity.banner.heading',
				headerSubTitle: 'pages.charity.banner.subheading',
			},
		},
		{
			path: '/:lang/whitelisting',
			component: exchangeRedirect,
			//component: whitelisting,
			//meta: {
			//	linkText: 'pages.whitelisting.banner.linkText',
			//	headerBG: '/static/banners/whitelisting.jpg',
			//	headerTitle: 'pages.whitelisting.banner.heading',
			//	headerSubTitle: 'pages.whitelisting.banner.subheading',
			//},
		},
		{
			path: '/:lang/downloads',
			component: downloads,
			meta: {
				linkText: 'pages.downloads.banner.linkText',
				headerBG: '/static/banners/basic-jse.jpg',
				headerTitle: 'pages.downloads.banner.heading',
				headerSubTitle: 'pages.downloads.banner.subheading',
			},
		},
		{
			path: '/:lang/exchanges',
			component: exchanges,
			meta: {
				linkText: 'pages.exchanges.banner.linkText',
				headerBG: '/static/banners/exchanges2.jpg',
				headerTitle: 'pages.exchanges.banner.heading',
				headerSubTitle: 'pages.exchanges.banner.subheading',
			},
		},
		{
			path: '/:lang/systemStatus',
			component: systemStatus,
			meta: {
				linkText: 'pages.systemStatus.banner.linkText',
				headerBG: '/static/banners/systemStats.jpg',
				headerTitle: 'pages.systemStatus.banner.heading',
				headerSubTitle: 'pages.systemStatus.banner.subheading',
			},
		},
		{
			path: '/:lang/investors/overview',
			component: investors,
			meta: {
				linkText: 'pages.investorOverview.banner.linkText',
				headerBG: '/static/banners/investor.jpg',
				headerTitle: 'pages.investorOverview.banner.heading',
				headerSubTitle: 'pages.investorOverview.banner.subheading',
			},
		},
		{
			path: '/:lang/webmasters/overview',
			component: webmasters,
			meta: {
				linkText: 'pages.webmastersOverview.banner.linkText',
				headerBG: '/static/banners/webmaster.jpg',
				headerTitle: 'pages.webmastersOverview.banner.heading',
				headerSubTitle: 'pages.webmastersOverview.banner.subheading',
			},
		},
		{
			path: '/:lang/webmasters/integration',
			component: integration,
			meta: {
				linkText: 'pages.integration.banner.linkText',
				headerBG: '/static/banners/integration.jpg',
				headerTitle: 'pages.integration.banner.heading',
				headerSubTitle: 'pages.integration.banner.subheading',
			},
		},
		{
			path: '/:lang/developers/overview',
			component: developers,
			meta: {
				linkText: 'pages.developerOverview.banner.linkText',
				headerBG: '/static/banners/developer.jpg',
				headerTitle: 'pages.developerOverview.banner.heading',
				headerSubTitle: 'pages.developerOverview.banner.subheading',
			},
		},
		{
			path: '/:lang/tools/wallet',
			component: wallet,
			meta: {
				linkText: 'pages.wallet.banner.linkText',
				headerBG: '/static/banners/header_bg.png',
				headerTitle: 'pages.wallet.banner.heading',
				headerSubTitle: 'pages.wallet.banner.subheading',
			},
		},
		{
			path: '/:lang/tools/merchantTools',
			component: merchantTools,
			meta: {
				linkText: 'pages.merchantTools.banner.linkText',
				headerBG: '/static/banners/merchant.jpg',
				headerTitle: 'pages.merchantTools.banner.heading',
				headerSubTitle: 'pages.merchantTools.banner.subheading',
			},
		},
		{
			path: '/:lang/tools/blockchainExplorer',
			component: blockchainExplorer,
			meta: {
				linkText: 'pages.blockchainExplorer.banner.linkText',
				headerBG: '/static/banners/header_bg.png',
				headerTitle: 'pages.blockchainExplorer.banner.heading',
				headerSubTitle: 'pages.blockchainExplorer.banner.subheading',
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	//reset mobile nav settings on page transition
	store.state.showMobileNav = false;
	store.state.showLanguageOptions = false;

	//scroll top on page transition
	if (typeof (Vue.vuebar.scrollTo) !== 'undefined') {
		const bodyScroll = document.getElementById('JSEW-website');
		if (bodyScroll !== null) {
			Vue.vuebar.scrollTo(bodyScroll,0);
		}
	} else {
		//https://github.com/DominikSerafin/vuebar
		//https://github.com/DominikSerafin/vuebar/pull/20 - add scrollTo fix
		//issue with build make sure to change let to const in fix to enable build
		console.error('Polyfix gone - scrollTo');
	}

	// use the language from the routing param or default language
	let language = to.params.lang;
	if (!language) {
		language = store.state.local;
		//language = 'en';
		//store.state.local = 'en';
	}
	//check if language loaded.
	const availableLanguages = Object.keys(store.state.i18n.translations);
	if (availableLanguages.indexOf(language) === -1) {
		const url = `/static/locale/locale-${language}.json`;
		// load the specified locale from the server
		axios.get(url).then((response) => {
			//console.log(Vue.i18n, response.data);
			//store.$i18n.add(locale, response.data);
			//store.$i18n.set(locale);
			Vue.i18n.add(language, response.data);
			Vue.i18n.set(language);
			store.state.local = language;
			next();
		}).catch((error) => {
			console.error('could not fetch locale translations');
			next();
		});
	} else {
		// set the current language for vuex-i18n. note that translation data
		// for the language might need to be loaded first
		Vue.i18n.set(language);
		store.state.local = language;
		next();
	}
});

export default router;
