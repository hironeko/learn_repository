module.exports = {
  title: "GitHub Pages product by vuepress", // 公開ページのタイトル
  desctription: "VuePress 挑戦", // ページの説明
  base: "/contents/",
  dest: "docs/",
  lcoales: {
    "/": {
      lang: "ja"
    }
  },
  // themeConfig: {
  //   sidebar: [
  //     "/",
  //     {
  //       title: "About",
  //       collapsable: false,
  //       chirdren: ["About"]
  //     }
  //   ]
  // },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "witdth=device-with, initial-scale=1" }
  ]
}
