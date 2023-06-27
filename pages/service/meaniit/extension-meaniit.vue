<template>
  <v-container fluid>
    <v-card
      :color="introduce.card.color"
      :height="introduce.card.height"
      class="ma-0 rounded-0"
      flat
    >
      <!-- Start: 1. 서비스 소개 및 다운로드 -->
      <v-row justify="center" align="center" no-gutters>
        <v-col :cols="totalCols">
          <v-card
            :color="introduce.card.color"
            :height="introduce.card.height"
            class="ma-0 rounded-0 d-flex flex-column justify-center items-start text-start"
            flat
          >
            <v-card-text class="white--text">
              <div>
                <span class="text1-in-introduce-box headline">{{
                  introduce.text.first
                }}</span>
                <span
                  class="title-in-intoroduce-box primary--text mx-1 headline"
                  >{{ serviceName }}</span
                >
                <br />
                <span class="text2-in-introduce-box headline">{{
                  introduce.text.second
                }}</span>
                <!--
                <v-img src="https://via.placeholder.com/150" aspect-ratio="1" class="mx-3"></v-img>
                -->
              </div>
            </v-card-text>

            <v-card-actions class="ml-2">
              <v-btn class="webmarket-btn" @click="toChromeWebMarket()">{{
                introduce.btn.install
              }}</v-btn>
              <v-btn
                class="webmarket-btn"
                @click="scrollTo(introduce.btn.targetID.install)"
                >{{ introduce.btn.manual.install }}</v-btn
              >
              <v-btn
                class="webmarket-btn"
                @click="scrollTo(introduce.btn.targetID.usage)"
                >{{ introduce.btn.manual.usage }}</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-container class="mb-12" fluid>
      <v-row justify="center">
        <v-col
          v-for="(item, index) in introduce.funcs"
          :key="index"
          cols="2"
          lg="2"
          md="3"
        >
          <v-card
            class="d-flex flex-column align-center justify-center py-6 px-4"
            elevation="5"
            :style="{
              borderRadius: '12px',
            }"
          >
            <v-icon x-large class="text-center">{{ item.icon }}</v-icon>
            <v-card-title class="text-center">{{ item.title }}</v-card-title>
            <v-card-text class="text-center">{{
              item.description
            }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- End: 1. 서비스 소개 및 다운로드 -->

    <!-- Start: 2. 설치법 -->
    <v-row :id="introduce.btn.targetID.install" justify="center" no-gutters>
      <v-col :cols="totalCols">
        <!-- Start: Title -->
        <v-row no-gutters>
          <v-col cols="12">
            <v-card flat>
              <v-card-subtitle class="pb-0">{{
                installation.description
              }}</v-card-subtitle>
              <v-card-title class="pt-1">{{ installation.title }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>

        <!-- Start: Content -->
        <v-card
          :color="installation.card.color"
          :max-height="installation.card.height"
          class="ma-0 px-6 rounded-0"
          flat
        >
          <v-row justify="center" align="center" no-gutters>
            <v-col
              v-for="(item, index) in installation.steps"
              :key="index"
              cols="12"
              class="mb-4"
            >
              <v-card flat>
                <v-row no-gutters>
                  <v-col cols="5">
                    <v-img
                      class="bordered-image"
                      :src="item.image"
                      height="100%"
                      width="100%"
                    />
                  </v-col>
                  <v-col cols="7">
                    <v-card-title>{{ item.number }}.</v-card-title>
                    <v-card-text class="ml-2 body-1">{{
                      item.text
                    }}</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- End: 2. 설치법 -->

    <!-- Start: 3. 사용법 -->
    <v-row
      :id="introduce.btn.targetID.usage"
      justify="center"
      align="center"
      no-gutters
    >
      <v-col :cols="totalCols">
        <!-- Start: Title -->
        <v-row no-gutters>
          <v-col cols="12">
            <v-card flat>
              <v-card-subtitle class="pb-0">{{
                use.description
              }}</v-card-subtitle>
              <v-card-title class="pt-1">{{ use.title }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>

        <!-- Start: Content -->
        <v-card
          :color="use.card.color"
          :height="use.card.height"
          class="ma-0 px-6 rounded-0"
          flat
        >
          <v-row justify="center" align="center" no-gutters>
            <v-col
              v-for="(item, index) in use.steps"
              :key="index"
              cols="12"
              class="mb-4"
            >
              <v-card flat>
                <v-row no-gutters>
                  <v-col cols="5">
                    <v-img
                      class="bordered-image"
                      :src="item.image"
                      height="100%"
                      width="100%"
                    />
                  </v-col>
                  <v-col cols="7">
                    <v-card-title>{{ item.number }}.</v-card-title>
                    <v-card-text class="ml-2 body-1">{{
                      item.text
                    }}</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- End: 3. 사용법 -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      serviceName: '미닛',
      introduce: {
        card: {
          color: 'primary',
          height: 500,
        },
        text: {
          first: '영상? 글? 보다가 우클릭하면 바로',
          second: '어려운 것을 쉽게 이해하게 돕는 확장프로그램을 소개합니다',
        },
        btn: {
          install: '확장프로그램 설치',
          manual: {
            install: '설치 방법',
            usage: '사용 방법',
          },
          targetID: {
            install: 'extension-installation',
            usage: 'extension-usage',
          },
        },
        funcs: [
          {
            icon: '🖥️',
            title: '어려운 영상(YouTube) 쉽게 설명 기능',
            description:
              "'봐야겠다' 싶지만 어려울 것 같은 영상 또는 해외 영상을 만났을 때, 이 기능은 " +
              '내용을 쉽고 짧게 해설해서 도움을 줘요. ' +
              '시간을 절약하고 효율적인 학습을 가능하게 해주는 것이죠.',
          },
          {
            icon: '📑',
            title: '글 (뉴스, 전문지식 등) 쉽게 설명 기능',
            description:
              '전문적인 글의 습득 어려움을 최소화하는 기능이에요. ' +
              '목적에 따라 내용을 ' +
              '빠르게 재해석할 수 있으며, 글을 통해 얻고자 하는 주요 정보를 놓치지 ' +
              '않게 되요.',
          },
        ],
      },
      installation: {
        title: '간단 설치하기',
        description: '단 2번의 클릭으로 설치 완료되요!',
        card: {
          color: undefined,
          height: 1200,
        },
        steps: [
          {
            image: '/img/pages.service.meaniit.extension-meaniit/step1.png',
            number: 1,
            text: '위쪽의 [확장프로그램 설치] 버튼을 누른다',
          },
          {
            image: '/img/pages.service.meaniit.extension-meaniit/step2.png',
            number: 2,
            text: '[다운로드] 버튼을 누른다',
          },
          {
            image: '/img/pages.service.meaniit.extension-meaniit/step3.png',
            number: 3,
            text: '설치 완료되었다면, [Chrome에서 삭제]로 표시되요. 끝!',
          },
        ],
      },
      use: {
        title: '사용하기',
        description: '어떻게 사용하면 될까요? 최대로 활용하는 방법은?',
        card: {
          color: undefined,
          height: 500,
        },
        steps: [
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step1.png',
            number: 1,
            text: '(설치 후) 유튜브(YouTube) 홈페이지를 연다',
          },
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step2.png',
            number: 2,
            text:
              '설명 보조가 필요한 영상을 클릭한 다음, 빈곳에서 우클릭을 한다',
          },
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step3.png',
            number: 3,
            text: '[유튜브 보조설명AI] 메뉴를 누르고 잠시(약 4초) 기다린다',
          },
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step4.png',
            number: 4,
            text: '페이지 이동 후 로딩이 시작되었다면, 다른 일을 하고 있는다',
          },
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step5.png',
            number: 5,
            text: '알림 표시가 되면 완료되었으니 내용을 확인하면 끝!',
          },
        ],
      },
    }
  },

  head() {
    const description =
      '좋은 정보/지식을 다루는 영상 보긴 봐야겠는데 어렵고 길 때, 용어 설명과 자료 정리를 보조해요'
    const ogDescription = description
    const ogImgURL = 'https://dmq1lrjfpg713.cloudfront.net/og_20220126.png'

    return {
      title: `${this.serviceName}, 유튜브 내용을 쉬운 해설과 함께 - Chrome 확장프로그램`,
      meta: [
        /*
         ** OpenGraph(og) ref.https://qiita.com/amishiro/items/b7260116b282d2cf2756
         ** Basic
         */
        {
          hid: 'og:title',
          property: 'og:title',
          content: description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ogDescription,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImgURL,
        },
        /* OpenGraph for twitter */
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: description,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: ogDescription,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogImgURL,
        },
        /*
         ** Etc.
         */
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
      ],
    }
  },

  computed: {
    totalCols() {
      const cols = 6
      return cols
    },
  },

  methods: {
    toChromeWebMarket() {
      const targetURL =
        'https://chrome.google.com/webstore/detail/%EB%AF%B8%EB%8B%9B/fnkdlnkmiekkedkpolbkffdfljjinoee?hl=ko'
      window.open(targetURL, '_blank')
    },

    scrollTo(id) {
      const element = document.getElementById(id)
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth', // Optional: smooth scroll
      })
    },
  },
}
</script>

<style scoped>
.title-in-intoroduce-box {
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 2px 5px;
  font-weight: 700;
}
.text1-in-introduce-box {
  font-weight: 400;
}
.text2-in-introduce-box {
  font-weight: 700;
}
.webmarket-btn {
  border-radius: 12px;
}
.bordered-image {
  border: 1px solid gray;
  border-radius: 12px;
}
</style>
