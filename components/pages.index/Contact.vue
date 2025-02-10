<template>
  <v-row justify="center" class="gradient-background pb-12 pb-sm-0">
    <v-col
      cols="10"
      lg="10"
      class="d-sm-flex flex-sm-column align-center pt-16 text-center"
    >
      <p
        class="my-6"
        :class="xs ? 'section-title-xs text-center' : 'section-title'"
      >
        Contact
      </p>

      <p
        class="font-weight-bold my-4 d-flex flex-column flex-sm-row align-center"
        :style="{ fontSize: xs ? '1.3rem' : '2.5rem' }"
      >
        <v-img
          src="/img/GET_A_LOGO.png"
          :width="xs ? 80 : 200"
          class="mr-sm-4 mb-sm-0 mb-2"
        />
        <span>{{ t('pages.index.contact.subTitle') }}</span>
      </p>

      <p
        class="font-weight-bold my-4"
        :style="{ fontSize: xs ? '1.15rem' : '1.5rem' }"
        v-html="t('pages.index.contact.proposalText')"
      ></p>

      <p
        class="mb-sm-12"
        :class="xs ? 'section-subtitle-xs' : 'section-subtitle'"
        :style="{ fontSize: xs ? '0.92rem' : '' }"
        v-html="t('pages.index.contact.guideText')"
      ></p>
    </v-col>

    <v-col cols="12" sm="10">
      <v-col cols="10" offset="1" offset-sm="1">
        <p class="text-end">
          <span class="main-color">*</span>
          {{ t('pages.index.contact.required') }}
        </p>
      </v-col>

      <!-- ### START: Input Form ### -->
      <v-form ref="form" model-value="valid" validate-on="submit">
        <!-- 이름 / 연락처 -->
        <v-row justify="center">
          <v-col cols="10" sm="5">
            <v-sheet class="d-flex align-center rounded-lg px-sm-4">
              <v-col cols="3" sm="3" class="input-label font-w-800">
                {{ t('pages.index.contact.template.name') }}
                <span class="main-color">*</span>
              </v-col>

              <v-col cols="8" class="py-0">
                <v-text-field
                  v-model="customerName"
                  :placeholder="
                    t('pages.index.contact.template.namePlaceholder')
                  "
                  density="compact"
                  variant="plain"
                  hide-details
                  type="text"
                  validate-on="invalid-input"
                />
              </v-col>
            </v-sheet>
          </v-col>

          <v-col cols="10" sm="5">
            <v-sheet class="d-flex align-center rounded-lg px-sm-4">
              <v-col cols="auto" sm="3" class="input-label font-w-800">
                {{ t('pages.index.contact.template.contactInfo') }}
                <span class="main-color">*</span>
              </v-col>

              <v-col cols="8" class="py-0">
                <v-text-field
                  v-model="contactInfo"
                  :placeholder="
                    t('pages.index.contact.template.contactInfoPlaceholder')
                  "
                  density="compact"
                  variant="plain"
                  hide-details
                  type="text"
                  validate-on="invalid-input"
                />
              </v-col>
            </v-sheet>
          </v-col>
        </v-row>

        <!-- 이메일 / 직장 -->
        <v-row justify="center">
          <v-col cols="10" sm="5">
            <v-sheet class="d-flex align-center rounded-lg px-sm-4">
              <v-col
                cols="3"
                sm="3"
                class="input-label font-w-800 pr-1 pr-sm-3"
              >
                {{ t('pages.index.contact.template.email') }}
                <span class="main-color">*</span>
              </v-col>

              <v-col cols="8" class="py-0">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :placeholder="
                    t('pages.index.contact.template.emailPlaceholder')
                  "
                  density="compact"
                  variant="plain"
                  single-line
                  hide-details
                  type="text"
                  validate-on="invalid-input"
                />
              </v-col>
            </v-sheet>
          </v-col>

          <v-col cols="10" sm="5">
            <v-sheet class="d-flex align-center rounded-lg px-sm-4">
              <v-col cols="3" sm="3" class="input-label font-w-800">
                {{ t('pages.index.contact.template.companyInfo') }}
              </v-col>

              <v-col cols="8" class="py-0">
                <v-text-field
                  v-model="companyInfo"
                  :placeholder="
                    t('pages.index.contact.template.companyInfoPlaceholder')
                  "
                  density="compact"
                  variant="plain"
                  hide-details
                  type="text"
                />
              </v-col>
            </v-sheet>
          </v-col>
        </v-row>

        <!-- 문의 내용 -->
        <v-row justify="center">
          <v-col cols="10" sm="10">
            <v-sheet class="d-sm-flex align-center rounded-lg px-sm-4">
              <v-col
                cols="5"
                sm="auto"
                align-self="start"
                class="input-label font-w-800 py-4 mr-sm-12"
              >
                {{ t('pages.index.contact.template.inquiries') }}
                <span class="main-color">*</span>
              </v-col>

              <v-col cols="10" sm="9" class="pt-0 py-sm-3">
                <v-textarea
                  v-model="question"
                  :counter="questionCounter"
                  :rules="questionRules"
                  name="question"
                  :placeholder="
                    t('pages.index.contact.template.inquiriesPlaceholder')
                  "
                  density="compact"
                  variant="plain"
                  hide-details
                  type="text"
                  hint="무관한 내용, 타인에 대한 비난/비방/욕설 등이 포함되는 경우 무통보 삭제될 수 있습니다."
                  auto-grow
                  validate-on="submit"
                />
              </v-col>
            </v-sheet>
          </v-col>
        </v-row>

        <!-- 체크박스 -->
        <v-row justify="center">
          <v-col cols="10" sm="11" offset-sm="1" class="pl-3 pl-sm-0">
            <v-checkbox
              v-model="checkbox"
              :rules="[
                (v) => !!v || '동의하지 않는 경우 내용이 등록되지 않습니다.',
              ]"
              :label="t('pages.index.contact.template.label')"
              validate-on="submit"
              class="font-w-600"
            />
          </v-col>
        </v-row>
      </v-form>

      <v-row justify="center">
        <v-col cols="10" sm="2">
          <v-btn
            :disabled="!valid"
            color="#3746fb"
            class="mr-4"
            size="x-large"
            block
            variant="flat"
            style="z-index: 999"
            :style="{ fontSize: xs ? '1.3rem' : '1.3rem', fontWeight: '700' }"
            @click="summitCustomerVoice"
          >
            {{ t('pages.index.contact.template.contactBtn') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-col v-if="smAndUp">
      <p class="bg-text">Tech Evangelistin Your Day</p>
    </v-col>
  </v-row>
</template>

<script setup>
const { t } = useI18n()
const { xs, smAndUp, mdAndUp, lgAndUp } = useDisplay()

const form = ref(null)
const valid = ref(true)
const customerName = ref('')
const contactInfo = ref('')
const companyInfo = ref('')
const email = ref('')
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

const summitCustomerVoice = async () => {
  form.value.validate()

  if (valid.value) {
    try {
      // GitHub 이슈 생성
      await postIssueCreation()

      // 서버에 데이터 저장
      await sendInquiryToServer({
        customer_name: customerName.value,
        customer_email: email.value,
        customer_phone: contactInfo.value,
        content: question.value,
      })

      alert(`문의사항 등록되었습니다.`)
      location.reload()
    } catch (err) {
      console.error(err)
      alert('문제가 발생했습니다. 다시 시도해주세요.')
    }
  }
}

const mapVselectToGithubIssuelabels = () => {
  return ['Communication:VoiceOfCustomer']
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
        title: `${customerName.value} / ${email.value}`,
        labels: mapVselectToGithubIssuelabels(),
        body: `| Email | 항목 | 질문 |\n| -- | -- | -- |\n|${email.value}|${customerName.value}|${question.value}|`,
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
  const { customer_name, customer_email, content, customer_phone } = inquiryData

  try {
    const apiUrl = 'https://ko.api.researcher.meaniit.com'

    // 요청 데이터
    const requestBody = new FormData()
    requestBody.append('customer_name', customer_name)
    requestBody.append('customer_email', customer_email)
    requestBody.append('content', content)
    requestBody.append('customer_phone', customer_phone)

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
.gradient-background {
  background: linear-gradient(to right, #e6efff, #cee1ff);
}

.bg-text {
  font-size: 13rem;
  white-space: nowrap; /* 텍스트 한 줄로 유지 */
  overflow: hidden;
  margin: -110px 0 -110px -300px;
  opacity: 0.05;
  font-weight: 700;
}

.v-text-field:deep(.v-field__input) {
  padding: 0;
}

.v-textarea:deep(.v-field__input) {
  padding-top: 4px;
}

.font-w-800 {
  font-weight: 800;
}

.font-w-600 {
  font-weight: 600;
}

.input-label {
  font-size: 1.15rem;
}

@media (max-width: 480px) {
  .input-label {
    font-size: 1rem;
  }
}
</style>
