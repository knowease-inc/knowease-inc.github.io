<template>
  <v-app-bar
    :color="appBar.color"
    flat
    absolute
    density="comfortable"
    location="top"
    class="py-4"
  >
    <v-row justify="center">
      <v-col
        cols="11"
        sm="10"
        lg="10"
        class="d-flex justify-space-between align-center"
      >
        <!-- Logo -->
        <v-btn text to="/" color="transparent" class="px-0">
          <v-img
            :src="logoSrc"
            :alt="appBar.knowease.title"
            :height="smAndUp ? appBar.height : '20'"
            :width="sm ? 80 : appBar.maxWidth"
            contain
            @click="openMenu(appBar.knowease.title)"
          />
        </v-btn>

        <!-- Menu Btn -->
        <div v-if="smAndUp">
          <v-btn
            v-for="(item, i) in menuItems"
            :key="i"
            :size="sm ? 'small' : 'large'"
            variant="text"
            :color="textColor"
            selected-class="no-active"
            class="font-weight-bold"
            @click="navigateWithTracking(item)"
          >
            {{ item.name }}
          </v-btn>
        </div>

        <!-- Start: Menu Btn -->
        <v-menu
          v-if="xs"
          activator="parent"
          transition="slide-y-transition"
          v-model="isMenuOpen"
          class="d-flex"
        >
          <template v-slot:activator="{ props }">
            <v-app-bar-nav-icon
              v-bind="props"
              :color="isIndexPage ? 'white' : ''"
              class="pb-2"
              :icon="isMenuOpen ? mdiClose : mdiMenu"
            />
          </template>

          <!-- Start: Menu Contents -->
          <v-card class="mx-n5 pa-4 mt-n1" variant="tile">
            <v-list
              :style="{
                'background-color': 'transparent',
                color: textColor,
              }"
              width="100%"
              class="font-weight-bold"
            >
              <v-list-item
                v-for="(item, i) in menuItems"
                :key="i"
                @click="navigateWithTracking(item)"
              >
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>

            <!-- Start: Language change & DarkMode Switch -->
            <v-col cols="12" class="pb-0">
              <!-- Start: Language change Btsns -->
              <v-icon :icon="mdiWeb" :color="textColor" size="small" />

              <v-btn
                style="font-size: 0.9rem"
                :color="textColor"
                variant="text"
                class="font-weight-bold"
                size="small"
                @click="trackAndSetLanguage('ko')"
              >
                KO
              </v-btn>

              <v-btn
                style="font-size: 0.9rem"
                :color="textColor"
                variant="text"
                class="font-weight-bold"
                size="small"
                @click="trackAndSetLanguage('en')"
              >
                EN
              </v-btn>
              <!-- End: Language change Btsns -->
            </v-col>

            <!-- Start: DarkMode Switch-->
            <v-col cols="12">
              <v-btn
                :prepend-icon="mdiLaptop"
                rounded="lg"
                :color="textColor"
                variant="outlined"
                @click.prevent="toggleDarkMode()"
              >
                {{ props.isDark ? 'Light' : 'Dark' }}
              </v-btn>
            </v-col>
          </v-card>
        </v-menu>

        <!-- Start: Language change & DarkMode Switch -->
        <v-col v-if="smAndUp" cols="2" class="d-flex align-center justify-end">
          <!-- Start: Language change Btsns -->
          <v-icon :icon="mdiWeb" :color="textColor" />

          <v-btn
            style="font-size: 1rem"
            :color="textColor"
            variant="text"
            class="font-weight-bold"
            @click="trackAndSetLanguage('ko')"
          >
            KO
          </v-btn>

          <v-btn
            style="font-size: 1rem"
            :color="textColor"
            variant="text"
            class="font-weight-bold"
            @click="trackAndSetLanguage('en')"
          >
            EN
          </v-btn>
          <!-- End: Language change Btsns -->

          <!-- Start: DarkMode Switch-->
          <v-btn
            :prepend-icon="mdiLaptop"
            rounded="lg"
            :color="textColor"
            size="large"
            variant="outlined"
            @click.prevent="toggleDarkMode()"
          >
            {{ props.isDark ? 'Light' : 'Dark' }}
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { mdiMenu, mdiClose, mdiWeb, mdiLaptop } from '@mdi/js'

const { xs, sm, smAndUp } = useDisplay()
const route = useRoute()
const router = useRouter()
const { t, locale, setLocale } = useI18n() // 현재 언어(locale)와 언어 변경(setLocale) 가져오기
const { trackEvent } = useGA4()

const props = defineProps({
  isDark: Boolean,
})

const emit = defineEmits(['toggle-dark-mode'])

const appBar = {
  height: '40',
  maxWidth: '160',
  color: 'transparent',
  menuIcon: mdiMenu,
  knowease: {
    title: '(주)게타(GET-A Inc.)',
    imgSrc: '/img/new/GET_A_LOGO_White.png',
    colorImgSrc: '/img/GET_A_LOGO.png',
  },
  easyxplain: {
    title: '미닛(MEANIIT)',
    imgSrc: 'https://dmq1lrjfpg713.cloudfront.net/img/logo.png',
  },
}
const isMenuOpen = ref(false)

const isIndexPage = computed(() => route.path === '/')

// "텍스트 색" (다크모드 & index 페이지 여부 반영)
const textColor = computed(() => {
  if (props.isDark) return 'white'
  if (xs.value) return 'black'
  return isIndexPage.value ? 'white' : 'black'
})

// "로고 이미지 색" (다크모드 & index 페이지 여부 반영)
const logoSrc = computed(() => {
  if (props.isDark) return appBar.knowease.imgSrc

  return isIndexPage.value
    ? appBar.knowease.imgSrc
    : appBar.knowease.colorImgSrc
})

const menuItems = computed(() => [
  {
    name: t('default.topBar.menuItems.me'),
    to: locale.value === 'en' ? `/en/` : `/`,
  },
  // {
  //   name: t('default.topBar.menuItems.serviceIntro'),
  //   to:
  //     locale.value === 'en'
  //       ? `/en/service/meaniit/introduce`
  //       : `/service/meaniit/introduce`,
  // },
  {
    name: t('default.topBar.menuItems.serviceLink'),
    to: 'https://ko.meaniit.com',
  },
])

const navigateWithTracking = (item) => {
  const { name, to } = item

  // GA4 이벤트 전송
  openMenu(name)

  // 외부 링크와 내부 링크를 구분해 처리
  if (to?.startsWith('http')) {
    window.open(to, '_blank') // 새 창에서 열기
  } else {
    router.push(to, '_self') // 내부 라우트 이동
  }
}

const openMenu = (button_name) => {
  trackEvent('top_bar_nav_btn', {
    button_name,
  })
}

const trackAndSetLanguage = (newLocale) => {
  const previousLocale = locale.value

  // 언어 변경
  setLocale(newLocale)

  // GA4 이벤트 전송
  trackEvent('language_change', {
    previous_locale: previousLocale,
    new_locale: newLocale,
  })
}

const toggleDarkMode = () => {
  // 부모 컴포넌트로 다크모드 상태 전달
  emit('toggle-dark-mode')
}
</script>

<style scoped>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
</style>
