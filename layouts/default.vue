<template>
  <v-app light>
    <v-card flat tile class="pb-15">
      <!-- ### Start : Top bar ### -->
      <div>
        <Carousel v-if="isIndexPath">
          <TopBar />
        </Carousel>

        <TopBar v-else />
      </div>

      <!-- ### Start : Main Contents ### -->
      <v-sheet class="my-15">
        <slot class="pa-0" />
      </v-sheet>

      <!-- ### Start : Main Footer ### -->
      <MainFooter />
    </v-card>
  </v-app>
</template>

<script setup>
import TopBar from '@/components/layouts.default/TopBar.vue'
import MainFooter from '@/components/layouts.default/MainFooter.vue'
import Carousel from '@/components/layouts.default/Carousel.vue'

const route = useRoute()

const isIndexPath = computed(() => route.name === 'index')
</script>
