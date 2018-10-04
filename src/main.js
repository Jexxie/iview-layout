import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./plugins/iview.js"

import devArticle from "./components/dev-article.vue"

Vue.config.productionTip = false

Vue.component("dev-article", devArticle)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
