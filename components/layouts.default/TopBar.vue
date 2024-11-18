<template>
  <v-app-bar
    :color="isRootRoute ? appBar.color : '#3746fb'"
    density="comfortable"
    flat
    location="top"
    :style="{
      borderBottom: isRootRoute ? '0.5px solid lightgrey' : '0.5px solid white',
    }"
  >
    <v-row no-gutters>
      <v-col cols="8" offset="2" class="px-0">
        <v-toolbar-items>
          <v-btn v-if="onKnowease" text to="/" color="transparent">
            <v-img
              :src="appBar.knowease.imgSrc"
              :alt="appBar.knowease.title"
              :height="appBar.height"
              :width="appBar.maxWidth"
              contain
              :class="onKnowease ? '' : 'to-white'"
            />
          </v-btn>
          <v-btn v-else text to="/" active-color="no-active">
            <v-img
              :src="appBar.knowease.imgSrc"
              :alt="appBar.knowease.title"
              :height="appBar.height"
              :width="appBar.maxWidth"
              contain
              class="to-white"
            />
          </v-btn>

          <v-spacer></v-spacer>

          <v-menu z-index="10">
            <!-- Start: Menu Btn -->
            <template #activator="{ props }">
              <v-btn
                :icon="appBar.menuIcon"
                :color="onKnowease ? '#3746fb' : ''"
                :size="xs ? 'small' : 'default'"
                v-bind="props"
              />
            </template>

            <!-- Start: Menu Contents -->
            <v-list density="compact">
              <v-list-item
                v-for="(item, i) in menuItems"
                :key="i"
                class="d-flex justify-center text-start"
              >
                <v-list-item-subtitle v-if="item.title" class="menuTitle">
                  {{ item.name }}
                </v-list-item-subtitle>
                <v-btn
                  v-else
                  :href="item.to"
                  :target="item.to.startsWith('http') ? '_blank' : '_self'"
                  size="small"
                  variant="text"
                  selected-class="no-active"
                >
                  {{ item.name }}
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
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
  color: 'white',
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
  { title: true, name: '게타(GET-A)', to: undefined },
  { title: false, name: '회사 소개', to: '/' },
  // { title: false, name: '채용 공고', to: '/recruit' },
  { title: true, name: '미닛', to: undefined },
  { title: false, name: '서비스 소개', to: '/service/meaniit/introduce' },
  {
    title: false,
    name: '미닛 서비스 바로가기',
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
