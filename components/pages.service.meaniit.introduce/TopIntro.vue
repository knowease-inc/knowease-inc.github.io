<template>
  <v-row
    align="end"
    align-sm="center"
    no-gutters
    :style="{
      'font-size': lgAndUp
        ? '4rem'
        : smAndUp
          ? '3rem'
          : mdAndUp
            ? '3.5rem'
            : '1.6rem',
      height: smAndUp ? '100vh' : mdAndUp ? '100vh' : '120vh',
    }"
  >
    <v-col
      v-if="smAndUp"
      cols="12"
      md="10"
      class="d-md-flex align-center justify-center"
    >
      <v-col
        cols="9"
        offset-sm="2"
        offset-md="0"
        class="mr-n9"
        style="z-index: 100"
      >
        <div class="d-md-flex bounce">
          {{ t('pages.introduce.topIntro.heading.main') }}
          <v-img
            :src="imgs.logo"
            :max-width="lgAndUp ? '180' : mdAndUp ? '140' : '120'"
            min-width="80"
            class="bounce ml-sm-4 ml-2 my-0 my-sm-4"
          />
        </div>
        <div class="bounce">
          <span class="font-weight-black">
            {{ t('pages.introduce.topIntro.heading.sub') }}
          </span>
        </div>

        <v-col
          cols="12"
          style="font-size: 1.4rem; color: #6b7684"
          class="font-weight-bold"
        >
          <p class="my-8" v-html="t('pages.introduce.topIntro.text.first')" />
          <p class="my-8" v-html="t('pages.introduce.topIntro.text.second')" />
        </v-col>
        <v-btn
          :href="t('pages.introduce.topIntro.button.link')"
          color="#3746fb"
          size="large"
        >
          {{ t('pages.introduce.topIntro.button.label') }}
        </v-btn>
      </v-col>

      <v-col
        offset-sm="2"
        offset-md="0"
        sm="8"
        md="4"
        class="ml-md-n6 mt-sm-n9"
        align-self="start"
      >
        <video
          ref="videoRef"
          :src="imgs.video"
          autoplay
          playsinline
          loop
          muted
          class="responsive-image"
        />
      </v-col>
    </v-col>

    <v-col v-if="xs" cols="12" class="d-flex align-end">
      <v-col cols="12">
        <div class="d-flex bounce">
          {{ t('pages.introduce.topIntro.heading.main') }}

          <v-img :src="imgs.logo" max-width="90" class="bounce ml-4" />
        </div>
        <div class="bounce">
          <span class="font-weight-black">
            {{ t('pages.introduce.topIntro.heading.sub') }}
          </span>
        </div>

        <div style="font-size: 1.2rem; color: #6b7684" class="font-weight-bold">
          <p class="my-8" v-html="t('pages.introduce.topIntro.text.first')" />
          <p class="my-8" v-html="t('pages.introduce.topIntro.text.second')" />
        </div>

        <v-btn color="#3746fb" href="https://ko.meaniit.com">
          {{ t('pages.introduce.topIntro.button.label') }}
        </v-btn>

        <div class="d-flex justify-center">
          <video
            ref="videoRef"
            :src="imgs.video"
            autoplay
            playsinline
            loop
            muted
            style="height: 350px"
          />
        </div>
      </v-col>
    </v-col>
  </v-row>
</template>

<script setup>
const { xs, smAndUp, mdAndUp, lgAndUp } = useDisplay()
const { t } = useI18n()

const imgs = {
  topIntro: '/img/intro_top.png',
  logo: 'https://dmq1lrjfpg713.cloudfront.net/img/logo.png',
  duplication: '/img/duplication.png',
  badge: '/img/badge.png',
  video: '/img/anaysis.mp4',
}

const videoRef = ref([])
const isDarkMode = ref(true)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light' // 기본값 'light'
  isDarkMode.value = savedTheme === 'dark'

  if (videoRef.value) {
    videoRef.value.style.filter = isDarkMode.value
      ? 'invert(0.9) brightness(0.8)'
      : 'none'
  }
})
</script>

<style scoped>
.main-font-size {
  font-size: 28px;
}
.main-font-size-xs {
  font-size: 20px;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
  top: 75%;
  width: 100%;
}

.opacity-img {
  opacity: 30%;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-15px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-7px);
  }
}

.bounce {
  animation: bounce 1s ease 1;
}

/* 기본 크기 설정 */
.responsive-image {
  max-width: 100%;
  max-height: 100%;
}

@media (min-width: 600px) {
  /* smAndUp 기준 */
  .responsive-image {
    max-width: 100%;
  }
}

@media (min-width: 960px) {
  /* mdAndUp 기준 */
  .responsive-image {
    max-width: 220%;
    max-height: 120%;
  }
}
</style>
