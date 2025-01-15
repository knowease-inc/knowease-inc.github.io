<template>
  <client-only>
    <v-footer absolute class="pl-12">
      <v-col offset="1" cols="1" class="pa-4">
        <v-img src="/img/GET_A_LOGO.png" width="130" class="mr-4" />
      </v-col>

      <v-col cols="6" class="pt-16 pl-16 text-body-1">
        <div>
          {{ t('default.footer.representative') }}
          <span class="mx-2">|</span>
          {{ t('default.footer.address') }}
        </div>
        <div>
          e-mail: {{ t('default.footer.contact.email') }}
          <span class="mx-2">|</span>
          Tel: {{ t('default.footer.contact.phone') }}
        </div>

        <p style="color: #999999" class="pt-4">
          Copyright @. All rights reserved.
        </p>
      </v-col>

      <v-col cols="4">
        <v-list class="d-flex">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            class="router-push"
            :disabled="item.name === '서비스 소개'"
            :class="{
              'text-decoration-underline': item.to === '/privacy-policy',
            }"
            @click="navigateWithTracking(item)"
          >
            <v-list-item-title class="font-weight-bold">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-footer>
  </client-only>
</template>

<script setup>
const { smAndUp } = useDisplay()
const { t } = useI18n()
const router = useRouter()
const { trackEvent } = useGA4()

const menuItems = computed(() => [
  { name: t('default.topBar.menuItems.me'), to: '/' },
  {
    name: t('default.footer.privacyPolicy'),
    to: '/privacy-policy',
  },
  {
    name: t('default.topBar.menuItems.serviceIntro'),
    to: '/service/meaniit/introduce',
  },
  {
    name: t('default.topBar.menuItems.serviceLink'),
    to: 'https://ko.meaniit.com',
  },
])

const navigateWithTracking = (item) => {
  const { name, to } = item

  // GA4 이벤트 전송
  trackEvent('footer_nav_btn', {
    button_name: name,
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
</style>
