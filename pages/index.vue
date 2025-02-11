<template>
  <v-container class="d-flex flex-column pa-0" fluid>
    <HeroSection />

    <!-- ### Start : Our Service ### -->
    <Services />

    <!-- ### Start : Client ### -->
    <Partners />

    <!-- ### Start : Linked In Badges ### -->
    <Founders />

    <!-- ### Start : History ### -->
    <TimelineIndex />

    <!-- ### Start : Customer Inquiry ### -->
    <Contact />
  </v-container>
</template>

<script setup>
import Services from '@/components/pages.index/Services.vue'
import Founders from '@/components/pages.index/Founders.vue'
import TimelineIndex from '@/components/pages.index/Timeline.vue'
import Partners from '@/components/pages.index/Partners.vue'
import HeroSection from '~/components/pages.index/HeroSection.vue'
import Contact from '~/components/pages.index/Contact.vue'

const { xs, smAndUp, mdAndUp } = useDisplay()
</script>
