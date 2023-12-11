<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-card
      flat
      tile
      :max-width="mainCardMaxWidth"
      :min-height="$vuetify.breakpoint.height - 220"
      class="d-flex justify-center align-center mt-2"
    >
      <v-card flat tile>
        <!-- ### Start : Top Carousel ### -->
        <introduce-carousel />

        <!-- ### Start : Why Service ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item>
            <v-list-item-content>
              <div class="text-center contentTitle">{{ differTitle }}</div>
              <div class="text-center contentSubTitle">
                {{ differSubTitle }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <differentiation />

        <!-- ### Start : Usage ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentTitle">사용 방법</div>
              <div
                v-for="(htxt, hidx) in howUse"
                :key="hidx"
                class="text-center contentSubTitle"
              >
                {{ htxt }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <how-to-use-cards />

        <!-- ### Start : Timeline ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentTitle">{{ timelineTitle }}</div>
              <div class="text-center contentSubTitle">
                {{ timelineSubTitle }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <timeline />

        <!-- ### Start : Flaticon attribute ### -->
        <v-card flat tile class="mt-10">
          <v-card-text class="text-center">
            <div>
              Icons on this page made by
              <a href="https://www.freepik.com" title="Freepik">Freepik</a>,
              <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"
                >Eucalyp</a
              >,
              <a
                href="https://www.flaticon.com/authors/payungkead"
                title="Payungkead"
                >Payungkead</a
              >,
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
                >Pixel perfect</a
              >,
              <a
                href="https://www.flaticon.com/authors/dmitri13"
                title="dmitri13"
                >dmitri13</a
              >
              from
              <a href="https://www.flaticon.com/" title="Flaticon"
                >www.flaticon.com</a
              >
            </div>
          </v-card-text>
        </v-card>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import IntroduceCarousel from '@/components/pages.service.meaniit.introduce/Carousel.vue'
import HowToUseCards from '@/components/pages.service.meaniit.introduce/HowToUseCards.vue'
import Differentiation from '~/components/pages.service.meaniit.introduce/Differentiation.vue'
import Timeline from '~/components/pages.service.meaniit.introduce/Timeline.vue'

export default {
  components: {
    IntroduceCarousel,
    HowToUseCards,
    Differentiation,
    Timeline,
  },
  data() {
    return {
      differTitle: '차별성',
      differSubTitle: '다른 보고서 자동화 서비스와 다른점은?',

      howUse: [
        '어떤 자료를 모으고, 어떤 주제로 글을 쓸지',
        '정해주기만 하면 보고서가 메일로 와요',
      ],

      timelineTitle: '함께해 온 길',
      timelineSubTitle: '정보기술 통한 정보 격차 해소 여정',
    }
  },
  head() {
    return {
      title: '자료조사AI(미닛) - 서비스 소개',
      description: '스스로 자료조사부터 보고서 초안 작성, 첨삭 받아 추가 조사 및 수정까지 하는 AI로 업무 효율을 극대화하세요',
    }
  },
  computed: {
    mainCardMaxWidth() {
      return this.$vuetify.breakpoint.width < 860
        ? this.$vuetify.breakpoint.width
        : 860
    },
  },
}
</script>
