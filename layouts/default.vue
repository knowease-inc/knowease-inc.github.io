<template>
  <v-app light>
    <v-card flat class="pb-15">
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
    return {}
  },
}
</script>
