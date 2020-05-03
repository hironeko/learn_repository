import Vue from "vue"
import Router from "vue-router"
import Paths from "./paths"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: Paths
})
