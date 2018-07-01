// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入router目录下的index.js
import router from './router'

//完整引入Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import store from './store'
Vue.use(ElementUI,{locale});

/*router.beforeEach((to, from, next) => {
  console.log(to)
})*/

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
