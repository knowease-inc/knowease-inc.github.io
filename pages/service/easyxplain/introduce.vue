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
              <div class="d-flex justify-center align-center contentTitle">
                EASYXPLAIN 참여 방법
              </div>
              <div class="d-flex justify-center align-center contentSubTitle">
                쉬운 설명을 찾거나, 쓰거나, 알려주세요.
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <how-to-use-cards />

        <!-- ### Start : Flaticon attribute ### -->
        <v-card flat tile>
          <v-card-text class="d-flex justify-center">
            <div>
              Icons made by
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
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import IntroduceCarousel from '@/components/pages.introduce/Carousel.vue'
import HowToUseCards from '@/components/pages.introduce/HowToUseCards.vue'

@Component({
  components: {
    IntroduceCarousel,
    HowToUseCards,
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
})
class PagesServiceEasyxplainIntroduce extends Vue {
  @Provide() isActive: boolean = false
  @Provide() usageText: string =
    '&nbsp;&nbsp;1. 전문/기술 용어의 쉬운 설명들을 얻어요.<br />' +
    "2. 다른 이의 쉬운 설명에 '쉬워요'를 주세요.<br />" +
    '3. 직접 쉬운 설명을 등록하면 쉽게 설명하는 능력을 인정받아요.<br />' +
    '4. 찾는 전문/기술 용어가 없다면 직접 등록해주세요. 쉬운 설명이 추가됩니다.<br />' +
    "5. 작성 시 주의사항은 <a href='/service/easyxplain/regulations'>규정</a>을 참고해주세요."

  @Provide() whyServiceText: string =
    '&nbsp;&nbsp;지식의 저주가 있습니다. 어떤 지식에 대해 잘 아는 사람은 그것을' +
    '전혀 모르는 사람에게 쉽게 설명하는 것이 어렵게 되는 저주입니다.<br> 잘 아는 사람은' +
    '이미 알기 때문에 간단하지만 중요한 부분을 생략하거나, 이제는 당연한 것이 되어버린' +
    '정확하지만 어려운 용어를 활용해 설명하게 되기 때문입니다. 그래서 그 설명은 어렵고,' +
    '많은 사람들이 지식 습득의 첫 걸음에 높은 장벽을 느껴 포기하게 됩니다.<br> 그러므로' +
    "우리는 쉽게 설명하는 사람들의 '쉬운 설명'을 모으고 공유하여, 많은 사람들이" +
    '전문/기술 용어의 이해가 반드시 필요한 순간 포기하지 않게 만들어 세상의 지식 격차가 해소되길 ' +
    '바랐습니다.'
}

export default PagesServiceEasyxplainIntroduce
</script>

<style scoped>
.contentTitleCard {
  margin-top: 45px;
  margin-bottom: 5px;
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
