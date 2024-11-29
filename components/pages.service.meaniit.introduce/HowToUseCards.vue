<template>
  <v-row v-if="smAndUp" justify="center" class="ga-8">
    <v-col cols="10">
      <div
        v-for="(htxt, hidx) in howUse"
        :key="hidx"
        class="content-title text-center pt-8"
      >
        {{ htxt }}
      </div>
    </v-col>

    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
      class="d-flex justify-center"
    >
      <v-card
        flat
        :class="smAndUp ? 'rounded-xl' : 'rounded-0'"
        :width="smAndUp ? '100%' : '93%'"
        :height="smAndUp ? '200' : '300'"
        class="d-flex justify-space-between pa-md-8 pa-sm-4 pr-0"
      >
        <v-col cols="8" class="pt-8">
          <v-card-title class="card-title py-md-4">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle class="contentSubText">
            {{ item.detail }}
          </v-card-subtitle>
        </v-col>

        <v-col cols="4" md="3" align-self="center">
          <v-img :src="item.image" contain width="imgSize"
        /></v-col>
      </v-card>
    </v-col>
  </v-row>

  <v-row v-if="xs" justify="center" class="ga-4">
    <v-col cols="10">
      <div
        v-for="(htxt, hidx) in howUse"
        :key="hidx"
        class="content-title-xs text-center mt-4"
      >
        {{ htxt }}
      </div>
    </v-col>

    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
      class="d-flex justify-center"
    >
      <v-card flat class="d-flex justify-space-between pa-0 rounded-lg">
        <v-col cols="12">
          <v-card-title class="card-title-xs py-4">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle class="contentSubText-xs">
            {{ item.detail }}
          </v-card-subtitle>

          <v-col offset="2" cols="8">
            <v-img :src="item.image" contain width="imgSizeXS" />
          </v-col>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()

const imgSize = '500'
const imgSizeXS = '100'
const items = [
  {
    title: '검색어 입력',
    detail: '입력한 검색어를 토대로 관련 주제, 추가 키워드를 얻어요',
    image: '/img/search.png',
  },
  {
    title: '기간 설정',
    detail: '지금으로부터 언제까지의 자료를 바탕으로 분석을 시작할지 정해요',
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
]

const howUse = [
  '어떤 자료를 모으고, 어떤 주제로 글을 쓸지',
  '정해주기만 하면 보고서가 메일로 와요',
]
</script>

<style scoped>
.card-title {
  font-size: 2rem;
  font-weight: 700;
}

.border-none {
  border: none;
}

.content-title {
  font-size: 3rem;
  font-weight: 800;
}

.contentSubText {
  font-size: 1.4rem;
  font-weight: 400;

  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.card-title-xs {
  font-size: 1.6rem;
  font-weight: 700;
}

.content-title-xs {
  font-size: 1.6rem;
  font-weight: 800;
}

.contentSubText-xs {
  font-size: 1.2rem;
  font-weight: 400;
  white-space: normal;
}
</style>
