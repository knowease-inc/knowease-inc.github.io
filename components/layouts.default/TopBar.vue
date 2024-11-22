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
      <v-col cols="9" class="d-flex justify-space-between">
        <!-- Favicon & Logo -->
        <v-btn
          text
          to="/"
          :color="onKnowease ? 'transparent' : ''"
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
            :width="appBar.maxWidth"
            contain
          />
        </v-btn>

        <!-- App Bar Contents -->
        <div>
          <v-btn
            v-for="(item, i) in menuItems"
            :key="i"
            :href="item.to"
            :target="item.to.startsWith('http') ? '_blank' : '_self'"
            size="large"
            variant="text"
            :color="isRootRoute ? 'white' : ''"
            selected-class="no-active"
          >
            {{ item.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { mdiMenu } from '@mdi/js'

const { xs, smAndUp } = useDisplay()
const route = useRoute()

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

const menuItems = [
  { name: '회사 소개', to: '/' },
  { name: '서비스 소개', to: '/service/meaniit/introduce' },
  {
    name: '서비스 바로가기',
    to: 'https://ko.meaniit.com',
  },
]

const onKnowease = computed(() => {
  const currentRoute = route.path

  return (
    currentRoute === '/' ||
    currentRoute === '/recruit' ||
    currentRoute === '/recruit/'
  )
})

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
