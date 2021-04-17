import  Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)


import cart1 from '@/store/modules/cart1.js'

import path from '@/store/modules/path.js'

const store=new Vuex.Store({
	modules:{
		cart1,
		path
	}
})


export default  store