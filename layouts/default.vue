<template>
  <v-app light>
    <v-card flat tile class="pb-15">
      <!-- ### Start : Top bar ### -->
      <v-app-bar
        :color="appBar.color"
        dense
        flat
        absolute
      >
        <v-spacer />
        <v-toolbar-items>
          <v-btn text to="/" active-class="no-active">
            <v-img
              src="/img/knowease_logo_20210601.png"
              alt="쉬운지식"
              contain
              height="20"
            ></v-img>
          </v-btn>
        </v-toolbar-items>
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
        color: 'white',
        title: '쉬운지식',
      },
    }
  },
}
</script>

<style scoped>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
</style>
