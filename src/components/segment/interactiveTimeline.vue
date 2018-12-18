<template>
	<div id="JSEW-timeLineWrapper">
		<swiper :options="interactiveTimelineSwiper" ref="interactiveTimelineSwiper">
			<!-- slides -->
			<swiper-slide v-for="(n,monthIndex) in pageMonths" v-bind:key="n.text" :style="{'z-index':(monthIndex === 0)?1000:1}">
				<ul class="timeLineWrapper">
					<li :key="i" v-for="(month, i) in displayMonth(n)">

						<div class="timelineMonth">
							<i class="slideTimeline disabled fa fa-angle-left" v-if="((n === 1) && i===0)"></i>
							<i v-on:click="toSlide('interactiveTimelineSwiper',n-2)" class="slideTimeline fa fa-angle-left" v-if="((n > 1) && i===0)"></i>

							<i v-on:click="toSlide('interactiveTimelineSwiper',n)" class="slideTimeline fa fa-angle-right" v-if="i===(timeline.splitMonthsBy-1)"></i>
							{{ month }}
						</div>
						<div class="timelineTask">
							<div class="taskLabel" v-if="i===0">{{ $t('segment.interactiveTimeline.label_tasks') }}</div>
							<!--<i class="bullet fa fa-list" v-if="i===0"></i>-->
						</div>
						<div class="timelineTaskList">
							<ul class="timelineTaskListItems" v-if="((n === 1) && i===0)">
								<li :key="taskRowIndex" v-for="(taskRow,taskRowIndex) in timeline.tasks">
									<div :key="taskIndex" :class="{taskItem:task.type !== 'spacer'}" :style="{'min-width':task.duration*oneDay+'%',width:task.duration*oneDay+'%','margin-left':taskStartDate(task,taskRowIndex)+'%'}" v-for="(task,taskIndex) in timeline.tasks[taskRowIndex]">
										<span>{{ task.taskName }}</span>
									</div>
								</li>
							</ul>
							<div :key="j" v-for="(flag, j) in timeline.flags" v-if="((n === 1) && i===0)">
								<div :class="flag.className" :style="{width: (flag.name === 'TODAY')?todayPos +'%':'0%','margin-left':(flag.name !== 'TODAY')?flag.markerPos*oneDay+'%':'0%'}">
									<div class="osLabel">{{flag.name}}</div>
								</div>
							</div>
						</div>
						<div class="timelineProgress">
							<!--<div class="progressLabel" v-if="i===0">PROGRESS</div>-->
						</div>
					</li>
				</ul>
			</swiper-slide>
			<!-- Static Example -->
			<!--
			<swiper-slide>
				<ul class="timeLineWrapper">
					<li>
						<div class="timelineMonth">
							<i class="slideTimeline disabled fa fa-angle-left"></i>
							JANUARY
						</div>
						<div class="timelineTask">
							<div class="taskLabel">TASKS</div>
							<i class="bullet fa fa-list"></i>
						</div>
						<div class="timelineTaskList">

							<ul class="timelineTaskListItems">
								<li>
									<div class="taskItem" style="min-width:20%;width:20%;"><span>New Branded Identity &amp; Website</span></div>
									<div class="taskItem" style="min-width:17%;width:17%;margin-left:20%"><span>New Mining Platform</span></div>
									<div class="taskItem" style="min-width:17%;width:17%;margin-left:37%"><span>Windows/Linux/macOS Desktop App</span></div>
									<div class="taskItem" style="min-width:17%;width:17%;margin-left:55%"><span>Android Mobile App</span></div>
									<div class="taskItem" style="min-width:9%;width:9%;margin-left:71%"><span>Platform Security Review</span></div>
									<div class="taskItem" style="min-width:35%;width:35%;margin-left:84%"><span>Merchant Tools</span></div>
								</li>
								<li>
									<div class="taskItem" style="min-width:17%;width:17%;margin-left:22%"><span>Web Multilingual Support</span></div>
									<div class="taskItem" style="min-width:17%;width:17%;margin-left:39%"><span>App Multilingual Support</span></div>
									<div class="taskItem" style="min-width:17%;width:17%;margin-left:56%"><span>Mobile Multilingual Support</span></div>
								</li>
								<li>
									<div class="taskItem" style="min-width:17%;width:17%;margin-left:22%"><span>Improve DB Schema - Redis</span></div>
									<div class="taskItem" style="min-width:26%;width:26%;margin-left:39%"><span>Platform GPU Hashing Support</span></div>

								</li>
								<li>
									<div class="taskItem" style="min-width:35%;width:35%;"><span>Publisher Site Crawler</span></div>
									<div class="taskItem" style="min-width:24%;width:24%;margin-left:35%"><span>Blockchain Explorer Enhancements</span></div>
								</li>
								<li>
									<div class="taskItem" style="min-width:35%;width:35%;"><span>Solidity Contract ERC220</span></div>
									<div class="taskItem" style="min-width:35%;width:35%;margin-left:35%"><span>Web3 Client Side ICO Widget</span></div>
									<div class="taskItem" style="min-width:35%;width:35%;margin-left:70%"><span>Web3 Server Side Import/Export</span></div>
									<div class="taskItem" style="min-width:35%;width:35%;margin-left:105%"><span>Contract Security Review</span></div>
								</li>
								<li>
									<div class="taskItem" style="min-width:35%;width:35%;margin-left:34%"><span>Identicons GFX Pack</span></div>
									<div class="taskItem" style="min-width:34%;width:34%;margin-left:69%"><span>Identicons Framework</span></div>
									<div class="taskItem" style="min-width:34%;width:34%;margin-left:103%"><span>Identicons Bockchain Customiser</span></div>
								</li>
							</ul>
							<div class="todayDivider" :style="{width: todayPos+'%'}">
								<div class="todayLabel">Today</div>
							</div>
							<div class="osDivider" style="margin-left: 82%;">
								<div class="osLabel">Open-Sourcing</div>
							</div>
							<div class="launchDivider" style="margin-left: 205%;">
								<div class="icoLaunchLabel">ICO Launch</div>
							</div>
							<div class="launchDivider" style="margin-left: 225%;">
								<div class="icoLaunchLabel">Exchange Listing</div>
							</div>


						</div>
						<div class="timelineProgress">
							<div class="progressLabel">PROGRESS</div>
						</div>
					</li>
					<li>
						<div class="timelineMonth">FEBRUARY</div>
						<div class="timelineTask"></div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress"></div>
					</li>
					<li>
						<div class="timelineMonth">
							<i v-on:click="toSlide('interactiveTimelineSwiper',1)" class="slideTimeline fa fa-angle-right"></i>
							MARCH</div>
						<div class="timelineTask"></div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress"></div>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide>
				<ul class="timeLineWrapper">
					<li>
						<div class="timelineMonth">
							<i v-on:click="toSlide('interactiveTimelineSwiper',0)" class="slideTimeline fa fa-angle-left"></i>
							APRIL
						</div>
						<div class="timelineTask">
							<div class="taskLabel">TASKS</div>
						</div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress">
							<div class="progressLabel">PROGRESS</div>
						</div>
					</li>
					<li>
						<div class="timelineMonth">MAY</div>
						<div class="timelineTask"></div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress"></div>
					</li>
					<li>
						<div class="timelineMonth">
							<i v-on:click="toSlide('interactiveTimelineSwiper',2)" class="slideTimeline fa fa-angle-right"></i>
							JUNE
						</div>
						<div class="timelineTask"></div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress"></div>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide>
				<ul class="timeLineWrapper">
					<li>
						<div class="timelineMonth">
							<i v-on:click="toSlide('interactiveTimelineSwiper',1)" class="slideTimeline fa fa-angle-left"></i>
							JULY
						</div>
						<div class="timelineTask">
							<div class="taskLabel">TASKS</div>
						</div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress">
							<div class="progressLabel">PROGRESS</div>
						</div>
					</li>
					<li>
						<div class="timelineMonth">AUGUST</div>
						<div class="timelineTask"></div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress"></div>
					</li>
					<li>
						<div class="timelineMonth">
							<i v-on:click="toSlide('interactiveTimelineSwiper',3)" class="slideTimeline fa fa-angle-right"></i>
							SEPTEMBER
						</div>
						<div class="timelineTask"></div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress"></div>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide>
				<ul class="timeLineWrapper">
					<li>
						<div class="timelineMonth">
							<i v-on:click="toSlide('interactiveTimelineSwiper',2)" class="slideTimeline fa fa-angle-left"></i>
							OCTOBER
						</div>
						<div class="timelineTask">
							<div class="taskLabel">TASKS</div>
						</div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress">
							<div class="progressLabel">PROGRESS</div>
						</div>
					</li>
					<li>
						<div class="timelineMonth">NOVEMBER</div>
						<div class="timelineTask"></div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress"></div>
					</li>
					<li>
						<div class="timelineMonth">
							<i class="slideTimeline disabled fa fa-angle-right"></i>
							DECEMBER
						</div>
						<div class="timelineTask"></div>
						<div class="timelineTaskList"></div>
						<div class="timelineProgress"></div>
					</li>
				</ul>
			</swiper-slide>
			-->

		</swiper>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
	name: 'InteractiveTimeline',
	components: {
		swiper,
		swiperSlide,
	},
	data() {
		return {
			interactiveTimelineSwiper: {
				spaceBetween: 0,
			},
			pageMonths: 0, //calculates how many months to page by
			todayPos: 0, //calculated todays marker/flag position
			oneDay: 0, //one day eq how many %
			timeline: {
				months: [
					`${this.$t('segment.interactiveTimeline.month_january')} 18`,
					`${this.$t('segment.interactiveTimeline.month_february')} 18`,
					`${this.$t('segment.interactiveTimeline.month_march')} 18`,
					`${this.$t('segment.interactiveTimeline.month_april')} 18`,
					`${this.$t('segment.interactiveTimeline.month_may')} 18`,
					`${this.$t('segment.interactiveTimeline.month_june')} 18`,
					`${this.$t('segment.interactiveTimeline.month_july')} 18`,
					`${this.$t('segment.interactiveTimeline.month_august')} 18`,
					`${this.$t('segment.interactiveTimeline.month_september')} 18`,
					`${this.$t('segment.interactiveTimeline.month_october')} 18`,
					`${this.$t('segment.interactiveTimeline.month_november')} 18`,
					`${this.$t('segment.interactiveTimeline.month_december')} 18`,
					`${this.$t('segment.interactiveTimeline.month_january')} 19`,
					`${this.$t('segment.interactiveTimeline.month_february')} 19`,
					`${this.$t('segment.interactiveTimeline.month_march')} 19`,
					`${this.$t('segment.interactiveTimeline.month_april')} 19`,
					`${this.$t('segment.interactiveTimeline.month_may')} 19`,
					`${this.$t('segment.interactiveTimeline.month_june')} 19`,
					`${this.$t('segment.interactiveTimeline.month_july')} 19`,
					`${this.$t('segment.interactiveTimeline.month_august')} 19`,
					`${this.$t('segment.interactiveTimeline.month_september')} 19`,
					`${this.$t('segment.interactiveTimeline.month_october')} 19`,
					`${this.$t('segment.interactiveTimeline.month_november')} 19`,
					`${this.$t('segment.interactiveTimeline.month_december')} 19`,
				],
				splitMonthsBy: 3, //split months to display on 1 segment
				flags: [ // vertical line indicators
					{
						name: this.$t('segment.interactiveTimeline.label_today'),
						className: 'todayDivider',
					},
					/*
					{
						name: this.$t('segment.interactiveTimeline.label_os'), //name of market
						markerPos: 162, //marker position days from 1st Jan
						className: 'osDivider', //classname
					},
					{
						name: this.$t('segment.interactiveTimeline.label_icoLaunch'),
						markerPos: 190,
						className: 'osDivider',
					},
					{
						name: this.$t('segment.interactiveTimeline.label_exchangeListing'),
						markerPos: 210,
						className: 'osDivider',
					},*/
				],
				taskPosMap: 0, //used to easily calculate taskposition for loop
				tasks: [
					[
						{
							start: 0, //new row must have a start
							taskName: this.$t('segment.interactiveTimeline.task_name1'), // name of task
							duration: 30, //how many days will it take to complete
							description: '', //coming soon users can get more info by clickin on task and popup will display this info
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name1a'),
							duration: 14,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name1b'),
							duration: 4,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name2'),
							duration: 10,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name4'),
							duration: 45,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name5'),
							duration: 16,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name3'),
							duration: 40,
						},
						{
							type: 'spacer',
							taskName: '',
							duration: 5,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name6'),
							duration: 30,
						},
						{
							start: 244,
							taskName: 'Scalling Advertising',
							duration: 30,
						},
						{
							start: 350,
							taskName: 'Publisher Outreach Campaign',
							duration: 60,
						},
					],
					[
						{
							start: 75,
							taskName: 'eCommerce Integration',
							duration: 13,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name7'),
							duration: 30,
						},
						{
							start: 225,
							taskName: 'Develop Business Strategy and Key Documents',
							duration: 7,
						},
						{
							start: 285,
							taskName: 'Apply For Exchange Listing',
							duration: 30,
						},
					],
					[
						{
							start: 30,
							taskName: this.$t('segment.interactiveTimeline.task_name8'),
							duration: 10,
						},
						{
							type: 'spacer',
							taskName: '',
							duration: 106,
						},
						{
							start: 110,
							taskName: this.$t('segment.interactiveTimeline.task_name9'),
							duration: 80,
						},
						{
							type: 'spacer',
							taskName: '',
							duration: 10,
						},
						{
							type: 'spacer',
							taskName: '',
							duration: 2,
						},
						{
							start: 190,
							taskName: this.$t('segment.interactiveTimeline.task_name11'),
							duration: 90,
						},
						{
							start: 290,
							taskName: 'Post Exchange PR Strategy',
							duration: 60,
						},
					],
					[
						{
							start: 32,
							taskName: this.$t('segment.interactiveTimeline.task_name12'),
							duration: 25,
						},
						/*{
							taskName: this.$t('segment.interactiveTimeline.task_name13'),
							duration: 25,
						},*/
						{
							start: 280,
							taskName: 'Deposit / Withdraw Functionality On Platform',
							duration: 14,
						},
						{
							start: 365,
							taskName: 'Ad-Exchange Internal Release',
							duration: 90,
						},
						{
							start: 455,
							taskName: 'Security Enhancements',
							duration: 92,
						},
						{
							start: 547,
							taskName: 'Ad-Exchange Public Launch',
							duration: 92,
						},
						{
							start: 639,
							taskName: 'V2 Development',
							duration: 92,
						},
					],/*
					[
						{
							start: 0,
							taskName: this.$t('segment.interactiveTimeline.task_name14'),
							duration: 61,
						},
						{
							type: 'spacer',
							taskName: '',
							duration: 16,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name15'),
							duration: 15,
						},
					],*/
					[
						{
							start: 0,
							taskName: this.$t('segment.interactiveTimeline.task_name16'),
							duration: 45,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name17'),
							duration: 52,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name18'),
							duration: 21,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name19'),
							duration: 120,
						},
						{
							start: 240,
							taskName: 'Android App Release',
							duration: 14,
						},
						{
							start: 270,
							taskName: 'Further Automation Of Fraud Checks',
							duration: 7,
						},
						{
							start: 310,
							taskName: 'Mining Rewards, Affilite/Bounty Review',
							duration: 7,
						},
					],
					[
						{
							start: 70,
							taskName: this.$t('segment.interactiveTimeline.task_name21'),
							duration: 14,
						},
						{
							type: 'spacer',
							taskName: '',
							duration: 50,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name20'),
							duration: 14,
						},
						{
							taskName: this.$t('segment.interactiveTimeline.task_name22'),
							duration: 31,
						},
						{
							start: 254,
							taskName: 'iOS App Release',
							duration: 14,
						},
						{
							start: 320,
							taskName: 'Develop Ad-Exchange Self-Serve Platform',
							duration: 45,
						},
					],
				],
			},
		};
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		},
		swipeWrapper() {
			return this.numbers.filter(function(number) {
				return number % this.timeline.splitMonthsBy === 0;
			});
		},
	},
	mounted() {
		const daysSinceFirstJan = Math.round((new Date().setHours(23) - new Date(new Date().getYear()+1900, 0, 1, 0, 0, 0))/1000/60/60/24);

		if (window.innerWidth < 768) {
			this.timeline.splitMonthsBy = 1;
		} else if (window.innerWidth > 1400) {
			this.timeline.splitMonthsBy = 6;
		} else {
			this.timeline.splitMonthsBy = 3;
		}
		this.pageMonths = this.timeline.months.length/this.timeline.splitMonthsBy;
		//console.log(this.pageMonths);
		this.oneDay = 100/((365/12)*this.timeline.splitMonthsBy);
		this.todayPos = this.oneDay *daysSinceFirstJan;

		const d = new Date();
		const n = d.getMonth();
		//console.log(n, this.pageMonths, Math.floor((n+1) / this.timeline.splitMonthsBy));
		this.$refs.interactiveTimelineSwiper.swiper.slideTo(Math.floor((n+1) / this.timeline.splitMonthsBy), 0);
	},
	methods: {
		toSlide(swiperName, i) {
			//console.log(i,this.$refs);
			this.$refs[swiperName].swiper.slideTo(i, 400);
		},
		displayMonth(n) {
			const monthList = this.timeline.months;
			const monthsToReturn = monthList.slice((n-1)*this.timeline.splitMonthsBy,this.timeline.splitMonthsBy*n);
			return monthsToReturn;
		},
		taskStartDate(activeTask,taskRowIndex) {
			let startPos = this.taskPosMap;
			if (typeof (activeTask.start) !== 'undefined') {
				this.taskPosMap = (activeTask.start + activeTask.duration)* this.oneDay;
				startPos = activeTask.start* this.oneDay;
			} else {
				this.taskPosMap += (activeTask.duration * this.oneDay);
			}

			return startPos;
		},
	},
};
</script>

<style>
/* Your styles */

#JSEW-timeLineWrapper .swiper-container {
	padding:0px !important;
}
.timeLineWrapper {
	display: flex;
	margin:40px 0px;
	padding:0px;
}

.timeLineWrapper li {
	list-style: none;
	flex-grow: 1;
	border-right:dashed 1px #dbdbdb;
	width: 100%;
}

.timelineMonth {
	padding:10px 20px;
	min-height:40px;
	background:#fff;
	text-align:center;
}
.timelineTask {
	padding:10px 20px;
	min-height:46px;
	background:#ddf8ee;
	position: relative;
	z-index: 100000;
}
.timelineTaskList {
	/*padding:10px 20px;*/
	height:340px;
	background:#fff;
}
.timelineTaskListItems {
	position: absolute;
	z-index:10000;
	left: 0px;
	right:0px;
	margin:0px;
	padding:0px;
}
.timelineProgress {
	padding:10px 20px;
	min-height:66px;
	background:#d5f0ff;
	z-index: 100000;
}
.taskLabel {
	color:#50cca0;
}
.progressLabel {
	margin-top:18px;
	color:#5aa7d1;
}
.launchDivider,
.todayDivider,
.osDivider {
    height: 100%;
    background: rgba(246, 201, 202, 0.2);
    position: absolute;
    z-index: 1;
	border-right:solid 4px rgba(246, 201, 202, 0.2);
	height:340px;
}
.todayLabel,
.icoLaunchLabel,
.osLabel {
	background: #f2f3f3;
    border-radius: 20px;
    text-transform: uppercase;
    color: #3e4552;
    position: absolute;
    bottom: 10px;
    right: -46px;
    padding: 5px 20px;
    font-weight: bold;
    text-align: center;
    font-size: 0.8em;
	border: solid 2px #ccc;
	white-space: nowrap;
}
.bullet {
	border-radius: 100px;
    width: 40px;
    height: 40px;
    color: #fff;
    text-align: center;
	line-height:40px;
	position: absolute;
	border:solid 2px #fff;
	cursor: pointer;
}
.timelineTask .bullet {
	background:#50cca0;
}

.taskItem {
	/*background:rgba(250,95,136,0.5);*/
	width:220%;
	height:40px;
	border-radius:60px;
	margin-top:10px;
	margin-bottom:10px;
	line-height: 40px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	/*text-indent:20px;*/
}

.taskItem span {
	display:block;
	white-space: nowrap;
	margin:0px 20px;
	text-overflow: ellipsis;
	overflow: hidden;
}


.timelineTaskListItems li div:hover {
	background:rgba(250,95,136,1);
	z-index:100;
    overflow: visible;
	width: auto !important;
	box-shadow: 0px 0px 0px 4px #fff;
}

.timelineTaskListItems li div {
	background:rgba(253,211,222,0.5);
	width:10%;
	position: absolute;
    top: 0px;
	cursor: pointer;
	transition: background 0.2s, width 0.2s;
}

.timelineTaskListItems li+li div {
	width:220%;
	background:rgba(253,196,211,0.5);
}
.timelineTaskListItems li+li+li div {
	background:rgba(252,182,200,0.5);
}
.timelineTaskListItems li+li+li+li div {
	background:rgba(252,167,190,0.5);
}
.timelineTaskListItems li+li+li+li+li div {
	background:rgba(251,153,179,0.5);
}
.timelineTaskListItems li+li+li+li+li+li div {
	background:rgba(251,138,168,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li div {
	background:rgba(250,124,157,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li div {
	background:rgba(250,109,146,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li div {
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li+li div{
	background:rgba(250,95,136,0.5);
}
.timelineTaskListItems li {
    height: 46px;
    position: relative;
}
.slideTimeline {
	background:#f3f3f3;
	line-height:40px;
	width:40px;
	height: 40px;
	border-radius: 60px;
	opacity:0.5;
	transition:opacity 0.2s;
	margin-top:-10px;
}

.slideTimeline:hover {
	opacity:1;
}

.slideTimeline.disabled {
	opacity: 0.1;
	cursor: default !important;
}

.slideTimeline.fa-angle-left {
	float:left;
	cursor: pointer;
}
.slideTimeline.fa-angle-right {
	float:right;
	cursor: pointer;
}
</style>
