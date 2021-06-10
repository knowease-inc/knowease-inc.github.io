<template>
  <v-card :height="height" flat>
    <!--### Start: breakpoint smAndUp (800px higher) ###-->
    <v-img
      v-if="$vuetify.breakpoint.smAndUp === true"
      src="https://cdn.pixabay.com/photo/2017/03/03/13/56/key-2114046_960_720.jpg"
      :height="height"
      class="d-flex align-center"
    >
      <v-container>
        <v-row justify="start">
          <v-card
            outlined
            flat
            max-width="345"
            :height="height - 20"
            class="my-0 ml-5 pa-0"
          >
            <!-- Start: Image -->
            <v-card-actions class="mt-4">
              <v-btn text :href="content.href">
                <v-img
                  src="/img/EASYXPLAIN_LOGO.png"
                  height="25"
                  max-width="100"
                  contain
                ></v-img>
              </v-btn>
            </v-card-actions>

            <!-- Start: Text -->
            <v-card-title class="d-flex align-center expCard">
              <span class="mr-2">
                {{ content.name }}
              </span>
              <v-btn
                text
                x-small
                :color="linkBtnColor"
                :href="content.shortcut.href"
              >
                {{ content.shortcut.name }}
              </v-btn>
              <v-btn
                text
                x-small
                :color="linkBtnColor"
                :to="content.introduce.to"
              >
                {{ content.introduce.name }}
              </v-btn>
              <v-btn
                text
                x-small
                :color="linkBtnColor"
                :to="content.regulations.to"
              >
                {{ content.regulations.name }}
              </v-btn>
            </v-card-title>
            <v-card-subtitle>{{ content.explanation }}</v-card-subtitle>
          </v-card>
        </v-row>
      </v-container>
    </v-img>

    <!--### Start: breakpoint xsOnly ###-->
    <v-container v-else>
      <v-row justify="center">
        <v-card outlined flat max-width="345" class="my-0 pa-0">
          <!-- Start: Image -->
          <v-card-actions class="d-flex justify-center mt-4">
            <v-btn text :href="content.href">
              <v-img
                src="/img/EASYXPLAIN_LOGO.png"
                height="25"
                max-width="100px"
                contain
              ></v-img>
            </v-btn>
          </v-card-actions>

          <!-- Start: Text -->
          <v-card-title class="d-flex align-center expCard">
            <span class="mr-2">
              {{ content.name }}
            </span>
            <v-btn
              text
              x-small
              :color="linkBtnColor"
              :href="content.shortcut.href"
            >
              {{ content.shortcut.name }}
            </v-btn>
            <v-btn
              text
              x-small
              :color="linkBtnColor"
              :to="content.introduce.to"
            >
              {{ content.introduce.name }}
            </v-btn>
            <v-btn
              text
              x-small
              :color="linkBtnColor"
              :to="content.regulations.to"
            >
              {{ content.regulations.name }}
            </v-btn>
          </v-card-title>
          <v-card-subtitle>{{ content.explanation }}</v-card-subtitle>
        </v-card>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesIndexServices extends Vue {
  @Provide() height: string = '200'
  @Provide() linkBtnColor: string = 'primary'
  @Provide() content: {
    name: string
    explanation: string
    href: string
    shortcut: { name: string; href: string }
    introduce: { name: string; to: string }
    regulations: { name: string; to: string }
  } = {
    name: 'EASYXPLAIN',
    explanation:
      '짧고 쉬운 전문/기술용어 설명과 모든 가이드를 얻거나 제공하고 쉽게 설명하는 능력을 인정 받는 플랫폼',
    href: 'https://frontend.easyxplain.com/',
    shortcut: {
      name: '바로가기',
      href: 'https://frontend.easyxplain.com/',
    },
    introduce: {
      name: '소개',
      to: '/service/easyxplain/introduce',
    },
    regulations: {
      name: '규정',
      to: '/service/easyxplain/regulations',
    },
  }
}

export default PagesIndexServices
</script>

<style scoped>
.expCard {
  font-size: 16px !important;
  font-weight: 600 !important;
  color: rgba(76, 76, 76, 1) !important;
}
</style>
