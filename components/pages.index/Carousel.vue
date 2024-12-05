<template>
  <v-card
    width="100%"
    :height="smAndUp ? '105vh' : '100%'"
    class="image-container"
  >
    <!-- Text Contents -->
    <v-sheet
      height="100%"
      color="rgba(0,0,0,0)"
      class="d-flex justify-center align-center pa-4"
    >
      <v-col cols="10" sm="9">
        <v-list-item
          lines="two"
          class="pt-12 font-color parent-text-float"
          :class="xs ? 'pl-0' : 'side-blank'"
        >
          <p :class="upperTextClass" class="my-4" v-html="upperText" />
          <p
            :class="lowerTextClass"
            class="pt-4"
            v-html="t('pages.index.carousel.lower')"
          />

          <div class="scroll-indicator">
            <v-icon :icon="mdiChevronDown" size="50" class="arrow" />
          </div>
        </v-list-item>
      </v-col>
    </v-sheet>
  </v-card>
</template>

<script setup>
import { mdiChevronLeft, mdiChevronRight, mdiChevronDown } from '@mdi/js'

const { xs, smAndUp } = useDisplay()
const { t } = useI18n()

const item = {
  src: 'img/temp/main1.jpg',
  text: {
    upper:
      '쉽고 신속하게 <br /> <span class="font-weight-black">다양한 정보, 지식을 얻을 수 있도록</span> 정보기술(IT)로 돕습니다',
    upperXsOnly:
      '쉽고 신속하게 <br /> <span class="font-weight-black">다양한 정보, 지식을 <br /> 얻을 수 있도록</span> <br /> 정보기술(IT)로 돕습니다',
    lower:
      '모든 분야에서 정보 습득 장벽을 낮춰<br />정보 격차로 인한 문제를 줄입니다',
  },
}

const upperText = computed(() => {
  return xs.value
    ? t('pages.index.carousel.upperXsOnly')
    : t('pages.index.carousel.upper')
})

const upperTextClass = computed(() => {
  return xs.value ? 'upperText-xsonly' : 'upperText'
})

const lowerTextClass = computed(() => {
  return xs.value ? 'lowerText-xsonly' : 'lowerText'
})
</script>

<style scoped>
.upperText {
  line-height: 1.4;
  font-size: 4rem;
}

.upperText-xsonly {
  line-height: 1.4;
  font-weight: 500;
  font-size: 2rem;
}

.lowerText {
  line-height: 1.4;
  font-size: 1.6rem;

  font-weight: 400;
}

.lowerText-xsonly {
  line-height: 1.4;
  font-size: 1.2rem;
  font-weight: 400;
}

.font-color {
  color: white;
  text-shadow: 3px 3px 4px rgba(34, 34, 34, 0.8);
}

.side-blank {
  padding: 0 250px;
}

/* 상단 Carousel 배경만 어둡게, 그 외 컨텐츠 원 색상 유지 */
.v-sheet::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.v-sheet * {
  z-index: 10;
}

.prev-arrow {
  left: 0;
  bottom: -180px;
}

.next-arrow {
  right: 250px;
  bottom: -180px;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}

.parent-text-float {
  animation: fadeInUp 1s ease-out;
}

.scroll-indicator {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100px; /* 컨테이너 높이 */
}

.arrow {
  animation: moveAndFadeSmooth 2s infinite;
}

@keyframes moveAndFadeSmooth {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(10px);
    opacity: 0;
  }
}

.image-container {
  background: url('img/temp/main1.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
