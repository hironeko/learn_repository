<template>
  <section class="section">
    <div id="wrapper" class="container">
      <article class="media">
        <div class="media-content">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input
                class="input"
                type="text"
                v-model="message"
                @keyup.enter="sendMessage"
                placeholder="message"
              />
            </p>
            <p class="control">
              <button class="button is-info" @click="sendMessage">Send</button>
            </p>
          </div>
        </div>
      </article>
      <article class="media" v-for="(message, index) in reverseMessages" :key="index">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>id: {{ message.user }}</strong>
              <br />
              {{ message.text }}
              <br />
              <small>
                <a>Like</a> ·
                <a>Reply</a>
                · {{ message.date }}
              </small>
            </p>
          </div>
        </div>
      </article>
      <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="false"></b-loading>
    </div>
  </section>
</template>

<script>
import io from "socket.io-client"
import { setTimeout } from "timers"

export default {
  data() {
    return {
      message: "",
      messages: [],
      socket: "",
      isLoading: true
    }
  },
  computed: {
    reverseMessages: function() {
      return this.messages.slice().reverse()
    }
  },
  mounted() {
    this.socket = io()

    this.socket.on("new-message", message => {
      this.messages.push(message || {})
    })

    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) {
        return
      }

      let now = new Date()
      now.setTime(now.getTime() + 1000 * 60 * 60 * 9) //日本時間に変換
      now = now
        .toJSON()
        .split("T")[1]
        .slice(0, 5)

      let message = {
        user: this.socket.id,
        date: now,
        text: this.message.trim()
      }
      this.messages.push(message)
      this.socket.emit("send-message", message)
      this.message = ""
    }
  }
}
</script>

<style scoped>
#wrapper {
  max-width: 600px;
}
</style>

