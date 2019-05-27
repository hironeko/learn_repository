<template>
  <h1>{{ title }}</h1>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "HeadComp",
  // data() {
  //   return {
  //     title: "感想を入力"
  //   }
  // }
  // お手本の書き方
  // computed: mapGetters({
  //   title: "getTitle"
  // })
  computed: {
    ...mapGetters(["title"])
  }
}
</script>
