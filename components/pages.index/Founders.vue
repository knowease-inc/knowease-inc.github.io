<template>
  <v-row justify="center" style="background-color: #f5f7f8; padding: 120px 0">
    <v-col cols="10" offset="1" class="d-flex flex-column align-center">
      <p class="section-title">{{ t('pages.index.pageTitle.team') }}</p>
      <p class="section-subtitle my-4">
        {{ t('pages.index.pageTitle.teamSub') }}
      </p>
    </v-col>

    <v-col cols="11" sm="10" offset-lg="1" lg="9">
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
      <v-row justify="space-between" class="py-12" no-gutters>
        <v-col cols="6">
          <v-img
            aspect-ratio="16/9"
            cover
            src="/img/new/ceo.jpg"
            width="750px"
          />
        </v-col>

        <v-col cols="6" align-self="center">
          <div style="width: 90%" class="px-16 d-flex flex-column ga-8">
            <v-chip
              label
              color="#3746FB"
              variant="outlined"
              class="font-weight-bold rounded-lg"
              style="width: fit-content"
            >
              CEO 박성묵
            </v-chip>

            <p
              class="font-weight-black"
              style="font-size: 1.4rem"
              v-html="t('pages.index.founders.achievement.main')"
            ></p>

            <div class="content-text text-start d-flex flex-column ga-6">
              <p v-html="t('pages.index.founders.achievement.second')"></p>
              <p v-html="t('pages.index.founders.achievement.third')"></p>
              <p v-html="t('pages.index.founders.achievement.fourth')"></p>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- ### Start: Co-founder ### -->
      <v-row class="d-flex flex-column justify-center align-center my-12">
        <v-chip
          label
          color="#3746FB"
          variant="text"
          class="font-weight-black"
          size="large"
        >
          Co-founder
        </v-chip>

        <p
          style="font-size: 2rem"
          class="text-center font-weight-bold"
          v-html="t('pages.index.founders.subTitle')"
        ></p>
      </v-row>

      <v-row>
        <v-col
          cols="6"
          class="d-flex"
          v-for="(
            { name, headline, avatar, companyAndSchoolInfo, link }, i
          ) in members"
          :key="i"
        >
          <v-card
            width="100%"
            variant="flat"
            class="d-flex align-center rounded-xl pa-sm-8 member-card-shadow"
          >
            <!--
                :class="{ 'justify-space-evenly': isEnglish }"
                :min-height="smAndUp ? '220' : '230'"
                :width="smAndUp ? '420' : '270'" -->
            <v-avatar :size="smAndUp ? '120' : '100'">
              <v-img :src="avatar" :alt="name" />
            </v-avatar>

            <div class="flex flex-column ml-12 font-weight-bold">
              <div class="content-subtitle">
                {{ name }}
              </div>
              <div style="color: #3746fb" class="my-2">
                {{ headline }}
              </div>
              <div class="content-text mb-sm-2 font-weight-medium text-start">
                {{ companyAndSchoolInfo }}
              </div>

              <v-card-actions class="pa-0">
                <v-btn
                  rounded="lg"
                  variant="tonal"
                  position="absolute"
                  size="small"
                  :href="link"
                  :append-icon="mdiChevronRight"
                  style="background-color: #f5f7f8; color: #555555"
                  class="mt-sm-4 mt-0"
                >
                  View profile
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
</style>
