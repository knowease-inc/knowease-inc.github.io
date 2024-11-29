<template>
  <v-row
    align="end"
    align-sm="center"
    no-gutters
    :style="{
      'font-size': lgAndUp
        ? '4rem'
        : smAndUp
          ? '3rem'
          : mdAndUp
            ? '3.5rem'
            : '1.6rem',
      height: smAndUp ? '100vh' : mdAndUp ? '100vh' : '120vh',
    }"
  >
    <v-col
      v-if="smAndUp"
      cols="12"
      md="10"
      class="d-md-flex align-center justify-center"
    >
      <v-col
        cols="9"
        offset-sm="2"
        offset-md="0"
        class="mr-n9"
        style="z-index: 100"
      >
        <div class="d-md-flex bounce">
          쉬운 조사 보고서
          <v-img
            :src="imgs.logo"
            :max-width="lgAndUp ? '180' : mdAndUp ? '140' : '120'"
            min-width="80"
            class="bounce ml-sm-4 ml-2 my-0 my-sm-4"
          />
        </div>
        <div class="bounce">
          <span class="font-weight-black">자료조사 AI를 소개</span>합니다
        </div>

        <v-col
          cols="12"
          style="font-size: 1.4rem; color: #6b7684"
          class="font-weight-bold"
        >
          <p class="my-8" v-html="items.text.first"></p>
          <p class="my-8" v-html="items.text.second"></p>
        </v-col>
        <v-btn color="#3746fb" size="large" href="https://ko.meaniit.com">
          서비스 바로가기
        </v-btn>
      </v-col>

      <v-col
        offset-sm="2"
        offset-md="0"
        sm="8"
        md="4"
        class="ml-md-n6 mt-sm-n9"
        align-self="start"
      >
        <video :src="imgs.video" autoplay loop muted class="responsive-image" />
      </v-col>
    </v-col>

    <v-col v-if="xs" cols="12" class="d-flex align-end">
      <v-col cols="12">
        <div class="d-flex bounce">
          쉬운 조사 보고서

          <v-img :src="imgs.logo" max-width="90" class="bounce ml-4" />
        </div>
        <div class="bounce">
          <span class="font-weight-black">자료조사 AI를 소개</span>합니다
        </div>

        <div style="font-size: 1.2rem; color: #6b7684" class="font-weight-bold">
          <p class="my-8" v-html="items.text.first"></p>
          <p class="my-8" v-html="items.text.second"></p>
        </div>

        <v-btn color="#3746fb" href="https://ko.meaniit.com">
          서비스 바로가기
        </v-btn>

        <div class="d-flex justify-center">
          <video :src="imgs.video" autoplay loop muted style="height: 350px" />
        </div>
      </v-col>
    </v-col>
  </v-row>
</template>

<script setup>
const { xs, smAndUp, mdAndUp, lgAndUp } = useDisplay()

const imgs = {
  topIntro: '/img/intro_top.png',
  logo: 'https://dmq1lrjfpg713.cloudfront.net/img/logo.png',
  duplication: '/img/duplication.png',
  badge: '/img/badge.png',
  video: '/img/anaysis.mp4',
}

const items = {
  text: {
    first: '누구든지 쉽고 빠르게<br />AI 기술 통한 자료조사, 보고서 초안 작성',
    second:
      '작업은 간소화하고 조사량은 늘리고, 놓치지 않는 자료 출처까지<br />업무 효율을 극대화하세요',
  },
}
</script>

<style scoped>
.main-font-size {
  font-size: 28px;
}
.main-font-size-xs {
  font-size: 20px;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
  top: 75%;
  width: 100%;
}

.opacity-img {
  opacity: 30%;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-15px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-7px);
  }
}

.bounce {
  animation: bounce 1s ease 1;
}

/* 기본 크기 설정 */
.responsive-image {
  max-width: 100%;
  max-height: 100%;
}

@media (min-width: 600px) {
  /* smAndUp 기준 */
  .responsive-image {
    max-width: 100%;
  }
}

@media (min-width: 960px) {
  /* mdAndUp 기준 */
  .responsive-image {
    max-width: 220%;
    max-height: 120%;
  }
}
</style>
