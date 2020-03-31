<template>
  <div>
    Componentの検証です
    <button @click.prevent="onClick" :class="$style.button"></button>
  </div>
</template>

<script>
module.exports = {
  methods: {
    onClick() {
      alert("Hello World!")
    }
  }
}
</script>

<style module>
.btn {
  background-color: #1976d2;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  transition: opacity 0.1s linear;
}
.btn:hover {
  opacity: 0.8;
}
</style>