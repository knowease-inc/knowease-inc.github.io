<template>
  <v-app-bar
    :color="isRootRoute ? appBar.color : '#3746fb'"
    dense
    flat
    absolute
    :class="$vuetify.breakpoint.xsOnly ? '' : 'side-blank'"
    :style="{ borderBottom: isRootRoute ? '' : '0.5px solid white' }"
  >
    <!-- Start: -->
    <v-btn v-if="false" icon color="white" @click.prevent="easterEgg()">
      <v-icon :small="$vuetify.breakpoint.xsOnly">{{ appBar.menuIcon }}</v-icon>
    </v-btn>
    <v-spacer />

    <!-- Start : Knowease image -->
    <v-toolbar-items v-if="onKnowease" class="pl-9">
      <v-btn text to="/" active-class="no-active">
        <v-img
          :src="appBar.knowease.imgSrc"
          :alt="appBar.knowease.title"
          :height="appBar.height"
          :max-width="appBar.maxWidth"
          contain
        />
      </v-btn>
    </v-toolbar-items>

    <!-- Start : Easyxplain image -->
    <v-toolbar-items v-else>
      <v-btn text active-class="no-active" @click.prevent="toMeaniit()">
        <v-img
          :src="appBar.knowease.imgSrc"
          :alt="appBar.knowease.title"
          :height="appBar.height"
          :max-width="appBar.maxWidth"
          contain
          class="to-white"
        />
      </v-btn>
    </v-toolbar-items>
    <v-spacer />

    <!-- ### Start : Site Menu ### -->
    <v-toolbar-items>
      <v-menu>
        <!-- Start: Menu Btn -->
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            color="white"
            :small="$vuetify.breakpoint.xsOnly"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon :small="$vuetify.breakpoint.xsOnly">
              {{ appBar.menuIcon }}
            </v-icon>
          </v-btn>
        </template>

        <!-- Start: Menu Contents -->
        <v-list dense>
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            class="d-flex justify-center text-start"
          >
            <v-list-item-subtitle v-if="item.title" class="menuTitle">
              {{ item.name }}
            </v-list-item-subtitle>
            <v-btn v-else :to="item.to" small text active-class="no-active">
              {{ item.name }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import MainFooter from '@/components/layouts.default/MainFooter.vue'
@Component({
  components: {
    MainFooter,
  },
})
class LayoutDefaultTopBar extends Vue {
  @Provide() appBar: {
    height: string
    maxWidth: string
    color: string
    menuIcon: string
    knowease: {
      title: string
      imgSrc: string
    }
    // easyxplain: {
    //   title: string
    //   imgSrc: string
    // }
  } = {
    height: '20',
    maxWidth: '100',
    color: 'transparent',
    menuIcon: 'mdi-menu',
    knowease: {
      title: '(주)게타(GET-A Inc.)',
      imgSrc: '/img/GET_A_LOGO.png',
    },
    // easyxplain: {
    //   title: '미닛(MEANIIT)',
    //   imgSrc: 'https://dmq1lrjfpg713.cloudfront.net/img/logo.png',
    // },
  }

  @Provide() menuItems: Array<{
    title: boolean
    name: string
    to: string | undefined
  }> = [
    { title: true, name: '게타(GET-A)', to: undefined },
    { title: false, name: '회사 소개', to: '/' },
    { title: false, name: '채용 공고', to: '/recruit' },
    { title: true, name: '미닛', to: undefined },
    { title: false, name: '서비스 소개', to: '/service/meaniit/introduce' },
    {
      title: false,
      name: '프로그램 소개',
      to: '/service/meaniit/extension-meaniit',
    },
    {
      title: false,
      name: '사용자 업적',
      to: '/service/meaniit/achievements',
    },
    { title: false, name: '이용 규정', to: '/service/meaniit/regulations' },
  ]

  // computed
  get onKnowease() {
    const currentRoute: string = this.$route.path
    return (
      currentRoute === '/' ||
      currentRoute === '/recruit' ||
      currentRoute === '/recruit/'
    )
  }

  get isRootRoute() {
    const currentRoute: string | undefined | null = this.$route.name
    return currentRoute === 'index'
  }

  // method
  easterEgg() {
    const text: string = '어떻게 알고 찾았죠...?'
    alert(text)
  }

  toMeaniit() {
    const path = 'https://ko.meaniit.com/'
    window.open(path)
  }
}

export default LayoutDefaultTopBar
</script>

<style scoped>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
.menuTitle {
  font-size: 10px !important;
  color: #2979ff !important;
}
.side-blank {
  padding: 0 250px;
}
.to-white {
  filter: brightness(0) invert(1);
}
</style>
