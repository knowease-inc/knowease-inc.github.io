<template>
  <v-card flat tile>
    <v-carousel
      hide-delimiters
      cycle
      show-arrows-on-hover
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
          width="100%"
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
class PagesIndexCarousel extends Vue {
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
        'https://cdn.pixabay.com/photo/2015/03/26/09/44/cell-phone-690192_960_720.jpg',
      text: {
        upper: {
          first: '쉽고 신속하게 다양한 지식에',
          second: '입문할 수 있도록 돕습니다.',
        },
        lower: {
          first: '모든 분야에서 배움의 장벽을 낮춰 학습을 돕고',
          second: '정보 격차로 인한 피해를 줄입니다.',
        },
      },
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2017/03/19/11/07/light-2156209_960_720.jpg',
      text: {
        upper: {
          first: '지식 전달 난이도를 낮추는',
          second: '기술과 말뭉치(Corpus)를 연구합니다.',
        },
        lower: {
          first: '학업, 자기계발, 업무상 언제든 그리고 누구든',
          second: '쉬운 언어를 편히 사용할 기반을 마련합니다.',
        },
      },
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg',
      text: {
        upper: {
          first: '서로 이해할 수 있는 지식 환경 조성으로',
          second: '자연스러운 사회 통합을 준비합니다.',
        },
        lower: {
          first: '서로 다른 세대/지역/소속/사회집단 사이의',
          second: '소통을 보조하여 상호 이해를 돕습니다.',
        },
      },
    },
  ]
}

export default PagesIndexCarousel
</script>

<style scoped>
.upperText {
  font-weight: 800;
  font-size: 32px;
  text-shadow: -1px 0 darkgrey, 0 1px darkgrey, 1px 0 darkgrey, 0 -1px darkgrey;
}
.upperText-xsonly {
  font-weight: 600;
  font-size: 18px;
  text-shadow: -1px 0 darkgrey, 0 1px darkgrey, 1px 0 darkgrey, 0 -1px darkgrey;
}

.lowerText {
  font-size: 16px;
  font-weight: 500;
  text-shadow: -1px 0 darkgrey, 0 1px darkgrey, 1px 0 darkgrey, 0 -1px darkgrey;
}
.lowerText-xsonly {
  font-size: 12px;
  font-weight: 400;
  text-shadow: -1px 0 darkgrey, 0 1px darkgrey, 1px 0 darkgrey, 0 -1px darkgrey;
}
</style>
