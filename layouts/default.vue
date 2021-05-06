<template>
  <v-app light>
    <v-card flat tile class="pb-15">
      <v-app-bar
        v-if="String($route.name) !== 'index'"
        :color="appBar.color"
        dense
        flat
        absolute
      >
        <v-spacer />
        <v-app-bar-title class="white--text">
          <small>{{ appBar.title }}</small>
        </v-app-bar-title>
        <v-spacer />
      </v-app-bar>

      <!-- ### Start : Main Contents ### -->
      <v-sheet class="my-15">
        <nuxt class="pa-0" />
      </v-sheet>

      <!-- ### Start : Main Footer ### -->
      <main-footer></main-footer>
    </v-card>
  </v-app>
</template>

<script>
import MainFooter from '@/components/layouts.default/MainFooter.vue'
export default {
  components: {
    MainFooter,
  },
  data() {
    return {
      appBar: {
        color: 'black',
        title: '쉬운지식',
      },
    }
  },
}
</script>
