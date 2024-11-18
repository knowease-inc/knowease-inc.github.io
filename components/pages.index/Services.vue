<template>
  <v-row
    style="height: 180vh; font-size: 1.8rem"
    align="center"
    justify="center"
  >
    <div class="text-center pt-12 text-h4" style="line-height: 1.8">
      <div class="font-weight-bold">
        정보, 지식이 쉽고 빠르게 전달 및 소통 되도록 만드는
      </div>
      <div>모든 기술을 고민하고 그것들에 도전하고 있습니다.</div>
    </div>

    <!-- 첫번째 카드 -->
    <v-col cols="12" sm="12">
      <v-card
        :height="setContainerHeight"
        flat
        class="d-flex flex-sm-row align-sm-start justify-sm-center px-sm-9 my-sm-7 flex-column align-center justify-start rounded-xl overflow-hidden pt-7 px-1"
      >
        <v-card class="my-sm-auto my-0 mr-sm-9 pa-0 pb-3" flat>
          <v-card-title class="font-weight-bold content-title">
            {{ content.name }}
          </v-card-title>

          <v-card-subtitle class="content-subtitle">
            {{ content.explanation }}
          </v-card-subtitle>

          <v-card-actions v-if="smAndUp" class="pt-4 pl-4">
            <v-btn
              :disabled="!content.shortcut.href"
              :elevation="0"
              :color="linkBtnColor"
              :href="content.shortcut.href"
              :style="btnInServiceCard"
              variant="elevated"
              rounded
              class="px-4"
            >
              {{ content.shortcut.name }}
            </v-btn>
            <v-btn
              :color="linkBtnColor"
              :to="content.introduce.to"
              :style="btnInServiceCard"
              variant="outlined"
              rounded
              class="px-4"
            >
              {{ content.introduce.name }}
            </v-btn>
          </v-card-actions>

          <v-card-actions v-if="xs" class="d-flex flex-column">
            <v-btn
              :disabled="!content.shortcut.href"
              :dark="!!content.shortcut.href"
              :elevation="0"
              :color="linkBtnColor"
              :href="content.shortcut.href"
              :style="btnInServiceCard"
              variant="elevated"
              rounded
              class="mb-2"
              style="width: 100%"
            >
              {{ content.shortcut.name }}
            </v-btn>
            <v-btn
              :color="linkBtnColor"
              :to="content.introduce.to"
              :style="btnInServiceCard"
              variant="outlined"
              rounded
              class="px-7 ml-n1"
              style="width: 100%"
            >
              {{ content.introduce.name }}
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Start: Image -->
        <v-img src="/img/mobile_img.png" width="250" class="position-relative">
          <v-img
            src="https://dmq1lrjfpg713.cloudfront.net/img/logo.png"
            height="30"
            width="100"
            contain
            class="inside-logo-img"
          />
        </v-img>
      </v-card>
    </v-col>

    <!-- 두번째 카드 -->
    <v-col cols="12" sm="12">
      <v-card
        :height="setSecondaryCardHeight"
        flat
        class="d-flex align-center justify-center rounded-xl my-sm-7 pt-7 px-sm-9 px-3"
      >
        <v-card class="my-sm-auto my-0 mr-sm-9 pa-0 pb-3" flat>
          <v-card-title class="font-weight-bold content-title">
            {{ contentSecond.name }}
          </v-card-title>

          <v-card-subtitle class="content-subtitle">
            {{ contentSecond.explanation }}
          </v-card-subtitle>

          <v-card-actions v-if="smAndUp" class="pt-4 pl-4">
            <v-btn
              :color="linkBtnColor"
              :to="contentSecond.introduce.to"
              :style="btnInServiceCard"
              variant="outlined"
              rounded
              class="px-4"
              :disabled="!contentSecond.introduce.to"
            >
              {{ contentSecond.introduce.name }}
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card-actions v-if="xs" class="full-width">
          <v-btn
            outlined
            :color="linkBtnColor"
            :to="contentSecond.introduce.to"
            :style="btnInServiceCard"
            block
            rounded
            class="px-7 ml-n1"
            :disabled="!contentSecond.introduce.to"
          >
            {{ contentSecond.introduce.name }}
          </v-btn>
        </v-card-actions>

        <!-- Start: Image -->
        <v-img
          src="/img/eduSample.jpg"
          width="260"
          class="position-relative rounded-xl"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()

const linkBtnColor = '#3746fb'
const content = {
  name: 'Meaniit',
  explanation:
    '자료조사부터 보고서 초안 작성, 완성까지 함께하는 AI 솔루션 서비스',
  shortcut: {
    name: '바로가기',
    href: 'https://ko.meaniit.com/',
  },
  introduce: {
    name: '서비스 소개',
    to: '/service/meaniit/introduce',
  },
}
const contentSecond = {
  name: '교육 서비스',
  explanation:
    '알기 쉬운 AI, 디지털 전환(DX, Digital Transformation) 온·오프라인 교육, 세미나, 컨설팅 제공',
  introduce: {
    name: 'Contact',
    to: '',
  },
}
const btnInServiceCard = {
  minWidth: 0,
  paddingLeft: 0,
}

const setContainerHeight = computed(() => (xs.value ? '450' : '550'))
const setSecondaryCardHeight = computed(() => (xs.value ? '200' : '550'))
</script>

<style scoped>
.position-relative {
  position: relative;
}
.inside-logo-img {
  position: absolute;
  left: 27%;
  top: 22%;
}

.full-width {
  width: 100%;
}

.content-title {
  font-weight: 700;
  font-size: 2rem;
}

.content-subtitle {
  font-size: 2rem;
  white-space: normal;
}
</style>
