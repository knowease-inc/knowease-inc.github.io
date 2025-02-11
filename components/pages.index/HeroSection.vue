<template>
  <v-row justify="center" class="px-0">
    <v-card
      width="100%"
      height="100vh"
      class="image-container d-flex flex-column justify-end"
    >
      <!-- Text Contents -->
      <v-col cols="11" sm="10" lg="10" offset="1" class="px-sm-4 text-box">
        <p :style="upperTextStyle" v-html="upperTextContent" />
        <p
          :style="lowerTextStyle"
          class="mt-sm-8 mt-4"
          v-html="lowerTextContent"
        />
      </v-col>
    </v-card>
  </v-row>
</template>

<script setup>
const { xs, smAndUp, mdAndUp, lgAndUp } = useDisplay()
const { t, locale } = useI18n()

// Upper Text Style
const upperTextStyle = computed(() => ({
  lineHeight: xs.value ? '1.4' : '1.2',
  fontSize: xs.value ? '2.5rem' : '5.6rem',
  fontWeight: '700',
}))

// Lower Text Style
const lowerTextStyle = computed(() => ({
  lineHeight: '1.4',
  fontSize: xs.value ? '1.15rem' : '2rem',
  fontWeight: '700',
  paddingBottom: xs.value ? '30%' : '11%',
}))

// Lower Text Content with Specific Breaks
const upperTextContent = computed(() => {
  const text = t('pages.index.hero.upper')

  return text.replace('st ', 'st<br />')
})

// Lower Text Content with Specific Breaks
const lowerTextContent = computed(() => {
  const text = t('pages.index.hero.lower')

  if (xs.value) {
    // 예: 특정 단어에서 줄바꿈 처리

    return locale.value === 'EN'
      ? text.replace('technology,', 'technology,<br />')
      : text.replace('곳으로', '곳으로<br />')
  }

  return text
})
</script>

<style scoped>
.text-box {
  color: white;
  height: auto; /* 내부 콘텐츠 크기만큼 */
  max-height: fit-content; /* 높이 제한 */
}

.image-container {
  background: url('/img/new/heroImg.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
