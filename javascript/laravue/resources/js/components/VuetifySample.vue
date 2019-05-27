<template>
  <v-app>
    <v-btn color="success">success</v-btn>
    <v-btn color="error">error</v-btn>
    <v-btn color="warning">warning</v-btn>
    <v-btn color="info">info</v-btn>
    <v-btn color="primary">primary</v-btn>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn large>Normal</v-btn>
      </div>
      <div>
        <v-btn large color="primary">Primary</v-btn>
      </div>
      <div>
        <v-btn large color="error">Error</v-btn>
      </div>
      <div>
        <v-btn large disabled>Disabled</v-btn>
      </div>
    </v-flex>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 —
          <strong>Vuetify</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  props: {}
}
</script>
