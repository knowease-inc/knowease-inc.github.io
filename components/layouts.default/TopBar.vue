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
          />
        </v-btn>

        <!-- Menu Btn -->
        <div v-if="smAndUp">
          <v-btn
            v-for="(item, i) in menuItems"
            :key="i"
            :href="item.to"
            :target="item.to.startsWith('http') ? '_blank' : '_self'"
            :size="sm ? 'small' : 'large'"
            variant="text"
            :color="isRootRoute ? 'white' : ''"
            selected-class="no-active"
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
        >
          <template v-slot:activator="{ props }">
            <v-app-bar-nav-icon
              v-bind="props"
              :color="isRootRoute ? 'white' : '#3746fb'"
              :icon="isMenuOpen ? mdiClose : mdiMenu"
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
              <v-list-item
                v-for="(item, i) in menuItems"
                :key="i"
                :href="item.to"
                :target="item.to.startsWith('http') ? '_blank' : '_self'"
                link
              >
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-col cols="1" class="d-flex align-center">
          <v-icon :icon="mdiWeb" size="x-small" />
          <v-btn
            size="x-small"
            style="font-size: 16px"
            @click="setLocale('ko')"
            :color="locale === 'ko' ? 'black' : 'grey'"
            variant="text"
          >
            ko
          </v-btn>

          <v-btn
            size="x-small"
            style="font-size: 16px"
            @click="setLocale('en')"
            :color="locale === 'en' ? 'black' : 'grey'"
            variant="text"
          >
            en
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { mdiMenu, mdiClose, mdiWeb } from '@mdi/js'

const { xs, sm, smAndUp } = useDisplay()
const route = useRoute()
const { t, setLocale } = useI18n() // 현재 언어(locale)와 언어 변경(setLocale) 가져오기

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
  { name: t('default.topBar.menuItems.me'), to: '/' },
  {
    name: t('default.topBar.menuItems.serviceIntro'),
    to: '/service/meaniit/introduce',
  },
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
