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
              <div class="text-center contentTitle">차별성</div>
              <div class="text-center contentSubTitle">
                다른 지식데이터베이스 서비스와 다른점은?
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <differentiation />

        <!-- ### Start : Usage ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentTitle">참여 방법</div>
              <div class="text-center contentSubTitle">
                '전문/기술 용어' 또는 '가이드' 내에서
              </div>
              <div class="text-center contentSubTitle">
                쉬운 설명을 찾거나, 쓰거나, 알려주세요.
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <how-to-use-cards />

        <!-- ### Start : Timeline ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentTitle">함께해 온 길</div>
              <div class="text-center contentSubTitle">
                쉬운 설명을 손 꼽아온 여정
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

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import IntroduceCarousel from '@/components/pages.service.meaniit.introduce/Carousel.vue'
import HowToUseCards from '@/components/pages.service.meaniit.introduce/HowToUseCards.vue'
import Differentiation from '~/components/pages.service.meaniit.introduce/Differentiation.vue'
import Timeline from '~/components/pages.service.meaniit.introduce/Timeline.vue'

@Component({
  components: {
    IntroduceCarousel,
    Differentiation,
    HowToUseCards,
    Timeline,
  },
  head() {
    return {
      title: '미닛 - 서비스 소개',
    }
  },
  data() {
    return {
      issuesListResult: [],
    }
  },
})
class PagesServiceEasyxplainIntroduce extends Vue {
  /* computed */
  get mainCardMaxWidth(): number {
    const maxWidth: number =
      this.$vuetify.breakpoint.width < 860
        ? this.$vuetify.breakpoint.width
        : 860
    return maxWidth
  }
}

export default PagesServiceEasyxplainIntroduce
</script>
