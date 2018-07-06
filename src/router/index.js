import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';

//notFound
import notFound from '@/components/notFound';

//home
import home from '@/components/home';

//about
import about from '@/components/about';
import team from '@/components/about/team';
import ourVision from '@/components/about/ourVision';
import careers from '@/components/about/careers';
import press from '@/components/about/press';

//contact
import community from '@/components/support/community';
import contact from '@/components/support/contact';
import FAQ from '@/components/support/FAQ';

//legal
import privacyPolicy from '@/components/legal/privacyPolicy';
import userAgreement from '@/components/legal/userAgreement';
import terms from '@/components/legal/terms';
import kycPolicy from '@/components/legal/kycPolicy';
import gdpr from '@/components/legal/gdpr';

//technical
import technicalOverview from '@/components/technical/techOverview';
import stats from '@/components/technical/stats';
import APIS from '@/components/technical/APIS';
import samples from '@/components/technical/samples';
import support from '@/components/technical/support';

//jobs Bug bounty
import bugBounty from '@/components/oddJobs/bugBounty';
import smallJobs from '@/components/oddJobs/smallJobs';
import submitInfo from '@/components/oddJobs/submitInfo';

//timeline
import timeline from '@/components/timeline';

//environment
import environment from '@/components/environment';

//charity
import charity from '@/components/charity';

//systemStatus
import systemStatus from '@/components/systemStatus';

//whitelisting
import whitelisting from '@/components/whitelisting';

//downloads
import downloads from '@/components/downloads';

//exchanges
import exchanges from '@/components/exchanges';

//investors
import investors from '@/components/investors/overview';

//webmasters
import webmasters from '@/components/webmasters/overview';
import integration from '@/components/webmasters/integration';

//developers
import developers from '@/components/developers/overview';

//tools
import wallet from '@/components/tools/wallet';
import merchantTools from '@/components/tools/merchantTools';
import blockchainExplorer from '@/components/tools/blockchainExplorer';

//banners
import banner1 from '@/components/banners/banner1';

import test from '@/components/test';

//ICO
import ICO from '@/components/ICO/ICO-Page';

//redux store
import store from '../store';

//blog integration
import ThemePagePage from '../theme/Page';
import ThemePageCategory from '../theme/Category';
import ThemePageSingle from '../theme/Single';
//import ThemePageCategoryNewsletter from '../theme/Category-Newsletter';
//import ThemePageCategoryLearningPaths from '../theme/Category-LearningPaths';
//import ThemePageSingleLearningPaths from '../theme/Single-LearningPaths';
import OfflineRedirect from '../theme/OfflineRedirect';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		//redirects
		{
			path: '/redirect',
			redirect: '/',
		},
		/*
		{
			path: '/home',
			redirect: `/${store.state.local}/home`,
		},
		{
			path: '/about',
			redirect: `/${store.state.local}/about`,
		},
		{
			path: '/about/meetTheTeam',
			redirect: `/${store.state.local}/about/meetTheTeam`,
		},
		{
			path: '/about/ourVision',
			redirect: `/${store.state.local}/about/ourVision`,
		},
		{
			path: '/about/careers',
			redirect: `/${store.state.local}/about/careers`,
		},
		{
			path: '/about/press',
			redirect: `/${store.state.local}/about/press`,
		},
		{
			path: '/support/contact',
			redirect: `/${store.state.local}/support/contact`,
		},
		{
			path: '/support/FAQ',
			redirect: `/${store.state.local}/support/FAQ`,
		},
		{
			path: '/support/community',
			redirect: `/${store.state.local}/support/community`,
		},
		{
			path: '/legal/userAgreement',
			redirect: `/${store.state.local}/legal/userAgreement`,
		},
		{
			path: '/legal/privacyPolicy',
			redirect: `/${store.state.local}/legal/privacyPolicy`,
		},
		{
			path: '/legal/terms',
			redirect: `/${store.state.local}/legal/terms`,
		},{
			path: '/legal/kycPolicy',
			redirect: `/${store.state.local}/legal/kycPolicy`,
		},
		{
			path: '/technical/overview',
			redirect: `/${store.state.local}/technical/overview`,
		},
		{
			path: '/technical/stats',
			redirect: `/${store.state.local}/technical/stats`,
		},
		{
			path: '/technical/APIS',
			redirect: `/${store.state.local}/technical/APIS`,
		},
		{
			path: '/technical/samples',
			redirect: `/${store.state.local}/technical/sample`,
		},
		{
			path: '/technical/support',
			redirect: `/${store.state.local}/technical/support`,
		},
		{
			path: '/oddJobs/bugBounty',
			redirect: `/${store.state.local}/oddJobs/bugBounty`,
		},
		{
			path: '/oddJobs/smallJobs',
			redirect: `/${store.state.local}/oddJobs/smallJobs`,
		},
		{
			path: '/oddJobs/submitInfo',
			redirect: `/${store.state.local}/oddJobs/submitInfo`,
		},
		{
			path: '/timeline',
			redirect: `/${store.state.local}/timeline`,
		},
		{
			path: '/environment',
			redirect: `/${store.state.local}/environment`,
		},
		{
			path: '/charity',
			redirect: `/${store.state.local}/charity`,
		},
		{
			path: '/exchanges',
			redirect: `/${store.state.local}/exchanges`,
		},
		{
			path: '/systemStatus',
			redirect: `/${store.state.local}/systemStatus`,
		},
		{
			path: '/investors/overview',
			redirect: `/${store.state.local}/investors/overview`,
		},
		{
			path: '/webmasters/overview',
			redirect: `/${store.state.local}/webmasters/overview`,
		},
		{
			path: '/webmasters/integration',
			redirect: `/${store.state.local}/webmasters/integration`,
		},
		{
			path: '/developers/overview',
			redirect: `/${store.state.local}/developers/overview`,
		},
		{
			path: '/tools/wallet',
			redirect: `/${store.state.local}/tools/wallet`,
		},
		{
			path: '/tools/merchantTools',
			redirect: `/${store.state.local}/tools/merchantTools`,
		},
		{
			path: '/tools/blockchainExplorer',
			redirect: `/${store.state.local}/tools/blockchainExplorer`,
		},
		*/
		{
			path: '/ico',
			component: ICO,
			meta: {
				linkText: '',
				headerBG: '/banners/icoLaunchpad.png',
				headerTitle: 'pages.ico.banner.heading', //ICO Launchpad',
				headerSubTitle: 'pages.ico.banner.subheading', //'Make sure you are logged in to your wallet to access the integrated purchase capabilities',
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
			path: '/about',
			component: about,
			meta: {
				linkText: 'pages.about.banner.linkText',
				headerBG: '/banners/about.jpg',
				headerTitle: 'pages.about.banner.heading',
				headerSubTitle: 'pages.about.banner.subheading',
			},
		},
		{
			path: '/about/meetTheTeam',
			component: team,
			meta: {
				linkText: 'pages.team.banner.linkText',
				headerBG: '/banners/team.jpg',
				headerTitle: 'pages.team.banner.heading',
				headerSubTitle: 'pages.team.banner.subheading',
			},
		},
		{
			path: '/about/ourVision',
			component: ourVision,
			meta: {
				linkText: 'pages.ourVision.banner.linkText',
				headerBG: '/banners/vision.jpg',
				headerTitle: 'pages.ourVision.banner.heading',
				headerSubTitle: 'pages.ourVision.banner.subheading',
			},
		},
		{
			path: '/about/careers',
			component: careers,
			meta: {
				linkText: 'pages.careers.banner.linkText',
				headerBG: '/banners/careers.jpg',
				headerTitle: 'pages.careers.banner.heading',
				headerSubTitle: 'pages.careers.banner.subheading',
			},
		},
		{
			path: '/about/press',
			component: press,
			meta: {
				linkText: 'pages.press.banner.linkText',
				headerBG: '/banners/press.jpg',
				headerTitle: 'pages.press.banner.heading',
				headerSubTitle: 'pages.press.banner.subheading',
			},
		},
		{
			path: '/support/contact',
			component: contact,
			meta: {
				linkText: 'pages.contact.banner.linkText',
				headerBG: '/banners/contact.jpg',
				headerTitle: 'pages.contact.banner.heading',
				headerSubTitle: 'pages.contact.banner.subheading',
			},
		},
		{
			path: '/support/FAQ',
			component: FAQ,
			meta: {
				linkText: 'pages.FAQ.banner.linkText',
				headerBG: '/banners/faq.jpg',
				headerTitle: 'pages.FAQ.banner.heading',
				headerSubTitle: 'pages.FAQ.banner.subheading',
			},
		},
		{
			path: '/support/community',
			component: community,
			meta: {
				linkText: 'pages.community.banner.linkText',
				headerBG: '/banners/community.jpg',
				headerTitle: 'pages.community.banner.heading',
				headerSubTitle: 'pages.community.banner.subheading',
			},
		},
		{
			path: '/legal/userAgreement',
			component: userAgreement,
			meta: {
				linkText: 'User Agreement',
				headerBG: '/banners/header_bg.png',
				headerTitle: 'User Agreement',
				headerSubTitle: '',
			},
		},
		{
			path: '/legal/privacyPolicy',
			component: privacyPolicy,
			meta: {
				linkText: 'pages.privacyPolicy.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.privacyPolicy.banner.heading',
				headerSubTitle: 'pages.privacyPolicy.banner.subheading',
			},
		},
		{
			path: '/legal/terms',
			component: terms,
			meta: {
				linkText: 'pages.terms.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.terms.banner.heading',
				headerSubTitle: 'pages.terms.banner.subheading',
			},
		},
		{
			path: '/legal/kycPolicy',
			component: kycPolicy,
			meta: {
				linkText: 'pages.kycPolicy.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.kycPolicy.banner.heading',
				headerSubTitle: 'pages.kycPolicy.banner.subheading',
			},
		},
		{
			path: '/legal/gdpr',
			component: gdpr,
			meta: {
				linkText: 'pages.gdpr.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.gdpr.banner.heading',
				headerSubTitle: 'pages.gdpr.banner.subheading',
			},
		},
		{
			path: '/technical/overview',
			component: technicalOverview,
			meta: {
				linkText: 'pages.techOverview.banner.linkText',
				headerBG: '/banners/technical.jpg',
				headerTitle: 'pages.techOverview.banner.heading',
				headerSubTitle: 'pages.techOverview.banner.subheading',
			},
		},
		{
			path: '/technical/stats',
			component: stats,
			meta: {
				linkText: 'pages.stats.banner.linkText',
				headerBG: '/banners/stats.jpg',
				headerTitle: 'pages.stats.banner.heading',
				headerSubTitle: 'pages.stats.banner.subheading',
			},
		},
		{
			path: '/technical/APIS',
			component: APIS,
			meta: {
				linkText: 'pages.APIS.banner.linkText',
				headerBG: '/banners/api.jpg',
				headerTitle: 'pages.APIS.banner.heading',
				headerSubTitle: 'pages.APIS.banner.subheading',
			},
		},
		{
			path: '/technical/samples',
			component: samples,
			meta: {
				linkText: 'pages.samples.banner.linkText',
				headerBG: '/banners/samples.jpg',
				headerTitle: 'pages.samples.banner.heading',
				headerSubTitle: 'pages.samples.banner.subheading',
			},
		},
		{
			path: '/technical/support',
			component: support,
			meta: {
				linkText: 'pages.sasupportmples.banner.linkText',
				headerBG: '/banners/support.jpg',
				headerTitle: 'pages.support.banner.heading',
				headerSubTitle: 'pages.support.banner.subheading',
			},
		},
		{
			path: '/oddJobs/bugBounty',
			component: bugBounty,
			meta: {
				linkText: 'pages.bugBounty.banner.linkText',
				headerBG: '/banners/bugBounty.jpg',
				headerTitle: 'pages.bugBounty.banner.heading',
				headerSubTitle: 'pages.bugBounty.banner.subheading',
			},
		},
		{
			path: '/oddJobs/smallJobs',
			component: smallJobs,
			meta: {
				linkText: 'pages.smallJobs.banner.linkText',
				headerBG: '/banners/oddJobs.jpg',
				headerTitle: 'pages.smallJobs.banner.heading',
				headerSubTitle: 'pages.smallJobs.banner.subheading',
			},
		},
		{
			path: '/oddJobs/submitInfo',
			component: submitInfo,
			meta: {
				linkText: 'pages.submitInfo.banner.linkText',
				headerBG: '/banners/submitInfo.jpg',
				headerTitle: 'pages.submitInfo.banner.heading',
				headerSubTitle: 'pages.submitInfo.banner.subheading',
			},
		},
		{
			path: '/timeline',
			component: timeline,
			meta: {
				linkText: 'pages.timeline.banner.linkText',
				headerBG: '/banners/timeline.jpg',
				headerTitle: 'pages.timeline.banner.heading',
				headerSubTitle: 'pages.timeline.banner.subheading',
			},
		},
		{
			path: '/environment',
			component: environment,
			meta: {
				linkText: 'pages.environment.banner.linkText',
				headerBG: '/banners/environment.jpg',
				headerTitle: 'pages.environment.banner.heading',
				headerSubTitle: 'pages.environment.banner.subheading',
			},
		},
		{
			path: '/charity',
			component: charity,
			meta: {
				linkText: 'pages.charity.banner.linkText',
				headerBG: '/banners/charity.jpg',
				headerTitle: 'pages.charity.banner.heading',
				headerSubTitle: 'pages.charity.banner.subheading',
			},
		},
		{
			path: '/whitelisting',
			component: whitelisting,
			meta: {
				linkText: 'pages.whitelisting.banner.linkText',
				headerBG: '/banners/whitelisting.jpg',
				headerTitle: 'pages.whitelisting.banner.heading',
				headerSubTitle: 'pages.whitelisting.banner.subheading',
			},
		},
		{
			path: '/downloads',
			component: downloads,
			meta: {
				linkText: 'pages.downloads.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.downloads.banner.heading',
				headerSubTitle: 'pages.downloads.banner.subheading',
			},
		},
		{
			path: '/exchanges',
			component: exchanges,
			meta: {
				linkText: 'pages.exchanges.banner.linkText',
				headerBG: '/banners/exchanges2.jpg',
				headerTitle: 'pages.exchanges.banner.heading',
				headerSubTitle: 'pages.exchanges.banner.subheading',
			},
		},
		{
			path: '/systemStatus',
			component: systemStatus,
			meta: {
				linkText: 'pages.systemStatus.banner.linkText',
				headerBG: '/banners/systemStats.jpg',
				headerTitle: 'pages.systemStatus.banner.heading',
				headerSubTitle: 'pages.systemStatus.banner.subheading',
			},
		},
		{
			path: '/investors/overview',
			component: investors,
			meta: {
				linkText: 'pages.investorOverview.banner.linkText',
				headerBG: '/banners/investor.jpg',
				headerTitle: 'pages.investorOverview.banner.heading',
				headerSubTitle: 'pages.investorOverview.banner.subheading',
			},
		},
		{
			path: '/webmasters/overview',
			component: webmasters,
			meta: {
				linkText: 'pages.webmastersOverview.banner.linkText',
				headerBG: '/banners/webmaster.jpg',
				headerTitle: 'pages.webmastersOverview.banner.heading',
				headerSubTitle: 'pages.webmastersOverview.banner.subheading',
			},
		},
		{
			path: '/webmasters/integration',
			component: integration,
			meta: {
				linkText: 'pages.integration.banner.linkText',
				headerBG: '/banners/integration.jpg',
				headerTitle: 'pages.integration.banner.heading',
				headerSubTitle: 'pages.integration.banner.subheading',
			},
		},
		{
			path: '/developers/overview',
			component: developers,
			meta: {
				linkText: 'pages.developerOverview.banner.linkText',
				headerBG: '/banners/developer.jpg',
				headerTitle: 'pages.developerOverview.banner.heading',
				headerSubTitle: 'pages.developerOverview.banner.subheading',
			},
		},
		{
			path: '/tools/wallet',
			component: wallet,
			meta: {
				linkText: 'pages.wallet.banner.linkText',
				headerBG: '/banners/header_bg.png',
				headerTitle: 'pages.wallet.banner.heading',
				headerSubTitle: 'pages.wallet.banner.subheading',
			},
		},
		{
			path: '/tools/merchantTools',
			component: merchantTools,
			meta: {
				linkText: 'pages.merchantTools.banner.linkText',
				headerBG: '/banners/merchant.jpg',
				headerTitle: 'pages.merchantTools.banner.heading',
				headerSubTitle: 'pages.merchantTools.banner.subheading',
			},
		},
		{
			path: '/tools/blockchainExplorer',
			component: blockchainExplorer,
			meta: {
				linkText: 'pages.blockchainExplorer.banner.linkText',
				headerBG: '/banners/header_bg.png',
				headerTitle: 'pages.blockchainExplorer.banner.heading',
				headerSubTitle: 'pages.blockchainExplorer.banner.subheading',
			},
		},
		{
			path: '/:lang/banner1',
			component: banner1,
			meta: {
				linkText: '',
				headerBG: '/banners/header_bg.png',
				//headerTitle: ':id',
				//headerSubTitle: 'err: Could not find page?!',
			},
		},
		{
			path: '/:lang/test',
			component: test,
			meta: {
				linkText: '',
				headerBG: '/banners/header_bg.png',
				//headerTitle: ':id',
				//headerSubTitle: 'err: Could not find page?!',
			},
		},
		{
			path: '/page/:id',
			component: ThemePagePage,
			meta: {
				linkText: '',
				headerBG: '/banners/header_bg.png',
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
				headerBG: '/banners/blog-jse.jpg',
				headerTitle: 'Blog',
				//headerSubTitle: 'err: Could not find page?!',
			},
		},
		{
			path: '/blog/:categorySlug/:id',
			component: ThemePageSingle,
			meta: {
				linkText: 'Blog',
				headerBG: '/banners/blog-jse.jpg',
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
				headerBG: '/banners/blog-jse.jpg',
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
				headerBG: '/banners/header_bg.png',
				headerTitle: 'pages.notFound.banner.heading',
				headerSubTitle: 'pages.notFound.banner.subheading',
			},
		},
		{//redirect to local/home path
			path: '/',
			component: home,
			//redirect: `/${store.state.local}/home`,
			meta: {
				linkText: 'Home',
			},
		},
		/*
		{
			path: '/', //this will redirect to correct local landing page..
			component: home,
			meta: {
				linkText: 'Home',
			},
		},*/
		{
			path: '/:lang/ico',
			component: ICO,
			meta: {
				linkText: '',
				headerBG: '/banners/icoLaunchpad.png',
				headerTitle: 'pages.ico.banner.heading', //ICO Launchpad',
				headerSubTitle: 'pages.ico.banner.subheading', //'Make sure you are logged in to your wallet to access the integrated purchase capabilities',
			},
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
				headerBG: '/banners/about.jpg',
				headerTitle: 'pages.about.banner.heading',
				headerSubTitle: 'pages.about.banner.subheading',
			},
		},
		{
			path: '/:lang/about/meetTheTeam',
			component: team,
			meta: {
				linkText: 'pages.team.banner.linkText',
				headerBG: '/banners/team.jpg',
				headerTitle: 'pages.team.banner.heading',
				headerSubTitle: 'pages.team.banner.subheading',
			},
		},
		{
			path: '/:lang/about/ourVision',
			component: ourVision,
			meta: {
				linkText: 'pages.ourVision.banner.linkText',
				headerBG: '/banners/vision.jpg',
				headerTitle: 'pages.ourVision.banner.heading',
				headerSubTitle: 'pages.ourVision.banner.subheading',
			},
		},
		{
			path: '/:lang/about/careers',
			component: careers,
			meta: {
				linkText: 'pages.careers.banner.linkText',
				headerBG: '/banners/careers.jpg',
				headerTitle: 'pages.careers.banner.heading',
				headerSubTitle: 'pages.careers.banner.subheading',
			},
		},
		{
			path: '/:lang/about/press',
			component: press,
			meta: {
				linkText: 'pages.press.banner.linkText',
				headerBG: '/banners/press.jpg',
				headerTitle: 'pages.press.banner.heading',
				headerSubTitle: 'pages.press.banner.subheading',
			},
		},
		{
			path: '/:lang/support/contact',
			component: contact,
			meta: {
				linkText: 'pages.contact.banner.linkText',
				headerBG: '/banners/contact.jpg',
				headerTitle: 'pages.contact.banner.heading',
				headerSubTitle: 'pages.contact.banner.subheading',
			},
		},
		{
			path: '/:lang/support/FAQ',
			component: FAQ,
			meta: {
				linkText: 'pages.FAQ.banner.linkText',
				headerBG: '/banners/faq.jpg',
				headerTitle: 'pages.FAQ.banner.heading',
				headerSubTitle: 'pages.FAQ.banner.subheading',
			},
		},
		{
			path: '/:lang/support/community',
			component: community,
			meta: {
				linkText: 'pages.community.banner.linkText',
				headerBG: '/banners/community.jpg',
				headerTitle: 'pages.community.banner.heading',
				headerSubTitle: 'pages.community.banner.subheading',
			},
		},
		{
			path: '/:lang/legal/userAgreement',
			component: userAgreement,
			meta: {
				linkText: 'User Agreement',
				headerBG: '/banners/header_bg.png',
				headerTitle: 'User Agreement',
				headerSubTitle: '',
			},
		},
		{
			path: '/:lang/legal/privacyPolicy',
			component: privacyPolicy,
			meta: {
				linkText: 'pages.privacyPolicy.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.privacyPolicy.banner.heading',
				headerSubTitle: 'pages.privacyPolicy.banner.subheading',
			},
		},
		{
			path: '/:lang/legal/terms',
			component: terms,
			meta: {
				linkText: 'pages.terms.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.terms.banner.heading',
				headerSubTitle: 'pages.terms.banner.subheading',
			},
		},
		{
			path: '/:lang/legal/kycPolicy',
			component: kycPolicy,
			meta: {
				linkText: 'pages.kycPolicy.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.kycPolicy.banner.heading',
				headerSubTitle: 'pages.kycPolicy.banner.subheading',
			},
		},
		{
			path: '/:lang/legal/gdpr',
			component: gdpr,
			meta: {
				linkText: 'pages.gdpr.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.gdpr.banner.heading',
				headerSubTitle: 'pages.gdpr.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/overview',
			component: technicalOverview,
			meta: {
				linkText: 'pages.techOverview.banner.linkText',
				headerBG: '/banners/technical.jpg',
				headerTitle: 'pages.techOverview.banner.heading',
				headerSubTitle: 'pages.techOverview.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/stats',
			component: stats,
			meta: {
				linkText: 'pages.stats.banner.linkText',
				headerBG: '/banners/stats.jpg',
				headerTitle: 'pages.stats.banner.heading',
				headerSubTitle: 'pages.stats.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/APIS',
			component: APIS,
			meta: {
				linkText: 'pages.APIS.banner.linkText',
				headerBG: '/banners/api.jpg',
				headerTitle: 'pages.APIS.banner.heading',
				headerSubTitle: 'pages.APIS.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/samples',
			component: samples,
			meta: {
				linkText: 'pages.samples.banner.linkText',
				headerBG: '/banners/samples.jpg',
				headerTitle: 'pages.samples.banner.heading',
				headerSubTitle: 'pages.samples.banner.subheading',
			},
		},
		{
			path: '/:lang/technical/support',
			component: support,
			meta: {
				linkText: 'pages.sasupportmples.banner.linkText',
				headerBG: '/banners/support.jpg',
				headerTitle: 'pages.support.banner.heading',
				headerSubTitle: 'pages.support.banner.subheading',
			},
		},
		{
			path: '/:lang/oddJobs/bugBounty',
			component: bugBounty,
			meta: {
				linkText: 'pages.bugBounty.banner.linkText',
				headerBG: '/banners/bugBounty.jpg',
				headerTitle: 'pages.bugBounty.banner.heading',
				headerSubTitle: 'pages.bugBounty.banner.subheading',
			},
		},
		{
			path: '/:lang/oddJobs/smallJobs',
			component: smallJobs,
			meta: {
				linkText: 'pages.smallJobs.banner.linkText',
				headerBG: '/banners/oddJobs.jpg',
				headerTitle: 'pages.smallJobs.banner.heading',
				headerSubTitle: 'pages.smallJobs.banner.subheading',
			},
		},
		{
			path: '/:lang/oddJobs/submitInfo',
			component: submitInfo,
			meta: {
				linkText: 'pages.submitInfo.banner.linkText',
				headerBG: '/banners/submitInfo.jpg',
				headerTitle: 'pages.submitInfo.banner.heading',
				headerSubTitle: 'pages.submitInfo.banner.subheading',
			},
		},
		{
			path: '/:lang/timeline',
			component: timeline,
			meta: {
				linkText: 'pages.timeline.banner.linkText',
				headerBG: '/banners/timeline.jpg',
				headerTitle: 'pages.timeline.banner.heading',
				headerSubTitle: 'pages.timeline.banner.subheading',
			},
		},
		{
			path: '/:lang/environment',
			component: environment,
			meta: {
				linkText: 'pages.environment.banner.linkText',
				headerBG: '/banners/environment.jpg',
				headerTitle: 'pages.environment.banner.heading',
				headerSubTitle: 'pages.environment.banner.subheading',
			},
		},
		{
			path: '/:lang/charity',
			component: charity,
			meta: {
				linkText: 'pages.charity.banner.linkText',
				headerBG: '/banners/charity.jpg',
				headerTitle: 'pages.charity.banner.heading',
				headerSubTitle: 'pages.charity.banner.subheading',
			},
		},
		{
			path: '/:lang/whitelisting',
			component: whitelisting,
			meta: {
				linkText: 'pages.whitelisting.banner.linkText',
				headerBG: '/banners/whitelisting.jpg',
				headerTitle: 'pages.whitelisting.banner.heading',
				headerSubTitle: 'pages.whitelisting.banner.subheading',
			},
		},
		{
			path: '/:lang/downloads',
			component: downloads,
			meta: {
				linkText: 'pages.downloads.banner.linkText',
				headerBG: '/banners/basic-jse.jpg',
				headerTitle: 'pages.downloads.banner.heading',
				headerSubTitle: 'pages.downloads.banner.subheading',
			},
		},
		{
			path: '/:lang/exchanges',
			component: exchanges,
			meta: {
				linkText: 'pages.exchanges.banner.linkText',
				headerBG: '/banners/exchanges2.jpg',
				headerTitle: 'pages.exchanges.banner.heading',
				headerSubTitle: 'pages.exchanges.banner.subheading',
			},
		},
		{
			path: '/:lang/systemStatus',
			component: systemStatus,
			meta: {
				linkText: 'pages.systemStatus.banner.linkText',
				headerBG: '/banners/systemStats.jpg',
				headerTitle: 'pages.systemStatus.banner.heading',
				headerSubTitle: 'pages.systemStatus.banner.subheading',
			},
		},
		{
			path: '/:lang/investors/overview',
			component: investors,
			meta: {
				linkText: 'pages.investorOverview.banner.linkText',
				headerBG: '/banners/investor.jpg',
				headerTitle: 'pages.investorOverview.banner.heading',
				headerSubTitle: 'pages.investorOverview.banner.subheading',
			},
		},
		{
			path: '/:lang/webmasters/overview',
			component: webmasters,
			meta: {
				linkText: 'pages.webmastersOverview.banner.linkText',
				headerBG: '/banners/webmaster.jpg',
				headerTitle: 'pages.webmastersOverview.banner.heading',
				headerSubTitle: 'pages.webmastersOverview.banner.subheading',
			},
		},
		{
			path: '/:lang/webmasters/integration',
			component: integration,
			meta: {
				linkText: 'pages.integration.banner.linkText',
				headerBG: '/banners/integration.jpg',
				headerTitle: 'pages.integration.banner.heading',
				headerSubTitle: 'pages.integration.banner.subheading',
			},
		},
		{
			path: '/:lang/developers/overview',
			component: developers,
			meta: {
				linkText: 'pages.developerOverview.banner.linkText',
				headerBG: '/banners/developer.jpg',
				headerTitle: 'pages.developerOverview.banner.heading',
				headerSubTitle: 'pages.developerOverview.banner.subheading',
			},
		},
		{
			path: '/:lang/tools/wallet',
			component: wallet,
			meta: {
				linkText: 'pages.wallet.banner.linkText',
				headerBG: '/banners/header_bg.png',
				headerTitle: 'pages.wallet.banner.heading',
				headerSubTitle: 'pages.wallet.banner.subheading',
			},
		},
		{
			path: '/:lang/tools/merchantTools',
			component: merchantTools,
			meta: {
				linkText: 'pages.merchantTools.banner.linkText',
				headerBG: '/banners/merchant.jpg',
				headerTitle: 'pages.merchantTools.banner.heading',
				headerSubTitle: 'pages.merchantTools.banner.subheading',
			},
		},
		{
			path: '/:lang/tools/blockchainExplorer',
			component: blockchainExplorer,
			meta: {
				linkText: 'pages.blockchainExplorer.banner.linkText',
				headerBG: '/banners/header_bg.png',
				headerTitle: 'pages.blockchainExplorer.banner.heading',
				headerSubTitle: 'pages.blockchainExplorer.banner.subheading',
			},
		},
		{
			path: '/:lang/ico',
			component: ICO,
			meta: {
				linkText: '',
				headerBG: '/banners/header_bg.png',
				headerTitle: '',
				headerSubTitle: '',
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
		Vue.vuebar.scrollTo(bodyScroll,0);
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
