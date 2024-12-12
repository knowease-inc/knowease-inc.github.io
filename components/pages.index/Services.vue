<template>
  <v-row align="center" justify="center">
    <v-col
      cols="11"
      sm="8"
      md="12"
      class="text-center pt-12 text-sm-h5 text-h6"
      style="line-height: 1.8"
    >
      <div
        :class="smAndup ? 'font-weight-black' : 'font-weight-bold'"
        v-html="content.header.title"
      ></div>
    </v-col>

    <!-- 첫번째 카드 -->
    <v-col cols="12" sm="10" md="6" lg="5" xl="4">
      <v-card
        :height="setContainerHeight"
        flat
        class="px-sm-9 my-sm-7 rounded-xl pt-7 px-1"
        theme="light"
      >
        <v-card class="my-sm-auto my-0" flat>
          <v-card-title class="font-weight-bold content-title">
            {{ content.meaniit.name }}
          </v-card-title>

          <v-card-subtitle class="service-exp">
            {{ content.meaniit.description }}
          </v-card-subtitle>

          <v-card-actions
            :class="[smAndUp ? 'pt-sm-4  pl-4' : 'd-flex flex-column']"
          >
            <v-btn
              :disabled="!content.meaniit.shortcut.href"
              :elevation="0"
              :color="linkBtnColor"
              :href="content.meaniit.shortcut.href"
              :style="{
                ...btnInServiceCard,
                ...(smAndUp ? {} : { width: '100%' }),
              }"
              variant="elevated"
              rounded
              :class="[smAndUp ? 'px-4 ' : 'mb-2']"
            >
              {{ content.meaniit.shortcut.name }}
            </v-btn>

            <v-btn
              disabled
              :color="linkBtnColor"
              :to="content.meaniit.introduce.to"
              :style="{
                ...btnInServiceCard,
                ...(smAndUp ? {} : { width: '100%' }),
              }"
              variant="outlined"
              rounded
              :class="[smAndUp ? 'px-4' : 'px-7 ml-n1']"
            >
              {{ content.meaniit.introduce.name }}
            </v-btn>
          </v-card-actions>

          <!-- Start: Image -->
          <div class="video-container">
            <video
              :src="videos.meaniit"
              autoplay
              loop
              muted
              :class="smAndUp ? 'meaniit-video' : 'meaniit-video-xs'"
            />
          </div>
        </v-card>
      </v-card>
    </v-col>

    <!-- 두번째 카드 -->
    <v-col cols="12" sm="10" md="6" lg="5" xl="4">
      <v-card
        :height="setContainerHeight"
        flat
        class="px-sm-5 my-sm-7 rounded-xl pt-7 px-1"
        theme="light"
      >
        <v-card class="my-sm-auto my-0 mr-sm-9 pa-0 pb-3" flat>
          <v-card-title class="font-weight-bold content-title">
            {{ content.education.name }}
          </v-card-title>

          <v-card-subtitle class="service-exp">
            {{ content.education.description }}
          </v-card-subtitle>

          <v-card-actions :class="[smAndUp ? 'pt-4 pl-4' : 'full-width']">
            <v-btn
              variant="outlined"
              :color="linkBtnColor"
              :style="{
                ...btnInServiceCard,
                ...(xs.value ? { width: '100%' } : {}),
              }"
              :block="!smAndUp"
              rounded
              :class="[smAndUp ? 'px-4' : 'px-7 ml-n1']"
              :disabled="!content.education.introduce.to"
              @click="openEmail"
            >
              {{ content.education.introduce.name }}
            </v-btn>
          </v-card-actions>

          <!-- Start: Image -->
          <div class="video-container">
            <video
              :src="videos.edu"
              autoplay
              loop
              muted
              :class="smAndUp ? 'edu-video' : 'edu-video-xs'"
            />
          </div>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()
const { t } = useI18n()

const linkBtnColor = '#3746fb'

const content = computed(() => ({
  header: {
    title: t('pages.index.service.header.title'),
  },
  meaniit: {
    name: t('pages.index.service.cards.meaniit.title'),
    description: t('pages.index.service.cards.meaniit.description'),
    shortcut: {
      name: t('pages.index.service.cards.meaniit.shortcutLabel'),
      href: 'https://ko.meaniit.com/',
    },
    introduce: {
      name: t('pages.index.service.cards.meaniit.introduceLabel'),
      to: '/service/meaniit/introduce',
    },
  },
  education: {
    name: t('pages.index.service.cards.education.title'),
    description: t('pages.index.service.cards.education.description'),
    introduce: {
      name: t('pages.index.service.cards.education.introduceLabel'),
      to: 'knowease.inc@gmail.com',
    },
  },
}))

const btnInServiceCard = {
  minWidth: 0,
  paddingLeft: 0,
}
const videos = {
  meaniit: '/img/temp/report.mp4',
  edu: '/img/temp/teaching.mp4',
}
const setContainerHeight = computed(() => (xs.value ? '500' : '500'))

const openEmail = () => {
  window.location.href = `mailto:${content.value.education.introduce.to}`
}
</script>

<style scoped>
.position-relative {
  position: relative;
}
.inside-logo-img {
  position: absolute;
  left: 27%;
  top: 22%;
}

.full-width {
  width: 100%;
}

.content-title {
  font-weight: 700;
  font-size: 1.7rem;
}

.service-exp {
  font-size: 1.3rem;
  white-space: normal;
}

.video-container {
  display: flex;
  justify-content: center; /* 가로 정렬 */
  align-items: center; /* 세로 정렬 */
  width: 100%;
}

.meaniit-video {
  height: 295px;
}

.meaniit-video-xs {
  height: 200px;
}

.edu-video {
  height: 270px;
}

.edu-video-xs {
  height: 200px;
}

.service-text {
  text-shadow: 2px 2px 3px rgba(34, 34, 34, 0.8);
}
</style>
