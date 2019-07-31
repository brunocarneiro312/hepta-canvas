import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueTheMask from 'vue-the-mask';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueTheMask)

new Vue({
  render: h => h(App),
}).$mount('#app')

