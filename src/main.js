import Vue from 'vue'
import App from './App.vue'

import TypeNav from './components/TypeNav/TypeNav.vue'
import CarouselVue from './components/Carouousel/CarouselVue.vue'
import PaginVue from './components/pagination/PaginVue.vue'
Vue.component(TypeNav.name,TypeNav)
Vue.component(CarouselVue.name,CarouselVue)
Vue.component(PaginVue.name,PaginVue)
//测试发请求
// import {reqCategoryList} from './API/index'
// reqCategoryList(); 
import './mock/mockServe'
import 'swiper/css/swiper.min.css'

import router from './router'
import store from './store'
import * as API from '@/API'

//按需引入elementUI
import { Button,MessageBox} from 'element-ui';
Vue.component(Button.name, Button);
//另一种写法
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import VueLazyload from 'vue-lazyload'
import cat from '@/assets/cat.gif'
Vue.use(VueLazyload,{
  loading:cat
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$api=API
  },
  router,
  store,
}).$mount('#app')
