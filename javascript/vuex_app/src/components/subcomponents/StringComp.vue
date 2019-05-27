<template>
  <p>{{ string }}</p>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "stringComp",
  // data() {
  //   return {
  //     string: "入力された感想をここに出す"
  //   }
  // }
  computed: {
    ...mapGetters("String", ["string"])
  }
}
</script>
