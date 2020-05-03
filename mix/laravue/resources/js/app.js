import Vue from "vue"
import "./components"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import "material-design-icons-iconfont/dist/material-design-icons.css"

import router from "./router"

require("./bootstrap")

window.Vue = require("vue")

Vue.use(Vuetify)

new Vue({
    router,
    el: "#app"
})
