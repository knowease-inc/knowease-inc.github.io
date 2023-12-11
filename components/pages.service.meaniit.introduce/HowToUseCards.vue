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

<script>
export default {
  data() {
    return {
      avatarSize: '40px',
      items: [
        {
          title: '검색어 입력',
          detail: '입력한 검색어를 토대로 관련 주제, 추가 키워드를 얻어요',
          image:
            '/img/pages.service.meaniit.introduce.HowToUseCards/search_icon.png',
        },
        {
          title: '기간 설정',
          detail: '지금으로부터 언제까지의 자료를 바탕으로 분석을 시작할지 정해요',
          image:
            '/img/pages.service.meaniit.introduce.HowToUseCards/lightbulb_icon.png',
        },
        {
          title: '핵심 주제 입력',
          detail: '조사한 자료로부터 해당 주제를 중심으로 글을 써요',
          image:
            '/img/pages.service.meaniit.introduce.HowToUseCards/chat_icon.png',
        },
        {
          title: '이메일 입력',
          detail: '보고서 작성 완료 시, 입력한 이메일로 결과가 전송되요',
          image:
            '/img/pages.service.meaniit.introduce.HowToUseCards/add_icon.png',
        },
        {
          title: '보고서 첨삭(AI)',
          detail: '추가 조사 및 작성/수정 요청, 또는 직접 수정이 가능해요',
          image:
            '/img/pages.service.meaniit.introduce.HowToUseCards/id_icon.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.contentTitle {
  font-weight: 600;
}
</style>
