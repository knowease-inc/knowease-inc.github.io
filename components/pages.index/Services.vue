<template>
  <v-card
    :height="setContainerHeight"
    class="d-flex flex-sm-row align-sm-start justify-sm-center px-sm-9 my-sm-7 flex-column align-center justify-start rounded-xl overflow-hidden pt-7 px-1"
  >
    <v-card max-width="345" class="my-sm-auto my-0 mr-sm-9 pa-0 pb-3" flat>
      <v-card-title class="font-weight-bold mb-sm-1 mb-2 pt-0">
        미닛
      </v-card-title>

      <v-card-subtitle
        class="expCardSubTitle"
        :class="$vuetify.breakpoint.smAndUp ? '' : 'text-body-2'"
        :style="{ ineHeight: $vuetify.breakpoint.smAndUp ? '1.4' : '' }"
      >
        {{ content.explanation }}
      </v-card-subtitle>

      <v-card-actions
        v-if="$vuetify.breakpoint.smAndUp"
        class="d-flex align-center"
      >
        <v-btn
          :disabled="content.shortcut.href === undefined ? true : false"
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
        <v-btn
          :color="linkBtnColor"
          :to="content.regulations.to"
          :style="btnInServiceCard"
          outlined
          rounded
          small
          class="px-4"
        >
          {{ content.regulations.name }}
        </v-btn>
      </v-card-actions>

      <v-card-title
        v-if="$vuetify.breakpoint.xsOnly"
        class="d-flex align-center"
      >
        <v-btn
          :disabled="content.shortcut.href === undefined ? true : false"
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
          rounded
          :color="linkBtnColor"
          :to="content.introduce.to"
          :style="btnInServiceCard"
          class="px-7"
        >
          {{ content.introduce.name }}
        </v-btn>

        <v-spacer />

        <v-btn
          outlined
          rounded
          :color="linkBtnColor"
          :to="content.regulations.to"
          :style="btnInServiceCard"
          class="px-9"
        >
          {{ content.regulations.name }}
        </v-btn>
      </v-card-title>
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
</template>

<script>
export default {
  data() {
    return {
      linkBtnColor: '#2979ff',
      content: {
        name: '미닛',
        explanation:
          '자료조사부터 보고서 초안 작성, 완성까지 함께하는 GPT 기반 인공지능(AI, Artificial Intelligence) 서비스',
        href: undefined,
        shortcut: {
          name: '(준비중)', // '바로가기'
          href: undefined, // 'https://ko.meaniit.com/researcher',
        },
        introduce: {
          name: '서비스 소개',
          to: '/service/meaniit/introduce',
        },
        regulations: {
          name: '이용규정',
          to: '/service/meaniit/regulations',
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
</style>
