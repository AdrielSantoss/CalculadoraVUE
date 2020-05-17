import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//este arquivo é oque renderiza os componentes, é como se fosse o "index.js" no React
new Vue({
  render: h => h(App),
}).$mount('#app')
