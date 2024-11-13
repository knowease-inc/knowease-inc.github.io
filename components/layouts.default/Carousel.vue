<template>
  <v-card flat tile width="100%">
    <v-carousel
      v-model="currentIndex"
      hide-delimiters
      :show-arrows="xs ? true : false"
      height="105vh"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :reverse-transition="effect.reverse"
        :transition="effect.transition"
        :src="item.src"
        cover
      >
        <!-- Text Contents -->
        <v-sheet
          height="100%"
          color="rgba(0,0,0,0)"
          class="d-flex justify-center align-center pa-4"
        >
          <v-col cols="7">
            <v-list-item
              lines="two"
              class="pt-12 font-color"
              :class="xs ? 'pl-0' : 'side-blank'"
            >
              <p
                :class="upperTextClass"
                class="my-4"
                v-html="upperText"
                style="font-size: 3rem"
              />
              <p
                :class="lowerTextClass"
                v-html="item.text.lower"
                style="font-size: 1.2rem"
              />
            </v-list-item>
          </v-col>
        </v-sheet>
      </v-carousel-item>

      <!-- Arrow -->
      <template #prev="{ props }">
        <v-btn
          color="white"
          disabled
          absolute
          :icon="mdiChevronLeft"
          class="prev-arrow"
          size="large"
          @click="props.onClick"
        />
      </template>
      <template #next="{ props }">
        <v-btn
          color="white"
          elevation="2"
          absolute
          :icon="mdiChevronRight"
          class="next-arrow"
          size="large"
          @click="props.onClick"
        />
      </template>
    </v-carousel>
  </v-card>
</template>

<script setup>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

const { xs } = useDisplay()

const effect = ref({
  reverse: undefined, // 예: "fade-transition",
  transition: undefined, // 예: "fade-transition",
})

const items = [
  {
    src: '/img/intro_top_bg.png',
    text: {
      upper:
        '쉽고 신속하게 <br /> <span class="font-weight-black">다양한 정보, 지식을 얻을 수 있도록</span> 정보기술(IT)로 돕습니다',
      upperXsOnly:
        '쉽고 신속하게 <span class="font-weight-black">다양한 정보, 지식을 <br /> 얻을 수 있도록</span> 정보기술(IT)로 돕습니다',
      lower:
        '모든 분야에서 정보 습득 장벽을 낮춰<br />정보 격차로 인한 문제를 줄입니다',
    },
  },
]

const currentIndex = ref(0)

const setCarouselHeight = computed(() => {
  return xs.value ? '350' : '500'
})

const upperText = computed(() => {
  const { upperXsOnly, upper } = items[0].text
  return xs.value ? upperXsOnly : upper
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
  font-size: 32px;
}

.upperText-xsonly {
  line-height: 1.4;
  font-weight: 500;
  font-size: 20px;
}

.lowerText {
  line-height: 1.4;
  font-size: 16px;

  font-weight: 400;
}

.lowerText-xsonly {
  line-height: 1.4;
  font-size: 14px;
  font-weight: 400;
}

.font-color {
  color: white;
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
  background-color: rgba(0, 0, 0, 0.2);
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
</style>
