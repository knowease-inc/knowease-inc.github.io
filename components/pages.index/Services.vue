<template>
  <v-row align="center" justify="center">
    <div class="text-center pt-12 text-h4" style="line-height: 1.8">
      <div class="font-weight-black">
        정보, 지식이 쉽고 빠르게 전달 및 소통 되도록 만드는
      </div>
      <div>모든 기술을 고민하고 그것들에 도전하고 있습니다.</div>
    </div>

    <!-- Start: 동영상 버전 -->
    <!-- 동영상 버전 첫번째 카드 -->
    <v-col cols="12" sm="7">
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

          <v-card-actions v-if="smAndUp" class="pt-4 pl-4">
            <v-btn
              :disabled="!content.shortcut.href"
              :elevation="0"
              :color="linkBtnColor"
              :href="content.shortcut.href"
              :style="btnInServiceCard"
              variant="elevated"
              rounded
              class="px-4"
            >
              {{ content.shortcut.name }}
            </v-btn>
            <v-btn
              :color="linkBtnColor"
              :to="content.introduce.to"
              :style="btnInServiceCard"
              variant="outlined"
              rounded
              class="px-4"
            >
              {{ content.introduce.name }}
            </v-btn>
          </v-card-actions>

          <v-card-actions v-if="xs" class="d-flex flex-column">
            <v-btn
              :disabled="!content.shortcut.href"
              :dark="!!content.shortcut.href"
              :elevation="0"
              :color="linkBtnColor"
              :href="content.shortcut.href"
              :style="btnInServiceCard"
              variant="elevated"
              rounded
              class="mb-2"
              style="width: 100%"
            >
              {{ content.shortcut.name }}
            </v-btn>
            <v-btn
              :color="linkBtnColor"
              :to="content.introduce.to"
              :style="btnInServiceCard"
              variant="outlined"
              rounded
              class="px-7 ml-n1"
              style="width: 100%"
            >
              {{ content.introduce.name }}
            </v-btn>
          </v-card-actions>

          <!-- Start: Image -->
          <div class="video-container">
            <video
              src="/img/temp/report.mp4"
              autoplay
              loop
              muted
              class="meaniit-video"
            />
          </div>
        </v-card>
      </v-card>
    </v-col>

    <!-- 동영상 버전 두번째 카드 -->
    <v-col cols="12" sm="5">
      <v-card
        :height="setSecondaryCardHeight"
        flat
        class="px-sm-5 my-sm-7 rounded-xl pt-7 px-1"
      >
        <v-card class="my-sm-auto my-0 mr-sm-9 pa-0 pb-3" flat>
          <v-card-title class="font-weight-bold content-title">
            {{ contentSecond.name }}
          </v-card-title>

          <v-card-subtitle class="service-exp" style="font-size: 1.45rem">
            {{ contentSecond.explanation }}
          </v-card-subtitle>

          <v-card-actions v-if="smAndUp" class="pt-4 pl-4">
            <v-btn
              :color="linkBtnColor"
              :to="contentSecond.introduce.to"
              :style="btnInServiceCard"
              variant="outlined"
              rounded
              class="px-4"
              :disabled="!contentSecond.introduce.to"
            >
              {{ contentSecond.introduce.name }}
            </v-btn>
          </v-card-actions>

          <!-- Start: Image -->
          <div class="video-container">
            <video
              src="/img/temp/teaching.mp4"
              autoplay
              loop
              muted
              class="edu-video"
            />
          </div>
        </v-card>

        <v-card-actions v-if="xs" class="full-width">
          <v-btn
            outlined
            :color="linkBtnColor"
            :to="contentSecond.introduce.to"
            :style="btnInServiceCard"
            block
            rounded
            class="px-7 ml-n1"
            :disabled="!contentSecond.introduce.to"
          >
            {{ contentSecond.introduce.name }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- End: 동영상 -->

    <!-- Start: 이미지 버전 -->
    <!-- 이미지 버전 첫번째 카드 -->
    <v-col cols="12" sm="7">
      <v-card
        :height="setContainerHeight"
        image="/img/temp/report.jpeg"
        flat
        class="d-flex my-sm-7 rounded-xl"
      >
        <v-card
          class="my-sm-auto my-0 pa-4 text-white"
          flat
          style="background-color: rgba(0, 0, 0, 0.4)"
          height="100%"
        >
          <v-card-title
            class="font-weight-black content-title service-text"
            style="font-size: 3rem"
          >
            {{ content.name }}
          </v-card-title>

          <v-card-subtitle
            class="font-weight-black service-exp service-text"
            opacity="80"
          >
            {{ content.explanation }}
          </v-card-subtitle>

          <v-card-actions class="pt-8 pl-4 px-4">
            <v-spacer />

            <div class="d-flex flex-column">
              <v-btn
                :disabled="!content.shortcut.href"
                :elevation="0"
                :color="linkBtnColor"
                :href="content.shortcut.href"
                :style="btnInServiceCard"
                rounded
                variant="elevated"
                class="px-4 font-weight-bold my-4"
                size="large"
              >
                {{ content.shortcut.name }} <v-icon :icon="mdiArrowRightThin" />
              </v-btn>
              <v-btn
                :to="content.introduce.to"
                :style="btnInServiceCard"
                variant="outlined"
                rounded
                :color="linkBtnColor"
                style="border: 2px solid #3746fb; background-color: white"
                class="px-4 font-weight-bold"
                size="large"
              >
                {{ content.introduce.name }}
                <v-icon :icon="mdiArrowRightThin" />
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-col>

    <!-- 이미지 버전 두번째 카드 -->
    <v-col cols="12" sm="5">
      <v-card
        :height="setSecondaryCardHeight"
        image="/img/temp/edu2.jpg"
        flat
        class="d-flex my-sm-7 rounded-xl"
      >
        <v-card
          class="my-sm-auto my-0 pa-4 text-white"
          flat
          style="background-color: rgba(0, 0, 0, 0.3)"
          height="100%"
        >
          <v-card-title
            class="font-weight-black content-title"
            style="font-size: 2.8rem"
          >
            {{ contentSecond.name }}
          </v-card-title>

          <v-card-subtitle class="font-weight-bold service-exp" opacity="80">
            {{ contentSecond.explanation }}
          </v-card-subtitle>

          <v-card-actions v-if="smAndUp" class="pt-4 pl-4">
            <v-spacer />

            <v-btn
              color="grey"
              :to="contentSecond.introduce.to"
              :style="btnInServiceCard"
              variant="elevated"
              rounded
              class="px-4 text-black"
              :disabled="!contentSecond.introduce.to"
            >
              {{ contentSecond.introduce.name }}
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card-actions v-if="xs" class="full-width">
          <v-btn
            outlined
            :color="linkBtnColor"
            :to="contentSecond.introduce.to"
            :style="btnInServiceCard"
            block
            rounded
            class="px-7 ml-n1"
            :disabled="!contentSecond.introduce.to"
          >
            {{ contentSecond.introduce.name }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- End: 이미지 -->
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

const setContainerHeight = computed(() => (xs.value ? '450' : '500'))
const setSecondaryCardHeight = computed(() => (xs.value ? '200' : '500'))
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
  font-size: 2rem;
}

.service-exp {
  font-size: 1.6rem;
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

.edu-video {
  height: 270px;
}

.service-text {
  text-shadow: 2px 2px 3px rgba(34, 34, 34, 0.8);
}
</style>
