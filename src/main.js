// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import store from "@/vuex/store";
import '../config/rem';  //根据屏幕大小设置字体大小,比较适用于移动端, 尝试功能,试着玩的
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueQuillEditor);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,    //路由信息
  store,    //vuex状态控制器
  components: { App },
  template: '<App/>'
})
