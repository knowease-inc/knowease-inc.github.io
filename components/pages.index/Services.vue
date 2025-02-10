<template>
  <v-row justify="center" class="py-8 py-sm-16">
    <v-col
      cols="9"
      sm="10"
      class="d-flex flex-column align-center pt-sm-16 pt-8"
    >
      <p :class="xs ? 'section-title-xs' : 'section-title'">
        {{ t('pages.index.pageTitle.service') }}
      </p>

      <p
        class="mb-sm-12"
        :class="xs ? 'section-subtitle-xs' : 'section-subtitle'"
        :style="{ fontSize: xs ? '0.9rem' : '' }"
        v-html="content.header.title"
      ></p>
    </v-col>

    <!-- ### Start : Our Service ### -->
    <v-col cols="10" sm="10" class="d-sm-flex">
      <!-- 첫번째 카드 -->
      <v-card
        class="my-4 my-sm-0 text-white pa-sm-12 px-4 py-6 d-flex flex-column justify-space-between mr-sm-9"
        :class="xs ? 'rounded-lg' : 'rounded-xl'"
        :image="cardImgs.meaniit"
        :width="smAndUp ? 730 : ''"
        :height="setContainerHeight"
        variant="flat"
      >
        <v-card-title>
          <p class="font-weight-bold service-title">
            {{ content.meaniit.name }}
          </p>
        </v-card-title>

        <div>
          <v-card-text class="px-2">
            <p
              :class="xs ? 'content-subtitle-xs' : 'content-subtitle'"
              v-html="meaniitTextContent"
            ></p>
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

      <!-- 두번째 카드 -->
      <v-card
        class="text-white pa-sm-12 px-4 py-6 d-flex flex-column justify-space-between ml-sm-9"
        :class="xs ? 'rounded-lg' : 'rounded-xl'"
        :image="cardImgs.edu"
        :width="smAndUp ? 730 : ''"
        :height="setContainerHeight"
        variant="flat"
      >
        <v-card-title>
          <p class="font-weight-bold service-title">
            {{ content.education.name }}
          </p>
        </v-card-title>

        <div>
          <v-card-text class="px-2">
            <p
              :class="xs ? 'content-subtitle-xs' : 'content-subtitle'"
              v-html="eduTextContent"
            ></p>
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
  xs.value ? (locale.value === 'en' ? '300' : '300') : '640',
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

.content-subtitle-xs {
  font-weight: 600;
}

.service-title {
  font-size: 2.5rem;
}

@media (max-width: 480px) {
  .service-title {
    font-size: 1.5rem;
  }
}
</style>
