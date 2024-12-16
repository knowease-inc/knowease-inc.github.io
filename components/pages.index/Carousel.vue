<template>
  <v-card
    width="100%"
    :height="smAndUp ? '105vh' : '100%'"
    class="image-container mt-9"
  >
    <!-- Text Contents -->
    <v-sheet
      height="100%"
      color="rgba(0,0,0,0)"
      class="d-flex justify-center align-center pa-sm-4 px-0"
    >
      <v-col cols="10" sm="8">
        <v-list-item
          lines="two"
          class="pt-12 font-color parent-text-float text-center"
          :class="xs ? 'pl-0' : 'side-blank'"
        >
          <p
            :class="upperTextClass"
            class="my-4 text-sm-h3 text-lg-h2 pt-4 pt-sm-0 text-h5 font-weight-black"
            v-html="upperText"
          />
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
}

.upperText-xsonly {
  line-height: 1.4;
  font-weight: 500;
  font-size: 2rem;
}

.lowerText {
  line-height: 1.4;
  font-size: 1.8rem;
  font-weight: 400;
}

.lowerText-xsonly {
  line-height: 1.4;
  font-size: 1rem;
  font-weight: 500;
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
  background: url('img/heroIMG.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
