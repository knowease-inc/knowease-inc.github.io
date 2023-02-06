<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-card
      flat
      tile
      :max-width="mainCardMaxWidth"
      :min-height="$vuetify.breakpoint.height - 220"
      class="d-flex justify-center align-center mt-2"
    >
      <v-card flat tile>
        <recruit-infos :parent-items="WebdeveloperFrontend" />
      </v-card>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import RecruitInfos from '@/components/pages.recruit/RecruitInfos.vue'

@Component({
  components: {
    RecruitInfos,
  },
})
class PagesRecruit extends Vue {
  public head() {
    return {
      title: '채용 공고 - (주)게타',
    }
  }

  /* data */
  WebdeveloperFrontend: Array<{
    title: string
    subtitle: Array<{
      title: string
      contents: Array<{ title: string; content: Array<string> }>
    }>
    registerBtn: {
      url: string
      name: string
      color: string
    }
  }> = [
    {
      title: '웹 개발자(프론트엔드) 경력직 채용중',
      subtitle: [
        {
          title: '직무 소개',
          contents: [
            {
              title: '기초 정보',
              content: [
                '웹 개발자 (프론트엔드), 정규직',
                '경력 : 2년 이상 또는 이에 준하는 실력을 갖춘 분',
              ],
            },
            {
              title: '업무 소개',
              content: [
                '사용자들이 전문/기술 용어, 가이드/매뉴얼에 대한 설명 중 이해하기 쉬운 것을 빠르게 찾을 수 있도록 쉬운 정도를 기준으로 상위 설명에 등재되는 참여형 사전 서비스의 웹 프론트엔드를 개발합니다. 확장성 및 유지보수가 용이하도록 컴포넌트 설계 및 개발하며, 별도로 완성된 웹 디자인을 적용합니다. 또한 Google, SNS에서의 공유를 통한 접근성을 고려하여 검색 엔진 최적화(SEO)도 주요하게 핸들링합니다.',
                '참여형 사전 내용을 채워줄 작성자들의 글 작성 편의를 위해 서식 적용, 이미지 첨부, mention 삽입, 임시저장 및 불러오기를 할 수 있도록 기존 자체 WYSIWYG 에디터를 수정 개발합니다.',
                '작성된 데이터의 통계 자료, 자연어 처리(NLP)를 기반으로 백엔드에서 제공되는 정보를 활용하는 다양한 데이터 시각화 컴포넌트를 개발 합니다.',
              ],
            },
            {
              title: '담당 업무',
              content: [
                '고객/서비스 지향적인 마이크로 Frontend 설계 및 개발',
                'Vue 기반 SPA 프레임워크를 이용한 웹 서비스 개발',
              ],
            },
            {
              title: '현재 프론트엔드 개발 스택 참고',
              content: [
                'Nuxt.js, Vue.js, JavaScript (TypeScript 혼용)',
                'Vuetify',
                'Yarn',
                'Git, Github',
                'Serverless Framework',
                'AWS (API Gateway, S3, Lambda)',
                '[백엔드] Flask, Python, [DB] MySQL',
              ],
            },
          ],
        },
        {
          title: '자격 요건',
          contents: [
            {
              title: '기본',
              content: [
                'Node.js 기반 웹 개발(프론트엔드) 진행 경험이 있으신 분',
                'JavaScript 개발 경험이 있으신 분',
                'HTML/CSS 활용 가능하신 분',
                'Github를 활용한 개발 및 협업이 가능하신 분',
                '영문 검색을 통해 개발 레퍼런스 확인, 적용 및 문제해결이 뛰어나신 분',
              ],
            },
            {
              title: '우대',
              content: [
                'WYSIWYG editor 개발 경험이 있으신 분',
                'Vue.js, Nuxt.js 활용한 서버 사이드 렌더링(SSR) 개발 경험이 있으신 분',
                '검색 엔진 최적화(SEO)를 진행한 경험이 있으신 분',
                '반응형 웹(Responsive Web) 개발 경험이 있으신 분',
                'AWS를 활용한 웹 어플리케이션 개발 경험이 있으신 분',
                '웹 사이트 퍼포먼스 측정 및 이를 통한 최적화 경험이 있으신 분',
                'TypeScript와 같은 정적 타이핑 툴 경험이 있으신 분',
                '성장 의지, 자기계발 욕구, 유연한 커뮤니케이션 역량을 객관적으로 제시할 수 있는 분',
              ],
            },
          ],
        },
        {
          title: '혜택 및 복지',
          contents: [
            {
              title: '기본',
              content: ['4대 보험'],
            },
            {
              title: '추가',
              content: ['재택 근무'],
            },
          ],
        },
        {
          title: '기타',
          contents: [
            {
              title: '고용 관련',
              content: [
                '형태 : 정규직(수습 3개월)',
                '수습 기간 중 평가에 따라 수습 기간 연장 또는 채용이 취소될 수 있습니다',
              ],
            },
            {
              title: '채용 과정',
              content: [
                '지원서 제출 기간 : 2023.2.6(월) ~ 2.20(월)',
                '서류(사전 과제 평가 포함) > 온라인 면접 > 적합성 면접 > 최종합격',
                '개별 과제 : 지원서 제출 후 48시간 내 지원자에 개발 과제 송부',
                '과제 시 주의사항 : 지원자에 과제 송부 후 과제 제출 기한이 확정되므로 과제 수신 확인에 유의',
                '서류 & 과제 합격 결과 발표 : 2023.3.6(금), 발표와 함께 이후 일정 공지',
              ],
            },
          ],
        },
      ],
      registerBtn: {
        url: 'https://forms.gle/x6h1SU2qpeHNwTSh9', // Google Form
        name: '지원하기',
        color: '#2979FF',
      },
    },
  ]

  /* computed */
  get mainCardMaxWidth(): number {
    const maxWidth: number =
      this.$vuetify.breakpoint.width < 860
        ? this.$vuetify.breakpoint.width
        : 860
    return maxWidth
  }
}

export default PagesRecruit
</script>
