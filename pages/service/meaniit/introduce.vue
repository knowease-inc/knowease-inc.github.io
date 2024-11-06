<template>
  <v-container class="d-flex flex-column" fluid>
    <!-- ### Start : Top ### -->
    <v-row style="background-color: #3746fb" justify="center">
      <v-col cols="12" sm="7">
        <TopIntro />
      </v-col>
    </v-row>

    <!-- ### Start : Why Service ### -->
    <v-row :class="{ 'differ-padding': smAndUp }">
      <v-col class="d-flex flex-column align-center">
        <v-card flat tile class="contentTitleCard">
          <p class="content-title">{{ differTitle }}</p>
          <div class="content-subtitle d-sm-flex" v-html="differSubTitle"></div>
        </v-card>

        <v-col cols="10" sm="7">
          <Differentiation />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start :Usage ### -->
    <v-row
      style="background-color: #e6e9f0"
      justify="center"
      class="pb-sm-15 pt-sm-7"
    >
      <v-col cols="12" sm="7" class="d-sm-flex">
        <v-col
          cols="12"
          sm="4"
          class="pt-5"
          :class="smAndUp ? 'text-start' : 'text-center'"
        >
          <div
            v-for="(htxt, hidx) in howUse"
            :key="hidx"
            class="contentSubTitle"
          >
            {{ htxt }}
          </div>
          <div class="contentTitle mt-3">사용 방법</div>
        </v-col>

        <v-col cols="12" sm="8" class="pa-sm-3 pa-0">
          <HowToUseCards />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : Timeline ### -->
    <v-row justify="center" no-gutters class="mt-16">
      <v-col cols="12" class="d-flex flex-column align-center">
        <p class="content-title">{{ timelineTitle }}</p>
        <v-col class="d-flex" sm="4">
          <v-col cols="12" class="content-subtitle font-weight-bold pa-0">
            {{ timelineSubTitle }}
          </v-col>

          <v-col v-if="smAndUp" cols="12" offset="4" class="py-0">
            <v-btn
              :disabled="carouselIndex === 0"
              size="x-large"
              variant="text"
              :icon="mdiChevronLeft"
              @click="triggerCarouselAction('left')"
            />
            <v-btn
              size="x-large"
              variant="text"
              :icon="mdiChevronRight"
              @click="triggerCarouselAction('right')"
            />
          </v-col>
        </v-col>

        <IntroduceTimeline @update-carousel-index="updateCarouselIndex" />

        <v-col v-if="xs" cols="auto" class="mb-8">
          <v-btn
            :disabled="carouselIndex === 0"
            size="x-large"
            variant="text"
            :icon="mdiChevronLeft"
            @click="triggerCarouselAction('left')"
          />
          <v-btn
            size="x-large"
            variant="text"
            :icon="mdiChevronRight"
            @click="triggerCarouselAction('right')"
          />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : Flaticon attribute ### -->
    <v-row justify="center">
      <v-col cols="8">
        <v-card flat tile class="mt-10">
          <v-card-text class="text-center">
            <div>
              Icons on this page made by
              <a href="https://www.freepik.com" title="Freepik">Freepik</a>,
              <a
                href="https://www.flaticon.com/authors/eucalyp"
                title="Eucalyp"
              >
                Eucalyp </a
              >,
              <a
                href="https://www.flaticon.com/authors/payungkead"
                title="Payungkead"
              >
                Payungkead </a
              >,
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              >
                Pixel perfect </a
              >,
              <a
                href="https://www.flaticon.com/authors/dmitri13"
                title="dmitri13"
              >
                dmitri13
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import TopIntro from '~/components/pages.service.meaniit.introduce/TopIntro.vue'
import HowToUseCards from '~/components/pages.service.meaniit.introduce/HowToUseCards.vue'
import Differentiation from '~/components/pages.service.meaniit.introduce/Differentiation.vue'
import IntroduceTimeline from '~/components/pages.service.meaniit.introduce/Timeline.vue'

import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

const { xs, smAndUp } = useDisplay()
const emit = defineEmits(['carousel-action'])

const differTitle = '차별성'
const differSubTitle =
  '다른 보고서 자동화 서비스와 <div><span class="font-weight-bold ml-2">다른점</span>은?</div>'

const howUse = [
  '어떤 자료를 모으고, 어떤 주제로 글을 쓸지',
  '정해주기만 하면 보고서가 메일로 와요',
]

const timelineTitle = '함께해 온 길'
const timelineSubTitle = '정보기술 통한 정보 격차 해소 여정'
const carouselIndex = ref(0)

const mainCardMaxWidth = computed(() => {
  return width.value < 860 ? width.value : 860
})

const headTitle = '미닛 - 인공지능 자료조사'
const description =
  '자료조사부터 보고서 초안 작성까지 스스로, 첨삭 받아 추가 조사 및 수정까지 하는 AI로 업무 효율을 극대화하세요'
const ogDescription = description
const ogImgURL = 'https://dmq1lrjfpg713.cloudfront.net/og_20231209.png'

useHead({
  title: headTitle,
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: headTitle,
    },
    {
      property: 'og:description',
      content: ogDescription,
    },
    {
      property: 'og:image',
      content: ogImgURL,
    },
    {
      name: 'twitter:title',
      content: headTitle,
    },
    {
      name: 'twitter:description',
      content: ogDescription,
    },
    {
      name: 'twitter:image',
      content: ogImgURL,
    },
  ],
})
const triggerCarouselAction = (direction) => {
  emit('carousel-action', direction)
}

const updateCarouselIndex = (newIndex) => {
  carouselIndex.value = newIndex
}
</script>

<style scoped>
.differ-padding {
  padding: 100px 0 30px 0;
}

.content-title {
  color: #00c930;
  font-weight: 700;
  text-align: center;
}

.content-subtitle {
  font-size: 24px;
  text-align: center;
}
</style>
