<template>
  <v-theme-provider theme="light">
    <v-row justify="center" class="py-8 py-sm-16">
      <v-col cols="12" lg="10" class="d-flex flex-column pb-0 pb-sm-3">
        <p :class="xs ? 'section-title-xs text-center' : 'section-title'">
          {{ t('pages.index.pageTitle.history') }}
        </p>

        <p
          class="text-sm-start mt-sm-4"
          :class="xs ? 'section-subtitle-xs' : 'section-subtitle'"
        >
          {{ t('pages.index.timeline.title') }}
        </p>
      </v-col>

      <v-col cols="12" sm="10" class="d-sm-flex py-0 py-sm-3">
        <v-col cols="12" sm="6" :class="xs ? 'd-flex justify-center pt-0' : ''">
          <video
            ref="videoRef"
            src="/img/new/history.mp4"
            autoplay
            loop
            muted
            class="responsive-image"
          />
        </v-col>

        <!-- ## Start: Display History Contents (Iterate over grouped events by year) ## -->
        <v-col cols="12" sm="6" class="d-flex flex-column">
          <div
            v-for="yearGroup in tm('pages.index.timeline').events"
            :key="yearGroup.year"
          >
            <v-row class="font-weight-bold">
              <v-col offset="1" cols="2" sm="3" class="pt-sm-2">
                <span :style="{ fontSize: xs ? '1.2rem' : '2rem' }">
                  {{ yearGroup.year }}
                </span>
              </v-col>

              <!-- ### Iterate over grouped events by months ### -->
              <v-col cols="9" sm="8" class="mb-4 mb-sm-12">
                <v-row
                  v-for="(event, eIdx) in yearGroup.months"
                  :key="event.title + eIdx"
                  :style="{ fontSize: xs ? '1rem' : '1.4rem' }"
                >
                  <v-col cols="2" class="text-center">
                    <span class="main-color"
                      >{{ setTwoNumber(event.month) }}
                    </span>
                  </v-col>
                  <v-col cols="10" sm="8">
                    <span>
                      {{ event.title }}
                    </span>
                    <p
                      class="font-weight-regular text-start"
                      :class="xs ? 'content-text-xs' : 'content-text'"
                    >
                      {{ event.body }}
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <!-- ## End: Display History Contents ## -->
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
.text-line-height {
  line-height: 1.4;
}

/* 기본 크기 설정 */
.responsive-image {
  width: 100%;
  height: 90%;
}

@media (max-width: 480px) {
  .responsive-image {
    width: 80%;
  }
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
