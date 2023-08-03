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
    description: string
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
      title: '웹 서비스(백엔드) 경력직 채용 (2023)',
      description:
        '- 업무, 협력 역량만 봐요! 출/퇴근 어려움, 경력 단절...? 무관!',
      subtitle: [
        {
          title: '직무 소개',
          contents: [
            {
              title: '기초 정보',
              content: [
                '웹 서비스 (백엔드), 계약직',
                '경력 : 2년 이상 또는 이에 준하는 실력을 갖춘 분',
                '채용 인원 : 1 명',
              ],
            },
            {
              title: '업무 소개',
              content: [
                '사용자들이 전문/기술 용어, 가이드/매뉴얼에 대한 설명 중 이해하기 쉬운 것을 빠르게 찾을 수 있도록 쉬운 정도를 기준으로 상위 설명에 등재되는 참여형 사전 서비스의 백엔드를 개발합니다. 비즈니스 요구 사항을 만족하는 백엔드 API를 설계, 개발, 테스트 및 배포하게 되며, 이미 완성되어 있는 코드의 개선 및 리팩토링, API 변경사항에 대한 문서 작성 및 관리를 담당합니다.',
                '주요 기능 및 서비스를 위하여 GPT, 자연어 처리(NLP), 데이터 분석 기술을 바탕으로 개발된 다양한 API 개선을 담당합니다.',
              ],
            },
            {
              title: '담당 업무',
              content: [
                'Python을 사용한 서버 사이드 로직 개발',
                'RESTful API 설계 및 개발',
                'AWS 환경에서 서비스 배포 및 유지보수',
                '프론트엔드 개발자와 협업하여 사용자 요구사항에 맞게 개발',
              ],
            },
            {
              title: '현재 백엔드 개발 스택 참고',
              content: [
                'Flask, Python',
                'Git, Github',
                'Serverless Framework',
                'AWS (Lambda, API Gateway, S3)',
                '[프론트엔드] Nuxt.js, Vue.js, JavaScript, [DB] MySQL',
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
                'Python을 활용한 백엔드 개발 경험이 있으신 분',
                'RESTful API 개발 경험이 있으신 분',
                'RDB/SQL, ORM을 이용한 데이터베이스 처리 및 이용이 가능하신 분',
                'Github를 활용한 개발 및 협업이 가능하신 분',
                '영문 검색을 통해 개발 레퍼런스 확인, 적용 및 문제해결이 뛰어나신 분',
              ],
            },
            {
              title: '우대',
              content: [
                'Pandas, Spark 활용 데이터 핸들링이 가능하신 분',
                'GPT에 대한 이해 및 활용 경험이 있으신 분',
                'NLP에 대한 이해 및 활용 경험이 있으신 분',
                'Flask 통한 백엔드 개발 경험이 있으신 분',
                'AWS 환경에서의 서비스 배포 및 운영 경험이 있으신 분',
                'AWS 통한 CI/CD 파이프라인 구축 및 운영 경험이 있으신 분',
                '자율적으로 일하면서 문제를 해결할 수 있는 능력이 높으신 분',
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
              content: ['100% 재택 근무', '유연 근무 (코어 근무시간 외 / 코어 근무시간 조절 가능)'],
            },
          ],
        },
        {
          title: '기타',
          contents: [
            {
              title: '고용 관련',
              content: [
                '형태 : 계약직(6개월)',
              ],
            },
            {
              title: '채용 과정',
              content: [
                '지원서 제출 기간 : 채용 완료 시까지',
                '서류(사전 과제 평가 포함) > 온라인 면접 > 적합성 면접 > 최종합격',
                '개별 과제 : 지원서 제출 후 48시간 내 지원자에 개발 과제(7일 기한) 송부',
                '과제 시 주의사항 : 지원자에 과제 송부 후 과제 제출 기한이 확정되므로 과제 수신 확인에 유의',
                '서류 & 과제 합격 결과 발표 : 과제 완료 후 7일 이내',
              ],
            },
          ],
        },
      ],
      registerBtn: {
        url: 'https://forms.gle/1q1eSFMb9LBtEqai7', // Google Form
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
