<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-card
      flat
      tile
      :max-width="mainCardMaxWidth"
      :min-height="computedMinHeight"
      class="d-flex justify-center align-center mt-2"
    >
      <v-card flat tile>
        <RecruitInfos :parent-items="WebdeveloperFrontend" />
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
import RecruitInfos from '@/components/pages.recruit/RecruitInfos.vue'

const { width, height } = useDisplay()

useHead({
  title: '채용 공고 - (주)게타',
})

const WebdeveloperFrontend = [
  {
    title: '[마감] 웹 서비스(백엔드) 경력직 채용',
    description:
      '- 업무, 협력 역량만 봐요! 출/퇴근 어려움, 경력 단절...? 무관!',
    subtitle: [
      {
        title: '직무 소개',
        contents: [
          {
            title: '기초 정보',
            content: [
              '웹 서비스(백엔드), 계약직',
              '경력 : 2년 이상 또는 이에 준하는 실력을 갖춘 분',
              '채용 인원 : 1 명',
            ],
          },
          {
            title: '업무 소개',
            content: [
              '자료조사 및 보고서 작성 인공지능(AI) 서비스의 기능을 개발합니다. 비즈니스 요구 사항을 만족하는 기능 및 백엔드 API를 설계, 개발, 테스트 및 배포하게 되며, 이미 완성되어 있는 코드의 개선 및 리팩토링, API 변경사항에 대한 문서 작성 및 관리를 담당합니다.',
              '주요 기능 및 서비스를 위하여 GPT, 자연어 처리(NLP), 데이터 분석 기술을 바탕으로 개발된 다양한 기능 및 API 개선을 맡습니다.',
            ],
          },
          {
            title: '담당 업무',
            content: [
              'Python을 사용한 서버 사이드 로직 개발',
              'GPT(Prompt Engineering), NLP, 데이터 분석 기술 활용한 기능 개발',
              'RESTful API 설계 및 개발',
              'AWS 환경에서 서비스 배포 및 유지보수',
              '프론트엔드 개발자와 협업하여 사용자 요구사항에 맞게 개발',
            ],
          },
          {
            title: '현재 백엔드 개발 스택 참고',
            content: [
              'FastAPI (일부 Flask), Python',
              'Git, Github',
              'Serverless Framework',
              'AWS (ECS, Lambda, API Gateway, S3 등)',
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
              'GPT, Prompt Engineering에 대한 이해 및 활용 경험이 있으신 분',
              'NLP에 대한 이해 및 활용 경험이 있으신 분',
              'FastAPI 통한 백엔드 개발 경험이 있으신 분',
              'Pandas, PySpark 활용 데이터 핸들링이 가능하신 분',
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
            content: [
              '100% 재택 근무',
              '유연 근무 (코어 근무시간 외)',
              '월차 제공',
            ],
          },
        ],
      },
      {
        title: '기타',
        contents: [
          {
            title: '고용 관련',
            content: [
              '형태 : 계약직(1년)',
              '계약 기간 중 평가에 따라 계약 기간 연장 또는 채용이 취소될 수 있습니다',
            ],
          },
          {
            title: '채용 과정',
            content: [
              '서류 > 적합성 면접 > 최종합격',
              '서류(지원서) 제출 기간 : 채용 완료 시까지',
              '서류 합격 결과 발표 : 서류 접수 후 5일(영업일) 이내, 합격 안내와 함께 이후 일정 공지',
            ],
          },
        ],
      },
    ],
    registerBtn: {
      url: 'https://forms.gle/ot9JNcXYoh2Qxwex9', // Google Form
      name: '지원하기',
      color: '#3746fb',
    },
  },
]

const mainCardMaxWidth = computed(() => (width.value < 860 ? width.value : 860))
const computedMinHeight = computed(() => height.value - 220)
</script>
