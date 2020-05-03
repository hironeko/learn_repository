<template>
  <div>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.getText()
  },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    getText() {
      axios.get('/api/test').then(({ data }) => {
        this.content = data.data
      })
    }
  }
}
</script>
