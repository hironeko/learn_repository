<template>
  <section>
    <div>
      <Title/>
      <div class="links">
        <nuxt-link to="/about">About</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "~/components/Title.vue"

export default {
  components: {
    Title
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

