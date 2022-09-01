import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/main.css'
import '@/assets/css/media-query.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
