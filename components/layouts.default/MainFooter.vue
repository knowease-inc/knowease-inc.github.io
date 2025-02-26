<template>
  <client-only>
    <v-footer absolute class="pl-sm-12">
      <v-row class="my-0" align="center">
        <v-col cols="12" offset-sm="1" sm="1" class="pa-4">
          <v-img src="/img/GET_A_LOGO.png" width="130" class="mr-4" />
        </v-col>

        <v-col
          cols="11"
          sm="6"
          style="color: #555555"
          class="pt-sm-16 pl-4 pl-sm-16 text-body-1 pb-0 pb-sm-3 font-w-500"
          :style="{ fontSize: xs ? '0.9rem' : '0.95rem' }"
        >
          <div v-if="smAndUp" :style="{ fontSize: xs ? '' : '0.95rem' }">
            {{ t('default.footer.representative') }}
            <span class="mx-2">|</span>
            {{ t('default.footer.address') }}
          </div>

          <div v-if="xs" :style="{ fontSize: xs ? '0.85rem' : '' }">
            {{ t('default.footer.representative') }}
            <div class="my-3">
              {{ t('default.footer.address') }}
            </div>
          </div>

          <div :style="{ fontSize: xs ? '0.85rem' : '' }">
            e-mail: {{ t('default.footer.contact.email') }}
            <span class="mx-sm-2">|</span>
            Tel: {{ t('default.footer.contact.phone') }}
          </div>

          <p
            v-if="smAndUp"
            style="color: #999999"
            :style="{ fontSize: xs ? '' : '0.9rem', fontWeight: '400' }"
            class="pt-4"
          >
            Copyright @. All rights reserved.
          </p>
        </v-col>

        <v-col cols="12" sm="4" class="pt-0">
          <v-list class="d-flex">
            <v-list-item
              v-for="(item, i) in menuItems"
              :key="i"
              class="router-push"
              :disabled="item.name === '서비스 소개'"
              :class="{
                'text-decoration-underline': item.to === '/privacy-policy',
                'px-1': xs,
              }"
              @click="navigateWithTracking(item)"
            >
              <v-list-item-title
                class="font-weight-bold"
                :class="xs ? 'text-body-2 px-0' : ''"
              >
                {{ item.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>

          <p
            v-if="xs"
            style="color: #999999"
            class="pl-2"
            :style="{ fontSize: xs ? '0.8rem' : '', fontWeight: '400' }"
          >
            Copyright @. All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </client-only>
</template>

<script setup>
const { xs, smAndUp } = useDisplay()
const { t } = useI18n()
const router = useRouter()
const { trackEvent } = useGA4()

const menuItems = computed(() => [
  { name: t('default.topBar.menuItems.me'), to: '/', gaLabel: 'home' },
  {
    name: t('default.footer.privacyPolicy'),
    to: '/privacy-policy',
    gaLabel: 'privacy_policy',
  },
])

const navigateWithTracking = (item) => {
  const { to, gaLabel } = item

  // GA4 이벤트 전송
  trackEvent('footer_nav_btn', {
    button_name: gaLabel,
  })

  // 외부 링크와 내부 링크를 구분해 처리
  if (to?.startsWith('http')) {
    window.open(to, '_blank') // 새 창에서 열기
  } else {
    router.push(to, '_self') // 내부 라우트 이동
  }
}
</script>

<style scoped>
/* .footer-text {
  font-size: 1rem;
  line-height: 1.4em;

  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
} */

.router-push:hover {
  cursor: pointer;
  color: #3746fb;
}

.font-w-500 {
  font-weight: 500;
}
</style>
