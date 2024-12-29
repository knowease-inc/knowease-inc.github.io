<template>
  <v-container class="d-flex flex-column pa-0" fluid>
    <v-row justify="center" class="px-0">
      <Carousel />
    </v-row>

    <!-- ### Start : Service Link ### -->
    <v-row
      justify="center"
      style="
        background-color: rgba(2, 32, 71, 0.05);
        font-size: 1.8rem;
        min-height: 100vh;
      "
      class="py-8 py-sm-16"
    >
      <v-col class="d-flex flex-column align-center pt-16">
        <p class="content-title">{{ t('pages.index.pageTitle.service') }}</p>

        <!-- ### Start : Our Service ### -->
        <v-col cols="12" sm="8">
          <Services />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : Partners ### -->
    <v-theme-provider theme="light" with-background style="width: 100%">
      <v-row
        class="d-flex justify-center align-center py-8 py-sm-16"
        style="min-height: 80vh"
      >
        <v-col class="d-flex flex-column align-center">
          <p class="content-title py-4">
            {{ t('pages.index.pageTitle.partners') }}
          </p>

          <v-col cols="11" sm="10" md="8" class="pb-16">
            <Partners />
          </v-col>
        </v-col>
      </v-row>
    </v-theme-provider>

    <!-- ### Start : History ### -->
    <v-row
      justify="center"
      align="center"
      style="background-color: #3746fb; min-height: 80vh"
      class="mt-16 d-flex pt-8"
    >
      <v-col cols="8" sm="8" class="content-subtitle pa-0 text-white">
        <p class="content-title text-white py-4">
          {{ t('pages.index.pageTitle.history') }}
        </p>
        <p
          style="font-size: 1.4rem"
          class="mt-4 font-weight-bold"
          v-html="t('pages.index.timeline.title')"
        ></p>
      </v-col>

      <v-col cols="12" sm="12">
        <TimelineIndex />
      </v-col>
    </v-row>

    <!-- ### Start : Linked In Badges ### -->
    <v-row
      justify="center"
      class="pt-16"
      style="background-color: rgba(2, 32, 71, 0.05)"
      :style="{ minHeight: mdAndUp ? '100vh' : '' }"
    >
      <v-col class="d-flex flex-column align-center">
        <p class="content-title">{{ t('pages.index.pageTitle.team') }}</p>
        <div
          class="content-subtitle my-4"
          :style="{ 'font-size': smAndUp ? '1.8rem' : '1.2rem' }"
        >
          <div v-html="t('pages.index.pageTitle.teamSub')"></div>
        </div>
        <v-col cols="11" sm="8">
          <Founders />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Services from '@/components/pages.index/Services.vue'
import Founders from '@/components/pages.index/Founders.vue'
import TimelineIndex from '@/components/pages.index/Timeline.vue'
import Partners from '@/components/pages.index/Partners.vue'
import Carousel from '~/components/pages.index/Carousel.vue'

const { xs, smAndUp, mdAndUp } = useDisplay()
const { t } = useI18n()
</script>

<style scoped></style>
