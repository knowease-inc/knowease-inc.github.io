<template>
  <v-row justify="center" class="py-8 py-sm-16">
    <v-col
      cols="12"
      offset-lg="1"
      lg="9"
      class="d-flex flex-column align-center pt-16"
    >
      <p class="section-title">{{ t('pages.index.pageTitle.service') }}</p>

      <p class="section-subtitle mb-12" v-html="content.header.title"></p>
    </v-col>

    <!-- ### Start : Our Service ### -->
    <v-col cols="12" sm="10" offset-lg="1" lg="9" class="d-sm-flex">
      <!-- 첫번째 카드 -->
      <v-card
        class="mx-auto text-white rounded-xl pa-12 d-flex flex-column justify-space-between"
        :image="cardImgs.meaniit"
        :width="smAndUp ? 680 : ''"
        :height="setContainerHeight"
      >
        <v-card-title>
          <p class="font-weight-bold text-h4">
            {{ content.meaniit.name }}
          </p>
        </v-card-title>

        <div>
          <v-card-text class="px-2">
            <p class="content-subtitle" v-html="meaniitTextContent"></p>
          </v-card-text>

          <v-card-actions>
            <v-btn
              :disabled="!content.meaniit.shortcut.href"
              :append-icon="mdiTextBoxOutline"
              color="white"
              :text="content.meaniit.shortcut.name"
              variant="outlined"
              @click="trackAndNavigate(content.meaniit.shortcut)"
            />

            <v-btn
              disabled
              rounded
              :text="content.meaniit.introduce.name"
              @click="trackAndNavigate(content.meaniit.introduce)"
            >
              {{ content.meaniit.introduce.name }}
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
      <v-spacer />
      <!-- 두번째 카드 -->
      <v-card
        class="mx-auto text-white rounded-xl pa-12 d-flex flex-column justify-space-between"
        :image="cardImgs.edu"
        :width="smAndUp ? 680 : ''"
        :height="setContainerHeight"
      >
        <v-card-title>
          <p class="font-weight-bold text-h4">
            {{ content.education.name }}
          </p>
        </v-card-title>

        <div>
          <v-card-text class="px-2">
            <p class="content-subtitle" v-html="eduTextContent"></p>
          </v-card-text>

          <v-card-actions>
            <v-btn
              :append-icon="mdiEmailArrowRightOutline"
              color="white"
              :text="content.education.introduce.name"
              variant="outlined"
              rounded="lg"
              :disabled="!content.education.introduce.to"
              @click="trackAndOpenEmail(content.education.introduce)"
            />
          </v-card-actions>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { mdiTextBoxOutline, mdiEmailArrowRightOutline } from '@mdi/js'

const { xs, smAndUp, mdAndUp, lgAndUp } = useDisplay()
const { t, locale } = useI18n()
const router = useRouter()
const { trackEvent } = useGA4()

const content = computed(() => ({
  header: {
    title: t('pages.index.service.header.title'),
  },
  meaniit: {
    name: t('pages.index.service.cards.meaniit.title'),
    description: t('pages.index.service.cards.meaniit.description'),
    shortcut: {
      name: t('pages.index.service.cards.meaniit.shortcutLabel'),
      href: 'https://ko.meaniit.com/',
    },
    introduce: {
      name: t('pages.index.service.cards.meaniit.introduceLabel'),
      to: '/service/meaniit/introduce',
    },
  },
  education: {
    name: t('pages.index.service.cards.education.title'),
    description: t('pages.index.service.cards.education.description'),
    introduce: {
      name: t('pages.index.service.cards.education.introduceLabel'),
      to: 'get-a@get-a.io',
    },
  },
}))

const cardImgs = {
  meaniit: '/img/new/service_meaniit.jpg',
  edu: '/img/new/service_edu.jpg',
}
const setContainerHeight = computed(() =>
  xs.value ? (locale.value === 'en' ? '600' : '500') : '640',
)

/* ### Start: Text Content with Specific Breaks */
const meaniitTextContent = computed(() => {
  const text = content.value.meaniit.description

  if (xs.value) {
    return locale.value === 'EN'
      ? text.replace('technology,', 'technology,<br />')
      : text.replace('까지', '까지<br />').replace('서비스', '서비스<br />')
  }

  return text.replace('까지', '까지<br />')
})

const eduTextContent = computed(() => {
  const text = content.value.education.description

  if (xs.value) {
    return locale.value === 'EN'
      ? text.replace('technology,', 'technology,<br />')
      : text.replace('(DX)', '(DX)<br />')
  }

  return text.replace('(DX)', '(DX)<br />')
})
/* End: Text Content with Specific Breaks */

const trackAndOpenEmail = (item) => {
  window.location.href = `mailto:${item.to}`

  // GA4 이벤트 전송
  trackEvent('contact_us_btn', {
    button_name: item.name,
  })
}

const trackAndNavigate = (item) => {
  // GA4 이벤트 전송
  trackEvent('service_section_nav_btn', {
    button_name: item.name,
  })

  // 외부 링크 처리
  if (item.href) {
    window.open(item.href, '_blank') // 새 창에서 열기
  } else {
    // 내부 링크 처리
    router.push(item.to)
  }
}
</script>

<style scoped>
.position-relative {
  position: relative;
}
.inside-logo-img {
  position: absolute;
  left: 27%;
  top: 22%;
}

.service-exp {
  font-size: 1.3rem;
  white-space: normal;
  word-break: break-all;
}

.service-text {
  text-shadow: 2px 2px 3px rgba(34, 34, 34, 0.8);
}
</style>
