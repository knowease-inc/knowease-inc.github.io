<template>
  <v-card flat tile outlined>
    <v-carousel
      hide-delimiters
      :show-arrows="false"
      :height="carouselHeight"
      :interval="cycleInterval"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        :reverse-transition="effect.reverse"
        :transition="effect.transition"
      >
        <v-sheet
          height="100%"
          color="rgba(0,0,0,0)"
          class="d-flex justify-start align-center pa-4"
        >
          <v-card color="rgba(0,0,0,0)" flat tile>
            <v-list-item two-line>
              <v-list-item-content v-if="$vuetify.breakpoint.xsOnly === true">
                <div class="upperText-xsonly">
                  <p class="upperText" v-html="item.text.upper" />
                </div>
                <v-divider class="mt-3 mb-4" />
                <div class="lowerText-xsonly">
                  <p class="lowerText" v-html="item.text.lower" />
                </div>
              </v-list-item-content>
              <v-list-item-content v-else>
                <p class="upperText" v-html="item.text.upper" />
                <v-divider class="mt-3 mb-4" />
                <p class="lowerText" v-html="item.text.lower" />
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      carouselHeight: '280',
      cycleInterval: '15000',
      effect: {
        reverse: undefined, // 예: "fade-transition",
        transition: undefined, // 예: "fade-transition"
      },
      items: [
        {
          src:
            'https://cdn.pixabay.com/photo/2012/03/01/01/42/hands-20333_960_720.jpg',
          text: {
            upper:
              '누구든지 쉽고 빠르게<br />AI 기술 통한 자료조사, 보고서 초안 작성',
            lower:
              '작업은 간소화하고 조사량은 늘리고, 놓치지 않는 자료 출처까지<br />업무 효율을 극대화하세요',
          },
        },
      ],
    }
  },
}
</script>

<style scoped>
.upperText {
  font-weight: 800;
  font-size: 32px;
  text-shadow: -1px 0 rgba(50, 50, 50, 1), 0 1px rgba(50, 50, 50, 1),
    1px 0 rgba(50, 50, 50, 1), 0 -1px rgba(50, 50, 50, 1);
}
.upperText-xsonly {
  font-weight: 600;
  font-size: 18px;
  text-shadow: -1px 0 rgba(50, 50, 50, 1), 0 1px rgba(50, 50, 50, 1),
    1px 0 rgba(50, 50, 50, 1), 0 -1px rgba(50, 50, 50, 1);
}

.lowerText {
  font-size: 16px;
  font-weight: 700;
  text-shadow: -1px 0 rgba(50, 50, 50, 1), 0 1px rgba(50, 50, 50, 1),
    1px 0 rgba(50, 50, 50, 1), 0 -1px rgba(50, 50, 50, 1);
}
.lowerText-xsonly {
  font-size: 14px;
  font-weight: 400;
  text-shadow: -1px 0 rgba(50, 50, 50, 1), 0 1px rgba(50, 50, 50, 1),
    1px 0 rgba(50, 50, 50, 1), 0 -1px rgba(50, 50, 50, 1);
}
</style>
