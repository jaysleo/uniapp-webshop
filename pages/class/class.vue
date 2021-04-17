<template>
	<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing: border-box;">
		<scroll-view id="leftScroll" 
		:scroll-top="leftScrollTop"
		scroll-y="true" style="flex: 1; height: 100%;" class="border-right border-light-secondary">
			<view v-for="(item,index) in cate" :key='index' @tap='changeCate(index)' class="border-bottom border-light-secondary py-1 left-scroll-item">
				<view class="py-1 font-md text-muted  text-center" :class="activeIndex===index?'class-active' :''">

					{{item.name}}
				</view>




			</view>
		</scroll-view>
		<scroll-view scroll-y="true" style="flex: 3.5; height: 100%;" class="border-right border-light-secondary" :scroll-top="rightScrollTop"
		 :scroll-with-animation="true" @scroll="onRightScroll">
			<view class="row  right-scroll-item" v-for='(item,index) in list' :key='index'>
				<view class="span24-8 text-center py-2" v-for="(item2,index2) in item.list" :key='index2'>
					<image :src="item2.src" style="width: 120upx;height: 120upx;"></image>
					<text class="d-block">{{item2.name}}</text>
				</view>


			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 当前选中的分类
				activeIndex: 0,
				cate: [],
				list: [],
				leftDomsTop: [],
				rightDomsTop: [],
				leftScrollTop: 0,
				rightScrollTop: 0,
				
				cateItemHeight:0 //左边每个导航栏的高度
			}
		},
		methods: {

			//定义获取数据的方法
			getData() {
				for (let i = 0; i < 20; i++) {
					this.cate.push({
						name: "分类" + i
					})
					this.list.push({
						list: []
					})

				}

				for (let k = 0; k < this.list.length; k++) {
					for (let j = 0; j < 9; j++) {
						this.list[k].list.push({
							src: "/static/images/demo/cate_03.png",
							name: `分类${k}-商品${j}`
						})
					}
				}
			},

			//点击左边分类实现高亮 切换 
			changeCate(index) {
				this.activeIndex = index;
				// 右边scroll-view滚动到对应区块	
				this.rightScrollTop = this.rightDomsTop[index]

			},
			// 监听右边滚动事件
			async onRightScroll(e) {
				// console.log(e)		
				// console.log(e.detail.scrollTop)
				// 匹配当前scrollTop所处的索引
				this.rightDomsTop.forEach((v, k) => {
					let leftDOM = v;
					let nextDOM = this.rightDomsTop[k + 1];
					if (leftDOM < e.detail.scrollTop && e.detail.scrollTop < nextDOM) {
						//让左边的高亮跟随右边的滚动
						this.activeIndex = k;

					}
				})

			}




		},
		
		watch: {
			activeIndex(newValue, oldValue) {
				// alert(1)
				// 获取scroll-view高度，scrollTop
				const query = uni.createSelectorQuery().in(this);
				query.select('#leftScroll').fields({
					size: true,
					scrollOffset: true
				},data=>{
					let H=data.height;   //
					console.log('h',H)
					let ST=data.scrollTop;
					console.log("ST",ST)
					
					  // 上边
					  if(ST>this.cateItemHeight) {
						  this.leftScrollTop=this.leftDomsTop[newValue]
					  }
					   // 下边
					   
					  if ((this.leftDomsTop[newValue]+this.cateItemHeight) > (H+ST) ) {
					  				  	 return this.leftScrollTop = this.leftDomsTop[newValue]+this.cateItemHeight - H
					  				  }
					  
					  
					  
					  
					  
					  
					  
					  	
					  
					
				}).exec()
			}
		},
		onLoad() {

			// for (let i = 0; i < 20; i++) {
			// 	this.cate.push({
			// 		name: '分类' + i
			// 	})

			// 	this.list.push({
			// 		list: [
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 			{
			// 				src: "/static/images/demo/cate_03.png",
			// 				name: "商品一"
			// 			},
			// 		]
			// 	})
			// }

			this.getData()
		},

		


		onReady() {
			// const query=uni.createSelectorQuery()

			const query = uni.createSelectorQuery().in(this);
			query.selectAll('.left-scroll-item').fields({
				rect: true,
				size: true
			}, data => {
				// console.log(data)
				// this.leftDomsTop=data.map(v=>v.top)
				this.leftDomsTop = data.map(v => {


                  this.cateItemHeight = v.height

					return v.top
				})
			}).exec();


			//获取右边的dom高度 
			query.selectAll('.right-scroll-item').boundingClientRect(data => {
				this.rightDomsTop = data.map(v => {
					// console.log(v.top)
					return v.top
				})
			}).exec();
		}




	}
</script>

<style>
	.class-active {
		border-left: 8upx solid #FD6801;
		color: #FD6801 !important;
	}
</style>
