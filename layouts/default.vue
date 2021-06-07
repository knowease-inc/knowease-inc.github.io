<template>
  <v-app light>
    <v-card flat tile class="pb-15">
      <!-- ### Start : Top bar ### -->
      <v-app-bar :color="appBar.color" dense flat absolute>
        <v-spacer />
        <!-- Start : Knowease image -->
        <v-toolbar-items v-if="onKnowease">
          <v-btn text to="/" active-class="no-active">
            <v-img
              src="/img/knowease_logo_20210601.png"
              alt="쉬운지식"
              contain
              height="20"
              max-width="100"
            ></v-img>
          </v-btn>
        </v-toolbar-items>

        <!-- Start : Easyxplain image -->
        <v-toolbar-items v-else>
          <v-btn
            text
            href="https://frontend.easyxplain.com/"
            active-class="no-active"
          >
            <v-img
              src="/img/EASYXPLAIN_LOGO.png"
              alt="EASYXPLAIN"
              contain
              height="20"
              max-width="100"
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

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import MainFooter from '@/components/layouts.default/MainFooter.vue'
@Component({
  components: {
    MainFooter,
  },
  computed: {
    onKnowease() {
      const currentRoute: string = this.$route.path
      if (
        currentRoute === '/service/easyxplain/introduce' ||
        currentRoute === '/service/easyxplain/regulations'
      ) {
        return false
      } else {
        return true
      }
    },
  },
})
class LayoutDefault extends Vue {
  @Provide() appBar: { color: string; title: string } = {
    color: 'white',
    title: '쉬운지식',
  }
}

export default LayoutDefault
</script>

<style scoped>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
</style>
