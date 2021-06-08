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
        <!-- ### Start : Top List ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="d-flex justify-center align-center contentTitle">
                {{ titleOfList.top.name }}
              </div>
              <div class="d-flex justify-center align-center contentText">
                {{ titleOfList.top.description }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <achievements-card-list :parent-items="topItems" />

        <!-- ### Start : Related Tester List ### -->
        <v-card flat tile class="contentTitleCard">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="d-flex justify-center align-center contentSubTitle">
                {{ titleOfList.tester.name }}
              </div>
              <div class="d-flex justify-center align-center contentText">
                {{ titleOfList.tester.description }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <achievements-card-list :parent-items="testerItems" />
      </v-card>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import achievementsCardList from '@/components/pages.service.easyxplain.achievements/CardList.vue'

@Component({
  components: {
    achievementsCardList,
  },
  head() {
    return {
      title: 'EASYXPLAIN - 업적 목록',
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
  // ------ 업적 구분 ------ //
  @Provide() titleOfList: {
    top: {
      name: string
      description: string
    }
    tester: {
      name: string
      description: string
    }
  } = {
    top: {
      name: '업적 목록',
      description: '여러 활동을 통해 얻을 수 있는 업적',
    },
    tester: {
      name: '테스터',
      description: '테스트 기간 내 참여해주신 분들 대상 업적',
    },
  }

  // ------ 업적 내용 ------ //
  @Provide() topItems: Array<{
    title: string
    detail: string
    image: string
  }> = [
    {
      title: '필요 정보 찾기',
      detail: '전문/기술 용어의 설명 또는 쉽게 작성된 가이드를 찾아보세요',
      image: '/img/search_icon.png',
    },
  ]

  @Provide() testerItems: Array<{
    title: string
    detail: string
    image: string
  }> = [
    {
      title: '필요 정보 찾기',
      detail: '전문/기술 용어의 설명 또는 쉽게 작성된 가이드를 찾아보세요',
      image: '/img/search_icon.png',
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
