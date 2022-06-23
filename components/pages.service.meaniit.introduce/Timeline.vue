<template>
  <v-card :outlined="$vuetify.breakpoint.xsOnly" flat class="mt-4 mx-0 mx-sm-4">
    <v-timeline :dense="$vuetify.breakpoint.xsOnly" class="pr-6 px-sm-8">
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
        <v-card flat outlined>
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

<script>
export default {
  data() {
    return {
      content: [
        {
          title: '주요 마일스톤 (4th)',
          date: '2022.1',
          body:
            "사용자 기여도 시각 요소 증대 및 회원활동 편의 기능 업데이트 & 서비스명 변경 'EASYXPLAIN > 미닛'",
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: '주요 마일스톤 (3rd)',
          date: '2021.10',
          body:
            "'재테크/금융 소비자를 위한 쉬운 지식/정보 서비스' 테마 적용 및 작성 편의 기능 업데이트",
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: 'Semi Open',
          date: '2021.10',
          body: '서비스 오픈 상태 유지 시작',
          left: true,
          small: false,
          color: 'blue accent-3',
          icon: 'mdi-lock-open',
        },
        {
          title: 'Beta Test',
          date: '2021.9',
          body:
            '클라우드 서비스(AWS)를 활용한 대량 이용 대비 서비스 인프라 최적화 완료 후 두 번째 공개 테스트를 했습니다.',
          // 'Alpha Test 피드백 기반 서비스 개선 후, 검색 엔진 최적화를 위한 SSR(Server Side Rendering) 방식 채택, 운영/관리 효율화를 위한 AWS 클라우드 서비스상 Serverless 적용 인프라가 함께 테스트 되었습니다.',
          left: false,
          small: true,
        },
        {
          title: 'Alpha Test',
          date: '2020.10',
          body:
            '최소 작동 모델(MVP) 완성 후, 고객지향적인 서비스 개발을 위해 고객 대상 최초 테스트가 이루어졌습니다.',
          left: false,
          small: true,
        },
        {
          title: '창립 멤버 구성',
          date: '2019.7',
          body:
            '총 4명으로 구성된 창립 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발에 착수했습니다.',
          left: true,
          small: false,
          color: 'blue accent-3',
          icon: 'mdi-account-multiple-plus',
        },
        {
          title: '최초 개발',
          date: '2019.4',
          body: '아이디어 상태였던 아이템을 직접 개발하기 시작했습니다.',
          left: false,
          small: true,
        },
      ],
    }
  },
}
</script>

<style scoped>
.timelinetitle,
.timelinetitle-xs {
  font-weight: 600;
  color: #2979ff;
}
.timelinetitle {
  font-size: 0.9rem;
}
.timelinetitle-xs {
  font-size: 0.85rem;
}
.timelineBody {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 130%;
}
</style>