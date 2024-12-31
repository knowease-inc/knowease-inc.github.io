<template>
  <v-app-bar
    :class="{ 'transparent-bar': isTransparent }"
    :color="isRootRoute ? appBar.color : ''"
    flat
    location="top"
    :style="{
      borderBottom: isRootRoute ? '0.5px solid grey' : '1px solid lightgrey',
    }"
  >
    <v-row justify="center">
      <v-col
        cols="10"
        sm="9"
        lg="8"
        class="d-flex justify-space-between align-center"
      >
        <!-- Favicon & Logo -->
        <v-btn
          text
          to="/"
          :color="isRootRoute ? 'transparent' : 'transparent'"
          class="px-0"
        >
          <v-img
            v-if="false"
            src="/img/temp/favicon.png"
            alt="favicon"
            height="35"
            width="35"
            cover
            style="filter: contrast(200%) brightness(100%) saturate(140%)"
          />

          <v-img
            :src="appBar.knowease.imgSrc"
            :alt="appBar.knowease.title"
            :height="appBar.height"
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
            :color="isRootRoute ? 'white' : ''"
            selected-class="no-active"
            @click="navigateWithTracking(item)"
          >
            {{ item.name }}
          </v-btn>
        </div>

        <!-- Start: Menu Btn -->
        <v-menu
          v-if="xs"
          activator="parent"
          location="bottom"
          transition="slide-y-transition"
          v-model="isMenuOpen"
          class="d-flex"
        >
          <template v-slot:activator="{ props }">
            <v-app-bar-nav-icon
              v-bind="props"
              :color="isRootRoute ? 'white' : '#3746fb'"
              :icon="isMenuOpen ? mdiClose : mdiMenu"
              class="mr-4"
            />
          </template>

          <!-- Start: Menu Contents -->
          <v-card
            class="mx-n5 px-4 mt-n1"
            :color="isRootRoute ? 'black' : '#3746fb'"
            tile
          >
            <v-list
              :style="{
                'background-color': isRootRoute ? 'black' : '#3746fb',
              }"
              style="color: white"
              width="100%"
            >
              <v-list-item  v-for="(item, i) in menuItems" :key="i" @click="navigateWithTracking(item)">
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>

            <!-- Start: Language change & DarkMode Switch -->
            <v-col cols="12" v-if="xs" class="d-flex align-center justify-end">
              <!-- Start: Language change Btsns -->
              <div>
                <v-icon :icon="mdiWeb" size="x-small" />

                <v-btn
                  size="x-small"
                  style="font-size: 16px"
                  @click="trackAndSetLanguage('ko')"
                  :color="locale === 'ko' ? buttonColor : 'grey'"
                  variant="text"
                >
                  ko
                </v-btn>

                <v-btn
                  size="x-small"
                  style="font-size: 16px"
                  @click="trackAndSetLanguage('en')"
                  :color="locale === 'en' ? buttonColor : 'grey'"
                  variant="text"
                >
                  en
                </v-btn>
              </div>
              <!-- End: Language change Btsns -->

              <!-- Start: DarkMode Switch-->
              <div>
                <v-btn
                  icon
                  size="x-small"
                  class="ml-6 mr-2"
                  @click="trackAndToggleDarkMode()"
                >
                  <v-icon
                    :icon="
                      isDark ? mdiWhiteBalanceSunny : mdiMoonWaxingCrescent
                    "
                  />
                </v-btn>
              </div>
            </v-col>
          </v-card>
        </v-menu>

        <!-- Start: Language change & DarkMode Switch -->
        <v-col v-if="smAndUp" cols="3" class="d-flex align-center">
          <!-- Start: Language change Btsns -->
          <v-icon :icon="mdiWeb" size="x-small" />

          <v-btn
            size="x-small"
            style="font-size: 16px"
            @click="trackAndSetLanguage('ko')"
            :color="locale === 'ko' ? buttonColor : 'grey'"
            variant="text"
          >
            ko
          </v-btn>

          <v-btn
            size="x-small"
            style="font-size: 16px"
            @click="trackAndSetLanguage('en')"
            :color="locale === 'en' ? buttonColor : 'grey'"
            variant="text"
          >
            en
          </v-btn>
          <!-- End: Language change Btsns -->

          <!-- Start: DarkMode Switch-->
          <v-switch
            true-value="isDarkMode"
            inset
            class="mt-5 ml-4"
            :true-icon="mdiWhiteBalanceSunny"
            :false-icon="mdiMoonWaxingCrescent"
            @click="trackAndToggleDarkMode()"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import {
  mdiMenu,
  mdiClose,
  mdiWeb,
  mdiWhiteBalanceSunny,
  mdiMoonWaxingCrescent,
} from '@mdi/js'

const isDarkMode = ref(false)

const { xs, sm, smAndUp } = useDisplay()
const route = useRoute()
const router = useRouter();
const { t, locale, setLocale } = useI18n() // 현재 언어(locale)와 언어 변경(setLocale) 가져오기
const { trackEvent } = useGA4();


defineProps(['isDark'])

const emit = defineEmits([
  "toggle-dark-mode",
]);

const appBar = {
  height: '20',
  maxWidth: '100',
  color: 'rgba(0, 0, 0, 0.7)',
  menuIcon: mdiMenu,
  knowease: {
    title: '(주)게타(GET-A Inc.)',
    imgSrc: '/img/GET_A_LOGO.png',
  },
  easyxplain: {
    title: '미닛(MEANIIT)',
    imgSrc: 'https://dmq1lrjfpg713.cloudfront.net/img/logo.png',
  },
}

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

const isMenuOpen = ref(false)

// const isRootRoute = computed(() => {
//   const currentRoute = route.path

//   return (
//     currentRoute === '/' ||
//     currentRoute === '/recruit' ||
//     currentRoute === '/recruit/'
//   )
// })

const isRootRoute = computed(() => {
  const currentRoute = route.name

  return currentRoute === 'index'
})

const isTransparent = computed(
  () => appBar.color === 'transparent' && isRootRoute.value,
)

const navigateWithTracking = (item) => {
  const {name, to} = item

  // GA4 이벤트 전송
  openMenu(name);

  // 외부 링크와 내부 링크를 구분해 처리
  if (to?.startsWith('http')) {
    window.open(to, '_blank'); // 새 창에서 열기
  } else {
    router.push(to, '_self'); // 내부 라우트 이동
  }
};


const openMenu = (button_name) => {
  trackEvent("top_bar_nav_btn", {
    button_name,
  });
}

const trackAndSetLanguage = (newLocale) => {
  const previousLocale = locale.value;

  // 언어 변경
  setLocale(newLocale);

  // GA4 이벤트 전송
  trackEvent('language_change', {
    previous_locale: previousLocale,
    new_locale: newLocale,
  });
};

const trackAndToggleDarkMode = () => {
  const newDarkModeStatus = !isDarkMode.value;

  // 모드 변경
  isDarkMode.value = newDarkModeStatus;

  // GA4 이벤트 전송
  trackEvent('dark_mode_toggle', {
    dark_mode_status: isDarkMode.value ? 'enabled' : 'disabled',
  });

  // 부모 컴포넌트로 다크모드 상태 전달
  emit('toggle-dark-mode');
};

</script>

<style scoped>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
.menuTitle {
  font-size: 10px !important;
  color: #3746fb !important;
}
.to-white {
  filter: brightness(0) invert(1);
}
</style>
