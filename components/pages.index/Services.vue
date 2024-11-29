<template>
  <v-row align="center" justify="center">
    <v-col
      cols="11"
      sm="12"
      class="text-center pt-12 text-sm-h4 text-h5"
      style="line-height: 1.8"
    >
      <div class="font-weight-black">
        정보, 지식이 쉽고 빠르게 전달 및 소통 되도록 만드는
      </div>
      <div>모든 기술을 고민하고 그것들에 도전하고 있습니다.</div>
    </v-col>

    <!-- 첫번째 카드 -->
    <v-col cols="12" sm="10" md="6" lg="5" xl="4">
      <v-card
        :height="setContainerHeight"
        flat
        class="px-sm-9 my-sm-7 rounded-xl pt-7 px-1"
      >
        <v-card class="my-sm-auto my-0" flat>
          <v-card-title class="font-weight-bold content-title">
            {{ content.name }}
          </v-card-title>

          <v-card-subtitle class="service-exp">
            {{ content.explanation }}
          </v-card-subtitle>

          <v-card-actions
            :class="[smAndUp ? 'pt-sm-4  pl-4' : 'd-flex flex-column']"
          >
            <v-btn
              :disabled="!content.shortcut.href"
              :elevation="0"
              :color="linkBtnColor"
              :href="content.shortcut.href"
              :style="{
                ...btnInServiceCard,
                ...(smAndUp ? {} : { width: '100%' }),
              }"
              variant="elevated"
              rounded
              :class="[smAndUp ? 'px-4 ' : 'mb-2']"
            >
              {{ content.shortcut.name }}
            </v-btn>

            <v-btn
              :color="linkBtnColor"
              :to="content.introduce.to"
              :style="{
                ...btnInServiceCard,
                ...(smAndUp ? {} : { width: '100%' }),
              }"
              variant="outlined"
              rounded
              :class="[smAndUp ? 'px-4' : 'px-7 ml-n1']"
            >
              {{ content.introduce.name }}
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
      >
        <v-card class="my-sm-auto my-0 mr-sm-9 pa-0 pb-3" flat>
          <v-card-title class="font-weight-bold content-title">
            {{ contentSecond.name }}
          </v-card-title>

          <v-card-subtitle class="service-exp">
            {{ contentSecond.explanation }}
          </v-card-subtitle>

          <v-card-actions :class="[smAndUp ? 'pt-4 pl-4' : 'full-width']">
            <v-btn
              variant="outlined"
              :color="linkBtnColor"
              :to="contentSecond.introduce.to"
              :style="{
                ...btnInServiceCard,
                ...(xs.value ? { width: '100%' } : {}),
              }"
              :block="!smAndUp"
              rounded
              :class="[smAndUp ? 'px-4' : 'px-7 ml-n1']"
              :disabled="!contentSecond.introduce.to"
            >
              {{ contentSecond.introduce.name }}
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
import { mdiArrowRightThin } from '@mdi/js'

const { xs, smAndUp } = useDisplay()

const linkBtnColor = '#3746fb'
const content = {
  name: 'Meaniit',
  explanation:
    '자료조사부터 보고서 초안 작성, 완성까지 함께하는 AI 솔루션 서비스',
  shortcut: {
    name: '바로가기',
    href: 'https://ko.meaniit.com/',
  },
  introduce: {
    name: '서비스 소개',
    to: '/service/meaniit/introduce',
  },
}
const contentSecond = {
  name: '교육 서비스',
  explanation:
    '알기 쉬운 AI, 디지털 전환(DX, Digital Transformation) 온·오프라인 교육, 세미나, 컨설팅 제공',
  introduce: {
    name: 'Contact',
    to: '',
  },
}
const btnInServiceCard = {
  minWidth: 0,
  paddingLeft: 0,
}
const videos = {
  meaniit: '/img/temp/report.mp4',
  edu: '/img/temp/teaching.mp4',
}
const setContainerHeight = computed(() => (xs.value ? '500' : '500'))
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
