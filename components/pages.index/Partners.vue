<template>
  <v-col cols="12" justify="center">
    <v-row
      justify="center"
      class="text-sm-h5 text-h6 pa-4"
      style="line-height: 1.8"
    >
      <div class="font-weight-bold pt-2 pb-8">
        {{ t('pages.index.partners.title') }}
      </div>
    </v-row>

    <v-row
      justify="center"
      class="text-sm-h5 text-h6 py-4"
      style="line-height: 1.8"
    >
      <v-col
        v-for="{ name, ci, link } in partners"
        :key="link"
        class="text-center my-8"
      >
        <a :href="link" target="_blank">
          <img
            :src="ci"
            :alt="name"
            :height="setSize.height"
            :width="setSize.width"
          />
        </a>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
const { xs } = useDisplay()
const { t } = useI18n()

const partners = [
  {
    name: '경기도과학진흥원',
    ci: '/img/partners/gbsa.png',
    link: 'https://www.gbsa.or.kr/',
  },
  {
    name: '성균관대학교',
    ci: '/img/partners/성균관대.png',
    link: 'https://www.skku.edu/skku/',
  },
  {
    name: '차의과대학교',
    ci: '/img/partners/차의과대.png',
    link: 'https://www.cha.ac.kr/',
  },
  {
    name: '경민대학교',
    ci: '/img/partners/경민대.png',
    link: 'https://www.kyungmin.ac.kr/homepage/intro.do',
  },
  {
    name: '연성대학교',
    ci: '/img/partners/연성대.png',
    link: 'https://www.yeonsung.ac.kr/sites/ko/index.do',
  },
  // {
  //   name: '소상공인시장진흥공단',
  //   ci: '/img/partners/소상공인.png',
  //   link: 'https://www.semas.or.kr/web/main/index.kmdc',
  // },
]

const setSize = computed(() => {
  return xs.value
    ? { width: '90', height: '30' }
    : { width: '160', height: '40' }
})
</script>

<style></style>
