<template>
  <!-- Start: Carousel buttons -->
  <v-row justify="center">
    <v-col cols="12">
      <p class="content-title">{{ timelineTitle }}</p>
    </v-col>

    <v-col cols="12" class="content-subtitle font-weight-bold pa-0">
      {{ timelineSubTitle }}
    </v-col>

    <v-col
      cols="auto"
      :offset="smAndUp ? 6 : ''"
      :class="smAndUp ? 'pb-8 pl-16' : 'mb-8'"
    >
      <v-btn
        :disabled="carouselStartIndex === 0"
        variant="text"
        @click="handleCarouselAction('left')"
      >
        <v-icon :icon="mdiChevronLeft" size="60" />
      </v-btn>
      <v-btn
        :disabled="carouselStartIndex === contents.length - 3"
        variant="text"
        @click="handleCarouselAction('right')"
      >
        <v-icon :icon="mdiChevronRight" size="60" />
      </v-btn>
    </v-col>
  </v-row>

  <!-- Start: History Contents -->
  <v-card
    flat
    :variant="xs ? 'outlined' : ''"
    class="mt-sm-4 mx-0 pt-16 pb-sm-5"
  >
    <v-card-text class="px-0">
      <div class="history-line"></div>

      <!-- History Contents: smAndUp -->
      <v-col
        v-if="smAndUp"
        id="carouselContainer"
        cols="9"
        offset="2"
        class="d-flex mt-n16 overflow-hidden"
      >
        <v-col
          v-for="(item, i) in contents"
          :key="i"
          :style="{ transform: `translateX(${-carouselStartIndex * 100}%)` }"
          cols="4"
        >
          <div v-show="i >= carouselStartIndex" class="d-flex flex-column">
            <v-col class="date-circle circle-sm">
              <div
                v-for="(date, index) in splitDate(item.date)"
                :key="date + index"
              >
                <div :class="index ? 'month' : 'year'" class="text-white">
                  {{ index ? setTwoNumber(date) : date }}
                </div>
              </div>
            </v-col>
            <v-col class="px-4">
              <div class="history-title text-nowrap my-4">
                {{ item.title }}
              </div>
              <div class="history-body text-line-height">
                {{ item.body }}
              </div>
            </v-col>
          </div>
        </v-col>
      </v-col>

      <!-- History Contents: xs -->
      <v-row v-if="xs" class="mt-n16" justify="center">
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
                  <div :class="index ? 'month-xs mt-1' : 'year-xs mb-1'">
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

<script setup>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

const { xs, smAndUp } = useDisplay()

const contents = [
  {
    title: '파일럿 프로그램 진행',
    date: '2024.4',
    body: '상장/대기업 실무자 대상 맞춤형 트렌드 브리핑 작성 AI 테스트 참여 제공 및 AI 개선 실시',
    left: false,
    small: true,
    color: 'primary',
    icon: null,
  },
  {
    title: '주요 마일스톤 (3rd)',
    date: '2023.12',
    body: "'자료조사AI(가칭)' 내부 테스트: 자료조사 ~ 보고서 작성 특화 구조 구축 및 GPT 기반 문서 작성 연구 결과 테스트",
    left: false,
    small: true,
    color: 'secondary',
    icon: null,
  },
  {
    title: 'AI 기술 활용 사업전략 신규 수립',
    date: '2023.8',
    body: 'GPT 기술 상용화에 따른 신규 사업전략, AI 기술 활용 정보 격차 해소 상용 서비스 계획 수립',
    left: true,
    small: false,
    color: 'primary',
    icon: 'mdi-robot',
  },
  {
    title: '주요 마일스톤 (2th)',
    date: '2023.4',
    body: '난이도 저감 위한 GPT 및 기존 NLP 구조 활용 연구: 어려운 단어 사용에 대한 난이도 등급별 설명 제공 방법',
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
    body: '클라우드 서비스(AWS)를 활용한 대량 이용 대비 웹서비스 인프라 최적화 테스트를 했습니다.',
    left: false,
    small: true,
    color: 'secondary',
  },
  {
    title: '최초 사업전략 수립',
    date: '2020.7',
    body: '어려운 지식, 정보에 대한 쉬운 설명 제공(난이도 저감) 정보기술 연구 및 서비스화',
    left: false,
    small: true,
    color: 'secondary',
  },
  {
    title: '최초 개발 멤버 구성',
    date: '2019.7',
    body: '총 3명으로 구성된 개발 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발을 구상할 수 있었습니다.',
    left: true,
    small: false,
    color: 'primary',
    icon: 'mdi-account-multiple-plus',
  },
]
const carouselStartIndex = ref(0)

const timelineTitle = '함께해 온 길'
const timelineSubTitle = '정보기술 통한 정보 격차 해소 여정'

const splitDate = (date) => date.split('.')
const setTwoNumber = (num) => (num < 10 ? '0' + num : num)

// Start: Carousel Action Handlers
const handleCarouselAction = (direction) => {
  if (direction === 'left') {
    calculateIndexToLeft()
  } else if (direction === 'right') {
    calculateIndexToRight()
  }
}

const calculateIndexToRight = () => {
  const itemsLength = contents.length
  const maxIndex = smAndUp.value ? itemsLength - 3 : itemsLength - 1

  if (carouselStartIndex.value < maxIndex) {
    carouselStartIndex.value += 1
  }
}

const calculateIndexToLeft = () => {
  if (carouselStartIndex.value > 0) {
    carouselStartIndex.value -= 1
  }
}
// End: Carousel Action Handlers

const checkToRenderIndex = (index) => carouselStartIndex.value === index
</script>

<style scoped>
.month,
.history-title {
  font-weight: 900;
  font-size: 1.4rem;
}

.year,
.history-body {
  font-weight: 600;
  font-size: 1.1rem;
}

.history-body {
  color: #6b7684;
}

.month-xs {
  font-weight: 600;
  font-size: 32px;
}

.year-xs {
  font-weight: 500;
  font-size: 20px;
}

/* .main-color {
  color: #3746fb;
} */

.text-line-height {
  line-height: 1.2;
}

.text-nowrap {
  white-space: nowrap;
}

.history-line {
  border-top: 0.5px solid #3746fb;
}

.history-line-xs {
  border-top: 1px solid #3746fb;
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
  min-width: 90px;
  min-height: 90px;

  max-width: 90px;
  max-height: 90px;
}

.circle-xs {
  min-width: 110px;
  min-height: 110px;

  max-width: 110px;
  max-height: 110px;
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
