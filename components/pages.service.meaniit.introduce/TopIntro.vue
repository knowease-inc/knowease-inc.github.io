<template>
  <div :class="{ 'position-relative': smAndUp }">
    <v-row justify="space-between">
      <v-col
        cols="8"
        sm="6"
        align-self="center"
        class="white--text pb-0 pl-sm-3 pl-6 mt-12 mt-sm-0"
        :class="smAndUp ? 'main-font-size' : 'main-font-size-xs'"
      >
        <div class="d-flex">
          쉬운 조사 보고서는
          <div
            style="background-color: white"
            class="rounded-lg d-flex align-center ml-sm-3 ml-2 px-2"
          >
            <v-img :src="imgs.logo" :width="smAndUp ? '90' : '60'" />
          </div>
        </div>
        <span class="font-weight-black">자료조사 AI를 소개</span>합니다
      </v-col>
      <v-col cols="4" offset-sm="2" class="pb-0">
        <v-img
          :src="imgs.topIntro"
          width="200"
          :min-width="xs ? '140' : '200'"
          :aspect-ratio="4 / 5"
          class="ml-sm-0 ml-n10"
          :class="{ 'opacity-img': xs }"
        />
      </v-col>
    </v-row>

    <v-row :class="{ 'position-absolute': smAndUp }">
      <v-col cols="12" sm="6" class="pl-1 pr-sm-3 pr-0 py-sm-3 py-0">
        <v-card
          :height="smAndUp ? 180 : 220"
          :flat="xs"
          class="d-flex flex-column align-center"
          :class="smAndUp ? 'rounded-xl' : 'rounded-0 py-3'"
        >
          <v-card-subtitle>
            <v-img :src="imgs.duplication" width="50" />
          </v-card-subtitle>

          <v-card-text>
            <p
              class="my-4 text-center text--primary"
              v-html="items.text.first"
            ></p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="pr-1 pl-sm-3 pl-1 py-sm-3 py-0"
        :style="{
          boxShadow: xs ? '0px 5px 10px #eef4fe' : '',
        }"
      >
        <v-card
          :flat="xs"
          :height="smAndUp ? 180 : 220"
          class="d-flex flex-column align-center"
          :class="smAndUp ? 'rounded-xl' : 'rounded-0 py-3'"
        >
          <v-card-subtitle>
            <v-img :src="imgs.badge" width="45" />
          </v-card-subtitle>

          <v-card-text>
            <p
              class="my-4 text-center text--primary"
              v-html="items.text.second"
            ></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()

const imgs = {
  topIntro: '/img/intro_top.png',
  logo: 'https://dmq1lrjfpg713.cloudfront.net/img/logo.png',
  duplication: '/img/duplication.png',
  badge: '/img/badge.png',
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
</style>
