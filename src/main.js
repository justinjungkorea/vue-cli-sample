import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify'

import StatusComponents from './Status'

Vue.component('AppStatus', StatusComponents)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
