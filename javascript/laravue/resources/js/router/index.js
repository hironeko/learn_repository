import Vue from "vue"
import Router from "vue-router"
import ExampleComponent from "../components/ExampleComponent"
import VuetifySample from "../components/VuetifySample"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        { path: "/sample", component: ExampleComponent },
        { path: "/vuetify", component: VuetifySample }
    ]
})
