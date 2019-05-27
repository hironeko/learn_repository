// 3 .vueの型定義をするためのfile

declare module "*.vue" {
  import Vue from "vue"
  const _default: Vue
  export default _default
}
