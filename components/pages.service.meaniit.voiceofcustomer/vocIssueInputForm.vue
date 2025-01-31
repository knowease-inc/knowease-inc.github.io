<template>
  <v-container
    fluid
    class="d-flex justify-center mt-10 mx-0 px-0 px-sm-3 pt-16"
  >
    <v-card
      flat
      max-width="800"
      class="d-flex align-center ma-0 pa-0"
      color="rgba(0, 0, 0, 0)"
    >
      <v-card :width="cardWidth" flat variant="outlined" class="pa-1 pa-sm-3">
        <!-- ### START: Title ### -->
        <v-card-title class="d-flex justify-center article-title ma-0">
          <p>{{ title }}</p>
        </v-card-title>

        <!-- ### START: Input Form ### -->
        <v-card-text class="pb-0">
          <v-form ref="form" model-value="valid" validate-on="submit">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail 주소를 입력해주세요."
              type="text"
              :prepend-icon="mdiEmail"
              density="compact"
              class="mt-2"
              variant="underlined"
              validate-on="invalid-input"
            />

            <v-text-field
              v-model="customName"
              :rules="customNameRules"
              label="성함을 입력해주세요."
              type="text"
              :prepend-icon="mdiAccount"
              density="compact"
              class="mt-2"
              variant="underlined"
              validate-on="invalid-input"
            />

            <v-text-field
              v-model="customPhoneNumber"
              label="(선택사항)핸드폰 번호를 입력해주세요."
              type="text"
              :prepend-icon="mdiPhone"
              density="compact"
              class="mt-2"
              variant="underlined"
            />

            <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || '필수 선택 항목입니다.']"
              label="관련 주제를 선택해주세요."
              :prepend-icon="mdiCursorDefault"
              variant="underlined"
              validate-on="submit"
            />

            <v-textarea
              v-model="question"
              :counter="questionCounter"
              :rules="questionRules"
              name="question"
              label="문의/건의 내용을 입력해주세요."
              hint="무관한 내용, 타인에 대한 비난/비방/욕설 등이 포함되는 경우 무통보 삭제될 수 있습니다."
              auto-grow
              density="compact"
              variant="underlined"
              validate-on="submit"
            />

            <v-checkbox
              v-model="checkbox"
              :rules="[
                (v) => !!v || '동의하지 않는 경우 내용이 등록되지 않습니다.',
              ]"
              label="문의 등록 시, 제공하신 이메일 주소와 작성 내용은 서비스 개선 및 연구 목적으로 활용될 수 있습니다."
              validate-on="submit"
            />
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-end pt-0">
          <v-btn
            :disabled="!valid"
            color="#313de3"
            variant="outlined"
            class="mr-4"
            @click="summitCustomerVoice"
          >
            등록
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
import { mdiEmail, mdiCursorDefault, mdiAccount, mdiPhone } from '@mdi/js'

const title = '고객 문의'
const form = ref(null)
const valid = ref(true)
const email = ref('')
const customName = ref('')
const customPhoneNumber = ref('')
const select = ref(null)
const question = ref('')
const checkbox = ref(false)
const questionCounter = 1000

const emailRules = [
  (v) => !!v || '이메일 주소 입력이 필요합니다.',
  (v) => /.+@.+\..+/.test(v) || '이메일 주소를 입력해야 합니다.',
]

const questionRules = [
  (v) => !!v || '내용 입력이 필요합니다.',
  (v) =>
    (v && v.length <= questionCounter) ||
    'Question must be less than 1000 characters',
]

const customNameRules = [(v) => !!v || '이름을 입력해주세요.']

const items = ['서비스 이용 문제', '신규 기능 건의', '비즈니스 상담']

const { width } = useDisplay()
const cardWidth = computed(() => (width.value > 800 ? 800 : width.value))

const headDescription =
  '고객 문의 페이지입니다. 서비스 이용 문제, 신규 기능 건의, 비즈니스 상담 요청 등이 가능합니다.'

useHead({
  title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: headDescription,
    },

    // Open Graph 메타 태그 (참고: 나머지 속성은 전역 설정 따름_nuxt.config 및 package.json )
    { hid: 'og:title', property: 'og:title', content: title },
    {
      hid: 'og:description',
      property: 'og:description',
      content: headDescription,
    },
    { hid: 'og:url', property: 'og:url', content: window.location.href },

    // Twitter 카드 설정
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: headDescription,
    },
  ],
})

const summitCustomerVoice = async () => {
  form.value.validate()

  if (valid.value) {
    try {
      // GitHub 이슈 생성
      await postIssueCreation()

      // 서버에 데이터 저장
      await sendInquiryToServer({
        customer_name: customName.value,
        customer_email: email.value,
        customer_phone: customPhoneNumber.value,
        content: question.value,
      })

      alert(`「${select.value} / ${email.value}」를 이슈로 등록하였습니다.`)
      location.reload()
    } catch (err) {
      console.error(err)
      alert('문제가 발생했습니다. 다시 시도해주세요.')
    }
  }
}

const mapVselectToGithubIssuelabels = () => {
  switch (select.value) {
    case '서비스 이용 문제':
      return ['Domain:UX', 'Task:Bug', 'Communication:VoiceOfCustomer']
    case '신규 기능 건의':
      return ['Domain:UX', 'Task:Enhancement', 'Communication:VoiceOfCustomer']
    case '비즈니스 상담':
      return [
        'Domain:Business',
        'Task:Enhancement',
        'Communication:VoiceOfCustomer',
      ]
    default:
      return ['Communication:VoiceOfCustomer']
  }
}

// GitHub 이슈 생성 함수
const postIssueCreation = async () => {
  // JWT 가져오기
  const { data: jwtData, error: jwtError } = await useFetch(
    'https://asia-northeast3-knowease-inc.cloudfunctions.net/jwt-creation-app-for-knowease-inc-github-io',
  )

  if (jwtError.value) {
    console.error('JWT 가져오기 실패:', jwtError.value)
    return
  }
  const jwt = jwtData.value

  // Access Token 가져오기
  const { data: accessTokensData, error: accessTokensError } = await useFetch(
    'https://api.github.com/app/installations/19408771/access_tokens',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: 'application/vnd.github.v3+json',
      },
      // 빈 객체를 body로 전달하여 `POST` 요청이 성공적으로 전송되도록 설정
      body: {},
    },
  )

  if (accessTokensError.value) {
    console.error('Access Token 가져오기 실패:', accessTokensError.value)
    return
  }
  const accessToken = accessTokensData.value.token

  // GitHub 이슈 생성
  const { data: creationResult, error: creationError } = await useFetch(
    'https://api.github.com/repos/knowease-inc/knowease-inc.github.io/issues',
    {
      method: 'POST',
      headers: {
        Authorization: `Token ${accessToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        title: `${select.value} / ${email.value}`,
        labels: mapVselectToGithubIssuelabels(),
        body: `| Email | 항목 | 질문 |\n| -- | -- | -- |\n|${email.value}|${select.value}|${question.value}|`,
      }),
    },
  )

  if (creationError.value) {
    console.error('GitHub 이슈 생성 실패:', creationError.value)
    return
  }

  return creationResult.value
}

const sendInquiryToServer = async (inquiryData = {}) => {
  const { customer_name, customer_email, content } = inquiryData

  try {
    const apiUrl = 'https://ko.api.researcher.meaniit.com'

    // 요청 데이터
    const requestBody = new FormData()
    requestBody.append('customer_name', customer_name)
    requestBody.append('customer_email', customer_email)
    requestBody.append('content', content)

    const { data: response, error } = await useFetch(
      `${apiUrl}/api/resource/users/inquiry`,
      {
        method: 'POST',
        headers: {
          'x-api-key': '2kamERrKtd78e7iXsTxxP3kdkDteXbAM5uN7rWMV',
        },
        body: requestBody,
      },
    )

    if (error.value) {
      console.error('서버에 데이터 저장 실패:', error.value)
    }
    return response.value
  } catch (err) {
    console.error('서버 통신 중 오류 발생:', err)
  }
}
</script>

<style scoped>
/* Content Title */
.article-title,
.article-title-xs {
  font-weight: 500;
}
</style>
