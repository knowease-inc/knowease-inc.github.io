<template>
  <v-card flat tile>
    <v-carousel
      v-model="currentIndex"
      hide-delimiters
      :show-arrows="$vuetify.breakpoint.xsOnly ? true : false"
      :height="setCarouselHeight"
    >
      <!-- App Bar -->
      <slot></slot>

      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :reverse-transition="effect.reverse"
        :transition="effect.transition"
        :style="setBackgroundImg(item.src)"
      >
        <!-- Text Contents -->
        <v-sheet
          height="100%"
          color="rgba(0,0,0,0)"
          class="d-flex justify-center align-end pa-4"
        >
          <v-list-item
            two-line
            class="pb-5"
            :class="$vuetify.breakpoint.xsOnly ? 'pl-0' : 'side-blank'"
          >
            <v-list-item-content>
              <p :class="upperTextClass" class="my-4" v-html="upperText"></p>
              <p :class="lowerTextClass" v-html="item.text.lower"></p>
            </v-list-item-content>
          </v-list-item>
        </v-sheet>
      </v-carousel-item>

      <!-- Arrow -->
      <template #prev="{ on, attrs }">
        <v-btn
          color="white"
          disabled
          absolute
          icon
          class="prev-arrow"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon size="50">
            {{ 'mdi-chevron-left' }}
          </v-icon>
        </v-btn>
      </template>
      <template #next="{ on, attrs }">
        <v-btn
          color="white"
          elevation="2"
          absolute
          icon
          class="next-arrow"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon size="50">
            {{ 'mdi-chevron-right' }}
          </v-icon>
        </v-btn>
      </template>
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
              '쉽고 신속하게 <br /> <span class="font-weight-black">다양한 정보, 지식을 얻을 수 있도록</span> 정보기술(IT)로 돕습니다',
            upperXsOnly:
              '쉽고 신속하게 <span class="font-weight-black">다양한 정보, 지식을 <br /> 얻을 수 있도록</span> 정보기술(IT)로 돕습니다',
            lower:
              '모든 분야에서 정보 습득 장벽을 낮춰<br />정보 격차로 인한 문제를 줄입니다',
          },
        },
      ],
      currentIndex: 0,
    }
  },

  computed: {
    setCarouselHeight() {
      return this.$vuetify.breakpoint.xsOnly ? '350' : '500'
    },
    upperText() {
      const { upperXsOnly, upper } = this.items[0].text
      return this.$vuetify.breakpoint.xsOnly ? upperXsOnly : upper
    },
    upperTextClass() {
      return this.$vuetify.breakpoint.xsOnly ? 'upperText-xsonly' : 'upperText'
    },
    lowerTextClass() {
      return this.$vuetify.breakpoint.xsOnly ? 'lowerText-xsonly' : 'lowerText'
    },
  },

  methods: {
    setBackgroundImg(imageSrc) {
      return {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
      }
    },
  },
}
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
