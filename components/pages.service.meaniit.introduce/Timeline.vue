<template>
  <v-card :outlined="$vuetify.breakpoint.xsOnly" flat class="mt-4 mx-0 mx-sm-4">
    <v-timeline :dense="$vuetify.breakpoint.xsOnly" class="pr-6 px-sm-8">
      <v-timeline-item
        v-for="(content, i) in contents"
        :key="i"
        :left="content.left"
        :right="!content.left"
        :small="content.small"
        :color="content.color !== null ? content.color : 'secondary'"
        :icon="content.icon !== null ? content.icon : null"
      >
        <template #opposite>
          <span class="timelinetitle" v-text="content.date"></span>
        </template>
        <v-card flat outlined>
          <v-card-title
            v-if="$vuetify.breakpoint.smAndUp"
            class="timelinetitle py-1"
          >
            {{ content.title }}
          </v-card-title>
          <v-card-title v-else class="timelinetitle-xs py-1">
            {{ content.title }}
          </v-card-title>
          <v-card-text
            v-if="$vuetify.breakpoint.xsOnly"
            class="py-0 grey--text"
          >
            {{ content.date }}
          </v-card-text>
          <v-card-text class="timelineBody py-2">
            {{ content.body }}
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
      contents: [
        {
          title: "주요 마일스톤 (3rd)",
          date: '2023.12',
          body: '\'자료조사AI(가칭)\' 내부 테스트: 자료조사 ~ 보고서 작성 특화 구조 구축 및 GPT 기반 문서 작성 연구 결과 테스트',
          left: false,
          small: true,
          color: 'secondary',
          icon: null,
        },
        {
          title: 'AI 기술 활용 사업전략 신규 수립',
          date: '2023.8',
          body:
            'GPT 기술 상용화에 따른 신규 사업전략, AI 기술 활용 정보 격차 해소 상용 서비스 계획 수립',
          left: true,
          small: false,
          color: 'primary',
          icon: 'mdi-robot',
        },
        {
          title: '주요 마일스톤 (2th)',
          date: '2023.4',
          body:
            '난이도 저감 위한 GPT 및 기존 NLP 구조 활용 연구: 어려운 단어 사용에 대한 난이도 등급별 설명 제공 방법',
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: '주요 마일스톤 (1st)',
          date: '2023.4',
          body:
            '사용자 참여 지식 데이터베이스 Semi Open 테스트',
          left: false,
          small: true,
          color: 'secondary',
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
          body: '투자유치 위한 주식회사 설립',
          // 'Alpha Test 피드백 기반 서비스 개선 후, 검색 엔진 최적화를 위한 SSR(Server Side Rendering) 방식 채택, 운영/관리 효율화를 위한 AWS 클라우드 서비스상 Serverless 적용 인프라가 함께 테스트 되었습니다.',
          left: true,
          small: false,
          color: 'primary',
          icon: 'mdi-play',
        },
        {
          title: '인프라(Cloud Native) 연구 및 구축',
          date: '2021.10',
          body:
            '클라우드 서비스(AWS)를 활용한 대량 이용 대비 웹서비스 인프라 최적화 테스트를 했습니다.',
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: '최초 사업전략 수립',
          date: '2020.7',
          body:
            '어려운 지식, 정보에 대한 쉬운 설명 제공(난이도 저감) 정보기술 연구 및 서비스화',
          left: false,
          small: true,
          color: 'secondary',
        },
        {
          title: '최초 개발 멤버 구성',
          date: '2019.7',
          body:
            '총 3명으로 구성된 개발 멤버로, 우수한 개발 능력을 갖춘 멤버가 합류함으로써 본격적인 서비스 개발을 구상할 수 있었습니다.',
          left: true,
          small: false,
          color: 'primary',
          icon: 'mdi-account-multiple-plus',
        },
      ],
    }
  },
}
</script>
