<template>
  <v-container class="d-flex flex-column" fluid>
    <!-- ### Start : Top ### -->
    <v-row justify="center">
      <v-col cols="12" sm="10" lg="8">
        <TopIntro />
      </v-col>
    </v-row>

    <!-- ### Start : Why Service ### -->
    <v-row
      justify="center"
      :class="[
        isDark
          ? 'bg-color-dark-mode'
          : smAndUp
            ? 'bg-color custom-background'
            : 'bg-color py-16',
      ]"
    >
      <v-col class="d-flex align-center" cols="12" sm="8">
        <Differentiation />
      </v-col>
    </v-row>

    <!-- ### Start :Usage ### -->
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8">
        <HowToUseCards :class="smAndUp ? 'usage-bg px-4' : ''" />
      </v-col>
    </v-row>

    <!-- ### Start : Flaticon attribute ### -->
    <v-row justify="center">
      <v-col cols="8">
        <v-card flat tile class="my-10">
          <v-card-text class="text-center">
            <div>
              Icons on this page made by
              <a href="https://www.freepik.com" title="Freepik">Freepik</a>,
              <a
                href="https://www.flaticon.com/authors/eucalyp"
                title="Eucalyp"
              >
                Eucalyp </a
              >,
              <a
                href="https://www.flaticon.com/authors/payungkead"
                title="Payungkead"
              >
                Payungkead </a
              >,
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              >
                Pixel perfect </a
              >,
              <a
                href="https://www.flaticon.com/authors/dmitri13"
                title="dmitri13"
              >
                dmitri13
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import TopIntro from '~/components/pages.service.meaniit.introduce/TopIntro.vue'
import HowToUseCards from '~/components/pages.service.meaniit.introduce/HowToUseCards.vue'
import Differentiation from '~/components/pages.service.meaniit.introduce/Differentiation.vue'

const { xs, smAndUp } = useDisplay()
const { t, locale } = useI18n()
const { global: theme } = useTheme()

const isDark = computed(() => theme.name.value === 'dark')

// const headTitle = computed(() => t('meaniit.meta.title'))
// const description = computed(() => t('meaniit.meta.description'))

// const ogDescription = description.value
// const ogImgURL = 'https://dmq1lrjfpg713.cloudfront.net/og_20231209.png'

// useHead({
//   title: headTitle.value,
//   meta: [
//     // 기본 메타 태그
//     {
//       hid: 'description',
//       name: 'description',
//       content: description.value,
//     },

//     // Open Graph 설정
//     { hid: 'og:title', property: 'og:title', content: headTitle.value, },
//     {
//       hid: 'og:description',
//       property: 'og:description',
//       content: ogDescription,
//     },
//     { hid: "og:url", property: "og:url", content: window.location.href },

//     // Twitter 카드 설정
//     {
//       name: 'twitter:title',
//       content: headTitle.value,
//     },
//     {
//       name: 'twitter:description',
//       content: ogDescription,
//     },
//   ],
// })
</script>

<style scoped>
.differ-padding {
  padding: 100px 0 30px 0;
}

.custom-background {
  min-height: 120vh;

  /* 이미지 관련 */
  position: relative;
  background-image: url('/img/intro_top.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto 32%;
}

@media (min-width: 600px) {
  /* smAndUp 기준 */
  .custom-background,
  bg-color-dark-mode {
    min-height: 200vh;
  }

  .usage-bg {
    height: 130vh;
  }
}

@media (min-width: 960px) {
  /* mdAndUp 기준 */
  .custom-background,
  .bg-color-dark-mode {
    min-height: 100vh;
  }

  .usage-bg {
    height: 80vh;
  }
}

.bg-color {
  background-color: #e6e9f0;
}

.bg-color-dark-mode {
  background-color: #5252525c;
}

.usage-bg {
  background-color: #3746fb;
  height: 200vh;
}
</style>
