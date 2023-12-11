<template>
  <v-card flat :outlined="$vuetify.breakpoint.xsOnly" class="mt-4 mx-0 mx-sm-4">
    <v-timeline :dense="$vuetify.breakpoint.xsOnly">
      <v-timeline-item
        v-for="(item, i) in content"
        :key="i"
        :left="item.left"
        :right="!item.left"
        :small="item.small"
        :color="item.color !== null ? item.color : 'secondary'"
        :icon="item.icon !== null ? item.icon : null"
      >
        <template #opposite>
          <span class="timelinetitle" v-text="item.date"></span>
        </template>
        <v-card flat outlined class="mr-1 py-2">
          <v-card-title
            v-if="$vuetify.breakpoint.smAndUp"
            class="timelinetitle py-1"
          >
            {{ item.title }}
          </v-card-title>
          <v-card-title v-else class="timelinetitle-xs py-1">
            {{ item.title }}
          </v-card-title>
          <v-card-text
            v-if="$vuetify.breakpoint.xsOnly"
            class="py-0 grey--text"
          >
            {{ item.date }}
          </v-card-text>
          <v-card-text class="timelineBody py-2">
            {{ item.body }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesIndexTimeline extends Vue {
  @Provide() content: Array<{
    title: string
    date: string
    body: string
    left: boolean
    small: boolean
    color: string
    icon: null | string
  }> = [
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
      body:
        '클라우드 서비스(AWS)를 활용한 대량 이용 대비 서비스 인프라 최적화 완료 후 두 번째 공개 테스트를 했습니다. (Market/Infra Test)',
      // 'Alpha Test 피드백 기반 서비스 개선 후, 검색 엔진 최적화를 위한 SSR(Server Side Rendering) 방식 채택, 운영/관리 효율화를 위한 AWS 클라우드 서비스상 Serverless 적용 인프라가 함께 테스트 되었습니다.',
      left: false,
      small: true,
      color: 'secondary',
      icon: null,
    },
    {
      title: "'쉬운 설명 플랫폼' Alpha Test",
      date: '2020.10',
      body:
        '미닛 최소 작동 모델(MVP) 완성 후, 고객지향적인 기능 개발을 위해 고객 대상 최초 테스트가 이루어졌습니다.',
      left: false,
      small: true,
      color: 'secondary',
      icon: null,
    },
    {
      title: '창립 멤버 구성',
      date: '2019.7',
      body:
        '총 4명으로 구성된 창립 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발에 착수했습니다.',
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
}
export default PagesIndexTimeline
</script>
