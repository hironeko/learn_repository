<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <h1 class="title is-size2">About</h1>
      <h2 class="subtitleis-size-4">It's me?</h2>
    </div>
  </section>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit("resetMenu")
  }
}
</script>
