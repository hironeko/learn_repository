<template>
  <div>
    <p class="error">{{ error }}</p>
    <!-- <textarea></textarea> -->
    <textarea v-model="impression"></textarea>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "TextareaComp",
  // data() {
  //   return {
  //     error: "入力は必須です"
  //   }
  // }
  computed: {
    impression: {
      get() {
        return this.$store.state.impression
      },
      set(value) {
        this.$store.commit("updateImpression", value)
      }
    },
    ...mapGetters("Textarea", ["error"])
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
