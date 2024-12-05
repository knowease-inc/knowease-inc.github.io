<template>
  <!-- Start: Carousel buttons -->
  <v-row justify="center">
    <v-col
      cols="auto"
      :offset="!mdAndUp ? 6 : 4"
      :class="smAndUp ? 'pb-8 pl-16' : 'mb-8'"
    >
      <v-btn
        :disabled="carouselStartIndex === 0"
        color="white"
        variant="text"
        @click="handleCarouselAction('left')"
      >
        <v-icon :icon="mdiChevronLeft" size="60" />
      </v-btn>
      <v-btn
        :disabled="carouselStartIndex === contents.length - 3"
        color="white"
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
    color="#3746fb"
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
          sm="6"
          lg="4"
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
            <v-col class="text-white px-4 pr-md-8">
              <div
                class="text-nowrap my-4 font-weight-black"
                :class="lgAndUp ? 'history-title' : 'text-h6'"
              >
                {{ item.title }}
              </div>
              <div
                class="text-line-height font-weight-bold"
                :class="lgAndUp ? 'history-body' : 'text-body-1'"
              >
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
              <v-col cols="10" class="text-white">
                <div class="font-weight-bold my-4" style="font-size: 1.4rem">
                  {{ item.title }}
                </div>
                <div class="text-body-1 text-line-height">
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

const { xs, smAndUp, mdAndUp, lgAndUp } = useDisplay()
const { t, tm } = useI18n()

const contents = computed(() => {
  const events = tm('pages.index.timeline.events')
  return events.map((event) => ({
    title: t(event.title),
    date: t(event.date),
    body: t(event.body),
  }))
})

const carouselStartIndex = ref(0)

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
  const itemsLength = contents.value.length
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
  font-size: 1.6rem;
}

.year,
.history-body {
  font-weight: 700;
  font-size: 1.2rem;
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
  line-height: 1.4;
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
</style>
