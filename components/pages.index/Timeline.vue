<template>
  <v-theme-provider theme="light">
    <v-row justify="center" class="py-8 py-sm-16">
      <v-col cols="12" offset-lg="1" lg="9" class="d-flex flex-column">
        <p class="section-title">
          {{ t('pages.index.pageTitle.history') }}
        </p>

        <p class="section-subtitle text-start mt-4">
          {{ t('pages.index.timeline.title') }}
        </p>
      </v-col>

      <v-col cols="12" offset-sm="1" sm="10" class="d-sm-flex">
        <v-col cols="12" sm="6">
          <video
            ref="videoRef"
            src="/img/new/history.mp4"
            autoplay
            loop
            muted
            class="responsive-image"
          />
        </v-col>

        <v-col cols="12" sm="6">
          <v-row class="d-flex flex-column">
            <!-- ## Start: Display History Contents (Iterate over grouped events by year) ## -->
            <div
              v-for="yearGroup in tm('pages.index.timeline').events"
              :key="yearGroup.year"
            >
              <v-row class="font-weight-bold">
                <v-col offset="1" cols="3" class="pt-2">
                  <span style="font-size: 2rem">
                    {{ yearGroup.year }}
                  </span>
                </v-col>

                <!-- ### Iterate over grouped events by months ### -->
                <v-col cols="8" class="mb-4">
                  <v-row
                    v-for="(event, eIdx) in yearGroup.months"
                    :key="event.title + eIdx"
                    style="font-size: 1.4rem"
                  >
                    <v-col cols="2" class="text-center">
                      <span class="main-color"
                        >{{ setTwoNumber(event.month) }}
                      </span>
                    </v-col>
                    <v-col cols="10">
                      <span>
                        {{ event.title }}
                      </span>
                      <p class="font-weight-regular">
                        {{ event.body }}
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
            <!-- ## End: Display History Contents ## -->
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-theme-provider>
</template>

<script setup>
const { xs, smAndUp, mdAndUp, lgAndUp } = useDisplay()
const { t, tm } = useI18n()

const setTwoNumber = (num) => (num < 10 ? '0' + num : num)
</script>

<style scoped>
.main-color {
  color: #3746fb;
}

.text-line-height {
  line-height: 1.4;
}

/* 기본 크기 설정 */
.responsive-image {
  width: 100%;
  height: 90%;
}

/* smAndUp 기준 */
/* @media (min-width: 600px) {
  .responsive-image {
    max-width: 100%;
  }
} */

/* mdAndUp 기준 */
/* @media (min-width: 960px) {
  .responsive-image {
    max-width: 220%;
    max-height: 120%;
  }
} */
</style>
