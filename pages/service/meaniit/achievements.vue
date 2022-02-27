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
        <!-- ### Start : Top List (Main) ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentTitle">
                {{ titleOfList.top.name }}
              </div>
              <div class="text-center contentText">
                {{ titleOfList.top.description }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <achievements-card-list v-if="tempBlind" :parent-items="topItems" />

        <!-- ### Start : Related Tester List (Sub) ### -->
        <v-divider v-if="tempBlind" class="mx-3 mt-3" />
        <v-card v-if="tempBlind" flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentSubTitle">
                {{ titleOfList.tester.name }}
              </div>
              <div class="text-center contentText">
                {{ titleOfList.tester.description }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <achievements-card-list :parent-items="testerItems" />

        <!-- ### Start : Related Executives List (Sub) ### -->
        <v-divider class="mx-3 mt-3" />
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-center contentSubTitle">
                {{ titleOfList.executives.name }}
              </div>
              <div class="text-center contentText">
                {{ titleOfList.executives.description }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <achievements-card-list :parent-items="executivesItems" />

        <!-- ### Start : Final Update Date ### -->
        <v-divider class="mx-3 mt-3" />
        <v-card-text class="text-center mt-10 py-1">
          {{ lastUpdate }}
        </v-card-text>

        <!-- ### Start : Flaticon attribute ### -->
        <v-card-text class="text-center py-1">
          <div>
            Icons on this page made by
            <a href="https://www.freepik.com" title="Freepik">Freepik</a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon"
              >www.flaticon.com</a
            >
          </div>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import achievementsCardList from '@/components/pages.service.meaniit.achievements/CardList.vue'

@Component({
  components: {
    achievementsCardList,
  },
  head() {
    return {
      title: '미닛 - 업적 목록',
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
class PagesServiceEasyxplainAchievements extends Vue {
  @Provide() tempBlind: boolean = false // 미반영 업적
  @Provide() lastUpdate: string = '마지막 추가 업데이트 : 2021.9.15'

  // ------ Category of Achievements ------ //
  @Provide() titleOfList: {
    top: {
      name: string
      description: string
    }
    tester: {
      name: string
      description: string
    }
    executives: {
      name: string
      description: string
    }
  } = {
    top: {
      name: '업적 목록',
      description: '여러 활동을 통해 얻을 수 있는 업적',
    },
    tester: {
      name: '테스터 관련',
      description: '테스트 기간 내 참여해주신 분들 대상',
    },
    executives: {
      name: '운영 관련',
      description: '서비스 구축 및 운영에 참여한 분들 대상',
    },
  }

  // ------ Content of Achievement ------ //
  @Provide() topItems: Array<{
    title: string
    description: string
    image: string
  }> = [
    {
      title: '일타강사',
      description: "'쉬워요' 10개 획득",
      image: '/img/search_icon.png',
    },
    {
      title: '백타강사',
      description: "'쉬워요' 100개 획득",
      image: '/img/search_icon.png',
    },
    {
      title: '천타강사',
      description: "'쉬워요' 1,000개 획득",
      image: '/img/search_icon.png',
    },
    {
      title: '만타강사',
      description: "'쉬워요' 10,000개 획득",
      image: '/img/search_icon.png',
    },
    {
      title: '빛',
      description: "최초의 '쉬워요' 부여",
      image: '/img/search_icon.png',
    },
    {
      title: '따뜻한 빛',
      description: "'쉬워요' 10개 부여",
      image: '/img/search_icon.png',
    },
    {
      title: '작물을 키우는 빛',
      description: "'쉬워요' 100개 부여",
      image: '/img/search_icon.png',
    },
    {
      title: '세상을 비추는 빛',
      description: "'쉬워요' 1,000개 부여",
      image: '/img/search_icon.png',
    },
    {
      title: '첫걸음',
      description: '전문/기술 용어 설명 또는 가이드 내용 1개 등록',
      image: '/img/search_icon.png',
    },
    {
      title: '갈증',
      description: '전문/기술 용어 또는 가이드 주제 1개 등록',
      image: '/img/search_icon.png',
    },
    {
      title: '타오르는 갈증',
      description: '전문/기술 용어 또는 가이드 주제 10개 등록',
      image: '/img/search_icon.png',
    },
    {
      title: '불 타오르는 갈증',
      description: '전문/기술 용어 또는 가이드 주제 100개 등록',
      image: '/img/search_icon.png',
    },
  ]

  @Provide() testerItems: Array<{
    title: string
    description: string
    image: string
  }> = [
    {
      title: '베타테스터(--%)',
      description:
        '1차 베타 테스트 기간 중 <테스터 활동> 최소 1개 달성 또는 상위권(5/10/30%) 포함', // '(*테스터 활동 : 용어 등록/설명 작성/가이드 등록/내용 작성/쉬워요 주기/설문지 작성 기준 개수 달성)'
      image: 'img/pages.service.meaniit.achevements/betatester_icon.png',
    },
    {
      title: '베타테스터(--%)+',
      description:
        '1차 베타 테스트 기간 중 <테스터 활동> 모두 달성과 상위권(5/10/30%) 포함',
      image: 'img/pages.service.meaniit.achevements/betatester_plus_icon.png',
    },
    {
      title: '알파테스터(--%)',
      description:
        '알파 테스트 기간 중 <테스터 활동> 최소 1개 달성 또는 상위권(5/10/30%) 포함', // '(*테스터 활동 : 설명 작성/용어 등록/쉬워요 주기/설문지 작성 기준 개수 달성)'
      image: 'img/pages.service.meaniit.achevements/alphatester_icon.png',
    },
    {
      title: '알파테스터(--%)+',
      description:
        '알파 테스트 기간 중 <테스터 활동> 4개 달성과 상위권(5/10/30%) 포함',
      image: 'img/pages.service.meaniit.achevements/alphatester_plus_icon.png',
    },
  ]

  @Provide() executivesItems: Array<{
    title: string
    description: string
    image: string
  }> = [
    {
      title: '설립자',
      description: '미닛 설립 멤버',
      image: 'img/pages.service.meaniit.achevements/founder_icon.png',
    },
  ]
}

export default PagesServiceEasyxplainAchievements
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
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
}
.contentText {
  font-size: 14px;
  font-weight: 400;
}
</style>
