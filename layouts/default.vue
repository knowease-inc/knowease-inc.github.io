<template>
  <v-app light>
    <v-card flat tile class="pb-15">
      <!-- ### Start : Top bar ### -->
      <div>
        <Carousel v-if="checkForIndexPath()">
          <top-bar />
        </Carousel>

        <top-bar v-if="!checkForIndexPath()" />
      </div>

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
import TopBar from '@/components/layouts.default/TopBar.vue'
import MainFooter from '@/components/layouts.default/MainFooter.vue'
import Carousel from '~/components/layouts.default/Carousel.vue'

export default {
  components: {
    TopBar,
    MainFooter,
    Carousel,
  },

  watch: {
    $route: 'checkForIndexPath',
  },

  methods: {
    checkForIndexPath() {
      const { name } = this.$route
      return name === 'index'
    },
  },
}
</script>
