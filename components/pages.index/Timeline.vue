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
      title: '미닛 Semi Open',
      date: '2021.10',
      body: '서비스 오픈 상태 유지 시작',
      left: true,
      small: false,
      color: 'blue accent-3',
      icon: 'mdi-lock-open',
    },
    {
      title: '미닛 Beta Test',
      date: '2021.9',
      body:
        '클라우드 서비스(AWS)를 활용한 대량 이용 대비 서비스 인프라 최적화 완료 후 두 번째 공개 테스트를 했습니다.',
      // 'Alpha Test 피드백 기반 서비스 개선 후, 검색 엔진 최적화를 위한 SSR(Server Side Rendering) 방식 채택, 운영/관리 효율화를 위한 AWS 클라우드 서비스상 Serverless 적용 인프라가 함께 테스트 되었습니다.',
      left: false,
      small: true,
      color: 'secondary',
      icon: null,
    },
    {
      title: '미닛 Alpha Test',
      date: '2020.10',
      body:
        '미닛 최소 작동 모델(MVP) 완성 후, 고객지향적인 기능 개발을 위해 고객 대상 최초 테스트가 이루어졌습니다.',
      left: false,
      small: true,
      color: 'secondary',
      icon: null,
    },
    {
      title: '쉬운지식 유한책임회사 설립',
      date: '2020.7',
      body: '본격적인 발돋움을 위해 법인 설립을 완료하였습니다',
      left: true,
      small: false,
      color: 'blue accent-3',
      icon: 'mdi-baby',
    },
    {
      title: '창립 멤버 구성',
      date: '2019.7',
      body:
        '총 4명으로 구성된 창립 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발에 착수했습니다.',
      left: true,
      small: true,
      color: 'blue accent-3',
      icon: null,
    },
    {
      title: '미닛 최초 개발',
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

<style scoped>
.timelinetitle,
.timelinetitle-xs {
  font-weight: 600;
  color: #2979ff;
}
.timelinetitle {
  font-size: 1.6rem;
}
.timelinetitle-xs {
  font-size: 1.6rem;
}
.timelineBody {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 130%;
}
</style>
