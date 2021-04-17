<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;">
			<view class="scroll-row-item px-3" style="height: 80rpx; line-height: 80rpx;" v-for="(item,index) in tabBars" :key="index"
			 @click="changeTab(index)" :class="tabIndex === index ? 'main-text-color':'' ">

				<text class="font-md">{{item.name}}</text>
			</view>
		</scroll-view>


		<swiper :current="tabIndex" :style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newsitems" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
					<!-- 	<view v-for="i in 100" :key="i">{{i}}</view> -->

					<block v-for='(list,listIndex) in item.list' :key='listIndex'>

						<!-- 轮播图组件 -->
						<swiper-image v-if="list.type ==='swiper'" :resdata="swipers" />

						<template v-else-if="list.type === 'indexnavs'">
							<!-- 首页分类 -->
							<index-nav :resdata="list.data" />
							<divider />
						</template>

						<template v-else-if="list.type === 'threeAdv'">
							<!-- 三图广告 -->
							<three-adv :resdata="list.data" />
							<divider />
						</template>


						<view class="row j-sb" v-else-if="list.type === 'list'">
							<block v-for="(item2,index2) in list.data" :key="index2">
								<common-list :item="item2" :index="index2" />
							</block>
						</view>


					</block>


					<view class="uni-tab-bar-loading">
						123
					</view>


				</scroll-view>
			</swiper-item>

		</swiper>


		<!-- 轮播图组件 -->

		<!-- <swiper-image :resdata="swipers" /> -->

		<!-- 首页分类 -->

		<!-- <index-nav :resdata="indexnavs" /> -->

		<!-- 三图广告 -->
		<!-- <three-adv :resdata="threeAdv" /> -->

		<!-- 全局分割线 -->

		<!-- <divider /> -->
		<!-- 大图广告位 -->



		<!-- <card headTitle="每日精选" bodyCover="/static/images/demo/demo4.jpg"></card> -->
		<!-- 公共列表组件 750 - 5 = 745   372.5-->

		<!-- <view class="row j-sb">
			<block v-for="(item,index) in commonList" :key="index">
				<common-list :item="item" :index="index" />
			</block>
		</view>
 -->






	</view>
</template>

<script>
	// 模拟数据 


	let demoTabBars = [{
		name: '关注',
	}, {
		name: '推荐',
	}, {
		name: '体育',
	}, {
		name: '热点',
	}, {
		name: '财经',
	}, {
		name: '娱乐',
	}, {
		name: '军事',
	}, {
		name: '历史',
	}, {
		name: '本地',
	}];


	let demo1 = [{
			type: "swiper",
			data: [{
					src: "../../static/images/demo/demo4.jpg"
				},
				{
					src: "../../static/images/demo/demo4.jpg"
				},
				{
					src: "../../static/images/demo/demo4.jpg"
				}
			]
		},
		{
			type: "indexnavs",
			data: [{
					src: "/static/images/indexnav/1.png",
					text: "新品发布"
				},
				{
					src: "/static/images/indexnav/2.gif",
					text: "小米众筹"
				},
				{
					src: "/static/images/indexnav/3.gif",
					text: "以旧换新"
				},
				{
					src: "/static/images/indexnav/4.gif",
					text: "一分换团"
				},
				{
					src: "/static/images/indexnav/5.gif",
					text: "超值特卖"
				},
				{
					src: "/static/images/indexnav/6.gif",
					text: "小米秒杀"
				},
				{
					src: "/static/images/indexnav/7.gif",
					text: "真心想要"
				},
				{
					src: "/static/images/indexnav/8.gif",
					text: "电视热卖"
				},
				{
					src: "/static/images/indexnav/9.gif",
					text: "家电热卖"
				},
				{
					src: "/static/images/indexnav/10.gif",
					text: "米粉卡"
				},
			]
		}, {
			type: "threeAdv",
			data: {
				big: {
					src: "/static/images/demo/demo1.jpg"
				},
				smalltop: {
					src: "/static/images/demo/demo2.jpg"
				},
				smallbottom: {
					src: "/static/images/demo/demo2.jpg"
				},
			}
		},
		{
			type: "list",
			data: [{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				}
			]
		}
	];

	let demo2 = [{
			type: "swiper",
			data: [{
					src: "../../static/images/demo/demo4.jpg"
				},
				{
					src: "../../static/images/demo/demo4.jpg"
				},
				{
					src: "../../static/images/demo/demo4.jpg"
				}
			]
		},
		{
			type: "indexnavs",
			data: [{
					src: "/static/images/indexnav/1.png",
					text: "新品发布"
				},
				{
					src: "/static/images/indexnav/2.gif",
					text: "小米众筹"
				},
				{
					src: "/static/images/indexnav/3.gif",
					text: "以旧换新"
				},
				{
					src: "/static/images/indexnav/4.gif",
					text: "一分换团"
				},
				{
					src: "/static/images/indexnav/5.gif",
					text: "超值特卖"
				},
			]
		},
		{
			type: "list",
			data: [{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				},
				{
					cover: "/static/images/demo/list/1.jpg",
					title: "米家空调",
					desc: "1.5匹变频",
					oprice: 2699,
					pprice: 1399
				}
			]
		}
	];



	import swiperImage from "@/components/index/swiper-image.vue";
	import indexNav from "@/components/index/index-nav.vue";
	import threeAdv from "@/components/index/three-adv.vue";

	import card from "@/components/common/card.vue";

	import commonList from "@/components/common/common-list.vue";







	export default {

		components: {
			swiperImage,
			indexNav,
			threeAdv,
			card,
			commonList
		},
		data() {
			return {

				scrollH: 500,
				tabIndex: 0,
				scrollinto: "",
				tabBars: [],
				newsitems: [],




				tabBars: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '体育',
				}, {
					name: '热点',
				}, {
					name: '财经',
				}, {
					name: '娱乐',
				}, {
					name: '军事',
				}, {
					name: '历史',
				}, {
					name: '本地',
				}],

				swipers: [{
						src: "../../static/images/demo/demo4.jpg"
					},
					{
						src: "../../static/images/demo/demo4.jpg"
					},
					{
						src: "../../static/images/demo/demo4.jpg"
					}
				],


				indexnavs: [{
						src: "/static/images/indexnav/1.png",
						text: "新品发布"
					},
					{
						src: "/static/images/indexnav/2.gif",
						text: "小米众筹"
					},
					{
						src: "/static/images/indexnav/3.gif",
						text: "以旧换新"
					},
					{
						src: "/static/images/indexnav/4.gif",
						text: "一分换团"
					},
					{
						src: "/static/images/indexnav/5.gif",
						text: "超值特卖"
					},
					{
						src: "/static/images/indexnav/6.gif",
						text: "小米秒杀"
					},
					{
						src: "/static/images/indexnav/7.gif",
						text: "真心想要"
					},
					{
						src: "/static/images/indexnav/8.gif",
						text: "电视热卖"
					},
					{
						src: "/static/images/indexnav/9.gif",
						text: "家电热卖"
					},
					{
						src: "/static/images/indexnav/10.gif",
						text: "米粉卡"
					},
				],

				threeAdv: {
					big: {
						src: "/static/images/demo/demo1.jpg"
					},
					smalltop: {
						src: "/static/images/demo/demo2.jpg"
					},
					smallbottom: {
						src: "/static/images/demo/demo2.jpg"
					},
				},

				commonList: [{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						desc: "1.5匹变频",
						oprice: 2699,
						pprice: 1399
					}
				]

			}
		},


		onLoad() {
			//获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					console.log('res', res)

					this.scrollH = res.windowHeight - uni.upx2px(82)
				}
			})

			//初始化事件 
			this.__init()
		},

// 新版本 原生搜索功能实现方法 
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: "../search/search"
			})
		},




		created() {
			// 老版本 实现方法 
			// 监听点击搜索框
			// uni.onNavigationBarSearchInputClicked(() => {
			// 	uni.navigateTo({
			// 		url: '../search/search',
			// 	});
			// })





		},

		methods: {

			changeTab(index) {
				if (this.tabIndex === index) {
					return
				}
				this.tabIndex = index
				this.scrollinto = 'tab' + index

				this.addData()

			},
			//监听滑动列表
			onChangeTab(e) {
				console.log(e)
				this.changeTab(e.detail.current)
			},

			//初始化事件 
			__init() {
				// 获取顶部选项卡

				this.tabBars = demoTabBars
				// 根据顶部选项卡生成页面
				let arr = [];
				for (var i = 0; i < this.tabBars.length; i++) {
					let obj = {
						list: []
					}

					//获取首屏数据 
					if (i === 0) {
						obj.list = demo1
					}


					arr.push(obj)
				}

				this.newsitems = arr


			},

			//加载数据 
			addData() {
				//拿到当前索引
				let index = this.tabIndex
				//请求数据库 
				this.newsitems[index].list = demo2
			}



		},



	}
</script>

<style>

</style>
