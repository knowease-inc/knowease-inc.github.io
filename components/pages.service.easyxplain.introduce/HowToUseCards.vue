<template>
  <v-card flat tile>
    <v-container fluid>
      <v-row justify="center" align="center" no-gutters>
        <v-col v-for="(item, i) in items" :key="i" cols="12" sm="4">
          <v-card flat outlined class="ma-1">
            <v-list-item three-line>
              <!-- Start: Image -->
              <v-list-item-avatar :size="avatarSize" tile>
                <v-img :src="item.image" />
              </v-list-item-avatar>

              <!-- Start: Content -->
              <v-list-item-content>
                <v-list-item-title class="contentTitle">
                  {{ item.title }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  {{ item.detail }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
@Component({})
class PagesIntroduceHowToUseCards extends Vue {
  @Provide() avatarSize: string = '40px'
  @Provide() items: Array<{
    title: string
    detail: string
    image: string
  }> = [
    {
      title: '필요 정보 찾기',
      detail: '전문/기술 용어의 설명 또는 쉽게 작성된 가이드를 찾아보세요',
      image:
        '/img/pages.service.easyxplain.introduce.HowToUseCards/search_icon.png',
    },
    {
      title: "이거 '쉬워요' 누르기",
      detail: "정말 쉽게 작성된 설명에는 '쉬워요'를 주세요!",
      image:
        '/img/pages.service.easyxplain.introduce.HowToUseCards/lightbulb_icon.png',
    },
    {
      title: '쉬운 설명 작성',
      detail: '가이드 또는 전문/기술 용어 설명을 직접 쉽게 써주세요',
      image:
        '/img/pages.service.easyxplain.introduce.HowToUseCards/chat_icon.png',
    },
    {
      title: '가이드 주제/용어 등록',
      detail: '찾는 전문/기술 용어, 가이드 주제가 없다면 등록해주세요',
      image:
        '/img/pages.service.easyxplain.introduce.HowToUseCards/add_icon.png',
    },
    {
      title: '업적 달성 및 인증',
      detail: '다양한 업적을 달성, 설명 능력이 객관적 인증됩니다',
      image:
        '/img/pages.service.easyxplain.introduce.HowToUseCards/id_icon.png',
    },
  ]
}
export default PagesIntroduceHowToUseCards
</script>

<style scoped>
.contentTitle {
  font-weight: 600;
}
</style>
