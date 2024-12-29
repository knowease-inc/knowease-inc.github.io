<template>
  <div>
    <!-- ### Start: LinkedIn Embeding Code ### -->
    <component
      :is="'script'"
      type="text/javascript"
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
    >
    </component>

    <!-- ### Start: Profiles ### -->
    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="10" class="font-weight-medium text-grey text-h6">
        Team
      </v-col>

      <v-col
        v-for="(
          { name, headline, avatar, companyAndSchoolInfo, link }, i
        ) in members"
        :key="i"
        cols="12"
        sm="12"
        md="6"
        lg="5"
        class="d-flex justify-center mb-4"
      >
        <v-card
          class="d-flex align-center rounded-xl px-sm-8 pa-md-4 px-4"
          :class="{'justify-space-evenly':isEnglish}"
          :min-height="smAndUp ? '220' : '230'"
          :width="smAndUp ? '420' : '270'"
        >
          <v-avatar :size="smAndUp ? '140' : '100'">
            <v-img :src="avatar" :alt="name" />
          </v-avatar>

          <div class="flex flex-column ml-3">
            <div class="text-body-1 font-weight-bold">
              {{ name }}
            </div>
            <div class="headline-color mb-2">
              {{ headline }}
            </div>
            <div class="text-sm--body-1 text-body-2 text-gray mb-sm-2">
              {{ companyAndSchoolInfo }}
            </div>

            <v-card-actions class="pa-0">
              <v-btn
                rounded
                variant="outlined"
                position="absolute"
                size="small"
                color="#3746fb"
                :href="link"
                class="mt-sm-4 mt-0"
              >
                View profile
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- ### Start: Adviser ### -->
    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="10" class="font-weight-medium text-grey text-h6">
        Advisor
      </v-col>

      <v-col
        v-for="(
          { name, headline, avatar, companyAndSchoolInfo, link }, i
        ) in advisors"
        :key="i"
        cols="12"
        sm="12"
        md="6"
        lg="5"
        class="d-flex justify-center pb-4 mb-sm-4"
      >
        <v-card
          class="d-flex justify-space-evenly align-center rounded-xl px-sm-8 pa-md-4 px-4"
          :min-height="smAndUp ? '220' : '230'"
          :width="smAndUp ? '420' : '270'"
        >
          <v-avatar :size="smAndUp ? '140' : '100'">
            <v-img :src="avatar" :alt="name" />
          </v-avatar>

          <div class="flex flex-column ml-3">
            <div class="text-body-1 font-weight-bold">
              {{ name }}
            </div>
            <div class="headline-color mb-2">
              {{ headline }}
            </div>
            <div class="text-sm--body-1 text-body-2 text-gray mb-sm-2">
              {{ companyAndSchoolInfo }}
            </div>

            <v-card-actions class="pa-0">
              <v-btn
                rounded
                variant="outlined"
                position="absolute"
                size="small"
                color="#3746fb"
                :href="link"
                class="mt-sm-4 mt-0"
              >
                View profile
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>

      <v-col
        v-if="mdAndUp"
        cols="12"
        md="6"
        lg="5"
        class="d-flex justify-center pb-8"
      >
        <v-card
          class="rounded-xl"
          :max-height="smAndUp ? '100%' : '230'"
          :width="smAndUp ? '420' : '270'"
        >
          <v-img
            src="/img/meeting_img.png"
            height="100%"
            cover
            class="rounded-xl"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { xs, smAndUp, mdAndUp } = useDisplay()
const { tm,locale } = useI18n()

const members = computed(() => tm('pages.index.founders.members'))
const advisors = computed(() => tm('pages.index.founders.advisors'))

const isEnglish = computed(() => locale.value === 'en')

</script>

<style>
.v-btn__content {
  text-transform: none;
}

.headline-color {
  color: #a6a6a6;
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
  min-width: 50px;
  min-height: 50px;
}
</style>
