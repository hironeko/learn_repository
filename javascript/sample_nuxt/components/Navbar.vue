<template>
  <nav 
    class="navber is-white" 
    role="navigation" 
    aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">Sample nuxtjs</div>
      <div
        :class="{'is-active': $store.state.isMenuActive}"
        class="navbar-burger"
        data-target="navManu"
        @click="$store.commit('toggleMenu')"
      >
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div 
      id="navMenu" 
      :class="{'is-active': $store.state.isMenuActive}" 
      class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link 
          to="/" 
          class="navbar-item">Top</nuxt-link>
        <nuxt-link 
          to="/about" 
          class="navbar-item">About</nuxt-link>
        <nuxt-link 
          to="/contact" 
          class="navbar-item">お問い合わせ</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  watch: {
    $route() {
      this.isMenuActive = false
    }
  }
}
</script>
