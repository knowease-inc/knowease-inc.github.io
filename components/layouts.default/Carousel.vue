<template>
  <v-card flat tile>
    <v-carousel v-model="currentIndex" hide-delimiters :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :reverse-transition="effect.reverse"
        :transition="effect.transition"
        :style="setBackgroundImg(item.src)"
      >
        <!-- App Bar -->
        <slot></slot>

        <!-- Text Contents -->
        <v-sheet
          height="100%"
          color="rgba(0,0,0,0)"
          class="d-flex justify-center align-end pa-4"
        >
          <v-list-item two-line class="side-blank pb-5">
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
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      effect: {
        reverse: undefined, // 예: "fade-transition",
        transition: undefined, // 예: "fade-transition",
      },
      items: [
        {
          src: '/img/intro_top_bg.png',
          text: {
            upper:
              '쉽고 신속하게<br /> <span class="font-weight-bold">다양한 정보, 지식을 얻을 수 있도록 정보기술(IT)로 돕습니다<span>',
            lower:
              '모든 분야에서 정보 습득 장벽을 낮춰<br />정보 격차로 인한 문제를 줄입니다',
          },
        },
      ],
      currentIndex: 0,
    }
  },
  methods: {
    setBackgroundImg(imageSrc) {
      return {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
      }
    },
  },
}
</script>

<style scoped>
.upperText {
  line-height: 1.4;
  font-size: 32px;
  text-shadow: -1px 0 darkgrey, 0 1px darkgrey, 1px 0 darkgrey, 0 -1px darkgrey;
}
.upperText-xsonly {
  font-weight: 600;
  font-size: 18px;
  text-shadow: -1px 0 rgba(60, 60, 60, 1), 0 1px rgba(60, 60, 60, 1),
    1px 0 rgba(60, 60, 60, 1), 0 -1px rgba(60, 60, 60, 1);
}

.lowerText {
  line-height: 1.4;
  font-size: 16px;
  text-shadow: -1px 0 darkgrey, 0 1px darkgrey, 1px 0 darkgrey, 0 -1px darkgrey;
}
.lowerText-xsonly {
  font-size: 14px;
  font-weight: 400;
  text-shadow: -1px 0 rgba(60, 60, 60, 1), 0 1px rgba(60, 60, 60, 1),
    1px 0 rgba(60, 60, 60, 1), 0 -1px rgba(60, 60, 60, 1);
}

.side-blank {
  padding: 0 250px;
}
</style>
