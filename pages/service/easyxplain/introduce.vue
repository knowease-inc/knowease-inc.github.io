<template>
  <v-row justify="center" align="center">
    <v-card
      flat
      :max-width="mainCardMaxWidth"
      class="ma-0 pa-0"
      color="rgba(0, 0, 0, 0)"
    >
      <!-- ### Start : Company Mission ### -->
      <title-standard upper-title="목표"></title-standard>
      <!-- ### Mission 설명 도식화 이미지 삽입 ### -->
      <v-card flat outlined class="mx-0 mx-sm-4 mt-3">
        <v-img
          class="mx-auto my-4"
          src="/img/easiest_plainest_explanation_20201030.png"
          alt="Our Mission"
          width="250"
          contain
        >
        </v-img>
      </v-card>
      <body-standard
        upper-body="전문/기술 용어의 가장 쉬운 설명을 공유하고 제공 받을 수 있도록
              만들어 세상의 지식 격차를 해소한다."
      ></body-standard>
      <!-- ### Start : Service Introduce ### -->
      <title-standard upper-title="소개"></title-standard>
      <body-standard
        upper-body="&nbsp;&nbsp;지식의 저주가 있습니다. 어떤 지식에 대해 잘 아는 사람은 그것을
              전혀 모르는 사람에게 쉽게 설명하는 것이 어렵게 되는 저주입니다.<br>&nbsp;&nbsp;잘 아는 사람은 
              이미 알기 때문에 간단하지만 중요한 부분을 생략하거나, 이제는 당연한 것이 되어버린 
              정확하지만 어려운 용어를 활용해 설명하게 되기 때문입니다. 그래서 그 설명은 어렵고,
              많은 사람들이 지식 습득의 첫 걸음에 높은 장벽을 느껴 포기하게 됩니다.<br>&nbsp;&nbsp;그러므로
              우리는 쉽게 설명하는 사람들의 '쉬운 설명'을 모으고 공유하여, 많은 사람들이
              전문/기술 용어의 이해가 반드시 필요한 순간 포기하지 않게 만들어 세상의 지식 격차가 해소되길 
              바랐습니다."
      ></body-standard>
      <!-- ### Start : Usage ### -->
      <title-standard upper-title="사용"></title-standard>
      <body-standard
        upper-body="&nbsp;&nbsp;1. 전문/기술 용어의 쉬운 설명들을 얻어요.<br />
              &nbsp;&nbsp;2. 다른 이의 쉬운 설명에 '쉬워요'를 주세요.<br />
              &nbsp;&nbsp;3. 직접 쉬운 설명을 등록하면 쉽게 설명하는 능력을 인정받아요.<br />
              &nbsp;&nbsp;4. 찾는 전문/기술 용어가 없다면 직접 등록해주세요. 쉬운 설명이 추가됩니다.<br />
              &nbsp;&nbsp;5. 작성 시 주의사항은 <a href='/service/easyxplain/regulations'>규정</a>을 참고해주세요."
      ></body-standard>
      <!-- ### Start : Service History ### -->
      <title-standard upper-title="연혁"></title-standard>
      <history></history>
      <v-divider light class="mb-12 mx-4"></v-divider>
      <!-- ### Start : Founders ### -->
      <title-standard upper-title="인원"></title-standard>
      <founders></founders>
      <!-- ### Start : Contact ### -->
      <title-standard upper-title="연락"></title-standard>
      <v-card class="mx-0 mx-sm-4 mt-3 pa-3" outlined flat>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="article-body mb-1">
              <v-icon small> mdi-email </v-icon>
              &nbsp;msp770@gmail.com
            </v-list-item-title>
            <v-list-item-title class="article-body mb-1">
              <v-icon small> mdi-phone </v-icon>
              &nbsp;010-8920-3726
            </v-list-item-title>
            <v-list-item-subtitle class="pl-4"
              >*고객지원, 투자 관련 연락 모두 지원합니다.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import History from '@/components/pages.introduce/Timeline.vue'
import Founders from '@/components/pages.introduce/Founders.vue'
import TitleStandard from '@/components/pages.loopedcomponents/Title.vue'
import BodyStandard from '@/components/pages.loopedcomponents/Body.vue'

@Component({
  components: {
    History,
    TitleStandard,
    BodyStandard,
    Founders,
  },
  head() {
    return {
      title: 'EASYXPLAIN 소개',
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
class ServiceEasyxplainIntroduce extends Vue {
  @Provide() isActive: boolean = false
}

export default ServiceEasyxplainIntroduce
</script>

<style scoped>
.main-contents {
  position: relative;
  z-index: 1;
}
</style>
