<template>
  <v-app-bar :color="appBar.color" dense flat absolute>
    <!-- Start: -->
    <v-btn icon color="white" @click.prevent="easterEgg()">
      <v-icon :small="$vuetify.breakpoint.xsOnly">{{ appBar.menuIcon }}</v-icon>
    </v-btn>
    <v-spacer />

    <!-- Start : Knowease image -->
    <v-toolbar-items v-if="onKnowease">
      <v-btn text to="/" active-class="no-active">
        <v-img
          :src="appBar.knowease.imgSrc"
          :alt="appBar.knowease.title"
          :height="appBar.height"
          :max-width="appBar.maxWidth"
          contain
        ></v-img>
      </v-btn>
    </v-toolbar-items>

    <!-- Start : Easyxplain image -->
    <v-toolbar-items v-else>
      <v-btn text active-class="no-active" @click.prevent="notReadyNotice()">
        <v-img
          :src="appBar.easyxplain.imgSrc"
          :alt="appBar.easyxplain.title"
          :height="appBar.height"
          :max-width="appBar.maxWidth"
          contain
        ></v-img>
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
            v-bind="attrs"
            :small="$vuetify.breakpoint.xsOnly"
            v-on="on"
          >
            <v-icon :small="$vuetify.breakpoint.xsOnly">{{
              appBar.menuIcon
            }}</v-icon>
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
            <v-btn v-else :to="item.to" small text active-class="no-active">{{
              item.name
            }}</v-btn>
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
  computed: {
    onKnowease() {
      const currentRoute: string = this.$route.path
      if (currentRoute === '/') {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    easterEgg() {
      const text: string = '어떻게 알고 찾았죠...?'
      alert(text)
    },
    notReadyNotice() {
      const text: string = '본 서비스는 오픈 준비중입니다.'
      alert(text)
    },
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
    easyxplain: {
      title: string
      imgSrc: string
    }
  } = {
    height: '20',
    maxWidth: '100',
    color: 'white',
    menuIcon: 'mdi-menu',
    knowease: {
      title: '쉬운지식',
      imgSrc: '/img/knowease_logo_20210601.png',
    },
    easyxplain: {
      title: 'EASYXPLAIN',
      imgSrc: '/img/EASYXPLAIN_LOGO.png',
    },
  }

  @Provide() menuItems: Array<{
    title: boolean
    name: string
    to: string | undefined
  }> = [
    { title: true, name: '쉬운지식', to: undefined },
    { title: false, name: '회사 소개', to: '/' },
    { title: true, name: 'EASYXPLAIN', to: undefined },
    { title: false, name: '서비스 소개', to: '/service/easyxplain/introduce' },
    { title: false, name: '이용 규정', to: '/service/easyxplain/regulations' },
    {
      title: false,
      name: '사용자 업적',
      to: '/service/easyxplain/achievements',
    },
  ]
}

export default LayoutDefaultTopBar
</script>

<style scoped>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
.menuTitle {
  font-size: 13px;
  color: #64b5f6 !important;
}
</style>
