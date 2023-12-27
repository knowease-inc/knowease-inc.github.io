<template>
  <v-row
    justify="end"
    no-gutters
    :style="{ marginLeft: $vuetify.breakpoint.smAndUp ? '-220px' : '' }"
    class="my-sm-0 my-4"
  >
    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
      sm="4"
      :offset="i === 0 ? 4 : 0"
    >
      <v-card
        flat
        outlined
        class="ma-sm-2 pa-2 mt-3 overflow-hidden d-flex flex-sm-column flex-row"
        :class="
          $vuetify.breakpoint.smAndUp ? 'rounded-xl' : 'rounded-0 border-none'
        "
      >
        <v-list-item
          three-line
          class="order-sm-0"
          :class="{ 'order-1 text-right': $vuetify.breakpoint.xsOnly && i % 2 }"
        >
          <!-- Start: Content -->
          <v-list-item-content>
            <v-list-item-title class="content-title">
              {{ item.title }}
            </v-list-item-title>

            <v-list-item-subtitle>
              {{ item.detail }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- Start: Image -->
        <v-list-item-avatar
          :size="$vuetify.breakpoint.smAndUp ? avatarSize : avatarSizeXS"
          tile
          :class="{
            'mb-n3': $vuetify.breakpoint.smAndUp,
            'order-0': !($vuetify.breakpoint.xsOnly && i % 2),
          }"
          class="order-sm-1"
        >
          <v-img :src="item.image" contain />
        </v-list-item-avatar>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      avatarSize: '110',
      avatarSizeXS: '100',
      items: [
        {
          title: '검색어 입력',
          detail: '입력한 검색어를 토대로 관련 주제, 추가 키워드를 얻어요',
          image: '/img/search.png',
        },
        {
          title: '기간 설정',
          detail:
            '지금으로부터 언제까지의 자료를 바탕으로 분석을 시작할지 정해요',
          image: '/img/press_easy.png',
        },
        {
          title: '핵심 주제 입력',
          detail: '조사한 자료로부터 해당 주제를 중심으로 글을 써요',
          image: '/img/write.png',
        },
        {
          title: '이메일 입력',
          detail: '보고서 작성 완료 시, 입력한 이메일로 결과가 전송되요',
          image: '/img/register.png',
        },
        {
          title: '보고서 첨삭(AI)',
          detail: '추가 조사 및 작성/수정 요청, 또는 직접 수정이 가능해요',
          image: '/img/achieve.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.content-title {
  font-weight: 600;
}

.border-none {
  border: none;
}
</style>
