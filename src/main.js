import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'

import VueAWN from "vue-awesome-notifications"

import 'vue-awesome-notifications/dist/styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false

let options = {
  durations: {
    global: 3000
  }
}

Vue.use(VueAWN, options)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
