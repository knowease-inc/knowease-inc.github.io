<template>
  <div class="position-relative">
    <v-row justify="space-between">
      <v-col
        cols="6"
        align-self="center"
        class="white--text pb-0 main-font-size"
      >
        <div class="d-flex">
          가장 쉬운 설명은
          <div
            style="background-color: white"
            class="rounded-lg d-flex align-center ml-3 px-2"
          >
            <v-img :src="imgs.logo" width="90" />
          </div>
        </div>
        <span class="font-weight-black">미닛의 서비스를 소개</span>합니다
      </v-col>
      <v-col cols="4" offset="2" class="pb-0">
        <v-img :src="imgs.topIntro" width="200" :aspect-ratio="4 / 5" />
      </v-col>
    </v-row>

    <v-row class="position-absolute">
      <v-col cols="6" class="pl-1">
        <v-card height="180" class="rounded-xl d-flex flex-column align-center">
          <v-card-subtitle>
            <v-img :src="imgs.duplication" width="50" />
          </v-card-subtitle>

          <v-card-text>
            <p
              :class="upperTextClass"
              class="my-4 text-center text--primary"
              v-html="items.text.left"
            ></p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" class="pr-1">
        <v-card height="180" class="rounded-xl d-flex flex-column align-center">
          <v-card-subtitle>
            <v-img :src="imgs.badge" width="45" />
          </v-card-subtitle>

          <v-card-text>
            <p
              :class="upperTextClass"
              class="my-4 text-center text--primary"
              v-html="items.text.right"
            ></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: {
        topIntro: '/img/intro_top.png',
        logo: 'https://dmq1lrjfpg713.cloudfront.net/img/logo.png',
        duplication: '/img/duplication.png',
        badge: '/img/badge.png',
      },
      items: {
        text: {
          left:
            '누구든지 쉽고 빠르게<br />AI 기술 통한 자료조사, 보고서 초안 작성',
          right:
            '작업은 간소화하고 조사량은 늘리고, 놓치지 않는 자료 출처까지<br />업무 효율을 극대화하세요',
        },
      },
    }
  },
}
</script>

<style scoped>
.main-font-size {
  font-size: 28px;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
  top: 75%;
  width: 100%;
}
</style>
