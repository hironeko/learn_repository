<template>
  <div>
    Formページ
    <HeadComp></HeadComp>
    <!-- <TextareaComp></TextareaComp>
    <StringComp></StringComp>-->
    <component v-bind:is="isComponent"></component>
    <button v-on:click="buttonAction">{{ button }}</button>
  </div>
</template>

<script>
import HeadComp from "@/components/subcomponents/HeadComp"
import TextareaComp from "@/components/subcomponents/TextareaComp"
import StringComp from "@/components/subcomponents/StringComp"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Form",
  // data() {
  //   return {
  //     button: "確認"
  //   }
  // },
  // mapGettersの書き方
  // computed: mapGetters("Form", {
  //   button: "getButton"
  // }),
  // computed: {
  //   ...mapGetters(
  //     'Form',
  //     ['button']
  //   )
  // }
  computed: {
    ...mapGetters({
      button: "Form/button",
      isComponent: "Form/isComponent"
    })
  },
  methods: mapActions("Form", {
    buttonAction: "buttonAction"
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>
