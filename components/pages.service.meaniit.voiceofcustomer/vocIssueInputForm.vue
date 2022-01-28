<template>
  <v-container fluid class="d-flex justify-center mt-10 mx-0 px-0 px-sm-3">
    <v-card
      flat
      max-width="800"
      class="d-flex align-center ma-0 pa-0"
      color="rgba(0, 0, 0, 0)"
    >
      <v-card :width="cardWidth" flat outlined class="pa-1 pa-sm-3">
        <!-- ### START: Title ### -->
        <v-toolbar flat class="d-flex justify-center">
          <v-toolbar-title>
            <span class="article-title ma-0">{{ title }}</span>
          </v-toolbar-title>
        </v-toolbar>

        <!-- ### START: Input Form ### -->
        <v-card-text class="pb-0">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail 주소를 입력해주세요."
              type="text"
              prepend-icon="mdi-email"
              required
              dense
              class="mt-2"
            ></v-text-field>

            <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || '필수 선택 항목입니다.']"
              label="관련 주제를 선택해주세요."
              prepend-icon="mdi-cursor-default"
              required
            ></v-select>

            <v-textarea
              v-model="question"
              :counter="questionCounter"
              :rules="questionRules"
              name="question"
              label="문의/건의 내용을 입력해주세요."
              hint="무관한 내용, 타인에 대한 비난/비방/욕설 등이 포함되는 경우 무통보 삭제될 수 있습니다."
              auto-grow
              dense
            ></v-textarea>

            <v-checkbox
              v-model="checkbox"
              :rules="[
                (v) => !!v || '동의하지 않는 경우 내용이 등록되지 않습니다.',
              ]"
              label="메일 주소, 작성 내용을 Github Repository(Knowease-inc.github.io)상 공개에 동의합니다."
              required
            ></v-checkbox>
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-end pt-0">
          <v-btn
            :disabled="!valid"
            color="primary"
            outlined
            class="mr-4"
            @click="_summit"
          >
            등록
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '고객 문의',
      valid: true,
      question: '',
      questionCounter: 1000,
      questionRules: [
        (v) => !!v || '내용 입력이 필요합니다.',
        (v) =>
          (v && v.length <= 1000) ||
          'Question must be less than 100 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || '이메일 주소 입력이 필요합니다.',
        (v) => /.+@.+\..+/.test(v) || '이메일 주소를 입력해야 합니다.',
      ],
      select: null,
      items: ['서비스 이용 문제', '신규 기능 건의', '비즈니스 상담'],
      checkbox: false,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '고객 문의 페이지입니다. 서비스 이용 문제, 신규 기능 건의, 비즈니스 상담 요청 등이 가능합니다.',
        },
      ],
    }
  },

  computed: {
    cardWidth() {
      const width =
        this.$vuetify.breakpoint.width > 800
          ? 800
          : this.$vuetify.breakpoint.width
      return width
    },
  },

  methods: {
    _summit() {
      this.$refs.form.validate()
      if (this.valid) {
        this._postIssueCreation()
          .then(() => {
            alert(
              '「' +
                this.select +
                ' / ' +
                this.email +
                '」를 이슈로 등록하였습니다.'
            )
            location.reload()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    _mapVselectToGithubIssuelabels() {
      switch (this.select) {
        case '서비스 이용 문제':
          return ['Domain:UX', 'Task:Bug', 'Communication:VoiceOfCustomer']
        case '신규 기능 건의':
          return [
            'Domain:UX',
            'Task:Enhancement',
            'Communication:VoiceOfCustomer',
          ]
        case '비즈니스 상담':
          return [
            'Domain:Business',
            'Task:Enhancement',
            'Communication:VoiceOfCustomer',
          ]
        default:
          return ['Communication:VoiceOfCustomer']
      }
    },

    async _postIssueCreation() {
      const jwt = await this.$axios.$get(
        'https://asia-northeast3-knowease-inc.cloudfunctions.net/jwt-creation-app-for-knowease-inc-github-io'
      )
      const accessTokens = await this.$axios.$post(
        'https://api.github.com/app/installations/19408771/access_tokens',
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      )
      const creationResult = await this.$axios.$post(
        'https://api.github.com/repos/knowease-inc/knowease-inc.github.io/issues',
        {
          title: this.select + ' / ' + this.email,
          labels: this._mapVselectToGithubIssuelabels(),
          body:
            '| Email | 항목 | 질문 |\n| -- | -- | -- |\n' +
            '|' +
            this.email +
            '|' +
            this.select +
            '|' +
            this.question +
            '|',
        },
        {
          headers: {
            Authorization: `Token ${accessTokens.token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      )
      return creationResult // creationResult.url: URL of created Github Issue
    },
  },
}
</script>

<style scoped>
/* Content Title */
.article-title,
.article-title-xs {
  font-weight: 500;
}
</style>
