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
        v-html="proposalText"
      ></p>

      <p
        class="mb-sm-12"
        :class="xs ? 'section-subtitle-xs' : 'section-subtitle'"
        :style="{ fontSize: xs ? '0.92rem' : '' }"
        v-html="guideText"
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
      <v-form ref="form" validate-on="submit">
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

                <p v-if="emailErrorMessage" class="error-message">
                  {{ emailErrorMessage }}
                </p>
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

                <p v-if="questionErrorMessage" class="error-message">
                  {{ questionErrorMessage }}
                </p>
              </v-col>
            </v-sheet>
          </v-col>
        </v-row>

        <!-- 체크박스 -->
        <v-row justify="center">
          <v-col cols="10" sm="11" offset-sm="1" class="pl-3 pl-sm-0">
            <v-checkbox
              v-model="checkbox"
              :label="t('pages.index.contact.template.label')"
              validate-on="submit"
              class="font-w-600"
            />
            <p v-if="checkboxErrorMessage" class="error-message">
              {{ checkboxErrorMessage }}
            </p>
          </v-col>
        </v-row>
      </v-form>

      <v-row justify="center">
        <p v-if="successMessage" class="success-message">
          <v-icon :icon="mdiCheckCircle" color="success" />
          {{ successMessage }}
        </p>
        <p v-if="errorMessage" class="error-message">
          <v-icon :icon="mdiAlertCircle" color="error" />
          {{ errorMessage }}
        </p>
      </v-row>

      <v-row justify="center">
        <v-col cols="10" sm="2">
          <v-btn
            color="#3746fb"
            class="mr-4"
            size="x-large"
            block
            variant="flat"
            style="z-index: 999"
            :style="{ fontSize: xs ? '1.3rem' : '1.3rem', fontWeight: '700' }"
            @click="submitInquiry"
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
import { mdiCheckCircle, mdiAlertCircle } from '@mdi/js'

const { t, locale } = useI18n()
const { xs, smAndUp, mdAndUp, lgAndUp } = useDisplay()

const form = ref(null)
const customerName = ref('')
const contactInfo = ref('')
const companyInfo = ref('')
const email = ref('')
const question = ref('')
const checkbox = ref(false)
const questionCounter = 1000

const successMessage = ref('')
const errorMessage = ref('')
const emailErrorMessage = ref('')
const questionErrorMessage = ref('')
const checkboxErrorMessage = ref('')

watch(email, (newValue) => {
  if (!newValue) {
    emailErrorMessage.value = ''
    return
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newValue)) {
    emailErrorMessage.value = '유효한 이메일을 입력해주세요.'
  } else {
    emailErrorMessage.value = ''
  }

  validateForm()
})

watch(question, (newValue) => {
  if (newValue) {
    questionErrorMessage.value = ''
  }

  validateForm()
})

watch(checkbox, (newValue) => {
  if (newValue) {
    checkboxErrorMessage.value = ''
  }

  validateForm()
})

// Text Specific Breaks
const proposalText = computed(() => {
  const proposal = t('pages.index.contact.proposalText')

  if (locale.value === 'en') {
    return proposal.replace('out? ', 'out? <br />')
  }

  return proposal.replace('요? ', '요? <br />')
})

const guideText = computed(() => {
  const proposal = t('pages.index.contact.guideText')

  if (locale.value === 'en') {
    return proposal.replace('Automation). ', 'Automation). <br />')
  }

  return proposal.replace('제공합니다. ', '제공합니다. <br />')
})

/** 필수 필드 검증 */
const validateForm = () => {
  let isValid = true

  if (!email.value) {
    emailErrorMessage.value = '이메일을 입력해주세요.'
    isValid = false
  }

  if (!question.value) {
    questionErrorMessage.value = '문의 내용을 입력해주세요.'
    isValid = false
  }

  if (question.value && question.value.length > questionCounter) {
    questionErrorMessage.value = '문의 내용은 1000자 이하로 입력해주세요.'
    isValid = false
  }

  if (!checkbox.value) {
    checkboxErrorMessage.value = '동의하지 않으면 문의를 등록할 수 없습니다.'
    isValid = false
  }

  if (isValid) {
    errorMessage.value = ''
  }

  return isValid
}

/** 초기화 함수 */
const resetForm = () => {
  customerName.value = ''
  contactInfo.value = ''
  companyInfo.value = ''
  email.value = ''
  question.value = ''
  checkbox.value = false

  successMessage.value = ''
  errorMessage.value = ''

  emailErrorMessage.value = ''
  questionErrorMessage.value = ''
  checkboxErrorMessage.value = ''
}

const submitInquiry = async () => {
  if (!validateForm()) {
    errorMessage.value = '입력한 내용을 다시 확인해주세요.'
    return
  }

  try {
    // 서버에 데이터 전송
    await sendInquiryToServer({
      customer_name: customerName.value,
      customer_email: email.value,
      customer_phone: contactInfo.value,
      content: question.value,
    })

    successMessage.value = '문의가 정상적으로 접수되었습니다.'

    // 성공 시 폼 초기화
    setTimeout(() => {
      resetForm()
    }, 3000)
  } catch (err) {
    console.error('서버 오류:', err)
    errorMessage.value = '오류가 발생했습니다. 다시 시도해주세요.'
  }
}

const sendInquiryToServer = async (inquiryData = {}) => {
  const { customer_name, customer_email, content, customer_phone } = inquiryData
  const apiUrl = 'https://ko.api.researcher.meaniit.com' // 'http://localhost:8000'

  try {
    // 요청 데이터
    const requestBody = new FormData()
    requestBody.append('customer_name', customer_name)
    requestBody.append('customer_email', customer_email)
    requestBody.append('content', content)
    requestBody.append('customer_phone', customer_phone)

    const response = await $fetch(`${apiUrl}/api/resource/users/inquiry`, {
      method: 'POST',
      headers: {
        'x-api-key': '2kamERrKtd78e7iXsTxxP3kdkDteXbAM5uN7rWMV',
      },
      body: requestBody,
    })

    return response
  } catch (error) {
    if (error?.data?.type === 'ValidationError') {
      // 입력 검증 오류
      errorMessage.value = '입력 데이터가 유효하지 않습니다.'
    } else if (error?.data?.message) {
      // 기타 오류
      errorMessage.value = error.data.message
    } else if (error?.message) {
      //  네트워크 오류, DB 연결 오류 등
      if (error.message.includes('Lost connection to MySQL')) {
        errorMessage.value =
          '서버 연결 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage.value =
          '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.'
      } else {
        errorMessage.value = error.message
      }
    } else {
      // 서버 응답 실패 등
      errorMessage.value = '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.'
    }
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

.error-message {
  color: rgb(176, 0, 32);
  font-size: 1.2rem;
}
.success-message {
  font-size: 1.5rem;
  color: green;
}

@media (max-width: 480px) {
  .input-label {
    font-size: 1rem;
  }
}
</style>
