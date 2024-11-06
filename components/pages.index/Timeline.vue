<template>
  <v-card
    flat
    :variant="xs ? 'outlined' : ''"
    color="#2979ff"
    class="mt-sm-4 mx-0 mr-sm-4 pt-16 pb-sm-5"
  >
    <v-card-text class="px-0">
      <div class="history-line"></div>

      <!-- History Contents: smAndUp -->
      <v-col
        v-if="smAndUp"
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
            <v-col class="white-circle circle-sm">
              <div
                v-for="(date, index) in splitDate(item.date)"
                :key="date + index"
              >
                <div :class="index ? 'month' : 'year'" class="main-color">
                  {{ index ? setTwoNumber(date) : date }}
                </div>
              </div>
            </v-col>
            <v-col class="white--text pr-0 pl-5">
              <div class="text-body-2 font-weight-bold text-nowrap mb-1">
                {{ item.title }}
              </div>
              <div class="text-caption text-line-height">
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
              <v-col class="white-circle circle-xs" cols="7">
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
              <v-col class="white--text">
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
const { smAndUp, xs } = useDisplay()

const emit = defineEmits(['carousel-action', 'update-carousel-index'])

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
    title: "'자료조사AI(가칭)' 내부 테스트",
    date: '2023.12',
    body: 'AI 발전에 따른, 빠른 정보 습득 및 쉬운 정리 GPT 기능 서비스화',
    left: false,
    small: true,
    color: 'secondary',
    icon: null,
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
    body: '법인 형태 변경(모든 멤버 유지): 유한책임회사 -> 주식회사',
    // 'Alpha Test 피드백 기반 서비스 개선 후, 검색 엔진 최적화를 위한 SSR(Server Side Rendering) 방식 채택, 운영/관리 효율화를 위한 AWS 클라우드 서비스상 Serverless 적용 인프라가 함께 테스트 되었습니다.',
    left: true,
    small: false,
    color: 'primary',
    icon: 'mdi-play',
  },
  {
    title: "'쉬운 설명 플랫폼' Beta Test",
    date: '2021.9',
    body: '클라우드 서비스(AWS)를 활용한 대량 이용 대비 서비스 인프라 최적화 완료 후 두 번째 공개 테스트를 했습니다. (Market/Infra Test)',
    // 'Alpha Test 피드백 기반 서비스 개선 후, 검색 엔진 최적화를 위한 SSR(Server Side Rendering) 방식 채택, 운영/관리 효율화를 위한 AWS 클라우드 서비스상 Serverless 적용 인프라가 함께 테스트 되었습니다.',
    left: false,
    small: true,
    color: 'secondary',
    icon: null,
  },
  {
    title: "'쉬운 설명 플랫폼' Alpha Test",
    date: '2020.10',
    body: '미닛 최소 작동 모델(MVP) 완성 후, 고객지향적인 기능 개발을 위해 고객 대상 최초 테스트가 이루어졌습니다.',
    left: false,
    small: true,
    color: 'secondary',
    icon: null,
  },
  {
    title: '창립 멤버 구성',
    date: '2019.7',
    body: '총 4명으로 구성된 창립 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발에 착수했습니다.',
    left: true,
    small: true,
    color: 'primary',
    icon: null,
  },
  {
    title: "'쉬운 설명 플랫폼' 최초 개발",
    date: '2019.4',
    body: '아이디어 상태였던 미닛 아이템을 직접 개발하기 시작했습니다.',
    left: false,
    small: true,
    color: 'secondary',
    icon: null,
  },
]
const carouselStartIndex = ref(0)

const splitDate = (date) => date.split('.')
const setTwoNumber = (num) => (num < 10 ? '0' + num : num)

// carousel action 핸들러
const handleCarouselAction = (direction) => {
  if (direction === 'left') {
    calculateIndexToLeft()
  } else if (direction === 'right') {
    calculateIndexToRight()
  }

  emit('update-carousel-index', carouselStartIndex.value)
}

const calculateIndexToRight = () => {
  const itemsLength = contents.length
  const isSmAndUpCondition =
    smAndUp.value && carouselStartIndex.value === itemsLength - 4
  const isXsCondition =
    xsOnly.value && carouselStartIndex.value === itemsLength - 1

  if (isSmAndUpCondition || isXsCondition) return

  carouselStartIndex.value = (carouselStartIndex.value + 1) % itemsLength
}

const calculateIndexToLeft = () => {
  if (carouselStartIndex.value === 0) return

  const itemsLength = contents.length

  carouselStartIndex.value =
    (carouselStartIndex.value - 1 + itemsLength) % itemsLength
}

const checkToRenderIndex = (index) => carouselStartIndex.value === index

// 이벤트 리스너 추가 및 제거
onMounted(() => {
  window.addEventListener('carousel-action', handleCarouselAction)
})

onBeforeUnmount(() => {
  window.removeEventListener('carousel-action', handleCarouselAction)
})
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
  color: #2979ff;
}

.text-line-height {
  line-height: 1.2;
}

.text-nowrap {
  white-space: nowrap;
}

.history-line {
  border-top: 0.5px solid white;
}

.white-circle {
  background-color: white;
  border-radius: 50%;

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
