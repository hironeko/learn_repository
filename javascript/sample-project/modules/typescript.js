// from nuxt-communityのテンプレを流用
// 1 作成する
module.exports = function() {
  this.nuxt.options.extensions.push("ts")
  this.extendBuild(config => {
    const tsLoader = {
      loader: "ts-loader",
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }
    config.module.rules.push(
      Object.assign(
        {
          test: /((client|server)\.js)|(\.tsx?)$/
        },
        tsLoader
      )
    )
    for (let rule of config.module.rules) {
      if (rule.loader === "vue-loader") {
        rule.options.loaders = {
          ts: "tsLoader"
        }
      }
    }
    if (config.resolve.extensions.indexOf(".ts") === -1) {
      config.resolve.extensions.push(".ts")
    }
  })
}
