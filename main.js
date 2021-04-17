import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


import store from './store/index.js'


//引入全局 组件 

import divider  from '@/components/common/divider.vue'

Vue.component('divider',divider)
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
