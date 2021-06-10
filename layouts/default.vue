<template>
  <v-app light>
    <v-card flat tile class="pb-15">
      <!-- ### Start : Top bar ### -->
      <top-bar />

      <!-- ### Start : Main Contents ### -->
      <v-sheet class="my-15">
        <nuxt class="pa-0" />
      </v-sheet>

      <!-- ### Start : Main Footer ### -->
      <main-footer></main-footer>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopBar from '@/components/layouts.default/TopBar.vue'
import MainFooter from '@/components/layouts.default/MainFooter.vue'

@Component({
  components: {
    TopBar,
    MainFooter,
  },
})
class LayoutDefault extends Vue {}

export default LayoutDefault
</script>
