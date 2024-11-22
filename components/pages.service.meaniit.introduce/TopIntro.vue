<template>
  <v-row align="center" no-gutters style="height: 100vh; font-size: 4rem">
    <v-col cols="10" class="d-flex align-center justify-center">
      <v-col cols="9" class="mr-n9" style="z-index: 100">
        <div class="d-flex bounce">
          쉬운 조사 보고서
          <v-sheet
            style="background-color: white"
            class="rounded-lg d-flex align-center ml-sm-4 ml-2 pa-4"
            width="180"
            height="80"
          >
            <v-img
              :src="imgs.logo"
              :width="smAndUp ? '50' : '60'"
              class="bounce"
            />
          </v-sheet>
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

      <v-col cols="4" class="ml-n6">
        <video
          :src="imgs.video"
          autoplay
          loop
          muted
          style="max-width: 220%; max-height: 220%"
        />
      </v-col>
    </v-col>
  </v-row>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()

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
</style>
