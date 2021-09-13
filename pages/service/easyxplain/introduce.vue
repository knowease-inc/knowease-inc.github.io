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

        <!-- ### Start : Usage ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentTitle">EASYXPLAIN 참여 방법</div>
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

        <!-- ### Start : Why Service ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item>
            <v-list-item-content>
              <div class="text-center contentTitle">EASYXPLAIN 차별성</div>
              <div class="text-center contentSubTitle">
                다른 지식데이터베이스 서비스와 다른점은?
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <differentiation />

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

        <!-- ### Start : Timeline ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentTitle">소통의 장</div>
              <div class="text-center contentSubTitle">
                언제 어디서나 여러분의 의견이 최우선입니다.
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

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
import IntroduceCarousel from '@/components/pages.service.easyxplain.introduce/Carousel.vue'
import HowToUseCards from '@/components/pages.service.easyxplain.introduce/HowToUseCards.vue'
import Differentiation from '~/components/pages.service.easyxplain.introduce/Differentiation.vue'
import Timeline from '~/components/pages.service.easyxplain.introduce/Timeline.vue'

@Component({
  components: {
    IntroduceCarousel,
    Differentiation,
    HowToUseCards,
    Timeline,
  },
  head() {
    return {
      title: 'EASYXPLAIN - 서비스 소개',
    }
  },
  computed: {
    mainCardMaxWidth(): number {
      const maxWidth: number =
        this.$vuetify.breakpoint.width < 860
          ? this.$vuetify.breakpoint.width
          : 860
      return maxWidth
    },
  },
  data() {
    return {
      issuesListResult: [],
    }
  },
})
class PagesServiceEasyxplainIntroduce extends Vue {}

export default PagesServiceEasyxplainIntroduce
</script>

<style scoped>
.contentTitleCard {
  margin-top: 85px;
  margin-bottom: 15px;
}
.contentTitle {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
}
.contentSubTitle {
  font-size: 14px;
  font-weight: 400;
}
</style>
