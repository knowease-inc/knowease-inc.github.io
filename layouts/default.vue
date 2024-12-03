<template>
  <v-app light>
    <!-- ### Start : Top bar ### -->
    <Test />
    <!-- <TopBar /> -->

    <!-- ### Start : Main Contents ### -->
    <slot class="pa-0" />

    <!-- ### Start : Main Footer ### -->
    <MainFooter />
  </v-app>
</template>

<script setup>
import TopBar from '@/components/layouts.default/TopBar.vue'
import MainFooter from '@/components/layouts.default/MainFooter.vue'
import Test from '@/components/layouts.default/Test.vue'
</script>
