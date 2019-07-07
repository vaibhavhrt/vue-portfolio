import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Hello from './components/Hello.vue'
import Projects from './components/Projects.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Hello },
  { path: '/projects/', component: Projects },
  // { path: '/contact/', component: Contact },
  // { path: '/resume/', component: Resume },
]

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
