import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(ElementUI);

Vue.use(Vuex)

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this//安装全局事件总线 this为当前的vm
  },
})
