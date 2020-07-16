import Vue from 'vue'
import index from './views/login/index.vue'
import router from './router'
import store from './store'
import './main.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(index)
}).$mount('#app')
