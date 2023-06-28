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
            <v-card-text class="white--text mt-6">
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
              <v-btn
                :id="introduce.btn.targetID.downloadChromeWebMarket"
                class="webmarket-btn"
                @click="toChromeWebMarket()"
                ><span style="font-weight: bold">{{
                  introduce.btn.install
                }}</span></v-btn
              >
              <v-btn
                class="webmarket-btn"
                color="accent"
                dark
                @click="scrollTo(introduce.btn.targetID.install)"
                ><span style="font-weight: bold">{{
                  introduce.btn.manual.install
                }}</span></v-btn
              >
              <v-btn
                class="webmarket-btn"
                color="accent"
                dark
                @click="scrollTo(introduce.btn.targetID.usage)"
                ><span style="font-weight: bold">{{
                  introduce.btn.manual.usage
                }}</span></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-container class="function-introduce-container mb-12" fluid>
      <v-row justify="center">
        <v-col
          v-for="(item, index) in introduce.funcs"
          :key="index"
          cols="12"
          xl="2"
          lg="3"
          md="4"
          sm="6"
        >
          <v-card
            class="d-flex flex-column align-center justify-center py-6 px-4"
            elevation="5"
            :style="{
              borderRadius: '20px',
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
    <v-row justify="center" no-gutters class="py-12 mb-12">
      <v-col :cols="totalCols">
        <!-- Start: Title -->
        <v-row no-gutters>
          <v-col cols="12">
            <v-card flat>
              <v-card-subtitle class="pb-0 mb-1">{{
                installation.description
              }}</v-card-subtitle>
              <v-card-title
                :id="introduce.btn.targetID.install"
                class="pt-1 mb-2 component-titles"
                >{{ installation.title }}</v-card-title
              >
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
              class="mb-8"
            >
              <v-card flat>
                <v-row no-gutters>
                  <v-col cols="12" md="5">
                    <v-img
                      class="bordered-image"
                      :src="item.image"
                      height="100%"
                      width="100%"
                      @click="openImageInNewTab(item.image)"
                    />
                  </v-col>
                  <v-col cols="12" md="7">
                    <v-card-title>{{ item.number }}.</v-card-title>
                    <v-card-text class="ml-2 body-1">
                      <span v-html="item.text" />
                    </v-card-text>
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
    <v-card
      :color="use.card.color"
      :max-height="use.card.height + 240"
      class="ma-0 px-6 py-12 rounded-0"
      flat
    >
      <v-row justify="center" align="center" no-gutters>
        <v-col :cols="totalCols">
          <!-- Start: Title -->
          <v-row no-gutters>
            <v-col cols="12">
              <v-card flat :color="use.card.color">
                <v-card-subtitle class="pb-0 mb-1">{{
                  use.description
                }}</v-card-subtitle>
                <v-card-title
                  :id="introduce.btn.targetID.usage"
                  class="pt-1 mb-2 component-titles"
                  >{{ use.title }}</v-card-title
                >
              </v-card>
            </v-col>
          </v-row>

          <!-- Start: Content -->
          <v-card
            :color="use.card.color"
            :max-height="use.card.height"
            class="ma-0 px-6 rounded-0"
            flat
          >
            <v-row justify="center" align="center" no-gutters>
              <v-col
                v-for="(item, index) in use.steps"
                :key="index"
                cols="12"
                class="mb-8"
              >
                <v-card flat :color="use.card.color">
                  <v-row no-gutters>
                    <v-col cols="12" md="5">
                      <v-img
                        class="bordered-image"
                        :src="item.image"
                        height="100%"
                        width="100%"
                        @click="openImageInNewTab(item.image)"
                      />
                    </v-col>
                    <v-col cols="12" md="7">
                      <v-card-title>{{ item.number }}.</v-card-title>
                      <v-card-text class="ml-2 body-1">
                        <span v-html="item.text" />
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!-- End: 3. 사용법 -->

    <!-- Start: 4. 마무리 -->
    <v-row
      justify="center"
      align="center"
      class="scroll-ending-text my-12 py-12"
    >
      <p class="scroll-ending-text text-center">
        <span v-html="ending.text[0]" />
        <span
          class="text-in-scroll-ending white--text"
          v-html="ending.text[1]"
        />
        <span v-html="ending.text[2]" />
      </p>
    </v-row>
    <!-- End: 4. 마무리 -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      serviceName: '미닛',
      downloadURL: {
        Chrome:
          'https://chrome.google.com/webstore/detail/%EB%AF%B8%EB%8B%9B/fnkdlnkmiekkedkpolbkffdfljjinoee?hl=ko',
      },
      introduce: {
        card: {
          color: 'primary',
          height: 300,
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
            downloadChromeWebMarket: 'extension-download-chorme',
            install: 'extension-installation',
            usage: 'extension-usage',
          },
        },
        funcs: [
          {
            icon: '🖥️',
            title: '어려운 영상(YouTube) 쉽게 보조 설명',
            description:
              "'봐야겠다' 싶지만 어려울 것 같은 영상(영어 포함)을 만났을 때, " +
              '내용을 쉽고 (한국어로!) 짧게 해설해 도움을 줘요. ' +
              '시간 절약 통한 효율적인 학습을 가능하게 해주죠.',
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
            text:
              '<a href="https://chrome.google.com/webstore/detail/%EB%AF%B8%EB%8B%9B/fnkdlnkmiekkedkpolbkffdfljjinoee?hl=ko" target=\'_blank\'>' +
              '[확장프로그램 설치]</a> 버튼을 눌러요',
          },
          {
            image: '/img/pages.service.meaniit.extension-meaniit/step2.png',
            number: 2,
            text:
              '그리고 Chrome 웹 스토어에서 [다운로드] 버튼을 누르면<br>잠시후 설치 완료!',
          },
        ],
      },
      use: {
        title: '사용하기',
        description: '어떻게 사용하면 될까요? 최대로 활용하는 방법은?',
        card: {
          color: '#E6E9F0',
          height: 1200,
        },
        steps: [
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step1.png',
            number: 1,
            text:
              '유튜브(YouTube) 홈페이지를 열고<br>' +
              '영어라서, 어려워서, 당장 시간이 없는데 영상이 길어서😅<br>그냥 보기 부담(?)되는 영상을 선택해 들어가요',
          },
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step2.png',
            number: 2,
            text: '빈 곳에서 우클릭 -> [유튜브 보조설명AI] 메뉴를 눌러요',
          },
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step3.png',
            number: 3,
            text: 'Chrome 브라우저 알림이 뜨고<br>잠시(약 4초) 기다려요',
          },
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step4.png',
            number: 4,
            text:
              '페이지 이동 후 로딩이 시작되었다면<br>해당 영상을 함께 켜놓고 본다던지, 다른 일을 하고 있어도 되요',
          },
          {
            image:
              '/img/pages.service.meaniit.extension-meaniit/usage_step5.png',
            number: 5,
            text: '완료 알림 표시가 되면<br>완료된 내용을 확인하면 끝!',
          },
        ],
      },
      ending: {
        text: [
          '최종적으로 우리는 설명 대상의 난이도를 표시하고<br>여러분이',
          '원하는 난이도의 설명',
          '을 제공하도록 할거에요!<br>잘 부탁드려요! 😄',
        ],
      },
    }
  },

  head() {
    const description =
      '해외 자료거나 어렵고 길거나! 좋은 정보/지식을 다루는 영상 그래도 이해하고 싶다면? 용어 설명과 자료 정리를 보조해줘요'
    const ogDescription = description
    const ogImgURL = 'https://dmq1lrjfpg713.cloudfront.net/og_20220126.png'

    return {
      title: `YouTube, 전문 정보를 쉬운 해설과 함께 - Chrome 확장프로그램, ${this.serviceName}`,
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
      const cols = this.$vuetify.breakpoint.xlOnly
        ? 6
        : this.$vuetify.breakpoint.lgOnly
        ? 8
        : this.$vuetify.breakpoint.mdOnly
        ? 10
        : 12 // smAndDown (sm + xs)
      return cols
    },
  },

  methods: {
    toChromeWebMarket() {
      const targetURL = this.downloadURL.Chrome
      window.open(targetURL, '_blank')
    },

    scrollTo(id) {
      const element = document.getElementById(id)
      const y = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: y,
        behavior: 'smooth', // Optional: smooth scroll
      })
    },

    openImageInNewTab(imageSrc) {
      if (process.client) {
        window.open(imageSrc, '_blank')
      }
    },
  },
}
</script>

<style scoped>
.title-in-intoroduce-box {
  background-color: white;
  border: 2px solid white;
  border-radius: 13px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 2px 5px;
  font-weight: 700;
  line-height: 1.8;
}
.text1-in-introduce-box {
  font-weight: 400;
}
.text2-in-introduce-box {
  font-weight: 700;
}
.function-introduce-container {
  background: linear-gradient(0deg, white 75%, #2979ff 25%);
}
.webmarket-btn {
  border-radius: 12px;
}
.component-titles {
  font-weight: bold;
  font-size: 24px;
}
.scroll-ending-text {
  font-weight: bold;
  font-size: 24px;
}
.text-in-scroll-ending {
  background-color: #2979ff;
  border: 2px solid #2979ff;
  border-radius: 13px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 2px 5px;
  font-weight: 700;
  line-height: 1.8;
}
.bordered-image {
  border: 1px solid gray;
  border-radius: 12px;
}
</style>
