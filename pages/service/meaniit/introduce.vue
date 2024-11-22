<template>
  <v-container class="d-flex flex-column" fluid>
    <!-- ### Start : Top ### -->
    <v-row justify="center">
      <v-col cols="12" sm="9">
        <TopIntro />
      </v-col>
    </v-row>

    <!-- <ImageSlide /> -->

    <!-- ### Start : Why Service ### -->
    <v-row justify="center" style="background-color: #e6e9f0; height: 120vh">
      <v-col class="d-flex align-center" cols="10" sm="10">
        <Differentiation />
      </v-col>
    </v-row>

    <!-- ### Start :Usage ### -->
    <v-row
      justify="center"
      align="center"
      style="background-color: #3746fb; height: 250vh"
    >
      <v-col cols="10" sm="10">
        <HowToUseCards />
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

const { xs, smAndUp } = useDisplay()

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
</script>

<style scoped>
.differ-padding {
  padding: 100px 0 30px 0;
}
</style>
