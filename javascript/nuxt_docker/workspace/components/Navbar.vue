<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">Site Name</div>
      <div
        class="navbar-burger"
        data-target="navMenu"
        @click="$store.commit('toggleMenu')"
        :class="{'is-active': $store.state.isMenuActive}"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu" :class="{'is-active': $store.state.isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">Top</nuxt-link>
        <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
        <nuxt-link to="/contuct" class="navbar-item">Contuct</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  fetch({ store }) {
    store.commit("resetMenu")
  }
}
</script>
