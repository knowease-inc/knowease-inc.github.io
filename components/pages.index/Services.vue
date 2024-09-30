<template>
  <v-row>
    <v-col cols="12" sm="9">
      <v-card
        :height="setContainerHeight"
        class="d-flex flex-sm-row align-sm-start justify-sm-center px-sm-9 my-sm-7 flex-column align-center justify-start rounded-xl overflow-hidden pt-7 px-1"
      >
        <v-card max-width="345" class="my-sm-auto my-0 mr-sm-9 pa-0 pb-3" flat>
          <v-card-title class="font-weight-bold mb-sm-1 mb-2 pt-0">
            {{ content.name }}
          </v-card-title>

          <v-card-subtitle
            class="expCardSubTitle"
            :class="$vuetify.breakpoint.smAndUp ? '' : 'text-body-2'"
            :style="{ lineHeight: $vuetify.breakpoint.smAndUp ? '1.4' : '' }"
          >
            {{ content.explanation }}
          </v-card-subtitle>

          <v-card-actions
            v-if="$vuetify.breakpoint.smAndUp"
            class="d-flex align-center"
          >
            <v-btn
              :disabled="!content.shortcut.href"
              :dark="!!content.shortcut.href"
              :elevation="0"
              :color="linkBtnColor"
              :href="content.shortcut.href"
              :style="btnInServiceCard"
              rounded
              small
              class="px-4"
            >
              {{ content.shortcut.name }}
            </v-btn>
            <v-btn
              :color="linkBtnColor"
              :to="content.introduce.to"
              :style="btnInServiceCard"
              outlined
              rounded
              small
              class="px-4"
            >
              {{ content.introduce.name }}
            </v-btn>
          </v-card-actions>

          <v-card-actions
            v-if="$vuetify.breakpoint.xsOnly"
            class="d-flex flex-column"
          >
            <v-btn
              :disabled="!content.shortcut.href"
              :dark="!!content.shortcut.href"
              :elevation="0"
              :color="linkBtnColor"
              :href="content.shortcut.href"
              :style="btnInServiceCard"
              block
              rounded
              class="mb-2"
            >
              {{ content.shortcut.name }}
            </v-btn>
            <v-btn
              outlined
              :color="linkBtnColor"
              :to="content.introduce.to"
              :style="btnInServiceCard"
              block
              rounded
              class="px-7 ml-n1"
            >
              {{ content.introduce.name }}
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Start: Image -->
        <v-img
          src="/img/mobile_img.png"
          max-width="200"
          class="mt-3 position-relative"
        >
          <v-img
            src="https://dmq1lrjfpg713.cloudfront.net/img/logo.png"
            height="30"
            max-width="100"
            contain
            class="inside-logo-img"
          />
        </v-img>
      </v-card>
    </v-col>

    <v-col cols="12" sm="3">
      <v-card
        :height="setSecondaryCardHeight"
        class="d-flex flex-column align-start justify-center rounded-xl my-sm-7 pt-7 px-3"
      >
        <v-card-title class="font-weight-bold mb-2 pt-0 pl-4">
          {{ contentSecond.name }}
        </v-card-title>

        <v-card-subtitle
          class="expCardSubTitle"
          :class="$vuetify.breakpoint.smAndUp ? '' : 'text-body-2 '"
          :style="{ lineHeight: $vuetify.breakpoint.smAndUp ? '1.4' : '' }"
        >
          {{ contentSecond.explanation }}
        </v-card-subtitle>

        <v-card-actions
          v-if="$vuetify.breakpoint.smAndUp"
          class="d-flex align-center ml-1"
        >
          <v-btn
            :color="linkBtnColor"
            :to="contentSecond.introduce.to"
            :style="btnInServiceCard"
            outlined
            rounded
            small
            class="px-4"
            :disabled="!contentSecond.introduce.to"
          >
            {{ contentSecond.introduce.name }}
          </v-btn>
        </v-card-actions>

        <v-card-actions v-if="$vuetify.breakpoint.xsOnly" class="full-width">
          <v-btn
            outlined
            :color="linkBtnColor"
            :to="contentSecond.introduce.to"
            :style="btnInServiceCard"
            block
            rounded
            class="px-7 ml-n1"
            :disabled="!contentSecond.introduce.to"
          >
            {{ contentSecond.introduce.name }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      linkBtnColor: '#2979ff',
      content: {
        name: 'Meaniit',
        explanation:
          '자료조사부터 보고서 초안 작성, 완성까지 함께하는 AI 솔루션 서비스',
        shortcut: {
          name: '바로가기',
          href: 'https://ko.meaniit.com/',
        },
        introduce: {
          name: '서비스 소개',
          to: '/service/meaniit/introduce',
        },
      },
      contentSecond: {
        name: '교육 서비스',
        explanation:
          '알기 쉬운 AI, 디지털 전환(DX, Digital Transformation) 온·오프라인 교육, 세미나, 컨설팅 제공',
        introduce: {
          name: 'Contact',
          to: '',
        },
      },
      btnInServiceCard: {
        minWidth: 0,
        paddingLeft: 0,
      },
    }
  },
  computed: {
    setContainerHeight() {
      return this.$vuetify.breakpoint.xsOnly ? '450' : '245'
    },
    setSecondaryCardHeight() {
      return this.$vuetify.breakpoint.xsOnly ? '200' : '245'
    },
  },
}
</script>

<style scoped>
.position-relative {
  position: relative;
}
.inside-logo-img {
  position: absolute;
  left: 27%;
  top: 22%;
}

.full-width {
  width: 100%;
}
</style>
