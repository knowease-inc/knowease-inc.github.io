<template>
  <v-container class="d-flex flex-column" fluid>
    <!-- ### Start : Top ### -->
    <v-row style="background-color: #3746fb" justify="center">
      <v-col cols="12" sm="7">
        <top-intro />
      </v-col>
    </v-row>

    <!-- ### Start : Why Service ### -->
    <v-row :class="{ 'differ-padding': $vuetify.breakpoint.smAndUp }">
      <v-col class="d-flex flex-column align-center">
        <v-card flat tile class="contentTitleCard">
          <p class="content-title">{{ differTitle }}</p>
          <div class="content-subtitle d-sm-flex" v-html="differSubTitle"></div>
        </v-card>

        <v-col cols="10" sm="7">
          <differentiation />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start :Usage ### -->
    <v-row
      style="background-color: #e6e9f0"
      justify="center"
      class="pb-sm-15 pt-sm-7"
    >
      <v-col cols="12" sm="7" class="d-sm-flex">
        <v-col
          cols="12"
          sm="4"
          class="pt-5"
          :class="$vuetify.breakpoint.smAndUp ? 'text-start' : 'text-center'"
        >
          <div
            v-for="(htxt, hidx) in howUse"
            :key="hidx"
            class="contentSubTitle"
          >
            {{ htxt }}
          </div>
          <div class="contentTitle mt-3">사용 방법</div>
        </v-col>

        <v-col cols="12" sm="8" class="pa-sm-3 pa-0">
          <how-to-use-cards />
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : Timeline ### -->
    <v-row justify="center" no-gutters class="mt-16">
      <v-col cols="12" class="d-flex flex-column align-center">
        <p class="content-title">{{ timelineTitle }}</p>
        <v-col class="d-flex" sm="4">
          <v-col cols="12" class="content-subtitle font-weight-bold pa-0">
            {{ timelineSubTitle }}
          </v-col>

          <v-col
            v-if="$vuetify.breakpoint.smAndUp"
            cols="12"
            offset="4"
            class="py-0"
          >
            <v-btn
              :disabled="carouselIndex === 0"
              icon
              small
              @click="triggerCarouselAction('left')"
            >
              <v-icon size="32">{{ 'mdi-chevron-left' }}</v-icon>
            </v-btn>
            <v-btn icon small @click="triggerCarouselAction('right')">
              <v-icon size="32">{{ 'mdi-chevron-right' }}</v-icon>
            </v-btn>
          </v-col>
        </v-col>

        <timeline @update-carousel-index="updateCarouselIndex" />

        <v-col v-if="$vuetify.breakpoint.xsOnly" cols="auto" class="mb-8">
          <v-btn
            :disabled="carouselIndex === 0"
            icon
            @click="triggerCarouselAction('left')"
          >
            <v-icon size="60">{{ 'mdi-chevron-left' }}</v-icon>
          </v-btn>
          <v-btn icon @click="triggerCarouselAction('right')">
            <v-icon size="60">{{ 'mdi-chevron-right' }}</v-icon>
          </v-btn>
        </v-col>
      </v-col>
    </v-row>

    <!-- ### Start : Flaticon attribute ### -->
    <v-row justify="center">
      <v-col cols="8">
        <v-card flat tile class="mt-10">
          <v-card-text class="text-center">
            <div>
              Icons on this page made by
              <a href="https://www.freepik.com" title="Freepik">Freepik</a>,
              <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"
                >Eucalyp</a
              >,
              <a
                href="https://www.flaticon.com/authors/payungkead"
                title="Payungkead"
                >Payungkead</a
              >,
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
                >Pixel perfect</a
              >,
              <a
                href="https://www.flaticon.com/authors/dmitri13"
                title="dmitri13"
                >dmitri13</a
              >
              from
              <a href="https://www.flaticon.com/" title="Flaticon"
                >www.flaticon.com</a
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TopIntro from '~/components/pages.service.meaniit.introduce/TopIntro.vue'
import HowToUseCards from '~/components/pages.service.meaniit.introduce/HowToUseCards.vue'
import Differentiation from '~/components/pages.service.meaniit.introduce/Differentiation.vue'
import Timeline from '~/components/pages.service.meaniit.introduce/Timeline.vue'

export default {
  components: {
    TopIntro,
    HowToUseCards,
    Differentiation,
    Timeline,
  },
  data() {
    return {
      differTitle: '차별성',
      differSubTitle:
        '다른 보고서 자동화 서비스와 <div><span class="font-weight-bold ml-2">다른점</span>은?</div>',

      howUse: [
        '어떤 자료를 모으고, 어떤 주제로 글을 쓸지',
        '정해주기만 하면 보고서가 메일로 와요',
      ],

      timelineTitle: '함께해 온 길',
      timelineSubTitle: '정보기술 통한 정보 격차 해소 여정',
      carouselIndex: 0,
    }
  },
  head() {
    const headTitle = '미닛 - 인공지능 자료조사'
    const description = '자료조사부터 보고서 초안 작성까지 스스로, 첨삭 받아 추가 조사 및 수정까지 하는 AI로 업무 효율을 극대화하세요'
    const ogDescription = description
    const ogImgURL = 'https://dmq1lrjfpg713.cloudfront.net/og_20231209.png'

    return {
      title: headTitle,
      meta: [
        /*
         ** OpenGraph(og) ref.https://qiita.com/amishiro/items/b7260116b282d2cf2756
         ** Basic
         */
        {
          hid: 'og:title',
          property: 'og:title',
          content: headTitle,
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
          content: headTitle,
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
    mainCardMaxWidth() {
      return this.$vuetify.breakpoint.width < 860
        ? this.$vuetify.breakpoint.width
        : 860
    },
  },

  methods: {
    triggerCarouselAction(direction) {
      this.$emit('carousel-action', direction)
    },
    updateCarouselIndex(newIndex) {
      this.carouselIndex = newIndex
    },
  },
}
</script>

<style scoped>
.differ-padding {
  padding: 100px 0 30px 0;
}

.content-title {
  color: #00c930;
  font-weight: 700;
  text-align: center;
}

.content-subtitle {
  font-size: 24px;
  text-align: center;
}
</style>
