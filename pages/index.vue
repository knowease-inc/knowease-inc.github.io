<template>
  <v-container class="d-flex flex-column pa-0" fluid>
    <v-row justify="center" class="px-0">
      <Carousel />
    </v-row>

    <!-- ### Start : Service Link ### -->
    <v-row
      justify="center"
      style="background-color: rgba(2, 32, 71, 0.05); font-size: 1.8rem"
      class="py-8 py-sm-16"
    >
      <v-col class="d-flex flex-column align-center pt-16">
        <p class="content-title">게타's 서비스</p>

        <!-- ### Start : Our Service ### -->
        <v-col cols="12" sm="8">
          <Services />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : Partners ### -->
    <v-row class="d-flex justify-center align-center" style="height: 80vh">
      <v-col class="d-flex flex-column align-center">
        <p class="content-title py-16">고객사</p>

        <v-col cols="11" sm="10" md="8" class="py-16">
          <Partners />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : History ### -->
    <v-row
      justify="center"
      align="center"
      style="background-color: #3746fb; height: 100vh"
      class="mt-16 d-flex"
    >
      <v-col cols="8" sm="8" class="content-subtitle pa-0 text-white">
        <p class="content-title text-white py-4">연혁</p>
        <p style="font-size: 1.8rem">
          게타(GET-A)을 위했던 <span class="font-weight-black">지난 여정</span>
        </p>
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
      :style="{ height: mdAndUp ? '185vh' : '' }"
    >
      <v-col class="d-flex flex-column align-center">
        <p class="content-title">함께하는 사람들</p>
        <div
          class="content-subtitle my-4"
          :style="{ 'font-size': smAndUp ? '1.8rem' : '1.4rem' }"
        >
          <div>
            게타(GET-A)을 위해 <br v-if="xs" />
            <span class="font-weight-bold"> 고군분투하는 이들</span>
          </div>
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
import Carousel from '@/components/layouts.default/Carousel.vue'

const { xs, smAndUp, mdAndUp } = useDisplay()
</script>

<style scoped></style>
