<template>
  <v-card flat tile outlined>
    <v-carousel
      hide-delimiters
      cycle
      show-arrows-on-hover
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
                  {{ item.text.upper.first }}&nbsp;{{ item.text.upper.second }}
                </div>
                <v-divider class="mt-3 mb-4" />
                <div class="lowerText-xsonly">
                  {{ item.text.lower.first }}&nbsp;{{ item.text.lower.second }}
                </div>
              </v-list-item-content>
              <v-list-item-content v-else>
                <div class="upperText">{{ item.text.upper.first }}</div>
                <div class="upperText">{{ item.text.upper.second }}</div>
                <v-divider class="mt-3 mb-4" />
                <div class="lowerText">{{ item.text.lower.first }}</div>
                <div class="lowerText">{{ item.text.lower.second }}</div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesIntroduceCarousel extends Vue {
  @Provide() carouselHeight: string = '280'
  @Provide() cycleInterval: string = '15000'
  @Provide() effect: {
    reverse: string | undefined
    transition: string | undefined
  } = {
    reverse: undefined, // e.g. "fade-transition",
    transition: undefined, // e.g. "fade-transition",
  }

  @Provide() items: Array<{
    src: string
    text: {
      upper: {
        first: string
        second: string
      }
      lower: {
        first: string
        second: string
      }
    }
  }> = [
    {
      src:
        'https://cdn.pixabay.com/photo/2012/03/01/01/42/hands-20333_960_720.jpg',
      text: {
        upper: {
          first: '가장 쉬운 설명을 얻고, 쓰고, 공유해서',
          second: '모든 정보 격차를 모두 함께 줄이는 플랫폼',
        },
        lower: {
          first: "각종 '가이드/메뉴얼' 또는 '전문/기술 용어'의 설명을",
          second: '가장 쉬운 것으로 고르고 작성하고 공유하는 곳입니다.',
        },
      },
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2017/10/08/21/27/idea-2831687_960_720.jpg',
      text: {
        upper: {
          first: '쉽게 설명하는 능력이',
          second: '객관적으로 인정받는 곳',
        },
        lower: {
          first: '전문적인 영역에서 소통하는 능력을',
          second: '객관적으로 인정받고 편히 제시할 수 있게 됩니다.',
        },
      },
    },
  ]
}

export default PagesIntroduceCarousel
</script>

<style scoped>
.upperText {
  font-weight: 800;
  font-size: 32px;
  text-shadow: -1px 0 rgba(70, 70, 70, 1), 0 1px rgba(70, 70, 70, 1),
    1px 0 rgba(70, 70, 70, 1), 0 -1px rgba(70, 70, 70, 1);
}
.upperText-xsonly {
  font-weight: 600;
  font-size: 18px;
  text-shadow: -1px 0 rgba(70, 70, 70, 1), 0 1px rgba(70, 70, 70, 1),
    1px 0 rgba(70, 70, 70, 1), 0 -1px rgba(70, 70, 70, 1);
}

.lowerText {
  font-size: 16px;
  font-weight: 700;
  text-shadow: -1px 0 rgba(70, 70, 70, 1), 0 1px rgba(70, 70, 70, 1),
    1px 0 rgba(70, 70, 70, 1), 0 -1px rgba(70, 70, 70, 1);
}
.lowerText-xsonly {
  font-size: 14px;
  font-weight: 400;
  text-shadow: -1px 0 rgba(70, 70, 70, 1), 0 1px rgba(70, 70, 70, 1),
    1px 0 rgba(70, 70, 70, 1), 0 -1px rgba(70, 70, 70, 1);
}
</style>
