<template>
  <v-card
    flat
    :outlined="$vuetify.breakpoint.xsOnly"
    class="mt-sm-4 mx-0 mr-sm-4 pt-10 pb-sm-5"
  >
    <v-card-text class="px-0">
      <div class="history-line"></div>

      <!-- History Contents: smAndUp -->
      <v-col
        v-if="$vuetify.breakpoint.smAndUp"
        id="carouselContainer"
        cols="9"
        offset="2"
        class="d-flex mt-n14 overflow-hidden"
      >
        <v-col
          v-for="(item, i) in contents"
          :key="i"
          :style="{ transform: `translateX(${-carouselStartIndex * 100}%)` }"
          cols="3"
        >
          <div v-show="i >= carouselStartIndex" class="d-flex flex-column">
            <v-col class="date-circle circle-sm">
              <div
                v-for="(date, index) in splitDate(item.date)"
                :key="date + index"
              >
                <div :class="index ? 'month' : 'year'" class="text--white">
                  {{ index ? setTwoNumber(date) : date }}
                </div>
              </div>
            </v-col>
            <v-col class="pr-0 pl-5">
              <div
                class="text-body-2 font-weight-bold text-nowrap mb-1 main-color"
              >
                {{ item.title }}
              </div>
              <div class="text-caption text-line-height">
                {{ item.body }}
              </div>
            </v-col>
          </div>
        </v-col>
      </v-col>

      <!-- History Contents: xsOnly -->
      <v-row v-if="$vuetify.breakpoint.xsOnly" class="mt-n16" justify="center">
        <v-col cols="12" class="d-flex flex-nowrap overflow-hidden">
          <v-col
            v-for="(item, i) in contents"
            :key="i"
            cols="12"
            class="text-center px-0 pt-0"
            :style="{
              transform: `translateX(${-carouselStartIndex * 100}%)`,
            }"
          >
            <div
              v-show="checkToRenderIndex(i)"
              class="d-flex flex-column align-center"
              cols="12"
            >
              <v-col class="date-circle circle-xs" cols="7">
                <div
                  v-for="(date, index) in splitDate(item.date)"
                  :key="date + index"
                >
                  <div
                    :class="index ? 'month-xs mt-1' : 'year-xs mb-1'"
                    class="main-color"
                  >
                    {{ index ? setTwoNumber(date) : date }}
                  </div>
                </div>
              </v-col>
              <v-col>
                <div class="text-body-1 font-weight-bold mb-1">
                  {{ item.title }}
                </div>
                <div class="text-body-2 text-line-height">
                  {{ item.body }}
                </div>
              </v-col>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          title: '주요 마일스톤 (3rd)',
          date: '2023.12',
          body:
            "'자료조사AI(가칭)' 내부 테스트: 자료조사 ~ 보고서 작성 특화 구조 구축 및 GPT 기반 문서 작성 연구 결과 테스트",
          left: false,
          small: true,
          color: 'secondary',
          icon: null,
        },
        {
          title: 'AI 기술 활용 사업전략 신규 수립',
          date: '2023.8',
          body:
            'GPT 기술 상용화에 따른 신규 사업전략, AI 기술 활용 정보 격차 해소 상용 서비스 계획 수립',
          left: true,
          small: false,
          color: 'primary',
          icon: 'mdi-robot',
        },
        {
          title: '주요 마일스톤 (2th)',
          date: '2023.4',
          body:
            '난이도 저감 위한 GPT 및 기존 NLP 구조 활용 연구: 어려운 단어 사용에 대한 난이도 등급별 설명 제공 방법',
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: '주요 마일스톤 (1st)',
          date: '2023.4',
          body: '사용자 참여 지식 데이터베이스 Semi Open 테스트',
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: '투자 유치 (엔젤 투자)',
          date: '2022.12',
          body: '투자가치 평가 약 40억 수준',
          left: true,
          small: false,
          color: 'primary',
          icon: 'mdi-currency-usd',
        },
        {
          title: 'GET-A Inc 설립 (전 쉬운지식 LLC)',
          date: '2022.10',
          body: '투자유치 위한 주식회사 설립',
          // 'Alpha Test 피드백 기반 서비스 개선 후, 검색 엔진 최적화를 위한 SSR(Server Side Rendering) 방식 채택, 운영/관리 효율화를 위한 AWS 클라우드 서비스상 Serverless 적용 인프라가 함께 테스트 되었습니다.',
          left: true,
          small: false,
          color: 'primary',
          icon: 'mdi-play',
        },
        {
          title: '인프라(Cloud Native) 연구 및 구축',
          date: '2021.10',
          body:
            '클라우드 서비스(AWS)를 활용한 대량 이용 대비 웹서비스 인프라 최적화 테스트를 했습니다.',
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: '최초 사업전략 수립',
          date: '2020.7',
          body:
            '어려운 지식, 정보에 대한 쉬운 설명 제공(난이도 저감) 정보기술 연구 및 서비스화',
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: '최초 개발 멤버 구성',
          date: '2019.7',
          body:
            '총 3명으로 구성된 개발 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발을 구상할 수 있었습니다.',
          left: true,
          small: false,
          color: 'primary',
          icon: 'mdi-account-multiple-plus',
        },
      ],
      carouselStartIndex: 0,
    }
  },

  created() {
    this.$parent.$on('carousel-action', this.handleCarouselAction)
  },

  methods: {
    splitDate(date) {
      return date.split('.')
    },

    setTwoNumber(num) {
      return num < 10 ? '0' + num : num
    },

    handleCarouselAction(direction) {
      if (direction === 'left') {
        this.calculateIndexToLeft()
      } else if (direction === 'right') {
        this.calculateIndexToRight()
      }

      this.$emit('update-carousel-index', this.carouselStartIndex)
    },

    calculateIndexToRight() {
      const itemsLength = this.contents.length
      const isSmAndUpCondition =
        this.$vuetify.breakpoint.smAndUp &&
        this.carouselStartIndex === itemsLength - 4
      const isXsCondition =
        this.$vuetify.breakpoint.xsOnly &&
        this.carouselStartIndex === itemsLength - 1

      if (isSmAndUpCondition || isXsCondition) {
        return
      }

      this.carouselStartIndex = (this.carouselStartIndex + 1) % itemsLength
    },

    calculateIndexToLeft() {
      if (this.carouselStartIndex === 0) return

      const itemsLength = this.contents.length

      this.carouselStartIndex =
        (this.carouselStartIndex - 1 + itemsLength) % itemsLength
    },

    checkToRenderIndex(index) {
      return this.carouselStartIndex === index
    },
  },
}
</script>

<style scoped>
.month {
  font-weight: 600;
  font-size: 20px;
}

.year {
  font-weight: 500;
  font-size: 12px;
}

.month-xs {
  font-weight: 600;
  font-size: 32px;
}

.year-xs {
  font-weight: 500;
  font-size: 20px;
}
.main-color {
  color: #3746fb;
}

.text-line-height {
  line-height: 1.2;
}

.text-nowrap {
  white-space: nowrap;
}

.history-line {
  border-top: 0.5px solid lightgray;
}

.date-circle {
  background-color: #3746fb;
  border-radius: 50%;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#carouselContainer {
  transition: transform 0.2s;
}

.circle-sm {
  width: 65px;
  height: 65px;
}
.circle-xs {
  min-width: 110px;
  min-height: 110px;

  max-width: 110px;
  max-height: 110px;
}
</style>
