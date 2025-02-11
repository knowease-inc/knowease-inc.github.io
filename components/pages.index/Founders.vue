<template>
  <v-row justify="center" class="bg-color bg-p">
    <v-col cols="10" sm="10" class="d-flex flex-column align-center">
      <p
        :class="xs ? 'section-title-xs' : 'section-title'"
        :style="{ fontSize: xs ? '2.3rem' : '' }"
      >
        {{ t('pages.index.pageTitle.team') }}
      </p>
      <p class="my-4" :class="xs ? 'section-subtitle-xs' : 'section-subtitle'">
        {{ subTitle }}
      </p>
    </v-col>

    <v-col cols="11" sm="10">
      <!-- ### Start: LinkedIn Embeding Code ### -->
      <component
        :is="'script'"
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      >
      </component>

      <!-- ### Start: CEO ### -->
      <v-row justify="center" justify-sm="space-between" class="py-sm-12">
        <v-col cols="12" sm="6">
          <v-img
            src="https://dmq1lrjfpg713.cloudfront.net/img/ceo_horizontal_1024x576.jpg"
            class="rounded-xl"
          />
        </v-col>

        <v-col cols="12" sm="6" align-self="center">
          <div
            :style="{ width: xs ? '100%' : '90%' }"
            class="px-sm-16 d-flex flex-column ga-sm-8 ga-4"
          >
            <v-chip
              label
              color="#3746FB"
              variant="outlined"
              :size="xs ? 'large' : 'x-large'"
              class="font-weight-bold pt-sm-1 my-2 my-sm-0"
              style="width: fit-content; border-radius: 10px"
            >
              CEO {{ t('pages.index.founders.ceo') }}
            </v-chip>

            <p
              class="font-weight-bold"
              :style="{ fontSize: xs ? '1rem' : '1.5rem' }"
              v-html="mainAchievement"
            ></p>

            <div
              class="text-start d-flex flex-column ga-sm-6 ga-2"
              :style="{ fontSize: xs ? '0.9rem' : '1.15rem' }"
            >
              <p v-html="t('pages.index.founders.achievement.second')"></p>
              <p v-html="t('pages.index.founders.achievement.third')"></p>
              <p v-html="t('pages.index.founders.achievement.fourth')"></p>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- ### Start: Co-founder ### -->
      <v-row
        class="d-flex flex-column justify-center align-center my-sm-12 my-8"
      >
        <v-chip label color="#3746FB" variant="text" size="x-large">
          <span
            :class="
              xs
                ? 'section-subtitle-xs font-weight-bold'
                : 'section-subtitle font-weight-bold'
            "
            style="color: inherit"
          >
            Co-founder
          </span>
        </v-chip>

        <p
          :style="{ fontSize: xs ? '1.3rem' : '2.5rem' }"
          class="text-center font-weight-bold"
          v-html="t('pages.index.founders.subTitle')"
        ></p>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          class="d-flex"
          v-for="(
            { name, headline, avatar, companyAndSchoolInfo, link }, i
          ) in members"
          :key="i"
        >
          <v-card
            width="100%"
            variant="flat"
            class="d-flex align-sm-center rounded-xl pa-sm-8 pa-4 member-card-shadow"
          >
            <v-avatar :size="smAndUp ? '120' : '60'">
              <v-img :src="avatar" :alt="name" />
            </v-avatar>

            <div class="flex flex-column ml-sm-12 ml-4 font-weight-bold">
              <div
                :class="xs ? 'content-subtitle-xs' : 'content-subtitle'"
                :style="{ fontSize: xs ? '1.15rem' : '' }"
              >
                {{ name }}
              </div>
              <div
                style="color: #3746fb"
                class="my-2"
                :style="{ fontSize: xs ? '0.9rem' : '' }"
              >
                {{ headline }}
              </div>
              <div
                class="mb-sm-2 font-weight-medium text-start"
                :style="{ fontSize: xs ? '0.9rem' : '' }"
              >
                {{ companyAndSchoolInfo }}
              </div>

              <v-card-actions class="pa-0">
                <v-btn
                  rounded="lg"
                  variant="tonal"
                  position="absolute"
                  :href="link"
                  :append-icon="mdiChevronRight"
                  style="
                    background-color: #f5f7f8;
                    color: #555555;
                    font-weight: 400;
                  "
                  class="mt-sm-4 mt-2"
                >
                  View Profile
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { mdiChevronRight } from '@mdi/js'

const { xs, smAndUp, mdAndUp } = useDisplay()
const { t, tm, locale } = useI18n()

const members = computed(() => tm('pages.index.founders.members'))

const isEnglish = computed(() => locale.value === 'en')

// Text Specific Breaks
const subTitle = computed(() => {
  const teamSubTitle = t('pages.index.pageTitle.teamSub')

  if (locale.value === 'en') {
    return teamSubTitle.replace('is the ', 'is the <br />')
  }

  return teamSubTitle.replace('이란 ', '이란 <br />')
})

const mainAchievement = computed(() => {
  const achievement = t('pages.index.founders.achievement.main')

  return achievement.replace('(Japan)의 ', '(Japan)의 <br />')
})
</script>

<style>
.v-btn__content {
  text-transform: none;
}

.line-change {
  width: 200px;
  word-break: keep-all;
}

.line-change-xs {
  width: 8rem;
  word-break: keep-all;
}

.profile-img {
  min-width: 130px;
  min-height: 130px;
}

.member-card-shadow {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
}

.bg-color {
  background-color: #f5f7f8;
}

.bg-p {
  padding: 120px 0;
}

.content-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
}

@media (max-width: 480px) {
  .bg-p {
    padding: 60px 0;
  }
}
</style>
