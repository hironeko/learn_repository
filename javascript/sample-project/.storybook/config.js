import "!style-loader!css-loader!element-ui/lib/theme-chalk/index.css"
import ElementUi from "~/plugins/element-ui"
ElementUi()

import { configure } from "@storybook/vue"

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
